function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageCustomEmoji: function() {
            return A
        },
        MessageStandardEmoji: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("153832"),
        u = n("784184"),
        s = n("765457"),
        l = n("140817"),
        c = n("645077"),
        f = n("330545"),
        d = n("870331"),
        _ = n("611611"),
        E = n("930350"),
        p = n("281767"),
        m = n("68735"),
        y = n("868615"),
        I = n("924575");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
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

    function v(e, t) {
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
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var g = function(e) {
            var t, n = e.node,
                o = e.tooltipPosition,
                a = void 0 === o ? E.EXPRESSION_TOOLTIP_PROPS.position : o,
                l = e.enableClick,
                c = void 0 === l || l,
                f = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
                d = null != f ? f : n.name,
                p = v(r.useState(!1), 2),
                m = p[0],
                y = p[1],
                h = function(e) {
                    return r.createElement(u.Tooltip, S(T({
                        text: (0, E.renderClickableTooltipNode)(n.name, c),
                        "aria-label": d
                    }, E.EXPRESSION_TOOLTIP_PROPS), {
                        position: a,
                        shouldShow: !m,
                        onTooltipShow: function() {
                            c && b({
                                emojiNode: n,
                                isCustomEmoji: !1
                            })
                        }
                    }), function(t) {
                        var o;
                        return r.createElement(u.Clickable, S(T({}, e), {
                            tag: "span",
                            onClick: function(t) {
                                var n;
                                y(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                            },
                            className: i()(I.emojiContainer, O({}, I.emojiContainerClickable, c))
                        }), (o = t, r.createElement(s.default, S(T({}, o), {
                            emojiName: n.name,
                            size: n.jumboable ? "jumbo" : "default",
                            src: n.src,
                            alt: f,
                            animated: !1
                        }))))
                    })
                };
            return c ? r.createElement(u.Popout, {
                animation: u.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                onRequestClose: function() {
                    y(!1)
                },
                renderPopout: function(e) {
                    return r.createElement(_.MessageStandardEmojiPopout, S(T({}, e), {
                        node: n
                    }))
                }
            }, h) : h()
        },
        A = function(e) {
            var t = e.node,
                n = e.isInteracting,
                o = e.tooltipPosition,
                l = void 0 === o ? E.EXPRESSION_TOOLTIP_PROPS.position : o,
                y = e.enableClick,
                h = void 0 === y || y,
                g = v(r.useState(String(Date.now())), 2),
                A = g[0],
                N = g[1],
                R = v(r.useState(!1), 2),
                C = R[0],
                P = R[1],
                D = v(r.useState(!1), 2),
                L = D[0],
                M = D[1],
                U = f.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                    location: "MessageCustomEmoji"
                }).enabled,
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return r.createElement(s.default, S(T({}, e), {
                        emojiName: t.name,
                        size: t.jumboable ? "jumbo" : "default",
                        emojiId: t.emojiId,
                        animated: t.animated,
                        isInteracting: n
                    }))
                },
                k = (0, a.v4)(),
                G = function(e) {
                    return r.createElement(u.Tooltip, S(T({
                        text: (0, E.renderClickableTooltipNode)(t.name, h, U),
                        "aria-label": t.name
                    }, E.EXPRESSION_TOOLTIP_PROPS), {
                        position: l,
                        shouldShow: !L,
                        onTooltipShow: function() {
                            P(!0), h && (b({
                                emojiNode: t,
                                isCustomEmoji: !0,
                                nonce: k
                            }), (0, c.initiateEmojiInteraction)(m.EmojiInteractionPoint.CustomEmojiTooltipShown))
                        }
                    }), function(t) {
                        return r.createElement(u.Clickable, S(T({}, e), {
                            onMouseEnter: function() {
                                var t;
                                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                            },
                            onClick: function(t) {
                                var n;
                                P(!1), M(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                            },
                            onMouseLeave: function() {
                                C && (d.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                                    nonce: k
                                }), P(!1))
                            },
                            tag: "span",
                            className: i()(I.emojiContainer, O({}, I.emojiContainerClickable, h))
                        }), w(t))
                    })
                };
            return h ? r.createElement(u.Popout, {
                animation: u.Popout.Animation.FADE,
                align: "center",
                onRequestClose: function() {
                    d.default.track(p.AnalyticEvents.CLOSE_POPOUT, {
                        nonce: k
                    }), P(!1), M(!1)
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: function(e) {
                    return r.createElement(_.MessageCustomEmojiPopout, S(T({}, e), {
                        node: t,
                        refreshPositionKey: function() {
                            return N(String(Date.now()))
                        },
                        nonce: k
                    }))
                },
                positionKey: A
            }, G) : G()
        },
        b = function(e) {
            var t = e.emojiNode,
                n = e.isCustomEmoji,
                r = e.nonce;
            l.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                type: y.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
                expression_id: t.emojiId,
                expression_name: t.name,
                is_animated: t.animated,
                is_custom: n,
                nonce: r
            })
        }
}