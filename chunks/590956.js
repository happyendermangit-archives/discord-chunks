function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageCustomEmoji: function() {
            return N
        },
        MessageStandardEmoji: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("153832"),
        l = n("481060"),
        u = n("596454"),
        d = n("367907"),
        _ = n("130402"),
        c = n("642345"),
        E = n("626135"),
        I = n("183023"),
        T = n("524444"),
        f = n("981631"),
        S = n("185923"),
        h = n("474936"),
        A = n("824939");
    let m = e => {
            var t;
            let {
                node: n,
                tooltipPosition: s = T.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: o = !0
            } = e, d = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], _ = null != d ? d : n.name, [c, E] = r.useState(!1), f = e => (0, i.jsx)(u.default, {
                ...e,
                emojiName: n.name,
                size: n.jumboable ? "jumbo" : "default",
                src: n.src,
                alt: d,
                animated: !1
            }), S = e => (0, i.jsx)(l.Tooltip, {
                text: (0, T.renderClickableTooltipNode)(n.name, o),
                "aria-label": _,
                ...T.EXPRESSION_TOOLTIP_PROPS,
                position: s,
                shouldShow: !c,
                onTooltipShow: () => {
                    o && p({
                        emojiNode: n,
                        isCustomEmoji: !1
                    })
                },
                children: t => (0, i.jsx)(l.Clickable, {
                    ...e,
                    tag: "span",
                    onClick: t => {
                        var n;
                        E(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    className: a()(A.emojiContainer, {
                        [A.emojiContainerClickable]: o
                    }),
                    children: f(t)
                })
            });
            return o ? (0, i.jsx)(l.Popout, {
                animation: l.Popout.Animation.TRANSLATE,
                align: "center",
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                onRequestClose: () => {
                    E(!1)
                },
                renderPopout: e => (0, i.jsx)(I.MessageStandardEmojiPopout, {
                    ...e,
                    node: n
                }),
                children: S
            }) : S()
        },
        N = e => {
            let {
                node: t,
                isInteracting: n,
                tooltipPosition: s = T.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: d = !0
            } = e, [h, m] = r.useState(String(Date.now())), [N, O] = r.useState(!1), [R, C] = r.useState(!1), {
                enabled: g
            } = c.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "MessageCustomEmoji"
            }), L = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, i.jsx)(u.default, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? "jumbo" : "default",
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n
                })
            }, v = (0, o.v4)(), D = e => (0, i.jsx)(l.Tooltip, {
                text: (0, T.renderClickableTooltipNode)(t.name, d, g),
                "aria-label": t.name,
                ...T.EXPRESSION_TOOLTIP_PROPS,
                position: s,
                shouldShow: !R,
                onTooltipShow: () => {
                    O(!0), d && (p({
                        emojiNode: t,
                        isCustomEmoji: !0,
                        nonce: v
                    }), (0, _.initiateEmojiInteraction)(S.EmojiInteractionPoint.CustomEmojiTooltipShown))
                },
                children: t => (0, i.jsx)(l.Clickable, {
                    ...e,
                    onMouseEnter: () => {
                        var t;
                        null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                    },
                    onClick: t => {
                        var n;
                        O(!1), C(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    onMouseLeave: () => {
                        N && (E.default.track(f.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: v
                        }), O(!1))
                    },
                    tag: "span",
                    className: a()(A.emojiContainer, {
                        [A.emojiContainerClickable]: d
                    }),
                    children: L(t)
                })
            });
            return d ? (0, i.jsx)(l.Popout, {
                animation: l.Popout.Animation.FADE,
                align: "center",
                onRequestClose: () => {
                    E.default.track(f.AnalyticEvents.CLOSE_POPOUT, {
                        nonce: v
                    }), O(!1), C(!1)
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e => (0, i.jsx)(I.MessageCustomEmojiPopout, {
                    ...e,
                    node: t,
                    refreshPositionKey: () => m(String(Date.now())),
                    nonce: v
                }),
                positionKey: h,
                children: D
            }) : D()
        },
        p = e => {
            let {
                emojiNode: t,
                isCustomEmoji: n,
                nonce: i
            } = e;
            d.default.trackWithMetadata(f.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                type: h.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
                expression_id: t.emojiId,
                expression_name: t.name,
                is_animated: t.animated,
                is_custom: n,
                nonce: i
            })
        }
}