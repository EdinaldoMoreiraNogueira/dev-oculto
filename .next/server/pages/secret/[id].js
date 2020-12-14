module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0lgG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/components/Container/ImageContainer.js
var ImageContainer = __webpack_require__("4k8l");

// EXTERNAL MODULE: ./src/components/logo.js
var logo = __webpack_require__("I4A6");

// EXTERNAL MODULE: ./src/components/nameEmailForm.js
var nameEmailForm = __webpack_require__("pN4g");

// CONCATENATED MODULE: ./src/components/Headers/SecretHeader.js







const Container = external_styled_components_default.a.div.withConfig({
  displayName: "SecretHeader__Container",
  componentId: "sc-1oay8m0-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = external_styled_components_default.a.div.withConfig({
  displayName: "SecretHeader__DivForm",
  componentId: "sc-1oay8m0-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
function SecretHeader({
  onAddParticipant
}) {
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;

  const handleSubmit = async ({
    name,
    email
  }) => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    const data = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/participants`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email
      })
    });
    handleResponse({
      name,
      email,
      response: await data.json()
    });
  };

  const handleResponse = ({
    name,
    email,
    response
  }) => {
    if (response.success) {
      onAddParticipant({
        name,
        email,
        externalId: response.id
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ImageContainer["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Voc\xEA foi convidado para participar deste amigo secreto de Fulano!"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DivForm, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(nameEmailForm["a" /* default */], {
        buttonText: "Participar",
        onSubmit: handleSubmit
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/input.js
var input = __webpack_require__("44PY");

// CONCATENATED MODULE: ./src/components/Headers/AdminSecretHeaders.js







const AdminSecretHeaders_Container = external_styled_components_default.a.div.withConfig({
  displayName: "AdminSecretHeaders__Container",
  componentId: "sc-1kmgw7r-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const AdminSecretHeaders_DivForm = external_styled_components_default.a.div.withConfig({
  displayName: "AdminSecretHeaders__DivForm",
  componentId: "sc-1kmgw7r-1"
})(["color:", ";padding:20px;max-width:400px;"], ({
  theme
}) => theme.colors.light);
function AdminSecretHeader() {
  const {
    0: link,
    1: setLink
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    setLink(`${window.location.origin + window.location.pathname}`);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ImageContainer["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AdminSecretHeaders_Container, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(logo["a" /* default */], {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AdminSecretHeaders_DivForm, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Compartilhe essa sala com seus amigos!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(input["a" /* default */], {
        value: link,
        disabled: true
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__("Ib8v");

// CONCATENATED MODULE: ./src/components/Participants.js






const H4 = external_styled_components_default.a.h4.withConfig({
  displayName: "Participants__H4",
  componentId: "sc-1d35l0n-0"
})(["text-align:center;"]);
const Participants_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Participants__Container",
  componentId: "sc-1d35l0n-1"
})(["display:flex;padding:5px 20px;justify-content:center;align-items:center;flex-direction:column;"]);
const ParticipantDiv = external_styled_components_default.a.div.withConfig({
  displayName: "Participants__ParticipantDiv",
  componentId: "sc-1d35l0n-2"
})(["display:flex;align-items:center;"]);
const ParticipantDelete = external_styled_components_default.a.span.withConfig({
  displayName: "Participants__ParticipantDelete",
  componentId: "sc-1d35l0n-3"
})(["color:", ";cursor:pointer;"], ({
  theme
}) => theme.colors.primary);

const Participant = ({
  name,
  email,
  showButton,
  deleteParticipant
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ParticipantDiv, {
  children: [showButton && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParticipantDelete, {
    onClick: deleteParticipant,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ri_["RiDeleteBin2Fill"], {})
  }), name, " (", email, ")"]
});

function Participants({
  showButton,
  participants,
  setParticipants
}) {
  const router = Object(router_["useRouter"])();
  const {
    id,
    adminKey
  } = router.query;

  const deleteAPIParticipant = async participantId => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    return await fetch(`${NEXT_PUBLIC_API_URL}/secrets/${id}/participants/${participantId}`, {
      method: 'DELETE',
      headers: new Headers({
        'admin-key': adminKey
      })
    });
  };

  const deleteParticipant = async id => {
    const {
      status
    } = await deleteAPIParticipant(id);
    if (status === 204) setParticipants(participants.filter(({
      externalId
    }) => externalId !== id));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(H4, {
      children: "Participantes: "
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Participants_Container, {
      children: [participants.length === 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Nenhum participante cadastrado ainda."
      }), participants.map(({
        name,
        email,
        externalId
      }, key) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Participant, {
          name: name,
          email: email,
          showButton: showButton,
          deleteParticipant: () => deleteParticipant(externalId)
        }, `participant-${key}`);
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/button.js
var components_button = __webpack_require__("ZXdF");

// CONCATENATED MODULE: ./src/components/Sort.js






const Sort_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Sort__Container",
  componentId: "snc6fl-0"
})(["display:flex;align-items:center;justify-content:center;"]);
function Sort({
  hasDrew
}) {
  const router = Object(router_["useRouter"])();
  const {
    id,
    adminKey
  } = router.query;
  const {
    0: drew,
    1: setDrew
  } = Object(external_react_["useState"])(false);

  const handleSort = async () => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    const {
      status
    } = await fetch(`${NEXT_PUBLIC_API_URL}/secrets/${id}/draw`, {
      method: 'PUT',
      headers: new Headers({
        'admin-key': adminKey
      })
    });
    if (status === 200) setDrew(true);
  };

  const DREW_STATUS = hasDrew || drew;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Sort_Container, {
    children: [!DREW_STATUS && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_button["a" /* default */], {
      onClick: handleSort,
      children: "Sortear"
    }), DREW_STATUS && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "O sorteio j\xE1 foi realizado."
    })]
  });
}
// CONCATENATED MODULE: ./pages/secret/[id].js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Secret({
  participants,
  hasDrew,
  isAdmin
}) {
  const {
    0: localParticipants,
    1: setLocalParticipants
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    setLocalParticipants(participants);
    console.log({
      participants,
      hasDrew,
      isAdmin
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [isAdmin && /*#__PURE__*/Object(jsx_runtime_["jsx"])(AdminSecretHeader, {}), !isAdmin && /*#__PURE__*/Object(jsx_runtime_["jsx"])(SecretHeader, {
      onAddParticipant: participant => setLocalParticipants([...localParticipants, participant])
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Participants, {
      showButton: isAdmin,
      participants: localParticipants,
      setParticipants: setLocalParticipants
    }), isAdmin && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sort, {
      hasDrew: hasDrew
    })]
  });
}

async function getServerSideProps(context) {
  const data = await getSecretsById(context.query);
  return {
    props: _objectSpread(_objectSpread({}, data), context.query)
  };
}

async function getSecretsById({
  id,
  adminKey
}) {
  const {
    NEXT_PUBLIC_API_URL
  } = process.env;
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/secrets/${id}`, {
    method: "GET",
    headers: new Headers({
      'admin-key': adminKey
    })
  });
  return await res.json();
}

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Secret);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0lgG");


