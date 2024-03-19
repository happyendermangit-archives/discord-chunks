function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyChatRestrictions: function() {
            return h
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("913144"),
        s = n("135230"),
        r = n("979911"),
        o = n("401848"),
        u = n("697218"),
        d = n("599110"),
        c = n("267625"),
        f = n("719923"),
        p = n("49111"),
        m = n("782340");

    function h(e) {
        let {
            openWarningPopout: t,
            type: n,
            content: h,
            stickers: x,
            uploads: E,
            channel: y,
            restrictMentions: g = !0,
            respectCooldown: S = !0
        } = e, C = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
        return new Promise(e => (function(e) {
            var t, n, u;
            let {
                openWarningPopout: f,
                type: h,
                content: x,
                stickers: E,
                uploads: y,
                channel: g,
                restrictMentions: S,
                respectCooldown: C,
                userCanUsePremiumMessageLength: _,
                resolve: I
            } = e;
            if (0 === x.length && !(null === (t = h.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == E || 0 === E.length) && (null == y || 0 === y.length)) {
                I({
                    valid: !1,
                    failureReason: p.MessageRestrictionTypes.EMPTY_MESSAGE
                });
                return
            }
            let T = _ ? p.MAX_MESSAGE_LENGTH_PREMIUM : p.MAX_MESSAGE_LENGTH;
            if (x.length > T) {
                if (_ || null == g) {
                    ;
                    n = x.length, u = T, (0, l.openModal)(e => (0, i.jsx)(s.default, {
                        title: m.default.Messages.MESSAGE_TOO_LONG_HEADER,
                        body: m.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                            currentLength: n,
                            maxLength: u
                        }),
                        confirmText: m.default.Messages.OKAY,
                        ...e
                    })), d.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: "Message Too Long Alert",
                        message_content_length: n
                    })
                } else a.default.dispatch({
                    type: "MESSAGE_LENGTH_UPSELL",
                    channel: g,
                    content: x
                });
                I({
                    valid: !1,
                    failureReason: p.MessageRestrictionTypes.MESSAGE_TOO_LONG
                });
                return
            }
            if (null != g) {
                if (null != g.getGuildId() && C && o.default.getSlowmodeCooldownGuess(g.id) > 0) {
                    I({
                        valid: !1,
                        failureReason: p.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                    });
                    return
                }
                if (null != f)
                    for (let {
                            check: e,
                            analyticsType: t,
                            animation: n
                        }
                        of c.RESTRICTIONS) {
                        let i = e(x, g, S);
                        if (!1 !== i) {
                            f({
                                analyticsType: t,
                                channel: g,
                                onCancel: () => I({
                                    valid: !1,
                                    failureReason: p.MessageRestrictionTypes.SHOUTING_CANCELLED
                                }),
                                onConfirm: () => I({
                                    valid: !0
                                }),
                                popoutText: i,
                                animation: n
                            });
                            return
                        }
                    }
            }
            if (r.default.isFull()) {
                (0, l.openModal)(e => (0, i.jsx)(s.default, {
                    title: m.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                    body: m.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                    confirmText: m.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                    ...e
                }), {
                    onCloseRequest: p.NOOP
                }), I({
                    valid: !1,
                    failureReason: p.MessageRestrictionTypes.RATE_LIMITED
                });
                return
            }
            I({
                valid: !0
            })
        })({
            openWarningPopout: t,
            type: n,
            content: h,
            stickers: x,
            uploads: E,
            channel: y,
            restrictMentions: g,
            respectCooldown: S,
            userCanUsePremiumMessageLength: C,
            resolve: e
        }))
    }
}