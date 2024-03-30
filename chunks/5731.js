function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("718017"),
        l = n("762624"),
        c = n("946188"),
        f = n("337905"),
        d = n("784184"),
        _ = n("362048"),
        E = n("9010"),
        p = n("464092"),
        m = n("27375"),
        y = n("719328"),
        I = n("739226"),
        h = n("778513"),
        O = n("281767"),
        T = n("941504"),
        S = n("64421");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
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

    function N(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
        }
    }
    var R = (0, y.uid)(),
        C = c.default.convert.fromCodePoint("1f44f"),
        P = (0, h.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        D = (0, h.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
        L = function(e) {
            var t = e.fade,
                n = e.surrogate,
                o = e.onClick,
                i = e.delay,
                a = e.index,
                u = (0, l.useListItem)("item-".concat(a)),
                f = I.default.getURL(C + n),
                _ = (0, s.useSpring)({
                    opacity: 1,
                    from: {
                        opacity: t ? 0 : 1
                    },
                    delay: i
                });
            return r.createElement(d.Clickable, b(A({}, u), {
                role: "option",
                "aria-selected": 0 === a,
                onClick: function() {
                    return o(n)
                },
                className: S.diversityEmojiItem
            }), r.createElement(s.animated.div, {
                "aria-label": function(e) {
                    switch (c.default.convert.toCodePoint(e)) {
                        case "1f3fb":
                            return T.default.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
                        case "1f3fc":
                            return T.default.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
                        case "1f3fd":
                            return T.default.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
                        case "1f3fe":
                            return T.default.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
                        case "1f3ff":
                            return T.default.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
                        default:
                            return T.default.Messages.EMOJI_MODIFIER_NONE
                    }
                }(n),
                className: S.diversityEmojiItemImage,
                style: A({
                    backgroundImage: 'url("'.concat(f, '")')
                }, _)
            }))
        },
        M = function(e) {
            var t, n = e.id,
                o = e.selectedSurrogate,
                a = e.onClick,
                c = e.hasTabWrapper,
                f = (0, p.default)("diversity"),
                d = (0, s.useSpring)({
                    height: (D + 2 * P) * (m.DIVERSITY_SURROGATES.length + 1),
                    from: {
                        height: D
                    },
                    config: {
                        duration: 125
                    }
                });
            r.useEffect(function() {
                f.focusFirstVisibleItem()
            }, [f]);
            var _ = [""].concat(function(e) {
                if (Array.isArray(e)) return v(e)
            }(t = m.DIVERSITY_SURROGATES) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || N(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }());
            return u().remove(_, function(e) {
                return e === o
            }), _.unshift(o), r.createElement(l.ListNavigatorProvider, {
                navigator: f
            }, r.createElement(l.ListNavigatorContainer, null, function(e) {
                var t = e.ref,
                    o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(e, ["ref"]);
                return r.createElement(s.animated.div, b(A({}, o), {
                    id: n,
                    ref: t,
                    className: i()(S.diversitySelectorOptions, g({}, S.diversitySelectorOptionsHasTabWrapper, c)),
                    style: d,
                    role: "listbox"
                }), _.map(function(e, t) {
                    return r.createElement(L, {
                        index: t,
                        fade: 0 !== t,
                        delay: 20 * t,
                        key: t,
                        surrogate: e,
                        onClick: a
                    })
                }))
            }))
        };
    t.default = function(e) {
        var t, n, o = e.searchBarRef,
            i = e.selectedSurrogate,
            a = e.className,
            u = e.hasTabWrapper,
            s = I.default.getURL(C + i);
        var l = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || N(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = l[0],
            f = l[1],
            p = (0, E.default)(null, function() {
                return f(!1)
            }),
            m = r.useRef(null);
        return r.createElement("div", {
            ref: p,
            className: a
        }, r.createElement(d.Clickable, {
            innerRef: m,
            className: S.diversitySelectorButton,
            onClick: function() {
                f(!0)
            },
            "aria-label": T.default.Messages.EMOJI_MODIFIER_MENU_BUTTON,
            "aria-haspopup": !0,
            "aria-expanded": c,
            "aria-controls": R,
            tabIndex: c ? -1 : 0
        }, r.createElement("div", {
            className: S.diversityEmojiItemImage,
            style: {
                backgroundImage: 'url("'.concat(s, '")')
            }
        })), c ? r.createElement("div", {
            onKeyDown: function(e) {
                e.keyCode === O.KeyboardKeys.ESCAPE && (e.stopPropagation(), f(!1), null != m.current && m.current.focus())
            }
        }, r.createElement(M, {
            id: R,
            hasTabWrapper: u,
            selectedSurrogate: i,
            onClick: function(e) {
                var t;
                (0, _.setDiversityColor)(e), f(!1), null === (t = o.current) || void 0 === t || t.focus()
            }
        })) : null)
    }
}