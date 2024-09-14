var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/.pnpm/htm@3.1.1/node_modules/htm/dist/htm.module.js
var n = /* @__PURE__ */ __name(function(t2, s, r, e) {
  var u;
  s[0] = 0;
  for (var h2 = 1; h2 < s.length; h2++) {
    var p = s[h2++], a = s[h2] ? (s[0] |= p ? 1 : 2, r[s[h2++]]) : s[++h2];
    3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h2]] = a : 6 === p ? e[1][s[++h2]] += a + "" : p ? (u = t2.apply(a, n(t2, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h2 - 2] = 0, s[h2] = u)) : e.push(a);
  }
  return e;
}, "n");
var t = /* @__PURE__ */ new Map();
function htm_module_default(s) {
  var r = t.get(this);
  return r || (r = /* @__PURE__ */ new Map(), t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n2) {
    for (var t2, s2, r2 = 1, e = "", u = "", h2 = [0], p = function(n3) {
      1 === r2 && (n3 || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e) : 3 === r2 && (n3 || e) ? (h2.push(3, n3, e), r2 = 2) : 2 === r2 && "..." === e && n3 ? h2.push(4, n3, 0) : 2 === r2 && e && !n3 ? h2.push(5, 0, true, e) : r2 >= 5 && ((e || !n3 && 5 === r2) && (h2.push(r2, 0, e, s2), r2 = 6), n3 && (h2.push(r2, n3, 0, s2), r2 = 6)), e = "";
    }, a = 0; a < n2.length; a++) {
      a && (1 === r2 && p(), p(a));
      for (var l = 0; l < n2[a].length; l++)
        t2 = n2[a][l], 1 === r2 ? "<" === t2 ? (p(), h2 = [h2], r2 = 3) : e += t2 : 4 === r2 ? "--" === e && ">" === t2 ? (r2 = 1, e = "") : e = t2 + e[0] : u ? t2 === u ? u = "" : e += t2 : '"' === t2 || "'" === t2 ? u = t2 : ">" === t2 ? (p(), r2 = 1) : r2 && ("=" === t2 ? (r2 = 5, s2 = e, e = "") : "/" === t2 && (r2 < 5 || ">" === n2[a][l + 1]) ? (p(), 3 === r2 && (h2 = h2[0]), r2 = h2, (h2 = h2[0]).push(2, 0, r2), r2 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p(), r2 = 2) : e += t2), 3 === r2 && "!--" === e && (r2 = 4, h2 = h2[0]);
    }
    return p(), h2;
  }(s)), r), arguments, [])).length > 1 ? r : r[0];
}
__name(htm_module_default, "default");

// node_modules/.pnpm/iares@1.1.8_htm@3.1.1/node_modules/iares/dist/template/index.js
var css = /* @__PURE__ */ __name((tags, ...values) => {
  return tags.map((tag, index) => {
    return `${tag}${values[index] || ""}`;
  }).join("");
}, "css");
function h(type, props, ...children) {
  return { type, props, children };
}
__name(h, "h");
var html = htm_module_default.bind(h);

// node_modules/.pnpm/iares@1.1.8_htm@3.1.1/node_modules/iares/dist/pubsub/index.js
var pubsubFactory = /* @__PURE__ */ __name(() => {
  const listeners = {};
  const _handlerExists = /* @__PURE__ */ __name((eventName, handler) => {
    return !listeners.hasOwnProperty(eventName) || listeners[eventName].some((subscribedHandler) => {
      return subscribedHandler.toString() === handler.toString() || subscribedHandler.name === handler.name || subscribedHandler === handler;
    });
  }, "_handlerExists");
  const on = /* @__PURE__ */ __name((eventName, handler) => {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!handler || typeof handler !== "function")
      throw new Error("Handler is not a function and must be.");
    if (!listeners.hasOwnProperty(eventName)) {
      listeners[eventName] = [handler];
      return { eventName, handler };
    }
    if (_handlerExists(eventName, handler)) {
      const handlerPosition = listeners[eventName].indexOf(handler);
      if (handlerPosition)
        listeners[eventName].splice(handlerPosition, 1, handler);
      return { eventName, handler };
    }
    listeners[eventName].push(handler);
    return { eventName, handler };
  }, "on");
  const off = /* @__PURE__ */ __name(({ eventName, handler }) => {
    if (!listeners.hasOwnProperty(eventName))
      return;
    const eventListeners = listeners[eventName].filter((listener) => {
      if (listener !== handler)
        return listener;
    });
    listeners[eventName] = eventListeners;
  }, "off");
  const emit = /* @__PURE__ */ __name((eventName, payload) => {
    if (!eventName)
      throw new Error("EventName is not defined and must be.");
    if (!listeners.hasOwnProperty(eventName))
      return;
    listeners[eventName].forEach((handler) => {
      handler(payload);
    });
  }, "emit");
  return {
    on,
    off,
    emit
  };
}, "pubsubFactory");

