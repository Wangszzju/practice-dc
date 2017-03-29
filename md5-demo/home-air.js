/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(134);
	
	var _log = __webpack_require__(78);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	  var maskNode = $('#J_mask');
	  maskNode.click(function (e) {
	    if ($(e.target).hasClass('g-mask')) {
	      maskNode.addClass('hide');
	    }
	  });
	  $('#J_maskLoginBtn').click(function (e) {
	    maskNode.removeClass('hide');
	  });
	  $('#J_backBtn').click(function (e) {
	    maskNode.addClass('hide');
	  });
	  var doingLogin = false;
	  $('#J_loginBtn').click(function (e) {
	    if (doingLogin) {
	      return;
	    }
	    var username = $('#J_username').val();
	    var password = $('#J_password').val();
	    var srcPage = $('#J_loginBtn').data('srcpage');
	    if (!username || !password) {
	      return;
	    }
	    $.get('/i/login', {
	      username: username,
	      password: password
	    }, function (res) {
	      if (res.status !== 200) {
	        $('#J_loginMsg').text(res.msg);
	      } else {
	        location.assign('/p/' + srcPage);
	      }
	    }, 'json');
	  });
	});

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var log = function log() {};
	if (("dev") !== 'production' && console) {
	  log = console.log.bind(undefined);
	}
	module.exports = log;

/***/ },

