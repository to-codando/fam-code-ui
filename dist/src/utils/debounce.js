var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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
export {
  debounce
};
//# sourceMappingURL=debounce.js.map
