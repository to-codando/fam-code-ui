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

// src/utils/debounce.ts
var debounce = /* @__PURE__ */ __name((callback, delay = 500) => {
  let timer;
  return (args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
}, "debounce");

// src/components/FamTextInput/index.ts
var FamInputError = /* @__PURE__ */ __name(({ props }) => {
  if (props.isValid)
    return html``;
  return html`<p>${props.error}</p>`;
}, "FamInputError");
var template = /* @__PURE__ */ __name(({ props }) => html`
  <div class="wrap-ctx">
    <label>
      
      <input 
        type=${(props == null ? void 0 : props.type) || "text"}
        value=${(props == null ? void 0 : props.value) || ""} 
        onKeyup=${debounce(props == null ? void 0 : props.handler, props == null ? void 0 : props.debounceTime)}
        valid=${props == null ? void 0 : props.isValid}
      />

      <span>${props == null ? void 0 : props.label}</span>
    </label>
    <${FamInputError} isValid=${props.isValid} error=${props.error} />
  </div>
`, "template");
var FamTextInput = /* @__PURE__ */ __name(() => {
  return {
    template,
    styles
  };
}, "FamTextInput");
var styles = /* @__PURE__ */ __name(() => css`

  fam-text-input,
  .wrap-ctx {
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: var(--black-2);
    width: 100%;
  }

  .wrap-ctx label {
    position: relative
  }

  .wrap-ctx label,
  .wrap-ctx fam-input-error {
    display: flex;
    flex-wrap: wrap;
  }

  .wrap-ctx input,
  .wrap-ctx label,
  .wrap-ctx span,
  .wrap-ctx fam-input-error {
    width: 100%
  }

  .wrap-ctx span {
    margin-bottom: 0.5em;
    position: absolute;
    left: 0;
    top: -20px;
  }

  .wrap-ctx input {
    height: 50px;
    padding: 0 1em;

    font-size: var(--text-size-4);
    color: var(--text-input-text-color);

    border-width: var(--text-input-border-width);
    border-radius: var(--text-input-border-radius);
    border-style: var(--text-input-border-style);
    border-color: var(--text-input-border-color);

    outline-color: none;
    outline-width: none;
    outline-style: none;

    background: var(--text-input-background);
  }

  .wrap-ctx input:focus {
    outline-color: var(--text-input-outline-color);
    outline-width: var(--text-input-outline-width);
    outline-style: var(--text-input-border-style);

  }

  .wrap-ctx span {
    font-size: var(--text-size-3);
    font-weight: 600;
    color: var(--text-input-label-color);
    margin: 0 0 8px 8px;
  }

.wrap-ctx input[valid=true] {
  background: var(--text-input-valid-background);
  color: var(--text-input-valid-text-color);
  border-color: var(--text-input-valid-border-color);
}

.wrap-ctx input[valid=true] + span {
  color: var(--text-input-valid-text-color);
}

.wrap-ctx input[valid=false] {
  background: var(--text-input-invalid-background);
  color: var(--text-input-invalid-text-color);
  border-color: var(--text-input-invalid-border-color);
}  

.wrap-ctx input[valid=false] + span {
  color: var(--text-input-invalid-text-color);
}

 .wrap-ctx fam-input-error {
  color: var(--text-input-invalid-text-color);
 }

 .wrap-ctx fam-input-error p:not(:empty) {
    padding: 0.5em 0;
    line-height: 1.2em;
    font-size: var(--text-size-3)
 }

`, "styles");
export {
  FamTextInput
};
//# sourceMappingURL=index.js.map
