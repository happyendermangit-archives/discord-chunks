function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageStandardEmoji: function() {
            return S
        },
        MessageCustomEmoji: function() {
            return C
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("748820"),
        o = n("77078"),
        u = n("430568"),
        d = n("716241"),
        c = n("558986"),
        f = n("505233"),
        p = n("599110"),
        m = n("459698"),
        h = n("933629"),
        x = n("49111"),
        E = n("958706"),
        y = n("646718"),
        g = n("903985");
    let S = e => {
            var t;
            let {
                node: n,
                tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: r = !0
            } = e, d = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], c = null != d ? d : n.name, [f, p] = l.useState(!1), x = e => (0, i.jsx)(u.default, {
                ...e,
                emojiName: n.name,
                size: n.jumboable ? "jumbo" : "default",
                src: n.src,
                alt: d,
                animated: !1
            }), E = e => (0, i.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(n.name, r),
                "aria-label": c,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                shouldShow: !f,
                onTooltipShow: () => {
                    r && _({
                        emojiNode: n,
                        isCustomEmoji: !1
                    })
                },
                children: t => (0, i.jsx)(o.Clickable, {
                    ...e,
                    tag: "span",
                    onClick: t => {
                        var n;
                        p(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    className: s(g.emojiContainer, {
                        [g.emojiContainerClickable]: r
                    }),
                    children: x(t)
                })
            });
            return r ? (0, i.jsx)(o.Popout, {
                animation: o.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                onRequestClose: () => {
                    p(!1)
                },
                renderPopout: e => (0, i.jsx)(m.MessageStandardEmojiPopout, {
                    ...e,
                    node: n
                }),
                children: E
            }) : E()
        },
        C = e => {
            let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = h.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: d = !0
            } = e, [y, S] = l.useState(String(Date.now())), [C, T] = l.useState(!1), [I, v] = l.useState(!1), {
                enabled: A
            } = f.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "MessageCustomEmoji"
            }), N = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, i.jsx)(u.default, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? "jumbo" : "default",
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n
                })
            }, R = (0, r.v4)(), O = e => (0, i.jsx)(o.Tooltip, {
                text: (0, h.renderClickableTooltipNode)(t.name, d, A),
                "aria-label": t.name,
                ...h.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                shouldShow: !I,
                onTooltipShow: () => {
                    T(!0), d && (_({
                        emojiNode: t,
                        isCustomEmoji: !0,
                        nonce: R
                    }), (0, c.initiateEmojiInteraction)(E.EmojiInteractionPoint.CustomEmojiTooltipShown))
                },
                children: t => (0, i.jsx)(o.Clickable, {
                    ...e,
                    onMouseEnter: () => {
                        var t;
                        null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                    },
                    onClick: t => {
                        var n;
                        T(!1), v(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    onMouseLeave: () => {
                        C && (p.default.track(x.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: R
                        }), T(!1))
                    },
                    tag: "span",
                    className: s(g.emojiContainer, {
                        [g.emojiContainerClickable]: d
                    }),
                    children: N(t)
                })
            });
            return d ? (0, i.jsx)(o.Popout, {
                animation: o.Popout.Animation.FADE,
                align: "center",
                onRequestClose: () => {
                    p.default.track(x.AnalyticEvents.CLOSE_POPOUT, {
                        nonce: R
                    }), T(!1), v(!1)
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e => (0, i.jsx)(m.MessageCustomEmojiPopout, {
                    ...e,
                    node: t,
                    refreshPositionKey: () => S(String(Date.now())),
                    nonce: R
                }),
                positionKey: y,
                children: O
            }) : O()
        },
        _ = e => {
            let {
                emojiNode: t,
                isCustomEmoji: n,
                nonce: i
            } = e;
            d.default.trackWithMetadata(x.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                type: y.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
                expression_id: t.emojiId,
                expression_name: t.name,
                is_animated: t.animated,
                is_custom: n,
                nonce: i
            })
        }
}