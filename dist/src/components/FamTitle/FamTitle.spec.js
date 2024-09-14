var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/components/FamTitle/FamTitle.spec.ts
import globalJsdom from "global-jsdom";

// node_modules/.pnpm/@esm-bundle+chai@4.3.4-fix.0/node_modules/@esm-bundle/chai/esm/chai.js
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function t(e2) {
  throw new Error('Could not dynamically require "' + e2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
__name(t, "t");
var n = { exports: {} };
var o = n.exports = function() {
  function e2(n3, o2, r2) {
    function i2(a3, c2) {
      if (!o2[a3]) {
        if (!n3[a3]) {
          if (!c2 && t)
            return t(a3);
          if (s2)
            return s2(a3, true);
          var u2 = new Error("Cannot find module '" + a3 + "'");
          throw u2.code = "MODULE_NOT_FOUND", u2;
        }
        var f2 = o2[a3] = { exports: {} };
        n3[a3][0].call(f2.exports, function(e3) {
          return i2(n3[a3][1][e3] || e3);
        }, f2, f2.exports, e2, n3, o2, r2);
      }
      return o2[a3].exports;
    }
    __name(i2, "i");
    for (var s2 = t, a2 = 0; a2 < r2.length; a2++)
      i2(r2[a2]);
    return i2;
  }
  __name(e2, "e");
  return e2;
}()({ 1: [function(e2, t3, n3) {
  t3.exports = e2("./lib/chai");
}, { "./lib/chai": 2 }], 2: [function(e2, t3, n3) {
  var o2 = [];
  n3.version = "4.3.3", /*!
   * Assertion Error
   */
  n3.AssertionError = e2("assertion-error");
  var r2 = e2("./chai/utils");
  n3.use = function(e3) {
    return ~o2.indexOf(e3) || (e3(n3, r2), o2.push(e3)), n3;
  }, /*!
   * Utility Functions
   */
  n3.util = r2;
  var i2 = e2("./chai/config");
  n3.config = i2;
  var s2 = e2("./chai/assertion");
  n3.use(s2);
  var a2 = e2("./chai/core/assertions");
  n3.use(a2);
  var c2 = e2("./chai/interface/expect");
  n3.use(c2);
  var u2 = e2("./chai/interface/should");
  n3.use(u2);
  var f2 = e2("./chai/interface/assert");
  n3.use(f2);
}, { "./chai/assertion": 3, "./chai/config": 4, "./chai/core/assertions": 5, "./chai/interface/assert": 6, "./chai/interface/expect": 7, "./chai/interface/should": 8, "./chai/utils": 23, "assertion-error": 34 }], 3: [function(e2, t3, n3) {
  var o2 = e2("./config");
  t3.exports = function(e3, t4) {
    var n4 = e3.AssertionError, r2 = t4.flag;
    function i2(e4, n5, o3, s2) {
      return r2(this, "ssfi", o3 || i2), r2(this, "lockSsfi", s2), r2(this, "object", e4), r2(this, "message", n5), t4.proxify(this);
    }
    __name(i2, "i");
    e3.Assertion = i2, Object.defineProperty(i2, "includeStack", { get: function() {
      return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), o2.includeStack;
    }, set: function(e4) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), o2.includeStack = e4;
    } }), Object.defineProperty(i2, "showDiff", { get: function() {
      return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), o2.showDiff;
    }, set: function(e4) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), o2.showDiff = e4;
    } }), i2.addProperty = function(e4, n5) {
      t4.addProperty(this.prototype, e4, n5);
    }, i2.addMethod = function(e4, n5) {
      t4.addMethod(this.prototype, e4, n5);
    }, i2.addChainableMethod = function(e4, n5, o3) {
      t4.addChainableMethod(this.prototype, e4, n5, o3);
    }, i2.overwriteProperty = function(e4, n5) {
      t4.overwriteProperty(this.prototype, e4, n5);
    }, i2.overwriteMethod = function(e4, n5) {
      t4.overwriteMethod(this.prototype, e4, n5);
    }, i2.overwriteChainableMethod = function(e4, n5, o3) {
      t4.overwriteChainableMethod(this.prototype, e4, n5, o3);
    }, i2.prototype.assert = function(e4, i3, s2, a2, c2, u2) {
      var f2 = t4.test(this, arguments);
      if (false !== u2 && (u2 = true), void 0 === a2 && void 0 === c2 && (u2 = false), true !== o2.showDiff && (u2 = false), !f2) {
        i3 = t4.getMessage(this, arguments);
        var p2 = { actual: t4.getActual(this, arguments), expected: a2, showDiff: u2 }, l2 = t4.getOperator(this, arguments);
        throw l2 && (p2.operator = l2), new n4(i3, p2, o2.includeStack ? this.assert : r2(this, "ssfi"));
      }
    }, /*!
       * ### ._obj
       *
       * Quick reference to stored `actual` value for plugin developers.
       *
       * @api private
       */
    Object.defineProperty(i2.prototype, "_obj", { get: function() {
      return r2(this, "object");
    }, set: function(e4) {
      r2(this, "object", e4);
    } });
  };
}, { "./config": 4 }], 4: [function(e2, t3, n3) {
  t3.exports = { includeStack: false, showDiff: true, truncateThreshold: 40, useProxy: true, proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"] };
}, {}], 5: [function(e2, t3, n3) {
  t3.exports = function(e3, t4) {
    var n4 = e3.Assertion, o2 = e3.AssertionError, r2 = t4.flag;
    function i2(e4, n5) {
      n5 && r2(this, "message", n5), e4 = e4.toLowerCase();
      var o3 = r2(this, "object"), i3 = ~["a", "e", "i", "o", "u"].indexOf(e4.charAt(0)) ? "an " : "a ";
      this.assert(e4 === t4.type(o3).toLowerCase(), "expected #{this} to be " + i3 + e4, "expected #{this} not to be " + i3 + e4);
    }
    __name(i2, "i");
    function s2(e4, n5) {
      return t4.isNaN(e4) && t4.isNaN(n5) || e4 === n5;
    }
    __name(s2, "s");
    function a2() {
      r2(this, "contains", true);
    }
    __name(a2, "a");
    function c2(e4, i3) {
      i3 && r2(this, "message", i3);
      var a3 = r2(this, "object"), c3 = t4.type(a3).toLowerCase(), u3 = r2(this, "message"), f3 = r2(this, "negate"), p3 = r2(this, "ssfi"), l3 = r2(this, "deep"), h4 = l3 ? "deep " : "";
      u3 = u3 ? u3 + ": " : "";
      var d2 = false;
      switch (c3) {
        case "string":
          d2 = -1 !== a3.indexOf(e4);
          break;
        case "weakset":
          if (l3)
            throw new o2(u3 + "unable to use .deep.include with WeakSet", void 0, p3);
          d2 = a3.has(e4);
          break;
        case "map":
          var y2 = l3 ? t4.eql : s2;
          a3.forEach(function(t5) {
            d2 = d2 || y2(t5, e4);
          });
          break;
        case "set":
          l3 ? a3.forEach(function(n5) {
            d2 = d2 || t4.eql(n5, e4);
          }) : d2 = a3.has(e4);
          break;
        case "array":
          d2 = l3 ? a3.some(function(n5) {
            return t4.eql(n5, e4);
          }) : -1 !== a3.indexOf(e4);
          break;
        default:
          if (e4 !== Object(e4))
            throw new o2(u3 + "the given combination of arguments (" + c3 + " and " + t4.type(e4).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + t4.type(e4).toLowerCase(), void 0, p3);
          var b2 = Object.keys(e4), g2 = null, w2 = 0;
          if (b2.forEach(function(i4) {
            var s3 = new n4(a3);
            if (t4.transferFlags(this, s3, true), r2(s3, "lockSsfi", true), f3 && 1 !== b2.length)
              try {
                s3.property(i4, e4[i4]);
              } catch (e5) {
                if (!t4.checkError.compatibleConstructor(e5, o2))
                  throw e5;
                null === g2 && (g2 = e5), w2++;
              }
            else
              s3.property(i4, e4[i4]);
          }, this), f3 && b2.length > 1 && w2 === b2.length)
            throw g2;
          return;
      }
      this.assert(d2, "expected #{this} to " + h4 + "include " + t4.inspect(e4), "expected #{this} to not " + h4 + "include " + t4.inspect(e4));
    }
    __name(c2, "c");
    function u2() {
      var e4 = r2(this, "object");
      this.assert(null != e4, "expected #{this} to exist", "expected #{this} to not exist");
    }
    __name(u2, "u");
    function f2() {
      var e4 = r2(this, "object"), n5 = t4.type(e4);
      this.assert("Arguments" === n5, "expected #{this} to be arguments but got " + n5, "expected #{this} to not be arguments");
    }
    __name(f2, "f");
    function p2(e4, t5) {
      t5 && r2(this, "message", t5);
      var n5 = r2(this, "object");
      if (r2(this, "deep")) {
        var o3 = r2(this, "lockSsfi");
        r2(this, "lockSsfi", true), this.eql(e4), r2(this, "lockSsfi", o3);
      } else
        this.assert(e4 === n5, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", e4, this._obj, true);
    }
    __name(p2, "p");
    function l2(e4, n5) {
      n5 && r2(this, "message", n5), this.assert(t4.eql(e4, r2(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", e4, this._obj, true);
    }
    __name(l2, "l");
    function h3(e4, i3) {
      i3 && r2(this, "message", i3);
      var s3, a3 = r2(this, "object"), c3 = r2(this, "doLength"), u3 = r2(this, "message"), f3 = u3 ? u3 + ": " : "", p3 = r2(this, "ssfi"), l3 = t4.type(a3).toLowerCase(), h4 = t4.type(e4).toLowerCase(), d2 = true;
      if (c3 && "map" !== l3 && "set" !== l3 && new n4(a3, u3, p3, true).to.have.property("length"), c3 || "date" !== l3 || "date" === h4 ? "number" === h4 || !c3 && "number" !== l3 ? c3 || "date" === l3 || "number" === l3 ? d2 = false : s3 = f3 + "expected " + ("string" === l3 ? "'" + a3 + "'" : a3) + " to be a number or a date" : s3 = f3 + "the argument to above must be a number" : s3 = f3 + "the argument to above must be a date", d2)
        throw new o2(s3, void 0, p3);
      if (c3) {
        var y2, b2 = "length";
        "map" === l3 || "set" === l3 ? (b2 = "size", y2 = a3.size) : y2 = a3.length, this.assert(y2 > e4, "expected #{this} to have a " + b2 + " above #{exp} but got #{act}", "expected #{this} to not have a " + b2 + " above #{exp}", e4, y2);
      } else
        this.assert(a3 > e4, "expected #{this} to be above #{exp}", "expected #{this} to be at most #{exp}", e4);
    }
    __name(h3, "h");
    function d(e4, i3) {
      i3 && r2(this, "message", i3);
      var s3, a3 = r2(this, "object"), c3 = r2(this, "doLength"), u3 = r2(this, "message"), f3 = u3 ? u3 + ": " : "", p3 = r2(this, "ssfi"), l3 = t4.type(a3).toLowerCase(), h4 = t4.type(e4).toLowerCase(), d2 = true;
      if (c3 && "map" !== l3 && "set" !== l3 && new n4(a3, u3, p3, true).to.have.property("length"), c3 || "date" !== l3 || "date" === h4 ? "number" === h4 || !c3 && "number" !== l3 ? c3 || "date" === l3 || "number" === l3 ? d2 = false : s3 = f3 + "expected " + ("string" === l3 ? "'" + a3 + "'" : a3) + " to be a number or a date" : s3 = f3 + "the argument to least must be a number" : s3 = f3 + "the argument to least must be a date", d2)
        throw new o2(s3, void 0, p3);
      if (c3) {
        var y2, b2 = "length";
        "map" === l3 || "set" === l3 ? (b2 = "size", y2 = a3.size) : y2 = a3.length, this.assert(y2 >= e4, "expected #{this} to have a " + b2 + " at least #{exp} but got #{act}", "expected #{this} to have a " + b2 + " below #{exp}", e4, y2);
      } else
        this.assert(a3 >= e4, "expected #{this} to be at least #{exp}", "expected #{this} to be below #{exp}", e4);
    }
    __name(d, "d");
    function y(e4, i3) {
      i3 && r2(this, "message", i3);
      var s3, a3 = r2(this, "object"), c3 = r2(this, "doLength"), u3 = r2(this, "message"), f3 = u3 ? u3 + ": " : "", p3 = r2(this, "ssfi"), l3 = t4.type(a3).toLowerCase(), h4 = t4.type(e4).toLowerCase(), d2 = true;
      if (c3 && "map" !== l3 && "set" !== l3 && new n4(a3, u3, p3, true).to.have.property("length"), c3 || "date" !== l3 || "date" === h4 ? "number" === h4 || !c3 && "number" !== l3 ? c3 || "date" === l3 || "number" === l3 ? d2 = false : s3 = f3 + "expected " + ("string" === l3 ? "'" + a3 + "'" : a3) + " to be a number or a date" : s3 = f3 + "the argument to below must be a number" : s3 = f3 + "the argument to below must be a date", d2)
        throw new o2(s3, void 0, p3);
      if (c3) {
        var y2, b2 = "length";
        "map" === l3 || "set" === l3 ? (b2 = "size", y2 = a3.size) : y2 = a3.length, this.assert(y2 < e4, "expected #{this} to have a " + b2 + " below #{exp} but got #{act}", "expected #{this} to not have a " + b2 + " below #{exp}", e4, y2);
      } else
        this.assert(a3 < e4, "expected #{this} to be below #{exp}", "expected #{this} to be at least #{exp}", e4);
    }
    __name(y, "y");
    function b(e4, i3) {
      i3 && r2(this, "message", i3);
      var s3, a3 = r2(this, "object"), c3 = r2(this, "doLength"), u3 = r2(this, "message"), f3 = u3 ? u3 + ": " : "", p3 = r2(this, "ssfi"), l3 = t4.type(a3).toLowerCase(), h4 = t4.type(e4).toLowerCase(), d2 = true;
      if (c3 && "map" !== l3 && "set" !== l3 && new n4(a3, u3, p3, true).to.have.property("length"), c3 || "date" !== l3 || "date" === h4 ? "number" === h4 || !c3 && "number" !== l3 ? c3 || "date" === l3 || "number" === l3 ? d2 = false : s3 = f3 + "expected " + ("string" === l3 ? "'" + a3 + "'" : a3) + " to be a number or a date" : s3 = f3 + "the argument to most must be a number" : s3 = f3 + "the argument to most must be a date", d2)
        throw new o2(s3, void 0, p3);
      if (c3) {
        var y2, b2 = "length";
        "map" === l3 || "set" === l3 ? (b2 = "size", y2 = a3.size) : y2 = a3.length, this.assert(y2 <= e4, "expected #{this} to have a " + b2 + " at most #{exp} but got #{act}", "expected #{this} to have a " + b2 + " above #{exp}", e4, y2);
      } else
        this.assert(a3 <= e4, "expected #{this} to be at most #{exp}", "expected #{this} to be above #{exp}", e4);
    }
    __name(b, "b");
    function g(e4, n5) {
      n5 && r2(this, "message", n5);
      var i3 = r2(this, "object"), s3 = r2(this, "ssfi"), a3 = r2(this, "message");
      try {
        var c3 = i3 instanceof e4;
      } catch (n6) {
        if (n6 instanceof TypeError)
          throw new o2((a3 = a3 ? a3 + ": " : "") + "The instanceof assertion needs a constructor but " + t4.type(e4) + " was given.", void 0, s3);
        throw n6;
      }
      var u3 = t4.getName(e4);
      null === u3 && (u3 = "an unnamed constructor"), this.assert(c3, "expected #{this} to be an instance of " + u3, "expected #{this} to not be an instance of " + u3);
    }
    __name(g, "g");
    function w(e4, n5, i3) {
      i3 && r2(this, "message", i3);
      var s3 = r2(this, "nested"), a3 = r2(this, "own"), c3 = r2(this, "message"), u3 = r2(this, "object"), f3 = r2(this, "ssfi"), p3 = typeof e4;
      if (c3 = c3 ? c3 + ": " : "", s3) {
        if ("string" !== p3)
          throw new o2(c3 + "the argument to property must be a string when using nested syntax", void 0, f3);
      } else if ("string" !== p3 && "number" !== p3 && "symbol" !== p3)
        throw new o2(c3 + "the argument to property must be a string, number, or symbol", void 0, f3);
      if (s3 && a3)
        throw new o2(c3 + 'The "nested" and "own" flags cannot be combined.', void 0, f3);
      if (null == u3)
        throw new o2(c3 + "Target cannot be null or undefined.", void 0, f3);
      var l3, h4 = r2(this, "deep"), d2 = r2(this, "negate"), y2 = s3 ? t4.getPathInfo(u3, e4) : null, b2 = s3 ? y2.value : u3[e4], g2 = "";
      h4 && (g2 += "deep "), a3 && (g2 += "own "), s3 && (g2 += "nested "), g2 += "property ", l3 = a3 ? Object.prototype.hasOwnProperty.call(u3, e4) : s3 ? y2.exists : t4.hasProperty(u3, e4), d2 && 1 !== arguments.length || this.assert(l3, "expected #{this} to have " + g2 + t4.inspect(e4), "expected #{this} to not have " + g2 + t4.inspect(e4)), arguments.length > 1 && this.assert(l3 && (h4 ? t4.eql(n5, b2) : n5 === b2), "expected #{this} to have " + g2 + t4.inspect(e4) + " of #{exp}, but got #{act}", "expected #{this} to not have " + g2 + t4.inspect(e4) + " of #{act}", n5, b2), r2(this, "object", b2);
    }
    __name(w, "w");
    function m(e4, t5, n5) {
      r2(this, "own", true), w.apply(this, arguments);
    }
    __name(m, "m");
    function v(e4, n5, o3) {
      "string" == typeof n5 && (o3 = n5, n5 = null), o3 && r2(this, "message", o3);
      var i3 = r2(this, "object"), s3 = Object.getOwnPropertyDescriptor(Object(i3), e4);
      s3 && n5 ? this.assert(t4.eql(n5, s3), "expected the own property descriptor for " + t4.inspect(e4) + " on #{this} to match " + t4.inspect(n5) + ", got " + t4.inspect(s3), "expected the own property descriptor for " + t4.inspect(e4) + " on #{this} to not match " + t4.inspect(n5), n5, s3, true) : this.assert(s3, "expected #{this} to have an own property descriptor for " + t4.inspect(e4), "expected #{this} to not have an own property descriptor for " + t4.inspect(e4)), r2(this, "object", s3);
    }
    __name(v, "v");
    function x() {
      r2(this, "doLength", true);
    }
    __name(x, "x");
    function O(e4, o3) {
      o3 && r2(this, "message", o3);
      var i3, s3 = r2(this, "object"), a3 = t4.type(s3).toLowerCase(), c3 = r2(this, "message"), u3 = r2(this, "ssfi"), f3 = "length";
      switch (a3) {
        case "map":
        case "set":
          f3 = "size", i3 = s3.size;
          break;
        default:
          new n4(s3, c3, u3, true).to.have.property("length"), i3 = s3.length;
      }
      this.assert(i3 == e4, "expected #{this} to have a " + f3 + " of #{exp} but got #{act}", "expected #{this} to not have a " + f3 + " of #{act}", e4, i3);
    }
    __name(O, "O");
    function j(e4, t5) {
      t5 && r2(this, "message", t5);
      var n5 = r2(this, "object");
      this.assert(e4.exec(n5), "expected #{this} to match " + e4, "expected #{this} not to match " + e4);
    }
    __name(j, "j");
    function M(e4) {
      var n5, i3, s3 = r2(this, "object"), a3 = t4.type(s3), c3 = t4.type(e4), u3 = r2(this, "ssfi"), f3 = r2(this, "deep"), p3 = "", l3 = true, h4 = r2(this, "message"), d2 = (h4 = h4 ? h4 + ": " : "") + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
      if ("Map" === a3 || "Set" === a3)
        p3 = f3 ? "deeply " : "", i3 = [], s3.forEach(function(e5, t5) {
          i3.push(t5);
        }), "Array" !== c3 && (e4 = Array.prototype.slice.call(arguments));
      else {
        switch (i3 = t4.getOwnEnumerableProperties(s3), c3) {
          case "Array":
            if (arguments.length > 1)
              throw new o2(d2, void 0, u3);
            break;
          case "Object":
            if (arguments.length > 1)
              throw new o2(d2, void 0, u3);
            e4 = Object.keys(e4);
            break;
          default:
            e4 = Array.prototype.slice.call(arguments);
        }
        e4 = e4.map(function(e5) {
          return "symbol" == typeof e5 ? e5 : String(e5);
        });
      }
      if (!e4.length)
        throw new o2(h4 + "keys required", void 0, u3);
      var y2 = e4.length, b2 = r2(this, "any"), g2 = r2(this, "all"), w2 = e4;
      if (b2 || g2 || (g2 = true), b2 && (l3 = w2.some(function(e5) {
        return i3.some(function(n6) {
          return f3 ? t4.eql(e5, n6) : e5 === n6;
        });
      })), g2 && (l3 = w2.every(function(e5) {
        return i3.some(function(n6) {
          return f3 ? t4.eql(e5, n6) : e5 === n6;
        });
      }), r2(this, "contains") || (l3 = l3 && e4.length == i3.length)), y2 > 1) {
        var m2 = (e4 = e4.map(function(e5) {
          return t4.inspect(e5);
        })).pop();
        g2 && (n5 = e4.join(", ") + ", and " + m2), b2 && (n5 = e4.join(", ") + ", or " + m2);
      } else
        n5 = t4.inspect(e4[0]);
      n5 = (y2 > 1 ? "keys " : "key ") + n5, n5 = (r2(this, "contains") ? "contain " : "have ") + n5, this.assert(l3, "expected #{this} to " + p3 + n5, "expected #{this} to not " + p3 + n5, w2.slice(0).sort(t4.compareByInspect), i3.sort(t4.compareByInspect), true);
    }
    __name(M, "M");
    function P(e4, o3, i3) {
      i3 && r2(this, "message", i3);
      var s3, a3 = r2(this, "object"), c3 = r2(this, "ssfi"), u3 = r2(this, "message"), f3 = r2(this, "negate") || false;
      new n4(a3, u3, c3, true).is.a("function"), (e4 instanceof RegExp || "string" == typeof e4) && (o3 = e4, e4 = null);
      try {
        a3();
      } catch (e5) {
        s3 = e5;
      }
      var p3 = void 0 === e4 && void 0 === o3, l3 = Boolean(e4 && o3), h4 = false, d2 = false;
      if (p3 || !p3 && !f3) {
        var y2 = "an error";
        e4 instanceof Error ? y2 = "#{exp}" : e4 && (y2 = t4.checkError.getConstructorName(e4)), this.assert(s3, "expected #{this} to throw " + y2, "expected #{this} to not throw an error but #{act} was thrown", e4 && e4.toString(), s3 instanceof Error ? s3.toString() : "string" == typeof s3 ? s3 : s3 && t4.checkError.getConstructorName(s3));
      }
      if (e4 && s3 && (e4 instanceof Error && t4.checkError.compatibleInstance(s3, e4) === f3 && (l3 && f3 ? h4 = true : this.assert(f3, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}" + (s3 && !f3 ? " but #{act} was thrown" : ""), e4.toString(), s3.toString())), t4.checkError.compatibleConstructor(s3, e4) === f3 && (l3 && f3 ? h4 = true : this.assert(f3, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}" + (s3 ? " but #{act} was thrown" : ""), e4 instanceof Error ? e4.toString() : e4 && t4.checkError.getConstructorName(e4), s3 instanceof Error ? s3.toString() : s3 && t4.checkError.getConstructorName(s3)))), s3 && null != o3) {
        var b2 = "including";
        o3 instanceof RegExp && (b2 = "matching"), t4.checkError.compatibleMessage(s3, o3) === f3 && (l3 && f3 ? d2 = true : this.assert(f3, "expected #{this} to throw error " + b2 + " #{exp} but got #{act}", "expected #{this} to throw error not " + b2 + " #{exp}", o3, t4.checkError.getMessage(s3)));
      }
      h4 && d2 && this.assert(f3, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}" + (s3 ? " but #{act} was thrown" : ""), e4 instanceof Error ? e4.toString() : e4 && t4.checkError.getConstructorName(e4), s3 instanceof Error ? s3.toString() : s3 && t4.checkError.getConstructorName(s3)), r2(this, "object", s3);
    }
    __name(P, "P");
    function N(e4, n5) {
      n5 && r2(this, "message", n5);
      var o3 = r2(this, "object"), i3 = r2(this, "itself"), s3 = "function" != typeof o3 || i3 ? o3[e4] : o3.prototype[e4];
      this.assert("function" == typeof s3, "expected #{this} to respond to " + t4.inspect(e4), "expected #{this} to not respond to " + t4.inspect(e4));
    }
    __name(N, "N");
    function E(e4, n5) {
      n5 && r2(this, "message", n5);
      var o3 = e4(r2(this, "object"));
      this.assert(o3, "expected #{this} to satisfy " + t4.objDisplay(e4), "expected #{this} to not satisfy" + t4.objDisplay(e4), !r2(this, "negate"), o3);
    }
    __name(E, "E");
    function S(e4, t5, i3) {
      i3 && r2(this, "message", i3);
      var s3 = r2(this, "object"), a3 = r2(this, "message"), c3 = r2(this, "ssfi");
      if (new n4(s3, a3, c3, true).is.a("number"), "number" != typeof e4 || "number" != typeof t5)
        throw new o2((a3 = a3 ? a3 + ": " : "") + "the arguments to closeTo or approximately must be numbers" + (void 0 === t5 ? ", and a delta is required" : ""), void 0, c3);
      this.assert(Math.abs(s3 - e4) <= t5, "expected #{this} to be close to " + e4 + " +/- " + t5, "expected #{this} not to be close to " + e4 + " +/- " + t5);
    }
    __name(S, "S");
    function k(e4, t5, n5, o3, r3) {
      if (!o3) {
        if (e4.length !== t5.length)
          return false;
        t5 = t5.slice();
      }
      return e4.every(function(e5, i3) {
        if (r3)
          return n5 ? n5(e5, t5[i3]) : e5 === t5[i3];
        if (!n5) {
          var s3 = t5.indexOf(e5);
          return -1 !== s3 && (o3 || t5.splice(s3, 1), true);
        }
        return t5.some(function(r4, i4) {
          return !!n5(e5, r4) && (o3 || t5.splice(i4, 1), true);
        });
      });
    }
    __name(k, "k");
    function A(e4, o3) {
      o3 && r2(this, "message", o3);
      var i3 = r2(this, "object"), s3 = r2(this, "message"), a3 = r2(this, "ssfi"), c3 = r2(this, "contains"), u3 = r2(this, "deep");
      new n4(e4, s3, a3, true).to.be.an("array"), c3 ? this.assert(e4.some(function(e5) {
        return i3.indexOf(e5) > -1;
      }), "expected #{this} to contain one of #{exp}", "expected #{this} to not contain one of #{exp}", e4, i3) : u3 ? this.assert(e4.some(function(e5) {
        return t4.eql(i3, e5);
      }), "expected #{this} to deeply equal one of #{exp}", "expected #{this} to deeply equal one of #{exp}", e4, i3) : this.assert(e4.indexOf(i3) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", e4, i3);
    }
    __name(A, "A");
    function D(e4, t5, o3) {
      o3 && r2(this, "message", o3);
      var i3, s3 = r2(this, "object"), a3 = r2(this, "message"), c3 = r2(this, "ssfi");
      new n4(s3, a3, c3, true).is.a("function"), t5 ? (new n4(e4, a3, c3, true).to.have.property(t5), i3 = e4[t5]) : (new n4(e4, a3, c3, true).is.a("function"), i3 = e4()), s3();
      var u3 = null == t5 ? e4() : e4[t5], f3 = null == t5 ? i3 : "." + t5;
      r2(this, "deltaMsgObj", f3), r2(this, "initialDeltaValue", i3), r2(this, "finalDeltaValue", u3), r2(this, "deltaBehavior", "change"), r2(this, "realDelta", u3 !== i3), this.assert(i3 !== u3, "expected " + f3 + " to change", "expected " + f3 + " to not change");
    }
    __name(D, "D");
    function T(e4, t5, o3) {
      o3 && r2(this, "message", o3);
      var i3, s3 = r2(this, "object"), a3 = r2(this, "message"), c3 = r2(this, "ssfi");
      new n4(s3, a3, c3, true).is.a("function"), t5 ? (new n4(e4, a3, c3, true).to.have.property(t5), i3 = e4[t5]) : (new n4(e4, a3, c3, true).is.a("function"), i3 = e4()), new n4(i3, a3, c3, true).is.a("number"), s3();
      var u3 = null == t5 ? e4() : e4[t5], f3 = null == t5 ? i3 : "." + t5;
      r2(this, "deltaMsgObj", f3), r2(this, "initialDeltaValue", i3), r2(this, "finalDeltaValue", u3), r2(this, "deltaBehavior", "increase"), r2(this, "realDelta", u3 - i3), this.assert(u3 - i3 > 0, "expected " + f3 + " to increase", "expected " + f3 + " to not increase");
    }
    __name(T, "T");
    function q(e4, t5, o3) {
      o3 && r2(this, "message", o3);
      var i3, s3 = r2(this, "object"), a3 = r2(this, "message"), c3 = r2(this, "ssfi");
      new n4(s3, a3, c3, true).is.a("function"), t5 ? (new n4(e4, a3, c3, true).to.have.property(t5), i3 = e4[t5]) : (new n4(e4, a3, c3, true).is.a("function"), i3 = e4()), new n4(i3, a3, c3, true).is.a("number"), s3();
      var u3 = null == t5 ? e4() : e4[t5], f3 = null == t5 ? i3 : "." + t5;
      r2(this, "deltaMsgObj", f3), r2(this, "initialDeltaValue", i3), r2(this, "finalDeltaValue", u3), r2(this, "deltaBehavior", "decrease"), r2(this, "realDelta", i3 - u3), this.assert(u3 - i3 < 0, "expected " + f3 + " to decrease", "expected " + f3 + " to not decrease");
    }
    __name(q, "q");
    function C(e4, t5) {
      t5 && r2(this, "message", t5);
      var n5, o3 = r2(this, "deltaMsgObj"), i3 = r2(this, "initialDeltaValue"), s3 = r2(this, "finalDeltaValue"), a3 = r2(this, "deltaBehavior"), c3 = r2(this, "realDelta");
      n5 = "change" === a3 ? Math.abs(s3 - i3) === Math.abs(e4) : c3 === Math.abs(e4), this.assert(n5, "expected " + o3 + " to " + a3 + " by " + e4, "expected " + o3 + " to not " + a3 + " by " + e4);
    }
    __name(C, "C");
    ["to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same", "but", "does", "still", "also"].forEach(function(e4) {
      n4.addProperty(e4);
    }), n4.addProperty("not", function() {
      r2(this, "negate", true);
    }), n4.addProperty("deep", function() {
      r2(this, "deep", true);
    }), n4.addProperty("nested", function() {
      r2(this, "nested", true);
    }), n4.addProperty("own", function() {
      r2(this, "own", true);
    }), n4.addProperty("ordered", function() {
      r2(this, "ordered", true);
    }), n4.addProperty("any", function() {
      r2(this, "any", true), r2(this, "all", false);
    }), n4.addProperty("all", function() {
      r2(this, "all", true), r2(this, "any", false);
    }), n4.addChainableMethod("an", i2), n4.addChainableMethod("a", i2), n4.addChainableMethod("include", c2, a2), n4.addChainableMethod("contain", c2, a2), n4.addChainableMethod("contains", c2, a2), n4.addChainableMethod("includes", c2, a2), n4.addProperty("ok", function() {
      this.assert(r2(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");
    }), n4.addProperty("true", function() {
      this.assert(true === r2(this, "object"), "expected #{this} to be true", "expected #{this} to be false", !r2(this, "negate"));
    }), n4.addProperty("false", function() {
      this.assert(false === r2(this, "object"), "expected #{this} to be false", "expected #{this} to be true", !!r2(this, "negate"));
    }), n4.addProperty("null", function() {
      this.assert(null === r2(this, "object"), "expected #{this} to be null", "expected #{this} not to be null");
    }), n4.addProperty("undefined", function() {
      this.assert(void 0 === r2(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined");
    }), n4.addProperty("NaN", function() {
      this.assert(t4.isNaN(r2(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN");
    }), n4.addProperty("exist", u2), n4.addProperty("exists", u2), n4.addProperty("empty", function() {
      var e4, n5 = r2(this, "object"), i3 = r2(this, "ssfi"), s3 = r2(this, "message");
      switch (s3 = s3 ? s3 + ": " : "", t4.type(n5).toLowerCase()) {
        case "array":
        case "string":
          e4 = n5.length;
          break;
        case "map":
        case "set":
          e4 = n5.size;
          break;
        case "weakmap":
        case "weakset":
          throw new o2(s3 + ".empty was passed a weak collection", void 0, i3);
        case "function":
          var a3 = s3 + ".empty was passed a function " + t4.getName(n5);
          throw new o2(a3.trim(), void 0, i3);
        default:
          if (n5 !== Object(n5))
            throw new o2(s3 + ".empty was passed non-string primitive " + t4.inspect(n5), void 0, i3);
          e4 = Object.keys(n5).length;
      }
      this.assert(0 === e4, "expected #{this} to be empty", "expected #{this} not to be empty");
    }), n4.addProperty("arguments", f2), n4.addProperty("Arguments", f2), n4.addMethod("equal", p2), n4.addMethod("equals", p2), n4.addMethod("eq", p2), n4.addMethod("eql", l2), n4.addMethod("eqls", l2), n4.addMethod("above", h3), n4.addMethod("gt", h3), n4.addMethod("greaterThan", h3), n4.addMethod("least", d), n4.addMethod("gte", d), n4.addMethod("greaterThanOrEqual", d), n4.addMethod("below", y), n4.addMethod("lt", y), n4.addMethod("lessThan", y), n4.addMethod("most", b), n4.addMethod("lte", b), n4.addMethod("lessThanOrEqual", b), n4.addMethod("within", function(e4, i3, s3) {
      s3 && r2(this, "message", s3);
      var a3, c3 = r2(this, "object"), u3 = r2(this, "doLength"), f3 = r2(this, "message"), p3 = f3 ? f3 + ": " : "", l3 = r2(this, "ssfi"), h4 = t4.type(c3).toLowerCase(), d2 = t4.type(e4).toLowerCase(), y2 = t4.type(i3).toLowerCase(), b2 = true, g2 = "date" === d2 && "date" === y2 ? e4.toUTCString() + ".." + i3.toUTCString() : e4 + ".." + i3;
      if (u3 && "map" !== h4 && "set" !== h4 && new n4(c3, f3, l3, true).to.have.property("length"), u3 || "date" !== h4 || "date" === d2 && "date" === y2 ? "number" === d2 && "number" === y2 || !u3 && "number" !== h4 ? u3 || "date" === h4 || "number" === h4 ? b2 = false : a3 = p3 + "expected " + ("string" === h4 ? "'" + c3 + "'" : c3) + " to be a number or a date" : a3 = p3 + "the arguments to within must be numbers" : a3 = p3 + "the arguments to within must be dates", b2)
        throw new o2(a3, void 0, l3);
      if (u3) {
        var w2, m2 = "length";
        "map" === h4 || "set" === h4 ? (m2 = "size", w2 = c3.size) : w2 = c3.length, this.assert(w2 >= e4 && w2 <= i3, "expected #{this} to have a " + m2 + " within " + g2, "expected #{this} to not have a " + m2 + " within " + g2);
      } else
        this.assert(c3 >= e4 && c3 <= i3, "expected #{this} to be within " + g2, "expected #{this} to not be within " + g2);
    }), n4.addMethod("instanceof", g), n4.addMethod("instanceOf", g), n4.addMethod("property", w), n4.addMethod("ownProperty", m), n4.addMethod("haveOwnProperty", m), n4.addMethod("ownPropertyDescriptor", v), n4.addMethod("haveOwnPropertyDescriptor", v), n4.addChainableMethod("length", O, x), n4.addChainableMethod("lengthOf", O, x), n4.addMethod("match", j), n4.addMethod("matches", j), n4.addMethod("string", function(e4, o3) {
      o3 && r2(this, "message", o3);
      var i3 = r2(this, "object"), s3 = r2(this, "message"), a3 = r2(this, "ssfi");
      new n4(i3, s3, a3, true).is.a("string"), this.assert(~i3.indexOf(e4), "expected #{this} to contain " + t4.inspect(e4), "expected #{this} to not contain " + t4.inspect(e4));
    }), n4.addMethod("keys", M), n4.addMethod("key", M), n4.addMethod("throw", P), n4.addMethod("throws", P), n4.addMethod("Throw", P), n4.addMethod("respondTo", N), n4.addMethod("respondsTo", N), n4.addProperty("itself", function() {
      r2(this, "itself", true);
    }), n4.addMethod("satisfy", E), n4.addMethod("satisfies", E), n4.addMethod("closeTo", S), n4.addMethod("approximately", S), n4.addMethod("members", function(e4, o3) {
      o3 && r2(this, "message", o3);
      var i3 = r2(this, "object"), s3 = r2(this, "message"), a3 = r2(this, "ssfi");
      new n4(i3, s3, a3, true).to.be.an("array"), new n4(e4, s3, a3, true).to.be.an("array");
      var c3, u3, f3, p3 = r2(this, "contains"), l3 = r2(this, "ordered");
      p3 ? (u3 = "expected #{this} to be " + (c3 = l3 ? "an ordered superset" : "a superset") + " of #{exp}", f3 = "expected #{this} to not be " + c3 + " of #{exp}") : (u3 = "expected #{this} to have the same " + (c3 = l3 ? "ordered members" : "members") + " as #{exp}", f3 = "expected #{this} to not have the same " + c3 + " as #{exp}");
      var h4 = r2(this, "deep") ? t4.eql : void 0;
      this.assert(k(e4, i3, h4, p3, l3), u3, f3, e4, i3, true);
    }), n4.addMethod("oneOf", A), n4.addMethod("change", D), n4.addMethod("changes", D), n4.addMethod("increase", T), n4.addMethod("increases", T), n4.addMethod("decrease", q), n4.addMethod("decreases", q), n4.addMethod("by", C), n4.addProperty("extensible", function() {
      var e4 = r2(this, "object"), t5 = e4 === Object(e4) && Object.isExtensible(e4);
      this.assert(t5, "expected #{this} to be extensible", "expected #{this} to not be extensible");
    }), n4.addProperty("sealed", function() {
      var e4 = r2(this, "object"), t5 = e4 !== Object(e4) || Object.isSealed(e4);
      this.assert(t5, "expected #{this} to be sealed", "expected #{this} to not be sealed");
    }), n4.addProperty("frozen", function() {
      var e4 = r2(this, "object"), t5 = e4 !== Object(e4) || Object.isFrozen(e4);
      this.assert(t5, "expected #{this} to be frozen", "expected #{this} to not be frozen");
    }), n4.addProperty("finite", function(e4) {
      var t5 = r2(this, "object");
      this.assert("number" == typeof t5 && isFinite(t5), "expected #{this} to be a finite number", "expected #{this} to not be a finite number");
    });
  };
}, {}], 6: [function(e2, t3, n3) {
  t3.exports = function(e3, t4) {
    var n4 = e3.Assertion, o2 = t4.flag, r2 = e3.assert = function(t5, o3) {
      new n4(null, null, e3.assert, true).assert(t5, o3, "[ negation message unavailable ]");
    };
    r2.fail = function(t5, n5, o3, i2) {
      throw arguments.length < 2 && (o3 = t5, t5 = void 0), o3 = o3 || "assert.fail()", new e3.AssertionError(o3, { actual: t5, expected: n5, operator: i2 }, r2.fail);
    }, r2.isOk = function(e4, t5) {
      new n4(e4, t5, r2.isOk, true).is.ok;
    }, r2.isNotOk = function(e4, t5) {
      new n4(e4, t5, r2.isNotOk, true).is.not.ok;
    }, r2.equal = function(e4, t5, i2) {
      var s2 = new n4(e4, i2, r2.equal, true);
      s2.assert(t5 == o2(s2, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", t5, e4, true);
    }, r2.notEqual = function(e4, t5, i2) {
      var s2 = new n4(e4, i2, r2.notEqual, true);
      s2.assert(t5 != o2(s2, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", t5, e4, true);
    }, r2.strictEqual = function(e4, t5, o3) {
      new n4(e4, o3, r2.strictEqual, true).to.equal(t5);
    }, r2.notStrictEqual = function(e4, t5, o3) {
      new n4(e4, o3, r2.notStrictEqual, true).to.not.equal(t5);
    }, r2.deepEqual = r2.deepStrictEqual = function(e4, t5, o3) {
      new n4(e4, o3, r2.deepEqual, true).to.eql(t5);
    }, r2.notDeepEqual = function(e4, t5, o3) {
      new n4(e4, o3, r2.notDeepEqual, true).to.not.eql(t5);
    }, r2.isAbove = function(e4, t5, o3) {
      new n4(e4, o3, r2.isAbove, true).to.be.above(t5);
    }, r2.isAtLeast = function(e4, t5, o3) {
      new n4(e4, o3, r2.isAtLeast, true).to.be.least(t5);
    }, r2.isBelow = function(e4, t5, o3) {
      new n4(e4, o3, r2.isBelow, true).to.be.below(t5);
    }, r2.isAtMost = function(e4, t5, o3) {
      new n4(e4, o3, r2.isAtMost, true).to.be.most(t5);
    }, r2.isTrue = function(e4, t5) {
      new n4(e4, t5, r2.isTrue, true).is.true;
    }, r2.isNotTrue = function(e4, t5) {
      new n4(e4, t5, r2.isNotTrue, true).to.not.equal(true);
    }, r2.isFalse = function(e4, t5) {
      new n4(e4, t5, r2.isFalse, true).is.false;
    }, r2.isNotFalse = function(e4, t5) {
      new n4(e4, t5, r2.isNotFalse, true).to.not.equal(false);
    }, r2.isNull = function(e4, t5) {
      new n4(e4, t5, r2.isNull, true).to.equal(null);
    }, r2.isNotNull = function(e4, t5) {
      new n4(e4, t5, r2.isNotNull, true).to.not.equal(null);
    }, r2.isNaN = function(e4, t5) {
      new n4(e4, t5, r2.isNaN, true).to.be.NaN;
    }, r2.isNotNaN = function(e4, t5) {
      new n4(e4, t5, r2.isNotNaN, true).not.to.be.NaN;
    }, r2.exists = function(e4, t5) {
      new n4(e4, t5, r2.exists, true).to.exist;
    }, r2.notExists = function(e4, t5) {
      new n4(e4, t5, r2.notExists, true).to.not.exist;
    }, r2.isUndefined = function(e4, t5) {
      new n4(e4, t5, r2.isUndefined, true).to.equal(void 0);
    }, r2.isDefined = function(e4, t5) {
      new n4(e4, t5, r2.isDefined, true).to.not.equal(void 0);
    }, r2.isFunction = function(e4, t5) {
      new n4(e4, t5, r2.isFunction, true).to.be.a("function");
    }, r2.isNotFunction = function(e4, t5) {
      new n4(e4, t5, r2.isNotFunction, true).to.not.be.a("function");
    }, r2.isObject = function(e4, t5) {
      new n4(e4, t5, r2.isObject, true).to.be.a("object");
    }, r2.isNotObject = function(e4, t5) {
      new n4(e4, t5, r2.isNotObject, true).to.not.be.a("object");
    }, r2.isArray = function(e4, t5) {
      new n4(e4, t5, r2.isArray, true).to.be.an("array");
    }, r2.isNotArray = function(e4, t5) {
      new n4(e4, t5, r2.isNotArray, true).to.not.be.an("array");
    }, r2.isString = function(e4, t5) {
      new n4(e4, t5, r2.isString, true).to.be.a("string");
    }, r2.isNotString = function(e4, t5) {
      new n4(e4, t5, r2.isNotString, true).to.not.be.a("string");
    }, r2.isNumber = function(e4, t5) {
      new n4(e4, t5, r2.isNumber, true).to.be.a("number");
    }, r2.isNotNumber = function(e4, t5) {
      new n4(e4, t5, r2.isNotNumber, true).to.not.be.a("number");
    }, r2.isFinite = function(e4, t5) {
      new n4(e4, t5, r2.isFinite, true).to.be.finite;
    }, r2.isBoolean = function(e4, t5) {
      new n4(e4, t5, r2.isBoolean, true).to.be.a("boolean");
    }, r2.isNotBoolean = function(e4, t5) {
      new n4(e4, t5, r2.isNotBoolean, true).to.not.be.a("boolean");
    }, r2.typeOf = function(e4, t5, o3) {
      new n4(e4, o3, r2.typeOf, true).to.be.a(t5);
    }, r2.notTypeOf = function(e4, t5, o3) {
      new n4(e4, o3, r2.notTypeOf, true).to.not.be.a(t5);
    }, r2.instanceOf = function(e4, t5, o3) {
      new n4(e4, o3, r2.instanceOf, true).to.be.instanceOf(t5);
    }, r2.notInstanceOf = function(e4, t5, o3) {
      new n4(e4, o3, r2.notInstanceOf, true).to.not.be.instanceOf(t5);
    }, r2.include = function(e4, t5, o3) {
      new n4(e4, o3, r2.include, true).include(t5);
    }, r2.notInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.notInclude, true).not.include(t5);
    }, r2.deepInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.deepInclude, true).deep.include(t5);
    }, r2.notDeepInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.notDeepInclude, true).not.deep.include(t5);
    }, r2.nestedInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.nestedInclude, true).nested.include(t5);
    }, r2.notNestedInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.notNestedInclude, true).not.nested.include(t5);
    }, r2.deepNestedInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.deepNestedInclude, true).deep.nested.include(t5);
    }, r2.notDeepNestedInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.notDeepNestedInclude, true).not.deep.nested.include(t5);
    }, r2.ownInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.ownInclude, true).own.include(t5);
    }, r2.notOwnInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.notOwnInclude, true).not.own.include(t5);
    }, r2.deepOwnInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.deepOwnInclude, true).deep.own.include(t5);
    }, r2.notDeepOwnInclude = function(e4, t5, o3) {
      new n4(e4, o3, r2.notDeepOwnInclude, true).not.deep.own.include(t5);
    }, r2.match = function(e4, t5, o3) {
      new n4(e4, o3, r2.match, true).to.match(t5);
    }, r2.notMatch = function(e4, t5, o3) {
      new n4(e4, o3, r2.notMatch, true).to.not.match(t5);
    }, r2.property = function(e4, t5, o3) {
      new n4(e4, o3, r2.property, true).to.have.property(t5);
    }, r2.notProperty = function(e4, t5, o3) {
      new n4(e4, o3, r2.notProperty, true).to.not.have.property(t5);
    }, r2.propertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.propertyVal, true).to.have.property(t5, o3);
    }, r2.notPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.notPropertyVal, true).to.not.have.property(t5, o3);
    }, r2.deepPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.deepPropertyVal, true).to.have.deep.property(t5, o3);
    }, r2.notDeepPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.notDeepPropertyVal, true).to.not.have.deep.property(t5, o3);
    }, r2.ownProperty = function(e4, t5, o3) {
      new n4(e4, o3, r2.ownProperty, true).to.have.own.property(t5);
    }, r2.notOwnProperty = function(e4, t5, o3) {
      new n4(e4, o3, r2.notOwnProperty, true).to.not.have.own.property(t5);
    }, r2.ownPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.ownPropertyVal, true).to.have.own.property(t5, o3);
    }, r2.notOwnPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.notOwnPropertyVal, true).to.not.have.own.property(t5, o3);
    }, r2.deepOwnPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.deepOwnPropertyVal, true).to.have.deep.own.property(t5, o3);
    }, r2.notDeepOwnPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(t5, o3);
    }, r2.nestedProperty = function(e4, t5, o3) {
      new n4(e4, o3, r2.nestedProperty, true).to.have.nested.property(t5);
    }, r2.notNestedProperty = function(e4, t5, o3) {
      new n4(e4, o3, r2.notNestedProperty, true).to.not.have.nested.property(t5);
    }, r2.nestedPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.nestedPropertyVal, true).to.have.nested.property(t5, o3);
    }, r2.notNestedPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.notNestedPropertyVal, true).to.not.have.nested.property(t5, o3);
    }, r2.deepNestedPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.deepNestedPropertyVal, true).to.have.deep.nested.property(t5, o3);
    }, r2.notDeepNestedPropertyVal = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(t5, o3);
    }, r2.lengthOf = function(e4, t5, o3) {
      new n4(e4, o3, r2.lengthOf, true).to.have.lengthOf(t5);
    }, r2.hasAnyKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.hasAnyKeys, true).to.have.any.keys(t5);
    }, r2.hasAllKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.hasAllKeys, true).to.have.all.keys(t5);
    }, r2.containsAllKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.containsAllKeys, true).to.contain.all.keys(t5);
    }, r2.doesNotHaveAnyKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.doesNotHaveAnyKeys, true).to.not.have.any.keys(t5);
    }, r2.doesNotHaveAllKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.doesNotHaveAllKeys, true).to.not.have.all.keys(t5);
    }, r2.hasAnyDeepKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.hasAnyDeepKeys, true).to.have.any.deep.keys(t5);
    }, r2.hasAllDeepKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.hasAllDeepKeys, true).to.have.all.deep.keys(t5);
    }, r2.containsAllDeepKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.containsAllDeepKeys, true).to.contain.all.deep.keys(t5);
    }, r2.doesNotHaveAnyDeepKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(t5);
    }, r2.doesNotHaveAllDeepKeys = function(e4, t5, o3) {
      new n4(e4, o3, r2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(t5);
    }, r2.throws = function(e4, t5, i2, s2) {
      ("string" == typeof t5 || t5 instanceof RegExp) && (i2 = t5, t5 = null);
      var a2 = new n4(e4, s2, r2.throws, true).to.throw(t5, i2);
      return o2(a2, "object");
    }, r2.doesNotThrow = function(e4, t5, o3, i2) {
      ("string" == typeof t5 || t5 instanceof RegExp) && (o3 = t5, t5 = null), new n4(e4, i2, r2.doesNotThrow, true).to.not.throw(t5, o3);
    }, r2.operator = function(i2, s2, a2, c2) {
      var u2;
      switch (s2) {
        case "==":
          u2 = i2 == a2;
          break;
        case "===":
          u2 = i2 === a2;
          break;
        case ">":
          u2 = i2 > a2;
          break;
        case ">=":
          u2 = i2 >= a2;
          break;
        case "<":
          u2 = i2 < a2;
          break;
        case "<=":
          u2 = i2 <= a2;
          break;
        case "!=":
          u2 = i2 != a2;
          break;
        case "!==":
          u2 = i2 !== a2;
          break;
        default:
          throw c2 = c2 ? c2 + ": " : c2, new e3.AssertionError(c2 + 'Invalid operator "' + s2 + '"', void 0, r2.operator);
      }
      var f2 = new n4(u2, c2, r2.operator, true);
      f2.assert(true === o2(f2, "object"), "expected " + t4.inspect(i2) + " to be " + s2 + " " + t4.inspect(a2), "expected " + t4.inspect(i2) + " to not be " + s2 + " " + t4.inspect(a2));
    }, r2.closeTo = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.closeTo, true).to.be.closeTo(t5, o3);
    }, r2.approximately = function(e4, t5, o3, i2) {
      new n4(e4, i2, r2.approximately, true).to.be.approximately(t5, o3);
    }, r2.sameMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.sameMembers, true).to.have.same.members(t5);
    }, r2.notSameMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notSameMembers, true).to.not.have.same.members(t5);
    }, r2.sameDeepMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.sameDeepMembers, true).to.have.same.deep.members(t5);
    }, r2.notSameDeepMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notSameDeepMembers, true).to.not.have.same.deep.members(t5);
    }, r2.sameOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.sameOrderedMembers, true).to.have.same.ordered.members(t5);
    }, r2.notSameOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notSameOrderedMembers, true).to.not.have.same.ordered.members(t5);
    }, r2.sameDeepOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(t5);
    }, r2.notSameDeepOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(t5);
    }, r2.includeMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.includeMembers, true).to.include.members(t5);
    }, r2.notIncludeMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notIncludeMembers, true).to.not.include.members(t5);
    }, r2.includeDeepMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.includeDeepMembers, true).to.include.deep.members(t5);
    }, r2.notIncludeDeepMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notIncludeDeepMembers, true).to.not.include.deep.members(t5);
    }, r2.includeOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.includeOrderedMembers, true).to.include.ordered.members(t5);
    }, r2.notIncludeOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notIncludeOrderedMembers, true).to.not.include.ordered.members(t5);
    }, r2.includeDeepOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(t5);
    }, r2.notIncludeDeepOrderedMembers = function(e4, t5, o3) {
      new n4(e4, o3, r2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(t5);
    }, r2.oneOf = function(e4, t5, o3) {
      new n4(e4, o3, r2.oneOf, true).to.be.oneOf(t5);
    }, r2.changes = function(e4, t5, o3, i2) {
      3 === arguments.length && "function" == typeof t5 && (i2 = o3, o3 = null), new n4(e4, i2, r2.changes, true).to.change(t5, o3);
    }, r2.changesBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      new n4(e4, s2, r2.changesBy, true).to.change(t5, o3).by(i2);
    }, r2.doesNotChange = function(e4, t5, o3, i2) {
      return 3 === arguments.length && "function" == typeof t5 && (i2 = o3, o3 = null), new n4(e4, i2, r2.doesNotChange, true).to.not.change(t5, o3);
    }, r2.changesButNotBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      new n4(e4, s2, r2.changesButNotBy, true).to.change(t5, o3).but.not.by(i2);
    }, r2.increases = function(e4, t5, o3, i2) {
      return 3 === arguments.length && "function" == typeof t5 && (i2 = o3, o3 = null), new n4(e4, i2, r2.increases, true).to.increase(t5, o3);
    }, r2.increasesBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      new n4(e4, s2, r2.increasesBy, true).to.increase(t5, o3).by(i2);
    }, r2.doesNotIncrease = function(e4, t5, o3, i2) {
      return 3 === arguments.length && "function" == typeof t5 && (i2 = o3, o3 = null), new n4(e4, i2, r2.doesNotIncrease, true).to.not.increase(t5, o3);
    }, r2.increasesButNotBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      new n4(e4, s2, r2.increasesButNotBy, true).to.increase(t5, o3).but.not.by(i2);
    }, r2.decreases = function(e4, t5, o3, i2) {
      return 3 === arguments.length && "function" == typeof t5 && (i2 = o3, o3 = null), new n4(e4, i2, r2.decreases, true).to.decrease(t5, o3);
    }, r2.decreasesBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      new n4(e4, s2, r2.decreasesBy, true).to.decrease(t5, o3).by(i2);
    }, r2.doesNotDecrease = function(e4, t5, o3, i2) {
      return 3 === arguments.length && "function" == typeof t5 && (i2 = o3, o3 = null), new n4(e4, i2, r2.doesNotDecrease, true).to.not.decrease(t5, o3);
    }, r2.doesNotDecreaseBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      return new n4(e4, s2, r2.doesNotDecreaseBy, true).to.not.decrease(t5, o3).by(i2);
    }, r2.decreasesButNotBy = function(e4, t5, o3, i2, s2) {
      if (4 === arguments.length && "function" == typeof t5) {
        var a2 = i2;
        i2 = o3, s2 = a2;
      } else
        3 === arguments.length && (i2 = o3, o3 = null);
      new n4(e4, s2, r2.decreasesButNotBy, true).to.decrease(t5, o3).but.not.by(i2);
    }, /*!
       * ### .ifError(object)
       *
       * Asserts if value is not a false value, and throws if it is a true value.
       * This is added to allow for chai to be a drop-in replacement for Node's
       * assert class.
       *
       *     var err = new Error('I am a custom error');
       *     assert.ifError(err); // Rethrows err!
       *
       * @name ifError
       * @param {Object} object
       * @namespace Assert
       * @api public
       */
    r2.ifError = function(e4) {
      if (e4)
        throw e4;
    }, r2.isExtensible = function(e4, t5) {
      new n4(e4, t5, r2.isExtensible, true).to.be.extensible;
    }, r2.isNotExtensible = function(e4, t5) {
      new n4(e4, t5, r2.isNotExtensible, true).to.not.be.extensible;
    }, r2.isSealed = function(e4, t5) {
      new n4(e4, t5, r2.isSealed, true).to.be.sealed;
    }, r2.isNotSealed = function(e4, t5) {
      new n4(e4, t5, r2.isNotSealed, true).to.not.be.sealed;
    }, r2.isFrozen = function(e4, t5) {
      new n4(e4, t5, r2.isFrozen, true).to.be.frozen;
    }, r2.isNotFrozen = function(e4, t5) {
      new n4(e4, t5, r2.isNotFrozen, true).to.not.be.frozen;
    }, r2.isEmpty = function(e4, t5) {
      new n4(e4, t5, r2.isEmpty, true).to.be.empty;
    }, r2.isNotEmpty = function(e4, t5) {
      new n4(e4, t5, r2.isNotEmpty, true).to.not.be.empty;
    }, /*!
       * Aliases.
       */
    (/* @__PURE__ */ __name(function e4(t5, n5) {
      return r2[n5] = r2[t5], e4;
    }, "e"))("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
  };
}, {}], 7: [function(e2, t3, n3) {
  t3.exports = function(e3, t4) {
    e3.expect = function(t5, n4) {
      return new e3.Assertion(t5, n4);
    }, e3.expect.fail = function(t5, n4, o2, r2) {
      throw arguments.length < 2 && (o2 = t5, t5 = void 0), o2 = o2 || "expect.fail()", new e3.AssertionError(o2, { actual: t5, expected: n4, operator: r2 }, e3.expect.fail);
    };
  };
}, {}], 8: [function(e2, t3, n3) {
  t3.exports = function(e3, t4) {
    var n4 = e3.Assertion;
    function o2() {
      function t5() {
        return this instanceof String || this instanceof Number || this instanceof Boolean || "function" == typeof Symbol && this instanceof Symbol || "function" == typeof BigInt && this instanceof BigInt ? new n4(this.valueOf(), null, t5) : new n4(this, null, t5);
      }
      __name(t5, "t");
      function o3(e4) {
        Object.defineProperty(this, "should", { value: e4, enumerable: true, configurable: true, writable: true });
      }
      __name(o3, "o");
      Object.defineProperty(Object.prototype, "should", { set: o3, get: t5, configurable: true });
      var r2 = { fail: function(t6, n5, o4, i2) {
        throw arguments.length < 2 && (o4 = t6, t6 = void 0), o4 = o4 || "should.fail()", new e3.AssertionError(o4, { actual: t6, expected: n5, operator: i2 }, r2.fail);
      }, equal: function(e4, t6, o4) {
        new n4(e4, o4).to.equal(t6);
      }, Throw: function(e4, t6, o4, r3) {
        new n4(e4, r3).to.Throw(t6, o4);
      }, exist: function(e4, t6) {
        new n4(e4, t6).to.exist;
      }, not: {} };
      return r2.not.equal = function(e4, t6, o4) {
        new n4(e4, o4).to.not.equal(t6);
      }, r2.not.Throw = function(e4, t6, o4, r3) {
        new n4(e4, r3).to.not.Throw(t6, o4);
      }, r2.not.exist = function(e4, t6) {
        new n4(e4, t6).to.not.exist;
      }, r2.throw = r2.Throw, r2.not.throw = r2.not.Throw, r2;
    }
    __name(o2, "o");
    e3.should = o2, e3.Should = o2;
  };
}, {}], 9: [function(e2, t3, n3) {
  var o2 = e2("./addLengthGuard"), r2 = e2("../../chai"), i2 = e2("./flag"), s2 = e2("./proxify"), a2 = e2("./transferFlags"), c2 = "function" == typeof Object.setPrototypeOf, u2 = /* @__PURE__ */ __name(function() {
  }, "u"), f2 = Object.getOwnPropertyNames(u2).filter(function(e3) {
    var t4 = Object.getOwnPropertyDescriptor(u2, e3);
    return "object" != typeof t4 || !t4.configurable;
  }), p2 = Function.prototype.call, l2 = Function.prototype.apply;
  t3.exports = function(e3, t4, n4, u3) {
    "function" != typeof u3 && (u3 = /* @__PURE__ */ __name(function() {
    }, "u"));
    var h3 = { method: n4, chainingBehavior: u3 };
    e3.__methods || (e3.__methods = {}), e3.__methods[t4] = h3, Object.defineProperty(e3, t4, { get: function() {
      h3.chainingBehavior.call(this);
      var n5 = /* @__PURE__ */ __name(function() {
        i2(this, "lockSsfi") || i2(this, "ssfi", n5);
        var e4 = h3.method.apply(this, arguments);
        if (void 0 !== e4)
          return e4;
        var t5 = new r2.Assertion();
        return a2(this, t5), t5;
      }, "n");
      if (o2(n5, t4, true), c2) {
        var u4 = Object.create(this);
        u4.call = p2, u4.apply = l2, Object.setPrototypeOf(n5, u4);
      } else
        Object.getOwnPropertyNames(e3).forEach(function(t5) {
          if (-1 === f2.indexOf(t5)) {
            var o3 = Object.getOwnPropertyDescriptor(e3, t5);
            Object.defineProperty(n5, t5, o3);
          }
        });
      return a2(this, n5), s2(n5);
    }, configurable: true });
  };
}, { "../../chai": 2, "./addLengthGuard": 10, "./flag": 15, "./proxify": 31, "./transferFlags": 33 }], 10: [function(e2, t3, n3) {
  var o2 = Object.getOwnPropertyDescriptor(function() {
  }, "length");
  t3.exports = function(e3, t4, n4) {
    return o2.configurable ? (Object.defineProperty(e3, "length", { get: function() {
      if (n4)
        throw Error("Invalid Chai property: " + t4 + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t4 + '". Use "' + t4 + '.lengthOf" instead.');
      throw Error("Invalid Chai property: " + t4 + '.length. See docs for proper usage of "' + t4 + '".');
    } }), e3) : e3;
  };
}, {}], 11: [function(e2, t3, n3) {
  var o2 = e2("./addLengthGuard"), r2 = e2("../../chai"), i2 = e2("./flag"), s2 = e2("./proxify"), a2 = e2("./transferFlags");
  t3.exports = function(e3, t4, n4) {
    var c2 = /* @__PURE__ */ __name(function() {
      i2(this, "lockSsfi") || i2(this, "ssfi", c2);
      var e4 = n4.apply(this, arguments);
      if (void 0 !== e4)
        return e4;
      var t5 = new r2.Assertion();
      return a2(this, t5), t5;
    }, "c");
    o2(c2, t4, false), e3[t4] = s2(c2, t4);
  };
}, { "../../chai": 2, "./addLengthGuard": 10, "./flag": 15, "./proxify": 31, "./transferFlags": 33 }], 12: [function(e2, t3, n3) {
  var o2 = e2("../../chai"), r2 = e2("./flag"), i2 = e2("./isProxyEnabled"), s2 = e2("./transferFlags");
  t3.exports = function(e3, t4, n4) {
    n4 = void 0 === n4 ? function() {
    } : n4, Object.defineProperty(e3, t4, { get: /* @__PURE__ */ __name(function e4() {
      i2() || r2(this, "lockSsfi") || r2(this, "ssfi", e4);
      var t5 = n4.call(this);
      if (void 0 !== t5)
        return t5;
      var a2 = new o2.Assertion();
      return s2(this, a2), a2;
    }, "e"), configurable: true });
  };
}, { "../../chai": 2, "./flag": 15, "./isProxyEnabled": 26, "./transferFlags": 33 }], 13: [function(e2, t3, n3) {
  var o2 = e2("./inspect");
  t3.exports = function(e3, t4) {
    return o2(e3) < o2(t4) ? -1 : 1;
  };
}, { "./inspect": 24 }], 14: [function(e2, t3, n3) {
  var o2 = e2("assertion-error"), r2 = e2("./flag"), i2 = e2("type-detect");
  t3.exports = function(e3, t4) {
    var n4 = r2(e3, "message"), s2 = r2(e3, "ssfi");
    n4 = n4 ? n4 + ": " : "", e3 = r2(e3, "object"), (t4 = t4.map(function(e4) {
      return e4.toLowerCase();
    })).sort();
    var a2 = t4.map(function(e4, n5) {
      var o3 = ~["a", "e", "i", "o", "u"].indexOf(e4.charAt(0)) ? "an" : "a";
      return (t4.length > 1 && n5 === t4.length - 1 ? "or " : "") + o3 + " " + e4;
    }).join(", "), c2 = i2(e3).toLowerCase();
    if (!t4.some(function(e4) {
      return c2 === e4;
    }))
      throw new o2(n4 + "object tested must be " + a2 + ", but " + c2 + " given", void 0, s2);
  };
}, { "./flag": 15, "assertion-error": 34, "type-detect": 39 }], 15: [function(e2, t3, n3) {
  t3.exports = function(e3, t4, n4) {
    var o2 = e3.__flags || (e3.__flags = /* @__PURE__ */ Object.create(null));
    if (3 !== arguments.length)
      return o2[t4];
    o2[t4] = n4;
  };
}, {}], 16: [function(e2, t3, n3) {
  t3.exports = function(e3, t4) {
    return t4.length > 4 ? t4[4] : e3._obj;
  };
}, {}], 17: [function(e2, t3, n3) {
  t3.exports = function(e3) {
    var t4 = [];
    for (var n4 in e3)
      t4.push(n4);
    return t4;
  };
}, {}], 18: [function(e2, t3, n3) {
  var o2 = e2("./flag"), r2 = e2("./getActual"), i2 = e2("./objDisplay");
  t3.exports = function(e3, t4) {
    var n4 = o2(e3, "negate"), s2 = o2(e3, "object"), a2 = t4[3], c2 = r2(e3, t4), u2 = n4 ? t4[2] : t4[1], f2 = o2(e3, "message");
    return "function" == typeof u2 && (u2 = u2()), u2 = (u2 = u2 || "").replace(/#\{this\}/g, function() {
      return i2(s2);
    }).replace(/#\{act\}/g, function() {
      return i2(c2);
    }).replace(/#\{exp\}/g, function() {
      return i2(a2);
    }), f2 ? f2 + ": " + u2 : u2;
  };
}, { "./flag": 15, "./getActual": 16, "./objDisplay": 27 }], 19: [function(e2, t3, n3) {
  var o2 = e2("type-detect"), r2 = e2("./flag");
  function i2(e3) {
    var t4 = o2(e3);
    return -1 !== ["Array", "Object", "function"].indexOf(t4);
  }
  __name(i2, "i");
  t3.exports = function(e3, t4) {
    var n4 = r2(e3, "operator"), o3 = r2(e3, "negate"), s2 = t4[3], a2 = o3 ? t4[2] : t4[1];
    if (n4)
      return n4;
    if ("function" == typeof a2 && (a2 = a2()), (a2 = a2 || "") && !/\shave\s/.test(a2)) {
      var c2 = i2(s2);
      return /\snot\s/.test(a2) ? c2 ? "notDeepStrictEqual" : "notStrictEqual" : c2 ? "deepStrictEqual" : "strictEqual";
    }
  };
}, { "./flag": 15, "type-detect": 39 }], 20: [function(e2, t3, n3) {
  var o2 = e2("./getOwnEnumerablePropertySymbols");
  t3.exports = function(e3) {
    return Object.keys(e3).concat(o2(e3));
  };
}, { "./getOwnEnumerablePropertySymbols": 21 }], 21: [function(e2, t3, n3) {
  t3.exports = function(e3) {
    return "function" != typeof Object.getOwnPropertySymbols ? [] : Object.getOwnPropertySymbols(e3).filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    });
  };
}, {}], 22: [function(e2, t3, n3) {
  t3.exports = function(e3) {
    var t4 = Object.getOwnPropertyNames(e3);
    function n4(e4) {
      -1 === t4.indexOf(e4) && t4.push(e4);
    }
    __name(n4, "n");
    for (var o2 = Object.getPrototypeOf(e3); null !== o2; )
      Object.getOwnPropertyNames(o2).forEach(n4), o2 = Object.getPrototypeOf(o2);
    return t4;
  };
}, {}], 23: [function(e2, t3, n3) {
  var o2 = e2("pathval");
  n3.test = e2("./test"), /*!
   * type utility
   */
  n3.type = e2("type-detect"), /*!
   * expectTypes utility
   */
  n3.expectTypes = e2("./expectTypes"), /*!
   * message utility
   */
  n3.getMessage = e2("./getMessage"), /*!
   * actual utility
   */
  n3.getActual = e2("./getActual"), /*!
   * Inspect util
   */
  n3.inspect = e2("./inspect"), /*!
   * Object Display util
   */
  n3.objDisplay = e2("./objDisplay"), /*!
   * Flag utility
   */
  n3.flag = e2("./flag"), /*!
   * Flag transferring utility
   */
  n3.transferFlags = e2("./transferFlags"), /*!
   * Deep equal utility
   */
  n3.eql = e2("deep-eql"), /*!
   * Deep path info
   */
  n3.getPathInfo = o2.getPathInfo, /*!
   * Check if a property exists
   */
  n3.hasProperty = o2.hasProperty, /*!
   * Function name
   */
  n3.getName = e2("get-func-name"), /*!
   * add Property
   */
  n3.addProperty = e2("./addProperty"), /*!
   * add Method
   */
  n3.addMethod = e2("./addMethod"), /*!
   * overwrite Property
   */
  n3.overwriteProperty = e2("./overwriteProperty"), /*!
   * overwrite Method
   */
  n3.overwriteMethod = e2("./overwriteMethod"), /*!
   * Add a chainable method
   */
  n3.addChainableMethod = e2("./addChainableMethod"), /*!
   * Overwrite chainable method
   */
  n3.overwriteChainableMethod = e2("./overwriteChainableMethod"), /*!
   * Compare by inspect method
   */
  n3.compareByInspect = e2("./compareByInspect"), /*!
   * Get own enumerable property symbols method
   */
  n3.getOwnEnumerablePropertySymbols = e2("./getOwnEnumerablePropertySymbols"), /*!
   * Get own enumerable properties method
   */
  n3.getOwnEnumerableProperties = e2("./getOwnEnumerableProperties"), /*!
   * Checks error against a given set of criteria
   */
  n3.checkError = e2("check-error"), /*!
   * Proxify util
   */
  n3.proxify = e2("./proxify"), /*!
   * addLengthGuard util
   */
  n3.addLengthGuard = e2("./addLengthGuard"), /*!
   * isProxyEnabled helper
   */
  n3.isProxyEnabled = e2("./isProxyEnabled"), /*!
   * isNaN method
   */
  n3.isNaN = e2("./isNaN"), /*!
   * getOperator method
   */
  n3.getOperator = e2("./getOperator");
}, { "./addChainableMethod": 9, "./addLengthGuard": 10, "./addMethod": 11, "./addProperty": 12, "./compareByInspect": 13, "./expectTypes": 14, "./flag": 15, "./getActual": 16, "./getMessage": 18, "./getOperator": 19, "./getOwnEnumerableProperties": 20, "./getOwnEnumerablePropertySymbols": 21, "./inspect": 24, "./isNaN": 25, "./isProxyEnabled": 26, "./objDisplay": 27, "./overwriteChainableMethod": 28, "./overwriteMethod": 29, "./overwriteProperty": 30, "./proxify": 31, "./test": 32, "./transferFlags": 33, "check-error": 35, "deep-eql": 36, "get-func-name": 37, pathval: 38, "type-detect": 39 }], 24: [function(e2, t3, n3) {
  var o2 = e2("get-func-name"), r2 = e2("./getProperties"), i2 = e2("./getEnumerableProperties"), s2 = e2("../config");
  function a2(e3, t4, n4, o3) {
    return u2({ showHidden: t4, seen: [], stylize: function(e4) {
      return e4;
    } }, e3, void 0 === n4 ? 2 : n4);
  }
  __name(a2, "a");
  t3.exports = a2;
  var c2 = /* @__PURE__ */ __name(function(e3) {
    return "object" == typeof HTMLElement ? e3 instanceof HTMLElement : e3 && "object" == typeof e3 && "nodeType" in e3 && 1 === e3.nodeType && "string" == typeof e3.nodeName;
  }, "c");
  function u2(e3, t4, s3) {
    if (t4 && "function" == typeof t4.inspect && t4.inspect !== n3.inspect && (!t4.constructor || t4.constructor.prototype !== t4)) {
      var a3 = t4.inspect(s3, e3);
      return "string" != typeof a3 && (a3 = u2(e3, a3, s3)), a3;
    }
    var x2 = f2(e3, t4);
    if (x2)
      return x2;
    if (c2(t4)) {
      if ("outerHTML" in t4)
        return t4.outerHTML;
      try {
        if (document.xmlVersion)
          return new XMLSerializer().serializeToString(t4);
        var O = "http://www.w3.org/1999/xhtml", j = document.createElementNS(O, "_");
        j.appendChild(t4.cloneNode(false));
        var M = j.innerHTML.replace("><", ">" + t4.innerHTML + "<");
        return j.innerHTML = "", M;
      } catch (e4) {
      }
    }
    var P, N, E = i2(t4), S = e3.showHidden ? r2(t4) : E;
    if (0 === S.length || v(t4) && (1 === S.length && "stack" === S[0] || 2 === S.length && "description" === S[0] && "stack" === S[1])) {
      if ("function" == typeof t4)
        return N = (P = o2(t4)) ? ": " + P : "", e3.stylize("[Function" + N + "]", "special");
      if (w(t4))
        return e3.stylize(RegExp.prototype.toString.call(t4), "regexp");
      if (m(t4))
        return e3.stylize(Date.prototype.toUTCString.call(t4), "date");
      if (v(t4))
        return p2(t4);
    }
    var k, A = "", D = false, T = false, q = ["{", "}"];
    if (b(t4) && (T = true, q = ["[", "]"]), g(t4) && (D = true, q = ["[", "]"]), "function" == typeof t4 && (A = " [Function" + (N = (P = o2(t4)) ? ": " + P : "") + "]"), w(t4) && (A = " " + RegExp.prototype.toString.call(t4)), m(t4) && (A = " " + Date.prototype.toUTCString.call(t4)), v(t4))
      return p2(t4);
    if (0 === S.length && (!D || 0 == t4.length))
      return q[0] + A + q[1];
    if (s3 < 0)
      return w(t4) ? e3.stylize(RegExp.prototype.toString.call(t4), "regexp") : e3.stylize("[Object]", "special");
    if (e3.seen.push(t4), D)
      k = l2(e3, t4, s3, E, S);
    else {
      if (T)
        return h3(t4);
      k = S.map(function(n4) {
        return d(e3, t4, s3, E, n4, D);
      });
    }
    return e3.seen.pop(), y(k, A, q);
  }
  __name(u2, "u");
  function f2(e3, t4) {
    switch (typeof t4) {
      case "undefined":
        return e3.stylize("undefined", "undefined");
      case "string":
        var n4 = "'" + JSON.stringify(t4).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e3.stylize(n4, "string");
      case "number":
        return 0 === t4 && 1 / t4 == -1 / 0 ? e3.stylize("-0", "number") : e3.stylize("" + t4, "number");
      case "boolean":
        return e3.stylize("" + t4, "boolean");
      case "symbol":
        return e3.stylize(t4.toString(), "symbol");
      case "bigint":
        return e3.stylize(t4.toString() + "n", "bigint");
    }
    if (null === t4)
      return e3.stylize("null", "null");
  }
  __name(f2, "f");
  function p2(e3) {
    return "[" + Error.prototype.toString.call(e3) + "]";
  }
  __name(p2, "p");
  function l2(e3, t4, n4, o3, r3) {
    for (var i3 = [], s3 = 0, a3 = t4.length; s3 < a3; ++s3)
      Object.prototype.hasOwnProperty.call(t4, String(s3)) ? i3.push(d(e3, t4, n4, o3, String(s3), true)) : i3.push("");
    return r3.forEach(function(r4) {
      r4.match(/^\d+$/) || i3.push(d(e3, t4, n4, o3, r4, true));
    }), i3;
  }
  __name(l2, "l");
  function h3(e3) {
    for (var t4 = "[ ", n4 = 0; n4 < e3.length; ++n4) {
      if (t4.length >= s2.truncateThreshold - 7) {
        t4 += "...";
        break;
      }
      t4 += e3[n4] + ", ";
    }
    return -1 !== (t4 += " ]").indexOf(",  ]") && (t4 = t4.replace(",  ]", " ]")), t4;
  }
  __name(h3, "h");
  function d(e3, t4, n4, o3, r3, i3) {
    var s3, a3, c3 = Object.getOwnPropertyDescriptor(t4, r3);
    if (c3 && (c3.get ? a3 = c3.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : c3.set && (a3 = e3.stylize("[Setter]", "special"))), o3.indexOf(r3) < 0 && (s3 = "[" + r3 + "]"), a3 || (e3.seen.indexOf(t4[r3]) < 0 ? (a3 = u2(e3, t4[r3], null === n4 ? null : n4 - 1)).indexOf("\n") > -1 && (a3 = i3 ? a3.split("\n").map(function(e4) {
      return "  " + e4;
    }).join("\n").substr(2) : "\n" + a3.split("\n").map(function(e4) {
      return "   " + e4;
    }).join("\n")) : a3 = e3.stylize("[Circular]", "special")), void 0 === s3) {
      if (i3 && r3.match(/^\d+$/))
        return a3;
      (s3 = JSON.stringify("" + r3)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s3 = s3.substr(1, s3.length - 2), s3 = e3.stylize(s3, "name")) : (s3 = s3.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s3 = e3.stylize(s3, "string"));
    }
    return s3 + ": " + a3;
  }
  __name(d, "d");
  function y(e3, t4, n4) {
    return e3.reduce(function(e4, t5) {
      return e4 + t5.length + 1;
    }, 0) > 60 ? n4[0] + ("" === t4 ? "" : t4 + "\n ") + " " + e3.join(",\n  ") + " " + n4[1] : n4[0] + t4 + " " + e3.join(", ") + " " + n4[1];
  }
  __name(y, "y");
  function b(e3) {
    return "object" == typeof e3 && /\w+Array]$/.test(x(e3));
  }
  __name(b, "b");
  function g(e3) {
    return Array.isArray(e3) || "object" == typeof e3 && "[object Array]" === x(e3);
  }
  __name(g, "g");
  function w(e3) {
    return "object" == typeof e3 && "[object RegExp]" === x(e3);
  }
  __name(w, "w");
  function m(e3) {
    return "object" == typeof e3 && "[object Date]" === x(e3);
  }
  __name(m, "m");
  function v(e3) {
    return "object" == typeof e3 && "[object Error]" === x(e3);
  }
  __name(v, "v");
  function x(e3) {
    return Object.prototype.toString.call(e3);
  }
  __name(x, "x");
}, { "../config": 4, "./getEnumerableProperties": 17, "./getProperties": 22, "get-func-name": 37 }], 25: [function(e2, t3, n3) {
  function o2(e3) {
    return e3 != e3;
  }
  __name(o2, "o");
  t3.exports = Number.isNaN || o2;
}, {}], 26: [function(e2, t3, n3) {
  var o2 = e2("../config");
  t3.exports = function() {
    return o2.useProxy && "undefined" != typeof Proxy && "undefined" != typeof Reflect;
  };
}, { "../config": 4 }], 27: [function(e2, t3, n3) {
  var o2 = e2("./inspect"), r2 = e2("../config");
  t3.exports = function(e3) {
    var t4 = o2(e3), n4 = Object.prototype.toString.call(e3);
    if (r2.truncateThreshold && t4.length >= r2.truncateThreshold) {
      if ("[object Function]" === n4)
        return e3.name && "" !== e3.name ? "[Function: " + e3.name + "]" : "[Function]";
      if ("[object Array]" === n4)
        return "[ Array(" + e3.length + ") ]";
      if ("[object Object]" === n4) {
        var i2 = Object.keys(e3);
        return "{ Object (" + (i2.length > 2 ? i2.splice(0, 2).join(", ") + ", ..." : i2.join(", ")) + ") }";
      }
      return t4;
    }
    return t4;
  };
}, { "../config": 4, "./inspect": 24 }], 28: [function(e2, t3, n3) {
  var o2 = e2("../../chai"), r2 = e2("./transferFlags");
  t3.exports = function(e3, t4, n4, i2) {
    var s2 = e3.__methods[t4], a2 = s2.chainingBehavior;
    s2.chainingBehavior = function() {
      var e4 = i2(a2).call(this);
      if (void 0 !== e4)
        return e4;
      var t5 = new o2.Assertion();
      return r2(this, t5), t5;
    };
    var c2 = s2.method;
    s2.method = function() {
      var e4 = n4(c2).apply(this, arguments);
      if (void 0 !== e4)
        return e4;
      var t5 = new o2.Assertion();
      return r2(this, t5), t5;
    };
  };
}, { "../../chai": 2, "./transferFlags": 33 }], 29: [function(e2, t3, n3) {
  var o2 = e2("./addLengthGuard"), r2 = e2("../../chai"), i2 = e2("./flag"), s2 = e2("./proxify"), a2 = e2("./transferFlags");
  t3.exports = function(e3, t4, n4) {
    var c2 = e3[t4], u2 = /* @__PURE__ */ __name(function() {
      throw new Error(t4 + " is not a function");
    }, "u");
    c2 && "function" == typeof c2 && (u2 = c2);
    var f2 = /* @__PURE__ */ __name(function() {
      i2(this, "lockSsfi") || i2(this, "ssfi", f2);
      var e4 = i2(this, "lockSsfi");
      i2(this, "lockSsfi", true);
      var t5 = n4(u2).apply(this, arguments);
      if (i2(this, "lockSsfi", e4), void 0 !== t5)
        return t5;
      var o3 = new r2.Assertion();
      return a2(this, o3), o3;
    }, "f");
    o2(f2, t4, false), e3[t4] = s2(f2, t4);
  };
}, { "../../chai": 2, "./addLengthGuard": 10, "./flag": 15, "./proxify": 31, "./transferFlags": 33 }], 30: [function(e2, t3, n3) {
  var o2 = e2("../../chai"), r2 = e2("./flag"), i2 = e2("./isProxyEnabled"), s2 = e2("./transferFlags");
  t3.exports = function(e3, t4, n4) {
    var a2 = Object.getOwnPropertyDescriptor(e3, t4), c2 = /* @__PURE__ */ __name(function() {
    }, "c");
    a2 && "function" == typeof a2.get && (c2 = a2.get), Object.defineProperty(e3, t4, { get: /* @__PURE__ */ __name(function e4() {
      i2() || r2(this, "lockSsfi") || r2(this, "ssfi", e4);
      var t5 = r2(this, "lockSsfi");
      r2(this, "lockSsfi", true);
      var a3 = n4(c2).call(this);
      if (r2(this, "lockSsfi", t5), void 0 !== a3)
        return a3;
      var u2 = new o2.Assertion();
      return s2(this, u2), u2;
    }, "e"), configurable: true });
  };
}, { "../../chai": 2, "./flag": 15, "./isProxyEnabled": 26, "./transferFlags": 33 }], 31: [function(e2, t3, n3) {
  var o2 = e2("../config"), r2 = e2("./flag"), i2 = e2("./getProperties"), s2 = e2("./isProxyEnabled"), a2 = ["__flags", "__methods", "_obj", "assert"];
  function c2(e3, t4, n4) {
    if (Math.abs(e3.length - t4.length) >= n4)
      return n4;
    for (var o3 = [], r3 = 0; r3 <= e3.length; r3++)
      o3[r3] = Array(t4.length + 1).fill(0), o3[r3][0] = r3;
    for (var i3 = 0; i3 < t4.length; i3++)
      o3[0][i3] = i3;
    for (r3 = 1; r3 <= e3.length; r3++) {
      var s3 = e3.charCodeAt(r3 - 1);
      for (i3 = 1; i3 <= t4.length; i3++)
        Math.abs(r3 - i3) >= n4 ? o3[r3][i3] = n4 : o3[r3][i3] = Math.min(o3[r3 - 1][i3] + 1, o3[r3][i3 - 1] + 1, o3[r3 - 1][i3 - 1] + (s3 === t4.charCodeAt(i3 - 1) ? 0 : 1));
    }
    return o3[e3.length][t4.length];
  }
  __name(c2, "c");
  t3.exports = function(e3, t4) {
    return s2() ? new Proxy(e3, { get: /* @__PURE__ */ __name(function e4(n4, s3) {
      if ("string" == typeof s3 && -1 === o2.proxyExcludedKeys.indexOf(s3) && !Reflect.has(n4, s3)) {
        if (t4)
          throw Error("Invalid Chai property: " + t4 + "." + s3 + '. See docs for proper usage of "' + t4 + '".');
        var u2 = null, f2 = 4;
        throw i2(n4).forEach(function(e5) {
          if (!Object.prototype.hasOwnProperty(e5) && -1 === a2.indexOf(e5)) {
            var t5 = c2(s3, e5, f2);
            t5 < f2 && (u2 = e5, f2 = t5);
          }
        }), null !== u2 ? Error("Invalid Chai property: " + s3 + '. Did you mean "' + u2 + '"?') : Error("Invalid Chai property: " + s3);
      }
      return -1 !== a2.indexOf(s3) || r2(n4, "lockSsfi") || r2(n4, "ssfi", e4), Reflect.get(n4, s3);
    }, "e") }) : e3;
  };
}, { "../config": 4, "./flag": 15, "./getProperties": 22, "./isProxyEnabled": 26 }], 32: [function(e2, t3, n3) {
  var o2 = e2("./flag");
  t3.exports = function(e3, t4) {
    var n4 = o2(e3, "negate"), r2 = t4[0];
    return n4 ? !r2 : r2;
  };
}, { "./flag": 15 }], 33: [function(e2, t3, n3) {
  t3.exports = function(e3, t4, n4) {
    var o2 = e3.__flags || (e3.__flags = /* @__PURE__ */ Object.create(null));
    for (var r2 in t4.__flags || (t4.__flags = /* @__PURE__ */ Object.create(null)), n4 = 3 !== arguments.length || n4, o2)
      (n4 || "object" !== r2 && "ssfi" !== r2 && "lockSsfi" !== r2 && "message" != r2) && (t4.__flags[r2] = o2[r2]);
  };
}, {}], 34: [function(e2, t3, n3) {
  function o2() {
    var e3 = [].slice.call(arguments);
    function t4(t5, n4) {
      Object.keys(n4).forEach(function(o3) {
        ~e3.indexOf(o3) || (t5[o3] = n4[o3]);
      });
    }
    __name(t4, "t");
    return function() {
      for (var e4 = [].slice.call(arguments), n4 = 0, o3 = {}; n4 < e4.length; n4++)
        t4(o3, e4[n4]);
      return o3;
    };
  }
  __name(o2, "o");
  function r2(e3, t4, n4) {
    var i2 = o2("name", "message", "stack", "constructor", "toJSON")(t4 || {});
    for (var s2 in this.message = e3 || "Unspecified AssertionError", this.showDiff = false, i2)
      this[s2] = i2[s2];
    if (n4 = n4 || r2, Error.captureStackTrace)
      Error.captureStackTrace(this, n4);
    else
      try {
        throw new Error();
      } catch (e4) {
        this.stack = e4.stack;
      }
  }
  __name(r2, "r");
  t3.exports = r2, r2.prototype = Object.create(Error.prototype), /*!
   * Statically set name
   */
  r2.prototype.name = "AssertionError", /*!
   * Ensure correct constructor
   */
  r2.prototype.constructor = r2, r2.prototype.toJSON = function(e3) {
    var t4 = o2("constructor", "toJSON", "stack")({ name: this.name }, this);
    return false !== e3 && this.stack && (t4.stack = this.stack), t4;
  };
}, {}], 35: [function(e2, t3, n3) {
  function o2(e3, t4) {
    return t4 instanceof Error && e3 === t4;
  }
  __name(o2, "o");
  function r2(e3, t4) {
    return t4 instanceof Error ? e3.constructor === t4.constructor || e3 instanceof t4.constructor : (t4.prototype instanceof Error || t4 === Error) && (e3.constructor === t4 || e3 instanceof t4);
  }
  __name(r2, "r");
  function i2(e3, t4) {
    var n4 = "string" == typeof e3 ? e3 : e3.message;
    return t4 instanceof RegExp ? t4.test(n4) : "string" == typeof t4 && -1 !== n4.indexOf(t4);
  }
  __name(i2, "i");
  var s2 = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
  function a2(e3) {
    var t4 = "";
    if (void 0 === e3.name) {
      var n4 = String(e3).match(s2);
      n4 && (t4 = n4[1]);
    } else
      t4 = e3.name;
    return t4;
  }
  __name(a2, "a");
  function c2(e3) {
    var t4 = e3;
    return e3 instanceof Error ? t4 = a2(e3.constructor) : "function" == typeof e3 && (t4 = a2(e3).trim() || a2(new e3())), t4;
  }
  __name(c2, "c");
  function u2(e3) {
    var t4 = "";
    return e3 && e3.message ? t4 = e3.message : "string" == typeof e3 && (t4 = e3), t4;
  }
  __name(u2, "u");
  t3.exports = { compatibleInstance: o2, compatibleConstructor: r2, compatibleMessage: i2, getMessage: u2, getConstructorName: c2 };
}, {}], 36: [function(e2, t3, n3) {
  var o2 = e2("type-detect");
  function r2() {
    this._key = "chai/deep-eql__" + Math.random() + Date.now();
  }
  __name(r2, "r");
  r2.prototype = { get: function(e3) {
    return e3[this._key];
  }, set: function(e3, t4) {
    Object.isExtensible(e3) && Object.defineProperty(e3, this._key, { value: t4, configurable: true });
  } };
  var i2 = "function" == typeof WeakMap ? WeakMap : r2;
  function s2(e3, t4, n4) {
    if (!n4 || O(e3) || O(t4))
      return null;
    var o3 = n4.get(e3);
    if (o3) {
      var r3 = o3.get(t4);
      if ("boolean" == typeof r3)
        return r3;
    }
    return null;
  }
  __name(s2, "s");
  function a2(e3, t4, n4, o3) {
    if (n4 && !O(e3) && !O(t4)) {
      var r3 = n4.get(e3);
      r3 ? r3.set(t4, o3) : ((r3 = new i2()).set(t4, o3), n4.set(e3, r3));
    }
  }
  __name(a2, "a");
  function c2(e3, t4, n4) {
    if (n4 && n4.comparator)
      return f2(e3, t4, n4);
    var o3 = u2(e3, t4);
    return null !== o3 ? o3 : f2(e3, t4, n4);
  }
  __name(c2, "c");
  function u2(e3, t4) {
    return e3 === t4 ? 0 !== e3 || 1 / e3 == 1 / t4 : e3 != e3 && t4 != t4 || !O(e3) && !O(t4) && null;
  }
  __name(u2, "u");
  function f2(e3, t4, n4) {
    (n4 = n4 || {}).memoize = false !== n4.memoize && (n4.memoize || new i2());
    var r3 = n4 && n4.comparator, c3 = s2(e3, t4, n4.memoize);
    if (null !== c3)
      return c3;
    var f3 = s2(t4, e3, n4.memoize);
    if (null !== f3)
      return f3;
    if (r3) {
      var l3 = r3(e3, t4);
      if (false === l3 || true === l3)
        return a2(e3, t4, n4.memoize, l3), l3;
      var h4 = u2(e3, t4);
      if (null !== h4)
        return h4;
    }
    var d2 = o2(e3);
    if (d2 !== o2(t4))
      return a2(e3, t4, n4.memoize, false), false;
    a2(e3, t4, n4.memoize, true);
    var y2 = p2(e3, t4, d2, n4);
    return a2(e3, t4, n4.memoize, y2), y2;
  }
  __name(f2, "f");
  function p2(e3, t4, n4, o3) {
    switch (n4) {
      case "String":
      case "Number":
      case "Boolean":
      case "Date":
        return c2(e3.valueOf(), t4.valueOf());
      case "Promise":
      case "Symbol":
      case "function":
      case "WeakMap":
      case "WeakSet":
      case "Error":
        return e3 === t4;
      case "Arguments":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "Array":
        return d(e3, t4, o3);
      case "RegExp":
        return l2(e3, t4);
      case "Generator":
        return y(e3, t4, o3);
      case "DataView":
        return d(new Uint8Array(e3.buffer), new Uint8Array(t4.buffer), o3);
      case "ArrayBuffer":
        return d(new Uint8Array(e3), new Uint8Array(t4), o3);
      case "Set":
      case "Map":
        return h3(e3, t4, o3);
      default:
        return x(e3, t4, o3);
    }
  }
  __name(p2, "p");
  function l2(e3, t4) {
    return e3.toString() === t4.toString();
  }
  __name(l2, "l");
  function h3(e3, t4, n4) {
    if (e3.size !== t4.size)
      return false;
    if (0 === e3.size)
      return true;
    var o3 = [], r3 = [];
    return e3.forEach(function(e4, t5) {
      o3.push([e4, t5]);
    }), t4.forEach(function(e4, t5) {
      r3.push([e4, t5]);
    }), d(o3.sort(), r3.sort(), n4);
  }
  __name(h3, "h");
  function d(e3, t4, n4) {
    var o3 = e3.length;
    if (o3 !== t4.length)
      return false;
    if (0 === o3)
      return true;
    for (var r3 = -1; ++r3 < o3; )
      if (false === c2(e3[r3], t4[r3], n4))
        return false;
    return true;
  }
  __name(d, "d");
  function y(e3, t4, n4) {
    return d(w(e3), w(t4), n4);
  }
  __name(y, "y");
  function b(e3) {
    return "undefined" != typeof Symbol && "object" == typeof e3 && void 0 !== Symbol.iterator && "function" == typeof e3[Symbol.iterator];
  }
  __name(b, "b");
  function g(e3) {
    if (b(e3))
      try {
        return w(e3[Symbol.iterator]());
      } catch (e4) {
        return [];
      }
    return [];
  }
  __name(g, "g");
  function w(e3) {
    for (var t4 = e3.next(), n4 = [t4.value]; false === t4.done; )
      t4 = e3.next(), n4.push(t4.value);
    return n4;
  }
  __name(w, "w");
  function m(e3) {
    var t4 = [];
    for (var n4 in e3)
      t4.push(n4);
    return t4;
  }
  __name(m, "m");
  function v(e3, t4, n4, o3) {
    var r3 = n4.length;
    if (0 === r3)
      return true;
    for (var i3 = 0; i3 < r3; i3 += 1)
      if (false === c2(e3[n4[i3]], t4[n4[i3]], o3))
        return false;
    return true;
  }
  __name(v, "v");
  function x(e3, t4, n4) {
    var o3 = m(e3), r3 = m(t4);
    if (o3.length && o3.length === r3.length)
      return o3.sort(), r3.sort(), false !== d(o3, r3) && v(e3, t4, o3, n4);
    var i3 = g(e3), s3 = g(t4);
    return i3.length && i3.length === s3.length ? (i3.sort(), s3.sort(), d(i3, s3, n4)) : 0 === o3.length && 0 === i3.length && 0 === r3.length && 0 === s3.length;
  }
  __name(x, "x");
  function O(e3) {
    return null === e3 || "object" != typeof e3;
  }
  __name(O, "O");
  t3.exports = c2, t3.exports.MemoizeMap = i2;
}, { "type-detect": 39 }], 37: [function(e2, t3, n3) {
  var o2 = Function.prototype.toString, r2 = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
  function i2(e3) {
    if ("function" != typeof e3)
      return null;
    var t4 = "";
    if (void 0 === Function.prototype.name && void 0 === e3.name) {
      var n4 = o2.call(e3).match(r2);
      n4 && (t4 = n4[1]);
    } else
      t4 = e3.name;
    return t4;
  }
  __name(i2, "i");
  t3.exports = i2;
}, {}], 38: [function(e2, t3, n3) {
  function o2(e3, t4) {
    return null != e3 && t4 in Object(e3);
  }
  __name(o2, "o");
  function r2(e3) {
    return e3.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e4) {
      if ("constructor" === e4 || "__proto__" === e4 || "prototype" === e4)
        return {};
      var t4 = /^\[(\d+)\]$/.exec(e4);
      return t4 ? { i: parseFloat(t4[1]) } : { p: e4.replace(/\\([.[\]])/g, "$1") };
    });
  }
  __name(r2, "r");
  function i2(e3, t4, n4) {
    var o3 = e3, r3 = null;
    n4 = void 0 === n4 ? t4.length : n4;
    for (var i3 = 0; i3 < n4; i3++) {
      var s3 = t4[i3];
      o3 && (o3 = void 0 === s3.p ? o3[s3.i] : o3[s3.p], i3 === n4 - 1 && (r3 = o3));
    }
    return r3;
  }
  __name(i2, "i");
  function s2(e3, t4, n4) {
    for (var o3 = e3, r3 = n4.length, i3 = null, s3 = 0; s3 < r3; s3++) {
      var a3 = null, c3 = null;
      if (i3 = n4[s3], s3 === r3 - 1)
        o3[a3 = void 0 === i3.p ? i3.i : i3.p] = t4;
      else if (void 0 !== i3.p && o3[i3.p])
        o3 = o3[i3.p];
      else if (void 0 !== i3.i && o3[i3.i])
        o3 = o3[i3.i];
      else {
        var u3 = n4[s3 + 1];
        a3 = void 0 === i3.p ? i3.i : i3.p, c3 = void 0 === u3.p ? [] : {}, o3[a3] = c3, o3 = o3[a3];
      }
    }
  }
  __name(s2, "s");
  function a2(e3, t4) {
    var n4 = r2(t4), s3 = n4[n4.length - 1], a3 = { parent: n4.length > 1 ? i2(e3, n4, n4.length - 1) : e3, name: s3.p || s3.i, value: i2(e3, n4) };
    return a3.exists = o2(a3.parent, a3.name), a3;
  }
  __name(a2, "a");
  function c2(e3, t4) {
    return a2(e3, t4).value;
  }
  __name(c2, "c");
  function u2(e3, t4, n4) {
    return s2(e3, n4, r2(t4)), e3;
  }
  __name(u2, "u");
  t3.exports = { hasProperty: o2, getPathInfo: a2, getPathValue: c2, setPathValue: u2 };
}, {}], 39: [function(t3, n3, o2) {
  !function(e2, t4) {
    "object" == typeof o2 && void 0 !== n3 ? n3.exports = t4() : e2.typeDetect = t4();
  }(this, function() {
    var t4 = "function" == typeof Promise, n4 = "object" == typeof self ? self : e, o3 = "undefined" != typeof Symbol, r2 = "undefined" != typeof Map, i2 = "undefined" != typeof Set, s2 = "undefined" != typeof WeakMap, a2 = "undefined" != typeof WeakSet, c2 = "undefined" != typeof DataView, u2 = o3 && void 0 !== Symbol.iterator, f2 = o3 && void 0 !== Symbol.toStringTag, p2 = i2 && "function" == typeof Set.prototype.entries, l2 = r2 && "function" == typeof Map.prototype.entries, h3 = p2 && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), d = l2 && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), y = u2 && "function" == typeof Array.prototype[Symbol.iterator], b = y && Object.getPrototypeOf([][Symbol.iterator]()), g = u2 && "function" == typeof String.prototype[Symbol.iterator], w = g && Object.getPrototypeOf(""[Symbol.iterator]()), m = 8, v = -1;
    function x(e2) {
      var o4 = typeof e2;
      if ("object" !== o4)
        return o4;
      if (null === e2)
        return "null";
      if (e2 === n4)
        return "global";
      if (Array.isArray(e2) && (false === f2 || !(Symbol.toStringTag in e2)))
        return "Array";
      if ("object" == typeof window && null !== window) {
        if ("object" == typeof window.location && e2 === window.location)
          return "Location";
        if ("object" == typeof window.document && e2 === window.document)
          return "Document";
        if ("object" == typeof window.navigator) {
          if ("object" == typeof window.navigator.mimeTypes && e2 === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if ("object" == typeof window.navigator.plugins && e2 === window.navigator.plugins)
            return "PluginArray";
        }
        if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e2 instanceof window.HTMLElement) {
          if ("BLOCKQUOTE" === e2.tagName)
            return "HTMLQuoteElement";
          if ("TD" === e2.tagName)
            return "HTMLTableDataCellElement";
          if ("TH" === e2.tagName)
            return "HTMLTableHeaderCellElement";
        }
      }
      var u3 = f2 && e2[Symbol.toStringTag];
      if ("string" == typeof u3)
        return u3;
      var p3 = Object.getPrototypeOf(e2);
      return p3 === RegExp.prototype ? "RegExp" : p3 === Date.prototype ? "Date" : t4 && p3 === Promise.prototype ? "Promise" : i2 && p3 === Set.prototype ? "Set" : r2 && p3 === Map.prototype ? "Map" : a2 && p3 === WeakSet.prototype ? "WeakSet" : s2 && p3 === WeakMap.prototype ? "WeakMap" : c2 && p3 === DataView.prototype ? "DataView" : r2 && p3 === d ? "Map Iterator" : i2 && p3 === h3 ? "Set Iterator" : y && p3 === b ? "Array Iterator" : g && p3 === w ? "String Iterator" : null === p3 ? "Object" : Object.prototype.toString.call(e2).slice(m, v);
    }
    __name(x, "x");
    return x;
  });
}, {}] }, {}, [1])(1);
var r = o.version;
var i = o.AssertionError;
var s = o.use;
var a = o.util;
var c = o.config;
var u = o.Assertion;
var f = o.expect;
var p = o.should;
var l = o.Should;
var h = o.assert;

