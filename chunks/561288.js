function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("950104"),
        a = n("27618"),
        o = n("697218"),
        l = n("599110"),
        u = n("404118"),
        d = n("736964"),
        c = n("987317"),
        f = n("49111"),
        _ = n("782340"),
        E = {
            call(e, t, n, s, r) {
                let E = n => {
                    c.default.selectVoiceChannel(e, t), n && this.ring(e), null == r || r(e)
                };
                if (null != s) {
                    let t = a.default.isBlocked(s);
                    if (t) return;
                    let r = o.default.getUser(s);
                    i.default.get({
                        url: f.Endpoints.CALL(e),
                        oldFormErrors: !0
                    }).then(e => {
                        E(n && e.body.ringable)
                    }, () => {
                        l.default.track(f.AnalyticEvents.OPEN_POPOUT, {
                            type: "Not Friend",
                            source: "Call"
                        }), u.default.show({
                            title: _.default.Messages.START_CALL,
                            body: _.default.Messages.CALL_INVITE_NOT_FRIENDS.format({
                                username: null != r ? r.username : ""
                            }),
                            confirmText: _.default.Messages.ADD_FRIEND_BUTTON,
                            cancelText: _.default.Messages.OKAY,
                            onConfirm() {
                                d.default.addRelationship({
                                    userId: s,
                                    context: {
                                        location: "Call"
                                    }
                                })
                            }
                        })
                    })
                } else E(n)
            },
            ring(e, t) {
                let n = r.default.getCall(e);
                if (null != n && null != n.messageId && !r.default.isCallUnavailable(e)) {
                    i.default.post({
                        url: f.Endpoints.CALL_RING(e),
                        body: {
                            recipients: t
                        },
                        oldFormErrors: !0
                    });
                    return
                }
                s.default.dispatch({
                    type: "CALL_ENQUEUE_RING",
                    channelId: e,
                    recipients: t
                })
            },
            stopRinging: (e, t) => i.default.post({
                url: f.Endpoints.CALL_STOP_RINGING(e),
                body: {
                    recipients: t
                },
                oldFormErrors: !0
            })
        }
}