function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        isDOMError: function() {
            return s
        },
        isDOMException: function() {
            return u
        },
        isElement: function() {
            return p
        },
        isError: function() {
            return i
        },
        isErrorEvent: function() {
            return o
        },
        isEvent: function() {
            return f
        },
        isInstanceOf: function() {
            return y
        },
        isNaN: function() {
            return m
        },
        isPlainObject: function() {
            return d
        },
        isPrimitive: function() {
            return l
        },
        isRegExp: function() {
            return h
        },
        isString: function() {
            return c
        },
        isSyntheticEvent: function() {
            return g
        },
        isThenable: function() {
            return _
        }
    });
    let r = Object.prototype.toString;

    function i(t) {
        switch (r.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return y(t, Error)
        }
    }

    function a(t, e) {
        return r.call(t) === `[object ${e}]`
    }

    function o(t) {
        return a(t, "ErrorEvent")
    }

    function s(t) {
        return a(t, "DOMError")
    }

    function u(t) {
        return a(t, "DOMException")
    }

    function c(t) {
        return a(t, "String")
    }

    function l(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }

    function d(t) {
        return a(t, "Object")
    }

    function f(t) {
        return "undefined" != typeof Event && y(t, Event)
    }

    function p(t) {
        return "undefined" != typeof Element && y(t, Element)
    }

    function h(t) {
        return a(t, "RegExp")
    }

    function _(t) {
        return !!(t && t.then && "function" == typeof t.then)
    }

    function g(t) {
        return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function m(t) {
        return "number" == typeof t && t != t
    }

    function y(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
}