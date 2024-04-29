function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("733860");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("718017"),
        d = n("924826"),
        _ = n("946188"),
        c = n("477690"),
        E = n("481060"),
        I = n("80932"),
        T = n("351773"),
        f = n("209613"),
        S = n("633302"),
        h = n("153124"),
        A = n("176354"),
        m = n("624138"),
        N = n("981631"),
        p = n("689938"),
        O = n("43055");
    let R = (0, h.uid)(),
        C = _.default.convert.fromCodePoint("1f44f"),
        g = (0, m.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        L = (0, m.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
        D = e => {
            let {
                fade: t,
                surrogate: n,
                onClick: r,
                delay: s,
                index: a
            } = e, o = (0, d.useListItem)("item-".concat(a)), l = A.default.getURL(C + n), c = (0, u.useSpring)({
                opacity: 1,
                from: {
                    opacity: t ? 0 : 1
                },
                delay: s
            });
            return (0, i.jsx)(E.Clickable, {
                ...o,
                role: "option",
                "aria-selected": 0 === a,
                onClick: () => r(n),
                className: O.diversityEmojiItem,
                children: (0, i.jsx)(u.animated.div, {
                    "aria-label": function(e) {
                        switch (_.default.convert.toCodePoint(e)) {
                            case "1f3fb":
                                return p.default.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
                            case "1f3fc":
                                return p.default.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
                            case "1f3fd":
                                return p.default.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
                            case "1f3fe":
                                return p.default.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
                            case "1f3ff":
                                return p.default.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
                            default:
                                return p.default.Messages.EMOJI_MODIFIER_NONE
                        }
                    }(n),
                    className: O.diversityEmojiItemImage,
                    style: {
                        backgroundImage: 'url("'.concat(l, '")'),
                        ...c
                    }
                })
            })
        },
        v = e => {
            let {
                id: t,
                selectedSurrogate: n,
                onClick: s,
                hasTabWrapper: o
            } = e, _ = (0, f.default)("diversity"), c = (0, u.useSpring)({
                height: (L + 2 * g) * (S.DIVERSITY_SURROGATES.length + 1),
                from: {
                    height: L
                },
                config: {
                    duration: 125
                }
            });
            r.useEffect(() => {
                _.focusFirstVisibleItem()
            }, [_]);
            let E = ["", ...S.DIVERSITY_SURROGATES];
            return l().remove(E, e => e === n), E.unshift(n), (0, i.jsx)(d.ListNavigatorProvider, {
                navigator: _,
                children: (0, i.jsx)(d.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: n,
                            ...r
                        } = e;
                        return (0, i.jsx)(u.animated.div, {
                            ...r,
                            id: t,
                            ref: n,
                            className: a()(O.diversitySelectorOptions, {
                                [O.diversitySelectorOptionsHasTabWrapper]: o
                            }),
                            style: c,
                            role: "listbox",
                            children: E.map((e, t) => (0, i.jsx)(D, {
                                index: t,
                                fade: 0 !== t,
                                delay: 20 * t,
                                surrogate: e,
                                onClick: s
                            }, t))
                        })
                    }
                })
            })
        };
    t.default = e => {
        let {
            searchBarRef: t,
            selectedSurrogate: n,
            className: s,
            hasTabWrapper: a
        } = e, o = A.default.getURL(C + n), [l, u] = r.useState(!1), d = (0, T.default)(null, () => u(!1)), _ = r.useRef(null);
        return (0, i.jsxs)("div", {
            ref: d,
            className: s,
            children: [(0, i.jsx)(E.Clickable, {
                innerRef: _,
                className: O.diversitySelectorButton,
                onClick: () => {
                    u(!0)
                },
                "aria-label": p.default.Messages.EMOJI_MODIFIER_MENU_BUTTON,
                "aria-haspopup": !0,
                "aria-expanded": l,
                "aria-controls": R,
                tabIndex: l ? -1 : 0,
                children: (0, i.jsx)("div", {
                    className: O.diversityEmojiItemImage,
                    style: {
                        backgroundImage: 'url("'.concat(o, '")')
                    }
                })
            }), l ? (0, i.jsx)("div", {
                onKeyDown: e => {
                    e.keyCode === N.KeyboardKeys.ESCAPE && (e.stopPropagation(), u(!1), null != _.current && _.current.focus())
                },
                children: (0, i.jsx)(v, {
                    id: R,
                    hasTabWrapper: a,
                    selectedSurrogate: n,
                    onClick: e => {
                        var n;
                        (0, I.setDiversityColor)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus()
                    }
                })
            }) : null]
        })
    }
}