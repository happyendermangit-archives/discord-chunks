function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("143927"),
        a = n("442837"),
        o = n("477690"),
        l = n("481060"),
        u = n("788911"),
        d = n("2052"),
        _ = n("100527"),
        c = n("906732"),
        E = n("880949"),
        I = n("806966"),
        T = n("28546"),
        f = n("691251"),
        S = n("98528"),
        h = n("551058"),
        A = n("695346"),
        m = n("430824"),
        N = n("594174"),
        O = n("695464"),
        p = n("497309"),
        R = n("898140"),
        C = n("626135"),
        g = n("624138"),
        L = n("191177"),
        D = n("285651"),
        v = n("926491"),
        M = n("373228"),
        y = n("378233"),
        P = n("419922"),
        U = n("1450"),
        b = n("491173"),
        G = n("515005"),
        w = n("652136"),
        B = n("981631"),
        k = n("957825"),
        V = n("689938"),
        F = n("626672"),
        x = n("239840");
    let H = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        Y = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
        j = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
        W = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
        K = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        z = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
        X = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        Q = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
        q = (0, g.cssValueToNumber)(o.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        J = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        Z = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        $ = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        ee = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        et = J + 2 * $ + ee,
        en = Z + 2 * $ + ee,
        ei = [j, K, z, X],
        er = [W, K, z, X],
        es = (0, g.cssValueToNumber)(o.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
        ea = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
        eo = e => {
            let {
                onSuggestionClick: t
            } = e;
            return (0, i.jsx)("div", {
                className: F.searchSuggestions,
                children: ea.map(e => (0, i.jsx)(l.Clickable, {
                    className: F.searchSuggestion,
                    onClick: () => t(e),
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: e
                    })
                }, e))
            })
        },
        el = e => {
            let {
                onSelectSticker: t,
                channel: n,
                currentUser: i
            } = e, s = (0, d.useAnalyticsContext)(), {
                analyticsLocations: a
            } = (0, c.default)(), o = (0, T.useExpressionPickerStore)(e => e.searchQuery), l = r.useCallback(e => {
                let {
                    visibleRowIndex: t,
                    columnIndex: n,
                    gridSectionIndex: i
                } = e;
                I.StickerPickerStore.setActiveCategoryIndex(i), I.StickerPickerStore.setInspectedExpressionPosition(n, t, f.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === M.StickerGridItemTypes.STICKER && I.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
            }, []);
            return {
                handleStickerInspect: l,
                handleSelect: r.useCallback(e => {
                    if (e.type !== M.StickerGridItemTypes.STICKER) return;
                    let {
                        packId: r,
                        sticker: l,
                        type: u
                    } = e, d = {
                        ...s.location,
                        object: "" === o ? B.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : B.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                    };
                    if (null != l && !(0, D.isSendableSticker)(l, i, n)) {
                        let e = v.default.getStickerPack(r);
                        null != e && (C.default.track(B.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                            sticker_id: l.id,
                            sticker_pack_id: r,
                            location: d,
                            location_stack: a
                        }), (0, w.default)({
                            stickerPack: e,
                            analyticsLocations: a
                        }));
                        let t = (0, y.isGuildSticker)(l),
                            s = (0, D.getStickerSendability)(l, i, n);
                        s === D.StickerSendability.SENDABLE_WITH_PREMIUM && (0, L.setShowPremiumUpsell)(!0), t && D.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                        return
                    }
                    u === M.StickerGridItemTypes.STICKER && null != l && t(e)
                }, [s.location, o, i, n, a, t])
            }
        },
        eu = e => {
            let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: s,
                getStickerItemProps: o,
                getStickerRowProps: u,
                gutterWidth: _,
                inspectedStickerPosition: c,
                isScrolling: I,
                isUsingKeyboardNavigation: T,
                stickersGrid: f,
                stickersCategories: S,
                filteredStickers: O,
                ownedStickerPacks: g,
                channel: L
            } = e, D = (0, d.useAnalyticsContext)(), b = (0, a.useStateFromStores)([N.default], () => N.default.getCurrentUser()), {
                handleStickerInspect: w,
                handleSelect: x
            } = el({
                onSelectSticker: s,
                channel: L,
                currentUser: b
            }), [j, W] = r.useState(!1), K = r.useCallback(e => {
                A.StickerPickerCollapsedSections.updateSetting(Array.from(e))
            }, []), z = r.useCallback(e => {
                let t = f[e];
                return null != t ? (0, i.jsx)(G.default, {
                    getStickerItemProps: o,
                    getStickerRowProps: u,
                    gutterWidth: _,
                    inspectedStickerPosition: c,
                    isScrolling: I,
                    isUsingKeyboardNavigation: T,
                    onInspect: w,
                    onSelect: x,
                    rowIndex: e,
                    stickerClassName: F.sticker,
                    stickerDescriptors: t,
                    stickerSize: n > H ? J : Z,
                    preferAnimation: n <= Y,
                    ownedStickerPacks: g,
                    isDisplayingIndividualStickers: !0,
                    channel: L,
                    currentUser: b
                }, e) : null
            }, [f, o, u, _, c, I, T, w, x, n, g, L, b]), X = r.useCallback((e, t) => (0, i.jsx)("div", {
                children: t
            }, e), []), $ = r.useCallback(function(e) {
                let {
                    isStickerPack: n = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = new Set(t), r = t.has(e);
                r ? i.delete(e) : i.add(e), C.default.track(B.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: null == D ? void 0 : D.location,
                    tab: k.ExpressionPickerViewType.STICKER,
                    collapsed: !r,
                    sticker_pack_id: n ? e : null
                }), K(i)
            }, [D, t, K]), ee = r.useCallback(e => {
                let n = S[e];
                if (null != O) {
                    let {
                        sendable: t,
                        sendableWithPremium: n
                    } = O;
                    if (0 === e && t.length > 0) return null;
                    let r = t.length > 0 && n.length > 0;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [r ? (0, i.jsx)("div", {
                            className: F.divider,
                            children: (0, i.jsx)(l.FormDivider, {})
                        }) : null, (0, i.jsx)(h.default, {
                            className: F.packHeader,
                            "aria-label": V.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                            children: V.default.Messages.STICKERS_YOU_MIGHT_LIKE
                        }, "stickers-you-might-like-header")]
                    })
                }
                switch (n.type) {
                    case M.StickerCategoryTypes.FAVORITE:
                        return (0, i.jsx)(h.default, {
                            className: F.packHeader,
                            "aria-label": V.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: n.name
                            }),
                            icon: (0, i.jsx)(R.default, {
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
                        return (0, i.jsx)(h.default, {
                            className: F.packHeader,
                            "aria-label": V.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: n.name
                            }),
                            icon: (0, i.jsx)(p.default, {}),
                            isCollapsed: t.has(n.id),
                            onClick: () => $(n.id, {
                                isStickerPack: !1
                            }),
                            children: n.name
                        }, "header-".concat(n.id));
                    case M.StickerCategoryTypes.GUILD:
                    case M.StickerCategoryTypes.EMPTY_GUILD_UPSELL: {
                        let e = m.default.getGuild(n.id);
                        if (null == e) return null;
                        return (0, i.jsx)(h.default, {
                            className: F.packHeader,
                            "aria-label": V.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: e.name
                            }),
                            icon: (0, i.jsx)(E.default, {
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
                        let e = v.default.getStickerPack(n.id);
                        if (null == e) return null;
                        return (0, i.jsx)(h.default, {
                            className: F.packHeader,
                            "aria-label": V.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                categoryName: e.name
                            }),
                            icon: (0, i.jsx)(P.default, {
                                disableAnimation: !0,
                                size: 12,
                                sticker: (0, y.getStickerPackPreviewSticker)(e)
                            }),
                            isCollapsed: t.has(e.id),
                            onClick: () => $(e.id),
                            children: e.name
                        }, "h".concat(e.id))
                    }
                }
            }, [t, S, $, O]), et = r.useCallback(e => {
                if (null != O) {
                    let {
                        sendable: t,
                        sendableWithPremium: n
                    } = O;
                    return 0 === e && t.length > 0 ? 0 : q + (t.length > 0 && n.length > 0 ? Q : 0)
                }
                return q
            }, [O]), en = r.useCallback(e => {
                let n = S[e],
                    r = t.has(n.id);
                return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != O || r ? null : (0, i.jsx)(U.default, {
                    className: F.emptyGuildUpsell,
                    guildId: n.id,
                    channel: L,
                    shouldTrackUpsellViewed: !j,
                    setTrackedUpsellViewed: W
                }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
            }, [S, t, O, L, j]);
            return {
                renderRow: z,
                renderSection: X,
                renderSectionHeader: ee,
                sectionHeaderHeight: et,
                renderSectionFooter: en,
                sectionFooterHeight: r.useCallback(e => {
                    let n = S[e],
                        i = t.has(n.id);
                    return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || i ? 0 : es
                }, [S, t])
            }
        },
        ed = r.forwardRef(function(e, t) {
            let {
                collapsedStickersCategories: n,
                gridWidth: o,
                filteredStickers: l,
                getStickerItemProps: d,
                getStickerRowProps: E,
                gutterWidth: f,
                isUsingKeyboardNavigation: h,
                onSelectSticker: A,
                rowCount: m,
                rowCountBySection: N,
                stickersCategories: p,
                stickersGrid: R,
                channel: C
            } = e, g = r.useRef(!1), L = r.useRef(null), [D, M] = I.StickerPickerStore.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.default), {
                analyticsLocations: y
            } = (0, c.default)(_.default.STICKER_PICKER), P = (0, T.useExpressionPickerStore)(e => e.searchQuery), U = (0, a.useStateFromStores)([v.default], () => v.default.getPremiumPacks()), {
                renderRow: G,
                renderSection: w,
                renderSectionFooter: B,
                sectionFooterHeight: k,
                renderSectionHeader: Y,
                sectionHeaderHeight: j
            } = eu({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: p,
                stickersGrid: R,
                isScrolling: g,
                isUsingKeyboardNavigation: h,
                onSelectSticker: A,
                getStickerItemProps: d,
                getStickerRowProps: E,
                gutterWidth: f,
                inspectedStickerPosition: M,
                filteredStickers: l,
                ownedStickerPacks: r.useMemo(() => new Set(U.map(e => e.id)), [U]),
                channel: C
            }), W = (0, S.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: D,
                isScrolling: g,
                listRef: L,
                onActiveCategoryIndexChange: I.StickerPickerStore.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: P
            });
            return (0, S.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: P,
                activeCategoryIndex: D,
                listRef: L
            }), r.useImperativeHandle(t, () => ({
                scrollTo: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = L.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                },
                getRowDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                },
                getSectionDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                },
                scrollToSectionTop: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = L.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                },
                scrollRowIntoView: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = L.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                },
                getScrollerNode: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                },
                scrollIntoViewNode: function() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return null === (e = L.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                },
                getListDimensions: function() {
                    for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    return null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
                        height: -1,
                        totalHeight: -1
                    }
                }
            }), []), (0, i.jsx)(c.AnalyticsLocationProvider, {
                value: y,
                children: (0, i.jsxs)("div", {
                    className: F.wrapper,
                    children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, i.jsx)(u.default, {
                        message: V.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                        className: F.__invalid_noSearchResultsContainer,
                        noResultsImageURL: x,
                        suggestions: (0, i.jsx)(eo, {
                            onSuggestionClick: e => (0, T.setSearchQuery)(e, !0)
                        })
                    }) : (0, i.jsx)(O.default, {
                        role: "none presentation",
                        listPadding: null != l ? er : ei,
                        onScroll: W,
                        renderRow: G,
                        renderSection: null == l ? w : void 0,
                        renderSectionHeader: Y,
                        renderSectionFooter: B,
                        rowCount: m,
                        rowCountBySection: N,
                        rowHeight: o > H ? et : en,
                        sectionHeaderHeight: j,
                        sectionFooterHeight: k,
                        stickyHeaders: !0,
                        ref: L
                    }), (0, i.jsx)(b.default, {
                        stickersGrid: R
                    })]
                })
            })
        });
    t.default = ed
}