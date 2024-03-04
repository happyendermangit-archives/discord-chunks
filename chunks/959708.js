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
        getDecoratedComponent: function() {
            return i
        },
        isRefable: function() {
            return o
        },
        checkDecoratorArguments: function() {
            return s
        },
        isFunction: function() {
            return a
        },
        noop: function() {
            return c
        },
        isPlainObject: function() {
            return u
        },
        isValidType: function() {
            return function e(t, n) {
                return "string" == typeof t || "symbol" === r(t) || !!n && Array.isArray(t) && t.every(function(t) {
                    return e(t, !1)
                })
            }
        }
    }), n("222007");

    function o(e) {
        var t, n, r;
        return (t = e) && t.prototype && "function" == typeof t.prototype.render || (null == (n = e) ? void 0 : null === (r = n.$$typeof) || void 0 === r ? void 0 : r.toString()) === "Symbol(react.forward_ref)"
    }

    function s(e, t) {}

    function a(e) {
        return "function" == typeof e
    }

    function c() {}

    function u(e) {
        if (!("object" === r(t = e) && null !== t)) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t, n = e; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
        return Object.getPrototypeOf(e) === n
    }
}