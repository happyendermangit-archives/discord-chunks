function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        ConfettiLocation: function() {
            return f
        },
        SHAKE_STEPS: function() {
            return I
        },
        SHAKE_STEP_DIVIDER: function() {
            return h
        },
        ShakeLevel: function() {
            return _
        },
        ShakeLocation: function() {
            return d
        }
    });

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }

    function a(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function u(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(s = f || (f = {}))[s.CHAT_INPUT = 0] = "CHAT_INPUT", s[s.REACTION = 1] = "REACTION", s[s.MEMBER_USER = 2] = "MEMBER_USER", s[s.CALL_TILE = 3] = "CALL_TILE", (l = d || (d = {}))[l.CHAT_INPUT = 0] = "CHAT_INPUT", l[l.VOICE_USER = 1] = "VOICE_USER", l[l.MENTION = 2] = "MENTION", (c = _ || (_ = {}))[c.LEVEL_1 = 0] = "LEVEL_1", c[c.LEVEL_2 = 1] = "LEVEL_2", c[c.LEVEL_3 = 2] = "LEVEL_3", c[c.LEVEL_4 = 3] = "LEVEL_4", c[c.LEVEL_5 = 4] = "LEVEL_5";
    var s, l, c, f, d, _, E, p, m, y = (o(E = {}, 0, [
            [1, 1e-4],
            [25, .05],
            [50, .1],
            [100, .5],
            [250, 1],
            [500, 2],
            [1e3, 3],
            [9001, 4]
        ]), o(E, 1, [
            [1, 1e-4],
            [25, .25],
            [50, .5],
            [100, 1],
            [250, 2.5],
            [500, 5],
            [1e3, 7.5],
            [9001, 10]
        ]), o(E, 2, [
            [1, .001],
            [25, .5],
            [50, 1],
            [100, 2],
            [250, 4],
            [500, 8],
            [1e3, 12],
            [9001, 16]
        ]), o(E, 3, [
            [1, .25],
            [25, .75],
            [50, 1],
            [100, 2],
            [250, 4],
            [500, 8],
            [1e3, 20],
            [9001, 50]
        ]), o(E, 4, [
            [1, .001],
            [25, .5],
            [50, 1],
            [100, 2],
            [250, 5],
            [500, 10],
            [1e3, 100],
            [9001, 1e4]
        ]), E),
        I = Object.keys(y).reduce(function(e, t) {
            return a(i({}, e), o({}, t, y[t].map(function(e) {
                return u(e, 1)[0]
            })))
        }, (o(p = {}, 0, []), o(p, 1, []), o(p, 2, []), o(p, 3, []), o(p, 4, []), p)),
        h = Object.keys(y).reduce(function(e, t) {
            return a(i({}, e), o({}, t, y[t].map(function(e) {
                var t = u(e, 2);
                return t[0], t[1]
            })))
        }, (o(m = {}, 0, []), o(m, 1, []), o(m, 2, []), o(m, 3, []), o(m, 4, []), m))
}