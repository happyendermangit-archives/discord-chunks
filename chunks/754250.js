function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMOJI_BUTTON_SPRING_CONFIG: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("784184"),
        s = n("645077"),
        l = n("573525"),
        c = n("68735"),
        f = n("941504"),
        d = n("921242");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
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
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = {
        tension: 800,
        friction: 24
    };
    t.default = function(e) {
        var t, n = e.tabIndex,
            o = e.className,
            _ = e.renderButtonContents,
            m = e.active,
            y = e.onClick,
            I = e["aria-controls"],
            h = e.focusProps,
            O = E(r.useState(!1), 2),
            T = O[0],
            S = O[1],
            v = E(r.useState(50), 2),
            g = v[0],
            A = v[1],
            b = T || m,
            N = (0, l.getClass)(d, "emojiButton", b ? "Hovered" : "Normal");
        var R = (t = g, {
                "--custom-emoji-sprite-size": "".concat(24, "px"),
                "--custom-emoji-sprite-row": Math.floor(t / 20),
                "--custom-emoji-sprite-col": t % 20
            }),
            C = r.useCallback(function() {
                !b && (S(!0), A(Math.floor(77 * Math.random())), (0, s.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonMouseEntered))
            }, [b, S, A]),
            P = r.useCallback(function() {
                S(!1)
            }, [S]),
            D = r.useCallback(function() {
                return (0, s.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonFocused)
            }, []);
        return r.createElement(u.Button, {
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            tabIndex: n,
            className: i()(N, o),
            onMouseEnter: C,
            onMouseOver: C,
            onMouseLeave: P,
            onFocus: D,
            onClick: y,
            "aria-label": f.default.Messages.SELECT_EMOJI,
            "aria-controls": I,
            "aria-expanded": m,
            "aria-haspopup": "dialog",
            focusProps: h
        }, null != _ ? _() : r.createElement(a.Spring, {
            config: p,
            to: {
                value: b ? 1 : 0
            }
        }, function(e) {
            var t, n, o = e.value;
            return r.createElement(a.animated.div, {
                className: d.spriteContainer,
                style: (t = function(e) {
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
                }({}, R), n = (n = {
                    transform: o.to([0, 1], [1, 1.14]).to(function(e) {
                        return "scale(".concat(e, ")")
                    })
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t)
            }, r.createElement("div", {
                className: i()(d.sprite, d.spriteColored, b ? d.active : d.inactive)
            }), r.createElement("div", {
                className: i()(d.sprite, d.spriteGreyscale, b ? d.inactive : d.active)
            }))
        }))
    }
}