function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("518254"),
        a = n("776982"),
        u = n("208454"),
        s = n("870331"),
        l = n("483587"),
        c = n("346298"),
        f = n("585949"),
        d = n("281767"),
        _ = n("941504");
    t.default = {
        call: function(e, t, n, o, i) {
            var E = this,
                p = function(n) {
                    f.default.selectVoiceChannel(e, t), n && E.ring(e), null == i || i(e)
                };
            if (null != o) {
                if (a.default.isBlocked(o)) return;
                var m = u.default.getUser(o);
                r.HTTP.get({
                    url: d.Endpoints.CALL(e),
                    oldFormErrors: !0
                }).then(function(e) {
                    p(n && e.body.ringable)
                }, function() {
                    s.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                        type: "Not Friend",
                        source: "Call"
                    }), l.default.show({
                        title: _.default.Messages.START_CALL,
                        body: _.default.Messages.CALL_INVITE_NOT_FRIENDS.format({
                            username: null != m ? m.username : ""
                        }),
                        confirmText: _.default.Messages.ADD_FRIEND_BUTTON,
                        cancelText: _.default.Messages.OKAY,
                        onConfirm: function() {
                            c.default.addRelationship({
                                userId: o,
                                context: {
                                    location: "Call"
                                }
                            })
                        }
                    })
                })
            } else p(n)
        },
        ring: function(e, t) {
            var n = i.default.getCall(e);
            if (null != n && null != n.messageId && !i.default.isCallUnavailable(e)) {
                r.HTTP.post({
                    url: d.Endpoints.CALL_RING(e),
                    body: {
                        recipients: t
                    },
                    oldFormErrors: !0
                });
                return
            }
            o.default.dispatch({
                type: "CALL_ENQUEUE_RING",
                channelId: e,
                recipients: t
            })
        },
        stopRinging: function(e, t) {
            return r.HTTP.post({
                url: d.Endpoints.CALL_STOP_RINGING(e),
                body: {
                    recipients: t
                },
                oldFormErrors: !0
            })
        }
    }
}