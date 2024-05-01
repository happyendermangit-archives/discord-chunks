function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyChatRestrictions: function() {
            return T
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("570140"),
        s = n("468026"),
        o = n("673750"),
        l = n("300429"),
        u = n("594174"),
        d = n("626135"),
        _ = n("760729"),
        c = n("74538"),
        E = n("981631"),
        I = n("689938");

    function T(e) {
        let {
            openWarningPopout: t,
            type: n,
            content: T,
            stickers: f,
            uploads: S,
            channel: h,
            restrictMentions: A = !0,
            respectCooldown: m = !0
        } = e, N = c.default.canUseIncreasedMessageLength(u.default.getCurrentUser());
        return new Promise(e => (function(e) {
            var t, n, u;
            let {
                openWarningPopout: c,
                type: T,
                content: f,
                stickers: S,
                uploads: h,
                channel: A,
                restrictMentions: m,
                respectCooldown: N,
                userCanUsePremiumMessageLength: p,
                resolve: O
            } = e;
            if (0 === f.length && !(null === (t = T.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) && (null == S || 0 === S.length) && (null == h || 0 === h.length)) {
                O({
                    valid: !1,
                    failureReason: E.MessageRestrictionTypes.EMPTY_MESSAGE
                });
                return
            }
            let R = p ? E.MAX_MESSAGE_LENGTH_PREMIUM : E.MAX_MESSAGE_LENGTH;
            if (f.length > R) {
                if (p || null == A) {
                    ;
                    n = f.length, u = R, (0, r.openModal)(e => (0, i.jsx)(s.default, {
                        title: I.default.Messages.MESSAGE_TOO_LONG_HEADER,
                        body: I.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                            currentLength: n,
                            maxLength: u
                        }),
                        confirmText: I.default.Messages.OKAY,
                        ...e
                    })), d.default.track(E.AnalyticEvents.OPEN_MODAL, {
                        type: "Message Too Long Alert",
                        message_content_length: n
                    })
                } else a.default.dispatch({
                    type: "MESSAGE_LENGTH_UPSELL",
                    channel: A,
                    content: f
                });
                O({
                    valid: !1,
                    failureReason: E.MessageRestrictionTypes.MESSAGE_TOO_LONG
                });
                return
            }
            if (null != A) {
                if (null != A.getGuildId() && N && l.default.getSlowmodeCooldownGuess(A.id) > 0) {
                    O({
                        valid: !1,
                        failureReason: E.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                    });
                    return
                }
                if (null != c)
                    for (let {
                            check: e,
                            analyticsType: t,
                            animation: n
                        }
                        of _.RESTRICTIONS) {
                        let i = e(f, A, m);
                        if (!1 !== i) {
                            c({
                                analyticsType: t,
                                channel: A,
                                onCancel: () => O({
                                    valid: !1,
                                    failureReason: E.MessageRestrictionTypes.SHOUTING_CANCELLED
                                }),
                                onConfirm: () => O({
                                    valid: !0
                                }),
                                popoutText: i,
                                animation: n
                            });
                            return
                        }
                    }
            }
            if (o.default.isFull()) {
                (0, r.openModal)(e => (0, i.jsx)(s.default, {
                    title: I.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                    body: I.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                    confirmText: I.default.Messages.MESSAGE_RATE_LIMITED_BUTTON,
                    ...e
                }), {
                    onCloseRequest: E.NOOP
                }), O({
                    valid: !1,
                    failureReason: E.MessageRestrictionTypes.RATE_LIMITED
                });
                return
            }
            O({
                valid: !0
            })
        })({
            openWarningPopout: t,
            type: n,
            content: T,
            stickers: f,
            uploads: S,
            channel: h,
            restrictMentions: A,
            respectCooldown: m,
            userCanUsePremiumMessageLength: N,
            resolve: e
        }))
    }
}