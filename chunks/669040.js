function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("718017"),
        d = n("873546"),
        _ = n("442837"),
        c = n("946188"),
        E = n("477690"),
        I = n("481060"),
        T = n("788911"),
        f = n("2052"),
        S = n("607070"),
        A = n("906732"),
        h = n("806966"),
        m = n("28546"),
        N = n("691251"),
        O = n("98528"),
        p = n("551058"),
        R = n("536442"),
        C = n("75145"),
        g = n("197115"),
        L = n("695346"),
        D = n("594174"),
        v = n("695464"),
        M = n("242411"),
        y = n("626135"),
        P = n("111361"),
        U = n("624138"),
        b = n("540780"),
        G = n("543241"),
        w = n("883661"),
        B = n("880949"),
        k = n("784222"),
        F = n("566083"),
        V = n("172800"),
        x = n("149203"),
        H = n("981631"),
        Y = n("957825"),
        j = n("474936"),
        W = n("689938"),
        K = n("419651");
    let z = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
        X = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
        Q = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
        q = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        Z = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
        J = (0, U.cssValueToNumber)(E.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        $ = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
        ee = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
        et = (0, U.cssValueToNumber)(E.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        en = e => e + 2 * et,
        ei = e => {
            let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: s,
                emojiSize: o,
                onEmojiSelect: u,
                searchQuery: d,
                sectionDescriptors: E,
                setCollapsedSections: I,
                getEmojiItemProps: T,
                getEmojiRowProps: S,
                isScrolling: A,
                isUsingKeyboardNavigation: m,
                allowAnimatedEmoji: O,
                channelGuildId: g,
                messageId: L,
                isBurstReaction: D,
                listHeaderClassName: v,
                activeSectionIndex: M,
                upsellGlowOpacity: P,
                enableNitroUpsell: U
            } = e, b = (0, f.useAnalyticsContext)(), j = r.useRef(H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), W = r.useMemo(() => "" !== n ? c.default.convert.toCodePoint(n) : "", [n]), et = r.useCallback(e => {
                if (!U) return !1;
                let t = E[e],
                    n = E[e + 1];
                return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
            }, [U, E]), en = r.useCallback(e => {
                if (!U || e >= E.length - 1) return !1;
                let t = E[e],
                    n = E[e + 1];
                return !t.isNitroLocked && n.isNitroLocked
            }, [U, E]), ei = r.useCallback(function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = new Set(t),
                    r = t.has(e);
                r ? i.delete(e) : i.add(e), null != n && y.default.track(H.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: b.location,
                    tab: Y.ExpressionPickerViewType.EMOJI,
                    collapsed: !r,
                    guild_id: n.id
                }), I(i)
            }, [b, t, I]), er = r.useCallback(e => {
                let {
                    columnIndex: t,
                    visibleRowIndex: n
                } = e, i = e.type === k.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
                j.current !== H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(j.current), j.current = window.requestAnimationFrame(() => {
                    h.EmojiPickerStore.setInspectedExpressionPosition(t, n, N.InspectedExpressionChangeSource.MOUSE_EVENT), h.EmojiPickerStore.setSearchPlaceholder(i), j.current = H.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
                })
            }, []), es = (0, _.useStateFromStores)([R.HotspotStore], () => R.HotspotStore.hasHotspot(R.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), ea = r.useMemo(() => l().memoize((e, t) => {
                let n = s[e],
                    r = E[t.sectionIndex];
                return (0, i.jsx)(V.default, {
                    emojiDescriptors: n,
                    emojiSize: o,
                    surrogateCodePoint: W,
                    onInspect: er,
                    onSelect: u,
                    getEmojiItemProps: T,
                    getEmojiRowProps: S,
                    isScrolling: A,
                    isUsingKeyboardNavigation: m,
                    rowIndex: e,
                    allowAnimatedEmoji: O,
                    showEmojiFavoriteTooltip: es,
                    channelGuildId: g,
                    category: r.sectionId,
                    selectedItemClassName: K.__invalid_selectedItem,
                    messageId: L,
                    isBurstReaction: D,
                    inNitroLockedSection: r.isNitroLocked
                }, e)
            }), [s, E, o, W, er, u, T, S, A, m, O, es, g, L, D]);
            r.useEffect(() => () => {
                var e, t;
                return null === (t = ea.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
            }, [ea]);
            let eo = r.useMemo(() => l().memoize(e => {
                    let n = E[e];
                    if (null == n) return;
                    let {
                        guild: r,
                        categoryId: s,
                        type: o,
                        sectionId: l
                    } = n;
                    if (o === x.EmojiCategoryTypes.SEARCH_RESULTS) return;
                    let u = o === x.EmojiCategoryTypes.GUILD ? null != r ? (0, i.jsx)(B.default, {
                            guild: r,
                            height: 16,
                            width: 16
                        }) : null : null != s ? (0, i.jsx)(w.default, {
                            categoryId: s,
                            height: 16,
                            width: 16
                        }) : null,
                        d = null == r ? void 0 : r.toString();
                    null != s && (d = (0, G.getStringForEmojiCategory)(s, null == r ? void 0 : r.toString()));
                    let _ = M === e,
                        c = n.isNitroLocked,
                        I = U && c && !_,
                        T = U && c && _;
                    return (0, i.jsx)(p.default, {
                        className: a()(K.header, v, {
                            [K.inactiveNitroHeader]: I,
                            [K.activeNitroHeader]: T
                        }),
                        icon: u,
                        isCollapsed: t.has(l),
                        onClick: () => ei(l, r),
                        children: d
                    }, l)
                }), [E, t, ei, v, M, U]),
                el = r.useCallback((e, n) => {
                    let r = E[e],
                        s = en(e),
                        o = et(e);
                    return (0, i.jsx)("div", {
                        className: a()(K.categorySection, {
                            [K.categorySectionLast]: e === E.length - 1,
                            [K.categorySectionCollapsed]: t.has(r.sectionId),
                            [K.categorySectionNitroLocked]: U && r.isNitroLocked,
                            [K.categorySectionNitroDivider]: s || o
                        }),
                        children: n
                    }, e)
                }, [t, E, U, en, et]),
                eu = r.useCallback(e => {
                    let n = E[e];
                    return n.sectionId !== x.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || U ? en(e) ? (0, i.jsx)(C.default, {
                        glowOpacity: P
                    }) : et(e) ? (0, i.jsx)("div", {
                        className: K.nitroBottomDivider
                    }) : null : (0, i.jsx)(F.default, {
                        className: K.premiumUpsell
                    }, "emoji-picker-inline-upsell")
                }, [E, t, P, U, en, et]),
                ed = r.useCallback(e => {
                    let n = E[e];
                    return n.sectionId !== x.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || U ? en(e) ? 41 : et(e) ? 33 : 0 : ee
                }, [E, t, U, en, et]),
                e_ = r.useCallback(e => {
                    var n;
                    return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || en(e) || et(e) ? 0 : $
                }, [t, E, en, et]),
                ec = r.useMemo(() => ["" !== d ? Z : z, X, Q, q], [d]);
            return {
                listPadding: ec,
                renderRow: ea,
                renderSection: el,
                renderSectionHeader: eo,
                renderSectionFooter: eu,
                sectionMarginBottom: e_,
                sectionHeaderHeight: r.useCallback(e => E[e].type === x.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : J, [E]),
                sectionFooterHeight: ed
            }
        },
        er = r.memo(function(e) {
            let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: s,
                emojiSize: a,
                onEmojiSelect: o,
                sectionDescriptors: l,
                rowCountBySection: c,
                collapsedSections: E,
                setCollapsedSections: N,
                getEmojiItemProps: p,
                getEmojiRowProps: R,
                rowCount: C,
                isUsingKeyboardNavigation: U,
                channelGuildId: G,
                messageId: w,
                isBurstReaction: B,
                listHeaderClassName: k
            } = e, F = r.useRef(!1), V = h.EmojiPickerStore.useStore(e => e.activeCategoryIndex), x = (0, m.useExpressionPickerStore)(e => e.searchQuery), Y = L.AnimateEmoji.useSetting(), z = (0, _.useStateFromStores)([D.default], () => D.default.getCurrentUser()), X = (0, P.isPremium)(z), {
                location: Q
            } = (0, f.useAnalyticsContext)(), {
                analyticsLocations: q
            } = (0, A.default)(), [Z, J] = r.useState(0), [$, ee] = r.useState(!1), [et, er] = r.useState(0), es = (0, _.useStateFromStores)([S.default], () => S.default.useReducedMotion), ea = (0, u.useSpring)({
                transform: $ ? "translateY(0%)" : "translateY(120%)",
                opacity: $ ? 1 : 0,
                config: {
                    tension: 120,
                    friction: 14
                },
                immediate: es
            }), eo = l.some(e => e.isNitroLocked), {
                enabled: el
            } = b.default.useExperiment({
                location: "Emoji Picker List"
            }, {
                autoTrackExposure: eo
            }), {
                listPadding: eu,
                renderRow: ed,
                renderSection: e_,
                renderSectionHeader: ec,
                renderSectionFooter: eE,
                sectionMarginBottom: eI,
                sectionHeaderHeight: eT,
                sectionFooterHeight: ef
            } = ei({
                collapsedSections: E,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: a,
                onEmojiSelect: o,
                searchQuery: x,
                sectionDescriptors: l,
                setCollapsedSections: N,
                getEmojiItemProps: p,
                getEmojiRowProps: R,
                isScrolling: F,
                isUsingKeyboardNavigation: U,
                allowAnimatedEmoji: Y,
                channelGuildId: G,
                messageId: w,
                isBurstReaction: B,
                listHeaderClassName: k,
                activeSectionIndex: Z,
                upsellGlowOpacity: et,
                enableNitroUpsell: el
            }), eS = (0, O.useShowUpsellForScrollPosition)({
                listRef: s,
                searchQuery: x,
                setShowUpsell: ee,
                setUpsellGlowOpacity: er,
                emojiSectionDescriptors: l
            }), eA = (0, O.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: V,
                isScrolling: F,
                listRef: s,
                onActiveCategoryIndexChange: e => {
                    J(e), "" === x && h.EmojiPickerStore.setActiveCategoryIndex(e)
                },
                scrollOffset: 0,
                searchQuery: x,
                disableForSearch: !1
            });
            (0, O.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: x,
                activeCategoryIndex: V,
                listRef: s
            });
            let eh = r.useCallback(e => {
                    el && eS(e), eA(e)
                }, [eS, eA, el]),
                em = l.length > 0;
            return r.useEffect(() => {
                $ && y.default.track(H.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: j.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
                    location: Q,
                    location_stack: q
                })
            }, [Q, q, $]), r.useEffect(() => {
                "" !== x && (er(0), ee(!1))
            }, [x]), (0, i.jsxs)("div", {
                className: K.listWrapper,
                children: [em ? (0, i.jsx)(v.default, {
                    role: "none presentation",
                    className: K.list,
                    listPadding: eu,
                    onScroll: eh,
                    renderRow: ed,
                    renderSection: e_,
                    renderSectionHeader: ec,
                    renderSectionFooter: eE,
                    rowCount: C,
                    rowCountBySection: c,
                    rowHeight: en(a),
                    sectionHeaderHeight: eT,
                    sectionMarginBottom: eI,
                    sectionFooterHeight: ef,
                    stickyHeaders: !0,
                    ref: s
                }) : (0, i.jsx)(T.default, {
                    message: W.default.Messages.NO_EMOJI_SEARCH_RESULTS,
                    className: K.noSearchResultsContainer
                }), !el || X || d.isMobile ? null : (0, i.jsxs)(u.animated.div, {
                    style: {
                        ...ea,
                        opacity: ea.opacity
                    },
                    className: K.upsellContainer,
                    children: [(0, i.jsx)(M.default, {
                        width: 16,
                        height: 16,
                        className: K.upsellLock
                    }), (0, i.jsx)(I.Text, {
                        variant: "text-sm/medium",
                        color: "header-primary",
                        className: K.upsellText,
                        children: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, i.jsx)(g.default, {
                        className: K.upsellButton,
                        size: I.ButtonSizes.TINY,
                        shinyButtonClassName: K.upsellButton,
                        subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: W.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                        premiumModalAnalyticsLocation: {
                            section: H.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
                        },
                        tabIndex: $ ? 0 : -1
                    })]
                })]
            })
        });
    t.default = er
}