/***/ 134:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE2ZDcxN2FlY2MwOWZmMjMzMGI/NDdhOCoiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS93ZWIubWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvbG9nLmpzPzgwYTQqIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvd2ViLm1haW4ubGVzcz9jMWJiIl0sIm5hbWVzIjpbIiQiLCJtYXNrTm9kZSIsImNsaWNrIiwiZSIsInRhcmdldCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRvaW5nTG9naW4iLCJ1c2VybmFtZSIsInZhbCIsInBhc3N3b3JkIiwic3JjUGFnZSIsImRhdGEiLCJnZXQiLCJyZXMiLCJzdGF0dXMiLCJ0ZXh0IiwibXNnIiwibG9jYXRpb24iLCJhc3NpZ24iLCJsb2ciLCJjb25zb2xlIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUFBLEdBQUUsWUFBTTtBQUNOLE9BQUlDLFdBQVdELEVBQUUsU0FBRixDQUFmO0FBQ0FDLFlBQVNDLEtBQVQsQ0FBZSxhQUFLO0FBQ2xCLFNBQUdGLEVBQUVHLEVBQUVDLE1BQUosRUFBWUMsUUFBWixDQUFxQixRQUFyQixDQUFILEVBQWtDO0FBQ2hDSixnQkFBU0ssUUFBVCxDQUFrQixNQUFsQjtBQUNEO0FBQ0YsSUFKRDtBQUtBTixLQUFFLGlCQUFGLEVBQXFCRSxLQUFyQixDQUEyQixhQUFLO0FBQzlCRCxjQUFTTSxXQUFULENBQXFCLE1BQXJCO0FBQ0QsSUFGRDtBQUdBUCxLQUFFLFlBQUYsRUFBZ0JFLEtBQWhCLENBQXNCLGFBQUs7QUFDekJELGNBQVNLLFFBQVQsQ0FBa0IsTUFBbEI7QUFDRCxJQUZEO0FBR0EsT0FBSUUsYUFBYSxLQUFqQjtBQUNBUixLQUFFLGFBQUYsRUFBaUJFLEtBQWpCLENBQXVCLGFBQUs7QUFDMUIsU0FBR00sVUFBSCxFQUFlO0FBQ2I7QUFDRDtBQUNELFNBQUlDLFdBQVdULEVBQUUsYUFBRixFQUFpQlUsR0FBakIsRUFBZjtBQUNBLFNBQUlDLFdBQVdYLEVBQUUsYUFBRixFQUFpQlUsR0FBakIsRUFBZjtBQUNBLFNBQUlFLFVBQVVaLEVBQUUsYUFBRixFQUFpQmEsSUFBakIsQ0FBc0IsU0FBdEIsQ0FBZDtBQUNBLFNBQUcsQ0FBQ0osUUFBRCxJQUFhLENBQUNFLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0Q7QUFDRFgsT0FBRWMsR0FBRixDQUFNLFVBQU4sRUFBa0I7QUFDaEJMLGlCQUFVQSxRQURNO0FBRWhCRSxpQkFBVUE7QUFGTSxNQUFsQixFQUdHLGVBQU87QUFDUixXQUFHSSxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFBdUI7QUFDckJoQixXQUFFLGFBQUYsRUFBaUJpQixJQUFqQixDQUFzQkYsSUFBSUcsR0FBMUI7QUFDRCxRQUZELE1BRU87QUFDTEMsa0JBQVNDLE1BQVQsQ0FBZ0IsUUFBTVIsT0FBdEI7QUFDRDtBQUNGLE1BVEQsRUFTRyxNQVRIO0FBVUQsSUFwQkQ7QUFxQkQsRUFuQ0QsRTs7Ozs7OztBQ0pBOztBQUVBLEtBQUlTLE1BQU0sZUFBTSxDQUFFLENBQWxCO0FBQ0EsS0FBRyxZQUF5QixZQUF6QixJQUF5Q0MsT0FBNUMsRUFBcUQ7QUFDbkRELFNBQU1DLFFBQVFELEdBQVIsQ0FBWUUsSUFBWixXQUFOO0FBQ0Q7QUFDREMsUUFBT0MsT0FBUCxHQUFpQkosR0FBakIsQzs7Ozs7OztBQ05BLDBDIiwiZmlsZSI6ImhvbWUuYTFiMGM4Y2ZjMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIxNmQ3MTdhZWNjMDlmZjIzMzBiIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICcuL3dlYi5tYWluLmxlc3MnO1xuaW1wb3J0IGxvZyBmcm9tICdAYXNzZXRzL3V0aWxzL2xvZyc7XG5cbiQoKCkgPT4ge1xuICBsZXQgbWFza05vZGUgPSAkKCcjSl9tYXNrJyk7XG4gIG1hc2tOb2RlLmNsaWNrKGUgPT4ge1xuICAgIGlmKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdnLW1hc2snKSl7XG4gICAgICBtYXNrTm9kZS5hZGRDbGFzcygnaGlkZScpO1xuICAgIH1cbiAgfSk7XG4gICQoJyNKX21hc2tMb2dpbkJ0bicpLmNsaWNrKGUgPT4ge1xuICAgIG1hc2tOb2RlLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gIH0pO1xuICAkKCcjSl9iYWNrQnRuJykuY2xpY2soZSA9PiB7XG4gICAgbWFza05vZGUuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgfSk7XG4gIGxldCBkb2luZ0xvZ2luID0gZmFsc2U7XG4gICQoJyNKX2xvZ2luQnRuJykuY2xpY2soZSA9PiB7XG4gICAgaWYoZG9pbmdMb2dpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdXNlcm5hbWUgPSAkKCcjSl91c2VybmFtZScpLnZhbCgpO1xuICAgIGxldCBwYXNzd29yZCA9ICQoJyNKX3Bhc3N3b3JkJykudmFsKCk7XG4gICAgbGV0IHNyY1BhZ2UgPSAkKCcjSl9sb2dpbkJ0bicpLmRhdGEoJ3NyY3BhZ2UnKTtcbiAgICBpZighdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQuZ2V0KCcvaS9sb2dpbicsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICB9LCByZXMgPT4ge1xuICAgICAgaWYocmVzLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICQoJyNKX2xvZ2luTXNnJykudGV4dChyZXMubXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uLmFzc2lnbignL3AvJytzcmNQYWdlKTtcbiAgICAgIH1cbiAgICB9LCAnanNvbicpO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaG9tZS93ZWIubWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGxvZyA9ICgpID0+IHt9O1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25zb2xlKSB7XG4gIGxvZyA9IGNvbnNvbGUubG9nLmJpbmQodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGxvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy91dGlscy9sb2cuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFnZXMvaG9tZS93ZWIubWFpbi5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==