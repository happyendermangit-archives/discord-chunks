function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("143927"),
        i = n("898511"),
        a = n("337905"),
        u = n("784184"),
        s = n("751007"),
        l = n("560897"),
        c = n("649455"),
        f = n("396586"),
        d = n("289917"),
        _ = n("797056"),
        E = n("251384"),
        p = n("512832"),
        m = n("61546"),
        y = n("718775"),
        I = n("53867"),
        h = n("306912"),
        O = n("208454"),
        T = n("222961"),
        S = n("808242"),
        v = n("147163"),
        g = n("870331"),
        A = n("778513"),
        b = n("360978"),
        N = n("922747"),
        R = n("389712"),
        C = n("294463"),
        P = n("443699"),
        D = n("624308"),
        L = n("858133"),
        M = n("734091"),
        U = n("933081"),
        w = n("908278"),
        k = n("281767"),
        G = n("980671"),
        B = n("941504"),
        j = n("626672"),
        F = n("239840");

    function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function H(e, t) {
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
        }(e, t) || Y(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function x(e) {
        return function(e) {
            if (Array.isArray(e)) return V(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Y(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Y(e, t) {
        if (e) {
            if ("string" == typeof e) return V(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
        }
    }
    var W = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
        K = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
        z = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
        X = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
        q = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
        Q = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
        J = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
        Z = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
        $ = (0, A.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
        ee = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
        et = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
        en = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
        er = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
        eo = ee + 2 * en + er,
        ei = et + 2 * en + er,
        ea = [z, q, Q, J],
        eu = [X, q, Q, J],
        es = (0, A.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
        el = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
        ec = function(e) {
            var t = e.onSuggestionClick;
            return r.createElement("div", {
                className: j.searchSuggestions
            }, el.map(function(e) {
                return r.createElement(u.Clickable, {
                    className: j.searchSuggestion,
                    key: e,
                    onClick: function() {
                        return t(e)
                    }
                }, r.createElement(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal"
                }, e))
            }))
        },
        ef = function(e) {
            var t = e.onSelectSticker,
                n = e.channel,
                o = e.currentUser,
                i = (0, l.useAnalyticsContext)(),
                a = (0, f.default)().analyticsLocations,
                u = (0, E.useExpressionPickerStore)(function(e) {
                    return e.searchQuery
                });
            return {
                handleStickerInspect: r.useCallback(function(e) {
                    var t = e.visibleRowIndex,
                        n = e.columnIndex,
                        r = e.gridSectionIndex;
                    _.StickerPickerStore.setActiveCategoryIndex(r), _.StickerPickerStore.setInspectedExpressionPosition(n, t, p.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === C.StickerGridItemTypes.STICKER && _.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
                }, []),
                handleSelect: r.useCallback(function(e) {
                    if (e.type === C.StickerGridItemTypes.STICKER) {
                        var r, s, l = e.packId,
                            c = e.sticker,
                            f = e.type;
                        var d = (r = function(e) {
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
                        }({}, i.location), s = (s = {
                            object: "" === u ? k.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : k.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                        }, s), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(s)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
                        }), r);
                        if (null != c && !(0, N.isSendableSticker)(c, o, n)) {
                            var _ = R.default.getStickerPack(l);
                            null != _ && (g.default.track(k.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                                sticker_id: c.id,
                                sticker_pack_id: l,
                                location: d,
                                location_stack: a
                            }), (0, w.default)({
                                stickerPack: _,
                                analyticsLocations: a
                            }));
                            var E = (0, P.isGuildSticker)(c),
                                p = (0, N.getStickerSendability)(c, o, n);
                            p === N.StickerSendability.SENDABLE_WITH_PREMIUM && (0, b.setShowPremiumUpsell)(!0), E && N.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                            return
                        }
                        f === C.StickerGridItemTypes.STICKER && null != c && t(e)
                    }
                }, [i.location, u, o, n, a, t])
            }
        },
        ed = function(e) {
            var t = e.collapsedStickersCategories,
                n = e.gridWidth,
                o = e.onSelectSticker,
                a = e.getStickerItemProps,
                s = e.getStickerRowProps,
                c = e.gutterWidth,
                f = e.inspectedStickerPosition,
                _ = e.isScrolling,
                E = e.isUsingKeyboardNavigation,
                p = e.stickersGrid,
                m = e.stickersCategories,
                T = e.filteredStickers,
                A = e.ownedStickerPacks,
                b = e.channel,
                N = (0, l.useAnalyticsContext)(),
                M = (0, i.useStateFromStores)([O.default], function() {
                    return O.default.getCurrentUser()
                }),
                w = ef({
                    onSelectSticker: o,
                    channel: b,
                    currentUser: M
                }),
                F = w.handleStickerInspect,
                V = w.handleSelect,
                x = H(r.useState(!1), 2),
                Y = x[0],
                z = x[1],
                X = r.useCallback(function(e) {
                    I.StickerPickerCollapsedSections.updateSetting(Array.from(e))
                }, []),
                q = r.useCallback(function(e) {
                    var t = p[e];
                    return null != t ? r.createElement(U.default, {
                        key: e,
                        getStickerItemProps: a,
                        getStickerRowProps: s,
                        gutterWidth: c,
                        inspectedStickerPosition: f,
                        isScrolling: _,
                        isUsingKeyboardNavigation: E,
                        onInspect: F,
                        onSelect: V,
                        rowIndex: e,
                        stickerClassName: j.sticker,
                        stickerDescriptors: t,
                        stickerSize: n > W ? ee : et,
                        preferAnimation: n <= K,
                        ownedStickerPacks: A,
                        isDisplayingIndividualStickers: !0,
                        channel: b,
                        currentUser: M
                    }) : null
                }, [p, a, s, c, f, _, E, F, V, n, A, b, M]),
                Q = r.useCallback(function(e, t) {
                    return r.createElement("div", {
                        key: e
                    }, t)
                }, []),
                J = r.useCallback(function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.isStickerPack,
                        o = new Set(t),
                        i = t.has(e);
                    i ? o.delete(e) : o.add(e), g.default.track(k.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                        location: null == N ? void 0 : N.location,
                        tab: G.ExpressionPickerViewType.STICKER,
                        collapsed: !i,
                        sticker_pack_id: void 0 === r || r ? e : null
                    }), X(o)
                }, [N, t, X]);
            return {
                renderRow: q,
                renderSection: Q,
                renderSectionHeader: r.useCallback(function(e) {
                    var n = m[e];
                    if (null != T) {
                        var o = T.sendable,
                            i = T.sendableWithPremium;
                        if (0 === e && o.length > 0) return null;
                        var a = o.length > 0 && i.length > 0;
                        return r.createElement(r.Fragment, null, a ? r.createElement("div", {
                            className: j.divider
                        }, r.createElement(u.FormDivider, null)) : null, r.createElement(y.default, {
                            key: "stickers-you-might-like-header",
                            className: j.packHeader,
                            "aria-label": B.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y
                        }, B.default.Messages.STICKERS_YOU_MIGHT_LIKE))
                    }
                    switch (n.type) {
                        case C.StickerCategoryTypes.FAVORITE:
                            return r.createElement(y.default, {
                                key: "header-".concat(n.id),
                                className: j.packHeader,
                                "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                    categoryName: n.name
                                }),
                                icon: r.createElement(v.default, {
                                    height: 16,
                                    width: 16
                                }),
                                isCollapsed: t.has(n.id),
                                onClick: function() {
                                    return J(n.id, {
                                        isStickerPack: !1
                                    })
                                }
                            }, n.name);
                        case C.StickerCategoryTypes.RECENT:
                            return r.createElement(y.default, {
                                key: "header-".concat(n.id),
                                className: j.packHeader,
                                "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                    categoryName: n.name
                                }),
                                icon: r.createElement(S.default, null),
                                isCollapsed: t.has(n.id),
                                onClick: function() {
                                    return J(n.id, {
                                        isStickerPack: !1
                                    })
                                }
                            }, n.name);
                        case C.StickerCategoryTypes.GUILD:
                        case C.StickerCategoryTypes.EMPTY_GUILD_UPSELL:
                            var s = h.default.getGuild(n.id);
                            if (null == s) return null;
                            return r.createElement(y.default, {
                                key: "h".concat(s.id),
                                className: j.packHeader,
                                "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                    categoryName: s.name
                                }),
                                icon: r.createElement(d.default, {
                                    guild: s,
                                    height: 16,
                                    width: 16
                                }),
                                isCollapsed: t.has(s.id),
                                onClick: function() {
                                    return J(s.id)
                                }
                            }, s.name);
                        case C.StickerCategoryTypes.PACK:
                            var l = R.default.getStickerPack(n.id);
                            if (null == l) return null;
                            return r.createElement(y.default, {
                                key: "h".concat(l.id),
                                className: j.packHeader,
                                "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                    categoryName: l.name
                                }),
                                icon: r.createElement(D.default, {
                                    disableAnimation: !0,
                                    size: 12,
                                    sticker: (0, P.getStickerPackPreviewSticker)(l)
                                }),
                                isCollapsed: t.has(l.id),
                                onClick: function() {
                                    return J(l.id)
                                }
                            }, l.name)
                    }
                }, [t, m, J, T]),
                sectionHeaderHeight: r.useCallback(function(e) {
                    if (null != T) {
                        var t = T.sendable,
                            n = T.sendableWithPremium;
                        return 0 === e && t.length > 0 ? 0 : $ + (t.length > 0 && n.length > 0 ? Z : 0)
                    }
                    return $
                }, [T]),
                renderSectionFooter: r.useCallback(function(e) {
                    var n = m[e],
                        o = t.has(n.id);
                    return n.type !== C.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != T || o ? null : r.createElement(L.default, {
                        key: "sticker-picker-empty-guild-inline-upsell-".concat(n.id),
                        className: j.emptyGuildUpsell,
                        guildId: n.id,
                        channel: b,
                        shouldTrackUpsellViewed: !Y,
                        setTrackedUpsellViewed: z
                    })
                }, [m, t, T, b, Y]),
                sectionFooterHeight: r.useCallback(function(e) {
                    var n = m[e],
                        r = t.has(n.id);
                    return n.type !== C.StickerCategoryTypes.EMPTY_GUILD_UPSELL || r ? 0 : es
                }, [m, t])
            }
        },
        e_ = r.forwardRef(function(e, t) {
            var n = e.collapsedStickersCategories,
                a = e.gridWidth,
                u = e.filteredStickers,
                l = e.getStickerItemProps,
                d = e.getStickerRowProps,
                p = e.gutterWidth,
                y = e.isUsingKeyboardNavigation,
                I = e.onSelectSticker,
                h = e.rowCount,
                O = e.rowCountBySection,
                S = e.stickersCategories,
                v = e.stickersGrid,
                g = e.channel,
                A = r.useRef(!1),
                b = r.useRef(null),
                N = H(_.StickerPickerStore.useStore(function(e) {
                    return [e.activeCategoryIndex, e.inspectedExpressionPosition]
                }, o.default), 2),
                C = N[0],
                P = N[1],
                D = (0, f.default)(c.default.STICKER_PICKER).analyticsLocations,
                L = (0, E.useExpressionPickerStore)(function(e) {
                    return e.searchQuery
                }),
                U = (0, i.useStateFromStores)([R.default], function() {
                    return R.default.getPremiumPacks()
                }),
                w = ed({
                    collapsedStickersCategories: n,
                    gridWidth: a,
                    stickersCategories: S,
                    stickersGrid: v,
                    isScrolling: A,
                    isUsingKeyboardNavigation: y,
                    onSelectSticker: I,
                    getStickerItemProps: l,
                    getStickerRowProps: d,
                    gutterWidth: p,
                    inspectedStickerPosition: P,
                    filteredStickers: u,
                    ownedStickerPacks: r.useMemo(function() {
                        return new Set(U.map(function(e) {
                            return e.id
                        }))
                    }, [U]),
                    channel: g
                }),
                k = w.renderRow,
                G = w.renderSection,
                V = w.renderSectionFooter,
                Y = w.sectionFooterHeight,
                K = w.renderSectionHeader,
                z = w.sectionHeaderHeight,
                X = (0, m.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: C,
                    isScrolling: A,
                    listRef: b,
                    onActiveCategoryIndexChange: _.StickerPickerStore.setActiveCategoryIndex,
                    scrollOffset: 20,
                    searchQuery: L
                });
            return (0, m.useSynchronizedScrollPositionForActiveCategoryIndex)({
                searchQuery: L,
                activeCategoryIndex: C,
                listRef: b
            }), r.useImperativeHandle(t, function() {
                return {
                    scrollTo: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = b.current) || void 0 === e ? void 0 : e.scrollTo.apply(e, x(n))
                    },
                    getRowDescriptors: function() {
                        var e, t;
                        return null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                    },
                    getSectionDescriptors: function() {
                        var e, t;
                        return null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                    },
                    scrollToSectionTop: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = b.current) || void 0 === e ? void 0 : e.scrollToSectionTop.apply(e, x(n))
                    },
                    scrollRowIntoView: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = b.current) || void 0 === e ? void 0 : e.scrollRowIntoView.apply(e, x(n))
                    },
                    getScrollerNode: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = b.current) || void 0 === e ? void 0 : e.getScrollerNode.apply(e, x(n))
                    },
                    scrollIntoViewNode: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = b.current) || void 0 === e ? void 0 : e.scrollIntoViewNode.apply(e, x(n))
                    },
                    getListDimensions: function() {
                        for (var e, t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.getListDimensions.apply(e, x(r))) && void 0 !== t ? t : {
                            height: -1,
                            totalHeight: -1
                        }
                    }
                }
            }, []), r.createElement(f.AnalyticsLocationProvider, {
                value: D
            }, r.createElement("div", {
                className: j.wrapper
            }, null != u && 0 === u.sendable.length && 0 === u.sendableWithPremium.length ? r.createElement(s.default, {
                message: B.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                className: j.__invalid_noSearchResultsContainer,
                noResultsImageURL: F,
                suggestions: r.createElement(ec, {
                    onSuggestionClick: function(e) {
                        return (0, E.setSearchQuery)(e, !0)
                    }
                })
            }) : r.createElement(T.default, {
                role: "none presentation",
                listPadding: null != u ? eu : ea,
                onScroll: X,
                renderRow: k,
                renderSection: null == u ? G : void 0,
                renderSectionHeader: K,
                renderSectionFooter: V,
                rowCount: h,
                rowCountBySection: O,
                rowHeight: a > W ? eo : ei,
                sectionHeaderHeight: z,
                sectionFooterHeight: Y,
                stickyHeaders: !0,
                ref: b
            }), r.createElement(M.default, {
                stickersGrid: v
            })))
        });
    t.default = e_
}