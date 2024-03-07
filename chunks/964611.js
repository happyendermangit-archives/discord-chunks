function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return W
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("974667"),
        d = n("446674"),
        c = n("769846"),
        f = n("77078"),
        m = n("997289"),
        p = n("206230"),
        h = n("986632"),
        E = n("405607"),
        g = n("423080"),
        S = n("471671"),
        C = n("46829"),
        T = n("599110"),
        v = n("159885"),
        I = n("429569"),
        _ = n("788506"),
        N = n("675280"),
        A = n("917764"),
        x = n("83017"),
        y = n("115279"),
        O = n("49111"),
        R = n("13030"),
        M = n("782340"),
        L = n("988067");
    let P = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
        b = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
        j = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
        U = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
        D = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
        k = (0, v.cssValueToNumber)(L.unicodeCategoryShortcutHeight),
        w = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        F = (0, v.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        G = j + b + 2 * D,
        B = P + b,
        H = B + (w + 2 * F),
        V = j + U + 2 * D;

    function K(e) {
        let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: a,
            categories: r,
            category: o,
            handleCategorySelect: d,
            isWindowFocused: c,
            useReducedMotion: m,
            isNitroLocked: p
        } = e, h = (0, u.useListItem)("expression-guild-".concat(n)), E = o.type === y.EmojiCategoryTypes.GUILD ? null : o.id, S = t === n, C = o.type === y.EmojiCategoryTypes.GUILD ? o.guild : null, {
            enabled: v
        } = I.default.useExperiment({
            location: "Emoji Picker Category List"
        }, {
            autoTrackExposure: p
        }), x = (0, l.jsxs)(f.Clickable, {
            ...h,
            "aria-label": (0, _.getAriaIdForEmojiCategory)(o, C),
            className: s({
                [L.categoryItemGuildCategory]: null != C,
                [L.categoryItemDefaultCategory]: null == C,
                [L.categoryItemDefaultCategorySelected]: null == C && S,
                [L.categoryItemRecentEmoji]: o.type === y.EmojiCategoryTypes.RECENT
            }),
            onClick: () => {
                null != C && T.default.track(O.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                    location: null == a ? void 0 : a.location,
                    tab: R.ExpressionPickerViewType.EMOJI,
                    guild_id: C.id
                }), d(n)
            },
            children: [null != C ? (0, l.jsx)(A.default, {
                guild: C,
                isSelected: S,
                shouldAnimate: !m && c,
                isLocked: v && p
            }) : null, null == C && null != E ? (0, l.jsx)(N.default, {
                categoryId: E,
                className: L.categoryIcon,
                height: j,
                width: j
            }) : null]
        }), M = r[n + 1], P = null != M && o.type === y.EmojiCategoryTypes.GUILD && M.type !== y.EmojiCategoryTypes.GUILD;
        return null != C ? (0, l.jsxs)(i.Fragment, {
            children: [(0, l.jsx)(g.default, {
                guild: C,
                includeActivity: !1,
                children: (0, l.jsx)("div", {
                    children: x
                })
            }), P ? (0, l.jsx)("hr", {
                className: L.guildCategorySeparator
            }, "separator") : null]
        }) : x
    }
    var W = e => {
        let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: a,
            intention: r,
            channel: u
        } = e, c = h.EmojiPickerStore.useStore(e => e.activeCategoryIndex), g = (0, x.useCategorySelectHandler)({
            sectionDescriptors: a,
            emojiListRef: n
        }), T = (0, m.useAnalyticsContext)(), v = (0, _.useEmojiCategories)(r, u), I = i.useRef(null), N = (0, d.useStateFromStores)([S.default], () => S.default.isFocused()), A = (0, d.useStateFromStores)([p.default], () => p.default.useReducedMotion, []), O = (0, _.useCategoryNitroLockedStates)(r, u, v), R = i.useMemo(() => o.memoize((e, t) => {
            let n = v[t];
            if (null == n) return;
            let i = O[t];
            return (0, l.jsx)(K, {
                activeIndex: c,
                analyticsContext: T,
                categories: v,
                category: n,
                categoryIndex: t,
                handleCategorySelect: g,
                isWindowFocused: N,
                useReducedMotion: A,
                isNitroLocked: i
            }, t)
        }), [c, T, v, g, N, A, O]), P = i.useMemo(() => [8, 8, 0, 8], []), D = i.useCallback((e, t) => {
            let n = v[t];
            if (n.type === y.EmojiCategoryTypes.RECENT) return G;
            if (n.type === y.EmojiCategoryTypes.GUILD) {
                let e = v[t + 1],
                    n = null != e && e.type !== y.EmojiCategoryTypes.GUILD;
                return n ? H : B
            }
            return V
        }, [v]), {
            nonUnicodeCategoryCount: W,
            firstUnicodeCategoryIndex: Y,
            firstUnicodeCategoryOffsetTop: z,
            rowCountBySection: Z
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                l = 0;
            v.forEach(i => {
                i.type === y.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : i.type === y.EmojiCategoryTypes.UNICODE ? l += 1 : (e += 1, t += 1)
            });
            let i = [e, n, l],
                a = G + t * B + H;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: a,
                rowCountBySection: i
            }
        }, [v]), [J, q] = i.useState(!0);
        i.useLayoutEffect(() => {
            q(W >= 7)
        }, [W]);
        let X = i.useCallback(e => {
                var t;
                let n = null === (t = I.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null == n) return;
                let l = e + n.height;
                l - w >= z ? q(!1) : q(!0)
            }, [z]),
            Q = i.useCallback(e => {
                var t;
                e(Y), null === (t = I.current) || void 0 === t || t.scrollTo(z)
            }, [z, Y]),
            $ = i.useCallback((e, t) => {
                let n = v[e];
                if (null == n) return 0;
                let l = J ? k : 0;
                if (n.type === y.EmojiCategoryTypes.RECENT) return t ? 0 : U;
                if (n.type === y.EmojiCategoryTypes.GUILD) {
                    let n = v[e + 1];
                    return null != n && n.type !== y.EmojiCategoryTypes.GUILD ? t ? w + -2 * F + b + l : b : t ? l : b
                }
                return t ? b + l : 2 * b
            }, [v, J]),
            ee = i.useMemo(() => function(e, t) {
                return (0, l.jsx)(i.Fragment, {
                    children: t
                }, e)
            }, []),
            et = J ? "shortcut" : "hiddenshortcut";
        return (0, l.jsx)(E.default, {
            categoryListRef: I,
            expressionsListRef: n,
            className: t,
            store: h.EmojiPickerStore,
            categories: v,
            listPadding: P,
            onScroll: X,
            renderCategoryListItem: R,
            renderSection: ee,
            rowCount: v.length,
            categoryHeight: D,
            getScrollOffsetForIndex: $,
            rowCountBySection: Z,
            children: e => W >= 7 && (0, l.jsx)(f.Clickable, {
                "aria-hidden": !J,
                "aria-label": M.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
                className: s(L.unicodeShortcut, {
                    [L.unicodeShortcutInvisible]: !J
                }),
                tabIndex: J ? 0 : -1,
                onClick: () => Q(e),
                children: (0, l.jsx)(C.default, {
                    height: j,
                    width: j
                })
            }, et)
        })
    }
}