function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("337905"),
        u = n("784184"),
        s = n("560897"),
        l = n("289917"),
        c = n("797056"),
        f = n("251384"),
        d = n("689758"),
        _ = n("306912"),
        E = n("808242"),
        p = n("147163"),
        m = n("173348"),
        y = n("870331"),
        I = n("778513"),
        h = n("295030"),
        O = n("389712"),
        T = n("294463"),
        S = n("443699"),
        v = n("624308"),
        g = n("281767"),
        A = n("980671"),
        b = n("941504"),
        N = n("76302");

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var P = (0, I.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
        D = (0, I.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
        L = (0, I.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
        M = (0, I.cssValueToNumber)(a.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
        U = (0, I.cssValueToNumber)(a.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        w = (0, I.cssValueToNumber)(a.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        k = [P, P, P, P],
        G = (D + L) * 2 + P,
        B = U + 2 * w,
        j = function(e) {
            var t = e.activeIndex,
                n = e.stickerPickerCategories,
                o = e.categoryListRef,
                a = e.firstStandardStickerCategoryOffsetTop,
                c = e.setShouldRenderShortcut,
                d = (0, s.useAnalyticsContext)(),
                m = (0, f.useExpressionPickerStore)(function(e) {
                    return "" !== e.searchQuery
                }),
                I = r.useCallback(function(e, o, a) {
                    var s, c, f, I, h, R = (null === (s = n[0]) || void 0 === s ? void 0 : s.type) === T.StickerCategoryTypes.FAVORITE,
                        P = R ? 1 : 0,
                        L = (null === (c = n[P]) || void 0 === c ? void 0 : c.type) === T.StickerCategoryTypes.RECENT,
                        U = n.length > 0,
                        w = n.length;
                    if (0 === o && R) return r.createElement("div", {
                        key: "favorites",
                        role: "listitem",
                        "aria-setsize": w,
                        "aria-posinset": o
                    }, r.createElement(u.Clickable, {
                        "aria-label": b.default.Messages.CATEGORY_FAVORITE,
                        className: i()(N.stickerCategory, N.stickerCategoryGeneric, (C(f = {}, N.stickerCategoryGenericDisabled, U && !R), C(f, N.stickerCategoryGenericSelected, !m && R && 0 === t), f)),
                        onClick: a
                    }, r.createElement(p.default, {
                        className: N.stickerCategoryGenericIcon,
                        height: M,
                        width: M
                    })));
                    if (o === P && L) return r.createElement("div", {
                        key: "recent",
                        role: "listitem",
                        "aria-setsize": w,
                        "aria-posinset": o
                    }, r.createElement(u.Clickable, {
                        "aria-label": b.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                        className: i()(N.stickerCategory, N.stickerCategoryGeneric, (C(I = {}, N.stickerCategoryGenericDisabled, U && !L), C(I, N.stickerCategoryGenericSelected, !m && L && t === P), I)),
                        onClick: a
                    }, r.createElement(E.default, {
                        className: N.stickerCategoryGenericIcon,
                        height: M,
                        width: M
                    })));
                    var k = t === o,
                        G = n[o],
                        B = n[o + 1],
                        j = null != B && G.type === T.StickerCategoryTypes.GUILD && B.type !== T.StickerCategoryTypes.GUILD,
                        F = G.type === T.StickerCategoryTypes.PACK,
                        V = "",
                        H = null;
                    if (G.type === T.StickerCategoryTypes.GUILD || G.type === T.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                        var x = _.default.getGuild(G.id);
                        null != x && (h = x.id, V = x.name, H = r.createElement(l.default, {
                            guild: x,
                            isSelected: k
                        }))
                    } else if (F) {
                        var Y = O.default.getStickerPack(G.id);
                        null != Y && (V = Y.name, H = r.createElement(v.default, {
                            disableAnimation: !k || m,
                            size: D,
                            sticker: (0, S.getStickerPackPreviewSticker)(Y)
                        }))
                    }
                    return r.createElement(r.Fragment, {
                        key: G.id
                    }, r.createElement(u.Tooltip, {
                        position: "right",
                        text: V,
                        tooltipContentClassName: N.__invalid_tooltip
                    }, function(e) {
                        var t, n, s;
                        return r.createElement("div", {
                            role: "listitem",
                            "aria-setsize": w,
                            "aria-posinset": o
                        }, r.createElement(u.Clickable, (n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    C(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e), s = (s = {
                            "aria-label": V,
                            className: i()(N.stickerCategory, (C(t = {}, N.firstPartyCategory, F), C(t, N.firstPartyCategorySelected, !m && k && F), t)),
                            onClick: function() {
                                G.type === T.StickerCategoryTypes.PACK && y.default.track(g.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                    location: null == d ? void 0 : d.location,
                                    tab: A.ExpressionPickerViewType.STICKER,
                                    sticker_pack_id: G.id,
                                    guild_id: h
                                }), a()
                            }
                        }, s), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(s)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
                        }), n), H))
                    }), j ? r.createElement("hr", {
                        key: "separator",
                        className: N.guildCategorySeparator
                    }) : null)
                }, [t, d, m, n]);
            return {
                getScrollOffsetForIndex: r.useCallback(function(e, t) {
                    return t ? G : 0
                }, []),
                renderCategoryListItem: I,
                rowHeight: r.useCallback(function(e, t) {
                    var r = n[t],
                        o = n[t + 1];
                    return D + (null != o && r.type === T.StickerCategoryTypes.GUILD && o.type !== T.StickerCategoryTypes.GUILD ? B : L)
                }, [n]),
                onScroll: r.useCallback(function(e) {
                    var t, n = null === (t = o.current) || void 0 === t ? void 0 : t.getListDimensions();
                    if (null != n) {
                        var r = e + n.height;
                        c(r - U < a)
                    }
                }, [a])
            }
        };
    t.default = function(e) {
        var t, n, o = e.stickersListRef,
            a = e.channel,
            s = r.useRef(null);
        var l = (t = r.useState(!0), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = l[0],
            _ = l[1],
            E = c.StickerPickerStore.useStore(function(e) {
                return e.activeCategoryIndex
            }),
            p = (0, h.useFilteredStickerPackCategories)(a),
            y = r.useMemo(function() {
                var e, t, n = p.filter(function(e) {
                        return e.type === T.StickerCategoryTypes.GUILD
                    }).length,
                    r = n + ((null === (e = p[0]) || void 0 === e ? void 0 : e.type) === T.StickerCategoryTypes.RECENT ? 1 : 0) + ((null === (t = p[0]) || void 0 === t ? void 0 : t.type) === T.StickerCategoryTypes.FAVORITE ? 1 : 0),
                    o = r * (D + L) - L + B;
                return {
                    firstStandardStickerCategoryIndex: r + 1,
                    firstStandardStickerCategoryOffsetTop: o,
                    guildCategoryCount: n,
                    hasFirstPartyStickerPacks: null != p.find(function(e) {
                        return e.type === T.StickerCategoryTypes.PACK
                    })
                }
            }, [p]),
            I = y.firstStandardStickerCategoryIndex,
            O = y.firstStandardStickerCategoryOffsetTop,
            S = y.guildCategoryCount,
            v = y.hasFirstPartyStickerPacks;
        r.useLayoutEffect(function() {
            _(S >= 7)
        }, [S]);
        var g = j({
                activeIndex: E,
                stickerPickerCategories: p,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: O,
                setShouldRenderShortcut: _
            }),
            A = g.renderCategoryListItem,
            b = g.rowHeight,
            P = g.onScroll,
            M = r.useCallback(function(e) {
                var t;
                e(I), null === (t = s.current) || void 0 === t || t.scrollTo(O)
            }, [I, O]);
        return r.createElement(d.default, {
            className: N.categoryList,
            categoryListRef: s,
            expressionsListRef: o,
            store: c.StickerPickerStore,
            listPadding: k,
            onScroll: P,
            renderCategoryListItem: A,
            rowCount: p.length,
            categories: p,
            categoryHeight: b
        }, function(e) {
            return v && f && r.createElement(u.Clickable, {
                className: i()(N.standardStickerShortcut, C({}, N.invisibleShortcut, !f)),
                onClick: function() {
                    return M(e)
                }
            }, r.createElement(m.default, {
                height: 24,
                width: 24
            }))
        })
    }
}