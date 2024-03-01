function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var s = n("872717"),
        i = n("913144"),
        r = n("950104"),
        a = n("27618"),
        o = n("697218"),
        d = n("599110"),
        u = n("404118"),
        l = n("736964"),
        f = n("987317"),
        _ = n("49111"),
        c = n("782340"),
        g = {
            call(e, t, n, i, r) {
                let g = n => {
                    f.default.selectVoiceChannel(e, t), n && this.ring(e), null == r || r(e)
                };
                if (null != i) {
                    let t = a.default.isBlocked(i);
                    if (t) return;
                    let r = o.default.getUser(i);
                    s.default.get({
                        url: _.Endpoints.CALL(e),
                        oldFormErrors: !0
                    }).then(e => {
                        g(n && e.body.ringable)
                    }, () => {
                        d.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                            type: "Not Friend",
                            source: "Call"
                        }), u.default.show({
                            title: c.default.Messages.START_CALL,
                            body: c.default.Messages.CALL_INVITE_NOT_FRIENDS.format({
                                username: null != r ? r.username : ""
                            }),
                            confirmText: c.default.Messages.ADD_FRIEND_BUTTON,
                            cancelText: c.default.Messages.OKAY,
                            onConfirm() {
                                l.default.addRelationship({
                                    userId: i,
                                    context: {
                                        location: "Call"
                                    }
                                })
                            }
                        })
                    })
                } else g(n)
            },
            ring(e, t) {
                let n = r.default.getCall(e);
                if (null != n && null != n.messageId && !r.default.isCallUnavailable(e)) {
                    s.default.post({
                        url: _.Endpoints.CALL_RING(e),
                        body: {
                            recipients: t
                        },
                        oldFormErrors: !0
                    });
                    return
                }
                i.default.dispatch({
                    type: "CALL_ENQUEUE_RING",
                    channelId: e,
                    recipients: t
                })
            },
            stopRinging: (e, t) => s.default.post({
                url: _.Endpoints.CALL_STOP_RINGING(e),
                body: {
                    recipients: t
                },
                oldFormErrors: !0
            })
        }
}