function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("954955"),
        a = n.n(s),
        o = n("143927"),
        l = n("442837"),
        u = n("477690"),
        d = n("481060"),
        _ = n("2052"),
        c = n("100527"),
        E = n("906732"),
        I = n("806966"),
        T = n("28546"),
        f = n("98528"),
        S = n("98278"),
        A = n("857185"),
        h = n("911200"),
        m = n("639119"),
        N = n("695346"),
        O = n("594174"),
        p = n("626135"),
        R = n("624138"),
        C = n("191177"),
        g = n("285651"),
        L = n("217590"),
        D = n("453070"),
        v = n("926491"),
        M = n("373228"),
        y = n("462109"),
        P = n("422195"),
        U = n("657795"),
        b = n("489762"),
        G = n("31543"),
        w = n("814042"),
        B = n("15350"),
        k = n("611480"),
        F = n("981631"),
        V = n("80678");
    let x = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        H = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        Y = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        j = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        W = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
        K = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        z = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        X = (0, R.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        Q = K + 2 * X,
        q = z + 2 * X,
        Z = a()(L.trackStickerSearchEmpty, 200),
        J = a()(L.trackStickerSearchResultsViewed, 200),
        $ = r.forwardRef(function(e, t) {
            var s;
            let {
                containerWidth: a,
                channel: u,
                onSelectSticker: R,
                closePopout: K
            } = e, {
                location: z
            } = (0, _.useAnalyticsContext)(), {
                analyticsLocations: X
            } = (0, E.default)(c.default.STICKER_PICKER);
            (0, A.useMaybeFetchPremiumLikelihood)(h.default);
            let $ = (null === (s = (0, m.usePremiumTrialOffer)()) || void 0 === s ? void 0 : s.subscription_trial) != null,
                ee = r.useRef(null),
                et = r.useRef(null),
                en = r.useRef(null),
                ei = (0, C.useStickerPickerUpsellStore)(e => e.showPremiumUpsell),
                [er, es] = (0, T.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], o.default),
                ea = r.useRef("");
            r.useImperativeHandle(t, () => ({
                onPickerOpen: eU
            }));
            let eo = (0, D.useFilteredStickerPackCategories)(u),
                el = 0 === eo.filter(e => e.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
                eu = (0, f.useExpressionPickerGridWidth)({
                    gridWrapperRef: ee,
                    containerWidth: a,
                    showingEmptyState: el,
                    listPaddingLeft: H,
                    listScrollbarWidth: 8
                }),
                ed = N.StickerPickerCollapsedSections.useSetting(),
                e_ = r.useMemo(() => new Set(ed), [ed]),
                ec = (0, l.useStateFromStores)([O.default], () => O.default.getCurrentUser()),
                eE = r.useMemo(() => (0, B.getFilteredStickers)(er, ec, u), [er, ec, u]),
                eI = (0, D.useFavoriteStickers)(),
                eT = (0, D.useLatestFrecentStickers)(),
                ef = (0, l.useStateFromStoresObject)([v.default], () => v.default.getAllGuildStickers()),
                {
                    sendable: eS = [],
                    sendableWithPremium: eA = []
                } = null != eE ? eE : {},
                eh = eS.length + eA.length,
                em = r.useCallback(e => {
                    "" === er ? (0, L.trackStickerSelect)(e) : (0, L.trackStickerSearchSelect)(e, er, eh), R(e.sticker, M.StickerSelectLocation.STICKER_PICKER)
                }, [R, er, eh]),
                eN = null != eu && eu > x,
                {
                    rowCount: eO,
                    rowCountBySection: ep,
                    stickersGrid: eR,
                    gutterWidth: eC,
                    columnCounts: eg
                } = (0, D.useStickersGrid)({
                    filteredStickers: eE,
                    stickersCategories: eo,
                    collapsedStickersCategories: e_,
                    listWidth: eu,
                    listPaddingRight: Y,
                    stickerNodeMargin: eN ? j : W,
                    stickerNodeWidth: eN ? Q : q
                }),
                eL = r.useCallback((e, t) => {
                    let {
                        location: r
                    } = t;
                    switch (e.type) {
                        case M.StickerGridItemTypes.CREATE_STICKER:
                            p.default.track(F.AnalyticEvents.OPEN_MODAL, {
                                type: F.AnalyticsSections.CREATE_STICKER_MODAL,
                                location: z
                            }), (0, d.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("93626"), n.e("84482")]).then(n.bind(n, "136735"));
                                return n => (0, i.jsx)(t, {
                                    guildId: e.guild_id,
                                    ...n
                                })
                            });
                            break;
                        case M.StickerGridItemTypes.STICKER:
                            null != e.sticker && (0, g.isSendableSticker)(e.sticker, ec, u) && em(e)
                    }
                }, [z, ec, u, em]),
                {
                    getItemProps: eD,
                    getRowProps: ev,
                    gridContainerProps: eM,
                    handleGridContainerKeyDown: ey,
                    isUsingKeyboardNavigation: eP
                } = (0, y.useKeyboardNavigation)({
                    columnCounts: eg,
                    stickersListRef: et,
                    stickersGrid: eR,
                    onGridItemSelect: eL,
                    store: I.StickerPickerStore,
                    setInspectedStickerPosition: I.StickerPickerStore.setInspectedExpressionPosition,
                    gridNavigatorId: k.GRID_NAVIGATOR_ID
                });
            r.useEffect(() => I.StickerPickerStore.resetStoreState, []);
            let eU = () => {
                let e = u.getGuildId(),
                    t = [];
                if (null !== e) {
                    var n;
                    t = null !== (n = v.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
                }
                let i = 0;
                null != ef && [...ef.values()].forEach(e => {
                    i += e.length
                }), (0, L.trackStickerPickerOpen)({
                    containerWidth: a,
                    favoriteStickers: eI,
                    frequentlyUsedStickers: eT,
                    guildStickers: t,
                    stickersTotal: i
                })
            };
            r.useEffect(() => {
                "" === ea.current && "" !== er && (0, L.trackStickerSearchStart)(), ea.current = er
            }, [er]), r.useEffect(() => {
                0 === eh ? Z(er) : J(er, eh, es)
            }, [er, eh, es]), r.useLayoutEffect(() => {
                var e;
                null === (e = en.current) || void 0 === e || e.focus()
            }, []);
            let eb = r.useCallback(() => {
                K(), p.default.track(F.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                    location_section: F.AnalyticsSections.STICKER_PICKER_UPSELL
                }), (0, S.navigateToPremiumMarketingPage)()
            }, [K]);
            return (0, i.jsxs)(E.AnalyticsLocationProvider, {
                value: X,
                children: [!($ && el) && (0, i.jsx)("div", {
                    className: V.header,
                    children: (0, i.jsx)(G.default, {
                        ref: en,
                        onKeyDown: ey,
                        stickersListRef: et,
                        channel: u
                    })
                }), el ? (0, i.jsx)(U.default, {
                    className: V.emptyState,
                    onClose: K
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        ref: ee,
                        className: V.listWrapper,
                        id: k.GRID_NAVIGATOR_ID,
                        ...eM,
                        children: null != eu ? (0, i.jsx)(b.default, {
                            ref: et,
                            collapsedStickersCategories: e_,
                            filteredStickers: eE,
                            getStickerItemProps: eD,
                            getStickerRowProps: ev,
                            gridWidth: eu,
                            gutterWidth: eC,
                            isUsingKeyboardNavigation: eP,
                            onSelectSticker: em,
                            rowCount: eO,
                            rowCountBySection: ep,
                            stickersCategories: eo,
                            stickersGrid: eR,
                            channel: u
                        }) : null
                    }), (0, i.jsx)(P.default, {
                        stickersListRef: et,
                        channel: u
                    })]
                }), ei && (0, i.jsx)(w.StickersPremiumUpsell, {
                    onLearnMore: eb
                })]
            })
        });
    t.default = r.forwardRef((e, t) => ((0, D.useFetchStickerPacks)(), (0, i.jsx)("div", {
        className: V.wrapper,
        id: k.STICKER_PICKER_TAB_PANEL_ID,
        "aria-labelledby": k.STICKER_PICKER_TAB_ID,
        role: "tabpanel",
        children: e.isLoading ? (0, i.jsx)(d.Spinner, {
            className: V.loadingIndicator
        }) : (0, i.jsx)($, {
            ...e,
            ref: t
        })
    })))
}