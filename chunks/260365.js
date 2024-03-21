function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("716241"),
        a = n("884351"),
        o = n("42203"),
        l = n("450911"),
        u = n("819689"),
        d = n("49111"),
        c = {
            updateActivity(e) {
                let {
                    applicationId: t,
                    distributor: n,
                    shareActivity: r,
                    token: a = null,
                    duration: o = 0,
                    closed: l = !1,
                    exePath: u = null
                } = e;
                s.default.wait(() => s.default.dispatch({
                    type: "ACTIVITY_UPDATE_START",
                    applicationId: t,
                    duration: o,
                    distributor: n
                })), i.default.post({
                    url: d.Endpoints.ACTIVITIES,
                    body: {
                        application_id: t,
                        token: a,
                        duration: o,
                        share_activity: r,
                        distributor: n,
                        closed: l,
                        exePath: u
                    },
                    retries: 1,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: {
                            token: i
                        }
                    } = e;
                    s.default.dispatch({
                        type: "ACTIVITY_UPDATE_SUCCESS",
                        applicationId: t,
                        token: i,
                        duration: o,
                        distributor: n
                    })
                }).catch(() => {
                    s.default.dispatch({
                        type: "ACTIVITY_UPDATE_FAIL",
                        applicationId: t
                    })
                })
            },
            sendActivityInvite(e) {
                let {
                    channelId: t,
                    type: n,
                    activity: i,
                    content: s,
                    location: l
                } = e, c = o.default.getChannel(t);
                if (null == c) return Promise.resolve(null);
                let _ = a.default.parse(c, null != s ? s : "");
                return u.default.sendMessage(c.id, _, !1, {
                    activityAction: {
                        type: n,
                        activity: i
                    }
                }).then(e => (r.default.trackWithMetadata(d.AnalyticEvents.INVITE_SENT, {
                    location: l,
                    invite_type: i.type === d.ActivityTypes.LISTENING ? d.LoggingInviteTypes.SPOTIFY : d.LoggingInviteTypes.APPLICATION,
                    application_id: i.application_id,
                    guild_id: c.getGuildId(),
                    channel_id: c.id,
                    message_id: null != e ? e.body.id : null
                }), Promise.resolve(c)), e => Promise.reject(e))
            },
            sendActivityInviteUser(e) {
                let {
                    userId: t,
                    type: n,
                    activity: i,
                    content: s,
                    location: r
                } = e;
                return l.default.ensurePrivateChannel(t).then(e => this.sendActivityInvite({
                    channelId: e,
                    type: n,
                    activity: i,
                    content: s,
                    location: r
                }))
            },
            async getJoinSecret(e, t, n, s, r) {
                let a = {};
                null != s && (a.channel_id = s), null != r && (a.message_id = r);
                let o = await i.default.get({
                    url: d.Endpoints.USER_ACTIVITY_JOIN(e, t, n),
                    retries: 3,
                    query: a
                });
                return o.body.secret
            }
        }
}