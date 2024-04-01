function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("477690"),
        l = n("481060"),
        u = n("2052"),
        d = n("880949"),
        _ = n("806966"),
        c = n("28546"),
        E = n("254494"),
        I = n("430824"),
        T = n("497309"),
        f = n("898140"),
        S = n("68736"),
        h = n("626135"),
        A = n("624138"),
        m = n("453070"),
        N = n("926491"),
        O = n("373228"),
        p = n("378233"),
        R = n("419922"),
        C = n("981631"),
        g = n("957825"),
        L = n("689938"),
        D = n("76302");
    let v = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
        M = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
        y = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
        P = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
        U = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        b = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        G = [v, v, v, v],
        w = (M + y) * 2 + v,
        B = U + 2 * b,
        k = e => {
            let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: o,
                setShouldRenderShortcut: _
            } = e, E = (0, u.useAnalyticsContext)(), S = (0, c.useExpressionPickerStore)(e => "" !== e.searchQuery), A = r.useCallback((e, s, o) => {
                var u, _;
                let c;
                let A = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === O.StickerCategoryTypes.FAVORITE,
                    m = A ? 1 : 0,
                    v = (null === (_ = n[m]) || void 0 === _ ? void 0 : _.type) === O.StickerCategoryTypes.RECENT,
                    y = n.length > 0,
                    U = n.length;
                if (0 === s && A) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": U,
                    "aria-posinset": s,
                    children: (0, i.jsx)(l.Clickable, {
                        "aria-label": L.default.Messages.CATEGORY_FAVORITE,
                        className: a()(D.stickerCategory, D.stickerCategoryGeneric, {
                            [D.stickerCategoryGenericDisabled]: y && !A,
                            [D.stickerCategoryGenericSelected]: !S && A && 0 === t
                        }),
                        onClick: o,
                        children: (0, i.jsx)(f.default, {
                            className: D.stickerCategoryGenericIcon,
                            height: P,
                            width: P
                        })
                    })
                }, "favorites");
                if (s === m && v) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": U,
                    "aria-posinset": s,
                    children: (0, i.jsx)(l.Clickable, {
                        "aria-label": L.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                        className: a()(D.stickerCategory, D.stickerCategoryGeneric, {
                            [D.stickerCategoryGenericDisabled]: y && !v,
                            [D.stickerCategoryGenericSelected]: !S && v && t === m
                        }),
                        onClick: o,
                        children: (0, i.jsx)(T.default, {
                            className: D.stickerCategoryGenericIcon,
                            height: P,
                            width: P
                        })
                    })
                }, "recent");
                let b = t === s,
                    G = n[s],
                    w = n[s + 1],
                    B = null != w && G.type === O.StickerCategoryTypes.GUILD && w.type !== O.StickerCategoryTypes.GUILD,
                    k = G.type === O.StickerCategoryTypes.PACK,
                    V = "",
                    F = null;
                if (G.type === O.StickerCategoryTypes.GUILD || G.type === O.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                    let e = I.default.getGuild(G.id);
                    null != e && (c = e.id, V = e.name, F = (0, i.jsx)(d.default, {
                        guild: e,
                        isSelected: b
                    }))
                } else if (k) {
                    let e = N.default.getStickerPack(G.id);
                    null != e && (V = e.name, F = (0, i.jsx)(R.default, {
                        disableAnimation: !b || S,
                        size: M,
                        sticker: (0, p.getStickerPackPreviewSticker)(e)
                    }))
                }
                return (0, i.jsxs)(r.Fragment, {
                    children: [(0, i.jsx)(l.Tooltip, {
                        position: "right",
                        text: V,
                        tooltipContentClassName: D.__invalid_tooltip,
                        children: e => (0, i.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": U,
                            "aria-posinset": s,
                            children: (0, i.jsx)(l.Clickable, {
                                ...e,
                                "aria-label": V,
                                className: a()(D.stickerCategory, {
                                    [D.firstPartyCategory]: k,
                                    [D.firstPartyCategorySelected]: !S && b && k
                                }),
                                onClick: () => {
                                    G.type === O.StickerCategoryTypes.PACK && h.default.track(C.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                        location: null == E ? void 0 : E.location,
                                        tab: g.ExpressionPickerViewType.STICKER,
                                        sticker_pack_id: G.id,
                                        guild_id: c
                                    }), o()
                                },
                                children: F
                            })
                        })
                    }), B ? (0, i.jsx)("hr", {
                        className: D.guildCategorySeparator
                    }, "separator") : null]
                }, G.id)
            }, [t, E, S, n]), m = r.useCallback((e, t) => t ? w : 0, []), v = r.useCallback((e, t) => {
                let i = n[t],
                    r = n[t + 1];
                return M + (null != r && i.type === O.StickerCategoryTypes.GUILD && r.type !== O.StickerCategoryTypes.GUILD ? B : y)
            }, [n]);
            return {
                getScrollOffsetForIndex: m,
                renderCategoryListItem: A,
                rowHeight: v,
                onScroll: r.useCallback(e => {
                    var t;
                    let n = null === (t = s.current) || void 0 === t ? void 0 : t.getListDimensions();
                    if (null == n) return;
                    let i = e + n.height;
                    _(i - U < o)
                }, [o])
            }
        };
    t.default = e => {
        let {
            stickersListRef: t,
            channel: n
        } = e, s = r.useRef(null), [o, u] = r.useState(!0), d = _.StickerPickerStore.useStore(e => e.activeCategoryIndex), c = (0, m.useFilteredStickerPackCategories)(n), {
            firstStandardStickerCategoryIndex: I,
            firstStandardStickerCategoryOffsetTop: T,
            guildCategoryCount: f,
            hasFirstPartyStickerPacks: h
        } = r.useMemo(() => {
            var e, t;
            let n = c.filter(e => e.type === O.StickerCategoryTypes.GUILD).length,
                i = (null === (e = c[0]) || void 0 === e ? void 0 : e.type) === O.StickerCategoryTypes.RECENT,
                r = n + (i ? 1 : 0) + ((null === (t = c[0]) || void 0 === t ? void 0 : t.type) === O.StickerCategoryTypes.FAVORITE ? 1 : 0),
                s = r * (M + y) - y + B;
            return {
                firstStandardStickerCategoryIndex: r + 1,
                firstStandardStickerCategoryOffsetTop: s,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: null != c.find(e => e.type === O.StickerCategoryTypes.PACK)
            }
        }, [c]);
        r.useLayoutEffect(() => {
            u(f >= 7)
        }, [f]);
        let {
            renderCategoryListItem: A,
            rowHeight: N,
            onScroll: p
        } = k({
            activeIndex: d,
            stickerPickerCategories: c,
            categoryListRef: s,
            firstStandardStickerCategoryOffsetTop: T,
            setShouldRenderShortcut: u
        }), R = r.useCallback(e => {
            var t;
            e(I), null === (t = s.current) || void 0 === t || t.scrollTo(T)
        }, [I, T]);
        return (0, i.jsx)(E.default, {
            className: D.categoryList,
            categoryListRef: s,
            expressionsListRef: t,
            store: _.StickerPickerStore,
            listPadding: G,
            onScroll: p,
            renderCategoryListItem: A,
            rowCount: c.length,
            categories: c,
            categoryHeight: N,
            children: e => h && o && (0, i.jsx)(l.Clickable, {
                className: a()(D.standardStickerShortcut, {
                    [D.invisibleShortcut]: !o
                }),
                onClick: () => R(e),
                children: (0, i.jsx)(S.default, {
                    height: 24,
                    width: 24
                })
            })
        })
    }
}