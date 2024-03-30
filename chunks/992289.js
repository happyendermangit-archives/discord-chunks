function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyChatRestrictions: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("629815"),
        a = n("264518"),
        u = n("749055"),
        s = n("877708"),
        l = n("208454"),
        c = n("870331"),
        f = n("468708"),
        d = n("830721"),
        _ = n("281767"),
        E = n("941504");

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function m(e) {
        var t = e.openWarningPopout,
            n = e.type,
            m = e.content,
            y = e.stickers,
            I = e.uploads,
            h = e.channel,
            O = e.restrictMentions,
            T = void 0 === O || O,
            S = e.respectCooldown,
            v = void 0 === S || S,
            g = d.default.canUseIncreasedMessageLength(l.default.getCurrentUser());
        return new Promise(function(e) {
            return function(e) {
                var t = e.openWarningPopout,
                    n = e.type,
                    l = e.content,
                    d = e.stickers,
                    m = e.uploads,
                    y = e.channel,
                    I = e.restrictMentions,
                    h = e.respectCooldown,
                    O = e.userCanUsePremiumMessageLength,
                    T = e.resolve;
                if (0 === l.length && !(null === (R = n.submit) || void 0 === R ? void 0 : R.allowEmptyMessage) && (null == d || 0 === d.length) && (null == m || 0 === m.length)) {
                    T({
                        valid: !1,
                        failureReason: _.MessageRestrictionTypes.EMPTY_MESSAGE
                    });
                    return
                }
                var S = O ? _.MAX_MESSAGE_LENGTH_PREMIUM : _.MAX_MESSAGE_LENGTH;
                if (l.length > S) {
                    if (O || null == y) {
                        ;
                        b = l.length, N = S, (0, o.openModal)(function(e) {
                            return r.createElement(a.default, p({
                                title: E.default.Messages.MESSAGE_TOO_LONG_HEADER,
                                body: E.default.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
                                    currentLength: b,
                                    maxLength: N
                                }),
                                confirmText: E.default.Messages.OKAY
                            }, e))
                        }), c.default.track(_.AnalyticEvents.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: b
                        })
                    } else i.default.dispatch({
                        type: "MESSAGE_LENGTH_UPSELL",
                        channel: y,
                        content: l
                    });
                    T({
                        valid: !1,
                        failureReason: _.MessageRestrictionTypes.MESSAGE_TOO_LONG
                    });
                    return
                }
                if (null != y) {
                    if (null != y.getGuildId() && h && s.default.getSlowmodeCooldownGuess(y.id) > 0) {
                        T({
                            valid: !1,
                            failureReason: _.MessageRestrictionTypes.SLOWMODE_COOLDOWN
                        });
                        return
                    }
                    if (null != t) {
                        var v = !0,
                            g = !1,
                            A = void 0;
                        try {
                            for (var b, N, R, C, P = (0, f.RESTRICTIONS)[Symbol.iterator](); !(v = (C = P.next()).done); v = !0) {
                                var D = C.value,
                                    L = D.check,
                                    M = D.analyticsType,
                                    U = D.animation,
                                    w = L(l, y, I);
                                if (!1 !== w) {
                                    t({
                                        analyticsType: M,
                                        channel: y,
                                        onCancel: function() {
                                            return T({
                                                valid: !1,
                                                failureReason: _.MessageRestrictionTypes.SHOUTING_CANCELLED
                                            })
                                        },
                                        onConfirm: function() {
                                            return T({
                                                valid: !0
                                            })
                                        },
                                        popoutText: w,
                                        animation: U
                                    });
                                    return
                                }
                            }
                        } catch (e) {
                            g = !0, A = e
                        } finally {
                            try {
                                !v && null != P.return && P.return()
                            } finally {
                                if (g) throw A
                            }
                        }
                    }
                }
                if (u.default.isFull()) {
                    (0, o.openModal)(function(e) {
                        return r.createElement(a.default, p({
                            title: E.default.Messages.MESSAGE_RATE_LIMITED_HEADER,
                            body: E.default.Messages.MESSAGE_RATE_LIMITED_BODY,
                            confirmText: E.default.Messages.MESSAGE_RATE_LIMITED_BUTTON
                        }, e))
                    }, {
                        onCloseRequest: _.NOOP
                    }), T({
                        valid: !1,
                        failureReason: _.MessageRestrictionTypes.RATE_LIMITED
                    });
                    return
                }
                T({
                    valid: !0
                })
            }({
                openWarningPopout: t,
                type: n,
                content: m,
                stickers: y,
                uploads: I,
                channel: h,
                restrictMentions: T,
                respectCooldown: v,
                userCanUsePremiumMessageLength: g,
                resolve: e
            })
        })
    }
}