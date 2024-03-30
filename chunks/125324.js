function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackdropStyles: function() {
            return o
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("718017"),
        l = n("784184"),
        c = n("575748"),
        f = n("550545");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {})).SUBTLE = "SUBTLE", r.DARK = "DARK", r.BLUR = "BLUR";
    var _ = i.forwardRef(function(e, t) {
        var n, r, o, a = e.backdropStyle,
            _ = void 0 === a ? "SUBTLE" : a,
            E = e.backdropInstant,
            p = void 0 !== E && E,
            m = e.zIndexBoost,
            y = e.LayerComponent,
            I = e.isVisible,
            h = e.onClose;
        var O = (r = (0, l.useToken)(l.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
                opacity: .25
            }), o = (0, l.useToken)(l.tokens.colors.BG_BACKDROP).spring(), d(n = {}, "SUBTLE", r), d(n, "DARK", o), d(n, "BLUR", o), n)[_],
            T = (0, l.useToken)(l.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
                opacity: 0
            }),
            S = {
                background: T,
                backdropFilter: "blur(0px)"
            },
            v = (0, c.default)(p),
            g = (0, s.useTransition)(I, {
                keys: function(e) {
                    return e ? "backdrop" : "empty"
                },
                config: {
                    duration: p || v ? 0 : 300
                },
                from: S,
                enter: {
                    background: O,
                    backdropFilter: "blur(".concat("BLUR" === _ ? 8 : 0, "px)")
                },
                leave: S
            });
        if (null == y) {
            var A = {
                zIndex: 1e3 + (void 0 === m ? 0 : m)
            };
            return g(function(e, t) {
                return t ? i.createElement(s.animated.div, {
                    className: f.backdrop,
                    style: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                d(e, t, n[t])
                            })
                        }
                        return e
                    }({}, e, A),
                    onClick: h
                }) : null
            })
        }
        return i.createElement(y, null, g(function(e, t) {
            return t ? i.createElement(s.animated.div, {
                className: u()(f.backdrop, f.withLayer),
                style: e,
                onClick: h
            }) : null
        }))
    });
    t.default = _
}