function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("769846"),
        o = n("77078"),
        u = n("997289"),
        d = n("917764"),
        c = n("986632"),
        f = n("538282"),
        p = n("405607"),
        m = n("305961"),
        h = n("841811"),
        x = n("290581"),
        E = n("595086"),
        y = n("599110"),
        g = n("159885"),
        S = n("256860"),
        C = n("364685"),
        _ = n("161585"),
        T = n("24373"),
        I = n("41170"),
        v = n("49111"),
        N = n("13030"),
        A = n("782340"),
        R = n("11693");
    let O = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
        M = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
        k = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
        L = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
        P = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        b = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        j = [O, O, O, O],
        U = (M + k) * 2 + O,
        D = P + 2 * b,
        w = e => {
            let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: r,
                setShouldRenderShortcut: c
            } = e, p = (0, u.useAnalyticsContext)(), E = (0, f.useExpressionPickerStore)(e => "" !== e.searchQuery), g = l.useCallback((e, a, r) => {
                var u, c;
                let f;
                let g = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === _.StickerCategoryTypes.FAVORITE,
                    S = g ? 1 : 0,
                    O = (null === (c = n[S]) || void 0 === c ? void 0 : c.type) === _.StickerCategoryTypes.RECENT,
                    k = n.length > 0,
                    P = n.length;
                if (0 === a && g) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": P,
                    "aria-posinset": a,
                    children: (0, i.jsx)(o.Clickable, {
                        "aria-label": A.default.Messages.CATEGORY_FAVORITE,
                        className: s(R.stickerCategory, R.stickerCategoryGeneric, {
                            [R.stickerCategoryGenericDisabled]: k && !g,
                            [R.stickerCategoryGenericSelected]: !E && g && 0 === t
                        }),
                        onClick: r,
                        children: (0, i.jsx)(x.default, {
                            className: R.stickerCategoryGenericIcon,
                            height: L,
                            width: L
                        })
                    })
                }, "favorites");
                if (a === S && O) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": P,
                    "aria-posinset": a,
                    children: (0, i.jsx)(o.Clickable, {
                        "aria-label": A.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                        className: s(R.stickerCategory, R.stickerCategoryGeneric, {
                            [R.stickerCategoryGenericDisabled]: k && !O,
                            [R.stickerCategoryGenericSelected]: !E && O && t === S
                        }),
                        onClick: r,
                        children: (0, i.jsx)(h.default, {
                            className: R.stickerCategoryGenericIcon,
                            height: L,
                            width: L
                        })
                    })
                }, "recent");
                let b = t === a,
                    j = n[a],
                    U = n[a + 1],
                    D = null != U && j.type === _.StickerCategoryTypes.GUILD && U.type !== _.StickerCategoryTypes.GUILD,
                    w = j.type === _.StickerCategoryTypes.PACK,
                    F = "",
                    G = null;
                if (j.type === _.StickerCategoryTypes.GUILD || j.type === _.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                    let e = m.default.getGuild(j.id);
                    null != e && (f = e.id, F = e.name, G = (0, i.jsx)(d.default, {
                        guild: e,
                        isSelected: b
                    }))
                } else if (w) {
                    let e = C.default.getStickerPack(j.id);
                    null != e && (F = e.name, G = (0, i.jsx)(I.default, {
                        disableAnimation: !b || E,
                        size: M,
                        sticker: (0, T.getStickerPackPreviewSticker)(e)
                    }))
                }
                return (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(o.Tooltip, {
                        position: "right",
                        text: F,
                        tooltipContentClassName: R.tooltip,
                        children: e => (0, i.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": P,
                            "aria-posinset": a,
                            children: (0, i.jsx)(o.Clickable, {
                                ...e,
                                "aria-label": F,
                                className: s(R.stickerCategory, {
                                    [R.firstPartyCategory]: w,
                                    [R.firstPartyCategorySelected]: !E && b && w
                                }),
                                onClick: () => {
                                    j.type === _.StickerCategoryTypes.PACK && y.default.track(v.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                        location: null == p ? void 0 : p.location,
                                        tab: N.ExpressionPickerViewType.STICKER,
                                        sticker_pack_id: j.id,
                                        guild_id: f
                                    }), r()
                                },
                                children: G
                            })
                        })
                    }), D ? (0, i.jsx)("hr", {
                        className: R.guildCategorySeparator
                    }, "separator") : null]
                }, j.id)
            }, [t, p, E, n]), S = l.useCallback((e, t) => t ? U : 0, []), O = l.useCallback((e, t) => {
                let i = n[t],
                    l = n[t + 1],
                    a = null != l && i.type === _.StickerCategoryTypes.GUILD && l.type !== _.StickerCategoryTypes.GUILD;
                return M + (a ? D : k)
            }, [n]), b = l.useCallback(e => {
                var t;
                let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null == n) return;
                let i = e + n.height;
                c(i - P < r)
            }, [r]);
            return {
                getScrollOffsetForIndex: S,
                renderCategoryListItem: g,
                rowHeight: O,
                onScroll: b
            }
        };
    var F = e => {
        let {
            stickersListRef: t,
            channel: n
        } = e, a = l.useRef(null), [r, u] = l.useState(!0), d = c.StickerPickerStore.useStore(e => e.activeCategoryIndex), f = (0, S.useFilteredStickerPackCategories)(n), {
            firstStandardStickerCategoryIndex: m,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: x,
            hasFirstPartyStickerPacks: y
        } = l.useMemo(() => {
            var e, t;
            let n = f.filter(e => e.type === _.StickerCategoryTypes.GUILD).length,
                i = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === _.StickerCategoryTypes.RECENT,
                l = (null === (t = f[0]) || void 0 === t ? void 0 : t.type) === _.StickerCategoryTypes.FAVORITE,
                a = n + (i ? 1 : 0) + (l ? 1 : 0),
                s = a * (M + k) - k + D,
                r = null != f.find(e => e.type === _.StickerCategoryTypes.PACK);
            return {
                firstStandardStickerCategoryIndex: a + 1,
                firstStandardStickerCategoryOffsetTop: s,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: r
            }
        }, [f]);
        l.useLayoutEffect(() => {
            u(x >= 7)
        }, [x]);
        let {
            renderCategoryListItem: g,
            rowHeight: C,
            onScroll: T
        } = w({
            activeIndex: d,
            stickerPickerCategories: f,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: h,
            setShouldRenderShortcut: u
        }), I = l.useCallback(e => {
            var t;
            e(m), null === (t = a.current) || void 0 === t || t.scrollTo(h)
        }, [m, h]);
        return (0, i.jsx)(p.default, {
            className: R.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: c.StickerPickerStore,
            listPadding: j,
            onScroll: T,
            renderCategoryListItem: g,
            rowCount: f.length,
            categories: f,
            categoryHeight: C,
            children: e => y && r && (0, i.jsx)(o.Clickable, {
                className: s(R.standardStickerShortcut, {
                    [R.invisibleShortcut]: !r
                }),
                onClick: () => I(e),
                children: (0, i.jsx)(E.default, {
                    height: 24,
                    width: 24
                })
            })
        })
    }
}