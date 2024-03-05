function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ea
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
        v = n("246511"),
        I = n("45961"),
        _ = n("515059"),
        N = n("139321"),
        A = n("454655"),
        x = n("635956"),
        y = n("845579"),
        O = n("697218"),
        R = n("124299"),
        M = n("600785"),
        L = n("599110"),
        P = n("764364"),
        b = n("159885"),
        j = n("429569"),
        U = n("788506"),
        D = n("675280"),
        k = n("917764"),
        w = n("83017"),
        F = n("232786"),
        G = n("842126"),
        B = n("115279"),
        H = n("49111"),
        V = n("13030"),
        K = n("646718"),
        W = n("782340"),
        Y = n("555254");
    let z = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
        Z = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
        J = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
        q = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        X = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
        Q = (0, b.cssValueToNumber)(m.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        $ = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
        ee = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
        et = (0, b.cssValueToNumber)(m.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        en = e => e + 2 * et,
        el = e => {
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
                allowAnimatedEmoji: I,
                channelGuildId: x,
                messageId: y,
                isBurstReaction: O,
                listHeaderClassName: R,
                activeSectionIndex: M,
                upsellGlowOpacity: P,
                enableNitroUpsell: b
            } = e, j = (0, E.useAnalyticsContext)(), K = i.useRef(H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), W = i.useMemo(() => "" !== n ? f.default.convert.toCodePoint(n) : "", [n]), et = i.useCallback(e => {
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
                i ? l.delete(e) : l.add(e), null != n && L.default.track(H.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: j.location,
                    tab: V.ExpressionPickerViewType.EMOJI,
                    collapsed: !i,
                    guild_id: n.id
                }), p(l)
            }, [j, t, p]), ei = i.useCallback(e => {
                let {
                    columnIndex: t,
                    visibleRowIndex: n
                } = e, l = e.type === w.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
                K.current !== H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(K.current), K.current = window.requestAnimationFrame(() => {
                    S.EmojiPickerStore.setInspectedExpressionPosition(t, n, v.InspectedExpressionChangeSource.MOUSE_EVENT), S.EmojiPickerStore.setSearchPlaceholder(l), K.current = H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
                })
            }, []), ea = (0, c.useStateFromStores)([N.HotspotStore], () => N.HotspotStore.hasHotspot(N.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), es = i.useMemo(() => o.memoize((e, t) => {
                let n = a[e],
                    i = m[t.sectionIndex];
                return (0, l.jsx)(G.default, {
                    emojiDescriptors: n,
                    emojiSize: r,
                    surrogateCodePoint: W,
                    onInspect: ei,
                    onSelect: u,
                    getEmojiItemProps: h,
                    getEmojiRowProps: g,
                    isScrolling: C,
                    isUsingKeyboardNavigation: T,
                    rowIndex: e,
                    allowAnimatedEmoji: I,
                    showEmojiFavoriteTooltip: ea,
                    channelGuildId: x,
                    category: i.sectionId,
                    selectedItemClassName: Y.selectedItem,
                    messageId: y,
                    isBurstReaction: O,
                    inNitroLockedSection: i.isNitroLocked
                }, e)
            }), [a, m, r, W, ei, u, h, g, C, T, I, ea, x, y, O]);
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
                    if (r === B.EmojiCategoryTypes.SEARCH_RESULTS) return;
                    let u = r === B.EmojiCategoryTypes.GUILD ? null != i ? (0, l.jsx)(k.default, {
                            guild: i,
                            height: 16,
                            width: 16
                        }) : null : null != a ? (0, l.jsx)(D.default, {
                            categoryId: a,
                            height: 16,
                            width: 16
                        }) : null,
                        d = null == i ? void 0 : i.toString();
                    null != a && (d = (0, U.getStringForEmojiCategory)(a, null == i ? void 0 : i.toString()));
                    let c = M === e,
                        f = n.isNitroLocked,
                        p = b && f && !c,
                        h = b && f && c;
                    return (0, l.jsx)(_.default, {
                        className: s(Y.header, R, {
                            [Y.inactiveNitroHeader]: p,
                            [Y.activeNitroHeader]: h
                        }),
                        icon: u,
                        isCollapsed: t.has(o),
                        onClick: () => el(o, i),
                        children: d
                    }, o)
                }), [m, t, el, R, M, b]),
                eo = i.useCallback((e, n) => {
                    let i = m[e],
                        a = en(e),
                        r = et(e);
                    return (0, l.jsx)("div", {
                        className: s(Y.categorySection, {
                            [Y.categorySectionLast]: e === m.length - 1,
                            [Y.categorySectionCollapsed]: t.has(i.sectionId),
                            [Y.categorySectionNitroLocked]: b && i.isNitroLocked,
                            [Y.categorySectionNitroDivider]: a || r
                        }),
                        children: n
                    }, e)
                }, [t, m, b, en, et]),
                eu = i.useCallback(e => {
                    let n = m[e];
                    return n.sectionId !== B.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || b ? en(e) ? (0, l.jsx)(A.default, {
                        glowOpacity: P
                    }) : et(e) ? (0, l.jsx)("div", {
                        className: Y.nitroBottomDivider
                    }) : null : (0, l.jsx)(F.default, {
                        className: Y.premiumUpsell
                    }, "emoji-picker-inline-upsell")
                }, [m, t, P, b, en, et]),
                ed = i.useCallback(e => {
                    let n = m[e];
                    return n.sectionId !== B.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || b ? en(e) ? 41 : et(e) ? 33 : 0 : ee
                }, [m, t, b, en, et]),
                ec = i.useCallback(e => {
                    var n;
                    return e === m.length - 1 || t.has(null === (n = m[e]) || void 0 === n ? void 0 : n.sectionId) || en(e) || et(e) ? 0 : $
                }, [t, m, en, et]),
                ef = i.useMemo(() => ["" !== d ? X : z, Z, J, q], [d]),
                em = i.useCallback(e => {
                    let t = m[e];
                    return t.type === B.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : Q
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
        ei = i.memo(function(e) {
            let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: a,
                emojiSize: s,
                onEmojiSelect: r,
                sectionDescriptors: o,
                rowCountBySection: f,
                collapsedSections: m,
                setCollapsedSections: v,
                getEmojiItemProps: _,
                getEmojiRowProps: N,
                rowCount: A,
                isUsingKeyboardNavigation: b,
                channelGuildId: U,
                messageId: D,
                isBurstReaction: k,
                listHeaderClassName: w
            } = e, F = i.useRef(!1), G = S.EmojiPickerStore.useStore(e => e.activeCategoryIndex), B = (0, T.useExpressionPickerStore)(e => e.searchQuery), V = y.AnimateEmoji.useSetting(), z = (0, c.useStateFromStores)([O.default], () => O.default.getCurrentUser()), Z = (0, P.isPremium)(z), {
                location: J
            } = (0, E.useAnalyticsContext)(), {
                analyticsLocations: q
            } = (0, C.default)(), [X, Q] = i.useState(0), [$, ee] = i.useState(!1), [et, ei] = i.useState(0), ea = (0, c.useStateFromStores)([g.default], () => g.default.useReducedMotion), es = (0, u.useSpring)({
                transform: $ ? "translateY(0%)" : "translateY(120%)",
                opacity: $ ? 1 : 0,
                config: {
                    tension: 120,
                    friction: 14
                },
                immediate: ea
            }), er = o.some(e => e.isNitroLocked), {
                enabled: eo
            } = j.default.useExperiment({
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
            } = el({
                collapsedSections: m,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: r,
                searchQuery: B,
                sectionDescriptors: o,
                setCollapsedSections: v,
                getEmojiItemProps: _,
                getEmojiRowProps: N,
                isScrolling: F,
                isUsingKeyboardNavigation: b,
                allowAnimatedEmoji: V,
                channelGuildId: U,
                messageId: D,
                isBurstReaction: k,
                listHeaderClassName: w,
                activeSectionIndex: X,
                upsellGlowOpacity: et,
                enableNitroUpsell: eo
            }), eg = (0, I.useShowUpsellForScrollPosition)({
                listRef: a,
                searchQuery: B,
                setShowUpsell: ee,
                setUpsellGlowOpacity: ei,
                emojiSectionDescriptors: o
            }), eC = (0, I.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: G,
                isScrolling: F,
                listRef: a,
                onActiveCategoryIndexChange: e => {
                    Q(e), "" === B && S.EmojiPickerStore.setActiveCategoryIndex(e)
                },
                scrollOffset: 0,
                searchQuery: B,
                disableForSearch: !1
            });
            (0, I.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: B,
                activeCategoryIndex: G,
                listRef: a
            });
            let eS = i.useCallback(e => {
                    eo && eg(e), eC(e)
                }, [eg, eC, eo]),
                eT = o.length > 0;
            return i.useEffect(() => {
                $ && L.default.track(H.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: K.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
                    location: J,
                    location_stack: q
                })
            }, [J, q, $]), i.useEffect(() => {
                "" !== B && (ei(0), ee(!1))
            }, [B]), (0, l.jsxs)("div", {
                className: Y.listWrapper,
                children: [eT ? (0, l.jsx)(R.default, {
                    role: "none presentation",
                    className: Y.list,
                    listPadding: eu,
                    onScroll: eS,
                    renderRow: ed,
                    renderSection: ec,
                    renderSectionHeader: ef,
                    renderSectionFooter: em,
                    rowCount: A,
                    rowCountBySection: f,
                    rowHeight: en(s),
                    sectionHeaderHeight: eh,
                    sectionMarginBottom: ep,
                    sectionFooterHeight: eE,
                    stickyHeaders: !0,
                    ref: a
                }) : (0, l.jsx)(h.default, {
                    message: W.default.Messages.NO_EMOJI_SEARCH_RESULTS,
                    className: Y.noSearchResultsContainer
                }), !eo || Z || d.isMobile ? null : (0, l.jsxs)(u.animated.div, {
                    style: {
                        ...es,
                        opacity: es.opacity
                    },
                    className: Y.upsellContainer,
                    children: [(0, l.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: Y.upsellLock
                    }), (0, l.jsx)(p.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        className: Y.upsellText,
                        children: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, l.jsx)(x.default, {
                        className: Y.upsellButton,
                        size: p.ButtonSizes.TINY,
                        shinyButtonClassName: Y.upsellButton,
                        subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        premiumModalAnalyticsLocation: {
                            section: H.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
                        },
                        tabIndex: $ ? 0 : -1
                    })]
                })]
            })
        });
    var ea = ei
}