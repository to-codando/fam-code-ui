var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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
export {
  createHooks
};
//# sourceMappingURL=hooks.js.map
