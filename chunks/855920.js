function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageStandardEmoji: function() {
            return T
        },
        MessageCustomEmoji: function() {
            return v
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
                tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: r = !0
            } = e, d = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], c = null != d ? d : n.name, [f, m] = i.useState(!1), E = e => (0, l.jsx)(u.default, {
                ...e,
                emojiName: n.name,
                size: n.jumboable ? "jumbo" : "default",
                src: n.src,
                alt: d,
                animated: !1
            }), g = e => (0, l.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(n.name, r),
                "aria-label": c,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                shouldShow: !f,
                onTooltipShow: () => {
                    r && I({
                        emojiNode: n,
                        isCustomEmoji: !1
                    })
                },
                children: t => (0, l.jsx)(o.Clickable, {
                    ...e,
                    tag: "span",
                    onClick: t => {
                        var n;
                        m(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    className: s(S.emojiContainer, {
                        [S.emojiContainerClickable]: r
                    }),
                    children: E(t)
                })
            });
            return r ? (0, l.jsx)(o.Popout, {
                animation: o.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                onRequestClose: () => {
                    m(!1)
                },
                renderPopout: e => (0, l.jsx)(p.MessageStandardEmojiPopout, {
                    ...e,
                    node: n
                }),
                children: g
            }) : g()
        },
        v = e => {
            let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: d = !0
            } = e, [C, T] = i.useState(String(Date.now())), [v, _] = i.useState(!1), [N, A] = i.useState(!1), {
                enabled: x
            } = f.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "MessageCustomEmoji"
            }), y = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, l.jsx)(u.default, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? "jumbo" : "default",
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n
                })
            }, O = (0, r.v4)(), R = e => (0, l.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(t.name, d, x),
                "aria-label": t.name,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                shouldShow: !N,
                onTooltipShow: () => {
                    _(!0), d && (I({
                        emojiNode: t,
                        isCustomEmoji: !0,
                        nonce: O
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
                        _(!1), A(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    onMouseLeave: () => {
                        v && (m.default.track(E.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: O
                        }), _(!1))
                    },
                    tag: "span",
                    className: s(S.emojiContainer, {
                        [S.emojiContainerClickable]: d
                    }),
                    children: y(t)
                })
            });
            return d ? (0, l.jsx)(o.Popout, {
                animation: o.Popout.Animation.FADE,
                align: "center",
                onRequestClose: () => {
                    m.default.track(E.AnalyticEvents.CLOSE_POPOUT, {
                        nonce: O
                    }), _(!1), A(!1)
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e => (0, l.jsx)(p.MessageCustomEmojiPopout, {
                    ...e,
                    node: t,
                    refreshPositionKey: () => T(String(Date.now())),
                    nonce: O
                }),
                positionKey: C,
                children: R
            }) : R()
        },
        I = e => {
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