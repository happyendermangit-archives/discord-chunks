function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ee
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("483366"),
        s = n.n(a),
        r = n("16470"),
        o = n("446674"),
        u = n("769846"),
        d = n("77078"),
        c = n("997289"),
        f = n("812204"),
        p = n("685665"),
        m = n("986632"),
        h = n("538282"),
        x = n("45961"),
        E = n("626301"),
        y = n("716849"),
        g = n("552917"),
        S = n("917247"),
        C = n("845579"),
        I = n("697218"),
        T = n("599110"),
        _ = n("159885"),
        v = n("570759"),
        N = n("866353"),
        A = n("178207"),
        O = n("256860"),
        R = n("364685"),
        M = n("161585"),
        k = n("585948"),
        L = n("234175"),
        b = n("451300"),
        P = n("668333"),
        j = n("313790"),
        U = n("908408"),
        D = n("641680"),
        w = n("560241"),
        F = n("49111"),
        G = n("253763");
    let B = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        H = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        V = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        K = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        W = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
        Y = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        z = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        Z = (0, _.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        J = Y + 2 * Z,
        q = z + 2 * Z,
        X = s(A.trackStickerSearchEmpty, 200),
        Q = s(A.trackStickerSearchResultsViewed, 200),
        $ = l.forwardRef(function(e, t) {
            var a;
            let {
                containerWidth: s,
                channel: u,
                onSelectSticker: _,
                closePopout: Y
            } = e, {
                location: z
            } = (0, c.useAnalyticsContext)(), {
                AnalyticsLocationProvider: Z
            } = (0, p.default)(f.default.STICKER_PICKER);
            (0, y.useMaybeFetchPremiumLikelihood)(g.default);
            let $ = (null === (a = (0, S.usePremiumTrialOffer)()) || void 0 === a ? void 0 : a.subscription_trial) != null,
                ee = l.useRef(null),
                et = l.useRef(null),
                en = l.useRef(null),
                ei = (0, v.useStickerPickerUpsellStore)(e => e.showPremiumUpsell),
                [el, ea] = (0, h.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], r.default),
                es = l.useRef("");
            l.useImperativeHandle(t, () => ({
                onPickerOpen: eb
            }));
            let er = (0, O.useFilteredStickerPackCategories)(u),
                eo = 0 === er.filter(e => e.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
                eu = (0, x.useExpressionPickerGridWidth)({
                    gridWrapperRef: ee,
                    containerWidth: s,
                    showingEmptyState: eo,
                    listPaddingLeft: H,
                    listScrollbarWidth: 8
                }),
                ed = C.StickerPickerCollapsedSections.useSetting(),
                ec = l.useMemo(() => new Set(ed), [ed]),
                ef = (0, o.useStateFromStores)([I.default], () => I.default.getCurrentUser()),
                ep = l.useMemo(() => (0, D.getFilteredStickers)(el, ef, u), [el, ef, u]),
                em = (0, O.useFavoriteStickers)(),
                eh = (0, O.useLatestFrecentStickers)(),
                ex = (0, o.useStateFromStoresObject)([R.default], () => R.default.getAllGuildStickers()),
                {
                    sendable: eE = [],
                    sendableWithPremium: ey = []
                } = null != ep ? ep : {},
                eg = eE.length + ey.length,
                eS = l.useCallback(e => {
                    "" === el ? (0, A.trackStickerSelect)(e) : (0, A.trackStickerSearchSelect)(e, el, eg), _(e.sticker, M.StickerSelectLocation.STICKER_PICKER)
                }, [_, el, eg]),
                eC = null != eu && eu > B,
                {
                    rowCount: eI,
                    rowCountBySection: eT,
                    stickersGrid: e_,
                    gutterWidth: ev,
                    columnCounts: eN
                } = (0, O.useStickersGrid)({
                    filteredStickers: ep,
                    stickersCategories: er,
                    collapsedStickersCategories: ec,
                    listWidth: eu,
                    listPaddingRight: V,
                    stickerNodeMargin: eC ? K : W,
                    stickerNodeWidth: eC ? J : q
                }),
                eA = l.useCallback((e, t) => {
                    let {
                        location: l
                    } = t;
                    switch (e.type) {
                        case M.StickerGridItemTypes.CREATE_STICKER:
                            T.default.track(F.AnalyticEvents.OPEN_MODAL, {
                                type: F.AnalyticsSections.CREATE_STICKER_MODAL,
                                location: z
                            }), (0, d.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("54666").then(n.bind(n, "54666"));
                                return n => (0, i.jsx)(t, {
                                    guildId: e.guild_id,
                                    ...n
                                })
                            });
                            break;
                        case M.StickerGridItemTypes.STICKER:
                            null != e.sticker && (0, N.isSendableSticker)(e.sticker, ef, u) && eS(e)
                    }
                }, [z, ef, u, eS]),
                {
                    getItemProps: eO,
                    getRowProps: eR,
                    gridContainerProps: eM,
                    handleGridContainerKeyDown: ek,
                    isUsingKeyboardNavigation: eL
                } = (0, k.useKeyboardNavigation)({
                    columnCounts: eN,
                    stickersListRef: et,
                    stickersGrid: e_,
                    onGridItemSelect: eA,
                    store: m.StickerPickerStore,
                    setInspectedStickerPosition: m.StickerPickerStore.setInspectedExpressionPosition,
                    gridNavigatorId: w.GRID_NAVIGATOR_ID
                });
            l.useEffect(() => m.StickerPickerStore.resetStoreState, []);
            let eb = () => {
                let e = u.getGuildId(),
                    t = [];
                if (null !== e) {
                    var n;
                    t = null !== (n = R.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
                }
                let i = 0;
                null != ex && [...ex.values()].forEach(e => {
                    i += e.length
                }), (0, A.trackStickerPickerOpen)({
                    containerWidth: s,
                    favoriteStickers: em,
                    frequentlyUsedStickers: eh,
                    guildStickers: t,
                    stickersTotal: i
                })
            };
            l.useEffect(() => {
                "" === es.current && "" !== el && (0, A.trackStickerSearchStart)(), es.current = el
            }, [el]), l.useEffect(() => {
                0 === eg ? X(el) : Q(el, eg, ea)
            }, [el, eg, ea]), l.useLayoutEffect(() => {
                var e;
                null === (e = en.current) || void 0 === e || e.focus()
            }, []);
            let eP = l.useCallback(() => {
                Y(), T.default.track(F.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                    location_section: F.AnalyticsSections.STICKER_PICKER_UPSELL
                }), (0, E.navigateToPremiumMarketingPage)()
            }, [Y]);
            return (0, i.jsxs)(Z, {
                children: [!($ && eo) && (0, i.jsx)("div", {
                    className: G.header,
                    children: (0, i.jsx)(j.default, {
                        ref: en,
                        onKeyDown: ek,
                        stickersListRef: et,
                        channel: u
                    })
                }), eo ? (0, i.jsx)(b.default, {
                    className: G.emptyState,
                    onClose: Y
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        ref: ee,
                        className: G.listWrapper,
                        id: w.GRID_NAVIGATOR_ID,
                        ...eM,
                        children: null != eu ? (0, i.jsx)(P.default, {
                            ref: et,
                            collapsedStickersCategories: ec,
                            filteredStickers: ep,
                            getStickerItemProps: eO,
                            getStickerRowProps: eR,
                            gridWidth: eu,
                            gutterWidth: ev,
                            isUsingKeyboardNavigation: eL,
                            onSelectSticker: eS,
                            rowCount: eI,
                            rowCountBySection: eT,
                            stickersCategories: er,
                            stickersGrid: e_,
                            channel: u
                        }) : null
                    }), (0, i.jsx)(L.default, {
                        stickersListRef: et,
                        channel: u
                    })]
                }), ei && (0, i.jsx)(U.StickersPremiumUpsell, {
                    onLearnMore: eP
                })]
            })
        });
    var ee = l.forwardRef((e, t) => ((0, O.useFetchStickerPacks)(), (0, i.jsx)("div", {
        className: G.wrapper,
        id: w.STICKER_PICKER_TAB_PANEL_ID,
        "aria-labelledby": w.STICKER_PICKER_TAB_ID,
        role: "tabpanel",
        children: e.isLoading ? (0, i.jsx)(d.Spinner, {
            className: G.loadingIndicator
        }) : (0, i.jsx)($, {
            ...e,
            ref: t
        })
    })))
}