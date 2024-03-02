function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007"), n("843762");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("907002"),
        d = n("974667"),
        c = n("895547"),
        f = n("769846"),
        m = n("77078"),
        p = n("150021"),
        h = n("206625"),
        E = n("302437"),
        g = n("867805"),
        C = n("476765"),
        S = n("402671"),
        T = n("159885"),
        I = n("49111"),
        v = n("782340"),
        _ = n("756249");
    let N = (0, C.uid)(),
        A = c.default.convert.fromCodePoint("1f44f"),
        x = (0, T.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        y = (0, T.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
        O = e => {
            let {
                fade: t,
                surrogate: n,
                onClick: i,
                delay: a,
                index: s
            } = e, r = (0, d.useListItem)("item-".concat(s)), o = S.default.getURL(A + n), f = (0, u.useSpring)({
                opacity: 1,
                from: {
                    opacity: t ? 0 : 1
                },
                delay: a
            });
            return (0, l.jsx)(m.Clickable, {
                ...r,
                role: "option",
                "aria-selected": 0 === s,
                onClick: () => i(n),
                className: _.diversityEmojiItem,
                children: (0, l.jsx)(u.animated.div, {
                    "aria-label": function(e) {
                        let t = c.default.convert.toCodePoint(e);
                        switch (t) {
                            case "1f3fb":
                                return v.default.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
                            case "1f3fc":
                                return v.default.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
                            case "1f3fd":
                                return v.default.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
                            case "1f3fe":
                                return v.default.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
                            case "1f3ff":
                                return v.default.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
                            default:
                                return v.default.Messages.EMOJI_MODIFIER_NONE
                        }
                    }(n),
                    className: _.diversityEmojiItemImage,
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
            } = e, c = (0, E.default)("diversity"), f = (0, u.useSpring)({
                height: (y + 2 * x) * (g.DIVERSITY_SURROGATES.length + 1),
                from: {
                    height: y
                },
                config: {
                    duration: 125
                }
            });
            i.useEffect(() => {
                c.focusFirstVisibleItem()
            }, [c]);
            let m = ["", ...g.DIVERSITY_SURROGATES];
            return o.remove(m, e => e === n), m.unshift(n), (0, l.jsx)(d.ListNavigatorProvider, {
                navigator: c,
                children: (0, l.jsx)(d.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: n,
                            ...i
                        } = e;
                        return (0, l.jsx)(u.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: s(_.diversitySelectorOptions, {
                                [_.diversitySelectorOptionsHasTabWrapper]: r
                            }),
                            style: f,
                            role: "listbox",
                            children: m.map((e, t) => (0, l.jsx)(O, {
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
        } = e, r = S.default.getURL(A + n), [o, u] = i.useState(!1), d = (0, h.default)(null, () => u(!1)), c = i.useRef(null);
        return (0, l.jsxs)("div", {
            ref: d,
            className: a,
            children: [(0, l.jsx)(m.Clickable, {
                innerRef: c,
                className: _.diversitySelectorButton,
                onClick: () => {
                    u(!0)
                },
                "aria-label": v.default.Messages.EMOJI_MODIFIER_MENU_BUTTON,
                "aria-haspopup": !0,
                "aria-expanded": o,
                "aria-controls": N,
                tabIndex: o ? -1 : 0,
                children: (0, l.jsx)("div", {
                    className: _.diversityEmojiItemImage,
                    style: {
                        backgroundImage: 'url("'.concat(r, '")')
                    }
                })
            }), o ? (0, l.jsx)("div", {
                onKeyDown: e => {
                    e.keyCode === I.KeyboardKeys.ESCAPE && (e.stopPropagation(), u(!1), null != c.current && c.current.focus())
                },
                children: (0, l.jsx)(R, {
                    id: N,
                    hasTabWrapper: s,
                    selectedSurrogate: n,
                    onClick: e => {
                        var n;
                        (0, p.setDiversityColor)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus()
                    }
                })
            }) : null]
        })
    }
}