/***/ }),

/***/ "44PY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "input__Input",
  componentId: "yxxi-0"
})(["padding:20px;color:", ";background-color:", ";border:0;border-radius:10px;width:88%;&:focus{border:none;outline:none;}&::placeholder{color:", ";"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primary);
function InputComponent(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Input, _objectSpread({}, props));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4k8l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageContainer; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ImageContainer__Background",
  componentId: "sc-19jwut0-0"
})(["background-image:url('/background.png');background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function ImageContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Background, {
    children: children
  });
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "I4A6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "logo__H1",
  componentId: "sc-1byppf9-0"
})(["font-size:64px;color:", ""], ({
  theme
}) => theme.colors.light);
function Logo() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(H1, {
    children: '{Amigo} Oculto'
  });
}

/***/ }),

/***/ "Ib8v":
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "ZXdF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StyleButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "button__StyleButton",
  componentId: "sc-15wau8f-0"
})(["border:none;cursor:pointer;padding:15px 30px;font-size:14px;border-radius:50px;display:block;margin:10px 0;background-color:", ";"], ({
  theme
}) => theme.colors.secondary);
function Button(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StyleButton, _objectSpread({}, props));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pN4g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("44PY");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZXdF");






const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "nameEmailForm__Form",
  componentId: "sc-1mcocyd-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}> input,button{margin:10px;}"]);

function NameEmailForm({
  buttonText,
  onSubmit
}) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      name,
      email
    });
    setName('');
    setEmail('');
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Form, {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      placeholder: "Seu nome",
      required: true,
      value: name,
      onChange: ({
        target
      }) => setName(target.value)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      type: "email",
      placeholder: "Seu email",
      required: true,
      value: email,
      onChange: ({
        target
      }) => setEmail(target.value)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      type: "submit",
      children: buttonText
    })]
  });
}

NameEmailForm.defaultProps = {
  buttonText: "Criar",
  onSubmit: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (NameEmailForm);

/***/ })

/******/ });