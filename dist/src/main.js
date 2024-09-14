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

// src/components/FamAvatar/actions.ts
var createActions = /* @__PURE__ */ __name(({ props }) => {
  const setFallbackImage = /* @__PURE__ */ __name((event) => {
    const image = event.target;
    image.src = props.fallbackSrc;
    event.onerror = null;
  }, "setFallbackImage");
  return {
    setFallbackImage
  };
}, "createActions");

// src/components/FamAvatar/index.ts
var template = /* @__PURE__ */ __name(({ props, actions }) => html`
  <div class="wrap-ctx">
    <img src=${props == null ? void 0 : props.src}  alt=${props == null ? void 0 : props.alt} onerror=${actions.setFallbackImage} class="size-${(props == null ? void 0 : props.size) || 1}-ctx"/>
  </div>
`, "template");
var FamAvatar = /* @__PURE__ */ __name(({ props }) => {
  const actions = createActions({ props });
  return {
    actions,
    template,
    styles,
    props
  };
}, "FamAvatar");
var styles = /* @__PURE__ */ __name(() => css`
  fam-avatar { width: 100%; } 

  fam-avatar,
  .wrap-ctx > img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-2);
  }

  .wrap-ctx img {
    border-radius: 100%;
  }

  .size-1-ctx {
    width: var(--fam-avatar-size-1);
    height: var(--fam-avatar-size-1);
  }

  .size-2-ctx {
    width: var(--fam-avatar-size-2);
    height: var(--fam-avatar-size-2);
  }

  .size-3-ctx {
    width: var(--fam-avatar-size-3);
    height: var(--fam-avatar-size-3);
  }

  .size-4-ctx {
    width: var(--fam-avatar-size-4);
    height: var(--fam-avatar-size-4);
  }

  .size-5-ctx {
    width: var(--fam-avatar-size-5);
    height: var(--fam-avatar-size-5);
  }

  .size-6-ctx {
    width: var(--fam-avatar-size-6);
    height: var(--fam-avatar-size-6);
  }


  






`, "styles");

// src/components/FamButton/index.ts
var template2 = /* @__PURE__ */ __name(() => html`
  <slot id="content"></slot>
`, "template");
var FamButton = /* @__PURE__ */ __name(() => {
  return {
    template: template2,
    styles: styles2
  };
}, "FamButton");
var styles2 = /* @__PURE__ */ __name(() => css`
  fam-button {
    display:flex;
    width:var(--fam-button-width);
    height:var(--fam-button-height);
    text-transform: var(--fam-button-text-transform);
    cursor: pointer;
  }

  fam-button > * {
    display:flex;
    width:var(--fam-button-width);
    height:var(--fam-button-height);
    justify-content: var(--fam-button-justify-content);
    align-items: var(--fam-button-align-items);
    font-weight: var(--fam-button-font-weight)
  }

  fam-button *[type="primary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-color);
    background: var(--fam-buttom-primary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-border-color); 
  }

  fam-button *[type="primary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-hole-color);
    background:var(--fam-buttom-primary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-hole-border-color);  
  }

  fam-button *[type="primary-disabled"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-disabled-text-color);
    background:var(--fam-buttom-primary-disabled-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-disabled-border-color);  
  }

  fam-button *[type="primary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft);
    background:none;
    border:1px solid var(--primary-soft);  
  }

  fam-button *[type="secondary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-secondary-color);
    background: var(--fam-buttom-secondary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-secondary-border-color); 
  }

  fam-button *[type="secondary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-secondary-hole-color);
    background:var(--fam-buttom-secondary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-secondary-hole-border-color);  
  }

  fam-button *[type="secondary-disabled"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-secondary-disabled-text-color);
    background:var(--fam-buttom-secondary-disabled-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-secondary-disabled-border-color);  
  }

  fam-button *[type="secondary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-secondary);
    color: var(--secondary-soft);
    background:none;
    border:1px solid var(--secondary-soft);  
  }

  fam-button *[type="tertiary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-tertiary-color);
    background: var(--fam-buttom-tertiary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-tertiary-border-color); 
  }

  fam-button *[type="tertiary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-tertiary-hole-color);
    background:var(--fam-buttom-tertiary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-tertiary-hole-border-color);  
  }

  fam-button *[type="tertiary-disabled"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-tertiary-disabled-text-color);
    background:var(--fam-buttom-tertiary-disabled-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-tertiary-disabled-border-color);  
  }

  fam-button *[type="tertiary-hole-disabled"] {
    font-size:var(--text-tertiary);
    border-radius: var(--border-tertiary);
    color: var(--tertiary-soft);
    background:none;
    border:1px solid var(--tertiary-soft);  
  }
`, "styles");

