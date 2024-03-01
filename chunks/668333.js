function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ef
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("16470"),
        s = n("446674"),
        r = n("769846"),
        o = n("77078"),
        u = n("96386"),
        d = n("997289"),
        c = n("812204"),
        f = n("685665"),
        m = n("917764"),
        p = n("986632"),
        h = n("538282"),
        E = n("246511"),
        g = n("45961"),
        C = n("515059"),
        S = n("845579"),
        T = n("305961"),
        v = n("697218"),
        I = n("124299"),
        _ = n("841811"),
        N = n("290581"),
        A = n("599110"),
        x = n("159885"),
        y = n("570759"),
        O = n("866353"),
        R = n("364685"),
        M = n("161585"),
        L = n("24373"),
        P = n("41170"),
        b = n("801396"),
        j = n("355494"),
        U = n("77162"),
        D = n("209069"),
        k = n("49111"),
        w = n("13030"),
        F = n("782340"),
        G = n("502876"),
        B = n("327769");
    let H = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        V = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
        K = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
        W = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
        Y = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        z = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
        Z = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        J = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
        q = (0, x.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        X = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        Q = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        $ = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        ee = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        et = X + 2 * $,
        en = et + ee,
        el = Q + 2 * $ + ee,
        ei = [K, Y, z, Z],
        ea = [W, Y, z, Z],
        es = (0, x.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
        er = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
        eo = e => {
            let {
                onSuggestionClick: t
            } = e;
            return (0, l.jsx)("div", {
                className: G.searchSuggestions,
                children: er.map(e => (0, l.jsx)(o.Clickable, {
                    className: G.searchSuggestion,
                    onClick: () => t(e),
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: e
                    })
                }, e))
            })
        },
        eu = e => {
            let {
                onSelectSticker: t,
                channel: n,
                currentUser: l
            } = e, a = (0, d.useAnalyticsContext)(), {
                analyticsLocations: s
            } = (0, f.default)(), r = (0, h.useExpressionPickerStore)(e => e.searchQuery), o = i.useCallback(e => {
                let {
                    visibleRowIndex: t,
                    columnIndex: n,
                    gridSectionIndex: l
                } = e;
                p.StickerPickerStore.setActiveCategoryIndex(l), p.StickerPickerStore.setInspectedExpressionPosition(n, t, E.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === M.StickerGridItemTypes.STICKER && p.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
            }, []), u = i.useCallback(e => {
                if (e.type !== M.StickerGridItemTypes.STICKER) return;
                let {
                    packId: i,
                    sticker: o,
                    type: u
                } = e, d = {
                    ...a.location,
                    object: "" === r ? k.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : k.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                };
                if (null != o && !(0, O.isSendableSticker)(o, l, n)) {
                    let e = R.default.getStickerPack(i);
                    null != e && (A.default.track(k.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                        sticker_id: o.id,
                        sticker_pack_id: i,
                        location: d,
                        location_stack: s
                    }), (0, D.default)({
                        stickerPack: e,
                        analyticsLocations: s
                    }));
                    let t = (0, L.isGuildSticker)(o),
                        a = (0, O.getStickerSendability)(o, l, n);
                    a === O.StickerSendability.SENDABLE_WITH_PREMIUM && (0, y.setShowPremiumUpsell)(!0), t && O.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                    return
                }
                u === M.StickerGridItemTypes.STICKER && null != o && t(e)
            }, [a.location, r, l, n, s, t]);
            return {
                handleStickerInspect: o,
                handleSelect: u
            }
        },
        ed = e => {
            let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: a,
                getStickerItemProps: r,
                getStickerRowProps: u,
                gutterWidth: c,
                inspectedStickerPosition: f,
                isScrolling: p,
                isUsingKeyboardNavigation: h,
                stickersGrid: E,
                stickersCategories: g,
                filteredStickers: I,
                ownedStickerPacks: x,
                channel: y
            } = e, O = (0, d.useAnalyticsContext)(), j = (0, s.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
                handleStickerInspect: D,
                handleSelect: B
            } = eu({
                onSelectSticker: a,
                channel: y,
                currentUser: j
            }), [K, W] = i.useState(!1), Y = i.useCallback(e => {
                S.StickerPickerCollapsedSections.updateSetting(Array.from(e))
            }, []), z = i.useCallback(e => {
                let t = E[e];
                return null != t ? (0, l.jsx)(U.default, {
                    getStickerItemProps: r,
                    getStickerRowProps: u,
                    gutterWidth: c,
                    inspectedStickerPosition: f,
                    isScrolling: p,
                    isUsingKeyboardNavigation: h,
                    onInspect: D,
                    onSelect: B,
                    rowIndex: e,
                    stickerClassName: G.sticker,
                    stickerDescriptors: t,
                    stickerSize: n > H ? X : Q,
                    preferAnimation: n <= V,
                    ownedStickerPacks: x,
                    isDisplayingIndividualStickers: !0,
                    channel: y,
                    currentUser: j
                }, e) : null
            }, [E, r, u, c, f, p, h, D, B, n, x, y, j]), Z = i.useCallback((e, t) => (0, l.jsx)("div", {
                children: t
            }, e), []), $ = i.useCallback(function(e) {
                let {
                    isStickerPack: n = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = new Set(t), i = t.has(e);
                i ? l.delete(e) : l.add(e), A.default.track(k.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: null == O ? void 0 : O.location,
                    tab: w.ExpressionPickerViewType.STICKER,
                    collapsed: !i,
                    sticker_pack_id: n ? e : null
                }), Y(l)
            }, [O, t, Y]), ee = i.useCallback(e => {
                let n = g[e];
                if (null != I) {
                    let {
                        sendable: t,
                        sendableWithPremium: n
                    } = I;
                    if (0 === e && t.length > 0) return null;
                    let i = t.length > 0 && n.length > 0;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [i ? (0, l.jsx)("div", {
                            className: G.divider,
                            children: (0, l.jsx)(o.FormDivider, {})
                        }) : null, (0, l.jsx)(C.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                            children: F.default.Messages.STICKERS_YOU_MIGHT_LIKE
                        }, "stickers-you-might-like-header")]
                    })
                }
                switch (n.type) {
                    case M.StickerCategoryTypes.FAVORITE:
                        return (0, l.jsx)(C.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: n.name
                            }),
                            icon: (0, l.jsx)(N.default, {
                                height: 16,
                                width: 16
                            }),
                            isCollapsed: t.has(n.id),
                            onClick: () => $(n.id, {
                                isStickerPack: !1
                            }),
                            children: n.name
                        }, "header-".concat(n.id));
                    case M.StickerCategoryTypes.RECENT:
                        return (0, l.jsx)(C.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: n.name
                            }),
                            icon: (0, l.jsx)(_.default, {}),
                            isCollapsed: t.has(n.id),
                            onClick: () => $(n.id, {
                                isStickerPack: !1
                            }),
                            children: n.name
                        }, "header-".concat(n.id));
                    case M.StickerCategoryTypes.GUILD:
                    case M.StickerCategoryTypes.EMPTY_GUILD_UPSELL: {
                        let e = T.default.getGuild(n.id);
                        if (null == e) return null;
                        return (0, l.jsx)(C.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: e.name
                            }),
                            icon: (0, l.jsx)(m.default, {
                                guild: e,
                                height: 16,
                                width: 16
                            }),
                            isCollapsed: t.has(e.id),
                            onClick: () => $(e.id),
                            children: e.name
                        }, "h".concat(e.id))
                    }
                    case M.StickerCategoryTypes.PACK: {
                        let e = R.default.getStickerPack(n.id);
                        if (null == e) return null;
                        return (0, l.jsx)(C.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: e.name
                            }),
                            icon: (0, l.jsx)(P.default, {
                                disableAnimation: !0,
                                size: 12,
                                sticker: (0, L.getStickerPackPreviewSticker)(e)
                            }),
                            isCollapsed: t.has(e.id),
                            onClick: () => $(e.id),
                            children: e.name
                        }, "h".concat(e.id))
                    }
                }
            }, [t, g, $, I]), et = i.useCallback(e => {
                if (null != I) {
                    let {
                        sendable: t,
                        sendableWithPremium: n
                    } = I;
                    if (0 === e && t.length > 0) return 0;
                    let l = t.length > 0 && n.length > 0 ? J : 0;
                    return q + l
                }
                return q
            }, [I]), en = i.useCallback(e => {
                let n = g[e],
                    i = t.has(n.id);
                return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != I || i ? null : (0, l.jsx)(b.default, {
                    className: G.emptyGuildUpsell,
                    guildId: n.id,
                    channel: y,
                    shouldTrackUpsellViewed: !K,
                    setTrackedUpsellViewed: W
                }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
            }, [g, t, I, y, K]), el = i.useCallback(e => {
                let n = g[e],
                    l = t.has(n.id);
                return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || l ? 0 : es
            }, [g, t]);
            return {
                renderRow: z,
                renderSection: Z,
                renderSectionHeader: ee,
                sectionHeaderHeight: et,
                renderSectionFooter: en,
                sectionFooterHeight: el
            }
        },
        ec = i.forwardRef(function(e, t) {
            let {
                collapsedStickersCategories: n,
                gridWidth: r,
                filteredStickers: o,
                getStickerItemProps: d,
                getStickerRowProps: m,
                gutterWidth: E,
                isUsingKeyboardNavigation: C,
                onSelectSticker: S,
                rowCount: T,
                rowCountBySection: v,
                stickersCategories: _,
                stickersGrid: N,
                channel: A
            } = e, x = i.useRef(!1), y = i.useRef(null), [O, M] = p.StickerPickerStore.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.default), {
                AnalyticsLocationProvider: L
            } = (0, f.default)(c.default.STICKER_PICKER), P = (0, h.useExpressionPickerStore)(e => e.searchQuery), b = (0, s.useStateFromStores)([R.default], () => R.default.getPremiumPacks()), U = i.useMemo(() => new Set(b.map(e => e.id)), [b]), {
                renderRow: D,
                renderSection: k,
                renderSectionFooter: w,
                sectionFooterHeight: V,
                renderSectionHeader: K,
                sectionHeaderHeight: W
            } = ed({
                collapsedStickersCategories: n,
                gridWidth: r,
                stickersCategories: _,
                stickersGrid: N,
                isScrolling: x,
                isUsingKeyboardNavigation: C,
                onSelectSticker: S,
                getStickerItemProps: d,
                getStickerRowProps: m,
                gutterWidth: E,
                inspectedStickerPosition: M,
                filteredStickers: o,
                ownedStickerPacks: U,
                channel: A
            }), Y = (0, g.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: O,
                isScrolling: x,
                listRef: y,
                onActiveCategoryIndexChange: p.StickerPickerStore.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: P
            });
            return (0, g.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: P,
                activeCategoryIndex: O,
                listRef: y
            }), i.useImperativeHandle(t, () => ({
                scrollTo: function() {
                    for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                },
                getRowDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                },
                getSectionDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                },
                scrollToSectionTop: function() {
                    for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                },
                scrollRowIntoView: function() {
                    for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                },
                getScrollerNode: function() {
                    for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    return null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                },
                scrollIntoViewNode: function() {
                    for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    return null === (e = y.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                },
                getListDimensions: function() {
                    for (var e, t, n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                    return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== t ? t : {
                        height: -1,
                        totalHeight: -1
                    }
                }
            }), []), (0, l.jsx)(L, {
                children: (0, l.jsxs)("div", {
                    className: G.wrapper,
                    children: [null != o && 0 === o.sendable.length && 0 === o.sendableWithPremium.length ? (0, l.jsx)(u.default, {
                        message: F.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                        className: G.noSearchResultsContainer,
                        noResultsImageURL: B,
                        suggestions: (0, l.jsx)(eo, {
                            onSuggestionClick: e => (0, h.setSearchQuery)(e, !0)
                        })
                    }) : (0, l.jsx)(I.default, {
                        role: "none presentation",
                        listPadding: null != o ? ea : ei,
                        onScroll: Y,
                        renderRow: D,
                        renderSection: null == o ? k : void 0,
                        renderSectionHeader: K,
                        renderSectionFooter: w,
                        rowCount: T,
                        rowCountBySection: v,
                        rowHeight: r > H ? en : el,
                        sectionHeaderHeight: W,
                        sectionFooterHeight: V,
                        stickyHeaders: !0,
                        ref: y
                    }), (0, l.jsx)(j.default, {
                        stickersGrid: N
                    })]
                })
            })
        });
    var ef = ec
}