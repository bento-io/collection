/* FOR ALL THE CONTENT
This is where all the boxes are made for the page. In each object there is a name of the technology, a short
description, what the user should learn next, and an ordered list of resources related to that technology.
There are a few things to keep in mind when doing editing this list:

	RULES TO FOLLOW WHEN MAKING CHANGES
	====================================
	 - All names MUST be lowercase (even in the $then fields and descriptions)
	 - Descriptions should be NO MORE than 100 characters long
	 - Descriptions should NOT use any complex jargon when possible
	 - Home should be the top domain when possible
	 - Next lessons to follow-up with ($then) are in no particular order in the array
	 - Next lessons should NOT include prerequisites (javascript should not be in angular $then)
	 - Only the FIRST THREE links are shown, in the order of the array
	 - Link names should be the title of the destination
	 - Links should take the user DIRECTLY to the relevant information (i.e. for html go to the html
	 	exercise in codeacademy, rather than codeacademy's home page)

If you have any questions, please don't hesitate to contact me by tweeting @jonhmchan
*/

var CONTENT = [
    {
      name: "html",
      description: "Beginners start here! The very basics of putting something on a webpage",
      $then: ["css", "javascript", "angular", "php"],
      home: "http://developer.mozilla.org/en-US/docs/Web/HTML",
      links: [
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b"
        },
        {
          name: "HTML Dog",
          url: "http://htmldog.com/guides/html/beginner/"
        },
        {
          name: "HTML5 Doctor",
          url: "http://html5doctor.com/"
        },
        {
          name: "Dash",
          url: "https://dash.generalassemb.ly/projects"
        },
        {
          name: "Treehouse",
          url: "http://teamtreehouse.com/library"
        }
      ]
    },
    {
      name: "css",
      description: "Styling your webpage",
      $then: ["javascript", "less", "sass", "bootstrap"],
      home: "http://developer.mozilla.org/en-US/docs/Web/CSS",
      links: [
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/web-beginner-en-TlhFi/0/1?curriculum_id=50579fb998b470000202dc8b"
        },
        {
          name: "HTML Dog",
          url: "http://htmldog.com/guides/css/beginner/"
        },
        {
          name: "Treehouse - CSS Foundations",
          url: "http://teamtreehouse.com/library/websites/css-foundations-2"
        }
      ]
    },
    {
      name: "javascript",
      description: "Make your pages interactive",
      $then: ["python", "jquery", "mongo", "json", "node", "angular", "underscore", "ember", "backbone", "sugar", "coffeescript"],
      home: "http://developer.mozilla.org/en-US/docs/Web/JavaScript",
      links: [
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/getting-started-v2/0/1?curriculum_id=506324b3a7dffd00020bf661"
        },
        {
          name: "Learn JS",
          url: "http://www.learn-js.org/"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/javascript/"
        },
        {
          name: "Treehouse - JavaScript Foundations",
          url: "http://teamtreehouse.com/library/websites/javascript-foundations"
        }
      ]
    },
    {
      name: "json",
      description: "How data is sent between applications",
      $then: ["mongo", "http", "jquery", "rest", "xml"],
      home: "http://www.json.org/",
      links: [
        {
          name: "What is JSON?",
          url: "http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/"
        },
        {
          name: "Treehouse - Getting data from the web",
          url: "http://teamtreehouse.com/library/ios-development/build-a-blog-reader-iphone-app/getting-data-from-the-web"
        }
      ]
    },
    {
      name: "rest",
      description: "A way to architecture your applications around verbs and resources",
      home: "",
      $then: ["json", "xml", "http"],
      links: [
        {
          name: "Designing HTTP Interfaces and RESTful Web Services",
          url: "http://munich2012.drupal.org/program/sessions/designing-http-interfaces-and-restful-web-services.html"
        },
        {
          name: "White House Web API Standards",
          url: "https://github.com/WhiteHouse/api-standards"
        },
        {
          name: "Architectural Styles and the Design of Network-based Software Architectures",
          url: "http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm"
        },
      ]
    },
    {
      name: "jquery",
      description: "Control the DOM with javascript",
      $then: ["python", "ruby", "node", "angular", "backbone", "ember", "sugar", "coffeescript"],
      home: "http://jquery.com/",
      links: [
      	{
          name: "jQuery in 30 Minutes",
          url: "http://highoncoding.com/Videos/537_Extended_Screencast_on_JQuery_Whole_38_Minutes_.aspx"
        },
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/web-beginner-en-bay3D/0/1?curriculum_id=50a3fad8c7a770b5fd0007a1"
        },
        {
          name: "Treehouse - Build an Interactive Website",
          url: "http://teamtreehouse.com/library/websites/build-an-interactive-website"
        }
      ]
    },
    {
      name: "python",
      description: "A programming language to easily pick up",
      $then: ["flask", "tornado", "mongo", "heroku", "ruby", "node"],
      home: "http://www.python.org/",
      links: [
      	{
      	  name: "Intro to Computer Science",
      	  url: "https://www.udacity.com/course/cs101"
      	},
        {
          name: "Learn Python",
          url: "http://www.learnpython.org/"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/python/"
        },
        {
          name: "New Coder",
          url: "http://newcoder.io"
        }
      ]
    },
    {
      name: "flask",
      description: "A basic microframework for python on the web",
      $then: ["tornado", "mongo", "django", "heroku", "memcached"],
      home: "http://flask.pocoo.org/",
      links: [
        {
          name: "Documentation",
          url: "http://flask.pocoo.org/docs/"
        }
      ]
    },
    {
      name: "django",
      description: "A popular web framework for python",
      $then: ["tornado", "mongo", "flask", "heroku", "memcached"],
      home: "http://www.djangoproject.com",
      links: [
        {
          name: "Want to Learn Django?",
          url: "http://elweb.co/want-to-learn-django-start-here/"
        },
        {
          name: "Documentation",
          url: "https://docs.djangoproject.com/en/1.5/"
        }
      ]
    },
    {
      name: "tornado",
      description: "An asynchronous microframework for python on the web",
      $then: ["flask", "mongo", "heroku", "django", "memcached"],
      home: "http://www.tornadoweb.org/en/stable/",
      links: [
        {
          name: "Documentation",
          url: "http://www.tornadoweb.org/en/stable/documentation.html"
        }
      ]
    },
    {
      name: "ruby",
      description: "An easy, expressive and dynamic scripting language",
      $then: ["rails", "heroku", "python"],
      home: "http://www.ruby-lang.org/en/",
      links: [
        {
          name: "Try Ruby",
          url: "http://tryruby.org/levels/1/challenges/0"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/ruby/"
        },
        {
          name: "Learn Ruby the Hard Way",
          url: "http://ruby.learncodethehardway.org/"
        },
        {
          name: "Treehouse - Ruby Foundations",
          url: "http://teamtreehouse.com/library/programming/ruby-foundations"
        }
      ]
    },
    {
      name: "rails",
      description: "An awesome web framework for ruby",
      $then: ["heroku", "ruby", "coffeescript", "less", "sass", "sql", "http"],
      home: "http://rubyonrails.org/",
      links: [
        {
          name: "What is Ruby on Rails?",
          url: "http://railsapps.github.io/what-is-ruby-rails.html"
        },
        {
          name: "Recommendations for a Rails Tutorial",
          url: "https://tutorials.railsapps.org/rails-tutorial"
        },
        {
          name: "The Best Way to Learn Rails",
          url: "http://net.tutsplus.com/tutorials/ruby/the-best-way-to-learn-ruby-on-rails/"
        },
        {
          name: "Michael Hartl's Tutorial",
          url: "http://ruby.railstutorial.org/"
        },
        {
          name: "RailsCasts",
          url: "http://railscasts.com/"
        },
        {
          name: "Treehouse - Build a Simple Ruby on Rails Application",
          url: "http://teamtreehouse.com/library/programming/build-a-simple-ruby-on-rails-application"
        }
      ]
    },
    {
      name: "node",
      description: "Create a backend with javascript",
      $then: ["express", "json", "http", "heroku", "mongo", "ember", "angular"],
      home: "http://nodejs.org/",
      links: [
        {
          name: "How Do I Get Started?",
          url: "http://stackoverflow.com/a/5511507/1043674"
        },
        {
          name: "Node Beginner",
          url: "http://www.nodebeginner.org/"
        },
        {
          name: "Style Guide",
          url: "http://nodeguide.com/style.html"
        },
        {
          name: "nodeschool.io",
          url: "http://nodeschool.io/"
        }
      ]
    },
    {
      name: "express",
      description: "The most popular web framework for node",
      $then: ["heroku", "http", "angular", "ember"],
      home: "http://expressjs.com/",
      links: [
        {
          name: "Guide",
          url: "http://expressjs.com/guide.html"
        }
      ]
    },
    {
      name: "go",
      description : "A new language for the web",
      home: "http://golang.org/",
      $then: ["python", "ruby", "node"],
      links: [
      	{
      		name: "Tour",
      		url: "http://tour.golang.org/#1"
      	}
      ]
    },
    {
      name: "mongo",
      description: "A simple javascript based database",
      $then: ["heroku", "json", "http", "neo4j", "redis", "memcached", "sql"],
      home: "http://www.mongodb.org/",
      links: [
        {
          name: "Try Mongo",
          url: "http://try.mongodb.org/"
        }
      ]
    },
    {
      name: "sql",
      description: "A popular database language",
      $then: ["json", "mongo", "neo4j", "redis", "memcached", "php"],
      home: "http://www.mysql.com/",
      links: [
      	{
      	  name: "Problems and Solutions",
      	  url: "http://www.sql-tutorial.ru/en/book_Intro.html"
      	},
        {
          name: "w3schools",
          url: "http://www.w3schools.com/sql/"
        },
        {
          name: "Treehouse - Database Foundations",
          url: "http://teamtreehouse.com/library/programming/database-foundations"
        }
      ]
    },
    {
      name: "neo4j",
      description: "The graph database",
      $then: ["http", "mongo", "redis", "memcached", "sql"],
      home: "http://www.neo4j.org/",
      links: [
        {
          name: "Learn Cypher",
          url: "http://www.neo4j.org/learn/cypher"
        }
      ]
    },
    {
      name: "bootstrap",
      description: "A popular frontend framework",
      $then: ["angular", "ember", "backbone", "sass", "less"],
      home: "http://getbootstrap.com/",
      links: [
        {
          name: "Get Started",
          url: "http://getbootstrap.com/getting-started/"
        },
        {
          name: "Getting Started with Bootstrap 3",
          url: "http://www.realpython.com/blog/design/getting-started-with-bootstrap-3"
        }
      ]
    },
    {
      name: "less",
      description: "A dynamic stylesheet language",
      $then: ["sass", "bootstrap", "angular"],
      home: "http://lesscss.org/",
      links: [
        {
          name: "Try It!",
          url: "http://less2css.org/"
        }
      ]
    },
    {
      name: "sass",
      description: "An extension of css",
      $then: ["less", "bootstrap", "angular"],
      home: "http://sass-lang.com/",
      links: [
        {
          name: "Tutorial",
          url: "http://sass-lang.com/tutorial.html"
        },
        {
          name: "Try",
          url: "http://sass-lang.com/try.html"
        },
        {
          name: "SassMeister",
          url: "http://sassmeister.com"
        }
      ]
    },
    {
      name: "heroku",
      description: "Easily deploy your applications",
      $then: ["git", "python", "node", "ruby"],
      home: "http://heroku.com/",
      links: [
        {
          name: "Get Started",
          url: "https://devcenter.heroku.com/articles/quickstart"
        },
        {
          name: "Intro to Heroku Screencast",
          url: "http://www.codeschool.com/code_tv/heroku"
        }
      ]
    },
    {
      name: "git",
      description: "Version control that's simple to use",
      $then: ["http", "heroku"],
      home: "http://git-scm.com/",
      links: [
        {
          name: "The simple guide",
          url: "http://rogerdudler.github.io/git-guide/"
        },
        {
          name: "Try Git",
          url: "http://try.github.io/levels/1/challenges/1"
        },
        {
          name: "Git Immersion",
          url: "http://gitimmersion.com/"
        }
      ]
    },
    {
      name: "http",
      description: "The basics of making web requests",
      $then: ["python", "node", "heroku", "json", "rest"],
      home: "http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol",
      links: [
        {
          name: "A Beginner's Guide",
          url: "http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/"
        },
        {
          name: "First Milliseconds https",
          url: "http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html"
        }
      ]
    },
    {
      name: "redis",
      description: "A basic key-value store",
      $then: ["mongo", "memcached", "heroku", "neo4j", "sql"],
      home: "http://redis.io/",
      links: [
        {
          name: "Try Redis",
          url: "http://try.redis.io/"
        }
      ]
    },
    {
      name: "memcached",
      description: "A way to cache your data in memory",
      $then: ["mongo", "redis", "heroku", "neo4j", "sql"],
      home: "http://memcached.org/",
      links: [
        {
          name: "An Adventure in Learning Memcached",
          url: "https://code.google.com/p/memcached/wiki/TutorialCachingStory"
        }
      ]
    },
    {
      name: "angular",
      description: "Build powerful data-driven html and javascript",
      $then: ["ember", "jquery", "backbone"],
      home: "http://angularjs.org/",
      links: [
        { 
          name: "egghead.io",
          url: "http://egghead.io/lessons"
      	},
        {
          name: "A Better Way to Learn Angular",
          url: "http://www.thinkster.io/pick/GtaQ0oMGIl/"
        }
      ]
    },
    {
      name: "ember",
      description: "Build robust single-page apps with javascript",
      $then: ["angular", "jquery", "backbone"],
      home: "http://emberjs.com/",
      links: [
        {
          name: "Getting Started TodoMVC Guide",
          url: "http://emberjs.com/guides/getting-started/"
        }
      ]
    },
    {
      name: "backbone",
      description: "A framework that makes handling data easier in javascript",
      $then: ["angular", "jquery", "ember"],
      home: "http://backbonejs.org/",
      links: [
      	{
      	  name: "Developing Backbone.js Applications",
      	  url: "http://addyosmani.github.io/backbone-fundamentals/"
      	}
      ]
    },
    {
      name: "underscore",
      description: "A utility belt for javascript",
      $then: ["sugar", "backbone", "coffeescript","lodash"],
      home: "http://underscorejs.org/",
      links: [
        {
          name: "Getting Cozy with Underscore",
          url: "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/"
        }
      ]
    },
    {
      name: "lodash",
      description: "A utility library delivering performance",
      $then: ["sugar", "backbone", "coffeescript","underscore"],
      home: "http://lodash.com/",
      links: [
      ]
    },
    {
      name: "sugar",
      description: "Extend the functionality of javascript",
      $then: ["underscore", "backbone", "coffeescript"],
      home: "http://sugarjs.com/",
      links: [
      ]
    },
    {
      name: "coffeescript",
      description: "A language that compiles to javascript",
      $then: ["underscore", "angular", "backbone"],
      home: "http://coffeescript.org/",
      links: [
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/coffeescript/"
        }
      ]
    },
    {
      name: "dart",
      description : "A new language for structured web app engineering",
      $then: ["node"],
      home: "http://dartlang.org",
      links: [
        {
          name: "Programmer’s Guide",
          url: "https://www.dartlang.org/docs/"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/dart/"
        }
      ]
    },
    {
      name: "php",
      description: "A server-side language for the web",
      $then: ["python", "node", "sql", "laravel"],
      home: "http://php.net/",
      links: [
        {
          name: "PHP The Right Way",
          url: "http://www.phptherightway.com"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/php/"
        },
        {
          name: "Treehouse - Become a PHP Developer",
          url: "http://teamtreehouse.com/learning-adventures/become-a-php-developer"
        }
      ]
    },
    {
      name: "laravel",
      description: "The php framework for web artisans.",
      $then: [],
      home: "http://www.laravel.com",
      links: [
      ]
    },
    {
      name: "java",
      description : "A popular programming language",
      home: "",
      $then: ["python", "ruby", "node"],
      links: [
      	{
      		name: "Programming Methodology",
      		url: "http://see.stanford.edu/see/courseinfo.aspx?coll=824a47e1-135f-4508-a5aa-866adcae1111"
      	}
      ]
    },
    {
      name: "xml",
      description : "An alternative to json",
      home: "",
      $then: ["json", "http"],
      links: [
        {
          name: "XML Tutorial",
          url: "http://www.quackit.com/xml/tutorial/"
        }
      ]
    },
    {
      name: "firebase",
      description: "A realtime backend for your web or mobile app",
      home: "https://www.firebase.com/index.html",
      $then: [],
      links: [
        {
          name: "5 Minute Chat Tutorial",
          url: "https://www.firebase.com/tutorial/#gettingstarted"
        },
        {
          name: "Codecademy",
          url: "http://www.codecademy.com/tracks/firebase"
        }
      ]
    },
    {
      name: "apache",
      description: "The most popular http web server around",
      home: "https://httpd.apache.org/",
      $then: ["http", "rest", "nginx"],
      links:[
        {
          name: "Apache Documenttion",
          url: "https://httpd.apache.org/docs/2.4/"
        }
      ]
    },
    {
      name: "nginx",
      description: "A popular http web server, load balancer and http cache",
      home: "http://nginx.org/",
      $then: ["http", "rest", "apache"],
      links:[
        {
          name: "Beginner's Guide",
          url: "http://nginx.org/en/docs/beginners_guide.html"
        }
      ]
    },
    {
      name: "perl",
      description: "Perl is an ideal web programming language due to its text manipulation capabilities and rapid development cycle.",
      home: "http://www.perl.org/",
      $then: [],
      links:[
        {
          name: "Learn Perl",
          url: "http://www.perl.org/learn.html"
        },
        {
        	name: "CPAN",
        	url: "http://www.cpan.org/"
        },
        {
        	name: "metacpan",
        	url: "http://www.metacpan.org/"
        }
      ]
    },
    {
      name: "postgresql",
      description: "The world's most advanced open source database.",
      home: "http://www.postgresql.org/",
      $then: [],
      links:[
        {
          name: "PostgresApp",
          url: "http://postgresapp.com/"
        }
      ]
    },
    {
      name: "regex",
      description: "A popular syntax for pattern matching.",
      home: "http://www.regular-expressions.info/",
      $then: [],
      links:[
        {
          name: "Learn Regex the Hard Way",
          url: "http://regex.learncodethehardway.org/book/"
        }
      ]
    }
  ];
