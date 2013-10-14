// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);

var app = angular.module('myApp', []);

/* Key up event */

app.directive('onKeyupFn', function() {
    return function(scope, elm, attrs) {
        //Evaluate the variable that was passed
        //In this case we're just passing a variable that points
        //to a function we'll call each keyup
        var keyupFn = scope.$eval(attrs.onKeyupFn);
        elm.bind('keyup', function(evt) {
            //$apply makes sure that angular knows 
            //we're changing something
            scope.$apply(function() {
                keyupFn.call(scope, evt.which);
            });
        });
    };
});

/* Focus and blur events */

app.directive('ngFocus', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngFocus']);
    element.bind('focus', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);
 
app.directive('ngBlur', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngBlur']);
    element.bind('blur', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);

var CONTENT_BACKUP=[{name:"html",description:"Beginners start here! The very basics of putting something on a webpage",$then:["css","javascript","angular","php"],home:"http://developer.mozilla.org/en-US/docs/Web/HTML",links:[{name:"Codeacademy",url:"http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b"},{name:"HTML Dog",url:"http://htmldog.com/guides/html/beginner/"},{name:"HTML5 Doctor",url:"http://html5doctor.com/"},{name:"Dash",url:"https://dash.generalassemb.ly/projects"},
{name:"Treehouse",url:"http://teamtreehouse.com/library"}]},{name:"css",description:"Styling your webpage",$then:["javascript","less","sass","bootstrap"],home:"http://developer.mozilla.org/en-US/docs/Web/CSS",links:[{name:"Codeacademy",url:"http://www.codecademy.com/courses/web-beginner-en-TlhFi/0/1?curriculum_id=50579fb998b470000202dc8b"},{name:"HTML Dog",url:"http://htmldog.com/guides/css/beginner/"},{name:"Treehouse - CSS Foundations",url:"http://teamtreehouse.com/library/websites/css-foundations-2"}]},
{name:"javascript",description:"Make your pages interactive",$then:"python jquery mongo json node angular underscore ember backbone sugar coffeescript".split(" "),home:"http://developer.mozilla.org/en-US/docs/Web/JavaScript",links:[{name:"Codeacademy",url:"http://www.codecademy.com/courses/getting-started-v2/0/1?curriculum_id=506324b3a7dffd00020bf661"},{name:"Learn JS",url:"http://www.learn-js.org/"},{name:"Learn X in Y Minutes",url:"http://learnxinyminutes.com/docs/javascript/"},{name:"Treehouse - JavaScript Foundations",
url:"http://teamtreehouse.com/library/websites/javascript-foundations"}]},{name:"json",description:"How data is sent between applications",$then:["mongo","http","jquery","rest","xml"],home:"http://www.json.org/",links:[{name:"What is JSON?",url:"http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/"},{name:"Treehouse - Getting data from the web",url:"http://teamtreehouse.com/library/ios-development/build-a-blog-reader-iphone-app/getting-data-from-the-web"}]},{name:"rest",description:"A way to architecture your applications around verbs and resources",
home:"",$then:["json","xml","http"],links:[{name:"Designing HTTP Interfaces and RESTful Web Services",url:"http://munich2012.drupal.org/program/sessions/designing-http-interfaces-and-restful-web-services.html"},{name:"White House Web API Standards",url:"https://github.com/WhiteHouse/api-standards"},{name:"Architectural Styles and the Design of Network-based Software Architectures",url:"http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm"}]},{name:"jquery",description:"Control the DOM with javascript",
$then:"python ruby node angular backbone ember sugar coffeescript".split(" "),home:"http://jquery.com/",links:[{name:"jQuery in 30 Minutes",url:"http://highoncoding.com/Videos/537_Extended_Screencast_on_JQuery_Whole_38_Minutes_.aspx"},{name:"Codeacademy",url:"http://www.codecademy.com/courses/web-beginner-en-bay3D/0/1?curriculum_id=50a3fad8c7a770b5fd0007a1"},{name:"Treehouse - Build an Interactive Website",url:"http://teamtreehouse.com/library/websites/build-an-interactive-website"}]},{name:"python",
description:"A programming language to easily pick up",$then:"flask django tornado mongo heroku ruby node".split(" "),home:"http://www.python.org/",links:[{name:"Intro to Computer Science",url:"https://www.udacity.com/course/cs101"},{name:"Learn Python",url:"http://www.learnpython.org/"},{name:"Learn X in Y Minutes",url:"http://learnxinyminutes.com/docs/python/"},{name:"New Coder",url:"http://newcoder.io"}]},{name:"flask",description:"A basic microframework for python on the web",$then:["tornado",
"mongo","django","heroku","memcached"],home:"http://flask.pocoo.org/",links:[{name:"Documentation",url:"http://flask.pocoo.org/docs/"}]},{name:"django",description:"A popular web framework for python",$then:["tornado","mongo","flask","heroku","memcached"],home:"http://www.djangoproject.com",links:[{name:"Want to Learn Django?",url:"http://elweb.co/want-to-learn-django-start-here/"},{name:"Documentation",url:"https://docs.djangoproject.com/en/1.5/"}]},{name:"tornado",description:"An asynchronous microframework for python on the web",
$then:["flask","mongo","heroku","django","memcached"],home:"http://www.tornadoweb.org/en/stable/",links:[{name:"Documentation",url:"http://www.tornadoweb.org/en/stable/documentation.html"}]},{name:"ruby",description:"An easy, expressive and dynamic scripting language",$then:["rails","heroku","python"],home:"http://www.ruby-lang.org/en/",links:[{name:"Try Ruby",url:"http://tryruby.org/levels/1/challenges/0"},{name:"Learn X in Y Minutes",url:"http://learnxinyminutes.com/docs/ruby/"},{name:"Learn Ruby the Hard Way",
url:"http://ruby.learncodethehardway.org/"},{name:"Treehouse - Ruby Foundations",url:"http://teamtreehouse.com/library/programming/ruby-foundations"}]},{name:"rails",description:"An awesome web framework for ruby",$then:"heroku ruby coffeescript less sass sql http".split(" "),home:"http://rubyonrails.org/",links:[{name:"What is Ruby on Rails?",url:"http://railsapps.github.io/what-is-ruby-rails.html"},{name:"Recommendations for a Rails Tutorial",url:"https://tutorials.railsapps.org/rails-tutorial"},
{name:"The Best Way to Learn Rails",url:"http://net.tutsplus.com/tutorials/ruby/the-best-way-to-learn-ruby-on-rails/"},{name:"Michael Hartl's Tutorial",url:"http://ruby.railstutorial.org/"},{name:"RailsCasts",url:"http://railscasts.com/"},{name:"Treehouse - Build a Simple Ruby on Rails Application",url:"http://teamtreehouse.com/library/programming/build-a-simple-ruby-on-rails-application"}]},{name:"node",description:"Create a backend with javascript",$then:"express json http heroku mongo ember angular".split(" "),
home:"http://nodejs.org/",links:[{name:"How Do I Get Started?",url:"http://stackoverflow.com/a/5511507/1043674"},{name:"Node Beginner",url:"http://www.nodebeginner.org/"},{name:"Style Guide",url:"http://nodeguide.com/style.html"},{name:"nodeschool.io",url:"http://nodeschool.io/"}]},{name:"express",description:"The most popular web framework for node",$then:["heroku","http","angular","ember"],home:"http://expressjs.com/",links:[{name:"Guide",url:"http://expressjs.com/guide.html"}]},{name:"go",description:"A new language for the web",
home:"http://golang.org/",$then:["python","ruby","node"],links:[{name:"Tour",url:"http://tour.golang.org/#1"}]},{name:"mongo",description:"A simple javascript based database",$then:"heroku json http neo4j redis memcached sql".split(" "),home:"http://www.mongodb.org/",links:[{name:"Try Mongo",url:"http://try.mongodb.org/"},{name:"MongoDB University",url:"https://education.mongodb.com/"}]},{name:"sql",description:"A popular database language",$then:"json mongo neo4j redis memcached php".split(" "),
home:"http://www.mysql.com/",links:[{name:"Problems and Solutions",url:"http://www.sql-tutorial.ru/en/book_Intro.html"},{name:"w3schools",url:"http://www.w3schools.com/sql/"},{name:"Treehouse - Database Foundations",url:"http://teamtreehouse.com/library/programming/database-foundations"}]},{name:"neo4j",description:"The graph database",$then:["http","mongo","redis","memcached","sql"],home:"http://www.neo4j.org/",links:[{name:"Learn Cypher",url:"http://www.neo4j.org/learn/cypher"}]},{name:"bootstrap",
description:"A popular frontend framework",$then:["angular","ember","backbone","sass","less"],home:"http://getbootstrap.com/",links:[{name:"Get Started",url:"http://getbootstrap.com/getting-started/"},{name:"Getting Started with Bootstrap 3",url:"http://www.realpython.com/blog/design/getting-started-with-bootstrap-3"}]},{name:"less",description:"A dynamic stylesheet language",$then:["sass","bootstrap","angular"],home:"http://lesscss.org/",links:[{name:"Try It!",url:"http://less2css.org/"}]},{name:"sass",
description:"An extension of css",$then:["less","bootstrap","angular"],home:"http://sass-lang.com/",links:[{name:"Tutorial",url:"http://sass-lang.com/tutorial.html"},{name:"Try",url:"http://sass-lang.com/try.html"},{name:"SassMeister",url:"http://sassmeister.com"}]},{name:"heroku",description:"Easily deploy your applications",$then:["git","python","node","ruby"],home:"http://heroku.com/",links:[{name:"Get Started",url:"https://devcenter.heroku.com/articles/quickstart"},{name:"Intro to Heroku Screencast",
url:"http://www.codeschool.com/code_tv/heroku"}]},{name:"git",description:"Version control that's simple to use",$then:["http","heroku"],home:"http://git-scm.com/",links:[{name:"The simple guide",url:"http://rogerdudler.github.io/git-guide/"},{name:"Try Git",url:"http://try.github.io/levels/1/challenges/1"},{name:"Git Immersion",url:"http://gitimmersion.com/"}]},{name:"http",description:"The basics of making web requests",$then:["python","node","heroku","json","rest"],home:"http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol",
links:[{name:"A Beginner's Guide",url:"http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/"},{name:"First Milliseconds https",url:"http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html"}]},{name:"redis",description:"A basic key-value store",$then:["mongo","memcached","heroku","neo4j","sql"],home:"http://redis.io/",links:[{name:"Try Redis",url:"http://try.redis.io/"}]},{name:"memcached",description:"A way to cache your data in memory",$then:["mongo","redis",
"heroku","neo4j","sql"],home:"http://memcached.org/",links:[{name:"An Adventure in Learning Memcached",url:"https://code.google.com/p/memcached/wiki/TutorialCachingStory"}]},{name:"angular",description:"Build powerful data-driven html and javascript",$then:["ember","jquery","backbone"],home:"http://angularjs.org/",links:[{name:"egghead.io",url:"http://egghead.io/lessons"},{name:"A Better Way to Learn Angular",url:"http://www.thinkster.io/pick/GtaQ0oMGIl/"}]},{name:"ember",description:"Build robust single-page apps with javascript",
$then:["angular","jquery","backbone"],home:"http://emberjs.com/",links:[{name:"Getting Started TodoMVC Guide",url:"http://emberjs.com/guides/getting-started/"},{name:"Ember 101",url:"http://ember101.com/"},{name:"Let's Learn Ember",url:"http://freecourses.tutsplus.com/lets-learn-ember/"}]},{name:"backbone",description:"A framework that makes handling data easier in javascript",$then:["angular","jquery","ember"],home:"http://backbonejs.org/",links:[{name:"Developing Backbone.js Applications",url:"http://addyosmani.github.io/backbone-fundamentals/"}]},
{name:"underscore",description:"A utility belt for javascript",$then:["sugar","backbone","coffeescript","lodash"],home:"http://underscorejs.org/",links:[{name:"Getting Cozy with Underscore",url:"http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/"}]},{name:"lodash",description:"A utility library delivering performance",$then:["sugar","backbone","coffeescript","underscore"],home:"http://lodash.com/",links:[]},{name:"sugar",description:"Extend the functionality of javascript",
$then:["underscore","backbone","coffeescript"],home:"http://sugarjs.com/",links:[]},{name:"coffeescript",description:"A language that compiles to javascript",$then:["underscore","angular","backbone"],home:"http://coffeescript.org/",links:[{name:"Learn X in Y Minutes",url:"http://learnxinyminutes.com/docs/coffeescript/"}]},{name:"dart",description:"A new language for structured web app engineering",$then:["node"],home:"http://dartlang.org",links:[{name:"Programmer\u2019s Guide",url:"https://www.dartlang.org/docs/"},
{name:"Learn X in Y Minutes",url:"http://learnxinyminutes.com/docs/dart/"}]},{name:"php",description:"A server-side language for the web",$then:["python","node","sql","laravel"],home:"http://php.net/",links:[{name:"PHP The Right Way",url:"http://www.phptherightway.com"},{name:"Learn X in Y Minutes",url:"http://learnxinyminutes.com/docs/php/"},{name:"Treehouse - Become a PHP Developer",url:"http://teamtreehouse.com/learning-adventures/become-a-php-developer"}]},{name:"laravel",description:"The php framework for web artisans",
$then:[],home:"http://www.laravel.com",links:[{name:"Laravel Docs",url:"http://laravel.com/docs"},{name:"Laravel Ins and Outs",url:"http://laravel.io"},{name:"Laravel Cheatsheet",url:"http://cheats.jesse-obrien.ca/"},{name:"Laravel 4 Mastery",url:"http://net.tutsplus.com/tutorials/php/laravel-4-mastery/"},{name:"Laravel Tutorials via Jason Lewis",url:"http://jasonlewis.me/laravel-tutorials"}]},{name:"java",description:"A popular programming language",home:"",$then:["python","ruby","node"],links:[{name:"Programming Methodology",
url:"http://see.stanford.edu/see/courseinfo.aspx?coll=824a47e1-135f-4508-a5aa-866adcae1111"}]},{name:"xml",description:"An alternative to json",home:"",$then:["json","http"],links:[{name:"XML Tutorial",url:"http://www.quackit.com/xml/tutorial/"}]},{name:"firebase",description:"A realtime backend for your web or mobile app",home:"https://www.firebase.com/index.html",$then:[],links:[{name:"5 Minute Chat Tutorial",url:"https://www.firebase.com/tutorial/#gettingstarted"},{name:"Codecademy",url:"http://www.codecademy.com/tracks/firebase"}]},
{name:"apache",description:"A very popular http web server",home:"https://httpd.apache.org/",$then:["http","rest","nginx"],links:[{name:"Apache Documenttion",url:"https://httpd.apache.org/docs/2.4/"}]},{name:"nginx",description:"A popular http web server, load balancer and http cache",home:"http://nginx.org/",$then:["http","rest","apache"],links:[{name:"Beginner's Guide",url:"http://nginx.org/en/docs/beginners_guide.html"}]},{name:"perl",description:"A web programming language great for text manipulation and rapid development",
home:"http://www.perl.org/",$then:[],links:[{name:"Learn Perl",url:"http://www.perl.org/learn.html"},{name:"CPAN",url:"http://www.cpan.org/"},{name:"metacpan",url:"http://www.metacpan.org/"}]},{name:"postgresql",description:"The world's most advanced open source database",home:"http://www.postgresql.org/",$then:[],links:[{name:"PostgresApp",url:"http://postgresapp.com/"}]}];

function masterCtrl($scope, $window, $http, $timeout, $location, $anchorScroll, $document) {

  $scope.current_box = null;

  $scope.next_boxes = null;

  $scope.use_hash = function() {
    if ($window.location.hash) {
      var hash = $window.location.hash.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
      var box = $scope.boxes.findAll({name: hash})[0];
      if (box) $scope.set_next_boxes(box);
      $location.hash(hash);
      $anchorScroll();
      console.log("Jump to: "+hash);
    }
  }

  $scope.set_next_boxes = function($box, $index) {
    if ($scope.current_box === null || $box != $scope.current_box) {
      $scope.current_box = $box
      $scope.next_boxes = $box.$then;
      if ($index != $scope.more_index) $scope.more_index = null;
    } else {
      $scope.current_box = null;
      $scope.next_boxes = null;
    }
  }

  $scope.in_next_boxes = function($name) {
    if ($scope.current_box === null) return true;
    if ($name == $scope.current_box.name) return 'current';
    return ($scope.current_box == null || $scope.next_boxes.indexOf($name) > -1);
  }

  $scope.load_boxes = function() {
    $scope.boxes = CONTENT_BACKUP;
    // Remove fallback
    // Fallback message
    $timeout(function() { $("#message").css("display", "block") }, 750);
    $.getJSON("content.json", function(data) {
      $scope.boxes = data;
      $scope.working = true;
      $timeout(function() { $("#donate").hide().slideDown("normal") }, 9000);
    });
  }();

  $scope.load_sponsors = function() {
    // Remove fallback
    /* JSON mime type */
    $.getJSON("sponsors.json", function(data) {
      $scope.sponsors = data;
      $scope.sponsors.other.sort();
      $scope.sponsors.desired.sort();
    });
  }();

  $scope.tiers_hidden = true;

  $scope.show_sponsorship = function() {
    if ($scope.tiers_hidden) {
      $("#sponsorship_tiers").hide().removeClass("hidden").slideDown("normal");
      if ($("#max_amount").val() != true) $("#max_amount").val("10");
    }
    $scope.tiers_hidden = false;
  }

  $scope.set_sponsorship = function($amount) {
    $("#max_amount").val($amount);
    $scope.fire_sponsorship();git add .
  }

  $scope.fire_sponsorship = function() {
    if ($("#max_amount").val().length == 0) $("#max_amount").val("10");
    $("#sponsorship").submit();
  }

  $scope.more_index = null;

  $scope.show_more = function($index) {
    $scope.more_index = $index;
  }

}