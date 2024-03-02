function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ei
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("907002"),
        d = n("394846"),
        c = n("446674"),
        f = n("895547"),
        m = n("769846"),
        p = n("77078"),
        h = n("96386"),
        E = n("997289"),
        g = n("206230"),
        C = n("685665"),
        S = n("986632"),
        T = n("538282"),
        I = n("246511"),
        v = n("45961"),
        _ = n("515059"),
        N = n("139321"),
        A = n("635956"),
        x = n("845579"),
        y = n("697218"),
        O = n("124299"),
        R = n("600785"),
        M = n("599110"),
        L = n("764364"),
        P = n("159885"),
        b = n("429569"),
        j = n("788506"),
        U = n("675280"),
        D = n("917764"),
        k = n("83017"),
        w = n("232786"),
        F = n("842126"),
        G = n("115279"),
        B = n("49111"),
        H = n("13030"),
        V = n("646718"),
        K = n("782340"),
        W = n("555254");
    let Y = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
        z = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
        Z = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
        J = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        q = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
        X = (0, P.cssValueToNumber)(m.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        Q = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
        $ = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
        ee = (0, P.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        et = e => e + 2 * ee,
        en = e => {
            let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: r,
                onEmojiSelect: u,
                searchQuery: d,
                sectionDescriptors: m,
                setCollapsedSections: p,
                getEmojiItemProps: h,
                getEmojiRowProps: g,
                isScrolling: C,
                isUsingKeyboardNavigation: T,
                allowAnimatedEmoji: v,
                channelGuildId: A,
                messageId: x,
                isBurstReaction: y,
                listHeaderClassName: O,
                activeSectionIndex: L,
                upsellGlowOpacity: P,
                enableNitroUpsell: b
            } = e, V = (0, E.useAnalyticsContext)(), K = i.useRef(B.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), ee = i.useMemo(() => "" !== n ? f.default.convert.toCodePoint(n) : "", [n]), et = i.useCallback(e => {
                if (!b) return !1;
                let t = m[e],
                    n = m[e + 1];
                return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
            }, [b, m]), en = i.useCallback(e => {
                if (!b || e >= m.length - 1) return !1;
                let t = m[e],
                    n = m[e + 1];
                return !t.isNitroLocked && n.isNitroLocked
            }, [b, m]), el = i.useCallback(function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = new Set(t),
                    i = t.has(e);
                i ? l.delete(e) : l.add(e), null != n && M.default.track(B.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: V.location,
                    tab: H.ExpressionPickerViewType.EMOJI,
                    collapsed: !i,
                    guild_id: n.id
                }), p(l)
            }, [V, t, p]), ei = i.useCallback(e => {
                let {
                    columnIndex: t,
                    visibleRowIndex: n
                } = e, l = e.type === k.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
                K.current !== B.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(K.current), K.current = window.requestAnimationFrame(() => {
                    S.EmojiPickerStore.setInspectedExpressionPosition(t, n, I.InspectedExpressionChangeSource.MOUSE_EVENT), S.EmojiPickerStore.setSearchPlaceholder(l), K.current = B.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
                })
            }, []), ea = (0, c.useStateFromStores)([N.HotspotStore], () => N.HotspotStore.hasHotspot(N.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), es = i.useMemo(() => o.memoize((e, t) => {
                let n = a[e],
                    i = m[t.sectionIndex];
                return (0, l.jsx)(F.default, {
                    emojiDescriptors: n,
                    emojiSize: r,
                    surrogateCodePoint: ee,
                    onInspect: ei,
                    onSelect: u,
                    getEmojiItemProps: h,
                    getEmojiRowProps: g,
                    isScrolling: C,
                    isUsingKeyboardNavigation: T,
                    rowIndex: e,
                    allowAnimatedEmoji: v,
                    showEmojiFavoriteTooltip: ea,
                    channelGuildId: A,
                    category: i.sectionId,
                    selectedItemClassName: W.selectedItem,
                    messageId: x,
                    isBurstReaction: y,
                    inNitroLockedSection: i.isNitroLocked
                }, e)
            }), [a, m, r, ee, ei, u, h, g, C, T, v, ea, A, x, y]);
            i.useEffect(() => () => {
                var e, t;
                return null === (t = es.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
            }, [es]);
            let er = i.useMemo(() => o.memoize(e => {
                    let n = m[e];
                    if (null == n) return;
                    let {
                        guild: i,
                        categoryId: a,
                        type: r,
                        sectionId: o
                    } = n;
                    if (r === G.EmojiCategoryTypes.SEARCH_RESULTS) return;
                    let u = r === G.EmojiCategoryTypes.GUILD ? null != i ? (0, l.jsx)(D.default, {
                            guild: i,
                            height: 16,
                            width: 16
                        }) : null : null != a ? (0, l.jsx)(U.default, {
                            categoryId: a,
                            height: 16,
                            width: 16
                        }) : null,
                        d = null == i ? void 0 : i.toString();
                    null != a && (d = (0, j.getStringForEmojiCategory)(a, null == i ? void 0 : i.toString()));
                    let c = L === e,
                        f = n.isNitroLocked,
                        p = b && f && !c,
                        h = b && f && c;
                    return (0, l.jsx)(_.default, {
                        className: s(W.header, O, {
                            [W.inactiveNitroHeader]: p,
                            [W.activeNitroHeader]: h
                        }),
                        icon: u,
                        isCollapsed: t.has(o),
                        onClick: () => el(o, i),
                        children: d
                    }, o)
                }), [m, t, el, O, L, b]),
                eo = i.useCallback((e, n) => {
                    let i = m[e],
                        a = en(e),
                        r = et(e);
                    return (0, l.jsx)("div", {
                        className: s(W.categorySection, {
                            [W.categorySectionLast]: e === m.length - 1,
                            [W.categorySectionCollapsed]: t.has(i.sectionId),
                            [W.categorySectionNitroLocked]: b && i.isNitroLocked,
                            [W.categorySectionNitroDivider]: a || r
                        }),
                        children: n
                    }, e)
                }, [t, m, b, en, et]),
                eu = i.useCallback(e => {
                    let n = m[e];
                    return n.sectionId !== G.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || b ? en(e) ? (0, l.jsxs)("div", {
                        className: s(W.nitroTopDividerContainer),
                        children: [(0, l.jsx)("div", {
                            className: W.nitroTopDividerUpper
                        }), (0, l.jsx)("div", {
                            style: {
                                opacity: P
                            },
                            className: W.nitroTopDividerShadow
                        }), (0, l.jsxs)("div", {
                            className: s(W.nitroTopDividerLockContainer),
                            children: [(0, l.jsx)("div", {
                                className: W.nitroTopDividerLockBorder
                            }), (0, l.jsx)("div", {
                                className: W.nitroTopDividerLockCircle,
                                children: (0, l.jsx)(R.default, {
                                    width: 16,
                                    height: 16,
                                    color: "white"
                                })
                            }), (0, l.jsx)("div", {
                                className: W.nitroTopDividerLockBorderReversed
                            })]
                        }), (0, l.jsx)("div", {
                            className: W.nitroTopDividerLower
                        })]
                    }) : et(e) ? (0, l.jsx)("div", {
                        className: W.nitroBottomDivider
                    }) : null : (0, l.jsx)(w.default, {
                        className: W.premiumUpsell
                    }, "emoji-picker-inline-upsell")
                }, [m, t, P, b, en, et]),
                ed = i.useCallback(e => {
                    let n = m[e];
                    return n.sectionId !== G.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || b ? en(e) ? 41 : et(e) ? 33 : 0 : $
                }, [m, t, b, en, et]),
                ec = i.useCallback(e => {
                    var n;
                    return e === m.length - 1 || t.has(null === (n = m[e]) || void 0 === n ? void 0 : n.sectionId) || en(e) || et(e) ? 0 : Q
                }, [t, m, en, et]),
                ef = i.useMemo(() => ["" !== d ? q : Y, z, Z, J], [d]),
                em = i.useCallback(e => {
                    let t = m[e];
                    return t.type === G.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : X
                }, [m]);
            return {
                listPadding: ef,
                renderRow: es,
                renderSection: eo,
                renderSectionHeader: er,
                renderSectionFooter: eu,
                sectionMarginBottom: ec,
                sectionHeaderHeight: em,
                sectionFooterHeight: ed
            }
        },
        el = i.memo(function(e) {
            let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: a,
                emojiSize: s,
                onEmojiSelect: r,
                sectionDescriptors: o,
                rowCountBySection: f,
                collapsedSections: m,
                setCollapsedSections: I,
                getEmojiItemProps: _,
                getEmojiRowProps: N,
                rowCount: P,
                isUsingKeyboardNavigation: j,
                channelGuildId: U,
                messageId: D,
                isBurstReaction: k,
                listHeaderClassName: w
            } = e, F = i.useRef(!1), G = S.EmojiPickerStore.useStore(e => e.activeCategoryIndex), H = (0, T.useExpressionPickerStore)(e => e.searchQuery), Y = x.AnimateEmoji.useSetting(), z = (0, c.useStateFromStores)([y.default], () => y.default.getCurrentUser()), Z = (0, L.isPremium)(z), {
                location: J
            } = (0, E.useAnalyticsContext)(), {
                analyticsLocations: q
            } = (0, C.default)(), [X, Q] = i.useState(0), [$, ee] = i.useState(!1), [el, ei] = i.useState(0), ea = (0, c.useStateFromStores)([g.default], () => g.default.useReducedMotion), es = (0, u.useSpring)({
                transform: $ ? "translateY(0%)" : "translateY(120%)",
                opacity: $ ? 1 : 0,
                config: {
                    tension: 120,
                    friction: 14
                },
                immediate: ea
            }), er = o.some(e => e.isNitroLocked), {
                enabled: eo
            } = b.default.useExperiment({
                location: "Emoji Picker List"
            }, {
                autoTrackExposure: er
            }), {
                listPadding: eu,
                renderRow: ed,
                renderSection: ec,
                renderSectionHeader: ef,
                renderSectionFooter: em,
                sectionMarginBottom: ep,
                sectionHeaderHeight: eh,
                sectionFooterHeight: eE
            } = en({
                collapsedSections: m,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: r,
                searchQuery: H,
                sectionDescriptors: o,
                setCollapsedSections: I,
                getEmojiItemProps: _,
                getEmojiRowProps: N,
                isScrolling: F,
                isUsingKeyboardNavigation: j,
                allowAnimatedEmoji: Y,
                channelGuildId: U,
                messageId: D,
                isBurstReaction: k,
                listHeaderClassName: w,
                activeSectionIndex: X,
                upsellGlowOpacity: el,
                enableNitroUpsell: eo
            }), eg = (0, v.useShowUpsellForScrollPosition)({
                listRef: a,
                searchQuery: H,
                setShowUpsell: ee,
                setUpsellGlowOpacity: ei,
                emojiSectionDescriptors: o
            }), eC = (0, v.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: G,
                isScrolling: F,
                listRef: a,
                onActiveCategoryIndexChange: e => {
                    Q(e), "" === H && S.EmojiPickerStore.setActiveCategoryIndex(e)
                },
                scrollOffset: 0,
                searchQuery: H,
                disableForSearch: !1
            });
            (0, v.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: H,
                activeCategoryIndex: G,
                listRef: a
            });
            let eS = i.useCallback(e => {
                    eo && eg(e), eC(e)
                }, [eg, eC, eo]),
                eT = o.length > 0;
            return i.useEffect(() => {
                $ && M.default.track(B.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: V.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
                    location: J,
                    location_stack: q
                })
            }, [J, q, $]), i.useEffect(() => {
                "" !== H && (ei(0), ee(!1))
            }, [H]), (0, l.jsxs)("div", {
                className: W.listWrapper,
                children: [eT ? (0, l.jsx)(O.default, {
                    role: "none presentation",
                    className: W.list,
                    listPadding: eu,
                    onScroll: eS,
                    renderRow: ed,
                    renderSection: ec,
                    renderSectionHeader: ef,
                    renderSectionFooter: em,
                    rowCount: P,
                    rowCountBySection: f,
                    rowHeight: et(s),
                    sectionHeaderHeight: eh,
                    sectionMarginBottom: ep,
                    sectionFooterHeight: eE,
                    stickyHeaders: !0,
                    ref: a
                }) : (0, l.jsx)(h.default, {
                    message: K.default.Messages.NO_EMOJI_SEARCH_RESULTS,
                    className: W.noSearchResultsContainer
                }), !eo || Z || d.isMobile ? null : (0, l.jsxs)(u.animated.div, {
                    style: {
                        ...es,
                        opacity: es.opacity
                    },
                    className: W.upsellContainer,
                    children: [(0, l.jsx)(R.default, {
                        width: 16,
                        height: 16,
                        className: W.upsellLock
                    }), (0, l.jsx)(p.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        className: W.upsellText,
                        children: K.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, l.jsx)(A.default, {
                        className: W.upsellButton,
                        size: p.ButtonSizes.TINY,
                        shinyButtonClassName: W.upsellButton,
                        subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: K.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        premiumModalAnalyticsLocation: {
                            section: B.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
                        },
                        tabIndex: $ ? 0 : -1
                    })]
                })]
            })
        });
    var ei = el
}