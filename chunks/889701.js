function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ee
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("483366"),
        s = n.n(a),
        r = n("16470"),
        o = n("446674"),
        u = n("769846"),
        d = n("77078"),
        c = n("997289"),
        f = n("812204"),
        m = n("685665"),
        p = n("986632"),
        h = n("538282"),
        E = n("45961"),
        g = n("626301"),
        C = n("716849"),
        S = n("552917"),
        T = n("917247"),
        v = n("845579"),
        I = n("697218"),
        _ = n("599110"),
        N = n("159885"),
        A = n("570759"),
        x = n("866353"),
        y = n("178207"),
        O = n("256860"),
        R = n("364685"),
        M = n("161585"),
        L = n("585948"),
        P = n("234175"),
        b = n("451300"),
        j = n("668333"),
        U = n("313790"),
        D = n("908408"),
        k = n("641680"),
        w = n("560241"),
        F = n("49111"),
        G = n("253763");
    let B = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        H = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        V = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        K = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        W = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
        Y = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        z = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        Z = (0, N.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        J = Y + 2 * Z,
        q = z + 2 * Z,
        X = s(y.trackStickerSearchEmpty, 200),
        Q = s(y.trackStickerSearchResultsViewed, 200),
        $ = i.forwardRef(function(e, t) {
            var a;
            let {
                containerWidth: s,
                channel: u,
                onSelectSticker: N,
                closePopout: Y
            } = e, {
                location: z
            } = (0, c.useAnalyticsContext)(), {
                AnalyticsLocationProvider: Z
            } = (0, m.default)(f.default.STICKER_PICKER);
            (0, C.useMaybeFetchPremiumLikelihood)(S.default);
            let $ = (null === (a = (0, T.usePremiumTrialOffer)()) || void 0 === a ? void 0 : a.subscription_trial) != null,
                ee = i.useRef(null),
                et = i.useRef(null),
                en = i.useRef(null),
                el = (0, A.useStickerPickerUpsellStore)(e => e.showPremiumUpsell),
                [ei, ea] = (0, h.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], r.default),
                es = i.useRef("");
            i.useImperativeHandle(t, () => ({
                onPickerOpen: eb
            }));
            let er = (0, O.useFilteredStickerPackCategories)(u),
                eo = 0 === er.filter(e => e.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
                eu = (0, E.useExpressionPickerGridWidth)({
                    gridWrapperRef: ee,
                    containerWidth: s,
                    showingEmptyState: eo,
                    listPaddingLeft: H,
                    listScrollbarWidth: 8
                }),
                ed = v.StickerPickerCollapsedSections.useSetting(),
                ec = i.useMemo(() => new Set(ed), [ed]),
                ef = (0, o.useStateFromStores)([I.default], () => I.default.getCurrentUser()),
                em = i.useMemo(() => (0, k.getFilteredStickers)(ei, ef, u), [ei, ef, u]),
                ep = (0, O.useFavoriteStickers)(),
                eh = (0, O.useLatestFrecentStickers)(),
                eE = (0, o.useStateFromStoresObject)([R.default], () => R.default.getAllGuildStickers()),
                {
                    sendable: eg = [],
                    sendableWithPremium: eC = []
                } = null != em ? em : {},
                eS = eg.length + eC.length,
                eT = i.useCallback(e => {
                    "" === ei ? (0, y.trackStickerSelect)(e) : (0, y.trackStickerSearchSelect)(e, ei, eS), N(e.sticker, M.StickerSelectLocation.STICKER_PICKER)
                }, [N, ei, eS]),
                ev = null != eu && eu > B,
                {
                    rowCount: eI,
                    rowCountBySection: e_,
                    stickersGrid: eN,
                    gutterWidth: eA,
                    columnCounts: ex
                } = (0, O.useStickersGrid)({
                    filteredStickers: em,
                    stickersCategories: er,
                    collapsedStickersCategories: ec,
                    listWidth: eu,
                    listPaddingRight: V,
                    stickerNodeMargin: ev ? K : W,
                    stickerNodeWidth: ev ? J : q
                }),
                ey = i.useCallback((e, t) => {
                    let {
                        location: i
                    } = t;
                    switch (e.type) {
                        case M.StickerGridItemTypes.CREATE_STICKER:
                            _.default.track(F.AnalyticEvents.OPEN_MODAL, {
                                type: F.AnalyticsSections.CREATE_STICKER_MODAL,
                                location: z
                            }), (0, d.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("54666").then(n.bind(n, "54666"));
                                return n => (0, l.jsx)(t, {
                                    guildId: e.guild_id,
                                    ...n
                                })
                            });
                            break;
                        case M.StickerGridItemTypes.STICKER:
                            null != e.sticker && (0, x.isSendableSticker)(e.sticker, ef, u) && eT(e)
                    }
                }, [z, ef, u, eT]),
                {
                    getItemProps: eO,
                    getRowProps: eR,
                    gridContainerProps: eM,
                    handleGridContainerKeyDown: eL,
                    isUsingKeyboardNavigation: eP
                } = (0, L.useKeyboardNavigation)({
                    columnCounts: ex,
                    stickersListRef: et,
                    stickersGrid: eN,
                    onGridItemSelect: ey,
                    store: p.StickerPickerStore,
                    setInspectedStickerPosition: p.StickerPickerStore.setInspectedExpressionPosition,
                    gridNavigatorId: w.GRID_NAVIGATOR_ID
                });
            i.useEffect(() => p.StickerPickerStore.resetStoreState, []);
            let eb = () => {
                let e = u.getGuildId(),
                    t = [];
                if (null !== e) {
                    var n;
                    t = null !== (n = R.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
                }
                let l = 0;
                null != eE && [...eE.values()].forEach(e => {
                    l += e.length
                }), (0, y.trackStickerPickerOpen)({
                    containerWidth: s,
                    favoriteStickers: ep,
                    frequentlyUsedStickers: eh,
                    guildStickers: t,
                    stickersTotal: l
                })
            };
            i.useEffect(() => {
                "" === es.current && "" !== ei && (0, y.trackStickerSearchStart)(), es.current = ei
            }, [ei]), i.useEffect(() => {
                0 === eS ? X(ei) : Q(ei, eS, ea)
            }, [ei, eS, ea]), i.useLayoutEffect(() => {
                var e;
                null === (e = en.current) || void 0 === e || e.focus()
            }, []);
            let ej = i.useCallback(() => {
                Y(), _.default.track(F.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                    location_section: F.AnalyticsSections.STICKER_PICKER_UPSELL
                }), (0, g.navigateToPremiumMarketingPage)()
            }, [Y]);
            return (0, l.jsxs)(Z, {
                children: [!($ && eo) && (0, l.jsx)("div", {
                    className: G.header,
                    children: (0, l.jsx)(U.default, {
                        ref: en,
                        onKeyDown: eL,
                        stickersListRef: et,
                        channel: u
                    })
                }), eo ? (0, l.jsx)(b.default, {
                    className: G.emptyState,
                    onClose: Y
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        ref: ee,
                        className: G.listWrapper,
                        id: w.GRID_NAVIGATOR_ID,
                        ...eM,
                        children: null != eu ? (0, l.jsx)(j.default, {
                            ref: et,
                            collapsedStickersCategories: ec,
                            filteredStickers: em,
                            getStickerItemProps: eO,
                            getStickerRowProps: eR,
                            gridWidth: eu,
                            gutterWidth: eA,
                            isUsingKeyboardNavigation: eP,
                            onSelectSticker: eT,
                            rowCount: eI,
                            rowCountBySection: e_,
                            stickersCategories: er,
                            stickersGrid: eN,
                            channel: u
                        }) : null
                    }), (0, l.jsx)(P.default, {
                        stickersListRef: et,
                        channel: u
                    })]
                }), el && (0, l.jsx)(D.StickersPremiumUpsell, {
                    onLearnMore: ej
                })]
            })
        });
    var ee = i.forwardRef((e, t) => ((0, O.useFetchStickerPacks)(), (0, l.jsx)("div", {
        className: G.wrapper,
        id: w.STICKER_PICKER_TAB_PANEL_ID,
        "aria-labelledby": w.STICKER_PICKER_TAB_ID,
        role: "tabpanel",
        children: e.isLoading ? (0, l.jsx)(d.Spinner, {
            className: G.loadingIndicator
        }) : (0, l.jsx)($, {
            ...e,
            ref: t
        })
    })))
}