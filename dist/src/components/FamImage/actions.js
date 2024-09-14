var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/components/FamImage/actions.ts
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
export {
  createActions
};
//# sourceMappingURL=actions.js.map
