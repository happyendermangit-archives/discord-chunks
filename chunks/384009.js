function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("762624"),
        l = n("898511"),
        c = n("337905"),
        f = n("784184"),
        d = n("560897"),
        _ = n("622780"),
        E = n("797056"),
        p = n("689758"),
        m = n("891661"),
        y = n("290976"),
        I = n("227783"),
        h = n("870331"),
        O = n("778513"),
        T = n("418893"),
        S = n("276328"),
        v = n("428855"),
        g = n("289917"),
        A = n("458821"),
        b = n("644037"),
        N = n("281767"),
        R = n("980671"),
        C = n("941504"),
        P = n("52915");

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function L(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var M = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
        U = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
        w = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
        k = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
        G = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
        B = (0, O.cssValueToNumber)(P.__invalid_unicodeCategoryShortcutHeight),
        j = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
        F = (0, O.cssValueToNumber)(c.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
        V = w + U + 2 * G,
        H = M + U,
        x = H + (j + 2 * F),
        Y = w + k + 2 * G;

    function W(e) {
        var t, n, o, a = e.activeIndex,
            u = e.categoryIndex,
            l = e.analyticsContext,
            c = e.categories,
            d = e.category,
            _ = e.handleCategorySelect,
            E = e.isWindowFocused,
            p = e.useReducedMotion,
            y = e.isNitroLocked,
            I = (0, s.useListItem)("expression-guild-".concat(u)),
            O = d.type === b.EmojiCategoryTypes.GUILD ? null : d.id,
            A = a === u,
            C = d.type === b.EmojiCategoryTypes.GUILD ? d.guild : null,
            D = T.default.useExperiment({
                location: "Emoji Picker Category List"
            }, {
                autoTrackExposure: y
            }).enabled;
        var M = r.createElement(f.Clickable, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        L(e, t, n[t])
                    })
                }
                return e
            }({}, I), n = (n = {
                "aria-label": (0, S.getAriaIdForEmojiCategory)(d, C),
                className: i()((L(o = {}, P.categoryItemGuildCategory, null != C), L(o, P.categoryItemDefaultCategory, null == C), L(o, P.categoryItemDefaultCategorySelected, null == C && A), L(o, P.categoryItemRecentEmoji, d.type === b.EmojiCategoryTypes.RECENT), o)),
                onClick: function() {
                    null != C && h.default.track(N.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: null == l ? void 0 : l.location,
                        tab: R.ExpressionPickerViewType.EMOJI,
                        guild_id: C.id
                    }), _(u)
                }
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), null != C ? r.createElement(g.default, {
                guild: C,
                isSelected: A,
                shouldAnimate: !p && E,
                isLocked: D && y
            }) : null, null == C && null != O ? r.createElement(v.default, {
                categoryId: O,
                className: P.categoryIcon,
                height: w,
                width: w
            }) : null),
            U = c[u + 1],
            k = null != U && d.type === b.EmojiCategoryTypes.GUILD && U.type !== b.EmojiCategoryTypes.GUILD;
        return null != C ? r.createElement(r.Fragment, null, r.createElement(m.default, {
            guild: C,
            includeActivity: !1
        }, r.createElement("div", null, M)), k ? r.createElement("hr", {
            key: "separator",
            className: P.guildCategorySeparator
        }) : null) : M
    }
    t.default = function(e) {
        var t, n, o = e.className,
            a = e.emojiListRef,
            s = e.sectionDescriptors,
            c = e.intention,
            m = e.channel,
            h = E.EmojiPickerStore.useStore(function(e) {
                return e.activeCategoryIndex
            }),
            O = (0, A.useCategorySelectHandler)({
                sectionDescriptors: s,
                emojiListRef: a
            }),
            T = (0, d.useAnalyticsContext)(),
            v = (0, S.useEmojiCategories)(c, m),
            g = r.useRef(null),
            N = (0, l.useStateFromStores)([y.default], function() {
                return y.default.isFocused()
            }),
            R = (0, l.useStateFromStores)([_.default], function() {
                return _.default.useReducedMotion
            }, []),
            M = (0, S.useCategoryNitroLockedStates)(c, m, v),
            G = r.useMemo(function() {
                return u().memoize(function(e, t) {
                    var n = v[t];
                    if (null != n) {
                        var o = M[t];
                        return r.createElement(W, {
                            key: t,
                            activeIndex: h,
                            analyticsContext: T,
                            categories: v,
                            category: n,
                            categoryIndex: t,
                            handleCategorySelect: O,
                            isWindowFocused: N,
                            useReducedMotion: R,
                            isNitroLocked: o
                        })
                    }
                })
            }, [h, T, v, O, N, R, M]),
            K = r.useMemo(function() {
                return [8, 8, 0, 8]
            }, []),
            z = r.useCallback(function(e, t) {
                var n = v[t];
                if (n.type === b.EmojiCategoryTypes.RECENT) return V;
                if (n.type === b.EmojiCategoryTypes.GUILD) {
                    var r = v[t + 1];
                    return null != r && r.type !== b.EmojiCategoryTypes.GUILD ? x : H
                }
                return Y
            }, [v]),
            X = r.useMemo(function() {
                var e = 0,
                    t = 0,
                    n = 0,
                    r = 0;
                v.forEach(function(o) {
                    o.type === b.EmojiCategoryTypes.GUILD ? (t += 1, n += 1) : o.type === b.EmojiCategoryTypes.UNICODE ? r += 1 : (e += 1, t += 1)
                });
                var o = V + t * H + x;
                return {
                    nonUnicodeCategoryCount: t,
                    firstUnicodeCategoryIndex: t,
                    firstUnicodeCategoryOffsetTop: o,
                    rowCountBySection: [e, n, r]
                }
            }, [v]),
            q = X.nonUnicodeCategoryCount,
            Q = X.firstUnicodeCategoryIndex,
            J = X.firstUnicodeCategoryOffsetTop,
            Z = X.rowCountBySection;
        var $ = (t = r.useState(!0), n = 2, function(e) {
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
                    if ("string" == typeof e) return D(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            ee = $[0],
            et = $[1];
        r.useLayoutEffect(function() {
            et(q >= 7)
        }, [q]);
        var en = r.useCallback(function(e) {
                var t, n = null === (t = g.current) || void 0 === t ? void 0 : t.getListDimensions();
                null != n && (e + n.height - j >= J ? et(!1) : et(!0))
            }, [J]),
            er = r.useCallback(function(e) {
                var t;
                e(Q), null === (t = g.current) || void 0 === t || t.scrollTo(J)
            }, [J, Q]),
            eo = r.useCallback(function(e, t) {
                var n = v[e];
                if (null == n) return 0;
                var r = ee ? B : 0;
                if (n.type === b.EmojiCategoryTypes.RECENT) return t ? 0 : k;
                if (n.type === b.EmojiCategoryTypes.GUILD) {
                    var o = v[e + 1];
                    return null != o && o.type !== b.EmojiCategoryTypes.GUILD ? t ? j + -2 * F + U + r : U : t ? r : U
                }
                return t ? U + r : 2 * U
            }, [v, ee]),
            ei = r.useMemo(function() {
                return function(e, t) {
                    return r.createElement(r.Fragment, {
                        key: e
                    }, t)
                }
            }, []),
            ea = ee ? "shortcut" : "hiddenshortcut";
        return r.createElement(p.default, {
            categoryListRef: g,
            expressionsListRef: a,
            className: o,
            store: E.EmojiPickerStore,
            categories: v,
            listPadding: K,
            onScroll: en,
            renderCategoryListItem: G,
            renderSection: ei,
            rowCount: v.length,
            categoryHeight: z,
            getScrollOffsetForIndex: eo,
            rowCountBySection: Z
        }, function(e) {
            return q >= 7 && r.createElement(f.Clickable, {
                "aria-hidden": !ee,
                "aria-label": C.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
                className: i()(P.unicodeShortcut, L({}, P.unicodeShortcutInvisible, !ee)),
                tabIndex: ee ? 0 : -1,
                onClick: function() {
                    return er(e)
                },
                key: ea
            }, r.createElement(I.default, {
                height: w,
                width: w
            }))
        })
    }
}