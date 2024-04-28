function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e) {
        var t = e.current;
        return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t
    }
    n.r(t), n.d(t, {
        checkDecoratorArguments: function() {
            return o
        },
        getDecoratedComponent: function() {
            return i
        },
        isFunction: function() {
            return s
        },
        isPlainObject: function() {
            return c
        },
        isRefable: function() {
            return a
        },
        isValidType: function() {
            return function e(t, n) {
                return "string" == typeof t || "symbol" === r(t) || !!n && Array.isArray(t) && t.every(function(t) {
                    return e(t, !1)
                })
            }
        },
        noop: function() {
            return u
        }
    });

    function a(e) {
        var t, n, r;
        return (t = e) && t.prototype && "function" == typeof t.prototype.render || (null == (n = e) ? void 0 : null === (r = n.$$typeof) || void 0 === r ? void 0 : r.toString()) === "Symbol(react.forward_ref)"
    }

    function o(e, t) {}

    function s(e) {
        return "function" == typeof e
    }

    function u() {}

    function c(e) {
        if (!("object" === r(t = e) && null !== t)) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t, n = e; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
        return Object.getPrototypeOf(e) === n
    }
}