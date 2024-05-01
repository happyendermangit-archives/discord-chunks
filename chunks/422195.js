function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
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
        p = n("373228"),
        O = n("378233"),
        R = n("419922"),
        C = n("981631"),
        g = n("957825"),
        L = n("689938"),
        v = n("681455");
    let D = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
        M = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
        y = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
        P = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
        U = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        b = (0, A.cssValueToNumber)(o.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        G = [D, D, D, D],
        w = (M + y) * 2 + D,
        B = U + 2 * b,
        k = e => {
            let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: o,
                setShouldRenderShortcut: _
            } = e, E = (0, u.useAnalyticsContext)(), S = (0, c.useExpressionPickerStore)(e => "" !== e.searchQuery), A = r.useCallback((e, a, o) => {
                var u, _;
                let c;
                let A = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === p.StickerCategoryTypes.FAVORITE,
                    m = A ? 1 : 0,
                    D = (null === (_ = n[m]) || void 0 === _ ? void 0 : _.type) === p.StickerCategoryTypes.RECENT,
                    y = n.length > 0,
                    U = n.length;
                if (0 === a && A) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": U,
                    "aria-posinset": a,
                    children: (0, i.jsx)(l.Clickable, {
                        "aria-label": L.default.Messages.CATEGORY_FAVORITE,
                        className: s()(v.stickerCategory, v.stickerCategoryGeneric, {
                            [v.stickerCategoryGenericDisabled]: y && !A,
                            [v.stickerCategoryGenericSelected]: !S && A && 0 === t
                        }),
                        onClick: o,
                        children: (0, i.jsx)(f.default, {
                            className: v.stickerCategoryGenericIcon,
                            height: P,
                            width: P
                        })
                    })
                }, "favorites");
                if (a === m && D) return (0, i.jsx)("div", {
                    role: "listitem",
                    "aria-setsize": U,
                    "aria-posinset": a,
                    children: (0, i.jsx)(l.Clickable, {
                        "aria-label": L.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                        className: s()(v.stickerCategory, v.stickerCategoryGeneric, {
                            [v.stickerCategoryGenericDisabled]: y && !D,
                            [v.stickerCategoryGenericSelected]: !S && D && t === m
                        }),
                        onClick: o,
                        children: (0, i.jsx)(T.default, {
                            className: v.stickerCategoryGenericIcon,
                            height: P,
                            width: P
                        })
                    })
                }, "recent");
                let b = t === a,
                    G = n[a],
                    w = n[a + 1],
                    B = null != w && G.type === p.StickerCategoryTypes.GUILD && w.type !== p.StickerCategoryTypes.GUILD,
                    k = G.type === p.StickerCategoryTypes.PACK,
                    V = "",
                    x = null;
                if (G.type === p.StickerCategoryTypes.GUILD || G.type === p.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                    let e = I.default.getGuild(G.id);
                    null != e && (c = e.id, V = e.name, x = (0, i.jsx)(d.default, {
                        guild: e,
                        isSelected: b
                    }))
                } else if (k) {
                    let e = N.default.getStickerPack(G.id);
                    null != e && (V = e.name, x = (0, i.jsx)(R.default, {
                        disableAnimation: !b || S,
                        size: M,
                        sticker: (0, O.getStickerPackPreviewSticker)(e)
                    }))
                }
                return (0, i.jsxs)(r.Fragment, {
                    children: [(0, i.jsx)(l.Tooltip, {
                        position: "right",
                        text: V,
                        tooltipContentClassName: v.__invalid_tooltip,
                        children: e => (0, i.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": U,
                            "aria-posinset": a,
                            children: (0, i.jsx)(l.Clickable, {
                                ...e,
                                "aria-label": V,
                                className: s()(v.stickerCategory, {
                                    [v.firstPartyCategory]: k,
                                    [v.firstPartyCategorySelected]: !S && b && k
                                }),
                                onClick: () => {
                                    G.type === p.StickerCategoryTypes.PACK && h.default.track(C.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                        location: null == E ? void 0 : E.location,
                                        tab: g.ExpressionPickerViewType.STICKER,
                                        sticker_pack_id: G.id,
                                        guild_id: c
                                    }), o()
                                },
                                children: x
                            })
                        })
                    }), B ? (0, i.jsx)("hr", {
                        className: v.guildCategorySeparator
                    }, "separator") : null]
                }, G.id)
            }, [t, E, S, n]), m = r.useCallback((e, t) => t ? w : 0, []), D = r.useCallback((e, t) => {
                let i = n[t],
                    r = n[t + 1];
                return M + (null != r && i.type === p.StickerCategoryTypes.GUILD && r.type !== p.StickerCategoryTypes.GUILD ? B : y)
            }, [n]);
            return {
                getScrollOffsetForIndex: m,
                renderCategoryListItem: A,
                rowHeight: D,
                onScroll: r.useCallback(e => {
                    var t;
                    let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
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
        } = e, a = r.useRef(null), [o, u] = r.useState(!0), d = _.StickerPickerStore.useStore(e => e.activeCategoryIndex), c = (0, m.useFilteredStickerPackCategories)(n), {
            firstStandardStickerCategoryIndex: I,
            firstStandardStickerCategoryOffsetTop: T,
            guildCategoryCount: f,
            hasFirstPartyStickerPacks: h
        } = r.useMemo(() => {
            var e, t;
            let n = c.filter(e => e.type === p.StickerCategoryTypes.GUILD).length,
                i = (null === (e = c[0]) || void 0 === e ? void 0 : e.type) === p.StickerCategoryTypes.RECENT,
                r = n + (i ? 1 : 0) + ((null === (t = c[0]) || void 0 === t ? void 0 : t.type) === p.StickerCategoryTypes.FAVORITE ? 1 : 0),
                a = r * (M + y) - y + B;
            return {
                firstStandardStickerCategoryIndex: r + 1,
                firstStandardStickerCategoryOffsetTop: a,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: null != c.find(e => e.type === p.StickerCategoryTypes.PACK)
            }
        }, [c]);
        r.useLayoutEffect(() => {
            u(f >= 7)
        }, [f]);
        let {
            renderCategoryListItem: A,
            rowHeight: N,
            onScroll: O
        } = k({
            activeIndex: d,
            stickerPickerCategories: c,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: T,
            setShouldRenderShortcut: u
        }), R = r.useCallback(e => {
            var t;
            e(I), null === (t = a.current) || void 0 === t || t.scrollTo(T)
        }, [I, T]);
        return (0, i.jsx)(E.default, {
            className: v.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: _.StickerPickerStore,
            listPadding: G,
            onScroll: O,
            renderCategoryListItem: A,
            rowCount: c.length,
            categories: c,
            categoryHeight: N,
            children: e => h && o && (0, i.jsx)(l.Clickable, {
                className: s()(v.standardStickerShortcut, {
                    [v.invisibleShortcut]: !o
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