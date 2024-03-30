function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function o(e) {
        var t = {},
            n = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                var s = a.value;
                for (var l in s) l in t ? t[l] = r({}, t[l], s[l]) : t[l] = r({}, s[l])
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !n && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
        return t
    }
}