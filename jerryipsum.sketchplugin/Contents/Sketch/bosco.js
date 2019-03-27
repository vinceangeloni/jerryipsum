var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bosco.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bosco.js":
/*!**********************!*\
  !*** ./src/bosco.js ***!
  \**********************/
/*! exports provided: onStartup, onShutdown, onSupplyCharacter, onSupplyThing, onSupplyQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyCharacter", function() { return onSupplyCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyThing", function() { return onSupplyThing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyQuote", function() { return onSupplyQuote; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util");

var characterData = __webpack_require__(/*! ./characters.json */ "./src/characters.json");

var thingData = __webpack_require__(/*! ./things.json */ "./src/things.json");

var quoteData = __webpack_require__(/*! ./quotes.json */ "./src/quotes.json");

function onStartup() {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'Names', 'SupplyCharacter');
  DataSupplier.registerDataSupplier('public.text', 'Things', 'SupplyThing');
  DataSupplier.registerDataSupplier('public.text', 'Quotes', 'SupplyQuote'); // DataSupplier.registerDataSupplier('public.image', 'jerryipsum', 'SupplyData')
}
function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}
function onSupplyCharacter(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (_, index) {
    var characters = characterData.characters;
    var characterIndex = Math.floor(Math.random() * characters.length);
    var data = characters[characterIndex];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
function onSupplyThing(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (_, index) {
    var things = thingData.things;
    var thingIndex = Math.floor(Math.random() * things.length);
    var data = things[thingIndex];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
function onSupplyQuote(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (_, index) {
    var quotes = quoteData.quotes;
    var quoteIndex = Math.floor(Math.random() * quotes.length);
    var data = quotes[quoteIndex];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

/***/ }),

/***/ "./src/characters.json":
/*!*****************************!*\
  !*** ./src/characters.json ***!
  \*****************************/
/*! exports provided: characters, default */
/***/ (function(module) {

module.exports = {"characters":["Elaine Benes","Jerry Seinfeld","Newman","Cosmo Kramer","Kenny Bania","George Costanza","Poppie","Ruthie Cohen","Uncle Leo","David Puddy","Mr. Lippman","Justin Pitt","Mickey Abbott","Russell Dalrymple","Crazy Joe Davola","Jack Klompus","Jackie Chiles","Frank Costanza","Estelle Costanza","Morty Seinfeld","Helen Seinfeld","Susan Ross","Bob Cobb","Franklin Delano Romanowski","Izzy Mandelbaum","Lloyd Braun","Marcelino","Mr. Kruger","Sally Weaver","Sid Farkus","Sue Ellen Mischke","Bob Sacamano","H.E. Pennypacker","Martin van Nostrand","Dylan Murphy","Colin O'Brien","Prickly Pete","Kel Varnsen","Art Vandelay","Buck Naked","Jake Jarmel","Babu Bhatt","Dr. Tim Whatley"]};

/***/ }),

/***/ "./src/quotes.json":
/*!*************************!*\
  !*** ./src/quotes.json ***!
  \*************************/
/*! exports provided: quotes, default */
/***/ (function(module) {

module.exports = {"quotes":["You can't believe this woman. She's one of those low-talkers. You can't hear a word she's saying! You're always going 'excuse me?', 'what was that?'","That's the true spirit of Christmas; people being helped by people other than me.","Did you know that the original title for War and Peace was War, What Is It Good For?","I love a good nap. Sometimes it's the only thing getting me out of bed in the morning.","Elaine, breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.","You know I got a great idea for a cologne. The Beach. You spray it on and you smell like you just came home from the beach.","Many Christmases ago, I went to buy a doll for my son. I reached for the last one they had, but so did another man. As I rained blows upon, I realized there had to be another way.","Why did it all turn out like this for me? I had so much promise. I was personable, I was bright. Oh, maybe not academically speaking, but...I was perceptive. I always know when someone's uncomfortable at a party. It became very clear to me sitting out there today, that every decision I've ever made in my entire life has been wrong. My life is the opposite of everything I want it to be. Every instinct I have, in every of life, be it something to wear, something to eat…it's all been wrong.","Jerry, my face is my livelihood, my allure...my twinkle! Everything I have I owe to this face.","Miss Wilkie, your tobacco company has turned this beautiful specimen into a horrible, twisted freak.","It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free of the pan and sort of does its own thing. I'll tell you. That's a million-dollar idea right there. Just sell the tops.","Frolf: Frisbee golf, Jerry. Golf with a Frisbee. This is gonna be my time. Time to taste the fruits and let the juices drip down my chin. I proclaim this: The Summer of George!","The sea was angry that day, my friends, like an old man trying to send back soup in a deli.","I'm out there Jerry, and I'm LOVIN' every minute of it!","Who's gonna turn down a Junior Mint? It's chocolate, it's peppermint...it's delicious!","Sometimes the road less traveled is less traveled for a reason.","What is this obsession people have with books? They put them in their houses—like they’re trophies. What do you need it for after you read it?","Can you die from an odour? I mean, like if you were locked in a vomitorium for two weeks, could you actually die from the odour?","Hey believe me, baldness will catch on. When the aliens come, who do you think they’re gonna relate to? Who do you think is going to be the first ones getting a tour of the ship?","Hey, how come people don’t have dip for dinner? Why is it only a snack, why can’t it be a meal, you know? I don’t understand stuff like that.","All of a sudden it hit me, I realised what the problem is: I can’t be with someone like me. I hate myself! If anything, I need to get the exact opposite of me. It’s too much. It’s too much, I can’t take it. I can’t take it…","Oh, alright. Let's see... Well, we can throw out birthdays immediately. That's too obvious. And no numbers for you, you're a word man. Alright, let's go deeper. What kind of man are you? Well, you're weak, spineless, a man of temptations, but what tempts you?","Hello and welcome to Moviefone! Brought to you by the New York Times and HOT 97. Coming to theatres this Friday... [deep trailer voice-over] Kevin Bacon. Susan Sarandon. You've got to get me over that mountain! NOO! [imitates air raid effect and long scream] There's no higher place than... Mountain High. Rated R. If you know the name of the movie that you'd like to see, press 1.","Let me understand. You got the hen, the chicken and the rooster. The rooster goes with the chicken. So, who's having sex with the hen?","I was under the impression that I could take anything I wanted from your fridge, and you take whatever from mine.","What d'you think? I've never ridden in a Cadillac before? Believe me, I've ridden in a Cadillac hundreds of times. Thousands!","Look, sister, go get yourself a cup of coffee, all right? Beat it! [pushes Elaine out the door and closes it] All right, now here's the lowdown. Through a certain connection, I've been able to locate some black market shower heads. They're all made in the former Yugoslavia. And from what I hear, the Serbs are fanatic about their showers.","I know what you're going through. I too once fell under the spell of opium. It was 1979. I was traveling the Yangtzee in search of a Mongolian horsehair vest. I had got to the market after sundown. All of the clothing traders had gone, but a different sort of trader still lurked about. \"Just a taste\" he said. That was all it took.","My fault?!? Your Nana, is missing, because she's been passing those bum checks all over town, and she finally pissed off the wrong people!","Yeah. You know, about how when you break it down, it's really a very positive thing. You know, you have a 'newer,' with a 'ma' in front of it. MA-NURE. It's not bad.","Do you realize in the entire history of western civilization no one has successfully accomplished the Roommate Switch? In the Middle Ages you could get locked up for even suggesting it!","I tell you, when she threw that toupee out the window, it was the best thing that ever happened to me. I feel like my old self again. Totally inadequate, completely insecure, paranoid, neurotic, it's a pleasure.","You can't have a relationship where one person says 'I love you,' and the other one says 'I'm hungry, let's get something to eat.'"]};

/***/ }),

/***/ "./src/things.json":
/*!*************************!*\
  !*** ./src/things.json ***!
  \*************************/
/*! exports provided: things, default */
/***/ (function(module) {

module.exports = {"things":["A doodle","The Poppie couch","Joe Mayo's coat","Bottle of Snapple","Junior Mint","Jujyfruit","Today Sponge","Space pen","A Cadillac","Crested blazer"]};

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onStartup'] = __skpm_run.bind(this, 'onStartup');
that['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
that['onSupplyCharacter'] = __skpm_run.bind(this, 'onSupplyCharacter');
that['onSupplyThing'] = __skpm_run.bind(this, 'onSupplyThing');
that['onSupplyQuote'] = __skpm_run.bind(this, 'onSupplyQuote');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=bosco.js.map