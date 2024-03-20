function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007"), n("843762");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("146606"),
        d = n("974667"),
        c = n("895547"),
        f = n("769846"),
        p = n("77078"),
        m = n("150021"),
        h = n("206625"),
        x = n("302437"),
        E = n("867805"),
        y = n("476765"),
        g = n("402671"),
        S = n("159885"),
        C = n("49111"),
        _ = n("782340"),
        T = n("756249");
    let I = (0, y.uid)(),
        v = c.default.convert.fromCodePoint("1f44f"),
        N = (0, S.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        A = (0, S.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
        O = e => {
            let {
                fade: t,
                surrogate: n,
                onClick: l,
                delay: a,
                index: s
            } = e, r = (0, d.useListItem)("item-".concat(s)), o = g.default.getURL(v + n), f = (0, u.useSpring)({
                opacity: 1,
                from: {
                    opacity: t ? 0 : 1
                },
                delay: a
            });
            return (0, i.jsx)(p.Clickable, {
                ...r,
                role: "option",
                "aria-selected": 0 === s,
                onClick: () => l(n),
                className: T.diversityEmojiItem,
                children: (0, i.jsx)(u.animated.div, {
                    "aria-label": function(e) {
                        let t = c.default.convert.toCodePoint(e);
                        switch (t) {
                            case "1f3fb":
                                return _.default.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
                            case "1f3fc":
                                return _.default.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
                            case "1f3fd":
                                return _.default.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
                            case "1f3fe":
                                return _.default.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
                            case "1f3ff":
                                return _.default.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
                            default:
                                return _.default.Messages.EMOJI_MODIFIER_NONE
                        }
                    }(n),
                    className: T.diversityEmojiItemImage,
                    style: {
                        backgroundImage: 'url("'.concat(o, '")'),
                        ...f
                    }
                })
            })
        },
        R = e => {
            let {
                id: t,
                selectedSurrogate: n,
                onClick: a,
                hasTabWrapper: r
            } = e, c = (0, x.default)("diversity"), f = (0, u.useSpring)({
                height: (A + 2 * N) * (E.DIVERSITY_SURROGATES.length + 1),
                from: {
                    height: A
                },
                config: {
                    duration: 125
                }
            });
            l.useEffect(() => {
                c.focusFirstVisibleItem()
            }, [c]);
            let p = ["", ...E.DIVERSITY_SURROGATES];
            return o.remove(p, e => e === n), p.unshift(n), (0, i.jsx)(d.ListNavigatorProvider, {
                navigator: c,
                children: (0, i.jsx)(d.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: n,
                            ...l
                        } = e;
                        return (0, i.jsx)(u.animated.div, {
                            ...l,
                            id: t,
                            ref: n,
                            className: s(T.diversitySelectorOptions, {
                                [T.diversitySelectorOptionsHasTabWrapper]: r
                            }),
                            style: f,
                            role: "listbox",
                            children: p.map((e, t) => (0, i.jsx)(O, {
                                index: t,
                                fade: 0 !== t,
                                delay: 20 * t,
                                surrogate: e,
                                onClick: a
                            }, t))
                        })
                    }
                })
            })
        };
    var M = e => {
        let {
            searchBarRef: t,
            selectedSurrogate: n,
            className: a,
            hasTabWrapper: s
        } = e, r = g.default.getURL(v + n), [o, u] = l.useState(!1), d = (0, h.default)(null, () => u(!1)), c = l.useRef(null);
        return (0, i.jsxs)("div", {
            ref: d,
            className: a,
            children: [(0, i.jsx)(p.Clickable, {
                innerRef: c,
                className: T.diversitySelectorButton,
                onClick: () => {
                    u(!0)
                },
                "aria-label": _.default.Messages.EMOJI_MODIFIER_MENU_BUTTON,
                "aria-haspopup": !0,
                "aria-expanded": o,
                "aria-controls": I,
                tabIndex: o ? -1 : 0,
                children: (0, i.jsx)("div", {
                    className: T.diversityEmojiItemImage,
                    style: {
                        backgroundImage: 'url("'.concat(r, '")')
                    }
                })
            }), o ? (0, i.jsx)("div", {
                onKeyDown: e => {
                    e.keyCode === C.KeyboardKeys.ESCAPE && (e.stopPropagation(), u(!1), null != c.current && c.current.focus())
                },
                children: (0, i.jsx)(R, {
                    id: I,
                    hasTabWrapper: s,
                    selectedSurrogate: n,
                    onClick: e => {
                        var n;
                        (0, m.setDiversityColor)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus()
                    }
                })
            }) : null]
        })
    }
}