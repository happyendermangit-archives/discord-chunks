function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        areArraysShallowlyEqual: function() {
            return o
        },
        cachedFunction: function() {
            return i
        },
        clearObject: function() {
            return u
        },
        promiseThrottle: function() {
            return a
        }
    });

    function o(e, t) {
        if (e === t) return !0;
        if (null == e || null == t || e.length !== t.length) return !1;
        for (var n = e.length, r = 0; r < n; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }

    function i(e) {
        var t = null,
            n = null;
        return function() {
            for (var i, a = arguments.length, u = Array(a), s = 0; s < a; s++) u[s] = arguments[s];
            if (!o(t, u)) {
                ;
                n = e.apply(void 0, function(e) {
                    if (Array.isArray(e)) return r(e)
                }(i = u) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(i) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                    }
                }(i) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            }
            return t = u, n
        }
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
            n = -1,
            r = null;
        return function() {
            return (null == r || Date.now() >= n) && (n = Date.now() + t, r = e()), r
        }
    }

    function u(e) {
        for (var t in e) e.hasOwnProperty(t) && delete e[t]
    }
}