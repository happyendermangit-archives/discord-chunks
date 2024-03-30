function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("549579"),
        l = n("622780"),
        c = n("300983"),
        f = n("148527"),
        d = n("27375"),
        _ = n("512832"),
        E = n("417529"),
        p = n("722405"),
        m = n("306912"),
        y = n("374550"),
        I = n("418893"),
        h = n("945023"),
        O = n("941504"),
        T = n("975903");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
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

    function N(e, t) {
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
    }
    var R = function(e, t) {
            return "".concat(e, ":").concat(t)
        },
        C = r.forwardRef(function(e, t) {
            var n, o, s = e.emoji,
                l = e.isFavorite,
                c = e.isLargeSize,
                d = e.isMediumSize,
                E = e.isInspected,
                p = e.isDisabled,
                y = e.showPulse,
                S = e.columnIndex,
                v = e.rowIndex,
                R = e.size,
                C = e.surrogateCodePoint,
                P = e.allowAnimatedEmoji,
                D = e.selectedItemClassName,
                L = e.inNitroLockedSection,
                M = N(e, ["emoji", "isFavorite", "isLargeSize", "isMediumSize", "isInspected", "isDisabled", "showPulse", "columnIndex", "rowIndex", "size", "surrogateCodePoint", "allowAnimatedEmoji", "selectedItemClassName", "inNitroLockedSection"]),
                U = (0, a.useStateFromStores)([m.default], function() {
                    return s.type === f.EmojiTypes.GUILD ? m.default.getGuild(s.guildId) : void 0
                }, [s]),
                w = I.default.useExperiment({
                    location: "Emoji Picker List"
                }, {
                    autoTrackExposure: p
                }).enabled,
                k = p && w && !L;
            return r.createElement(u.FocusRing, null, r.createElement("button", b(A({}, M), {
                className: i()(T.emojiItem, (g(o = {}, T.emojiItemLarge, c), g(o, T.emojiItemMedium, d), g(o, T.emojiItemSelected, E), g(o, null != D ? D : "", E), g(o, T.emojiItemDisabled, p && !w), g(o, T.showPulse, y), o)),
                "data-type": _.PickerContextMenuDataTypes.EMOJI,
                "data-id": s.id,
                "data-name": s.name,
                ref: t
            }), r.createElement(h.default, {
                "aria-label": (n = s.allNamesString, ((null == U ? void 0 : U.name) != null && (n = O.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
                    names: n,
                    guildName: U.name
                })), l) ? O.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
                    names: n
                }) : n),
                columnIndex: S,
                rowIndex: v,
                emoji: s,
                size: R,
                surrogateCodePoint: C,
                allowAnimatedEmoji: P,
                isLocked: k
            })))
        });

    function P(e) {
        var t, o, i = e.descriptor,
            f = e.emojiItemKey,
            _ = e.isInspected,
            m = e.rowIndex,
            I = e.channelGuildId,
            h = e.onInspect,
            T = e.onSelect,
            g = e.isScrolling,
            P = e.isUsingKeyboardNavigation,
            D = e.showEmojiFavoriteTooltip,
            L = e.surrogateCodePoint,
            M = e.selectedItemClassName,
            U = e.getEmojiItemProps,
            w = e.isMediumSize,
            k = e.isLargeSize,
            G = e.pulseItemKey,
            B = e.allowAnimatedEmoji,
            j = e.setPulseItemKey,
            F = e.messageId,
            V = e.isBurstReaction,
            H = e.rowPosition,
            x = e.inNitroLockedSection;
        var Y = (t = r.useState(""), o = 2, function(e) {
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
            }(t, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }
            }(t, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            W = Y[0],
            K = Y[1],
            z = (0, a.useStateFromStores)([l.default], function() {
                return l.default.useReducedMotion
            }),
            X = (0, a.useStateFromStores)([c.default], function() {
                return c.default.getDisambiguatedEmojiContext(I)
            }, [I]),
            q = r.useRef(null),
            Q = i.emoji,
            J = i.size,
            Z = i.isDisabled,
            $ = i.columnIndex,
            ee = function(e) {
                if (e.stopPropagation(), !g.current && !P.current) {
                    var t = e.altKey;
                    t && !c.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(Q) && j(f), (0, E.hideHotspot)(E.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), T(i, {
                        isFinalSelection: !e.shiftKey,
                        toggleFavorite: t
                    })
                }
            },
            et = function() {
                !g.current && !P.current && h(i)
            },
            en = function(e) {
                var t;
                (0, s.openContextMenuLazy)(e, (t = function() {
                    var e;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, n.e("88204").then(n.bind(n, "715075"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    return r.createElement(e, t)
                                }]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            v(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            v(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            },
            er = function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.onMouseEnter,
                    o = t.onMouseLeave,
                    i = null !== (e = U($, m)) && void 0 !== e ? e : {},
                    a = i.ref,
                    u = i.tabIndex,
                    s = i.onFocus,
                    l = N(i, ["ref", "tabIndex", "onFocus"]);
                return r.createElement("li", b(A({}, l), {
                    key: f,
                    ref: q
                }), W !== R($, m) && r.createElement(C, {
                    ref: a,
                    emoji: Q,
                    isFavorite: X.isFavoriteEmojiWithoutFetchingLatest(Q),
                    isLargeSize: k,
                    isMediumSize: w,
                    isInspected: _,
                    isDisabled: Z,
                    showPulse: G === f,
                    allowAnimatedEmoji: B,
                    onFocus: null != s ? s : et,
                    onMouseMove: et,
                    onMouseEnter: n,
                    onMouseLeave: o,
                    onClick: function(e) {
                        if (null != q.current && null != H && null != F && !e.shiftKey && null != Q.name && V && !z && B) {
                            var t = null == Q.id ? d.default.convertNameToSurrogate(Q.name) : Q.name,
                                n = q.current.getBoundingClientRect();
                            n.x = H.x + ($ + 1) * J, K(R($, m)), (0, p.addReactionPickerAnimation)(F, t, Q.id, n)
                        }
                        ee(e)
                    },
                    onContextMenu: en,
                    tabIndex: u,
                    columnIndex: $,
                    rowIndex: m,
                    size: J,
                    surrogateCodePoint: L,
                    selectedItemClassName: M,
                    inNitroLockedSection: x
                }))
            };
        return D ? r.createElement(u.Tooltip, {
            key: f,
            text: O.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
                key: (0, y.isMac)() ? "Opt" : "Alt"
            }),
            position: "top",
            delay: 200
        }, function(e) {
            return er(e)
        }) : er()
    }
}