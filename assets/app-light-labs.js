(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('._SheetOverlay_oldqw_1 {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100;\n    background-color: rgba(0, 0, 0, 0.5);\n\n    &[data-state="open"] {\n        /* data-[state=open]:animate-in data-[state=open]:duration-500 */\n    }\n\n    &[data-state="closed"] {\n        /* data-[state=closed]:animate-out data-[state=closed]:duration-300 */\n    }\n}\n\n._SheetContent_oldqw_19 {\n    position: fixed;\n    z-index: 1000;\n    padding: 1.5rem;\n    gap: 1rem;\n    background-color: #ffffff;\n    transition-property: background-color, border-color, color, fill, stroke,\n        opacity, box-shadow, transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 300ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n        0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\n    /* right-variant */\n    top: 0;\n    bottom: 0;\n    right: 0;\n    border-color: #e5e7eb;\n    border-left-width: 1px;\n    width: 75%;\n    height: 100%;\n    z-index:100;\n    @media (min-width: 640px) {\n        max-width: 484px;\n    }\n\n    &[data-state="open"] {\n        /* slide-in-from-right */\n    }\n\n    &[data-state="closed"] {\n        /* slide-out-to-right */\n    }\n}\n\n._SheetHeader_oldqw_55 {\n    display: flex;\n    margin-top: 0.5rem;\n    flex-direction: column;\n    text-align: center;\n\n    @media (min-width: 640px) {\n        text-align: left;\n    }\n}\n\n._SheetFooter_oldqw_66 {\n    display: flex;\n    flex-direction: column-reverse;\n\n    @media (min-width: 640px) {\n        margin-left: 0.5rem;\n        flex-direction: row;\n        justify-content: flex-end;\n    }\n}\n\n._SheetTitle_oldqw_77 {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n    font-weight: 600;\n\n    /* ll-font-600 text-neutral-950 */\n}\n\n._SheetDescription_oldqw_85 {\n    color: 14px;\n}\n._TabsList_1wd0b_1 {\n    display: inline-flex;\n    padding: 0.25rem;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.375rem;\n    height: 2.5rem;\n    background-color: #f5f5f5;\n    color: #737373;\n    width: 100%;\n}\n\n._TabsTrigger_1wd0b_13 {\n    display: inline-flex;\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.125rem;\n    --ring-offset-color: #ffffff;\n    font-weight: 500;\n    white-space: nowrap;\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 300ms;\n    font-size: 14px;\n\n    &[data-state="active"] {\n        --tw-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.12),\n            0 0px 0px 1px rgba(103, 110, 118, 0.16),\n            0 5px 2px 0px rgba(103, 110, 118, 0.08);\n        --tw-shadow-colored: 0 1px 1px 0px var(--tw-shadow-color),\n            0 0px 0px 1px var(--tw-shadow-color),\n            0 5px 2px 0px var(--tw-shadow-color);\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n        border-radius: 4px;\n        color: #262c40;\n        background-color: white;\n        border-radius: 4px;\n    }\n\n    &:disabled {\n        opacity: 0.5;\n        pointer-events: none;\n    }\n\n    &:focus-visible {\n    }\n}\n\n._TabsContent_1wd0b_54 {\n    margin-top: 0.5rem;\n}\n._TooltipContent_1ox36_1 {\n    overflow: hidden;\n    z-index: 50;\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    border-radius: 0.375rem;\n    background-color: #ffffff;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n        0 2px 4px -1px rgba(0, 0, 0, 0.06);\n    color: 14px;\n}\n._AppContainer_u04ym_1 {\n    display: flex;\n    padding: 1rem;\n    justify-content: center;\n    align-items: center;\n    background: #e8eef2;\n    font-family: Aftika;\n}\n\n._TabTrigger_u04ym_10 {\n    width: 100%;\n    color: 10px;\n    font-weight: 500;\n    font-size: 10px;\n    /* TODO: color missing - add later */\n}\n\n._PlaceCenter_u04ym_18 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n._CardContainer_u04ym_24 {\n    display: flex;\n    padding: 1.25rem;\n    flex-direction: column;\n    border-width: 2px;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff;\n    max-width: 414px;\n    border-color: #7fc1ed;\n}\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n    box-sizing: border-box; /* 1 */\n    border-width: 0; /* 2 */\n    border-style: solid; /* 2 */\n    border-color: black; /* 2 */\n}\n\n::before,\n::after {\n    --tw-content: "";\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -moz-tab-size: 4; /* 3 */\n    tab-size: 4; /* 3 */\n    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n    margin: 0; /* 1 */\n    line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n    height: 0; /* 1 */\n    color: inherit; /* 2 */\n    border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n    text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\n/* h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: inherit;\n    font-weight: inherit;\n} */\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n    color: inherit;\n    text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n        "Liberation Mono", "Courier New", monospace; /* 1 */\n\n    font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n    font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n    text-indent: 0; /* 1 */\n    border-color: inherit; /* 2 */\n    border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-feature-settings: inherit; /* 1 */\n    font-variation-settings: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    font-weight: inherit; /* 1 */\n    line-height: inherit; /* 1 */\n    letter-spacing: inherit; /* 1 */\n    color: inherit; /* 1 */\n    margin: 0; /* 2 */\n    padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type="button"]),\ninput:where([type="reset"]),\ninput:where([type="submit"]) {\n    -webkit-appearance: button; /* 1 */\n    background-color: transparent; /* 2 */\n    background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n    outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n    vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n    display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n    margin: 0;\n}\n\nfieldset {\n    margin: 0;\n    padding: 0;\n}\n\nlegend {\n    padding: 0;\n}\n\nol,\nul,\nmenu {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n    padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n    resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n    opacity: 1; /* 1 */\n    color: #9ca3af;\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n    cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n    cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n    display: block; /* 1 */\n    vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n    max-width: 100%;\n    height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n    display: none;\n}\n@keyframes ping {\n    75%,\n    to {\n        transform: scale(2);\n        opacity: 0;\n    }\n}\n.animate-ping {\n    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Black-Cwm6J_OZ.woff2") format("opentype");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 900;\n}\n\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Extra_Bold-BPTMWUJS.woff2") format("opentype");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 800;\n}\n\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Bold-DnilZwAP.woff2") format("woff2");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n}\n\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Semi_Bold-D3JV1ANz.woff2") format("opentype");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 500;\n}\n\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Regular-Ou1f2DXc.woff2") format("opentype");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n}\n\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Light-B-fyAM6Q.woff2") format("opentype");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 300;\n}\n@font-face {\n    font-family: "Aftika";\n    src: url("/assets/Aftika_Extra_Light-BCCw26Ee.woff2")\n        format("opentype");\n    font-display: swap;\n    font-style: normal;\n    font-weight: 200;\n}\n\n@keyframes ping {\n    75%,\n    to {\n        transform: scale(2);\n        opacity: 0;\n    }\n}\n\n.animate-ping {\n    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const $2AODx$react = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc(h, b);
    } else
      k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = dh(a, e, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e);
  c = Xh(a, b, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e);
}
function kj(a, b, c, d, e, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h, f2, b);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f2, g, h, k2) {
  a = new bl(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f2, g, h, k2) {
  a = cl(c, d, true, a, e, f2, g, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f2 = L(), g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f2), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p(299));
  var c = false, d = "", e = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
const $7SXl2$reactdom = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
function r(e) {
  var t2, f2, n2 = "";
  if ("string" == typeof e || "number" == typeof e)
    n2 += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t2 = 0; t2 < o; t2++)
        e[t2] && (f2 = r(e[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else
      for (f2 in e)
        e[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++)
    (e = arguments[f2]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  const separator = config.separator;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  return function splitModifiers(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index2 = 0; index2 < className.length; index2++) {
      let currentCharacter = className[index2];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index2, index2 + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index2;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(originalClassName);
    let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter((parsed) => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map((parsed) => parsed.originalClassName).join(" ");
}
function twJoin() {
  let index2 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index2 < arguments.length) {
    if (argument = arguments[index2++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
function getDefaultConfig() {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function lcn(...inputs) {
  return twMerge(clsx(inputs));
}
function lcalculatePercentage(actual, total) {
  if (total === 0) {
    return 0;
  }
  const percentage = actual / total * 100;
  return Math.ceil(percentage);
}
const LCREATINE_ELEMENTS = [
  {
    element: "Arsenic",
    limitLabel: "Limit",
    limit: 10,
    value: 0.0858
  },
  {
    element: "Cadmium",
    limitLabel: "Limit",
    limit: 4.1,
    value: 0.0373
  },
  {
    element: "Mercury",
    limitLabel: "Limit",
    limit: 0.3,
    value: 0.0373
  },
  {
    element: "Lead",
    limitLabel: "Limit",
    limit: 0.5,
    value: 0.047
  }
];
const LPROTEIN_ELEMENTS = [
  {
    element: "Arsenic",
    limitLabel: "USP Limit",
    limit: 15,
    value: 0.371
  },
  {
    element: "Cadmium",
    limitLabel: "USP Limit",
    limit: 5,
    value: 0.245
  },
  {
    element: "Mercury",
    limitLabel: "USP Limit",
    limit: 15,
    value: 0.186
  },
  {
    element: "Lead",
    limitLabel: "USP Limit",
    limit: 10,
    value: 0.234
  }
];
const LCREATINE_PRODUCT = {
  name: "Creatine HMB",
  quantity: "(5g) "
};
const LPROTEIN_PRODUCT = {
  name: "Whey Protein Isolate",
  quantity: " "
};
const LNegativeContent = ({
  compound
}) => {
  const elementMap = compound === "creatine" ? LCREATINE_ELEMENTS : LPROTEIN_ELEMENTS;
  const product = compound === "creatine" ? LCREATINE_PRODUCT : LPROTEIN_PRODUCT;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              width: "100%",
              backgroundColor: "rgb(28 194 134 / 0.08)",
              padding: "8px",
              borderRadius: "6px",
              border: "2px solid #AEC3BB"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                style: {
                  fontSize: "10px",
                  fontWeight: 400
                },
                children: [
                  "Based on the analysis, Transparent Labs",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-default", children: "-" }),
                  " ",
                  product.name,
                  " ",
                  product.quantity,
                  "has passed all regulatory standards and lab requirements to be marked as",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontWeight: "700"
                      },
                      className: "font-bold ll-font-700",
                      children: "entirely safe."
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
              marginBottom: "0px"
            },
            children: elementMap.map((element, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              LElementChart,
              {
                label: element.element,
                limitLabel: element.limitLabel,
                limit: element.limit,
                value: element.value,
                valuePercentage: lcalculatePercentage(element.value, element.limit)
              },
              index2
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            style: {
              fontSize: "10px",
              color: "#3B94D1",
              fontWeight: 500,
              marginBottom: "8px"
            },
            children: "Rigorously tested for purity."
          }
        )
      ]
    }
  );
};
const LElementChart = ({
  label,
  limitLabel,
  limit,
  value,
  valuePercentage
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: "12px",
        fontWeight: 500,
        color: "#333333"
      }, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: "9px",
        fontWeight: 300,
        color: "#6E7A7E"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-default font-aftika", children: [
        limitLabel,
        " ",
        limit,
        " µg"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            height: "100%",
            backgroundColor: "#7FC1ED",
            width: `${valuePercentage}%`
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "9px",
            color: "#7FC1ED",
            paddingLeft: "1px",
            fontWeight: 300
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: 0
          }, children: "x" }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `bg-[#f1f1f1]`,
          style: {
            width: `${100 - valuePercentage}%`,
            backgroundColor: "#f1f1f1"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontSize: "9px",
                color: "#333333",
                paddingLeft: "1px",
                fontWeight: 300
              },
              id: "claim-label",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {}, className: "font-default font-aftika", children: [
                " ",
                value,
                " µg"
              ] })
            }
          )
        }
      )
    ] })
  ] });
};
const LCREATINE_CONTENT = {
  element: "Creatine",
  limit: 5,
  value: 5.2
};
const LPROTEIN_CONTENT = {
  element: "Protein",
  limit: 28,
  value: 28.8
};
const LPositiveContent = ({
  compound
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        height: "100%",
        paddingTop: "10px",
        paddingBottom: "16px",
        width: "100%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LProgressChart, { compound })
    }
  );
};
const LProgressChart = ({ compound }) => {
  const compoundLabel = compound === "creatine" ? "Creatine" : "Protein";
  const contentValue = compound == "creatine" ? LCREATINE_CONTENT : LPROTEIN_CONTENT;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        height: "100%"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "labels",
            style: {
              display: "flex"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: "60%",
                    display: "flex",
                    gap: "4px",
                    flexDirection: "column",
                    paddingBottom: "4px"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "14px",
                        fontWeight: 500
                      },
                      children: compoundLabel
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    width: "40%",
                    gap: "4px",
                    justifyContent: "flex-end"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "claim-label", style: { display: "flex", placeItems: "end" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        id: "claim-label-text",
                        style: {
                          fontSize: "9px",
                          color: "#6E7A7E",
                          fontWeight: 300
                        },
                        children: "Claim"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "actual-label", style: { display: "flex", placeItems: "end" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        id: "actual-label-text",
                        style: {
                          fontSize: "9px",
                          color: "#6E7A7E",
                          fontWeight: 300
                        },
                        children: "Actual"
                      }
                    ) })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "progress-bar",
            style: {
              position: "relative",
              display: "flex",
              height: "100%",
              borderBottom: "2px",
              borderColor: "#333",
              borderWidth: "0 0 1px 0",
              borderStyle: "solid",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  id: "claim-bg",
                  style: {
                    display: "flex",
                    backgroundColor: "#7FC1ED",
                    // width: "85%",
                    width: `${lcalculatePercentage(contentValue.limit, contentValue.value)}%`,
                    borderRight: "2px",
                    borderRightColor: "#7FC1ED",
                    justifyContent: "flex-end"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      id: "claim-label",
                      style: {
                        fontSize: "9px",
                        color: "#333",
                        fontWeight: 300,
                        padding: "4px"
                      },
                      children: [
                        contentValue.limit,
                        "g"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  id: "progress-bar-bg",
                  style: {
                    display: "flex",
                    width: "9%",
                    // width: `${100-lcalculatePercentage(contentValue.limit, contentValue.value)}%`,
                    borderTopColor: "#7FC1ED",
                    borderTop: "2px",
                    borderRight: "2px",
                    borderRightColor: "#7FC1ED",
                    borderColor: "#7FC1ED",
                    borderStyle: "dashed",
                    backgroundColor: "#D4EEFF",
                    justifyContent: "flex-end"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      id: "actual-label",
                      style: {
                        fontSize: "9px",
                        color: "#333",
                        fontWeight: 300,
                        padding: "2px"
                      },
                      children: [
                        contentValue.value,
                        "g"
                      ]
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
};
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return reactExports.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ reactExports.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = reactExports.useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
        value
      }, children);
    }
    function useContext(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return reactExports.useMemo(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}
const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
const $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
let $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id2, setId] = reactExports.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id2 ? `radix-${id2}` : "");
}
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = reactExports.useCallback((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = reactExports.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = reactExports.useRef(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}
const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = reactExports.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (reactExports.Children.count(newElement) > 1)
          return reactExports.Children.only(null);
        return /* @__PURE__ */ reactExports.isValidElement(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ reactExports.isValidElement(newElement) ? /* @__PURE__ */ reactExports.cloneElement(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ reactExports.isValidElement(children))
    return /* @__PURE__ */ reactExports.cloneElement(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
  return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ reactExports.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}
const $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    reactExports.useEffect(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ reactExports.createElement(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    reactDomExports.flushSync(
      () => target.dispatchEvent(event)
    );
}
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}
const $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
const $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
let $5cb92bef7577960e$var$originalBodyPointerEvents;
const $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = reactExports.useContext($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = reactExports.useState(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = reactExports.useState({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  reactExports.useEffect(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  reactExports.useEffect(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  reactExports.useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent2();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
const $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = reactExports.useState(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = reactExports.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  reactExports.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  reactExports.useEffect(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = reactExports.useCallback((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}
const $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ $7SXl2$reactdom.createPortal(/* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : reactExports.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ reactExports.cloneElement(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef({});
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles2 = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles2);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles2 === null || styles2 === void 0 ? void 0 : styles2.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          reactDomExports.flushSync(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: reactExports.useCallback((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles2) {
  return (styles2 === null || styles2 === void 0 ? void 0 : styles2.animationName) || "none";
}
let $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  reactExports.useEffect(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = reactExports.useState(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect$1 = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect$1(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x2) {
          return x2 !== item;
        });
      };
    },
    assignSyncMedium: function(cb2) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb2);
      }
      buffer = {
        push: function(x2) {
          return cb2(x2);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb2) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb2);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb2);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x2) {
          pendingQueue.push(x2);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
var SideCar$1 = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$1;
}
var effectCar = createSidecarMedium();
var nothing = function() {
  return;
};
var RemoveScroll = reactExports.forwardRef(function(props, parentRef) {
  var ref = reactExports.useRef(null);
  var _a = reactExports.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container2 = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    enabled && reactExports.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : reactExports.createElement(Container2, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
var getNonce = function() {
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles2, isDynamic) {
    reactExports.useEffect(function() {
      sheet.add(styles2);
      return function() {
        sheet.remove();
      };
    }, [styles2 && isDynamic]);
  };
};
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles2 = _a.styles, dynamic = _a.dynamic;
    useStyle(styles2, dynamic);
    return null;
  };
  return Sheet;
};
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x2) {
  return parseInt(x2 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  reactExports.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = reactExports.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles2 = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles2[overflow] !== "hidden" && // contains scroll inside self
    !(styles2.overflowY === styles2.overflowX && !alwaysContainsScroll(node) && styles2[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x2, y2) {
  return x2[0] === y2[0] && x2[1] === y2[1];
};
var generateStyle = function(id2) {
  return "\n  .block-interactivity-".concat(id2, " {pointer-events: none;}\n  .allow-interactivity-").concat(id2, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = reactExports.useRef([]);
  var touchStartRef = reactExports.useRef([0, 0]);
  var activeAxis = reactExports.useRef();
  var id2 = reactExports.useState(idCounter++)[0];
  var Style2 = reactExports.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = reactExports.useRef(props);
  reactExports.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  reactExports.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id2));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el2) {
        return el2.classList.add("allow-interactivity-".concat(id2));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id2));
        allow_1.forEach(function(el2) {
          return el2.classList.remove("allow-interactivity-".concat(id2));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = reactExports.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = reactExports.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = reactExports.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = reactExports.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    inert ? reactExports.createElement(Style2, { styles: generateStyle(id2) }) : null,
    removeScrollBar ? reactExports.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}
const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = reactExports.forwardRef(function(props, ref) {
  return reactExports.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
const $67UHm$RemoveScroll = ReactRemoveScroll;
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x2) {
    return Boolean(x2);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el2) {
    if (!el2 || elementsToKeep.has(el2)) {
      return;
    }
    elementsToKeep.add(el2);
    keep(el2.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
const $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: reactExports.useCallback(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
const $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
const $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
const $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, reactExports.Children.map(
    children,
    (child) => /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ reactExports.createElement($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ reactExports.createElement($67UHm$RemoveScroll, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
const $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$b6d9565de1e068cf, {
  displayName: $5d3850c4d0b4e6c7$var$CONTENT_NAME
});
const $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  reactExports.useEffect(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = reactExports.useRef(false);
  const hasPointerDownOutsideRef = reactExports.useRef(false);
  return /* @__PURE__ */ reactExports.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
const $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
const $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$16f7638e4a34b909, {
  displayName: $5d3850c4d0b4e6c7$var$TITLE_NAME
});
const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5, {
  displayName: $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME
});
const $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
/* @__PURE__ */ Object.assign($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac, {
  displayName: $5d3850c4d0b4e6c7$var$CLOSE_NAME
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
const $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;
const SheetOverlay = "_SheetOverlay_oldqw_1";
const SheetContent = "_SheetContent_oldqw_19";
const SheetHeader = "_SheetHeader_oldqw_55";
const SheetFooter = "_SheetFooter_oldqw_66";
const SheetTitle = "_SheetTitle_oldqw_77";
const SheetDescription = "_SheetDescription_oldqw_85";
const styles$3 = {
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
};
const LSheet = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
const LSheetTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
const LSheetClose = $5d3850c4d0b4e6c7$export$f39c2d165cd861fe;
const LSheetPortal = $5d3850c4d0b4e6c7$export$602eac185826482c;
const LSheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  {
    className: lcn(
      styles$3.SheetOverlay,
      className
    ),
    ...props,
    ref
  }
));
LSheetOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
const LSheetContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(LSheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LSheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
    {
      ref,
      className: lcn(styles$3.SheetContent, className),
      ...props,
      children
    }
  )
] }));
LSheetContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
const LSheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: lcn(
      styles$3.SheetHeader,
      className
    ),
    ...props
  }
);
LSheetHeader.displayName = "SheetHeader";
const LSheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $5d3850c4d0b4e6c7$export$f99233281efd08a0,
  {
    ref,
    className: lcn(styles$3.SheetTitle, className),
    ...props
  }
));
LSheetTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
const LSheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  {
    ref,
    className: lcn(styles$3.SheetDescription, className),
    ...props
  }
));
LSheetDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
const ReportSheet = ({ compound }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LSheet, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LSheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        style: {
          fontWeight: 400,
          textDecoration: "underline",
          fontSize: "10px",
          textUnderlineOffset: "4px"
        },
        children: "View Testing Report"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      LSheetContent,
      {
        className: "light-labs-widget",
        style: {
          padding: "0px",
          overflow: "auto"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LSheetHeader,
            {
              style: {
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "20px",
                paddingBottom: "20px"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "black"
                        },
                        children: "Testing Details"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LSheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        style: {
                          color: "#676D6F",
                          fontWeight: 300,
                          fontSize: "14px"
                        },
                        children: "Close"
                      }
                    ) })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Container,
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "black"
                            },
                            children: "Transparent Labs Quality Standards"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              fontSize: "12px",
                              fontWeight: 400,
                              color: "black"
                            },
                            children: "Clean Ingredients with Nothing to Hide."
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      style: {
                        color: "#676D6F",
                        fontSize: "12px",
                        fontWeight: 300
                      },
                      children: "Transparent Labs is committed to using 100% authentic ingredients and full-disclosure product labels, so you know precisely what you're putting in your body. Every formula is critiqued and revised in accordance with feedback from independent scientific advisors to ensure proper efficiency."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Container,
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "16px", color: "black" }, children: compound === "creatine" ? "Creatine Content" : "Protein Content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                      },
                      children: [
                        compound === "creatine" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              style: {
                                color: "#676D6F",
                                fontSize: "12px",
                                fontWeight: 300
                              },
                              children: [
                                "A study showed a ",
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    style: {
                                      backgroundColor: "#f4f4f4",
                                      padding: "4px",
                                      color: "#676D6F"
                                    },
                                    children: [
                                      " ",
                                      "46% failure rate"
                                    ]
                                  }
                                ),
                                " for creatine gummy brands comparing claimed vs. actual amounts of the active ingredient."
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                color: "#676D6F",
                                fontSize: "12px",
                                fontWeight: 300
                              },
                              children: "Transparent Labs has at least 100% of the active ingredient in every serving."
                            }
                          )
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              style: {
                                color: "#676D6F",
                                fontSize: "12px",
                                fontWeight: 300
                              },
                              children: [
                                "An analysis showed that several protein powder brands had up to  ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: {
                                      backgroundColor: "#f4f4f4",
                                      padding: "4px",
                                      color: "#676D6F"
                                    },
                                    children: "35%"
                                  }
                                ),
                                " less of the active ingredient after a lab test was conducted."
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                color: "#676D6F",
                                fontSize: "12px",
                                fontWeight: 300
                              },
                              children: "Transparent Labs has at least 100% of the active ingredient in every serving."
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            target: "_blank",
                            style: {
                              color: "#1276AE",
                              fontSize: "10px",
                              textDecorationLine: "underline",
                              textUnderlineOffset: "1px"
                            },
                            href: compound === "creatine" ? "https://www.nutritionaloutlook.com/view/now-tests-creatine-gummies-identifies-limitations-in-third-party-gummy-testing" : "https://topclassactions.com/lawsuit-settlements/lawsuit-news/protein-powder-false-advertising-class-action-lawsuits-allege-protein-spiking/",
                            children: "Source: Nutritional Outlook"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Container,
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "black"
                      },
                      children: "Heavy Metals Limits"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              backgroundColor: "#5F5F5F14",
                              width: "100%",
                              borderRadius: "4px",
                              paddingTop: "6px",
                              paddingBottom: "6px",
                              paddingLeft: "8px",
                              paddingRight: "8px"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  color: "#676D6F",
                                  fontSize: "12px",
                                  fontWeight: 300
                                },
                                children: "Exceeding safety standards"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              color: "#676D6F",
                              fontSize: "12px",
                              fontWeight: 300
                            },
                            children: "Trace elements, including heavy metals found in the environment, can be present in natural products. Our rigorous testing ensures these elements are far lower than limits set by regulatory bodies, aiming for the highest standards of safety, quality, and transparency."
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              backgroundColor: "#5F5F5F14",
                              width: "100%",
                              borderRadius: "4px",
                              paddingTop: "6px",
                              paddingBottom: "6px",
                              paddingLeft: "8px",
                              paddingRight: "8px"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  color: "#676D6F",
                                  fontSize: "12px",
                                  fontWeight: 300
                                },
                                children: "Our Results"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LNegativeContent, { compound })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        padding: "10px",
                        borderRadius: "10x",
                        backgroundColor: "#1CC28614"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "#005E3E",
                            fontWeight: 300,
                            fontSize: "12px"
                          },
                          children: compound === "creatine" ? "Substantially lower than the daily limits mandated by California Prop 65." : "Lower than the daily limits mandated by Prop 65 and USP."
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Container,
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "16px" }, children: "Detailed Lab Results" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "16px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "https://www.transparentlabs.com/pages/certificate-of-analysis",
                            target: "_blank",
                            style: {
                              padding: "14px",
                              backgroundColor: "#1690C7",
                              fontSize: "12px",
                              fontWeight: 300,
                              color: "white",
                              width: "100%",
                              borderRadius: "5px",
                              textAlign: "center"
                            },
                            children: "View COAs"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "https://www.transparentlabs.com/pages/certificate-of-composition",
                            target: "_blank",
                            style: {
                              padding: "14px",
                              backgroundColor: "#1690C7",
                              fontSize: "12px",
                              fontWeight: 300,
                              color: "white",
                              width: "100%",
                              borderRadius: "5px",
                              textAlign: "center"
                            },
                            children: "View COCs"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
};
const Container = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        borderTop: "1px",
        borderColor: "#D7D7D7",
        borderStyle: "solid",
        padding: "24px"
      },
      children
    }
  );
};
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React.useRef(null);
    const itemMap = React.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ React.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    React.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}
