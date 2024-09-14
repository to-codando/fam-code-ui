var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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
export {
  validatorFactory
};
//# sourceMappingURL=index.js.map
