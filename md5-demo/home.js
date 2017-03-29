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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	var _log = __webpack_require__(5);
	
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var log = function log() {};
	if (("dev") !== 'production' && console) {
	  log = console.log.bind(undefined);
	}
	module.exports = log;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUyNjViMDFkMGQwMjNhNzBmM2IiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS93ZWIubWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3dlYi5tYWluLmxlc3M/YzFiYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvbG9nLmpzIl0sIm5hbWVzIjpbIiQiLCJtYXNrTm9kZSIsImNsaWNrIiwiZSIsInRhcmdldCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRvaW5nTG9naW4iLCJ1c2VybmFtZSIsInZhbCIsInBhc3N3b3JkIiwic3JjUGFnZSIsImRhdGEiLCJnZXQiLCJyZXMiLCJzdGF0dXMiLCJ0ZXh0IiwibXNnIiwibG9jYXRpb24iLCJhc3NpZ24iLCJsb2ciLCJjb25zb2xlIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsR0FBRSxZQUFNO0FBQ04sT0FBSUMsV0FBV0QsRUFBRSxTQUFGLENBQWY7QUFDQUMsWUFBU0MsS0FBVCxDQUFlLGFBQUs7QUFDbEIsU0FBR0YsRUFBRUcsRUFBRUMsTUFBSixFQUFZQyxRQUFaLENBQXFCLFFBQXJCLENBQUgsRUFBa0M7QUFDaENKLGdCQUFTSyxRQUFULENBQWtCLE1BQWxCO0FBQ0Q7QUFDRixJQUpEO0FBS0FOLEtBQUUsaUJBQUYsRUFBcUJFLEtBQXJCLENBQTJCLGFBQUs7QUFDOUJELGNBQVNNLFdBQVQsQ0FBcUIsTUFBckI7QUFDRCxJQUZEO0FBR0FQLEtBQUUsWUFBRixFQUFnQkUsS0FBaEIsQ0FBc0IsYUFBSztBQUN6QkQsY0FBU0ssUUFBVCxDQUFrQixNQUFsQjtBQUNELElBRkQ7QUFHQSxPQUFJRSxhQUFhLEtBQWpCO0FBQ0FSLEtBQUUsYUFBRixFQUFpQkUsS0FBakIsQ0FBdUIsYUFBSztBQUMxQixTQUFHTSxVQUFILEVBQWU7QUFDYjtBQUNEO0FBQ0QsU0FBSUMsV0FBV1QsRUFBRSxhQUFGLEVBQWlCVSxHQUFqQixFQUFmO0FBQ0EsU0FBSUMsV0FBV1gsRUFBRSxhQUFGLEVBQWlCVSxHQUFqQixFQUFmO0FBQ0EsU0FBSUUsVUFBVVosRUFBRSxhQUFGLEVBQWlCYSxJQUFqQixDQUFzQixTQUF0QixDQUFkO0FBQ0EsU0FBRyxDQUFDSixRQUFELElBQWEsQ0FBQ0UsUUFBakIsRUFBMkI7QUFDekI7QUFDRDtBQUNEWCxPQUFFYyxHQUFGLENBQU0sVUFBTixFQUFrQjtBQUNoQkwsaUJBQVVBLFFBRE07QUFFaEJFLGlCQUFVQTtBQUZNLE1BQWxCLEVBR0csZUFBTztBQUNSLFdBQUdJLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUF1QjtBQUNyQmhCLFdBQUUsYUFBRixFQUFpQmlCLElBQWpCLENBQXNCRixJQUFJRyxHQUExQjtBQUNELFFBRkQsTUFFTztBQUNMQyxrQkFBU0MsTUFBVCxDQUFnQixRQUFNUixPQUF0QjtBQUNEO0FBQ0YsTUFURCxFQVNHLE1BVEg7QUFVRCxJQXBCRDtBQXFCRCxFQW5DRCxFOzs7Ozs7OztBQ0pBLDBDOzs7Ozs7O0FDQUE7O0FBRUEsS0FBSVMsTUFBTSxlQUFNLENBQUUsQ0FBbEI7QUFDQSxLQUFHLFlBQXlCLFlBQXpCLElBQXlDQyxPQUE1QyxFQUFxRDtBQUNuREQsU0FBTUMsUUFBUUQsR0FBUixDQUFZRSxJQUFaLFdBQU47QUFDRDtBQUNEQyxRQUFPQyxPQUFQLEdBQWlCSixHQUFqQixDIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTI2NWIwMWQwZDAyM2E3MGYzYiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAnLi93ZWIubWFpbi5sZXNzJztcbmltcG9ydCBsb2cgZnJvbSAnQGFzc2V0cy91dGlscy9sb2cnO1xuXG4kKCgpID0+IHtcbiAgbGV0IG1hc2tOb2RlID0gJCgnI0pfbWFzaycpO1xuICBtYXNrTm9kZS5jbGljayhlID0+IHtcbiAgICBpZigkKGUudGFyZ2V0KS5oYXNDbGFzcygnZy1tYXNrJykpe1xuICAgICAgbWFza05vZGUuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICB9XG4gIH0pO1xuICAkKCcjSl9tYXNrTG9naW5CdG4nKS5jbGljayhlID0+IHtcbiAgICBtYXNrTm9kZS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICB9KTtcbiAgJCgnI0pfYmFja0J0bicpLmNsaWNrKGUgPT4ge1xuICAgIG1hc2tOb2RlLmFkZENsYXNzKCdoaWRlJyk7XG4gIH0pO1xuICBsZXQgZG9pbmdMb2dpbiA9IGZhbHNlO1xuICAkKCcjSl9sb2dpbkJ0bicpLmNsaWNrKGUgPT4ge1xuICAgIGlmKGRvaW5nTG9naW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHVzZXJuYW1lID0gJCgnI0pfdXNlcm5hbWUnKS52YWwoKTtcbiAgICBsZXQgcGFzc3dvcmQgPSAkKCcjSl9wYXNzd29yZCcpLnZhbCgpO1xuICAgIGxldCBzcmNQYWdlID0gJCgnI0pfbG9naW5CdG4nKS5kYXRhKCdzcmNwYWdlJyk7XG4gICAgaWYoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkLmdldCgnL2kvbG9naW4nLCB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgfSwgcmVzID0+IHtcbiAgICAgIGlmKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAkKCcjSl9sb2dpbk1zZycpLnRleHQocmVzLm1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbi5hc3NpZ24oJy9wLycrc3JjUGFnZSk7XG4gICAgICB9XG4gICAgfSwgJ2pzb24nKTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2hvbWUvd2ViLm1haW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFnZXMvaG9tZS93ZWIubWFpbi5sZXNzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubGV0IGxvZyA9ICgpID0+IHt9O1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25zb2xlKSB7XG4gIGxvZyA9IGNvbnNvbGUubG9nLmJpbmQodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGxvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy91dGlscy9sb2cuanMiXSwic291cmNlUm9vdCI6IiJ9