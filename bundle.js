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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction initializeData() {\n  if (!localStorage.getItem('users')) {\n    var initialData = {\n      users: {\n        user1: {\n          name: 'Дженнифер Элли',\n          avatar: 'avatar.png',\n          lastSeen: 'была 2 часа назад',\n          messages: [{\n            text: 'Привет!',\n            timestamp: '2024-10-17T10:00:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Как твои дела?',\n            timestamp: '2024-10-17T10:01:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Давно не общались.',\n            timestamp: '2024-10-17T10:02:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Ты как там?',\n            timestamp: '2024-10-17T10:03:00Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Работаю много...',\n            timestamp: '2024-10-17T10:04:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Как у тебя с проектом?',\n            timestamp: '2024-10-17T10:05:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Почти закончил, осталось немного.',\n            timestamp: '2024-10-17T10:06:00Z',\n            fromUser: true,\n            read: true\n          }]\n        },\n        user2: {\n          name: 'Антон Иванов',\n          avatar: 'avatar.png',\n          lastSeen: 'был 10 минут назад',\n          messages: [{\n            text: 'Привет!',\n            timestamp: '2024-10-17T10:00:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Все хорошо, спасибо! А у тебя?',\n            timestamp: '2024-10-17T10:01:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Да, тоже все в порядке.',\n            timestamp: '2024-10-17T10:02:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Что нового?',\n            timestamp: '2024-10-17T10:03:30Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Работаю над новым проектом.',\n            timestamp: '2024-10-17T10:04:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Это здорово!',\n            timestamp: '2024-10-17T10:05:30Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Если нужна помощь, дай знать!',\n            timestamp: '2024-10-17T10:06:30Z',\n            fromUser: true,\n            read: false\n          }]\n        },\n        user3: {\n          name: 'Михаил Петров',\n          avatar: 'avatar.png',\n          lastSeen: 'был 30 минут назад',\n          messages: [{\n            text: 'Привет!',\n            timestamp: '2024-10-17T09:00:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Как успехи?',\n            timestamp: '2024-10-17T09:01:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Готовимся к запуску!',\n            timestamp: '2024-10-17T09:02:00Z',\n            fromUser: true,\n            read: false\n          }]\n        },\n        user4: {\n          name: 'Александр Кузнецов',\n          avatar: 'avatar.png',\n          lastSeen: 'был 1 час назад',\n          messages: [{\n            text: 'Привет, как продвигается проект?',\n            timestamp: '2024-10-17T11:00:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Работаю над задачей.',\n            timestamp: '2024-10-17T11:01:00Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Если нужно, могу помочь.',\n            timestamp: '2024-10-17T11:02:00Z',\n            fromUser: false,\n            read: false\n          }]\n        }\n      },\n      chats: [{\n        userId: 'user1',\n        lastMessage: {\n          text: 'Почти закончил, осталось немного.',\n          timestamp: '2024-10-17T10:06:00Z',\n          fromUser: true,\n          read: false\n        }\n      }, {\n        userId: 'user2',\n        lastMessage: {\n          text: 'Если нужна помощь, дай знать!',\n          timestamp: '2024-10-17T10:06:30Z',\n          fromUser: true,\n          read: true\n        }\n      }, {\n        userId: 'user3',\n        lastMessage: {\n          text: 'Готовимся к запуску!',\n          timestamp: '2024-10-17T09:02:00Z',\n          fromUser: false,\n          read: true\n        }\n      }, {\n        userId: 'user4',\n        lastMessage: {\n          text: 'Если нужно, могу помочь.',\n          timestamp: '2024-10-17T11:02:00Z',\n          fromUser: false,\n          read: false\n        }\n      }]\n    };\n    localStorage.setItem('users', JSON.stringify(initialData.users));\n    localStorage.setItem('chats', JSON.stringify(initialData.chats));\n  }\n}\ninitializeData();\nvar form = document.querySelector('.message-form');\nvar input = document.querySelector('.form-input');\nvar chat = document.querySelector('.chat');\nvar senderName = \"Вы\";\nwindow.onload = loadMessages;\nform.addEventListener('submit', handleSubmit);\ninput.addEventListener('keypress', function (event) {\n  if (event.key === 'Enter') {\n    handleSubmit(event);\n  }\n});\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.textContent.trim();\n  if (messageText) {\n    var messageData = createMessageData(messageText);\n    saveMessage(messageData);\n    addMessage(messageData);\n    input.value = '';\n  }\n}\nfunction createMessageData(text) {\n  return {\n    text: text,\n    sender: senderName,\n    time: new Date().toLocaleTimeString([], {\n      hour: '2-digit',\n      minute: '2-digit'\n    })\n  };\n}\nfunction saveMessage(message) {\n  var messages = JSON.parse(localStorage.getItem('messages')) || [];\n  messages.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction addMessage(message) {\n  var messageDiv = document.createElement('div');\n  messageDiv.className = message.sender === 'Дженнифер' ? 'message-received' : 'message-sent';\n  messageDiv.innerHTML = \"\\n        <div class=\\\"message-text\\\">\".concat(message.text, \"</div>\\n        <div class=\\\"message-info\\\">\\n            \").concat(message.time, \" <span class=\\\"message-status material-symbols-outlined\\\">done_all</span>\\n        </div>\\n    \");\n  chat.appendChild(messageDiv);\n  chat.scrollTop = chat.scrollHeight;\n}\nfunction loadMessages() {\n  var messages = JSON.parse(localStorage.getItem('messages')) || [];\n  messages.forEach(addMessage);\n}\nfunction deleteMessages() {\n  if (confirm(\"Вы действительно хотите удалить все сообщения?\")) {\n    chat.innerHTML = '';\n    localStorage.removeItem('messages');\n    dropdownMenu.classList.remove('active');\n  }\n}\nvar menu = document.querySelector('.menu');\nvar dropdownMenu = document.querySelector('#dropdown-menu');\nvar btnDeleteMessages = document.querySelector('#delete-messages');\nbtnDeleteMessages.addEventListener('click', deleteMessages);\nmenu.addEventListener('click', function () {\n  dropdownMenu.classList.toggle('active');\n});\ndocument.addEventListener('click', function (event) {\n  if (!menu.contains(event.target) && !dropdownMenu.contains(event.target)) {\n    dropdownMenu.classList.remove('active');\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });