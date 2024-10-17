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

/***/ "../components/ChatItem/ChatItem.js":
/*!******************************************!*\
  !*** ../components/ChatItem/ChatItem.js ***!
  \******************************************/
/*! exports provided: ChatItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatItem\", function() { return ChatItem; });\nfunction ChatItem({ userId, avatar, name, message, time, status }) {\r\n    const chatItem = document.createElement('div');\r\n    chatItem.classList.add('chat-item');\r\n    chatItem.setAttribute('data-user-id', userId);\r\n\r\n    chatItem.innerHTML = `\r\n        <img src=\"${avatar}\" alt=\"avatar\" class=\"chat-avatar\">\r\n        <div class=\"chat-info\">\r\n            <div class=\"chat-name\">${name}</div>\r\n            <div class=\"chat-last-message\">${message}</div>\r\n        </div>\r\n        <div class=\"chat-meta\">\r\n            <div class=\"chat-time\">${time}</div>\r\n            <div class=\"chat-status material-symbols-outlined\">${status}</div>\r\n        </div>\r\n    `;\r\n\r\n    return chatItem;\r\n}\n\n//# sourceURL=webpack:///../components/ChatItem/ChatItem.js?");

/***/ }),

/***/ "../components/CreateChatButton/CreateChatButton.js":
/*!**********************************************************!*\
  !*** ../components/CreateChatButton/CreateChatButton.js ***!
  \**********************************************************/
/*! exports provided: CreateChatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateChatButton\", function() { return CreateChatButton; });\nfunction CreateChatButton() {\r\n    const button = document.createElement('div');\r\n    button.classList.add('create-chat-button', 'material-symbols-outlined');\r\n    button.textContent = 'edit';\r\n    \r\n    button.addEventListener('click', () => {\r\n        alert('Создать новый чат!');\r\n    });\r\n    \r\n    return button;\r\n}\r\n\n\n//# sourceURL=webpack:///../components/CreateChatButton/CreateChatButton.js?");

/***/ }),

/***/ "../components/Header/Header.js":
/*!**************************************!*\
  !*** ../components/Header/Header.js ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\nfunction Header({ userId }) {\r\n    const header = document.createElement('div');\r\n    header.className = 'header';\r\n\r\n    if (userId) {\r\n        const users = JSON.parse(localStorage.getItem('users'));\r\n        const userName = users[userId].name;\r\n        const lastSeen = users[userId].lastSeen;\r\n\r\n        header.innerHTML = `\r\n            <div class=\"back-arrow material-symbols-outlined\">arrow_back</div>   \r\n            <div class=\"user\">\r\n                <div class=\"user-avatar material-symbols-outlined\">account_circle</div> \r\n                <div class=\"user-info\">\r\n                    <div>${userName}</div>\r\n                    <div>${lastSeen}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"search material-symbols-outlined\">search</div>\r\n            <div class=\"menu material-symbols-outlined\">more_vert</div>\r\n        `;\r\n    } else {\r\n        header.innerHTML = `\r\n            <div class=\"burger material-symbols-outlined\">menu</div>\r\n            <div class=\"title\">Messenger</div>\r\n            <div class=\"search material-symbols-outlined\">search</div>\r\n        `;\r\n    }\r\n\r\n    return header;\r\n}\n\n//# sourceURL=webpack:///../components/Header/Header.js?");

/***/ }),

/***/ "../components/Message/Message.js":
/*!****************************************!*\
  !*** ../components/Message/Message.js ***!
  \****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\nfunction Message({ text, timestamp, fromUser, read }) {\r\n    const messageDiv = document.createElement('div');\r\n    messageDiv.className = fromUser ? 'message-received' : 'message-sent';\r\n    \r\n    const messageStatusIcon = read ? 'done_all' : 'done';\r\n\r\n    messageDiv.innerHTML = `\r\n        <div class=\"message-text\">${text}</div>\r\n        <div class=\"message-info\">\r\n            ${new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\r\n            <span class=\"message-status material-symbols-outlined\">${messageStatusIcon}</span>\r\n        </div>\r\n    `;\r\n    \r\n    return messageDiv;\r\n}\n\n//# sourceURL=webpack:///../components/Message/Message.js?");

/***/ }),

/***/ "../components/MessageForm/MessageForm.js":
/*!************************************************!*\
  !*** ../components/MessageForm/MessageForm.js ***!
  \************************************************/
/*! exports provided: MessageForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageForm\", function() { return MessageForm; });\nfunction MessageForm() {\r\n    const form = document.createElement('form');\r\n    form.className = 'message-form';\r\n\r\n    form.innerHTML = `\r\n        <div class=\"form-input\" name=\"message-text\" data-placeholder=\"Cообщение\" contenteditable=\"true\"></div>\r\n        <div class=\"material-symbols-outlined paperclip\">attach_file</div>\r\n    `;\r\n\r\n    return form;\r\n}\n\n//# sourceURL=webpack:///../components/MessageForm/MessageForm.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ \"../components/Header/Header.js\");\n/* harmony import */ var _components_ChatItem_ChatItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ChatItem/ChatItem */ \"../components/ChatItem/ChatItem.js\");\n/* harmony import */ var _components_CreateChatButton_CreateChatButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateChatButton/CreateChatButton */ \"../components/CreateChatButton/CreateChatButton.js\");\n/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Message/Message */ \"../components/Message/Message.js\");\n/* harmony import */ var _components_MessageForm_MessageForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MessageForm/MessageForm */ \"../components/MessageForm/MessageForm.js\");\n\n\n\n\n\n\nfunction initializeData() {\n  if (!localStorage.getItem('users')) {\n    var initialData = {\n      users: {\n        user1: {\n          name: 'Дженнифер Элли',\n          avatar: 'avatar.png',\n          lastSeen: 'была 2 часа назад',\n          messages: [{\n            text: 'Привет!',\n            timestamp: '2024-10-17T10:00:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Как твои дела?',\n            timestamp: '2024-10-17T10:01:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Давно не общались.',\n            timestamp: '2024-10-17T10:02:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Ты как там?',\n            timestamp: '2024-10-17T10:03:00Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Работаю много...',\n            timestamp: '2024-10-17T10:04:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Как у тебя с проектом?',\n            timestamp: '2024-10-17T10:05:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Почти закончил, осталось немного.',\n            timestamp: '2024-10-17T10:06:00Z',\n            fromUser: true,\n            read: true\n          }]\n        },\n        user2: {\n          name: 'Антон Иванов',\n          avatar: 'avatar.png',\n          lastSeen: 'был 10 минут назад',\n          messages: [{\n            text: 'Привет!',\n            timestamp: '2024-10-17T10:00:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Все хорошо, спасибо! А у тебя?',\n            timestamp: '2024-10-17T10:01:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Да, тоже все в порядке.',\n            timestamp: '2024-10-17T10:02:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Что нового?',\n            timestamp: '2024-10-17T10:03:30Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Работаю над новым проектом.',\n            timestamp: '2024-10-17T10:04:30Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Это здорово!',\n            timestamp: '2024-10-17T10:05:30Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Если нужна помощь, дай знать!',\n            timestamp: '2024-10-17T10:06:30Z',\n            fromUser: true,\n            read: false\n          }]\n        },\n        user3: {\n          name: 'Михаил Петров',\n          avatar: 'avatar.png',\n          lastSeen: 'был 30 минут назад',\n          messages: [{\n            text: 'Привет!',\n            timestamp: '2024-10-17T09:00:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Как успехи?',\n            timestamp: '2024-10-17T09:01:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Готовимся к запуску!',\n            timestamp: '2024-10-17T09:02:00Z',\n            fromUser: true,\n            read: false\n          }]\n        },\n        user4: {\n          name: 'Александр Кузнецов',\n          avatar: 'avatar.png',\n          lastSeen: 'был 1 час назад',\n          messages: [{\n            text: 'Привет, как продвигается проект?',\n            timestamp: '2024-10-17T11:00:00Z',\n            fromUser: false,\n            read: true\n          }, {\n            text: 'Работаю над задачей.',\n            timestamp: '2024-10-17T11:01:00Z',\n            fromUser: true,\n            read: true\n          }, {\n            text: 'Если нужно, могу помочь.',\n            timestamp: '2024-10-17T11:02:00Z',\n            fromUser: false,\n            read: false\n          }]\n        }\n      },\n      chats: [{\n        userId: 'user1',\n        lastMessage: {\n          text: 'Почти закончил, осталось немного.',\n          timestamp: '2024-10-17T10:06:00Z',\n          fromUser: true,\n          read: false\n        }\n      }, {\n        userId: 'user2',\n        lastMessage: {\n          text: 'Если нужна помощь, дай знать!',\n          timestamp: '2024-10-17T10:06:30Z',\n          fromUser: true,\n          read: true\n        }\n      }, {\n        userId: 'user3',\n        lastMessage: {\n          text: 'Готовимся к запуску!',\n          timestamp: '2024-10-17T09:02:00Z',\n          fromUser: false,\n          read: true\n        }\n      }, {\n        userId: 'user4',\n        lastMessage: {\n          text: 'Если нужно, могу помочь.',\n          timestamp: '2024-10-17T11:02:00Z',\n          fromUser: false,\n          read: false\n        }\n      }]\n    };\n    localStorage.setItem('users', JSON.stringify(initialData.users));\n    localStorage.setItem('chats', JSON.stringify(initialData.chats));\n  }\n}\nfunction renderChatInterface(userId) {\n  var app = document.getElementById('app');\n  app.innerHTML = '';\n  var isChat = userId !== null;\n  var header = Object(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"Header\"])({\n    userId: isChat ? userId : '',\n    isChat: isChat\n  });\n  app.appendChild(header);\n  var backArrow = document.querySelector('.back-arrow');\n  if (isChat) {\n    if (backArrow) {\n      var _backArrow = document.querySelector('.back-arrow');\n      _backArrow.addEventListener('click', function () {\n        renderChatInterface(null);\n        loadChats();\n        addChatButton();\n      });\n    }\n    var chatContainer = document.createElement('div');\n    chatContainer.className = 'chat';\n    loadMessages(chatContainer, userId);\n    app.appendChild(chatContainer);\n    var messageForm = Object(_components_MessageForm_MessageForm__WEBPACK_IMPORTED_MODULE_5__[\"MessageForm\"])();\n    app.appendChild(messageForm);\n    var _input = document.querySelector('.form-input');\n    console.log(_input);\n    _input.addEventListener('keypress', function (event) {\n      if (event.key === 'Enter') {\n        handleSubmit(event, userId);\n      }\n    });\n  }\n}\nfunction loadMessages(chatContainer, userId) {\n  var users = JSON.parse(localStorage.getItem('users')) || {};\n  var user = users[userId];\n  if (user && user.messages) {\n    user.messages.forEach(function (message) {\n      chatContainer.appendChild(Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_4__[\"Message\"])(message));\n    });\n  }\n}\nfunction getStatus(message) {\n  if (message.fromUser && !message.read) {\n    return 'trip_origin';\n  } else if (!message.fromUser && !message.read) {\n    return 'check';\n  } else if (!message.fromUser && message.read) {\n    return 'done_all';\n  }\n  return '';\n}\nfunction loadChats() {\n  var app = document.getElementById('app');\n  var chatsContainer = document.createElement('div');\n  chatsContainer.classList.add('chats');\n  app.appendChild(chatsContainer);\n  var chatsData = JSON.parse(localStorage.getItem('chats'));\n  var usersData = JSON.parse(localStorage.getItem('users'));\n  chatsData.forEach(function (chat) {\n    var user = usersData[chat.userId];\n    var lastMessage = chat.lastMessage.text;\n    var time = new Date(chat.lastMessage.timestamp).toLocaleTimeString([], {\n      hour: '2-digit',\n      minute: '2-digit'\n    });\n    var status = getStatus(chat.lastMessage);\n    var chatItem = Object(_components_ChatItem_ChatItem__WEBPACK_IMPORTED_MODULE_2__[\"ChatItem\"])({\n      userId: chat.userId,\n      avatar: user.avatar,\n      name: user.name,\n      message: lastMessage,\n      time: time,\n      status: status\n    });\n    chatItem.addEventListener('click', function () {\n      selectChat(chat.userId);\n    });\n    chatsContainer.appendChild(chatItem);\n  });\n}\nfunction selectChat(userId) {\n  var usersData = JSON.parse(localStorage.getItem('users'));\n  var user = usersData[userId];\n  if (user) {\n    renderChatInterface(userId);\n  }\n}\nfunction addChatButton() {\n  var createChatButton = Object(_components_CreateChatButton_CreateChatButton__WEBPACK_IMPORTED_MODULE_3__[\"CreateChatButton\"])();\n  app.appendChild(createChatButton);\n}\nfunction handleSubmit(event, userId) {\n  event.preventDefault();\n  var messageText = input.textContent.trim();\n  if (messageText) {\n    var messageData = createMessageData(messageText, userId);\n    saveMessage(userId, messageData);\n    addMessage(messageData);\n    input.textContent = '';\n  }\n}\nfunction createMessageData(text, userId) {\n  return {\n    text: text,\n    timestamp: new Date().toISOString(),\n    fromUser: true,\n    read: false\n  };\n}\nfunction saveMessage(userId, message) {\n  var users = JSON.parse(localStorage.getItem('users'));\n  var userMessages = users[userId].messages || [];\n  userMessages.push(message);\n  users[userId].messages = userMessages;\n  localStorage.setItem('users', JSON.stringify(users));\n}\nfunction addMessage(message) {\n  var chatContainer = document.querySelector('.chat');\n  chatContainer.appendChild(Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_4__[\"Message\"])(message));\n  chatContainer.scrollTop = chatContainer.scrollHeight;\n}\ninitializeData();\nrenderChatInterface(null);\nloadChats();\naddChatButton();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });