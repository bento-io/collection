(function(window, document) {
  if(window.ribbonModalLoaded) {
    //avoid issues if script is loaded twice
  	return;
  }

  window.ribbonModalLoaded = true;

  var ajax_interval;
  // var iframes_loaded = new Array();
  var hide_iframe_submitted = false;
  var product_id;

  window.addEventListener(
                'message',
                function(e) {
                    if (e.data.lastIndexOf("iframe_loaded_") == 0){
                       product_id = e.data.split('_')[2];
                       // iframes_loaded[product_id] = true;
                       show_iframe("ribbon_iframe_"+product_id);
                    }
                    else if (e.data.lastIndexOf("hide_iframe_") == 0) {

                      if (hide_iframe_submitted == false) {
                        product_id = e.data.split('_')[2];
                        hide_iframe_submitted = true;
                        hide_iframe('ribbon_iframe_'+product_id);
                        setTimeout(function(){hide_iframe_submitted = false;},1000);
                      }
                    }
                    // iframe.style.display = 'none';
                },
                false
            );

  if(window.addEventListener) {
	window.addEventListener('load', onload, false);
  }
  else {
	window.attachEvent('onload', onload);
  }

  function onload() {
    ribbon_link_types = ["http://ribbon.co/","http://www.ribbon.co/","https://www.ribbon.co/","http://www.rbn.co/","https://rbn.co/","http://rbn.co","https://www.rbn.co"];
    //testing

    var links = document.getElementsByTagName("a");

    for (var x = 0; x < links.length; x++) {
      var link = links[x];
      var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
      var href_text = links[x].getAttribute("href");
      console.log("ios was: ")
      console.log(iOS)
      console.log(navigator.userAgent)
      if (iOS==true) {
                var curClass = link.getAttribute('class') || '';
                console.log("in ios subroutine")
                if(!checkPlainClass(link) && curClass!='noribbon') {
                  link.setAttribute('class', 'ribbon-modal-btn');
                }
                link.addEventListener('onclick', function(e) { window.location=link;
                     console.log("IOS detected"); } );
                //link.href='#';
                continue;
       }
      if (href_text != null) {

        if (iOS==false && href_text.match(/\//)) {
          var product_id = href_text.split("/").pop();

      	  for(var linkTypeIdx = 0; linkTypeIdx < ribbon_link_types.length; linkTypeIdx++) {
      		  var linkType = ribbon_link_types[linkTypeIdx];
      		  if (href_text.lastIndexOf(linkType) == 0)
            {
              link.setAttribute("product_id",product_id);

        			if (iOS==false && link.addEventListener) {
        			  link.href='#';
        			  addAjaxLoader(link.getAttribute("product_id"));

                link.addEventListener('click',function(e) {
        				    addIframe(this.getAttribute("product_id"));
                },false);
        			  //if the link has the plain class set, we don't want
        			  //to apply the default button stylings
        			  if(!checkPlainClass(link)) {
        				  //need to append the class to the old one to not overwrite the class attribute
        				  var curClass = link.getAttribute('class') || '';
        				  link.setAttribute('class', curClass + ' ribbon-modal-btn');
        			  }
        			  //attachEvent for IE pre 9
        			}
              else if (iOS==false && link.attachEvent) {
                  link.attachEvent('onclick',addIframe);
        			}

      		  }
      	  }
        }
      }
    }

    var customLink = get_custom_css();
    inject_styles(customLink);
  }

  function checkPlainClass(link) {
	var classes = (link.getAttribute('class') || '').split(/ /g);
	for(var i = 0; i < classes.length; i++) {
		if(classes[i] == 'ribbon-modal-plain') {
			return true;
		}
	}

	return false;
  }

  function addAjaxLoader(product_id) {
    if (document.getElementById("ribbon_spinner_"+product_id) == null) {
      var ajax_holder = document.createDocumentFragment();
      var ajax_div = document.createElement("div");
      ajax_div.id = 'ribbon_spinner_'+product_id;
      ajax_div.setAttribute('class','ribbon-spinner');
      ajax_div.innerHTML = '<img style="display: none" class="ribbon-spinner-gif" src="https://www.ribbon.co/assets/modal_spinner.gif"/>';
      ajax_holder.appendChild(ajax_div);

      document.body.insertBefore(ajax_holder,document.body.childNodes[0]);
    }
  }

  function show_ajax_loader(ajax_id) {
    console.log('show ajax loader');
    var ajax_loader = document.getElementById(ajax_id);
    var ajax_opacity_level = 0;
    var fadeDuration = 1e3;
    var spinnergifs = document.getElementsByClassName('ribbon-spinner-gif');

    for (var x = 0; x < spinnergifs.length; x++) {
      console.log('spinnergif');
      console.log(spinnergifs[x]);
      spinnergifs[x].style.display = "block";
    }
    ajax_interval = setInterval(function() {
      ajax_opacity_level += 100 / fadeDuration;
	  ajax_opacity_setter(ajax_loader,ajax_opacity_level);
	  if(ajax_opacity_level >= 1) {
		  ajax_opacity_setter(ajax_loader,1);
		  clearInterval(ajax_interval);
	  }
    }, fadeDuration / 100);
  }

  function hide_ajax_loader() {
      console.log('hide ajax loader test');
      var spinners = document.getElementsByClassName("ribbon-spinner");
      for (var x = 0; x < spinners.length; x++) {
        spinners[x].style.display = "none"
      }
      // spinners[0].style.display = "none";
  }

  function addIframe(product_id) {
    // console.log('show ajax loader from');
    show_ajax_loader("ribbon_spinner_"+product_id);
    if (document.getElementById("ribbon_iframe_"+product_id) == null) {
      var iframe_holder = document.createDocumentFragment();
      var iframe_div = document.createElement("div");
      iframe_div.innerHTML = '<iframe class="" id="ribbon_iframe_'+ product_id + '" src="http://www.ribbon.co/' + product_id + '?modal=true" allowtransparency="true" width="100%" height="100%" style="position:fixed; overflow: scroll; z-index: 999999999; top: 0; bottom: 0; right: 0; left: 0; border: none; display:none;"></iframe>';
      iframe_holder.appendChild(iframe_div);
      document.body.insertBefore(iframe_holder,document.body.childNodes[0]);
    }
    else {
      //this implies that the iframe was already created/loaded so we do not
      //have to create it or wait for it to load to show it.
      show_iframe("ribbon_iframe_"+product_id);
    }
  }

  function show_iframe(iframe_id) {
    var iframe = document.getElementById(iframe_id);
    var opacity_level = 0;
    var fadeDuration = 1e3;
    var interval = setInterval(function() {
      opacity_level += 100 / fadeDuration;
	  opacity_setter(iframe,opacity_level);
	  if(opacity_level >= 1) {
		  opacity_setter(iframe,1);
		  clearInterval(interval);
	  }
    }, fadeDuration / 100);
    var hide_ajax = setInterval(function() {
      if (opacity_level > 0.10) {
        hide_ajax_loader();
        clearInterval(ajax_interval);
        clearInterval(hide_ajax);
      }
      // console.log(opacity_level);
    },10);
    // hide_ajax_loader_test()
    }

    function hide_iframe(iframe_id) {
      var iframe = document.getElementById(iframe_id);
      var opacity_level = 1;
      var fadeDuration = 1e3;
      var interval = setInterval(function() {
        opacity_level -= 100 / fadeDuration;
		opacity_setter(iframe, opacity_level);
		if(opacity_level <= 0) {
			opacity_setter(iframe, 0);
			iframe.style.display = "none";
			clearInterval(interval);
		}
      }, fadeDuration / 100);
    }

    function ajax_opacity_setter(element, ajax_o_level) {
      element.style.display = "block";
      element.style.opacity = ajax_o_level;
      element.style.MozOpacity = ajax_o_level;
      element.style.KhtmlOpacity = ajax_o_level;
      element.style.filter = "alpha(opacity="+ ajax_o_level * 100 + ");";
    }

    function opacity_setter(element, o_level) {
      // console.log('set iframe opacity');
      element.style.display = "block";
      element.style.opacity = o_level;
      element.style.MozOpacity = o_level;
      element.style.KhtmlOpacity = o_level;
      element.style.filter = "alpha(opacity="+ o_level * 100 + ");";
    }

    function get_custom_css() {
      var productUrl = getProductUrl();
      var xhr = new XMLHttpRequest();

      // Don't add the src if undefined!
      if( typeof productUrl != 'undefined' ) {
        var script = document.createElement('script');
        script.src = 'https://www.ribbon.co/get_uploaded_css?product_url=' + productUrl + '&callback=uploaded_css_parse';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }

    function getProductUrl() {
      // Get all the link
      var links = document.getElementsByTagName("a");

      // Go through links
      for(var i = 0; i < links.length; i++) {
        var link = links[i];
        if(link.hasAttribute("product_id") && link.textContent === "Buy Now") {
          var productUrl = link.getAttribute("product_id");

          return productUrl;
        }
      }

      // No URL found
      return;
    }

    function inject_styles(link) {

      var style = document.createElement('link');
      style.type = 'text/css';
      style.setAttribute('media','all');
      style.setAttribute('rel','stylesheet');
      style.setAttribute('href', 'https://www.ribbon.co/assets/modal.css');
      document.getElementsByTagName("head")[0].appendChild(style);

      // Add custom stylesheet
      if( typeof link !== 'undefined' ) {
        var custom = document.createElement('link');
        custom.type = 'text/css';
        custom.setAttribute('media','all');
        custom.setAttribute('rel','stylesheet');
        custom.setAttribute('href', link);
        document.getElementsByTagName("head")[0].appendChild(custom);
      }
    }
})(window, document);

// JSONP callback
function uploaded_css_parse(data) {
  inject_styles(data);
}

function inject_styles(link) {

  var style = document.createElement('link');
  style.type = 'text/css';
  style.setAttribute('media','all');
  style.setAttribute('rel','stylesheet');
  style.setAttribute('href', 'https://www.ribbon.co/assets/modal.css');
  document.getElementsByTagName("head")[0].appendChild(style);

  // Add custom stylesheet
  if( typeof link !== 'undefined' && link.url != null ) {
    var custom = document.createElement('link');
    custom.type = 'text/css';
    custom.setAttribute('media','all');
    custom.setAttribute('rel','stylesheet');
    custom.setAttribute('href', link.url);
    document.getElementsByTagName("head")[0].appendChild(custom);
  }
}
