function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return s
        }
    });
    var a = n("872717"),
        i = n("913144"),
        l = n("716241"),
        r = n("884351"),
        u = n("42203"),
        d = n("450911"),
        o = n("819689"),
        c = n("49111"),
        s = {
            updateActivity(t) {
                let {
                    applicationId: e,
                    distributor: n,
                    shareActivity: l,
                    token: r = null,
                    duration: u = 0,
                    closed: d = !1
                } = t;
                i.default.wait(() => i.default.dispatch({
                    type: "ACTIVITY_UPDATE_START",
                    applicationId: e,
                    duration: u,
                    distributor: n
                })), a.default.post({
                    url: c.Endpoints.ACTIVITIES,
                    body: {
                        application_id: e,
                        token: r,
                        duration: u,
                        share_activity: l,
                        distributor: n,
                        closed: d
                    },
                    retries: 1,
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: {
                            token: a
                        }
                    } = t;
                    i.default.dispatch({
                        type: "ACTIVITY_UPDATE_SUCCESS",
                        applicationId: e,
                        token: a,
                        duration: u,
                        distributor: n
                    })
                }).catch(() => {
                    i.default.dispatch({
                        type: "ACTIVITY_UPDATE_FAIL",
                        applicationId: e
                    })
                })
            },
            sendActivityInvite(t) {
                let {
                    channelId: e,
                    type: n,
                    activity: a,
                    content: i,
                    location: d
                } = t, s = u.default.getChannel(e);
                if (null == s) return Promise.resolve(null);
                let E = r.default.parse(s, null != i ? i : "");
                return o.default.sendMessage(s.id, E, !1, {
                    activityAction: {
                        type: n,
                        activity: a
                    }
                }).then(t => (l.default.trackWithMetadata(c.AnalyticEvents.INVITE_SENT, {
                    location: d,
                    invite_type: a.type === c.ActivityTypes.LISTENING ? c.LoggingInviteTypes.SPOTIFY : c.LoggingInviteTypes.APPLICATION,
                    application_id: a.application_id,
                    guild_id: s.getGuildId(),
                    channel_id: s.id,
                    message_id: null != t ? t.body.id : null
                }), Promise.resolve(s)), t => Promise.reject(t))
            },
            sendActivityInviteUser(t) {
                let {
                    userId: e,
                    type: n,
                    activity: a,
                    content: i,
                    location: l
                } = t;
                return d.default.ensurePrivateChannel(e).then(t => this.sendActivityInvite({
                    channelId: t,
                    type: n,
                    activity: a,
                    content: i,
                    location: l
                }))
            },
            async getJoinSecret(t, e, n, i, l) {
                let r = {};
                null != i && (r.channel_id = i), null != l && (r.message_id = l);
                let u = await a.default.get({
                    url: c.Endpoints.USER_ACTIVITY_JOIN(t, e, n),
                    retries: 3,
                    query: r
                });
                return u.body.secret
            }
        }
}