// src/components/FamCard/index.ts
var template3 = /* @__PURE__ */ __name(() => html`
  <div class="wrap-ctx">
   <slot id="content"></slot>
  </div>
`, "template");
var FamCard = /* @__PURE__ */ __name(() => {
  return {
    template: template3,
    styles: styles3
  };
}, "FamCard");
var styles3 = /* @__PURE__ */ __name(() => css`
  fam-card,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
  .wrap-ctx {
    padding: 1em;
    border-width:var(--fam-card-border-width);
    border-style:var(--fam-card-border-style);
    border-color:var(--fam-card-border-color);
    border-radius:var(--fam-card-border-radius);
    background:var(--fam-card-background);
  }
`, "styles");

// src/components/FamCheckBox/index.ts
var template4 = /* @__PURE__ */ __name(({ props }) => html`
  <div class="wrap-ctx">
    <label>
    ${props.isChecked ? html`<input type="checkbox" onChange=${props.handler} checked="${props.isChecked}"/>` : html`<input type="checkbox" onChange=${props.handler} />`}
      <span>${props.label}</span>
    </label>
  </div>
`, "template");
var FamCheckBox = /* @__PURE__ */ __name(() => {
  return {
    template: template4,
    styles: styles4
  };
}, "FamCheckBox");
var styles4 = /* @__PURE__ */ __name(() => css`
  fam-check-box,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .wrap-ctx > label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .wrap-ctx input {
    display: flex;
  }
  .wrap-ctx span {
    display: flex;
    width: 100%;
    color: white;
    margin-left:0.5em;
  }
`, "styles");

