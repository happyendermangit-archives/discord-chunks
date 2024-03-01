function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("769846"),
        o = n("77078"),
        u = n("997289"),
        d = n("917764"),
        c = n("986632"),
        f = n("538282"),
        m = n("405607"),
        p = n("305961"),
        h = n("841811"),
        E = n("290581"),
        g = n("595086"),
        C = n("599110"),
        S = n("159885"),
        T = n("256860"),
        v = n("364685"),
        I = n("161585"),
        _ = n("24373"),
        N = n("41170"),
        A = n("49111"),
        x = n("13030"),
        y = n("782340"),
        O = n("11693");
    let R = (0, S.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
        M = (0, S.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
        L = (0, S.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
        P = (0, S.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
        b = (0, S.cssValueToNumber)(r.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        j = (0, S.cssValueToNumber)(r.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        U = [R, R, R, R],
        D = (M + L) * 2 + R,
        k = b + 2 * j,
        w = e => {
            let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: r,
                setShouldRenderShortcut: c
            } = e, m = (0, u.useAnalyticsContext)(), g = (0, f.useExpressionPickerStore)(e => "" !== e.searchQuery), S = i.useCallback((e, a, r) => {
                var u, c;
                let f;
                let S = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === I.StickerCategoryTypes.FAVORITE,
                    T = S ? 1 : 0,
                    R = (null === (c = n[T]) || void 0 === c ? void 0 : c.type) === I.StickerCategoryTypes.RECENT,
                    L = n.length > 0,
                    b = n.length;
                if (0 === a && S) return (0, l.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": b,
                    "aria-posinset": a,
                    children: (0, l.jsx)(o.Clickable, {
                        "aria-label": y.default.Messages.CATEGORY_FAVORITE,
                        className: s(O.stickerCategory, O.stickerCategoryGeneric, {
                            [O.stickerCategoryGenericDisabled]: L && !S,
                            [O.stickerCategoryGenericSelected]: !g && S && 0 === t
                        }),
                        onClick: r,
                        children: (0, l.jsx)(E.default, {
                            className: O.stickerCategoryGenericIcon,
                            height: P,
                            width: P
                        })
                    })
                }, "favorites");
                if (a === T && R) return (0, l.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": b,
                    "aria-posinset": a,
                    children: (0, l.jsx)(o.Clickable, {
                        "aria-label": y.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                        className: s(O.stickerCategory, O.stickerCategoryGeneric, {
                            [O.stickerCategoryGenericDisabled]: L && !R,
                            [O.stickerCategoryGenericSelected]: !g && R && t === T
                        }),
                        onClick: r,
                        children: (0, l.jsx)(h.default, {
                            className: O.stickerCategoryGenericIcon,
                            height: P,
                            width: P
                        })
                    })
                }, "recent");
                let j = t === a,
                    U = n[a],
                    D = n[a + 1],
                    k = null != D && U.type === I.StickerCategoryTypes.GUILD && D.type !== I.StickerCategoryTypes.GUILD,
                    w = U.type === I.StickerCategoryTypes.PACK,
                    F = "",
                    G = null;
                if (U.type === I.StickerCategoryTypes.GUILD || U.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                    let e = p.default.getGuild(U.id);
                    null != e && (f = e.id, F = e.name, G = (0, l.jsx)(d.default, {
                        guild: e,
                        isSelected: j
                    }))
                } else if (w) {
                    let e = v.default.getStickerPack(U.id);
                    null != e && (F = e.name, G = (0, l.jsx)(N.default, {
                        disableAnimation: !j || g,
                        size: M,
                        sticker: (0, _.getStickerPackPreviewSticker)(e)
                    }))
                }
                return (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(o.Tooltip, {
                        position: "right",
                        text: F,
                        tooltipContentClassName: O.tooltip,
                        children: e => (0, l.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": b,
                            "aria-posinset": a,
                            children: (0, l.jsx)(o.Clickable, {
                                ...e,
                                "aria-label": F,
                                className: s(O.stickerCategory, {
                                    [O.firstPartyCategory]: w,
                                    [O.firstPartyCategorySelected]: !g && j && w
                                }),
                                onClick: () => {
                                    U.type === I.StickerCategoryTypes.PACK && C.default.track(A.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                        location: null == m ? void 0 : m.location,
                                        tab: x.ExpressionPickerViewType.STICKER,
                                        sticker_pack_id: U.id,
                                        guild_id: f
                                    }), r()
                                },
                                children: G
                            })
                        })
                    }), k ? (0, l.jsx)("hr", {
                        className: O.guildCategorySeparator
                    }, "separator") : null]
                }, U.id)
            }, [t, m, g, n]), T = i.useCallback((e, t) => t ? D : 0, []), R = i.useCallback((e, t) => {
                let l = n[t],
                    i = n[t + 1],
                    a = null != i && l.type === I.StickerCategoryTypes.GUILD && i.type !== I.StickerCategoryTypes.GUILD;
                return M + (a ? k : L)
            }, [n]), j = i.useCallback(e => {
                var t;
                let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
                if (null == n) return;
                let l = e + n.height;
                c(l - b < r)
            }, [r]);
            return {
                getScrollOffsetForIndex: T,
                renderCategoryListItem: S,
                rowHeight: R,
                onScroll: j
            }
        };
    var F = e => {
        let {
            stickersListRef: t,
            channel: n
        } = e, a = i.useRef(null), [r, u] = i.useState(!0), d = c.StickerPickerStore.useStore(e => e.activeCategoryIndex), f = (0, T.useFilteredStickerPackCategories)(n), {
            firstStandardStickerCategoryIndex: p,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: E,
            hasFirstPartyStickerPacks: C
        } = i.useMemo(() => {
            var e, t;
            let n = f.filter(e => e.type === I.StickerCategoryTypes.GUILD).length,
                l = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === I.StickerCategoryTypes.RECENT,
                i = (null === (t = f[0]) || void 0 === t ? void 0 : t.type) === I.StickerCategoryTypes.FAVORITE,
                a = n + (l ? 1 : 0) + (i ? 1 : 0),
                s = a * (M + L) - L + k,
                r = null != f.find(e => e.type === I.StickerCategoryTypes.PACK);
            return {
                firstStandardStickerCategoryIndex: a + 1,
                firstStandardStickerCategoryOffsetTop: s,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: r
            }
        }, [f]);
        i.useLayoutEffect(() => {
            u(E >= 7)
        }, [E]);
        let {
            renderCategoryListItem: S,
            rowHeight: v,
            onScroll: _
        } = w({
            activeIndex: d,
            stickerPickerCategories: f,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: h,
            setShouldRenderShortcut: u
        }), N = i.useCallback(e => {
            var t;
            e(p), null === (t = a.current) || void 0 === t || t.scrollTo(h)
        }, [p, h]);
        return (0, l.jsx)(m.default, {
            className: O.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: c.StickerPickerStore,
            listPadding: U,
            onScroll: _,
            renderCategoryListItem: S,
            rowCount: f.length,
            categories: f,
            categoryHeight: v,
            children: e => C && r && (0, l.jsx)(o.Clickable, {
                className: s(O.standardStickerShortcut, {
                    [O.invisibleShortcut]: !r
                }),
                onClick: () => N(e),
                children: (0, l.jsx)(g.default, {
                    height: 24,
                    width: 24
                })
            })
        })
    }
}