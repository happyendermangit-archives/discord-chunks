function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CommonConfettiCannonContextProvider: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("911765"),
        i = n("18486"),
        a = n("332243"),
        u = n("399303");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
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
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e) {
        var t = e.children,
            n = l(r.useState(null), 2),
            s = n[0],
            c = n[1],
            f = l(r.useState(null), 2),
            d = f[0],
            _ = f[1],
            E = r.useRef(new Set),
            p = l(r.useState(!1), 2),
            m = p[0],
            y = p[1],
            I = r.useCallback(function(e) {
                E.current.delete(e), y(E.current.size > 0)
            }, []),
            h = r.useCallback(function(e) {
                return E.current.add(e), y(!0),
                    function() {
                        return I(e)
                    }
            }, [I]),
            O = r.useCallback(function(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = E.current[Symbol.iterator](); !(n = (i = a.next()).done); n = !0)(0, i.value)(e, t)
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
            }, []);
        return r.createElement(r.Fragment, null, r.createElement(i.ConfettiCannonContextProvider, {
            confettiCanvas: d,
            spriteCanvas: s,
            baseConfig: a.COMMON_CONFETTI_BASE_CONFIG,
            addClickListener: h,
            removeClickListener: I
        }, t), r.createElement(o.ConfettiCanvas, {
            ref: _,
            className: u.canvas,
            environment: a.COMMON_CONFETTI_ENVIRONMENT,
            onClick: m ? O : void 0
        }), r.createElement(o.SpriteCanvas, {
            ref: c,
            colors: a.COMMON_CONFETTI_COLORS,
            sprites: a.COMMON_CONFETTI_SPRITES,
            spriteWidth: a.COMMON_CONFETTI_MAX_SPRITE_SIZE,
            spriteHeight: a.COMMON_CONFETTI_MAX_SPRITE_SIZE
        }))
    }
}