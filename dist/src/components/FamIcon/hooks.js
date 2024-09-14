var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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
var createHooks = /* @__PURE__ */ __name((actions) => {
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
export {
  createHooks
};
//# sourceMappingURL=hooks.js.map
