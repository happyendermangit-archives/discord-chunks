function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        noop: function() {
            return i
        },
        defineHidden: function() {
            return o
        },
        is: function() {
            return a
        },
        isEqual: function() {
            return u
        },
        isAnimatedString: function() {
            return s
        },
        each: function() {
            return c
        },
        toArray: function() {
            return l
        },
        flush: function() {
            return f
        }
    });
    var r = n("397968"),
        i = function() {},
        o = function(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0
            })
        },
        a = {
            arr: Array.isArray,
            obj: function(t) {
                return !!t && "Object" === t.constructor.name
            },
            fun: function(t) {
                return "function" == typeof t
            },
            str: function(t) {
                return "string" == typeof t
            },
            num: function(t) {
                return "number" == typeof t
            },
            und: function(t) {
                return void 0 === t
            }
        };

    function u(t, e) {
        if (a.arr(t)) {
            if (!a.arr(e) || t.length !== e.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (t[n] !== e[n]) return !1;
            return !0
        }
        return t === e
    }
    var s = function(t) {
            return a.str(t) && ("#" == t[0] || /\d/.test(t) || !!(r.colorNames && r.colorNames[t]))
        },
        c = function(t, e, n) {
            a.fun(t.forEach) ? t.forEach(e, n) : Object.keys(t).forEach(function(r) {
                return e.call(n, t[r], r)
            })
        },
        l = function(t) {
            return a.und(t) ? [] : a.arr(t) ? t : [t]
        };

    function f(t, e) {
        if (t.size) {
            var n = Array.from(t);
            t.clear(), c(n, e)
        }
    }
}