function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("716282"),
        s = n("148527"),
        l = n("950763"),
        c = n("797056"),
        f = n("878943"),
        d = n("968574"),
        _ = n("749904"),
        E = n("819439"),
        p = n("544811"),
        m = n("458821"),
        y = n("356444"),
        I = n("644037"),
        h = n("281767"),
        O = n("941504"),
        T = n("975903");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                v(e, t, n[t])
            })
        }
        return e
    }

    function A(e, t) {
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

    function b(e, t) {
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
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = function(e) {
        var t, n, o = e.emojiDescriptors,
            S = e.emojiSize,
            N = e.onSelect,
            R = e.onInspect,
            C = e.surrogateCodePoint,
            P = e.getEmojiItemProps,
            D = e.getEmojiRowProps,
            L = e.isScrolling,
            M = e.isUsingKeyboardNavigation,
            U = e.rowIndex,
            w = e.allowAnimatedEmoji,
            k = e.showEmojiFavoriteTooltip,
            G = e.channelGuildId,
            B = e.category,
            j = e.selectedItemClassName,
            F = e.messageId,
            V = e.isBurstReaction,
            H = e.inNitroLockedSection,
            x = p.default.useExperiment({
                location: "EmojiPicker"
            }, {
                autoTrackExposure: !1
            }).enabled,
            Y = c.EmojiPickerStore.getState(),
            W = b(r.useState(Y.inspectedExpressionPosition), 2),
            K = W[0],
            z = W[1],
            X = b((0, u.default)(null, 300), 2),
            q = X[0],
            Q = X[1],
            J = r.useRef(null);
        r.useEffect(function() {
            return c.EmojiPickerStore.useStore.subscribe(function(e) {
                return z(e)
            }, function(e) {
                return e.inspectedExpressionPosition
            })
        }, []), r.useEffect(function() {
            d.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        var Z = S === I.EmojiSize.LARGE,
            $ = S === I.EmojiSize.MEDIUM,
            ee = function(e) {
                var t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
                switch (e.type) {
                    case m.EmojiGridItemTypes.CREATE_EMOJI:
                        var n = e.visibleRowIndex,
                            o = e.columnIndex,
                            u = K.rowIndex === n && K.columnIndex === o,
                            s = function(t) {
                                t.stopPropagation(), !L.current && !M.current && (N(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }), f.default.open(e.guildId, h.GuildSettingsSections.EMOJI, h.AnalyticsSections.EMOJI_PICKER_POPOUT))
                            },
                            l = function() {
                                !L.current && !M.current && R(e)
                            };
                        return function() {
                            var e, n, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                f = c.onMouseEnter,
                                d = c.onMouseLeave,
                                E = null !== (e = P(o, U)) && void 0 !== e ? e : {},
                                p = E.ref,
                                m = E.tabIndex,
                                y = E.onFocus,
                                I = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, o = {},
                                            i = Object.keys(e);
                                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                        return o
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < i.length; r++) {
                                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                        }
                                    }
                                    return o
                                }(E, ["ref", "tabIndex", "onFocus"]);
                            return r.createElement("li", A(g({}, I), {
                                key: t
                            }), r.createElement(a.FocusRing, null, r.createElement("button", {
                                "aria-label": O.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                ref: p,
                                className: i()(T.emojiItem, (v(n = {}, T.emojiItemLarge, Z), v(n, T.emojiItemMedium, $), v(n, T.emojiItemSelected, u), v(n, null != j ? j : "", u), v(n, T.showPulse, q === t), n)),
                                onFocus: null != y ? y : l,
                                onMouseOver: l,
                                onMouseEnter: f,
                                onMouseLeave: d,
                                onClick: s,
                                tabIndex: m
                            }, r.createElement(_.default, {
                                className: T.icon,
                                foreground: T.icon,
                                width: 24,
                                height: 24
                            }))))
                        }();
                    case m.EmojiGridItemTypes.EMOJI:
                        var c, d = e.columnIndex,
                            E = e.visibleRowIndex,
                            p = K.rowIndex === E && K.columnIndex === d;
                        return r.createElement(y.default, {
                            key: t,
                            rowIndex: U,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: p,
                            isScrolling: L,
                            isUsingKeyboardNavigation: M,
                            surrogateCodePoint: C,
                            allowAnimatedEmoji: w,
                            selectedItemClassName: j,
                            onSelect: N,
                            onInspect: R,
                            channelGuildId: G,
                            getEmojiItemProps: P,
                            isMediumSize: $,
                            isLargeSize: Z,
                            pulseItemKey: q,
                            setPulseItemKey: Q,
                            showEmojiFavoriteTooltip: k,
                            messageId: F,
                            isBurstReaction: V,
                            rowPosition: null == J ? void 0 : null === (c = J.current) || void 0 === c ? void 0 : c.getBoundingClientRect(),
                            inNitroLockedSection: H
                        })
                }
            },
            et = function(e) {
                var t;
                return r.createElement("ul", A(g({}, D(U)), {
                    className: i()(T.emojiListRow, (v(t = {}, T.emojiListRowLargeSize, Z), v(t, T.emojiListRowMediumSize, $), t)),
                    ref: J
                }), e.map(ee))
            };
        if (B !== I.EmojiCategoryTypes.TOP_GUILD_EMOJI) return et(o);
        var en = o.filter(function(e) {
                return !!x && e.type === m.EmojiGridItemTypes.CREATE_EMOJI || e.subCategory === I.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === I.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === s.EmojiTypes.GUILD && !l.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)
            }),
            er = o.filter(function(e) {
                return e.subCategory === I.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === s.EmojiTypes.GUILD && l.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)
            });
        return 0 === er.length ? et(o) : r.createElement("div", {
            className: T.topEmojiSectionContainer
        }, r.createElement("div", {
            className: i()(T.topEmojiContainer, v({}, T.noEmojis, 0 === en.length))
        }, et(en)), r.createElement("div", {
            className: T.newlyAddedHighlightContainer
        }, r.createElement("div", {
            className: i()(T.newlyAddedHighlight, (v(t = {}, T.oneItem, 1 === er.length), v(t, T.alignRight, en.length > 0), t))
        }, et(er)), r.createElement("div", {
            className: i()(T.newlyAddedBadge, (v(n = {}, T.newlyAddedBadgeLarge, Z), v(n, T.newlyAddedBadgeMedium, $), v(n, T.alignRight, en.length > 0), n))
        }, r.createElement(E.default, {
            foreground: T.newlyAddedBadgeStar
        }), r.createElement(a.Text, {
            variant: "text-xs/semibold",
            color: "always-white"
        }, O.default.Messages.NEW))))
    }
}