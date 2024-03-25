function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ef
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("16470"),
        s = n("446674"),
        r = n("769846"),
        o = n("77078"),
        u = n("96386"),
        d = n("997289"),
        c = n("812204"),
        f = n("685665"),
        p = n("917764"),
        m = n("986632"),
        h = n("538282"),
        x = n("246511"),
        E = n("45961"),
        y = n("515059"),
        g = n("845579"),
        S = n("305961"),
        C = n("697218"),
        T = n("124299"),
        _ = n("841811"),
        I = n("290581"),
        v = n("599110"),
        N = n("159885"),
        A = n("570759"),
        O = n("866353"),
        R = n("364685"),
        M = n("161585"),
        k = n("24373"),
        L = n("41170"),
        P = n("801396"),
        b = n("355494"),
        j = n("77162"),
        U = n("209069"),
        D = n("49111"),
        w = n("13030"),
        F = n("782340"),
        G = n("502876"),
        H = n("327769");
    let B = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        V = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
        K = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
        W = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
        Y = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        z = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
        J = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        Z = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
        q = (0, N.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        X = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        Q = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        $ = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        ee = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        et = X + 2 * $,
        en = et + ee,
        ei = Q + 2 * $ + ee,
        el = [K, Y, z, J],
        ea = [W, Y, z, J],
        es = (0, N.cssValueToNumber)(r.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
        er = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
        eo = e => {
            let {
                onSuggestionClick: t
            } = e;
            return (0, i.jsx)("div", {
                className: G.searchSuggestions,
                children: er.map(e => (0, i.jsx)(o.Clickable, {
                    className: G.searchSuggestion,
                    onClick: () => t(e),
                    children: (0, i.jsx)(o.Text, {
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
                currentUser: i
            } = e, a = (0, d.useAnalyticsContext)(), {
                analyticsLocations: s
            } = (0, f.default)(), r = (0, h.useExpressionPickerStore)(e => e.searchQuery), o = l.useCallback(e => {
                let {
                    visibleRowIndex: t,
                    columnIndex: n,
                    gridSectionIndex: i
                } = e;
                m.StickerPickerStore.setActiveCategoryIndex(i), m.StickerPickerStore.setInspectedExpressionPosition(n, t, x.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === M.StickerGridItemTypes.STICKER && m.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
            }, []), u = l.useCallback(e => {
                if (e.type !== M.StickerGridItemTypes.STICKER) return;
                let {
                    packId: l,
                    sticker: o,
                    type: u
                } = e, d = {
                    ...a.location,
                    object: "" === r ? D.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : D.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                };
                if (null != o && !(0, O.isSendableSticker)(o, i, n)) {
                    let e = R.default.getStickerPack(l);
                    null != e && (v.default.track(D.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                        sticker_id: o.id,
                        sticker_pack_id: l,
                        location: d,
                        location_stack: s
                    }), (0, U.default)({
                        stickerPack: e,
                        analyticsLocations: s
                    }));
                    let t = (0, k.isGuildSticker)(o),
                        a = (0, O.getStickerSendability)(o, i, n);
                    a === O.StickerSendability.SENDABLE_WITH_PREMIUM && (0, A.setShowPremiumUpsell)(!0), t && O.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                    return
                }
                u === M.StickerGridItemTypes.STICKER && null != o && t(e)
            }, [a.location, r, i, n, s, t]);
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
                isScrolling: m,
                isUsingKeyboardNavigation: h,
                stickersGrid: x,
                stickersCategories: E,
                filteredStickers: T,
                ownedStickerPacks: N,
                channel: A
            } = e, O = (0, d.useAnalyticsContext)(), b = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
                handleStickerInspect: U,
                handleSelect: H
            } = eu({
                onSelectSticker: a,
                channel: A,
                currentUser: b
            }), [K, W] = l.useState(!1), Y = l.useCallback(e => {
                g.StickerPickerCollapsedSections.updateSetting(Array.from(e))
            }, []), z = l.useCallback(e => {
                let t = x[e];
                return null != t ? (0, i.jsx)(j.default, {
                    getStickerItemProps: r,
                    getStickerRowProps: u,
                    gutterWidth: c,
                    inspectedStickerPosition: f,
                    isScrolling: m,
                    isUsingKeyboardNavigation: h,
                    onInspect: U,
                    onSelect: H,
                    rowIndex: e,
                    stickerClassName: G.sticker,
                    stickerDescriptors: t,
                    stickerSize: n > B ? X : Q,
                    preferAnimation: n <= V,
                    ownedStickerPacks: N,
                    isDisplayingIndividualStickers: !0,
                    channel: A,
                    currentUser: b
                }, e) : null
            }, [x, r, u, c, f, m, h, U, H, n, N, A, b]), J = l.useCallback((e, t) => (0, i.jsx)("div", {
                children: t
            }, e), []), $ = l.useCallback(function(e) {
                let {
                    isStickerPack: n = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = new Set(t), l = t.has(e);
                l ? i.delete(e) : i.add(e), v.default.track(D.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: null == O ? void 0 : O.location,
                    tab: w.ExpressionPickerViewType.STICKER,
                    collapsed: !l,
                    sticker_pack_id: n ? e : null
                }), Y(i)
            }, [O, t, Y]), ee = l.useCallback(e => {
                let n = E[e];
                if (null != T) {
                    let {
                        sendable: t,
                        sendableWithPremium: n
                    } = T;
                    if (0 === e && t.length > 0) return null;
                    let l = t.length > 0 && n.length > 0;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [l ? (0, i.jsx)("div", {
                            className: G.divider,
                            children: (0, i.jsx)(o.FormDivider, {})
                        }) : null, (0, i.jsx)(y.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                            children: F.default.Messages.STICKERS_YOU_MIGHT_LIKE
                        }, "stickers-you-might-like-header")]
                    })
                }
                switch (n.type) {
                    case M.StickerCategoryTypes.FAVORITE:
                        return (0, i.jsx)(y.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: n.name
                            }),
                            icon: (0, i.jsx)(I.default, {
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
                        return (0, i.jsx)(y.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: n.name
                            }),
                            icon: (0, i.jsx)(_.default, {}),
                            isCollapsed: t.has(n.id),
                            onClick: () => $(n.id, {
                                isStickerPack: !1
                            }),
                            children: n.name
                        }, "header-".concat(n.id));
                    case M.StickerCategoryTypes.GUILD:
                    case M.StickerCategoryTypes.EMPTY_GUILD_UPSELL: {
                        let e = S.default.getGuild(n.id);
                        if (null == e) return null;
                        return (0, i.jsx)(y.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: e.name
                            }),
                            icon: (0, i.jsx)(p.default, {
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
                        return (0, i.jsx)(y.default, {
                            className: G.packHeader,
                            "aria-label": F.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: e.name
                            }),
                            icon: (0, i.jsx)(L.default, {
                                disableAnimation: !0,
                                size: 12,
                                sticker: (0, k.getStickerPackPreviewSticker)(e)
                            }),
                            isCollapsed: t.has(e.id),
                            onClick: () => $(e.id),
                            children: e.name
                        }, "h".concat(e.id))
                    }
                }
            }, [t, E, $, T]), et = l.useCallback(e => {
                if (null != T) {
                    let {
                        sendable: t,
                        sendableWithPremium: n
                    } = T;
                    if (0 === e && t.length > 0) return 0;
                    let i = t.length > 0 && n.length > 0 ? Z : 0;
                    return q + i
                }
                return q
            }, [T]), en = l.useCallback(e => {
                let n = E[e],
                    l = t.has(n.id);
                return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != T || l ? null : (0, i.jsx)(P.default, {
                    className: G.emptyGuildUpsell,
                    guildId: n.id,
                    channel: A,
                    shouldTrackUpsellViewed: !K,
                    setTrackedUpsellViewed: W
                }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
            }, [E, t, T, A, K]), ei = l.useCallback(e => {
                let n = E[e],
                    i = t.has(n.id);
                return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || i ? 0 : es
            }, [E, t]);
            return {
                renderRow: z,
                renderSection: J,
                renderSectionHeader: ee,
                sectionHeaderHeight: et,
                renderSectionFooter: en,
                sectionFooterHeight: ei
            }
        },
        ec = l.forwardRef(function(e, t) {
            let {
                collapsedStickersCategories: n,
                gridWidth: r,
                filteredStickers: o,
                getStickerItemProps: d,
                getStickerRowProps: p,
                gutterWidth: x,
                isUsingKeyboardNavigation: y,
                onSelectSticker: g,
                rowCount: S,
                rowCountBySection: C,
                stickersCategories: _,
                stickersGrid: I,
                channel: v
            } = e, N = l.useRef(!1), A = l.useRef(null), [O, M] = m.StickerPickerStore.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.default), {
                analyticsLocations: k
            } = (0, f.default)(c.default.STICKER_PICKER), L = (0, h.useExpressionPickerStore)(e => e.searchQuery), P = (0, s.useStateFromStores)([R.default], () => R.default.getPremiumPacks()), j = l.useMemo(() => new Set(P.map(e => e.id)), [P]), {
                renderRow: U,
                renderSection: D,
                renderSectionFooter: w,
                sectionFooterHeight: V,
                renderSectionHeader: K,
                sectionHeaderHeight: W
            } = ed({
                collapsedStickersCategories: n,
                gridWidth: r,
                stickersCategories: _,
                stickersGrid: I,
                isScrolling: N,
                isUsingKeyboardNavigation: y,
                onSelectSticker: g,
                getStickerItemProps: d,
                getStickerRowProps: p,
                gutterWidth: x,
                inspectedStickerPosition: M,
                filteredStickers: o,
                ownedStickerPacks: j,
                channel: v
            }), Y = (0, E.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: O,
                isScrolling: N,
                listRef: A,
                onActiveCategoryIndexChange: m.StickerPickerStore.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: L
            });
            return (0, E.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: L,
                activeCategoryIndex: O,
                listRef: A
            }), l.useImperativeHandle(t, () => ({
                scrollTo: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = A.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                },
                getRowDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                },
                getSectionDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                },
                scrollToSectionTop: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = A.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                },
                scrollRowIntoView: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = A.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                },
                getScrollerNode: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = A.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                },
                scrollIntoViewNode: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = A.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                },
                getListDimensions: function() {
                    for (var e, t, n = arguments.length, i = Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                    return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
                        height: -1,
                        totalHeight: -1
                    }
                }
            }), []), (0, i.jsx)(f.AnalyticsLocationProvider, {
                value: k,
                children: (0, i.jsxs)("div", {
                    className: G.wrapper,
                    children: [null != o && 0 === o.sendable.length && 0 === o.sendableWithPremium.length ? (0, i.jsx)(u.default, {
                        message: F.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                        className: G.noSearchResultsContainer,
                        noResultsImageURL: H,
                        suggestions: (0, i.jsx)(eo, {
                            onSuggestionClick: e => (0, h.setSearchQuery)(e, !0)
                        })
                    }) : (0, i.jsx)(T.default, {
                        role: "none presentation",
                        listPadding: null != o ? ea : el,
                        onScroll: Y,
                        renderRow: U,
                        renderSection: null == o ? D : void 0,
                        renderSectionHeader: K,
                        renderSectionFooter: w,
                        rowCount: S,
                        rowCountBySection: C,
                        rowHeight: r > B ? en : ei,
                        sectionHeaderHeight: W,
                        sectionFooterHeight: V,
                        stickyHeaders: !0,
                        ref: A
                    }), (0, i.jsx)(b.default, {
                        stickersGrid: I
                    })]
                })
            })
        });
    var ef = ec
}