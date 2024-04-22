function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("924826"),
        d = n("442837"),
        _ = n("477690"),
        c = n("481060"),
        E = n("2052"),
        I = n("607070"),
        T = n("806966"),
        f = n("254494"),
        S = n("593618"),
        h = n("451478"),
        A = n("642113"),
        m = n("626135"),
        N = n("624138"),
        p = n("540780"),
        O = n("543241"),
        R = n("883661"),
        C = n("880949"),
        g = n("784222"),
        L = n("149203"),
        D = n("981631"),
        v = n("957825"),
        M = n("689938"),
        y = n("52915");
    let P = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
        U = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
        b = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
        G = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
        w = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
        k = (0, N.cssValueToNumber)(y.__invalid_unicodeCategoryShortcutHeight),
        B = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        F = (0, N.cssValueToNumber)(_.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        V = b + U + 2 * w,
        x = P + U,
        H = x + (B + 2 * F),
        Y = b + G + 2 * w;

    function j(e) {
        let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: s,
            categories: o,
            category: l,
            handleCategorySelect: d,
            isWindowFocused: _,
            useReducedMotion: E,
            isNitroLocked: I
        } = e, T = (0, u.useListItem)("expression-guild-".concat(n)), f = l.type === L.EmojiCategoryTypes.GUILD ? null : l.id, h = t === n, A = l.type === L.EmojiCategoryTypes.GUILD ? l.guild : null, {
            enabled: N
        } = p.default.useExperiment({
            location: "Emoji Picker Category List"
        }, {
            autoTrackExposure: I
        }), g = (0, i.jsxs)(c.Clickable, {
            ...T,
            "aria-label": (0, O.getAriaIdForEmojiCategory)(l, A),
            className: a()({
                [y.categoryItemGuildCategory]: null != A,
                [y.categoryItemDefaultCategory]: null == A,
                [y.categoryItemDefaultCategorySelected]: null == A && h,
                [y.categoryItemRecentEmoji]: l.type === L.EmojiCategoryTypes.RECENT
            }),
            onClick: () => {
                null != A && m.default.track(D.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                    location: null == s ? void 0 : s.location,
                    tab: v.ExpressionPickerViewType.EMOJI,
                    guild_id: A.id
                }), d(n)
            },
            children: [null != A ? (0, i.jsx)(C.default, {
                guild: A,
                isSelected: h,
                shouldAnimate: !E && _,
                isLocked: N && I
            }) : null, null == A && null != f ? (0, i.jsx)(R.default, {
                categoryId: f,
                className: y.categoryIcon,
                height: b,
                width: b
            }) : null]
        }), M = o[n + 1], P = null != M && l.type === L.EmojiCategoryTypes.GUILD && M.type !== L.EmojiCategoryTypes.GUILD;
        return null != A ? (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(S.default, {
                guild: A,
                includeActivity: !1,
                children: (0, i.jsx)("div", {
                    children: g
                })
            }), P ? (0, i.jsx)("hr", {
                className: y.guildCategorySeparator
            }, "separator") : null]
        }) : g
    }
    t.default = e => {
        let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: s,
            intention: o,
            channel: u
        } = e, _ = T.EmojiPickerStore.useStore(e => e.activeCategoryIndex), S = (0, g.useCategorySelectHandler)({
            sectionDescriptors: s,
            emojiListRef: n
        }), m = (0, E.useAnalyticsContext)(), N = (0, O.useEmojiCategories)(o, u), p = r.useRef(null), R = (0, d.useStateFromStores)([h.default], () => h.default.isFocused()), C = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion, []), D = (0, O.useCategoryNitroLockedStates)(o, u, N), v = r.useMemo(() => l().memoize((e, t) => {
            let n = N[t];
            if (null == n) return;
            let r = D[t];
            return (0, i.jsx)(j, {
                activeIndex: _,
                analyticsContext: m,
                categories: N,
                category: n,
                categoryIndex: t,
                handleCategorySelect: S,
                isWindowFocused: R,
                useReducedMotion: C,
                isNitroLocked: r
            }, t)
        }), [_, m, N, S, R, C, D]), P = r.useMemo(() => [8, 8, 0, 8], []), w = r.useCallback((e, t) => {
            let n = N[t];
            if (n.type === L.EmojiCategoryTypes.RECENT) return V;
            if (n.type === L.EmojiCategoryTypes.GUILD) {
                let e = N[t + 1];
                return null != e && e.type !== L.EmojiCategoryTypes.GUILD ? H : x
            }
            return Y
        }, [N]), {
            nonUnicodeCategoryCount: W,
            firstUnicodeCategoryIndex: K,
            firstUnicodeCategoryOffsetTop: z,
            rowCountBySection: X
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            N.forEach(r => {
                r.type === L.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : r.type === L.EmojiCategoryTypes.UNICODE ? i += 1 : (e += 1, t += 1)
            });
            let r = V + t * x + H;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: [e, n, i]
            }
        }, [N]), [Q, q] = r.useState(!0);
        r.useLayoutEffect(() => {
            q(W >= 7)
        }, [W]);
        let Z = r.useCallback(e => {
                var t;
                let n = null === (t = p.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null != n) e + n.height - B >= z ? q(!1) : q(!0)
            }, [z]),
            J = r.useCallback(e => {
                var t;
                e(K), null === (t = p.current) || void 0 === t || t.scrollTo(z)
            }, [z, K]),
            $ = r.useCallback((e, t) => {
                let n = N[e];
                if (null == n) return 0;
                let i = Q ? k : 0;
                if (n.type === L.EmojiCategoryTypes.RECENT) return t ? 0 : G;
                if (n.type === L.EmojiCategoryTypes.GUILD) {
                    let n = N[e + 1];
                    return null != n && n.type !== L.EmojiCategoryTypes.GUILD ? t ? B + -2 * F + U + i : U : t ? i : U
                }
                return t ? U + i : 2 * U
            }, [N, Q]),
            ee = r.useMemo(() => function(e, t) {
                return (0, i.jsx)(r.Fragment, {
                    children: t
                }, e)
            }, []),
            et = Q ? "shortcut" : "hiddenshortcut";
        return (0, i.jsx)(f.default, {
            categoryListRef: p,
            expressionsListRef: n,
            className: t,
            store: T.EmojiPickerStore,
            categories: N,
            listPadding: P,
            onScroll: Z,
            renderCategoryListItem: v,
            renderSection: ee,
            rowCount: N.length,
            categoryHeight: w,
            getScrollOffsetForIndex: $,
            rowCountBySection: X,
            children: e => W >= 7 && (0, i.jsx)(c.Clickable, {
                "aria-hidden": !Q,
                "aria-label": M.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
                className: a()(y.unicodeShortcut, {
                    [y.unicodeShortcutInvisible]: !Q
                }),
                tabIndex: Q ? 0 : -1,
                onClick: () => J(e),
                children: (0, i.jsx)(A.default, {
                    height: b,
                    width: b
                })
            }, et)
        })
    }
}