const $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ reactExports.createContext(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = reactExports.useContext($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}
const $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
const $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
const [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
const [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
const [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
const $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
const $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = reactExports.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: reactExports.useCallback(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: reactExports.useCallback(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: reactExports.useCallback(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: reactExports.useCallback(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
const $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
const $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id2 = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id2;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  reactExports.useEffect(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id: id2,
    focusable,
    active
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id2);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id2)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
const $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
const $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;
const $69cb30bb0017df05$var$TABS_NAME = "Tabs";
const [$69cb30bb0017df05$var$createTabsContext, $69cb30bb0017df05$export$355f5bd209d7b13a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($69cb30bb0017df05$var$TABS_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
const $69cb30bb0017df05$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
const [$69cb30bb0017df05$var$TabsProvider, $69cb30bb0017df05$var$useTabsContext] = $69cb30bb0017df05$var$createTabsContext($69cb30bb0017df05$var$TABS_NAME);
const $69cb30bb0017df05$export$b2539bed5023c21c = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue
  });
  return /* @__PURE__ */ reactExports.createElement($69cb30bb0017df05$var$TabsProvider, {
    scope: __scopeTabs,
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    orientation,
    dir: direction,
    activationMode
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction,
    "data-orientation": orientation
  }, tabsProps, {
    ref: forwardedRef
  })));
});
const $69cb30bb0017df05$var$TAB_LIST_NAME = "TabsList";
const $69cb30bb0017df05$export$9712d22edc0d78c1 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, loop = true, ...listProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TAB_LIST_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  return /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation: context.orientation,
    dir: context.dir,
    loop
  }), /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "tablist",
    "aria-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  })));
});
const $69cb30bb0017df05$var$TRIGGER_NAME = "TabsTrigger";
const $69cb30bb0017df05$export$8114b9fdfdf9f3ba = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TRIGGER_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  return /* @__PURE__ */ reactExports.createElement($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled,
    active: isSelected
  }), /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": contentId,
    "data-state": isSelected ? "active" : "inactive",
    "data-disabled": disabled ? "" : void 0,
    disabled,
    id: triggerId
  }, triggerProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false)
        context.onValueChange(value);
      else
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if ([
        " ",
        "Enter"
      ].includes(event.key))
        context.onValueChange(value);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      const isAutomaticActivation = context.activationMode !== "manual";
      if (!isSelected && !disabled && isAutomaticActivation)
        context.onValueChange(value);
    })
  })));
});
const $69cb30bb0017df05$var$CONTENT_NAME = "TabsContent";
const $69cb30bb0017df05$export$bd905d70e8fd2ebb = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$CONTENT_NAME, __scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  return /* @__PURE__ */ reactExports.createElement(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || isSelected
    },
    ({ present }) => /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": isSelected ? "active" : "inactive",
      "data-orientation": context.orientation,
      role: "tabpanel",
      "aria-labelledby": triggerId,
      hidden: !present,
      id: contentId,
      tabIndex: 0
    }, contentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
      }
    }), present && children)
  );
});
function $69cb30bb0017df05$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $69cb30bb0017df05$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
const $69cb30bb0017df05$export$be92b6f5f03c0fe9 = $69cb30bb0017df05$export$b2539bed5023c21c;
const $69cb30bb0017df05$export$54c2e3dc7acea9f5 = $69cb30bb0017df05$export$9712d22edc0d78c1;
const $69cb30bb0017df05$export$41fb9f06171c75f4 = $69cb30bb0017df05$export$8114b9fdfdf9f3ba;
const $69cb30bb0017df05$export$7c6e2c02157bb7d2 = $69cb30bb0017df05$export$bd905d70e8fd2ebb;
const TabsList = "_TabsList_1wd0b_1";
const TabsTrigger = "_TabsTrigger_1wd0b_13";
const TabsContent = "_TabsContent_1wd0b_54";
const styles$2 = {
  TabsList,
  TabsTrigger,
  TabsContent
};
const LTabs = $69cb30bb0017df05$export$be92b6f5f03c0fe9;
const LTabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $69cb30bb0017df05$export$54c2e3dc7acea9f5,
  {
    ref,
    className: lcn(
      styles$2.TabsList,
      className
    ),
    ...props
  }
));
LTabsList.displayName = $69cb30bb0017df05$export$54c2e3dc7acea9f5.displayName;
const LTabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $69cb30bb0017df05$export$41fb9f06171c75f4,
  {
    ref,
    className: lcn(
      styles$2.TabsTrigger,
      className
    ),
    ...props
  }
));
LTabsTrigger.displayName = $69cb30bb0017df05$export$41fb9f06171c75f4.displayName;
const LTabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $69cb30bb0017df05$export$7c6e2c02157bb7d2,
  {
    ref,
    className: lcn(
      styles$2.TabsContent,
      className
    ),
    ...props
  }
));
LTabsContent.displayName = $69cb30bb0017df05$export$7c6e2c02157bb7d2.displayName;
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl2 = ["right", "left"];
  const tb2 = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl2 : lr;
      return isStart ? lr : rl2;
    case "left":
    case "right":
      return isStart ? tb2 : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x: x2,
    y: y2
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$2 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x2 = ($ ? round(rect.width) : rect.width) / width;
  let y2 = ($ ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x2 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el2) => isElement(el2) && getNodeName(el2) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x2 = rect.left + scroll.scrollLeft - offsets.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x2,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow$1 = arrow$2;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
