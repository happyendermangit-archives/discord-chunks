function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("954955"),
        i = n.n(o),
        a = n("143927"),
        u = n("898511"),
        s = n("337905"),
        l = n("784184"),
        c = n("560897"),
        f = n("649455"),
        d = n("396586"),
        _ = n("797056"),
        E = n("251384"),
        p = n("61546"),
        m = n("150736"),
        y = n("461621"),
        I = n("532209"),
        h = n("844615"),
        O = n("53867"),
        T = n("208454"),
        S = n("870331"),
        v = n("778513"),
        g = n("360978"),
        A = n("922747"),
        b = n("75499"),
        N = n("295030"),
        R = n("389712"),
        C = n("294463"),
        P = n("255294"),
        D = n("629913"),
        L = n("961032"),
        M = n("729456"),
        U = n("951618"),
        w = n("215687"),
        k = n("670031"),
        G = n("271172"),
        B = n("281767"),
        j = n("80678");

    function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function V(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function H(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function x(e, t) {
        if (e) {
            if ("string" == typeof e) return F(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
        }
    }
    var Y = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        W = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        K = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        z = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        X = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
        q = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        Q = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        J = (0, v.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        Z = q + 2 * J,
        $ = Q + 2 * J,
        ee = i()(b.trackStickerSearchEmpty, 200),
        et = i()(b.trackStickerSearchResultsViewed, 200),
        en = r.forwardRef(function(e, t) {
            var o, i, s, v = e.containerWidth,
                q = e.channel,
                Q = e.onSelectSticker,
                J = e.closePopout,
                en = (0, c.useAnalyticsContext)().location,
                er = (0, d.default)(f.default.STICKER_PICKER).analyticsLocations;
            (0, y.useMaybeFetchPremiumLikelihood)(I.default);
            var eo = (null === (s = (0, h.usePremiumTrialOffer)()) || void 0 === s ? void 0 : s.subscription_trial) != null,
                ei = r.useRef(null),
                ea = r.useRef(null),
                eu = r.useRef(null),
                es = (0, g.useStickerPickerUpsellStore)(function(e) {
                    return e.showPremiumUpsell
                });
            var el = (o = (0, E.useExpressionPickerStore)(function(e) {
                    return [e.searchQuery, e.isSearchSuggestion]
                }, a.default), i = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(o) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(o, i) || x(o, i) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                ec = el[0],
                ef = el[1],
                ed = r.useRef("");
            r.useImperativeHandle(t, function() {
                return {
                    onPickerOpen: eH
                }
            });
            var e_ = (0, N.useFilteredStickerPackCategories)(q),
                eE = 0 === e_.filter(function(e) {
                    return e.type !== C.StickerCategoryTypes.EMPTY_GUILD_UPSELL
                }).length,
                ep = (0, p.useExpressionPickerGridWidth)({
                    gridWrapperRef: ei,
                    containerWidth: v,
                    showingEmptyState: eE,
                    listPaddingLeft: W,
                    listScrollbarWidth: 8
                }),
                em = O.StickerPickerCollapsedSections.useSetting(),
                ey = r.useMemo(function() {
                    return new Set(em)
                }, [em]),
                eI = (0, u.useStateFromStores)([T.default], function() {
                    return T.default.getCurrentUser()
                }),
                eh = r.useMemo(function() {
                    return (0, k.getFilteredStickers)(ec, eI, q)
                }, [ec, eI, q]),
                eO = (0, N.useFavoriteStickers)(),
                eT = (0, N.useLatestFrecentStickers)(),
                eS = (0, u.useStateFromStoresObject)([R.default], function() {
                    return R.default.getAllGuildStickers()
                }),
                ev = null != eh ? eh : {},
                eg = ev.sendable,
                eA = ev.sendableWithPremium,
                eb = (void 0 === eg ? [] : eg).length + (void 0 === eA ? [] : eA).length,
                eN = r.useCallback(function(e) {
                    "" === ec ? (0, b.trackStickerSelect)(e) : (0, b.trackStickerSearchSelect)(e, ec, eb), Q(e.sticker, C.StickerSelectLocation.STICKER_PICKER)
                }, [Q, ec, eb]),
                eR = null != ep && ep > Y,
                eC = (0, N.useStickersGrid)({
                    filteredStickers: eh,
                    stickersCategories: e_,
                    collapsedStickersCategories: ey,
                    listWidth: ep,
                    listPaddingRight: K,
                    stickerNodeMargin: eR ? z : X,
                    stickerNodeWidth: eR ? Z : $
                }),
                eP = eC.rowCount,
                eD = eC.rowCountBySection,
                eL = eC.stickersGrid,
                eM = eC.gutterWidth,
                eU = eC.columnCounts,
                ew = r.useCallback(function(e, t) {
                    switch (t.location, e.type) {
                        case C.StickerGridItemTypes.CREATE_STICKER:
                            var o;
                            S.default.track(B.AnalyticEvents.OPEN_MODAL, {
                                type: B.AnalyticsSections.CREATE_STICKER_MODAL,
                                location: en
                            }), (0, l.openModalLazy)((o = function() {
                                var t;
                                return function(e, t) {
                                    var n, r, o, i, a = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    };
                                    return i = {
                                        next: u(0),
                                        throw: u(1),
                                        return: u(2)
                                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                        return this
                                    }), i;

                                    function u(i) {
                                        return function(u) {
                                            return function(i) {
                                                if (n) throw TypeError("Generator is already executing.");
                                                for (; a;) try {
                                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = i;
                                                            break;
                                                        case 4:
                                                            return a.label++, {
                                                                value: i[1],
                                                                done: !1
                                                            };
                                                        case 5:
                                                            a.label++, r = i[1], i = [0];
                                                            continue;
                                                        case 7:
                                                            i = a.ops.pop(), a.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                                a = 0;
                                                                continue
                                                            }
                                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                                a.label = i[1];
                                                                break
                                                            }
                                                            if (6 === i[0] && a.label < o[1]) {
                                                                a.label = o[1], o = i;
                                                                break
                                                            }
                                                            if (o && a.label < o[2]) {
                                                                a.label = o[2], a.ops.push(i);
                                                                break
                                                            }
                                                            o[2] && a.ops.pop(), a.trys.pop();
                                                            continue
                                                    }
                                                    i = t.call(e, a)
                                                } catch (e) {
                                                    i = [6, e], r = 0
                                                } finally {
                                                    n = o = 0
                                                }
                                                if (5 & i[0]) throw i[1];
                                                return {
                                                    value: i[0] ? i[1] : void 0,
                                                    done: !0
                                                }
                                            }([i, u])
                                        }
                                    }
                                }(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("72569"), n.e("62858")]).then(n.bind(n, "113747"))];
                                        case 1:
                                            return t = o.sent().default, [2, function(n) {
                                                return r.createElement(t, H({
                                                    guildId: e.guild_id
                                                }, n))
                                            }]
                                    }
                                })
                            }, function() {
                                var e = this,
                                    t = arguments;
                                return new Promise(function(n, r) {
                                    var i = o.apply(e, t);

                                    function a(e) {
                                        V(i, n, r, a, u, "next", e)
                                    }

                                    function u(e) {
                                        V(i, n, r, a, u, "throw", e)
                                    }
                                    a(void 0)
                                })
                            }));
                            break;
                        case C.StickerGridItemTypes.STICKER:
                            null != e.sticker && (0, A.isSendableSticker)(e.sticker, eI, q) && eN(e)
                    }
                }, [en, eI, q, eN]),
                ek = (0, P.useKeyboardNavigation)({
                    columnCounts: eU,
                    stickersListRef: ea,
                    stickersGrid: eL,
                    onGridItemSelect: ew,
                    store: _.StickerPickerStore,
                    setInspectedStickerPosition: _.StickerPickerStore.setInspectedExpressionPosition,
                    gridNavigatorId: G.GRID_NAVIGATOR_ID
                }),
                eG = ek.getItemProps,
                eB = ek.getRowProps,
                ej = ek.gridContainerProps,
                eF = ek.handleGridContainerKeyDown,
                eV = ek.isUsingKeyboardNavigation;
            r.useEffect(function() {
                return _.StickerPickerStore.resetStoreState
            }, []);
            var eH = function() {
                var e, t, n = q.getGuildId(),
                    r = [];
                null !== n && (r = null !== (t = R.default.getStickersByGuildId(n)) && void 0 !== t ? t : []);
                var o = 0;
                if (null != eS) {
                    ;
                    ((function(e) {
                        if (Array.isArray(e)) return F(e)
                    })(e = eS.values()) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || x(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).forEach(function(e) {
                        o += e.length
                    })
                }(0, b.trackStickerPickerOpen)({
                    containerWidth: v,
                    favoriteStickers: eO,
                    frequentlyUsedStickers: eT,
                    guildStickers: r,
                    stickersTotal: o
                })
            };
            r.useEffect(function() {
                "" === ed.current && "" !== ec && (0, b.trackStickerSearchStart)(), ed.current = ec
            }, [ec]), r.useEffect(function() {
                0 === eb ? ee(ec) : et(ec, eb, ef)
            }, [ec, eb, ef]), r.useLayoutEffect(function() {
                var e;
                null === (e = eu.current) || void 0 === e || e.focus()
            }, []);
            var ex = r.useCallback(function() {
                J(), S.default.track(B.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                    location_section: B.AnalyticsSections.STICKER_PICKER_UPSELL
                }), (0, m.navigateToPremiumMarketingPage)()
            }, [J]);
            return r.createElement(d.AnalyticsLocationProvider, {
                value: er
            }, !(eo && eE) && r.createElement("div", {
                className: j.header
            }, r.createElement(U.default, {
                ref: eu,
                onKeyDown: eF,
                stickersListRef: ea,
                channel: q
            })), eE ? r.createElement(L.default, {
                className: j.emptyState,
                onClose: J
            }) : r.createElement(r.Fragment, null, r.createElement("div", H({
                ref: ei,
                className: j.listWrapper,
                id: G.GRID_NAVIGATOR_ID
            }, ej), null != ep ? r.createElement(M.default, {
                ref: ea,
                collapsedStickersCategories: ey,
                filteredStickers: eh,
                getStickerItemProps: eG,
                getStickerRowProps: eB,
                gridWidth: ep,
                gutterWidth: eM,
                isUsingKeyboardNavigation: eV,
                onSelectSticker: eN,
                rowCount: eP,
                rowCountBySection: eD,
                stickersCategories: e_,
                stickersGrid: eL,
                channel: q
            }) : null), r.createElement(D.default, {
                stickersListRef: ea,
                channel: q
            })), es && r.createElement(w.StickersPremiumUpsell, {
                onLearnMore: ex
            }))
        });
    t.default = r.forwardRef(function(e, t) {
        var n, o;
        return (0, N.useFetchStickerPacks)(), r.createElement("div", {
            className: j.wrapper,
            id: G.STICKER_PICKER_TAB_PANEL_ID,
            "aria-labelledby": G.STICKER_PICKER_TAB_ID,
            role: "tabpanel"
        }, e.isLoading ? r.createElement(l.Spinner, {
            className: j.loadingIndicator
        }) : r.createElement(en, (n = H({}, e), o = (o = {
            ref: t
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n)))
    })
}