// node_modules/.pnpm/iares@1.1.8_htm@3.1.1/node_modules/iares/dist/render/index.js
var eventDrive = pubsubFactory();

// src/components/FamDivider/actions.ts
var createActions = /* @__PURE__ */ __name(() => {
  const validate = /* @__PURE__ */ __name((type) => {
    const validTypes = ["dashed", "solid", "dotted", "rounded"];
    const error = getError(type);
    if (!validTypes.includes(type))
      return error;
    return null;
  }, "validate");
  const getError = /* @__PURE__ */ __name((type) => {
    return {
      isValid: false,
      message: `Invalid type: ${type}, expect one of types: [dashed, solid, dotted, rounded] `,
      typeError: "DividerError"
    };
  }, "getError");
  const throwError = /* @__PURE__ */ __name((error) => {
    const exception = new Error(error.message);
    exception.name = error.typeError;
    throw exception;
  }, "throwError");
  return { validate, throwError, getError };
}, "createActions");

// src/components/FamDivider/hooks.ts
var createHooks = /* @__PURE__ */ __name((actions) => {
  const afterRender = /* @__PURE__ */ __name((element) => {
    var _a;
    const dividerType = (_a = element.querySelector("div")) == null ? void 0 : _a.getAttribute("type");
    const validation = actions.validate(dividerType || "");
    if (!validation)
      return;
    actions.throwError(validation);
  }, "afterRender");
  return { afterRender };
}, "createHooks");

// src/components/FamDivider/index.ts
var template = /* @__PURE__ */ __name(({ props }) => html`
  <div type=${props.type} stroke="size-${props.stroke}"></div>
`, "template");
var FamDivider = /* @__PURE__ */ __name(() => {
  const actions = createActions();
  const hooks = createHooks(actions);
  return {
    template,
    styles,
    actions,
    hooks
  };
}, "FamDivider");
var styles = /* @__PURE__ */ __name(() => css`
  fam-divider,
  fam-divider > div {
    display: flex;
    width: 100%;
  }

  fam-divider > [type=dashed]{
    border-top: 1px dashed var(--fam-divider-color)
  }

  fam-divider > [type=dotted]{
    border-top: 1px dotted var(--fam-divider-color)
  }

  fam-divider > [type=solid]{
    border-top: 1px solid var(--fam-divider-color)
  }

  fam-divider > [type=rounded]{
    border-top: 1px solid var(--fam-divider-color);
    border-radius:100%
  }

  fam-divider > [stroke=size-1]{
    border-top-width:1px;
  }
  fam-divider > [stroke=size-2]{
    border-top-width:2px
  }
  fam-divider > [stroke=size-3]{
    border-top-width:3px
  }
  fam-divider > [stroke=size-4]{
    border-top-width:4px
  }
  fam-divider > [stroke=size-5]{
    border-top-width:5px
  }
  fam-divider > [stroke=size-6]{
    border-top-width:6px
  }
  fam-divider > [stroke=size-7]{
    border-top-width:7px
  }
  fam-divider > [stroke=size-8]{
    border-top-width:8px
  }
  fam-divider > [stroke=size-9]{
    border-top-width:9px
  }
  fam-divider > [stroke=size-10]{
    border-top-width:10px
  }
  fam-divider > [type=size-11]{
    border-top-width:11px
  }
  fam-divider > [type=size-12]{
    border-top-width:12px
  }
 `, "styles");
export {
  FamDivider
};
//# sourceMappingURL=index.js.map