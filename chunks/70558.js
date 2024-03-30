function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("718017"),
        l = n("56300"),
        c = n("898511"),
        f = n("946188"),
        d = n("337905"),
        _ = n("784184"),
        E = n("751007"),
        p = n("560897"),
        m = n("622780"),
        y = n("396586"),
        I = n("797056"),
        h = n("251384"),
        O = n("512832"),
        T = n("61546"),
        S = n("718775"),
        v = n("417529"),
        g = n("118070"),
        A = n("742971"),
        b = n("53867"),
        N = n("208454"),
        R = n("222961"),
        C = n("451962"),
        P = n("870331"),
        D = n("32950"),
        L = n("778513"),
        M = n("418893"),
        U = n("276328"),
        w = n("428855"),
        k = n("289917"),
        G = n("458821"),
        B = n("991003"),
        j = n("379833"),
        F = n("644037"),
        V = n("281767"),
        H = n("980671"),
        x = n("868615"),
        Y = n("941504"),
        W = n("419651");

    function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function z(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function X(e, t) {
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
                if ("string" == typeof e) return K(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var q = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
        Q = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
        J = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
        Z = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
        $ = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
        ee = (0, L.cssValueToNumber)(d.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        et = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
        en = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
        er = (0, L.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
        eo = function(e) {
            var t = e.collapsedSections,
                n = e.diversitySurrogate,
                o = e.emojiGrid,
                a = e.emojiSize,
                s = e.onEmojiSelect,
                l = e.searchQuery,
                d = e.sectionDescriptors,
                _ = e.setCollapsedSections,
                E = e.getEmojiItemProps,
                m = e.getEmojiRowProps,
                y = e.isScrolling,
                h = e.isUsingKeyboardNavigation,
                T = e.allowAnimatedEmoji,
                A = e.channelGuildId,
                b = e.messageId,
                N = e.isBurstReaction,
                R = e.listHeaderClassName,
                C = e.activeSectionIndex,
                D = e.upsellGlowOpacity,
                L = e.enableNitroUpsell,
                M = (0, p.useAnalyticsContext)(),
                x = r.useRef(V.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID),
                Y = r.useMemo(function() {
                    return "" !== n ? f.default.convert.toCodePoint(n) : ""
                }, [n]),
                K = r.useCallback(function(e) {
                    if (!L) return !1;
                    var t = d[e],
                        n = d[e + 1];
                    return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
                }, [L, d]),
                X = r.useCallback(function(e) {
                    if (!L || e >= d.length - 1) return !1;
                    var t = d[e],
                        n = d[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked
                }, [L, d]),
                er = r.useCallback(function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        o = t.has(e);
                    o ? r.delete(e) : r.add(e), null != n && P.default.track(V.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                        location: M.location,
                        tab: H.ExpressionPickerViewType.EMOJI,
                        collapsed: !o,
                        guild_id: n.id
                    }), _(r)
                }, [M, t, _]),
                eo = r.useCallback(function(e) {
                    var t = e.columnIndex,
                        n = e.visibleRowIndex,
                        r = e.type === G.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
                    x.current !== V.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(x.current), x.current = window.requestAnimationFrame(function() {
                        I.EmojiPickerStore.setInspectedExpressionPosition(t, n, O.InspectedExpressionChangeSource.MOUSE_EVENT), I.EmojiPickerStore.setSearchPlaceholder(r), x.current = V.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
                    })
                }, []),
                ei = (0, c.useStateFromStores)([v.HotspotStore], function() {
                    return v.HotspotStore.hasHotspot(v.HotspotLocations.FAVORITE_EMOJI_TOOLTIP)
                }, []),
                ea = r.useMemo(function() {
                    return u().memoize(function(e, t) {
                        var n = o[e],
                            i = d[t.sectionIndex];
                        return r.createElement(j.default, {
                            key: e,
                            emojiDescriptors: n,
                            emojiSize: a,
                            surrogateCodePoint: Y,
                            onInspect: eo,
                            onSelect: s,
                            getEmojiItemProps: E,
                            getEmojiRowProps: m,
                            isScrolling: y,
                            isUsingKeyboardNavigation: h,
                            rowIndex: e,
                            allowAnimatedEmoji: T,
                            showEmojiFavoriteTooltip: ei,
                            channelGuildId: A,
                            category: i.sectionId,
                            selectedItemClassName: W.__invalid_selectedItem,
                            messageId: b,
                            isBurstReaction: N,
                            inNitroLockedSection: i.isNitroLocked
                        })
                    })
                }, [o, d, a, Y, eo, s, E, m, y, h, T, ei, A, b, N]);
            r.useEffect(function() {
                return function() {
                    var e, t;
                    return null === (t = ea.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
                }
            }, [ea]);
            var eu = r.useMemo(function() {
                    return u().memoize(function(e) {
                        var n, o = d[e];
                        if (null != o) {
                            var a = o.guild,
                                u = o.categoryId,
                                s = o.type,
                                l = o.sectionId;
                            if (s !== F.EmojiCategoryTypes.SEARCH_RESULTS) {
                                var c = s === F.EmojiCategoryTypes.GUILD ? null != a ? r.createElement(k.default, {
                                        guild: a,
                                        height: 16,
                                        width: 16
                                    }) : null : null != u ? r.createElement(w.default, {
                                        categoryId: u,
                                        height: 16,
                                        width: 16
                                    }) : null,
                                    f = null == a ? void 0 : a.toString();
                                null != u && (f = (0, U.getStringForEmojiCategory)(u, null == a ? void 0 : a.toString()));
                                var _ = C === e,
                                    E = o.isNitroLocked,
                                    p = L && E && !_,
                                    m = L && E && _;
                                return r.createElement(S.default, {
                                    key: l,
                                    className: i()(W.header, R, (z(n = {}, W.inactiveNitroHeader, p), z(n, W.activeNitroHeader, m), n)),
                                    icon: c,
                                    isCollapsed: t.has(l),
                                    onClick: function() {
                                        return er(l, a)
                                    }
                                }, f)
                            }
                        }
                    })
                }, [d, t, er, R, C, L]),
                es = r.useCallback(function(e, n) {
                    var o, a = d[e],
                        u = X(e),
                        s = K(e);
                    return r.createElement("div", {
                        key: e,
                        className: i()(W.categorySection, (z(o = {}, W.categorySectionLast, e === d.length - 1), z(o, W.categorySectionCollapsed, t.has(a.sectionId)), z(o, W.categorySectionNitroLocked, L && a.isNitroLocked), z(o, W.categorySectionNitroDivider, u || s), o))
                    }, n)
                }, [t, d, L, X, K]),
                el = r.useCallback(function(e) {
                    var n = d[e];
                    return n.sectionId !== F.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || L ? X(e) ? r.createElement(g.default, {
                        glowOpacity: D
                    }) : K(e) ? r.createElement("div", {
                        className: W.nitroBottomDivider
                    }) : null : r.createElement(B.default, {
                        key: "emoji-picker-inline-upsell",
                        className: W.premiumUpsell
                    })
                }, [d, t, D, L, X, K]),
                ec = r.useCallback(function(e) {
                    var n = d[e];
                    return n.sectionId !== F.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(n.sectionId) || L ? X(e) ? 41 : K(e) ? 33 : 0 : en
                }, [d, t, L, X, K]),
                ef = r.useCallback(function(e) {
                    var n;
                    return e === d.length - 1 || t.has(null === (n = d[e]) || void 0 === n ? void 0 : n.sectionId) || X(e) || K(e) ? 0 : et
                }, [t, d, X, K]);
            return {
                listPadding: r.useMemo(function() {
                    return ["" !== l ? $ : q, Q, J, Z]
                }, [l]),
                renderRow: ea,
                renderSection: es,
                renderSectionHeader: eu,
                renderSectionFooter: el,
                sectionMarginBottom: ef,
                sectionHeaderHeight: r.useCallback(function(e) {
                    return d[e].type === F.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : ee
                }, [d]),
                sectionFooterHeight: ec
            }
        },
        ei = r.memo(function(e) {
            var t, n, o = e.diversitySurrogate,
                i = e.emojiGrid,
                a = e.emojiListRef,
                u = e.emojiSize,
                f = e.onEmojiSelect,
                d = e.sectionDescriptors,
                O = e.rowCountBySection,
                S = e.collapsedSections,
                v = e.setCollapsedSections,
                g = e.getEmojiItemProps,
                L = e.getEmojiRowProps,
                U = e.rowCount,
                w = e.isUsingKeyboardNavigation,
                k = e.channelGuildId,
                G = e.messageId,
                B = e.isBurstReaction,
                j = e.listHeaderClassName,
                F = r.useRef(!1),
                H = I.EmojiPickerStore.useStore(function(e) {
                    return e.activeCategoryIndex
                }),
                K = (0, h.useExpressionPickerStore)(function(e) {
                    return e.searchQuery
                }),
                q = b.AnimateEmoji.useSetting(),
                Q = (0, c.useStateFromStores)([N.default], function() {
                    return N.default.getCurrentUser()
                }),
                J = (0, D.isPremium)(Q),
                Z = (0, p.useAnalyticsContext)().location,
                $ = (0, y.default)().analyticsLocations,
                ee = X(r.useState(0), 2),
                et = ee[0],
                en = ee[1],
                ei = X(r.useState(!1), 2),
                ea = ei[0],
                eu = ei[1],
                es = X(r.useState(0), 2),
                el = es[0],
                ec = es[1],
                ef = (0, c.useStateFromStores)([m.default], function() {
                    return m.default.useReducedMotion
                }),
                ed = (0, s.useSpring)({
                    transform: ea ? "translateY(0%)" : "translateY(120%)",
                    opacity: ea ? 1 : 0,
                    config: {
                        tension: 120,
                        friction: 14
                    },
                    immediate: ef
                }),
                e_ = d.some(function(e) {
                    return e.isNitroLocked
                }),
                eE = M.default.useExperiment({
                    location: "Emoji Picker List"
                }, {
                    autoTrackExposure: e_
                }).enabled,
                ep = eo({
                    collapsedSections: S,
                    diversitySurrogate: o,
                    emojiGrid: i,
                    emojiSize: u,
                    onEmojiSelect: f,
                    searchQuery: K,
                    sectionDescriptors: d,
                    setCollapsedSections: v,
                    getEmojiItemProps: g,
                    getEmojiRowProps: L,
                    isScrolling: F,
                    isUsingKeyboardNavigation: w,
                    allowAnimatedEmoji: q,
                    channelGuildId: k,
                    messageId: G,
                    isBurstReaction: B,
                    listHeaderClassName: j,
                    activeSectionIndex: et,
                    upsellGlowOpacity: el,
                    enableNitroUpsell: eE
                }),
                em = ep.listPadding,
                ey = ep.renderRow,
                eI = ep.renderSection,
                eh = ep.renderSectionHeader,
                eO = ep.renderSectionFooter,
                eT = ep.sectionMarginBottom,
                eS = ep.sectionHeaderHeight,
                ev = ep.sectionFooterHeight,
                eg = (0, T.useShowUpsellForScrollPosition)({
                    listRef: a,
                    searchQuery: K,
                    setShowUpsell: eu,
                    setUpsellGlowOpacity: ec,
                    emojiSectionDescriptors: d
                }),
                eA = (0, T.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: H,
                    isScrolling: F,
                    listRef: a,
                    onActiveCategoryIndexChange: function(e) {
                        en(e), "" === K && I.EmojiPickerStore.setActiveCategoryIndex(e)
                    },
                    scrollOffset: 0,
                    searchQuery: K,
                    disableForSearch: !1
                });
            (0, T.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: K,
                activeCategoryIndex: H,
                listRef: a
            });
            var eb = r.useCallback(function(e) {
                    eE && eg(e), eA(e)
                }, [eg, eA, eE]),
                eN = d.length > 0;
            return r.useEffect(function() {
                ea && P.default.track(V.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: x.PremiumUpsellTypes.EMOJI_PICKER_FLOATING_UPSELL,
                    location: Z,
                    location_stack: $
                })
            }, [Z, $, ea]), r.useEffect(function() {
                "" !== K && (ec(0), eu(!1))
            }, [K]), r.createElement("div", {
                className: W.listWrapper
            }, eN ? r.createElement(R.default, {
                role: "none presentation",
                className: W.list,
                listPadding: em,
                onScroll: eb,
                renderRow: ey,
                renderSection: eI,
                renderSectionHeader: eh,
                renderSectionFooter: eO,
                rowCount: U,
                rowCountBySection: O,
                rowHeight: u + 2 * er,
                sectionHeaderHeight: eS,
                sectionMarginBottom: eT,
                sectionFooterHeight: ev,
                stickyHeaders: !0,
                ref: a
            }) : r.createElement(E.default, {
                message: Y.default.Messages.NO_EMOJI_SEARCH_RESULTS,
                className: W.noSearchResultsContainer
            }), !eE || J || l.isMobile ? null : r.createElement(s.animated.div, {
                style: (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            z(e, t, n[t])
                        })
                    }
                    return e
                }({}, ed), n = (n = {
                    opacity: ed.opacity
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t),
                className: W.upsellContainer
            }, r.createElement(C.default, {
                width: 16,
                height: 16,
                className: W.upsellLock
            }), r.createElement(_.Text, {
                variant: "text-sm/medium",
                color: "header-primary",
                className: W.upsellText
            }, Y.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE), r.createElement(A.default, {
                className: W.upsellButton,
                size: _.ButtonSizes.TINY,
                shinyButtonClassName: W.upsellButton,
                subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                buttonText: Y.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                premiumModalAnalyticsLocation: {
                    section: V.AnalyticsSections.EMOJI_PICKER_FLOATING_UPSELL
                },
                tabIndex: ea ? 0 : -1
            })))
        });
    t.default = ei
}