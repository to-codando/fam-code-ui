var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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
export {
  createActions
};
//# sourceMappingURL=actions.js.map
