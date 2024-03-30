function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("523746"),
        a = n("699516"),
        o = n("594174"),
        l = n("626135"),
        u = n("668781"),
        d = n("194359"),
        _ = n("287734"),
        c = n("981631"),
        E = n("689938");
    t.default = {
        call(e, t, n, r, s) {
            let I = n => {
                _.default.selectVoiceChannel(e, t), n && this.ring(e), null == s || s(e)
            };
            if (null != r) {
                if (a.default.isBlocked(r)) return;
                let t = o.default.getUser(r);
                i.HTTP.get({
                    url: c.Endpoints.CALL(e),
                    oldFormErrors: !0
                }).then(e => {
                    I(n && e.body.ringable)
                }, () => {
                    l.default.track(c.AnalyticEvents.OPEN_POPOUT, {
                        type: "Not Friend",
                        source: "Call"
                    }), u.default.show({
                        title: E.default.Messages.START_CALL,
                        body: E.default.Messages.CALL_INVITE_NOT_FRIENDS.format({
                            username: null != t ? t.username : ""
                        }),
                        confirmText: E.default.Messages.ADD_FRIEND_BUTTON,
                        cancelText: E.default.Messages.OKAY,
                        onConfirm() {
                            d.default.addRelationship({
                                userId: r,
                                context: {
                                    location: "Call"
                                }
                            })
                        }
                    })
                })
            } else I(n)
        },
        ring(e, t) {
            let n = s.default.getCall(e);
            if (null != n && null != n.messageId && !s.default.isCallUnavailable(e)) {
                i.HTTP.post({
                    url: c.Endpoints.CALL_RING(e),
                    body: {
                        recipients: t
                    },
                    oldFormErrors: !0
                });
                return
            }
            r.default.dispatch({
                type: "CALL_ENQUEUE_RING",
                channelId: e,
                recipients: t
            })
        },
        stopRinging: (e, t) => i.HTTP.post({
            url: c.Endpoints.CALL_STOP_RINGING(e),
            body: {
                recipients: t
            },
            oldFormErrors: !0
        })
    }
}