function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ea
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("146606"),
        d = n("394846"),
        c = n("446674"),
        f = n("895547"),
        p = n("769846"),
        m = n("77078"),
        h = n("96386"),
        x = n("997289"),
        E = n("206230"),
        y = n("685665"),
        g = n("986632"),
        S = n("538282"),
        C = n("246511"),
        _ = n("45961"),
        T = n("515059"),
        I = n("139321"),
        v = n("454655"),
        N = n("635956"),
        A = n("845579"),
        R = n("697218"),
        O = n("124299"),
        M = n("600785"),
        k = n("599110"),
        L = n("764364"),
        P = n("159885"),
        b = n("429569"),
        j = n("788506"),
        U = n("675280"),
        D = n("917764"),
        w = n("83017"),
        F = n("232786"),
        G = n("842126"),
        H = n("115279"),
        B = n("49111"),
        V = n("13030"),
        K = n("646718"),
        W = n("782340"),
        Y = n("555254");
    let z = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
        Z = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
        J = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
        Q = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        q = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
        X = (0, P.cssValueToNumber)(p.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        $ = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
        ee = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
        et = (0, P.cssValueToNumber)(p.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        en = e => e + 2 * et,
        ei = e => {
            let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: r,
                onEmojiSelect: u,
                searchQuery: d,
                sectionDescriptors: p,
                setCollapsedSections: m,
                getEmojiItemProps: h,
                getEmojiRowProps: E,
                isScrolling: y,
                isUsingKeyboardNavigation: S,
                allowAnimatedEmoji: _,
                channelGuildId: N,
                messageId: A,
                isBurstReaction: R,
                listHeaderClassName: O,
                activeSectionIndex: M,
                upsellGlowOpacity: L,
                enableNitroUpsell: P
            } = e, b = (0, x.useAnalyticsContext)(), K = l.useRef(B.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), W = l.useMemo(() => "" !== n ? f.default.convert.toCodePoint(n) : "", [n]), et = l.useCallback(e => {
                if (!P) return !1;
                let t = p[e],
                    n = p[e + 1];
                return e >= p.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
            }, [P, p]), en = l.useCallback(e => {
                if (!P || e >= p.length - 1) return !1;
                let t = p[e],
                    n = p[e + 1];
                return !t.isNitroLocked && n.isNitroLocked
            }, [P, p]), ei = l.useCallback(function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = new Set(t),
                    l = t.has(e);
                l ? i.delete(e) : i.add(e), null != n && k.default.track(B.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: b.location,
                    tab: V.ExpressionPickerViewType.EMOJI,
                    collapsed: !l,
                    guild_id: n.id
                }), m(i)
            }, [b, t, m]), el = l.useCallback(e => {
                let {
                    columnIndex: t,
                    visibleRowIndex: n
                } = e, i = e.type === w.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
                K.current !== B.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(K.current), K.current = window.requestAnimationFrame(() => {
                    g.EmojiPickerStore.setInspectedExpressionPosition(t, n, C.InspectedExpressionChangeSource.MOUSE_EVENT), g.EmojiPickerStore.setSearchPlaceholder(i), K.current = B.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
                })
            }, []), ea = (0, c.useStateFromStores)([I.HotspotStore], () => I.HotspotStore.hasHotspot(I.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), es = l.useMemo(() => o.memoize((e, t) => {
                let n = a[e],
                    l = p[t.sectionIndex];
                return (0, i.jsx)(G.default, {
                    emojiDescriptors: n,
                    emojiSize: r,
                    surrogateCodePoint: W,
                    onInspect: el,
                    onSelect: u,
                    getEmojiItemProps: h,
                    getEmojiRowProps: E,
                    isScrolling: y,
                    isUsingKeyboardNavigation: S,
                    rowIndex: e,
                    allowAnimatedEmoji: _,
                    showEmojiFavoriteTooltip: ea,
                    channelGuildId: N,
                    category: l.sectionId,
                    selectedItemClassName: Y.selectedItem,
                    messageId: A,
                    isBurstReaction: R,
                    inNitroLockedSection: l.isNitroLocked
                }, e)
            }), [a, p, r, W, el, u, h, E, y, S, _, ea, N, A, R]);
            l.useEffect(() => () => {
                var e, t;
                return null === (t = es.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
            }, [es]);
            let er = l.useMemo(() => o.memoize(e => {
                    let n = p[e];
                    if (null == n) return;
                    let {
                        guild: l,
                        categoryId: a,
                        type: r,
                        sectionId: o
                    } = n;
                    if (r === H.EmojiCategoryTypes.SEARCH_RESULTS) return;
                    let u = r === H.EmojiCategoryTypes.GUILD ? null != l ? (0, i.jsx)(D.default, {
                            guild: l,
                            height: 16,
                            width: 16
                        }) : null : null != a ? (0, i.jsx)(U.default, {
                            categoryId: a,
                            height: 16,
                            width: 16
                        }) : null,
                        d = null == l ? void 0 : l.toString();
                    null != a && (d = (0, j.getStringForEmojiCategory)(a, null == l ? void 0 : l.toString()));
                    let c = M === e,
                        f = n.isNitroLocked,
                        m = P && f && !c,
                        h = P && f && c;
                    return (0, i.jsx)(T.default, {
                        className: s(Y.header, O, {
                            [Y.inactiveNitroHeader]: m,
                            [Y.activeNitroHeader]: h
                        }),
                        icon: u,
                        isCollapsed: t.has(o),
                        onClick: () => ei(o, l),
                        children: d
                    }, o)
                }), [p, t, ei, O, M, P]),
                eo = l.useCallback((e, n) => {
                    let l = p[e],
                        a = en(e),
                        r = et(e);
                    return (0, i.jsx)("div", {
                        className: s(Y.categorySection, {
                            [Y.categorySectionLast]: e === p.length - 1,
                            [Y.categorySectionCollapsed]: t.has(l.sectionId),
                            [Y.categorySectionNitroLocked]: P && l.isNitroLocked,
                            [Y.categorySectionNitroDivider]: a || r
                        }),
                        children: n
                    }, e)
                }, [t, p, P, en, et]),
                eu = l.useCallback(e => {
                    let n = p[e];
                    return n.sectionId !== H.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || P ? en(e) ? (0, i.jsx)(v.default, {
                        glowOpacity: L
                    }) : et(e) ? (0, i.jsx)("div", {
                        className: Y.nitroBottomDivider
                    }) : null : (0, i.jsx)(F.default, {
                        className: Y.premiumUpsell
                    }, "emoji-picker-inline-upsell")
                }, [p, t, L, P, en, et]),
                ed = l.useCallback(e => {
                    let n = p[e];
                    return n.sectionId !== H.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || P ? en(e) ? 41 : et(e) ? 33 : 0 : ee
                }, [p, t, P, en, et]),
                ec = l.useCallback(e => {
                    var n;
                    return e === p.length - 1 || t.has(null === (n = p[e]) || void 0 === n ? void 0 : n.sectionId) || en(e) || et(e) ? 0 : $
                }, [t, p, en, et]),
                ef = l.useMemo(() => ["" !== d ? q : z, Z, J, Q], [d]),
                ep = l.useCallback(e => {
                    let t = p[e];
                    return t.type === H.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : X
                }, [p]);
            return {
                listPadding: ef,
                renderRow: es,
                renderSection: eo,
                renderSectionHeader: er,
                renderSectionFooter: eu,
                sectionMarginBottom: ec,
                sectionHeaderHeight: ep,
                sectionFooterHeight: ed
            }
        },
        el = l.memo(function(e) {
            let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: a,
                emojiSize: s,
                onEmojiSelect: r,
                sectionDescriptors: o,
                rowCountBySection: f,
                collapsedSections: p,
                setCollapsedSections: C,
                getEmojiItemProps: T,
                getEmojiRowProps: I,
                rowCount: v,
                isUsingKeyboardNavigation: P,
                channelGuildId: j,
                messageId: U,
                isBurstReaction: D,
                listHeaderClassName: w
            } = e, F = l.useRef(!1), G = g.EmojiPickerStore.useStore(e => e.activeCategoryIndex), H = (0, S.useExpressionPickerStore)(e => e.searchQuery), V = A.AnimateEmoji.useSetting(), z = (0, c.useStateFromStores)([R.default], () => R.default.getCurrentUser()), Z = (0, L.isPremium)(z), {
                location: J
            } = (0, x.useAnalyticsContext)(), {
                analyticsLocations: Q
            } = (0, y.default)(), [q, X] = l.useState(0), [$, ee] = l.useState(!1), [et, el] = l.useState(0), ea = (0, c.useStateFromStores)([E.default], () => E.default.useReducedMotion), es = (0, u.useSpring)({
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
                renderSectionFooter: ep,
                sectionMarginBottom: em,
                sectionHeaderHeight: eh,
                sectionFooterHeight: ex
            } = ei({
                collapsedSections: p,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: r,
                searchQuery: H,
                sectionDescriptors: o,
                setCollapsedSections: C,
                getEmojiItemProps: T,
                getEmojiRowProps: I,
                isScrolling: F,
                isUsingKeyboardNavigation: P,
                allowAnimatedEmoji: V,
                channelGuildId: j,
                messageId: U,
                isBurstReaction: D,
                listHeaderClassName: w,
                activeSectionIndex: q,
                upsellGlowOpacity: et,
                enableNitroUpsell: eo
            }), eE = (0, _.useShowUpsellForScrollPosition)({
                listRef: a,
                searchQuery: H,
                setShowUpsell: ee,
                setUpsellGlowOpacity: el,
                emojiSectionDescriptors: o
            }), ey = (0, _.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: G,
                isScrolling: F,
                listRef: a,
                onActiveCategoryIndexChange: e => {
                    X(e), "" === H && g.EmojiPickerStore.setActiveCategoryIndex(e)
                },
                scrollOffset: 0,
                searchQuery: H,
                disableForSearch: !1
            });
            (0, _.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: H,
                activeCategoryIndex: G,
                listRef: a
            });
            let eg = l.useCallback(e => {
                    eo && eE(e), ey(e)
                }, [eE, ey, eo]),
                eS = o.length > 0;
            return l.useEffect(() => {
                $ && k.default.track(B.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: K.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
                    location: J,
                    location_stack: Q
                })
            }, [J, Q, $]), l.useEffect(() => {
                "" !== H && (el(0), ee(!1))
            }, [H]), (0, i.jsxs)("div", {
                className: Y.listWrapper,
                children: [eS ? (0, i.jsx)(O.default, {
                    role: "none presentation",
                    className: Y.list,
                    listPadding: eu,
                    onScroll: eg,
                    renderRow: ed,
                    renderSection: ec,
                    renderSectionHeader: ef,
                    renderSectionFooter: ep,
                    rowCount: v,
                    rowCountBySection: f,
                    rowHeight: en(s),
                    sectionHeaderHeight: eh,
                    sectionMarginBottom: em,
                    sectionFooterHeight: ex,
                    stickyHeaders: !0,
                    ref: a
                }) : (0, i.jsx)(h.default, {
                    message: W.default.Messages.NO_EMOJI_SEARCH_RESULTS,
                    className: Y.noSearchResultsContainer
                }), !eo || Z || d.isMobile ? null : (0, i.jsxs)(u.animated.div, {
                    style: {
                        ...es,
                        opacity: es.opacity
                    },
                    className: Y.upsellContainer,
                    children: [(0, i.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: Y.upsellLock
                    }), (0, i.jsx)(m.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        className: Y.upsellText,
                        children: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, i.jsx)(N.default, {
                        className: Y.upsellButton,
                        size: m.ButtonSizes.TINY,
                        shinyButtonClassName: Y.upsellButton,
                        subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        premiumModalAnalyticsLocation: {
                            section: B.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
                        },
                        tabIndex: $ ? 0 : -1
                    })]
                })]
            })
        });
    var ea = el
}