function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("954955"),
        u = n.n(a),
        s = n("657354"),
        l = n("898511"),
        c = n("14782"),
        f = n("337905"),
        d = n("784184"),
        _ = n("362048"),
        E = n("286601"),
        p = n("560897"),
        m = n("649455"),
        y = n("396586"),
        I = n("177770"),
        h = n("300983"),
        O = n("950763"),
        T = n("443619"),
        S = n("797056"),
        v = n("251384"),
        g = n("512832"),
        A = n("61546"),
        b = n("516927"),
        N = n("878943"),
        R = n("417529"),
        C = n("461621"),
        P = n("532209"),
        D = n("53867"),
        L = n("29604"),
        M = n("208454"),
        U = n("870331"),
        w = n("32950"),
        k = n("778513"),
        G = n("276328"),
        B = n("888136"),
        j = n("949136"),
        F = n("384009"),
        V = n("208818"),
        H = n("830908"),
        x = n("458821"),
        Y = n("801915"),
        W = n("70558"),
        K = n("278602"),
        z = n("206983"),
        X = n("644037"),
        q = n("281767"),
        Q = n("348201"),
        J = n("68735"),
        Z = n("776464");

    function $(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function ee(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function et(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                ee(e, t, n[t])
            })
        }
        return e
    }

    function en(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function er(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return $(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var eo = (0, k.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
        ei = (0, k.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        ea = function(e) {
            return e.stopPropagation()
        },
        eu = function(e, t) {
            S.EmojiPickerStore.setInspectedExpressionPosition(e, t, g.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
        },
        es = function(e) {
            var t = e.analyticsLocation,
                n = e.pickerIntention,
                o = e.columnCounts,
                i = e.onSelectEmoji,
                a = e.emojiGrid,
                u = e.emojiList,
                c = e.channelGuildId,
                f = e.isBurstReaction,
                d = (0, l.useStateFromStores)([h.default], function() {
                    return h.default.getDisambiguatedEmojiContext(c)
                }, [c]),
                E = r.useCallback(function(e, r) {
                    switch (e.type) {
                        case x.EmojiGridItemTypes.CREATE_EMOJI:
                            i(void 0, !0), N.default.open(e.guildId, q.GuildSettingsSections.EMOJI);
                            return;
                        case x.EmojiGridItemTypes.EMOJI:
                            if (null != e.emoji && r.altKey) {
                                d.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, _.unfavoriteEmoji)(e.emoji) : ((0, G.trackEmojiFavorited)({
                                    emoji: e.emoji,
                                    location: en(et({}, t), {
                                        object: q.AnalyticsObjects.EMOJI
                                    })
                                }), (0, _.favoriteEmoji)(e.emoji));
                                return
                            }
                            var o = {
                                page: null != c ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                                section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                object: q.AnalyticsObjects.EMOJI
                            };
                            f && (o = {
                                page: null != c ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                                section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                object: q.AnalyticsObjects.EMOJI
                            }), (0, G.trackEmojiSelect)({
                                emoji: e.emoji,
                                location: o,
                                pickerIntention: n,
                                category: e.category,
                                subCategory: e.subCategory,
                                newlyAddedHighlight: e.subCategory === X.EmojiSubCategory.NEWLY_ADDED_EMOJI && O.default.isNewerThanLastSeen(c, e.emoji.id)
                            }), i(e.emoji, !r.shiftKey, f)
                    }
                }, [i, c, n, d, t, f]),
                p = (0, A.useExpressionPickerGridKeyboardNavigation)({
                    columnCounts: o,
                    gridNavigatorId: X.GRID_NAVIGATOR_ID,
                    itemGrid: a,
                    itemList: u,
                    onGridNavigatorItemSelect: E,
                    onGridNavigatorPositionChange: eu
                }),
                m = p.gridDispatch,
                y = p.getItemProps,
                I = p.getRowProps,
                T = p.gridContainerProps,
                v = p.handleGridContainerKeyDown,
                b = p.isUsingKeyboardNavigation;
            return r.useEffect(function() {
                return S.EmojiPickerStore.useStore.subscribe(function(e) {
                    if (null != e) {
                        var t = e.columnIndex,
                            n = e.rowIndex;
                        e.source !== g.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && m({
                            type: s.GridActionType.SET_FOCUSED_POSITION,
                            x: t,
                            y: n
                        })
                    }
                }, function(e) {
                    return e.inspectedExpressionPosition
                })
            }, [m]), {
                getItemProps: y,
                getRowProps: I,
                gridContainerProps: T,
                handleGridContainerKeyDown: v,
                isUsingKeyboardNavigation: b
            }
        },
        el = function(e, t) {
            var n = er(r.useState(null), 2),
                o = n[0],
                i = n[1];
            r.useEffect(function() {
                if (null != o) {
                    var e;
                    null === (e = t.current) || void 0 === e || e.scrollToSectionTop(o), i(null)
                }
            }, [t, o]), r.useEffect(function() {
                i(S.EmojiPickerStore.getState().activeCategoryIndex)
            }, [e])
        },
        ec = function(e, t, n, o) {
            r.useLayoutEffect(function() {
                if (o) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.focus()
                }
            }, [e, t, n, o])
        },
        ef = u()(G.trackEmojiSearchEmpty, 200),
        ed = u()(G.trackEmojiSearchResultsViewed, 200),
        e_ = {
            section: void 0,
            openPopoutType: void 0
        };
    t.default = r.memo(r.forwardRef(function(e, t) {
        var n, o, a, u, s = e.pickerIntention,
            f = e.channel,
            _ = e.guildId,
            g = e.closePopout,
            N = e.emojiSize,
            k = void 0 === N ? X.EmojiSize.MEDIUM : N,
            $ = e.hasTabWrapper,
            eu = void 0 !== $ && $,
            eE = e.includeCreateEmojiButton,
            ep = e.onSelectEmoji,
            em = e.containerWidth,
            ey = e.onNavigateAway,
            eI = e.persistSearch,
            eh = e.className,
            eO = e.headerClassName,
            eT = e.analyticsOverride,
            eS = void 0 === eT ? e_ : eT,
            ev = e.searchProps,
            eg = void 0 === ev ? {} : ev,
            eA = e.wrapper,
            eb = e.shouldHidePickerActions,
            eN = void 0 !== eb && eb,
            eR = e.messageId,
            eC = e.renderHeader,
            eP = e.listHeaderClassName,
            eD = eg.onFocus,
            eL = eg.onKeyDown,
            eM = eg.autoFocus,
            eU = void 0 === eM || eM,
            ew = eg.accessory,
            ek = (0, l.useStateFromStores)([L.default], function() {
                return null != _ ? L.default.getDefaultChannel(_) : null
            }, [_]),
            eG = er(r.useState(null), 2),
            eB = eG[0],
            ej = eG[1],
            eF = r.useRef(""),
            eV = (0, v.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            eH = r.useRef(null),
            ex = r.useRef(null),
            eY = r.useRef(null);
        null == f && null != ek && (f = ek);
        var eW = null !== (o = null !== (n = null == f ? void 0 : f.getGuildId()) && void 0 !== n ? n : _) && void 0 !== o ? o : null,
            eK = er(r.useState(!1), 2),
            ez = eK[0],
            eX = eK[1],
            eq = M.default.getCurrentUser(),
            eQ = (0, w.isPremium)(eq);
        r.useImperativeHandle(t, function() {
            return {
                onPickerOpen: ts
            }
        });
        var eJ = (0, p.useAnalyticsContext)().location,
            eZ = eS.page,
            e$ = eS.section,
            e0 = eS.object,
            e1 = eS.openPopoutType,
            e2 = r.useMemo(function() {
                return en(et({}, eJ), {
                    section: null != e$ ? e$ : q.AnalyticsSections.EMOJI_PICKER_POPOUT
                })
            }, [eJ, e$]),
            e3 = (0, y.default)(m.default.EMOJI_PICKER).analyticsLocations,
            e4 = (0, l.useStateFromStoresObject)([h.default], function() {
                return {
                    diversitySurrogate: h.default.diversitySurrogate
                }
            }).diversitySurrogate,
            e6 = (0, G.useEmojiSearchResults)(eV, f, s),
            e8 = null == e6 ? 0 : e6.locked.length + e6.unlocked.length,
            e7 = D.EmojiPickerCollapsedSections.useSetting(),
            e9 = r.useMemo(function() {
                return new Set(e7)
            }, [e7]),
            e5 = r.useCallback(function(e) {
                D.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
            }, []),
            te = (0, A.useExpressionPickerGridWidth)({
                gridWrapperRef: eH,
                containerWidth: em,
                listPaddingLeft: ei,
                listScrollbarWidth: 8
            }),
            tt = (0, x.useEmojiGrid)({
                gridWidth: te,
                channel: f,
                includeCreateEmojiButton: eE,
                pickerIntention: s,
                emojiSearchResults: e6,
                collapsedSections: e9,
                emojiPaddingHorizontal: eo,
                emojiSpriteSize: k
            }),
            tn = tt.rowCountBySection,
            tr = tt.sectionDescriptors,
            to = tt.emojiGrid,
            ti = tt.columnCounts,
            ta = (0, B.default)(eW, s).newlyAddedEmojis,
            tu = (0, G.useTrackEmojiPickerOpened)({
                intention: s,
                isBurstReaction: ez,
                analyticsObject: e0
            }).trackOnPickerOpen;
        (0, C.useMaybeFetchPremiumLikelihood)(P.default);
        var ts = r.useCallback(function() {
                var e = ta.length > 0 ? ta[0].id : null;
                (0, T.updateNewlyAddedLastSeen)(eW, e), tu()
            }, [tu, ta, eW]),
            tl = (0, x.useEmojiSelectHandler)({
                pickerIntention: s,
                selectedChannel: f,
                closePopout: g,
                onSelectEmoji: ep,
                setUpsellConfigs: ej,
                emojiSelectAnalytics: function(e) {
                    "" !== eV ? (0, G.trackEmojiSearchSelect)({
                        emoji: e.emoji,
                        location: en(et({}, e2), {
                            object: q.AnalyticsObjects.EMOJI
                        }),
                        searchQuery: eV,
                        intention: s
                    }) : (0, G.trackEmojiSelect)({
                        emoji: e.emoji,
                        location: et(en(et({}, e2), {
                            object: null != e0 ? e0 : q.AnalyticsObjects.EMOJI
                        }), null != eZ && {
                            page: eZ
                        }),
                        pickerIntention: s,
                        category: e.category,
                        subCategory: e.subCategory,
                        position: e.columnIndex + 1,
                        newlyAddedHighlight: e.subCategory === X.EmojiSubCategory.NEWLY_ADDED_EMOJI && O.default.isNewerThanLastSeen(eW, e.emoji.id),
                        isBurstReaction: ez
                    })
                },
                trackEmojiFavorited: function(e) {
                    (0, G.trackEmojiFavorited)({
                        emoji: e.emoji,
                        location: en(et({}, e2), {
                            object: q.AnalyticsObjects.EMOJI
                        })
                    })
                }
            }),
            tc = r.useCallback(function() {
                g(), null == ey || ey()
            }, [g, ey]),
            tf = es({
                pickerIntention: s,
                analyticsLocation: e2,
                columnCounts: ti,
                onSelectEmoji: ep,
                emojiGrid: to,
                emojiList: ex,
                channelGuildId: eW,
                isBurstReaction: ez
            }),
            td = tf.getItemProps,
            t_ = tf.getRowProps,
            tE = tf.gridContainerProps,
            tp = tf.handleGridContainerKeyDown,
            tm = tf.isUsingKeyboardNavigation;
        el(em, ex), ec(em, e4, eY, eU), r.useEffect(function() {
            !eI && (0, v.setSearchQuery)("")
        }, [eI]), r.useEffect(function() {
            return U.default.track(q.AnalyticEvents.OPEN_POPOUT, {
                type: null != e1 ? e1 : "Emoji Picker",
                guild_id: eW
            }), S.EmojiPickerStore.resetStoreState
        }, [e1, eW]), r.useEffect(function() {
            return function() {
                return (0, R.hideHotspot)(R.HotspotLocations.FAVORITE_EMOJI_TOOLTIP)
            }
        }, []), r.useLayoutEffect(function() {
            var e, t = S.EmojiPickerStore.getState().inspectedExpressionPosition,
                n = t.columnIndex;
            (null === (e = to[t.rowIndex]) || void 0 === e ? void 0 : e[n]) == null && 0 !== n && S.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
        }, [to]), r.useEffect(function() {
            if ("" === eF.current && "" !== eV && (0, G.trackEmojiSearchStart)(e2, s), 0 === e8 && "" !== eV) ef(e2, eV);
            else if ("" !== eV && eF.current !== eV) {
                var e;
                ed(e8, null !== (e = null == e6 ? void 0 : e6.locked.length) && void 0 !== e ? e : 0, e2, eV, s)
            }
            eF.current = eV
        }, [eV, e2, e8, e6, s]);
        var ty = null != eA ? eA : eu ? "div" : d.Dialog,
            tI = null != te;
        (null == eB ? void 0 : eB.type) === x.EmojiUpsellType.PREMIUM ? a = r.createElement(z.default, {
            onLearnMore: tc,
            emojiDescriptor: eB.emojiDescriptor,
            pickerIntention: s,
            analyticsLocation: e2,
            onClose: function() {
                return ej(null)
            },
            channel: f
        }) : (null == eB ? void 0 : eB.type) === x.EmojiUpsellType.ROLE_SUBSCRIPTION ? a = r.createElement(b.default, {
            onClose: function() {
                return ej(null)
            },
            guildId: eB.guildId,
            emojiId: eB.emojiId
        }) : ez && !eQ && (a = r.createElement(j.default, {
            onDismiss: function() {
                return eX(!1)
            }
        }));
        var th = r.createElement(H.default, {
                pickerIntention: s,
                emojiListRef: ex,
                onKeyDown: function(e) {
                    null == tp || tp(e), null == eL || eL(e)
                },
                searchBarRef: eY,
                onFocus: eD,
                autoFocus: eU,
                accessory: ew,
                headerClassName: eO,
                hasTabWrapper: eu,
                diversitySurrogate: e4,
                isBurstReaction: ez,
                onBurstReactionToggle: function() {
                    return eX(!ez)
                },
                renderHeader: eC
            }),
            tO = [];
        s === J.EmojiIntention.REACTION && tO.push(c.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !h.default.hasFavoriteEmojis(eW) && tO.push(c.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        var tT = r.createElement(E.default, e2, r.createElement(ty, {
            id: X.EMOJI_PICKER_TAB_PANEL_ID,
            "aria-labelledby": eu ? X.EMOJI_PICKER_TAB_ID : void 0,
            role: eu ? "tabpanel" : void 0,
            className: i()(Z.wrapper, (ee(u = {}, Z.emojiPickerHasTabWrapper, eu), ee(u, Z.isBurstReactionPicker, ez && eQ), u))
        }, eu ? null : th, r.createElement("div", {
            className: i()(Z.emojiPicker, eh),
            onScroll: ea
        }, eu ? th : null, r.createElement("div", {
            className: Z.bodyWrapper,
            ref: eH
        }, r.createElement(K.default, {
            channel: f,
            closePopout: g
        }), r.createElement(I.default, {
            contentTypes: tO
        }, function(e) {
            var t = e.visibleContent,
                n = e.markAsDismissed;
            if (t === c.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return r.createElement(V.default, {
                markAsDismissed: function() {
                    return n(Q.ContentDismissActionType.UNKNOWN)
                }
            })
        }), eN ? null : r.createElement("div", et({
            className: Z.emojiPickerListWrapper,
            id: X.GRID_NAVIGATOR_ID
        }, tE), tI ? r.createElement(W.default, {
            collapsedSections: e9,
            diversitySurrogate: e4,
            emojiGrid: to,
            emojiListRef: ex,
            emojiSize: k,
            getEmojiItemProps: td,
            getEmojiRowProps: t_,
            gridWidth: te,
            isUsingKeyboardNavigation: tm,
            onEmojiSelect: function(e, t) {
                tl(e, en(et({}, t), {
                    isBurst: ez
                }))
            },
            rowCount: to.length,
            rowCountBySection: tn,
            sectionDescriptors: tr,
            setCollapsedSections: e5,
            channelGuildId: eW,
            messageId: eR,
            isBurstReaction: ez,
            listHeaderClassName: eP
        }) : null)), r.createElement(Y.EmojiPickerInspector, {
            emojiGrid: to,
            className: Z.inspector,
            guildId: eW,
            pickerIntention: s,
            channel: f
        }), a), eN ? null : r.createElement(F.default, {
            className: Z.categoryList,
            emojiListRef: ex,
            sectionDescriptors: tr,
            intention: s,
            channel: f
        })));
        return r.createElement(y.AnalyticsLocationProvider, {
            value: e3
        }, tT)
    }))
}