const arrow = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$1({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$1({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = reactExports.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = reactExports.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = reactExports.useState(null);
  const [_floating, _setFloating] = reactExports.useState(null);
  const setReference = reactExports.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = reactExports.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = reactExports.useRef(null);
  const floatingRef = reactExports.useRef(null);
  const dataRef = reactExports.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = reactExports.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        reactDomExports.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = reactExports.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = reactExports.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = reactExports.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = reactExports.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x2 = roundByDPR(elements.floating, data.x);
    const y2 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x2 + "px, " + y2 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x2,
      top: y2
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return reactExports.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props.asChild ? children : /* @__PURE__ */ reactExports.createElement("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size2, setSize] = reactExports.useState(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size2;
}
const $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = reactExports.useState(null);
  return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  reactExports.useEffect(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
const $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = reactExports.useState(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow$12, setArrow] = reactExports.useState(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow$12);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip({
        ...detectOverflowOptions
      }),
      size({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow$12 && arrow({
        element: arrow$12,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = reactExports.useState();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
const $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /* @__PURE__ */ reactExports.forwardRef(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ reactExports.createElement("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ reactExports.createElement($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
/* @__PURE__ */ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
  displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
const $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x2 = "";
    let y2 = "";
    if (placedSide === "bottom") {
      x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y2 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y2 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x2 = `${-arrowHeight}px`;
      y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x2 = `${rects.floating.width + arrowHeight}px`;
      y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x: x2,
        y: y2
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
const $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
const $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;
const [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
const $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION = 700;
const $a093c7e1ec25a057$var$TOOLTIP_OPEN = "tooltip.open";
const [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
const $a093c7e1ec25a057$export$f78649fb9ca566b8 = (props) => {
  const { __scopeTooltip, delayDuration = $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
  const [isOpenDelayed, setIsOpenDelayed] = reactExports.useState(true);
  const isPointerInTransitRef = reactExports.useRef(false);
  const skipDelayTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipProviderContextProvider, {
    scope: __scopeTooltip,
    isOpenDelayed,
    delayDuration,
    onOpen: reactExports.useCallback(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      setIsOpenDelayed(false);
    }, []),
    onClose: reactExports.useCallback(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      skipDelayTimerRef.current = window.setTimeout(
        () => setIsOpenDelayed(true),
        skipDelayDuration
      );
    }, [
      skipDelayDuration
    ]),
    isPointerInTransitRef,
    onPointerInTransitChange: reactExports.useCallback((inTransit) => {
      isPointerInTransitRef.current = inTransit;
    }, []),
    disableHoverableContent
  }, children);
};
const $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
const [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
const $a093c7e1ec25a057$export$28c660c63b792dea = (props) => {
  const { __scopeTooltip, children, open: openProp, defaultOpen = false, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = reactExports.useState(null);
  const contentId = $1746a345f3d73bb7$export$f680877a34711e37();
  const openTimerRef = reactExports.useRef(0);
  const disableHoverableContent = disableHoverableContentProp !== null && disableHoverableContentProp !== void 0 ? disableHoverableContentProp : providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp !== null && delayDurationProp !== void 0 ? delayDurationProp : providerContext.delayDuration;
  const wasOpenDelayedRef = reactExports.useRef(false);
  const [open1 = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open) => {
      if (open) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
      } else
        providerContext.onClose();
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
    }
  });
  const stateAttribute = reactExports.useMemo(() => {
    return open1 ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [
    open1
  ]);
  const handleOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [
    setOpen
  ]);
  const handleClose = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [
    setOpen
  ]);
  const handleDelayedOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [
    delayDuration,
    setOpen
  ]);
  reactExports.useEffect(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open: open1,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: reactExports.useCallback(() => {
      if (providerContext.isOpenDelayed)
        handleDelayedOpen();
      else
        handleOpen();
    }, [
      providerContext.isOpenDelayed,
      handleDelayedOpen,
      handleOpen
    ]),
    onTriggerLeave: reactExports.useCallback(() => {
      if (disableHoverableContent)
        handleClose();
      else
        window.clearTimeout(openTimerRef.current);
    }, [
      handleClose,
      disableHoverableContent
    ]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent
  }, children));
};
const $a093c7e1ec25a057$var$TRIGGER_NAME = "TooltipTrigger";
const $a093c7e1ec25a057$export$8c610744efcf8a1d = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onTriggerChange);
  const isPointerDownRef = reactExports.useRef(false);
  const hasPointerMoveOpenedRef = reactExports.useRef(false);
  const handlePointerUp = reactExports.useCallback(
    () => isPointerDownRef.current = false,
    []
  );
  reactExports.useEffect(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [
    handlePointerUp
  ]);
  return /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), /* @__PURE__ */ reactExports.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": context.open ? context.contentId : void 0,
    "data-state": context.stateAttribute
  }, triggerProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      if (event.pointerType === "touch")
        return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, () => {
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, () => {
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, {
        once: true
      });
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      if (!isPointerDownRef.current)
        context.onOpen();
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onClose)
  })));
});
const $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
const [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
  forceMount: void 0
});
const $a093c7e1ec25a057$var$CONTENT_NAME = "TooltipContent";
const $a093c7e1ec25a057$export$e9003e2be37ec060 = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  return /* @__PURE__ */ reactExports.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.disableHoverableContent ? /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContentImpl, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContentHoverable, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })));
});
const $a093c7e1ec25a057$var$TooltipContentHoverable = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = reactExports.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = reactExports.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [
    onPointerInTransitChange
  ]);
  const handleCreateGraceArea = reactExports.useCallback((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = $a093c7e1ec25a057$var$getHull([
      ...paddedExitPoints,
      ...hoverTargetPoints
    ]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [
    onPointerInTransitChange
  ]);
  reactExports.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [
    handleRemoveGraceArea
  ]);
  reactExports.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [
    trigger,
    content,
    handleCreateGraceArea,
    handleRemoveGraceArea
  ]);
  reactExports.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget)
          handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [
    trigger,
    content,
    pointerGraceArea,
    onClose,
    handleRemoveGraceArea
  ]);
  return /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$TooltipContentImpl, _extends({}, props, {
    ref: composedRefs
  }));
});
const [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
  isInside: false
});
const $a093c7e1ec25a057$var$TooltipContentImpl = /* @__PURE__ */ reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const { onClose } = context;
  reactExports.useEffect(() => {
    document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
  }, [
    onClose
  ]);
  reactExports.useEffect(() => {
    if (context.trigger) {
      const handleScroll2 = (event) => {
        const target = event.target;
        if (target !== null && target !== void 0 && target.contains(context.trigger))
          onClose();
      };
      window.addEventListener("scroll", handleScroll2, {
        capture: true
      });
      return () => window.removeEventListener("scroll", handleScroll2, {
        capture: true
      });
    }
  }, [
    context.trigger,
    onClose
  ]);
  return /* @__PURE__ */ reactExports.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose
  }, /* @__PURE__ */ reactExports.createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": context.stateAttribute
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ reactExports.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), /* @__PURE__ */ reactExports.createElement($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
    scope: __scopeTooltip,
    isInside: true
  }, /* @__PURE__ */ reactExports.createElement($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    id: context.contentId,
    role: "tooltip"
  }, ariaLabel || children))));
});
function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
  const { x: x2, y: y2 } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi2 = polygon[i].x;
    const yi2 = polygon[i].y;
    const xj2 = polygon[j].x;
    const yj2 = polygon[j].y;
    const intersect = yi2 > y2 !== yj2 > y2 && x2 < (xj2 - xi2) * (y2 - yi2) / (yj2 - yi2) + xi2;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $a093c7e1ec25a057$var$getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x)
      return -1;
    else if (a.x > b.x)
      return 1;
    else if (a.y < b.y)
      return -1;
    else if (a.y > b.y)
      return 1;
    else
      return 0;
  });
  return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
}
function $a093c7e1ec25a057$var$getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p2 = points[i];
    while (upperHull.length >= 2) {
      const q2 = upperHull[upperHull.length - 1];
      const r2 = upperHull[upperHull.length - 2];
      if ((q2.x - r2.x) * (p2.y - r2.y) >= (q2.y - r2.y) * (p2.x - r2.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p2);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i1 = points.length - 1; i1 >= 0; i1--) {
    const p2 = points[i1];
    while (lowerHull.length >= 2) {
      const q2 = lowerHull[lowerHull.length - 1];
      const r2 = lowerHull[lowerHull.length - 2];
      if ((q2.x - r2.x) * (p2.y - r2.y) >= (q2.y - r2.y) * (p2.x - r2.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p2);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y)
    return upperHull;
  else
    return upperHull.concat(lowerHull);
}
const $a093c7e1ec25a057$export$2881499e37b75b9a = $a093c7e1ec25a057$export$f78649fb9ca566b8;
const $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
const $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
const $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
const TooltipContent = "_TooltipContent_1ox36_1";
const styles$1 = {
  TooltipContent
};
const LTooltipProvider = $a093c7e1ec25a057$export$2881499e37b75b9a;
const LTooltip = $a093c7e1ec25a057$export$be92b6f5f03c0fe9;
const LTooltipTrigger = $a093c7e1ec25a057$export$41fb9f06171c75f4;
const LTooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  $a093c7e1ec25a057$export$7c6e2c02157bb7d2,
  {
    ref,
    sideOffset,
    className: lcn(
      styles$1.TooltipContent,
      className
    ),
    ...props
  }
));
LTooltipContent.displayName = $a093c7e1ec25a057$export$7c6e2c02157bb7d2.displayName;
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
const IS_SERVER = typeof window === "undefined";
function useMediaQuery(query, {
  defaultValue = false,
  initializeWithValue = true
} = {}) {
  const getMatches = (query2) => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query2).matches;
  };
  const [matches, setMatches] = React.useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });
  function handleChange() {
    setMatches(getMatches(query));
  }
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}
const AppContainer = "_AppContainer_u04ym_1";
const TabTrigger = "_TabTrigger_u04ym_10";
const PlaceCenter = "_PlaceCenter_u04ym_18";
const CardContainer = "_CardContainer_u04ym_24";
const styles = {
  AppContainer,
  TabTrigger,
  PlaceCenter,
  CardContainer
};
function App1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "light-labs-sheet-portal",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E8EEF2"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { footer: true, compound: "creatine" }) })
    }
  );
}
function App2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "light-labs-sheet-portal",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E8EEF2"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { footer: false, compound: "creatine" }) })
    }
  );
}
function App3() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "light-labs-sheet-portal",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E8EEF2"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { footer: true, compound: "protein" }) })
    }
  );
}
function App4() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: "light-labs-sheet-portal",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E8EEF2"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { footer: false, compound: "protein" }) })
    }
  );
}
const Card = ({ footer, compound }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.CardContainer, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          paddingBottom: "16px"
        },
        className: "flex flex-col pb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              },
              className: "flex flex-col gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#000] text-[14px] font-[700] ll-font-700 font-aftika", children: "Test Results Certified by 3rd Party Lab" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      color: "#6E7A7E",
                      fontSize: "10px",
                      fontWeight: 300
                    },
                    className: "text-[#6E7A7E] text-[10px] font-light ll-font-300 font-aftika",
                    children: "Every batch is tested by an ISO 17025 certified lab to verify active ingredients and product purity"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTabs, { compound })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { footer, compound })
  ] });
};
const CardTabs = ({ compound }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    LTabs,
    {
      defaultValue: "positive",
      style: { width: "100%", paddingTop: "12px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(LTabsList, { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(LTabsTrigger, { className: styles.TabTrigger, value: "positive", children: [
            "What",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "'" }),
            "s in it?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LTabsTrigger, { className: styles.TabTrigger, value: "negative", children: "What's not in it?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LTabsContent, { value: "positive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LPositiveContent, { compound }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LTabsContent, { value: "negative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LNegativeContent, { compound }) })
      ]
    }
  ) });
};
const CardFooter = ({ footer, compound }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: footer ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTestingSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReportSheet, { compound })
      ]
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportSheet, { compound }) }) });
};
const LiveTestingSection = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LTooltip, { delayDuration: 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#12B97D",
                  borderRadius: "9999px",
                  position: "relative",
                  display: "block",
                  padding: "5px"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#12B97D",
                      borderRadius: "9999px",
                      position: "absolute",
                      display: "block",
                      padding: "5px",
                      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                      inset: 0
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  fontSize: "10px",
                  color: "#333333",
                  fontWeight: "normal"
                },
                children: "Live Testing"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          style: {
            fontSize: "12px"
          },
          children: [
            "Last Tested:",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-default font-aftika", children: " 02/13/2024 " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                style: {
                  color: "#6E7A7E"
                },
                className: "text-[#6E7A7E]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {}, className: "font-default font-aftika", children: "(" }),
                  "every production run",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-default", children: ")" })
                ]
              }
            )
          ]
        }
      ) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LTooltip, { delayDuration: 0, open, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipTrigger, { onClick: () => setOpen((prev) => !prev), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "12px"
        },
        className: "flex items-center gap-[12px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                width: "8px",
                height: "8px",
                backgroundColor: "#12B97D",
                borderRadius: "9999px",
                position: "relative",
                display: "block",
                padding: "5px"
              },
              className: "size-2 bg-[#12B97D] rounded-full relative block p-[5px]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#12B97D",
                    borderRadius: "9999px",
                    position: "absolute",
                    display: "block",
                    padding: "5px",
                    animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
                  },
                  className: "size-2 bg-[#12B97D] rounded-full absolute inset-0 block p-[5px] animate-ping"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                fontSize: "10px",
                color: "#333333",
                fontWeight: "normal"
              },
              className: "text-[10px] text-[#333333] font-normal ll-font-400 font-aftika",
              children: "Live Testing"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LTooltipContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        style: {
          fontSize: "12px"
        },
        className: "text-[12px] font-aftika",
        children: [
          "Last Tested:",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: { fontFamily: "Aftika" },
              className: "font-default font-aftika",
              children: " 02/13/2024 "
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              style: {
                color: "#6E7A7E"
              },
              className: "text-[#6E7A7E]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {}, className: "font-default font-aftika", children: "(" }),
                "every production run",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-default", children: ")" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
};
client.createRoot(document.getElementById("light-labs-widget-root-version-one")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App1, {}) })
);
client.createRoot(document.getElementById("light-labs-widget-root-version-two")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App2, {}) })
);
client.createRoot(document.getElementById("light-labs-widget-protein-version-one")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App3, {}) })
);
client.createRoot(document.getElementById("light-labs-widget-protein-version-two")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App4, {}) })
);
