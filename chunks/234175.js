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
        I = n("161585"),
        T = n("24373"),
        _ = n("41170"),
        v = n("49111"),
        N = n("13030"),
        A = n("782340"),
        O = n("11693");
    let M = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
        R = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
        k = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
        L = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
        b = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        P = (0, g.cssValueToNumber)(r.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        j = [M, M, M, M],
        U = (R + k) * 2 + M,
        D = b + 2 * P,
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
                let g = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === I.StickerCategoryTypes.FAVORITE,
                    S = g ? 1 : 0,
                    M = (null === (c = n[S]) || void 0 === c ? void 0 : c.type) === I.StickerCategoryTypes.RECENT,
                    k = n.length > 0,
                    b = n.length;
                if (0 === a && g) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": b,
                    "aria-posinset": a,
                    children: (0, i.jsx)(o.Clickable, {
                        "aria-label": A.default.Messages.CATEGORY_FAVORITE,
                        className: s(O.stickerCategory, O.stickerCategoryGeneric, {
                            [O.stickerCategoryGenericDisabled]: k && !g,
                            [O.stickerCategoryGenericSelected]: !E && g && 0 === t
                        }),
                        onClick: r,
                        children: (0, i.jsx)(x.default, {
                            className: O.stickerCategoryGenericIcon,
                            height: L,
                            width: L
                        })
                    })
                }, "favorites");
                if (a === S && M) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": b,
                    "aria-posinset": a,
                    children: (0, i.jsx)(o.Clickable, {
                        "aria-label": A.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                        className: s(O.stickerCategory, O.stickerCategoryGeneric, {
                            [O.stickerCategoryGenericDisabled]: k && !M,
                            [O.stickerCategoryGenericSelected]: !E && M && t === S
                        }),
                        onClick: r,
                        children: (0, i.jsx)(h.default, {
                            className: O.stickerCategoryGenericIcon,
                            height: L,
                            width: L
                        })
                    })
                }, "recent");
                let P = t === a,
                    j = n[a],
                    U = n[a + 1],
                    D = null != U && j.type === I.StickerCategoryTypes.GUILD && U.type !== I.StickerCategoryTypes.GUILD,
                    w = j.type === I.StickerCategoryTypes.PACK,
                    F = "",
                    B = null;
                if (j.type === I.StickerCategoryTypes.GUILD || j.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                    let e = m.default.getGuild(j.id);
                    null != e && (f = e.id, F = e.name, B = (0, i.jsx)(d.default, {
                        guild: e,
                        isSelected: P
                    }))
                } else if (w) {
                    let e = C.default.getStickerPack(j.id);
                    null != e && (F = e.name, B = (0, i.jsx)(_.default, {
                        disableAnimation: !P || E,
                        size: R,
                        sticker: (0, T.getStickerPackPreviewSticker)(e)
                    }))
                }
                return (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(o.Tooltip, {
                        position: "right",
                        text: F,
                        tooltipContentClassName: O.tooltip,
                        children: e => (0, i.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": b,
                            "aria-posinset": a,
                            children: (0, i.jsx)(o.Clickable, {
                                ...e,
                                "aria-label": F,
                                className: s(O.stickerCategory, {
                                    [O.firstPartyCategory]: w,
                                    [O.firstPartyCategorySelected]: !E && P && w
                                }),
                                onClick: () => {
                                    j.type === I.StickerCategoryTypes.PACK && y.default.track(v.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                        location: null == p ? void 0 : p.location,
                                        tab: N.ExpressionPickerViewType.STICKER,
                                        sticker_pack_id: j.id,
                                        guild_id: f
                                    }), r()
                                },
                                children: B
                            })
                        })
                    }), D ? (0, i.jsx)("hr", {
                        className: O.guildCategorySeparator
                    }, "separator") : null]
                }, j.id)
            }, [t, p, E, n]), S = l.useCallback((e, t) => t ? U : 0, []), M = l.useCallback((e, t) => {
                let i = n[t],
                    l = n[t + 1],
                    a = null != l && i.type === I.StickerCategoryTypes.GUILD && l.type !== I.StickerCategoryTypes.GUILD;
                return R + (a ? D : k)
            }, [n]), P = l.useCallback(e => {
                var t;
                let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null == n) return;
                let i = e + n.height;
                c(i - b < r)
            }, [r]);
            return {
                getScrollOffsetForIndex: S,
                renderCategoryListItem: g,
                rowHeight: M,
                onScroll: P
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
            let n = f.filter(e => e.type === I.StickerCategoryTypes.GUILD).length,
                i = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === I.StickerCategoryTypes.RECENT,
                l = (null === (t = f[0]) || void 0 === t ? void 0 : t.type) === I.StickerCategoryTypes.FAVORITE,
                a = n + (i ? 1 : 0) + (l ? 1 : 0),
                s = a * (R + k) - k + D,
                r = null != f.find(e => e.type === I.StickerCategoryTypes.PACK);
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
        }), _ = l.useCallback(e => {
            var t;
            e(m), null === (t = a.current) || void 0 === t || t.scrollTo(h)
        }, [m, h]);
        return (0, i.jsx)(p.default, {
            className: O.categoryList,
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
                className: s(O.standardStickerShortcut, {
                    [O.invisibleShortcut]: !r
                }),
                onClick: () => _(e),
                children: (0, i.jsx)(E.default, {
                    height: 24,
                    width: 24
                })
            })
        })
    }
}