// src/components/FamContainer/index.ts
var template5 = /* @__PURE__ */ __name(() => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var FamContainer = /* @__PURE__ */ __name(() => {
  return {
    template: template5,
    styles: styles5
  };
}, "FamContainer");
var styles5 = /* @__PURE__ */ __name(() => css`
  fam-container,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    
    max-width: var(--fam-container-max-width);
    margin-left: var(--fam-container-margin-left);
    margin-right: var(--fam-container-margin-right);

    border-radius: var(--fam-container-border-radius);
    border-width: var(--fam-container-border-width);
    border-color: var(--fam-container-border-color);
    border-style: var(--fam-container-border-style);

    background: var(--fam-container-background)
  }
`, "styles");

// src/components/FamDivider/actions.ts
var createActions2 = /* @__PURE__ */ __name(() => {
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
var template6 = /* @__PURE__ */ __name(({ props }) => html`
  <div type=${props.type} stroke="size-${props.stroke}"></div>
`, "template");
var FamDivider = /* @__PURE__ */ __name(() => {
  const actions = createActions2();
  const hooks = createHooks(actions);
  return {
    template: template6,
    styles: styles6,
    actions,
    hooks
  };
}, "FamDivider");
var styles6 = /* @__PURE__ */ __name(() => css`
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

// src/components/FamIcon/hooks.ts
var validSizeList = [
  "size-1",
  "size-2",
  "size-3",
  "size-4",
  "size-5",
  "size-6",
  "size-7",
  "size-8",
  "size-9",
  "size-10",
  "size-11",
  "size-12"
];
var createHooks2 = /* @__PURE__ */ __name((actions) => {
  const afterRender = /* @__PURE__ */ __name((element) => {
    var _a, _b;
    const iconName = (_a = element.querySelector("span")) == null ? void 0 : _a.textContent;
    const iconSize = ((_b = element.querySelector("div")) == null ? void 0 : _b.classList.toString()) || "";
    const hasValidSize = validSizeList.find(
      (size) => new RegExp(size, "ig").test(iconSize)
    );
    const nameError = actions.validate(iconName || "");
    const sizeError = actions.validate(hasValidSize || "");
    if (!(nameError && sizeError))
      return;
    actions.throwError(nameError || sizeError);
  }, "afterRender");
  return { afterRender };
}, "createHooks");

// src/services/validator/index.ts
var validatorFactory = /* @__PURE__ */ __name(() => {
  const validate = /* @__PURE__ */ __name((value) => {
    const error = getError();
    if (!value)
      return error;
    return null;
  }, "validate");
  const getError = /* @__PURE__ */ __name(() => {
    return {
      isValid: false,
      message: "The name or size property is not defined and must be.",
      typeError: "IconError"
    };
  }, "getError");
  const throwError = /* @__PURE__ */ __name((error) => {
    const exception = new Error(error.message);
    exception.name = error.typeError;
    throw exception;
  }, "throwError");
  return { validate, throwError, getError };
}, "validatorFactory");

// src/components/FamIcon/index.ts
var template7 = /* @__PURE__ */ __name(({ props }) => html`
  <div class="wrap-ctx size-${props.size}">
     <span class="material-symbols-rounded">
        ${props.name}
     </span>
  </div>
`, "template");
var FamIcon = /* @__PURE__ */ __name(() => {
  const actions = validatorFactory();
  const hooks = createHooks2(actions);
  return {
    template: template7,
    styles: styles7,
    hooks,
    actions
  };
}, "FamIcon");
var styles7 = /* @__PURE__ */ __name(() => css`
  fam-icon,
  .wrap-ctx,
  .wrap-ctx > span{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap-ctx span {
    color: var(--icon-color);
  }

  .wrap-ctx.size-1 > span {
    font-size:1em
  }
  .wrap-ctx.size-2  > span {
    font-size:2em
  }
  .wrap-ctx.size-3 > span  {
    font-size:3em
  }
  .wrap-ctx.size-4 > span  {
    font-size:4em
  }
  .wrap-ctx.size-5 > span  {
    font-size:5em
  }
  .wrap-ctx.size-6 > span  {
    font-size:6em
  }
  .wrap-ctx.size-7 > span  {
    font-size:7em
  }
  .wrap-ctx.size-8  > span {
    font-size:8em
  }
  .wrap-ctx.size-9  > span {
    font-size:9em
  }
  .wrap-ctx.size-10  > span {
    font-size:10em
  }
  .wrap-ctx.size-11  > span {
    font-size:11em
  }
  .wrap-ctx.size-12  > span {
    font-size:12em
  }
`, "styles");

// src/components/FamImage/actions.ts
var createActions3 = /* @__PURE__ */ __name(({ props }) => {
  const setFallbackImage = /* @__PURE__ */ __name((event) => {
    const image = event.target;
    image.src = props.fallbackSrc;
    event.onerror = null;
  }, "setFallbackImage");
  return {
    setFallbackImage
  };
}, "createActions");

// src/components/FamImage/index.ts
var template8 = /* @__PURE__ */ __name(({ props, actions }) => html`
  <div class="wrap-ctx">
    <img src=${props == null ? void 0 : props.src}  alt=${props == null ? void 0 : props.alt} onerror=${actions.setFallbackImage}/>
  </div>
`, "template");
var FamImage = /* @__PURE__ */ __name(({ props }) => {
  const actions = createActions3({ props });
  return {
    actions,
    template: template8,
    styles: styles8,
    props
  };
}, "FamImage");
var styles8 = /* @__PURE__ */ __name(() => css`
  fam-image { width: 100%; }

  fam-image,
  .wrap-ctx > img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black-2);
  }

  .wrap-ctx img {
    width:100%;
    border-radius: 8px;
    background: url(var(--fam-image-fallback))
  }

  






`, "styles");

// src/components/FamTagline/index.ts
var template9 = /* @__PURE__ */ __name(() => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var FamTagline = /* @__PURE__ */ __name(() => {
  return {
    template: template9,
    styles: styles9
  };
}, "FamTagline");
var styles9 = /* @__PURE__ */ __name(() => css`
  fam-tagline,
  .wrap-ctx,
  .wrap-ctx p
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .wrap-ctx p {
    font-size: var(--fam-tagline-font-size);
    font-weight: var(--fam-tagline-font-weight);
    color: var(--fam-tagline-color);
    line-height: var(--fam-tagline-line-height);
  }

  






`, "styles");

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
var template10 = /* @__PURE__ */ __name(({ props }) => html`
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
    template: template10,
    styles: styles10
  };
}, "FamTextInput");
var styles10 = /* @__PURE__ */ __name(() => css`

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

// src/components/FamTitle/index.ts
var template11 = /* @__PURE__ */ __name(() => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var FamTitle = /* @__PURE__ */ __name(() => {
  return {
    template: template11,
    styles: styles11
  };
}, "FamTitle");
var styles11 = /* @__PURE__ */ __name(() => css`
  fam-title { width: 100%; }

  fam-title,
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3
  {
    display: flex;
    justify-content: var(--title-justify-content);
    align-items: var(--title-align-items);
    color: var(--title-color);
  }

  .wrap-ctx {
    display:flex;
    width: 100%;
  }

  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3 {
    width:100%;
    padding: 1em;
    text-align: var(--title-text-align);
  }  
  
  .wrap-ctx h1 {
    font-size: var(--title-font-size-primary);
    font-weight: var(--title-font-weight-primary);
  }
  
  .wrap-ctx h2 {
    font-size: var(--title-font-size-secondary);
    font-weight: var(--title-font-weight-secondary);
  }
  
  .wrap-ctx h3 {
    font-size: var(--title-font-size-tertiary);
    font-weight: var(--title-font-weight-tertiary);
  }






`, "styles");

// src/components/FamTooltip/index.ts
var template12 = /* @__PURE__ */ __name(() => html`
  <div class="wrap-ctx">
     <div class="tooltip-ctx">
        <i class="material-symbols-rounded">info</i>
        <div class="content-ctx">
          <slot id="content"></slot>
        </div>
     </div>
  </div>
`, "template");
var FamTooltip = /* @__PURE__ */ __name(() => {
  return {
    template: template12,
    styles: styles12
  };
}, "FamTooltip");
var styles12 = /* @__PURE__ */ __name(() => css`
  app-tooltip {
    display: flex;
    width: 100%;
  }

  .tooltip-ctx {
    display: flex;
    width:100%;
    cursor: pointer;
    position: relative;
    color:var(--white-1)
  }

  .content-ctx{
    display: flex;
    justify-content: center;
    width:max-content;
    max-width:180px;
    padding: 5px 10px;
    border-radius:var(--border-primary);
    color: var(--black-1);
    background: var(--white-1);
    font-size:var(--text-size-2);
    opacity:0;
    position: absolute;
    top: 2.6em;
    left:50%;
    transform:translateX(-50%);
    z-index: 999;
  }

  .content-ctx:after {
    display: flex;
    content:'';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -8px;
    width: 0; height: 0;
    border-bottom: 8px solid var(--white-1);
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  .tooltip-ctx:hover > .content-ctx {
    opacity: 0.9;
  }

  
`, "styles");
export {
  FamAvatar,
  FamButton,
  FamCard,
  FamCheckBox,
  FamContainer,
  FamDivider,
  FamIcon,
  FamImage,
  FamTagline,
  FamTextInput,
  FamTitle,
  FamTooltip
};
//# sourceMappingURL=main.js.map
