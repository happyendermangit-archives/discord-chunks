function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return W
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("974667"),
        d = n("446674"),
        c = n("769846"),
        f = n("77078"),
        p = n("997289"),
        m = n("206230"),
        h = n("986632"),
        x = n("405607"),
        E = n("423080"),
        y = n("471671"),
        g = n("46829"),
        S = n("599110"),
        C = n("159885"),
        _ = n("429569"),
        T = n("788506"),
        I = n("675280"),
        v = n("917764"),
        N = n("83017"),
        A = n("115279"),
        O = n("49111"),
        R = n("13030"),
        M = n("782340"),
        k = n("988067");
    let L = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
        P = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
        b = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
        j = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
        U = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
        D = (0, C.cssValueToNumber)(k.unicodeCategoryShortcutHeight),
        w = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        F = (0, C.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        G = b + P + 2 * U,
        H = L + P,
        B = H + (w + 2 * F),
        V = b + j + 2 * U;

    function K(e) {
        let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: a,
            categories: r,
            category: o,
            handleCategorySelect: d,
            isWindowFocused: c,
            useReducedMotion: p,
            isNitroLocked: m
        } = e, h = (0, u.useListItem)("expression-guild-".concat(n)), x = o.type === A.EmojiCategoryTypes.GUILD ? null : o.id, y = t === n, g = o.type === A.EmojiCategoryTypes.GUILD ? o.guild : null, {
            enabled: C
        } = _.default.useExperiment({
            location: "Emoji Picker Category List"
        }, {
            autoTrackExposure: m
        }), N = (0, i.jsxs)(f.Clickable, {
            ...h,
            "aria-label": (0, T.getAriaIdForEmojiCategory)(o, g),
            className: s({
                [k.categoryItemGuildCategory]: null != g,
                [k.categoryItemDefaultCategory]: null == g,
                [k.categoryItemDefaultCategorySelected]: null == g && y,
                [k.categoryItemRecentEmoji]: o.type === A.EmojiCategoryTypes.RECENT
            }),
            onClick: () => {
                null != g && S.default.track(O.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                    location: null == a ? void 0 : a.location,
                    tab: R.ExpressionPickerViewType.EMOJI,
                    guild_id: g.id
                }), d(n)
            },
            children: [null != g ? (0, i.jsx)(v.default, {
                guild: g,
                isSelected: y,
                shouldAnimate: !p && c,
                isLocked: C && m
            }) : null, null == g && null != x ? (0, i.jsx)(I.default, {
                categoryId: x,
                className: k.categoryIcon,
                height: b,
                width: b
            }) : null]
        }), M = r[n + 1], L = null != M && o.type === A.EmojiCategoryTypes.GUILD && M.type !== A.EmojiCategoryTypes.GUILD;
        return null != g ? (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(E.default, {
                guild: g,
                includeActivity: !1,
                children: (0, i.jsx)("div", {
                    children: N
                })
            }), L ? (0, i.jsx)("hr", {
                className: k.guildCategorySeparator
            }, "separator") : null]
        }) : N
    }
    var W = e => {
        let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: a,
            intention: r,
            channel: u
        } = e, c = h.EmojiPickerStore.useStore(e => e.activeCategoryIndex), E = (0, N.useCategorySelectHandler)({
            sectionDescriptors: a,
            emojiListRef: n
        }), S = (0, p.useAnalyticsContext)(), C = (0, T.useEmojiCategories)(r, u), _ = l.useRef(null), I = (0, d.useStateFromStores)([y.default], () => y.default.isFocused()), v = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion, []), O = (0, T.useCategoryNitroLockedStates)(r, u, C), R = l.useMemo(() => o.memoize((e, t) => {
            let n = C[t];
            if (null == n) return;
            let l = O[t];
            return (0, i.jsx)(K, {
                activeIndex: c,
                analyticsContext: S,
                categories: C,
                category: n,
                categoryIndex: t,
                handleCategorySelect: E,
                isWindowFocused: I,
                useReducedMotion: v,
                isNitroLocked: l
            }, t)
        }), [c, S, C, E, I, v, O]), L = l.useMemo(() => [8, 8, 0, 8], []), U = l.useCallback((e, t) => {
            let n = C[t];
            if (n.type === A.EmojiCategoryTypes.RECENT) return G;
            if (n.type === A.EmojiCategoryTypes.GUILD) {
                let e = C[t + 1],
                    n = null != e && e.type !== A.EmojiCategoryTypes.GUILD;
                return n ? B : H
            }
            return V
        }, [C]), {
            nonUnicodeCategoryCount: W,
            firstUnicodeCategoryIndex: Y,
            firstUnicodeCategoryOffsetTop: z,
            rowCountBySection: J
        } = l.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            C.forEach(l => {
                l.type === A.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : l.type === A.EmojiCategoryTypes.UNICODE ? i += 1 : (e += 1, t += 1)
            });
            let l = [e, n, i],
                a = G + t * H + B;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: a,
                rowCountBySection: l
            }
        }, [C]), [Z, q] = l.useState(!0);
        l.useLayoutEffect(() => {
            q(W >= 7)
        }, [W]);
        let X = l.useCallback(e => {
                var t;
                let n = null === (t = _.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null == n) return;
                let i = e + n.height;
                i - w >= z ? q(!1) : q(!0)
            }, [z]),
            Q = l.useCallback(e => {
                var t;
                e(Y), null === (t = _.current) || void 0 === t || t.scrollTo(z)
            }, [z, Y]),
            $ = l.useCallback((e, t) => {
                let n = C[e];
                if (null == n) return 0;
                let i = Z ? D : 0;
                if (n.type === A.EmojiCategoryTypes.RECENT) return t ? 0 : j;
                if (n.type === A.EmojiCategoryTypes.GUILD) {
                    let n = C[e + 1];
                    return null != n && n.type !== A.EmojiCategoryTypes.GUILD ? t ? w + -2 * F + P + i : P : t ? i : P
                }
                return t ? P + i : 2 * P
            }, [C, Z]),
            ee = l.useMemo(() => function(e, t) {
                return (0, i.jsx)(l.Fragment, {
                    children: t
                }, e)
            }, []),
            et = Z ? "shortcut" : "hiddenshortcut";
        return (0, i.jsx)(x.default, {
            categoryListRef: _,
            expressionsListRef: n,
            className: t,
            store: h.EmojiPickerStore,
            categories: C,
            listPadding: L,
            onScroll: X,
            renderCategoryListItem: R,
            renderSection: ee,
            rowCount: C.length,
            categoryHeight: U,
            getScrollOffsetForIndex: $,
            rowCountBySection: J,
            children: e => W >= 7 && (0, i.jsx)(f.Clickable, {
                "aria-hidden": !Z,
                "aria-label": M.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
                className: s(k.unicodeShortcut, {
                    [k.unicodeShortcutInvisible]: !Z
                }),
                tabIndex: Z ? 0 : -1,
                onClick: () => Q(e),
                children: (0, i.jsx)(g.default, {
                    height: b,
                    width: b
                })
            }, et)
        })
    }
}