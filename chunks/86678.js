function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ed
        }
    }), n("222007"), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("483366"),
        o = n.n(r),
        u = n("880317"),
        d = n("446674"),
        c = n("151426"),
        f = n("769846"),
        m = n("77078"),
        p = n("150021"),
        h = n("901582"),
        E = n("997289"),
        g = n("812204"),
        C = n("685665"),
        S = n("384997"),
        T = n("385976"),
        I = n("575226"),
        v = n("305781"),
        _ = n("986632"),
        N = n("538282"),
        A = n("246511"),
        x = n("45961"),
        y = n("802894"),
        O = n("592407"),
        R = n("139321"),
        M = n("716849"),
        L = n("552917"),
        P = n("845579"),
        b = n("923959"),
        j = n("697218"),
        U = n("599110"),
        D = n("764364"),
        k = n("159885"),
        w = n("788506"),
        F = n("352046"),
        G = n("260211"),
        B = n("964611"),
        H = n("420489"),
        V = n("920514"),
        K = n("83017"),
        W = n("729873"),
        Y = n("640076"),
        z = n("851111"),
        Z = n("282566"),
        J = n("115279"),
        q = n("49111"),
        X = n("994428"),
        Q = n("958706"),
        $ = n("296323");
    let ee = (0, k.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
        et = (0, k.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        en = e => e.stopPropagation(),
        el = (e, t) => {
            _.EmojiPickerStore.setInspectedExpressionPosition(e, t, A.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
        },
        ei = e => {
            let {
                analyticsLocation: t,
                pickerIntention: n,
                columnCounts: l,
                onSelectEmoji: a,
                emojiGrid: s,
                emojiList: r,
                channelGuildId: o,
                isBurstReaction: c
            } = e, f = (0, d.useStateFromStores)([T.default], () => T.default.getDisambiguatedEmojiContext(o), [o]), m = i.useCallback((e, l) => {
                switch (e.type) {
                    case K.EmojiGridItemTypes.CREATE_EMOJI:
                        a(void 0, !0), O.default.open(e.guildId, q.GuildSettingsSections.EMOJI);
                        return;
                    case K.EmojiGridItemTypes.EMOJI: {
                        if (null != e.emoji && l.altKey) {
                            f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, p.unfavoriteEmoji)(e.emoji) : ((0, w.trackEmojiFavorited)({
                                emoji: e.emoji,
                                location: {
                                    ...t,
                                    object: q.AnalyticsObjects.EMOJI
                                }
                            }), (0, p.favoriteEmoji)(e.emoji));
                            return
                        }
                        let i = {
                            page: null != o ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                            section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: q.AnalyticsObjects.EMOJI
                        };
                        c && (i = {
                            page: null != o ? q.AnalyticsPages.GUILD_CHANNEL : q.AnalyticsPages.DM_CHANNEL,
                            section: q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: q.AnalyticsObjects.EMOJI
                        }), (0, w.trackEmojiSelect)({
                            emoji: e.emoji,
                            location: i,
                            pickerIntention: n,
                            category: e.category,
                            subCategory: e.subCategory,
                            newlyAddedHighlight: e.subCategory === J.EmojiSubCategory.NEWLY_ADDED_EMOJI && I.default.isNewerThanLastSeen(o, e.emoji.id)
                        }), a(e.emoji, !l.shiftKey, c)
                    }
                }
            }, [a, o, n, f, t, c]), {
                gridDispatch: h,
                getItemProps: E,
                getRowProps: g,
                gridContainerProps: C,
                handleGridContainerKeyDown: S,
                isUsingKeyboardNavigation: v
            } = (0, x.useExpressionPickerGridKeyboardNavigation)({
                columnCounts: l,
                gridNavigatorId: J.GRID_NAVIGATOR_ID,
                itemGrid: s,
                itemList: r,
                onGridNavigatorItemSelect: m,
                onGridNavigatorPositionChange: el
            });
            return i.useEffect(() => _.EmojiPickerStore.useStore.subscribe(e => {
                if (null == e) return;
                let {
                    columnIndex: t,
                    rowIndex: n,
                    source: l
                } = e;
                l !== A.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && h({
                    type: u.GridActionType.SET_FOCUSED_POSITION,
                    x: t,
                    y: n
                })
            }, e => e.inspectedExpressionPosition), [h]), {
                getItemProps: E,
                getRowProps: g,
                gridContainerProps: C,
                handleGridContainerKeyDown: S,
                isUsingKeyboardNavigation: v
            }
        },
        ea = (e, t) => {
            let [n, l] = i.useState(null);
            i.useEffect(() => {
                if (null != n) {
                    var e;
                    null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), l(null)
                }
            }, [t, n]), i.useEffect(() => {
                l(_.EmojiPickerStore.getState().activeCategoryIndex)
            }, [e])
        },
        es = (e, t, n, l) => {
            i.useLayoutEffect(() => {
                if (l) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.focus()
                }
            }, [e, t, n, l])
        },
        er = o(w.trackEmojiSearchEmpty, 200),
        eo = o(w.trackEmojiSearchResultsViewed, 200),
        eu = {
            section: void 0,
            openPopoutType: void 0
        };
    var ed = i.memo(i.forwardRef(function(e, t) {
        var n, a;
        let r, {
                pickerIntention: o,
                channel: u,
                guildId: f,
                closePopout: p,
                emojiSize: A = J.EmojiSize.MEDIUM,
                hasTabWrapper: O = !1,
                includeCreateEmojiButton: k,
                onSelectEmoji: el,
                containerWidth: ed,
                onNavigateAway: ec,
                persistSearch: ef,
                className: em,
                headerClassName: ep,
                analyticsOverride: eh = eu,
                searchProps: eE = {},
                wrapper: eg,
                shouldHidePickerActions: eC = !1,
                messageId: eS,
                renderHeader: eT,
                listHeaderClassName: eI
            } = e,
            {
                onFocus: ev,
                onKeyDown: e_,
                autoFocus: eN = !0,
                accessory: eA
            } = eE,
            ex = (0, d.useStateFromStores)([b.default], () => null != f ? b.default.getDefaultChannel(f) : null, [f]),
            [ey, eO] = i.useState(null),
            eR = i.useRef(""),
            eM = (0, N.useExpressionPickerStore)(e => e.searchQuery),
            eL = i.useRef(null),
            eP = i.useRef(null),
            eb = i.useRef(null);
        null == u && null != ex && (u = ex);
        let ej = null !== (a = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : f) && void 0 !== a ? a : null,
            [eU, eD] = i.useState(!1),
            ek = j.default.getCurrentUser(),
            ew = (0, D.isPremium)(ek);
        i.useImperativeHandle(t, () => ({
            onPickerOpen: e3
        }));
        let {
            location: eF
        } = (0, E.useAnalyticsContext)(), {
            page: eG,
            section: eB,
            object: eH,
            openPopoutType: eV
        } = eh, eK = i.useMemo(() => ({
            ...eF,
            section: null != eB ? eB : q.AnalyticsSections.EMOJI_PICKER_POPOUT
        }), [eF, eB]), {
            AnalyticsLocationProvider: eW
        } = (0, C.default)(g.default.EMOJI_PICKER), {
            diversitySurrogate: eY
        } = (0, d.useStateFromStoresObject)([T.default], () => ({
            diversitySurrogate: T.default.diversitySurrogate
        })), ez = (0, w.useEmojiSearchResults)(eM, u, o), eZ = null == ez ? 0 : ez.locked.length + ez.unlocked.length, eJ = P.EmojiPickerCollapsedSections.useSetting(), eq = i.useMemo(() => new Set(eJ), [eJ]), eX = i.useCallback(e => {
            P.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
        }, []), eQ = (0, x.useExpressionPickerGridWidth)({
            gridWrapperRef: eL,
            containerWidth: ed,
            listPaddingLeft: et,
            listScrollbarWidth: 8
        }), {
            rowCountBySection: e$,
            sectionDescriptors: e0,
            emojiGrid: e1,
            columnCounts: e2
        } = (0, K.useEmojiGrid)({
            gridWidth: eQ,
            channel: u,
            includeCreateEmojiButton: k,
            pickerIntention: o,
            emojiSearchResults: ez,
            collapsedSections: eq,
            emojiPaddingHorizontal: ee,
            emojiSpriteSize: A
        }), {
            newlyAddedEmojis: e4
        } = (0, F.default)(ej, o), {
            trackOnPickerOpen: e8
        } = (0, w.useTrackEmojiPickerOpened)({
            intention: o,
            isBurstReaction: eU,
            analyticsObject: eH
        });
        (0, M.useMaybeFetchPremiumLikelihood)(L.default);
        let e3 = i.useCallback(() => {
                let e = e4.length > 0 ? e4[0].id : null;
                (0, v.updateNewlyAddedLastSeen)(ej, e), e8()
            }, [e8, e4, ej]),
            e6 = (0, K.useEmojiSelectHandler)({
                pickerIntention: o,
                selectedChannel: u,
                closePopout: p,
                onSelectEmoji: el,
                setUpsellConfigs: eO,
                emojiSelectAnalytics: e => {
                    "" !== eM ? (0, w.trackEmojiSearchSelect)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: q.AnalyticsObjects.EMOJI
                        },
                        searchQuery: eM,
                        intention: o
                    }) : (0, w.trackEmojiSelect)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: null != eH ? eH : q.AnalyticsObjects.EMOJI,
                            ...null != eG && {
                                page: eG
                            }
                        },
                        pickerIntention: o,
                        category: e.category,
                        subCategory: e.subCategory,
                        position: e.columnIndex + 1,
                        newlyAddedHighlight: e.subCategory === J.EmojiSubCategory.NEWLY_ADDED_EMOJI && I.default.isNewerThanLastSeen(ej, e.emoji.id),
                        isBurstReaction: eU
                    })
                },
                trackEmojiFavorited: e => {
                    (0, w.trackEmojiFavorited)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: q.AnalyticsObjects.EMOJI
                        }
                    })
                }
            }),
            e9 = i.useCallback(() => {
                p(), null == ec || ec()
            }, [p, ec]),
            {
                getItemProps: e7,
                getRowProps: e5,
                gridContainerProps: te,
                handleGridContainerKeyDown: tt,
                isUsingKeyboardNavigation: tn
            } = ei({
                pickerIntention: o,
                analyticsLocation: eK,
                columnCounts: e2,
                onSelectEmoji: el,
                emojiGrid: e1,
                emojiList: eP,
                channelGuildId: ej,
                isBurstReaction: eU
            });
        ea(ed, eP), es(ed, eY, eb, eN), i.useEffect(() => {
            !ef && (0, N.setSearchQuery)("")
        }, [ef]), i.useEffect(() => (U.default.track(q.AnalyticEvents.OPEN_POPOUT, {
            type: null != eV ? eV : "Emoji Picker",
            guild_id: ej
        }), _.EmojiPickerStore.resetStoreState), [eV, ej]), i.useEffect(() => () => (0, R.hideHotspot)(R.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), i.useLayoutEffect(() => {
            var e;
            let {
                columnIndex: t,
                rowIndex: n
            } = _.EmojiPickerStore.getState().inspectedExpressionPosition;
            (null === (e = e1[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && _.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
        }, [e1]), i.useEffect(() => {
            if ("" === eR.current && "" !== eM && (0, w.trackEmojiSearchStart)(eK, o), 0 === eZ && "" !== eM) er(eK, eM);
            else if ("" !== eM && eR.current !== eM) {
                var e;
                eo(eZ, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, eK, eM, o)
            }
            eR.current = eM
        }, [eM, eK, eZ, ez, o]);
        let tl = null != eg ? eg : O ? "div" : m.Dialog,
            ti = null != eQ;
        (null == ey ? void 0 : ey.type) === K.EmojiUpsellType.PREMIUM ? r = (0, l.jsx)(Z.default, {
            onLearnMore: e9,
            emojiDescriptor: ey.emojiDescriptor,
            pickerIntention: o,
            analyticsLocation: eK,
            onClose: () => eO(null),
            channel: u
        }) : (null == ey ? void 0 : ey.type) === K.EmojiUpsellType.ROLE_SUBSCRIPTION ? r = (0, l.jsx)(y.default, {
            onClose: () => eO(null),
            guildId: ey.guildId,
            emojiId: ey.emojiId
        }) : eU && !ew && (r = (0, l.jsx)(G.default, {
            onDismiss: () => eD(!1)
        }));
        let ta = (0, l.jsx)(V.default, {
                pickerIntention: o,
                emojiListRef: eP,
                onKeyDown: e => {
                    null == tt || tt(e), null == e_ || e_(e)
                },
                searchBarRef: eb,
                onFocus: ev,
                autoFocus: eN,
                accessory: eA,
                headerClassName: ep,
                hasTabWrapper: O,
                diversitySurrogate: eY,
                isBurstReaction: eU,
                onBurstReactionToggle: () => eD(!eU),
                renderHeader: eT
            }),
            ts = [];
        o === Q.EmojiIntention.REACTION && ts.push(c.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !T.default.hasFavoriteEmojis(ej) && ts.push(c.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tr = (0, l.jsx)(h.default, {
            ...eK,
            children: (0, l.jsxs)(tl, {
                id: J.EMOJI_PICKER_TAB_PANEL_ID,
                "aria-labelledby": O ? J.EMOJI_PICKER_TAB_ID : void 0,
                role: O ? "tabpanel" : void 0,
                className: s($.wrapper, {
                    [$.emojiPickerHasTabWrapper]: O,
                    [$.isBurstReactionPicker]: eU && ew
                }),
                children: [O ? null : ta, (0, l.jsxs)("div", {
                    className: s($.emojiPicker, em),
                    onScroll: en,
                    children: [O ? ta : null, (0, l.jsxs)("div", {
                        className: $.bodyWrapper,
                        ref: eL,
                        children: [(0, l.jsx)(z.default, {
                            channel: u,
                            closePopout: p
                        }), (0, l.jsx)(S.default, {
                            contentTypes: ts,
                            children: e => {
                                let {
                                    visibleContent: t,
                                    markAsDismissed: n
                                } = e;
                                if (t === c.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, l.jsx)(H.default, {
                                    markAsDismissed: () => n(X.ContentDismissActionType.UNKNOWN)
                                })
                            }
                        }), eC ? null : (0, l.jsx)("div", {
                            className: $.emojiPickerListWrapper,
                            id: J.GRID_NAVIGATOR_ID,
                            ...te,
                            children: ti ? (0, l.jsx)(Y.default, {
                                collapsedSections: eq,
                                diversitySurrogate: eY,
                                emojiGrid: e1,
                                emojiListRef: eP,
                                emojiSize: A,
                                getEmojiItemProps: e7,
                                getEmojiRowProps: e5,
                                gridWidth: eQ,
                                isUsingKeyboardNavigation: tn,
                                onEmojiSelect: (e, t) => {
                                    e6(e, {
                                        ...t,
                                        isBurst: eU
                                    })
                                },
                                rowCount: e1.length,
                                rowCountBySection: e$,
                                sectionDescriptors: e0,
                                setCollapsedSections: eX,
                                channelGuildId: ej,
                                messageId: eS,
                                isBurstReaction: eU,
                                listHeaderClassName: eI
                            }) : null
                        })]
                    }), (0, l.jsx)(W.EmojiPickerInspector, {
                        emojiGrid: e1,
                        className: $.inspector,
                        guildId: ej,
                        pickerIntention: o,
                        channel: u
                    }), r]
                }), eC ? null : (0, l.jsx)(B.default, {
                    className: $.categoryList,
                    emojiListRef: eP,
                    sectionDescriptors: e0,
                    intention: o,
                    channel: u
                })]
            })
        });
        return (0, l.jsx)(eW, {
            children: tr
        })
    }))
}