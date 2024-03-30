function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("990547"),
        r = n("283693"),
        s = n("131704"),
        a = n("314897"),
        o = n("626135"),
        l = n("573261"),
        u = n("264229"),
        d = n("245335"),
        _ = n("981631");

    function c(e) {
        let t = null;
        if (null != e && null != e.channel) {
            let n = e.channel;
            t = e.target_type === d.InviteTargetTypes.STREAM ? _.LoggingInviteTypes.STREAM : e.target_type === d.InviteTargetTypes.EMBEDDED_APPLICATION ? _.LoggingInviteTypes.APPLICATION : (0, s.isMultiUserDM)(n.type) ? _.LoggingInviteTypes.GDM_INVITE : null == n || (0, s.isPrivate)(n.type) ? _.LoggingInviteTypes.FRIEND_INVITE : _.LoggingInviteTypes.SERVER_INVITE
        }
        return t
    }

    function E(e, t, n) {
        o.default.track(_.AnalyticEvents.INVITE_OPENED, {
            invite_code: e
        });
        let s = (0, u.parseExtraDataFromInviteKey)(e),
            d = {
                ...n,
                with_counts: !0,
                with_expiration: !0,
                guild_scheduled_event_id: s.guildScheduledEventId
            };
        return l.default.get({
            url: _.Endpoints.INVITE(s.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: e => {
                    var i, o, l, u, d, E;
                    let I = e.body,
                        T = (null === (i = e.body) || void 0 === i ? void 0 : i.code) === _.AbortCodes.USER_BANNED;
                    return (0, r.exact)({
                        resolved: e.ok,
                        guild_id: null == I ? void 0 : null === (o = I.guild) || void 0 === o ? void 0 : o.id,
                        channel_id: null == I ? void 0 : null === (l = I.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == I ? void 0 : null === (u = I.channel) || void 0 === u ? void 0 : u.type,
                        inviter_id: null == I ? void 0 : null === (d = I.inviter) || void 0 === d ? void 0 : d.id,
                        code: s.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: null == I ? void 0 : I.approximate_member_count,
                        size_online: null == I ? void 0 : I.approximate_presence_count,
                        destination_user_id: null == I ? void 0 : null === (E = I.target_user) || void 0 === E ? void 0 : E.id,
                        invite_type: c(I),
                        user_banned: T
                    })
                }
            }
        }).then(i => {
            let r = i.body;
            return null != t && o.default.track(_.AnalyticEvents.INVITE_RESOLVED, {
                resolved: !0,
                guild_id: null != r.guild ? r.guild.id : null,
                channel_id: null != r.channel ? r.channel.id : null,
                channel_type: null != r.channel ? r.channel.type : null,
                inviter_id: r.inviter ? r.inviter.id : null,
                code: s.baseCode,
                input_value: null == n ? void 0 : n.inputValue,
                location: t,
                authenticated: a.default.isAuthenticated(),
                size_total: r.approximate_member_count,
                size_online: r.approximate_presence_count,
                destination_user_id: null != r.target_user ? r.target_user.id : null,
                invite_type: c(r)
            }, {
                flush: !0
            }), {
                invite: r,
                code: e
            }
        }, i => {
            let r = null != i.body && i.body.code === _.AbortCodes.USER_BANNED;
            if (null != t) {
                var l, u;
                o.default.track(_.AnalyticEvents.INVITE_RESOLVED, {
                    resolved: !1,
                    code: s.baseCode,
                    input_value: null == n ? void 0 : n.inputValue,
                    location: t,
                    authenticated: a.default.isAuthenticated(),
                    user_banned: r,
                    error_code: null === (l = i.body) || void 0 === l ? void 0 : l.code,
                    error_message: null === (u = i.body) || void 0 === u ? void 0 : u.message
                }, {
                    flush: !0
                })
            }
            return {
                invite: null,
                code: e,
                banned: r
            }
        })
    }
}