// node_modules/.pnpm/htm@3.1.1/node_modules/htm/dist/htm.module.js
var n2 = /* @__PURE__ */ __name(function(t3, s2, r2, e2) {
  var u2;
  s2[0] = 0;
  for (var h3 = 1; h3 < s2.length; h3++) {
    var p2 = s2[h3++], a2 = s2[h3] ? (s2[0] |= p2 ? 1 : 2, r2[s2[h3++]]) : s2[++h3];
    3 === p2 ? e2[0] = a2 : 4 === p2 ? e2[1] = Object.assign(e2[1] || {}, a2) : 5 === p2 ? (e2[1] = e2[1] || {})[s2[++h3]] = a2 : 6 === p2 ? e2[1][s2[++h3]] += a2 + "" : p2 ? (u2 = t3.apply(a2, n2(t3, a2, r2, ["", null])), e2.push(u2), a2[0] ? s2[0] |= 2 : (s2[h3 - 2] = 0, s2[h3] = u2)) : e2.push(a2);
  }
  return e2;
}, "n");
var t2 = /* @__PURE__ */ new Map();
function htm_module_default(s2) {
  var r2 = t2.get(this);
  return r2 || (r2 = /* @__PURE__ */ new Map(), t2.set(this, r2)), (r2 = n2(this, r2.get(s2) || (r2.set(s2, r2 = function(n3) {
    for (var t3, s3, r3 = 1, e2 = "", u2 = "", h3 = [0], p2 = function(n4) {
      1 === r3 && (n4 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n4, e2) : 3 === r3 && (n4 || e2) ? (h3.push(3, n4, e2), r3 = 2) : 2 === r3 && "..." === e2 && n4 ? h3.push(4, n4, 0) : 2 === r3 && e2 && !n4 ? h3.push(5, 0, true, e2) : r3 >= 5 && ((e2 || !n4 && 5 === r3) && (h3.push(r3, 0, e2, s3), r3 = 6), n4 && (h3.push(r3, n4, 0, s3), r3 = 6)), e2 = "";
    }, a2 = 0; a2 < n3.length; a2++) {
      a2 && (1 === r3 && p2(), p2(a2));
      for (var l2 = 0; l2 < n3[a2].length; l2++)
        t3 = n3[a2][l2], 1 === r3 ? "<" === t3 ? (p2(), h3 = [h3], r3 = 3) : e2 += t3 : 4 === r3 ? "--" === e2 && ">" === t3 ? (r3 = 1, e2 = "") : e2 = t3 + e2[0] : u2 ? t3 === u2 ? u2 = "" : e2 += t3 : '"' === t3 || "'" === t3 ? u2 = t3 : ">" === t3 ? (p2(), r3 = 1) : r3 && ("=" === t3 ? (r3 = 5, s3 = e2, e2 = "") : "/" === t3 && (r3 < 5 || ">" === n3[a2][l2 + 1]) ? (p2(), 3 === r3 && (h3 = h3[0]), r3 = h3, (h3 = h3[0]).push(2, 0, r3), r3 = 0) : " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3 ? (p2(), r3 = 2) : e2 += t3), 3 === r3 && "!--" === e2 && (r3 = 4, h3 = h3[0]);
    }
    return p2(), h3;
  }(s2)), r2), arguments, [])).length > 1 ? r2 : r2[0];
}
__name(htm_module_default, "default");

// node_modules/.pnpm/iares@1.1.8_htm@3.1.1/node_modules/iares/dist/template/index.js
var css = /* @__PURE__ */ __name((tags, ...values) => {
  return tags.map((tag, index) => {
    return `${tag}${values[index] || ""}`;
  }).join("");
}, "css");
function h2(type, props, ...children) {
  return { type, props, children };
}
__name(h2, "h");
var html = htm_module_default.bind(h2);

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
var _createSelector = /* @__PURE__ */ __name((text) => text.split(/(?=[A-Z])/).join("-").toLowerCase(), "_createSelector");
var _createId = /* @__PURE__ */ __name(() => {
  const randomStr = Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  return `${randomStr}`;
}, "_createId");
var _bindProps = /* @__PURE__ */ __name((element, props, isFactory = true, componentId, selector) => {
  if (!props)
    return;
  const attrs = Object.keys(props);
  const isCssClass = /* @__PURE__ */ __name((value) => /^class/.test(value), "isCssClass");
  const isEvent = /* @__PURE__ */ __name((value) => /^on/.test(value), "isEvent");
  const isAction = /* @__PURE__ */ __name((value) => typeof value === "function", "isAction");
  attrs.forEach((attr) => {
    if (isEvent(attr)) {
      const eventName = attr.toLowerCase().replace(/on/, "");
      const handler = props[attr];
      element.addEventListener(eventName, handler);
    }
    if (isEvent(attr) === isAction(props[attr]) && isFactory !== true && isEvent(attr) !== true) {
      element.setAttribute(attr, props[attr]);
    }
    if (isCssClass(attr)) {
      const styleElement = document.head.querySelector(`[id=${selector}]`);
      const componentUUID = styleElement == null ? void 0 : styleElement.getAttribute("component-id");
      const cssClassNames = _applyCssContext(props[attr], componentUUID);
      element.setAttribute(attr, cssClassNames);
    }
  });
}, "_bindProps");
var _createChildrenByObject = /* @__PURE__ */ __name((template2, context, componentId, selector) => {
  if (typeof template2 === "string") {
    return context.textContent += template2;
  }
  if (typeof (template2 == null ? void 0 : template2.type) === "function") {
    _createComponent(template2, context);
    return;
  }
  if (typeof (template2 == null ? void 0 : template2.type) === "string") {
    const element = document.createElement(template2.type);
    _bindProps(element, template2.props, false, componentId, selector);
    _createChildren(template2.children, element, componentId, selector);
    context.insertAdjacentElement("beforeend", element);
    return;
  }
  if (Array.isArray(template2)) {
    _createChildrenByArray(template2, context, componentId, selector);
    return;
  }
  if (typeof template2 === "object" && !Array.isArray(template2)) {
    const error = new Error();
    error.stack = `ComponentError:Component is not a named function and must be.
    ${JSON.stringify(template2)}
    `;
    throw error;
  }
}, "_createChildrenByObject");
var _createChildrenByArray = /* @__PURE__ */ __name((template2, context, componentId, selector) => {
  template2.forEach((templateItem) => {
    _createChildrenByObject(templateItem, context, componentId, selector);
  });
}, "_createChildrenByArray");
var _createChildren = /* @__PURE__ */ __name((template2, context, componentId, selector) => !Array.isArray(template2) ? _createChildrenByObject(template2, context, componentId, selector) : _createChildrenByArray(template2, context, componentId, selector), "_createChildren");
var _hasStyles = /* @__PURE__ */ __name((selector) => document.querySelector(`style#${selector}`), "_hasStyles");
var _applyCssContext = /* @__PURE__ */ __name((cssText, id) => {
  if (!id)
    return cssText;
  const context = /ctx/g;
  return cssText.replace(context, id);
}, "_applyCssContext");
var _bindCssStyles = /* @__PURE__ */ __name((styles2, selector, componentId) => {
  if (_hasStyles(selector))
    return;
  const css2 = _applyCssContext(styles2, componentId);
  const stylesElement = document.createElement("style");
  stylesElement.setAttribute("id", selector);
  stylesElement.setAttribute("component-id", componentId);
  stylesElement.insertAdjacentHTML("beforeend", css2);
  document.head.insertAdjacentElement("beforeend", stylesElement);
}, "_bindCssStyles");
var _createEventDrive = /* @__PURE__ */ __name((element) => {
  const execute = /* @__PURE__ */ __name((handler) => {
    handler(element);
  }, "execute");
  return { execute };
}, "_createEventDrive");
var _createComponent = /* @__PURE__ */ __name((template2, context) => {
  var _a, _b;
  if (typeof template2.type !== "function")
    throw new Error("Component is not a named function and must be.");
  const { type: componentFactory, props } = template2;
  const component = componentFactory({ props });
  const selector = _createSelector(componentFactory.name);
  const hostElement = document.createElement(selector);
  const state = ((_a = component == null ? void 0 : component.store) == null ? void 0 : _a.state) || {};
  const actions = (component == null ? void 0 : component.actions) || {};
  const hooks = component == null ? void 0 : component.hooks;
  const componentId = _createId();
  const isFunction = true;
  const _eventDrive = _createEventDrive(hostElement);
  (_b = component == null ? void 0 : component.store) == null ? void 0 : _b.watchState((data) => _updateView(data));
  _eventDrive.execute((element) => {
    var _a2;
    (_a2 = hooks == null ? void 0 : hooks.beforeMount) == null ? void 0 : _a2.call(hooks, element);
  });
  const _updateView = /* @__PURE__ */ __name((payload) => {
    var _a2;
    _eventDrive.execute((element) => {
      var _a3;
      (_a3 = hooks == null ? void 0 : hooks.beforeRender) == null ? void 0 : _a3.call(hooks, element);
    });
    hostElement.innerHTML = "";
    (component == null ? void 0 : component.styles) && _bindCssStyles(component == null ? void 0 : component.styles(), selector, componentId);
    _bindProps(hostElement, template2.props, isFunction, componentId, selector);
    _createChildren(template2.children, hostElement, componentId, selector);
    context.insertAdjacentElement("beforeend", hostElement);
    const child = template2.type({ props: template2.props });
    if (child == null ? void 0 : child.template) {
      const childHTM = (_a2 = child.template) == null ? void 0 : _a2.call(child, { props: props || {}, state, actions });
      _createChildrenByObject(childHTM, hostElement, componentId, selector);
    }
    if (!(child == null ? void 0 : child.template) && typeof (template2 == null ? void 0 : template2.type) === "function") {
      const childHTM = template2 == null ? void 0 : template2.type({ props: props || {}, state, actions });
      _bindProps(hostElement, template2.props, isFunction, componentId, selector);
      if (!childHTM) {
        hostElement.remove();
        return;
      }
      _createChildrenByObject(childHTM, hostElement, componentId, selector);
    }
    const slotsOrigin = Array.from(context.querySelectorAll("slot[target]"));
    const slotsDestiny = Array.from(context.querySelectorAll("slot[id]"));
    const scope = {
      uuid: null,
      componentId: null
    };
    slotsOrigin.forEach((slotOrigin) => {
      var _a3, _b2;
      const targetId = slotOrigin.getAttribute("target") || "";
      const targetContext = slotOrigin.getAttribute("ctx");
      const contextStyleElement = (_a3 = document.head) == null ? void 0 : _a3.querySelector(`#${targetContext}`);
      const componentContextElement = (_b2 = document.head) == null ? void 0 : _b2.querySelector(`#${selector}`);
      const slotTargetSelector = `slot[id=${targetId}]`;
      const targetSlot = context.querySelector(slotTargetSelector);
      const slotFragment = document.createDocumentFragment();
      scope.uuid = (contextStyleElement == null ? void 0 : contextStyleElement.getAttribute("component-id")) || null;
      scope.componentId = (componentContextElement == null ? void 0 : componentContextElement.getAttribute("component-id")) || null;
      Array.from(slotOrigin.children).forEach((childElement) => {
        targetContext && childElement.setAttribute("sloted", targetContext);
        slotFragment.append(childElement);
        if (slotOrigin.textContent !== "" && slotFragment.textContent !== slotOrigin.textContent) {
          const tempalteError = new Error();
          tempalteError.stack = `TemplateError: Invalid slot element. A content is not a valid html element and must be.
 ${slotOrigin.textContent}`;
          throw tempalteError;
        }
      });
      targetSlot == null ? void 0 : targetSlot.after(slotFragment);
    });
    slotsOrigin.forEach((slot) => slot.remove());
    slotsDestiny.forEach((slot) => slot.remove());
    _eventDrive.execute((element) => {
      var _a3;
      (_a3 = hooks == null ? void 0 : hooks.afterRender) == null ? void 0 : _a3.call(hooks, element);
      const slotedElements = Array.from(hostElement.querySelectorAll("[sloted]"));
      const _bindCssContext = /* @__PURE__ */ __name((element2) => {
        if (!scope.uuid)
          return;
        if (!scope.componentId)
          return;
        const regex = new RegExp(scope.componentId);
        const cssClassNames = element2.classList.toString();
        element2.className = cssClassNames.replace(regex, scope.uuid);
        const children = Array.from(element2.querySelectorAll(`[class$="${scope.componentId}"]`));
        children.forEach((element3) => _bindCssContext(element3));
      }, "_bindCssContext");
      slotedElements.forEach((element2) => _bindCssContext(element2));
    });
    eventDrive.on("ON-DESTROY", (payload2) => {
      _eventDrive.execute((element) => {
        var _a3;
        (_a3 = hooks == null ? void 0 : hooks.destroy) == null ? void 0 : _a3.call(hooks, element);
      });
    });
  }, "_updateView");
  _updateView();
  _eventDrive.execute((element) => {
    var _a2;
    (_a2 = hooks == null ? void 0 : hooks.afterMount) == null ? void 0 : _a2.call(hooks, element);
  });
}, "_createComponent");
var render = /* @__PURE__ */ __name((template2, context = document.body) => {
  var _a, _b, _c;
  !Array.isArray(template2) ? _createComponent(template2, context) : template2.forEach((templateItem) => _createComponent(templateItem, context));
  if (!Array.isArray(template2)) {
    const selector = _createSelector((_a = template2 == null ? void 0 : template2.type) == null ? void 0 : _a.name);
    return (_c = (_b = document == null ? void 0 : document.querySelector) == null ? void 0 : _b.call(document, selector)) == null ? void 0 : _c.outerHTML;
  }
  return template2.map(({ type }) => {
    var _a2;
    return (_a2 = document == null ? void 0 : document.querySelector) == null ? void 0 : _a2.call(document, type.name).outerHTML;
  }).join("");
}, "render");

// src/components/FamTitle/index.ts
var template = /* @__PURE__ */ __name(() => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`, "template");
var FamTitle = /* @__PURE__ */ __name(() => {
  return {
    template,
    styles
  };
}, "FamTitle");
var styles = /* @__PURE__ */ __name(() => css`
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

// src/components/FamTitle/FamTitle.spec.ts
describe("AppTitle", () => {
  let cleanup;
  let component = FamTitle();
  before(() => {
    cleanup = globalJsdom();
    component = FamTitle();
  });
  after(() => {
    cleanup();
  });
  it("Should have template and style defined", () => {
    f(component).to.have.all.keys(["template", "styles"]);
  });
  it("Should correctly render title text", () => {
    var _a, _b;
    const title = "Title";
    let componentElement = null;
    render(
      html`
    <${FamTitle}>
      <slot target="content">
        <h1>${title}</h1>
      </slot>
    </>
    `,
      document == null ? void 0 : document.body
    );
    componentElement = (_a = document == null ? void 0 : document.body) == null ? void 0 : _a.querySelector("fam-title");
    f((_b = componentElement == null ? void 0 : componentElement.textContent) == null ? void 0 : _b.trim()).to.be.eql(title);
  });
});
/*! Bundled license information:

@esm-bundle/chai/esm/chai.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai version
   *)
  (*!
   * Utils for plugins (not exported)
   *)
  (*!
   * Configuration
   *)
  (*!
   * Primary `Assertion` prototype
   *)
  (*!
   * Core Assertions
   *)
  (*!
   * Expect interface
   *)
  (*!
   * Should interface
   *)
  (*!
   * Assert interface
   *)
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
     * Module dependencies.
     *)
  (*!
     * Module export.
     *)
  (*!
     * Assertion Constructor
     *
     * Creates object for chaining.
     *
     * `Assertion` objects contain metadata in the form of flags. Three flags can
     * be assigned during instantiation by passing arguments to this constructor:
     *
     * - `object`: This flag contains the target of the assertion. For example, in
     *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
     *   contain `numKittens` so that the `equal` assertion can reference it when
     *   needed.
     *
     * - `message`: This flag contains an optional custom error message to be
     *   prepended to the error message that's generated by the assertion when it
     *   fails.
     *
     * - `ssfi`: This flag stands for "start stack function indicator". It
     *   contains a function reference that serves as the starting point for
     *   removing frames from the stack trace of the error that's created by the
     *   assertion when it fails. The goal is to provide a cleaner stack trace to
     *   end users by removing Chai's internal functions. Note that it only works
     *   in environments that support `Error.captureStackTrace`, and only when
     *   `Chai.config.includeStack` hasn't been set to `false`.
     *
     * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
     *   should retain its current value, even as assertions are chained off of
     *   this object. This is usually set to `true` when creating a new assertion
     *   from within another assertion. It's also temporarily set to `true` before
     *   an overwritten assertion gets called by the overwriting assertion.
     *
     * @param {Mixed} obj target of the assertion
     * @param {String} msg (optional) custom error message
     * @param {Function} ssfi (optional) starting point for removing stack frames
     * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
     * @api private
     *)
  (*!
     * Chai dependencies.
     *)
  (*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)
  (*!
   * Chai - addLengthGuard utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - compareByInspect utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getEnumerableProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getOwnEnumerableProperties utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getOwnEnumerablePropertySymbols utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Dependencies that are used for multiple exports are required here only once
   *)
  (*!
   * test utility
   *)
  (*!
   * Chai - isNaN utility
   * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
   * MIT Licensed
   *)
  (*!
   * Chai - isProxyEnabled helper
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * assertion-error
   * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
   * MIT Licensed
   *)
  (*!
   * Return a function that will copy properties from
   * one object to another excluding any originally
   * listed. Returned function will create a new `{}`.
   *
   * @param {String} excluded properties ...
   * @return {Function}
   *)
  (*!
   * Primary Exports
   *)
  (*!
   * Inherit from Error.prototype
   *)
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
//# sourceMappingURL=FamTitle.spec.js.map
