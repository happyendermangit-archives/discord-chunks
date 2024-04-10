function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("367907"),
        a = n("957730"),
        o = n("592125"),
        l = n("493683"),
        u = n("904245"),
        d = n("981631");
    t.default = {
        updateActivity(e) {
            let {
                applicationId: t,
                distributor: n,
                shareActivity: s,
                token: a = null,
                duration: o = 0,
                closed: l = !1,
                exePath: u = null,
                voiceChannelId: _ = null,
                mediaSessionId: c = null
            } = e;
            r.default.wait(() => r.default.dispatch({
                type: "ACTIVITY_UPDATE_START",
                applicationId: t,
                duration: o,
                distributor: n
            })), i.HTTP.post({
                url: d.Endpoints.ACTIVITIES,
                body: {
                    application_id: t,
                    token: a,
                    duration: o,
                    share_activity: s,
                    distributor: n,
                    closed: l,
                    exePath: u,
                    voice_channel_id: _,
                    media_session_id: c
                },
                retries: 1,
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        token: i
                    }
                } = e;
                r.default.dispatch({
                    type: "ACTIVITY_UPDATE_SUCCESS",
                    applicationId: t,
                    token: i,
                    duration: o,
                    distributor: n
                })
            }).catch(() => {
                r.default.dispatch({
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
                content: r,
                location: l
            } = e, _ = o.default.getChannel(t);
            if (null == _) return Promise.resolve(null);
            let c = a.default.parse(_, null != r ? r : "");
            return u.default.sendMessage(_.id, c, !1, {
                activityAction: {
                    type: n,
                    activity: i
                }
            }).then(e => (s.default.trackWithMetadata(d.AnalyticEvents.INVITE_SENT, {
                location: l,
                invite_type: i.type === d.ActivityTypes.LISTENING ? d.LoggingInviteTypes.SPOTIFY : d.LoggingInviteTypes.APPLICATION,
                application_id: i.application_id,
                guild_id: _.getGuildId(),
                channel_id: _.id,
                message_id: null != e ? e.body.id : null
            }), Promise.resolve(_)), e => Promise.reject(e))
        },
        sendActivityInviteUser(e) {
            let {
                userId: t,
                type: n,
                activity: i,
                content: r,
                location: s
            } = e;
            return l.default.ensurePrivateChannel(t).then(e => this.sendActivityInvite({
                channelId: e,
                type: n,
                activity: i,
                content: r,
                location: s
            }))
        },
        async getJoinSecret(e, t, n, r, s) {
            let a = {};
            return null != r && (a.channel_id = r), null != s && (a.message_id = s), (await i.HTTP.get({
                url: d.Endpoints.USER_ACTIVITY_JOIN(e, t, n),
                retries: 3,
                query: a
            })).body.secret
        }
    }
}