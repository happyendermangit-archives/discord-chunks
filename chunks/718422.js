function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyChatRestrictions: function() {
            return h
        }
    }), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("913144"),
        s = n("135230"),
        r = n("979911"),
        o = n("401848"),
        u = n("697218"),
        d = n("599110"),
        c = n("267625"),
        f = n("719923"),
        m = n("49111"),
        p = n("782340");

    function h(e) {
        let {
            openWarningPopout: t,
            type: n,
            content: h,
            stickers: E,
            uploads: g,
            channel: C,
            restrictMentions: S = !0,
            respectCooldown: T = !0
        } = e, I = f.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
        return new Promise(e => (function(e) {
            var t, n, u;
            let {
                openWarningPopout: f,
                type: h,
                content: E,
                stickers: g,
                uploads: C,
                channel: S,
                restrictMentions: T,
                respectCooldown: I,
                userCanUsePremiumMessageLength: v,
                resolve: _
            } = e;
            if (0 === E.length && !(null === (t = h.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == g || 0 === g.length) && (null == C || 0 === C.length)) {
                _({
                    valid: !1,
                    failureReason: m.MessageRestrictionTypes.EMPTY_MESSAGE
                });
                return
            }
            let N = v ? m.MAX_MESSAGE_LENGTH_PREMIUM : m.MAX_MESSAGE_LENGTH;
            if (E.length > N) {
                if (v || null == S) {
                    ;
                    n = E.length, u = N, (0, i.openModal)(e => (0, l.jsx)(s.default, {
                        title: p.default.Messages.MESSAGE_TOO_LONG_HEADER,
                        body: p.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                            currentLength: n,
                            maxLength: u
                        }),
                        confirmText: p.default.Messages.OKAY,
                        ...e
                    })), d.default.track(m.AnalyticEvents.OPEN_MODAL, {
                        type: "Message Too Long Alert",
                        message_content_length: n
                    })
                } else a.default.dispatch({
                    type: "MESSAGE_LENGTH_UPSELL",
                    channel: S,
                    content: E
                });
                _({
                    valid: !1,
                    failureReason: m.MessageRestrictionTypes.MESSAGE_TOO_LONG
                });
                return
            }
            if (null != S) {
                if (null != S.getGuildId() && I && o.default.getSlowmodeCooldownGuess(S.id) > 0) {
                    _({
                        valid: !1,
                        failureReason: m.MessageRestrictionTypes.SLOWMODE_COOLDOWN
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
                        let l = e(E, S, T);
                        if (!1 !== l) {
                            f({
                                analyticsType: t,
                                channel: S,
                                onCancel: () => _({
                                    valid: !1,
                                    failureReason: m.MessageRestrictionTypes.SHOUTING_CANCELLED
                                }),
                                onConfirm: () => _({
                                    valid: !0
                                }),
                                popoutText: l,
                                animation: n
                            });
                            return
                        }
                    }
            }
            if (r.default.isFull()) {
                (0, i.openModal)(e => (0, l.jsx)(s.default, {
                    title: p.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                    body: p.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                    confirmText: p.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                    ...e
                }), {
                    onCloseRequest: m.NOOP
                }), _({
                    valid: !1,
                    failureReason: m.MessageRestrictionTypes.RATE_LIMITED
                });
                return
            }
            _({
                valid: !0
            })
        })({
            openWarningPopout: t,
            type: n,
            content: h,
            stickers: E,
            uploads: g,
            channel: C,
            restrictMentions: S,
            respectCooldown: T,
            userCanUsePremiumMessageLength: I,
            resolve: e
        }))
    }
}