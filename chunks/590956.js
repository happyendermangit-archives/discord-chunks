function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageCustomEmoji: function() {
            return m
        },
        MessageStandardEmoji: function() {
            return A
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("153832"),
        l = n("481060"),
        u = n("596454"),
        d = n("367907"),
        _ = n("130402"),
        c = n("626135"),
        E = n("183023"),
        I = n("524444"),
        T = n("981631"),
        f = n("185923"),
        S = n("474936"),
        h = n("824939");
    let A = e => {
            var t;
            let {
                node: n,
                tooltipPosition: a = I.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: o = !0
            } = e, d = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], _ = null != d ? d : n.name, [c, T] = r.useState(!1), f = e => (0, i.jsx)(u.default, {
                ...e,
                emojiName: n.name,
                size: n.jumboable ? "jumbo" : "default",
                src: n.src,
                alt: d,
                animated: !1
            }), S = e => (0, i.jsx)(l.Tooltip, {
                text: (0, I.renderClickableTooltipNode)(n.name, o),
                "aria-label": _,
                ...I.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                shouldShow: !c,
                onTooltipShow: () => {
                    o && N({
                        emojiNode: n,
                        isCustomEmoji: !1
                    })
                },
                children: t => (0, i.jsx)(l.Clickable, {
                    ...e,
                    tag: "span",
                    onClick: t => {
                        var n;
                        T(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    className: s()(h.emojiContainer, {
                        [h.emojiContainerClickable]: o
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
                    T(!1)
                },
                renderPopout: e => (0, i.jsx)(E.MessageStandardEmojiPopout, {
                    ...e,
                    node: n
                }),
                children: S
            }) : S()
        },
        m = e => {
            let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = I.EXPRESSION_TOOLTIP_PROPS.position,
                enableClick: d = !0
            } = e, [S, A] = r.useState(String(Date.now())), [m, p] = r.useState(!1), [O, R] = r.useState(!1), C = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, i.jsx)(u.default, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? "jumbo" : "default",
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n
                })
            }, g = (0, o.v4)(), L = e => (0, i.jsx)(l.Tooltip, {
                text: (0, I.renderClickableTooltipNode)(t.name, d),
                "aria-label": t.name,
                ...I.EXPRESSION_TOOLTIP_PROPS,
                position: a,
                shouldShow: !O,
                onTooltipShow: () => {
                    p(!0), d && (N({
                        emojiNode: t,
                        isCustomEmoji: !0,
                        nonce: g
                    }), (0, _.initiateEmojiInteraction)(f.EmojiInteractionPoint.CustomEmojiTooltipShown))
                },
                children: t => (0, i.jsx)(l.Clickable, {
                    ...e,
                    onMouseEnter: () => {
                        var t;
                        null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
                    },
                    onClick: t => {
                        var n;
                        p(!1), R(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
                    },
                    onMouseLeave: () => {
                        m && (c.default.track(T.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: g
                        }), p(!1))
                    },
                    tag: "span",
                    className: s()(h.emojiContainer, {
                        [h.emojiContainerClickable]: d
                    }),
                    children: C(t)
                })
            });
            return d ? (0, i.jsx)(l.Popout, {
                animation: l.Popout.Animation.FADE,
                align: "center",
                onRequestClose: () => {
                    c.default.track(T.AnalyticEvents.CLOSE_POPOUT, {
                        nonce: g
                    }), p(!1), R(!1)
                },
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                position: "right",
                renderPopout: e => (0, i.jsx)(E.MessageCustomEmojiPopout, {
                    ...e,
                    node: t,
                    refreshPositionKey: () => A(String(Date.now())),
                    nonce: g
                }),
                positionKey: S,
                children: L
            }) : L()
        },
        N = e => {
            let {
                emojiNode: t,
                isCustomEmoji: n,
                nonce: i
            } = e;
            d.default.trackWithMetadata(T.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                type: S.PremiumUpsellTypes.EMOJI_IN_MESSAGE_HOVER,
                expression_id: t.emojiId,
                expression_name: t.name,
                is_animated: t.animated,
                is_custom: n,
                nonce: i
            })
        }
}