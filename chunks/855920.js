function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageStandardEmoji: function() {
            return T
        },
        MessageCustomEmoji: function() {
            return I
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("748820"),
        o = n("77078"),
        u = n("430568"),
        d = n("716241"),
        c = n("558986"),
        f = n("505233"),
        m = n("599110"),
        p = n("459698"),
        h = n("933629"),
        E = n("49111"),
        g = n("958706"),
        C = n("646718"),
        S = n("903985");
    let T = e => {
            var t;
            let {
                node: n,
                tooltipPosition: i = h.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: a = !0
            } = e, r = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], d = null != r ? r : n.name, c = e => (0, l.jsx)(u.default, {
                ...e,
                emojiName: n.name,
                size: n.jumboable ? "jumbo" : "default",
                src: n.src,
                alt: r,
                animated: !1
            }), f = e => (0, l.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(n.name, a),
                "aria-label": d,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: i,
                onTooltipShow: () => {
                    a && v({
                        emojiNode: n,
                        isCustomEmoji: !1
                    })
                },
                children: t => (0, l.jsx)(o.Clickable, {
                    ...e,
                    tag: "span",
                    className: s(S.emojiContainer, {
                        [S.emojiContainerClickable]: a
                    }),
                    children: c(t)
                })
            });
            return a ? (0, l.jsx)(o.Popout, {
                animation: o.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e => (0, l.jsx)(p.MessageStandardEmojiPopout, {
                    ...e,
                    node: n
                }),
                children: f
            }) : f()
        },
        I = e => {
            let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: d = !0
            } = e, [C, T] = i.useState(String(Date.now())), [I, _] = i.useState(!1), {
                enabled: N
            } = f.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "MessageCustomEmoji"
            }), A = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, l.jsx)(u.default, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? "jumbo" : "default",
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n
                })
            }, x = (0, r.v4)(), y = e => (0, l.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(t.name, d, N),
                "aria-label": t.name,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                onTooltipShow: () => {
                    _(!0), d && (v({
                        emojiNode: t,
                        isCustomEmoji: !0,
                        nonce: x
                    }), (0, c.initiateEmojiInteraction)(g.EmojiInteractionPoint.CustomEmojiTooltipShown))
                },
                children: t => (0, l.jsx)(o.Clickable, {
                    ...e,
                    onMouseEnter: () => {
                        var t;
                        null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                    },
                    onClick: t => {
                        var n;
                        _(!1), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    onMouseLeave: () => {
                        I && (m.default.track(E.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: x
                        }), _(!1))
                    },
                    tag: "span",
                    className: s(S.emojiContainer, {
                        [S.emojiContainerClickable]: d
                    }),
                    children: A(t)
                })
            });
            return d ? (0, l.jsx)(o.Popout, {
                animation: o.Popout.Animation.FADE,
                align: "center",
                onRequestClose: () => {
                    m.default.track(E.AnalyticEvents.CLOSE_POPOUT, {
                        nonce: x
                    }), _(!1)
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e => (0, l.jsx)(p.MessageCustomEmojiPopout, {
                    ...e,
                    node: t,
                    refreshPositionKey: () => T(String(Date.now())),
                    nonce: x
                }),
                positionKey: C,
                children: y
            }) : y()
        },
        v = e => {
            let {
                emojiNode: t,
                isCustomEmoji: n,
                nonce: l
            } = e;
            d.default.trackWithMetadata(E.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                type: C.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
                expression_id: t.emojiId,
                expression_name: t.name,
                is_animated: t.animated,
                is_custom: n,
                nonce: l
            })
        }
}