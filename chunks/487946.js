function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("759843"),
        s = n("627929"),
        r = n("233069"),
        a = n("271938"),
        o = n("599110"),
        l = n("840707"),
        u = n("9294"),
        d = n("91366"),
        c = n("49111");

    function f(e) {
        let t = null;
        if (null != e && null != e.channel) {
            let n = e.channel;
            t = e.target_type === d.InviteTargetTypes.STREAM ? c.LoggingInviteTypes.STREAM : e.target_type === d.InviteTargetTypes.EMBEDDED_APPLICATION ? c.LoggingInviteTypes.APPLICATION : (0, r.isMultiUserDM)(n.type) ? c.LoggingInviteTypes.GDM_INVITE : null == n || (0, r.isPrivate)(n.type) ? c.LoggingInviteTypes.FRIEND_INVITE : c.LoggingInviteTypes.SERVER_INVITE
        }
        return t
    }

    function _(e, t, n) {
        o.default.track(c.AnalyticEvents.INVITE_OPENED, {
            invite_code: e
        });
        let r = (0, u.parseExtraDataFromInviteKey)(e),
            d = {
                ...n,
                with_counts: !0,
                with_expiration: !0,
                guild_scheduled_event_id: r.guildScheduledEventId
            };
        return l.default.get({
            url: c.Endpoints.INVITE(r.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: e => {
                    var i, o, l, u, d, _;
                    let h = e.body,
                        E = (null === (i = e.body) || void 0 === i ? void 0 : i.code) === c.AbortCodes.USER_BANNED;
                    return (0, s.exact)({
                        resolved: e.ok,
                        guild_id: null == h ? void 0 : null === (o = h.guild) || void 0 === o ? void 0 : o.id,
                        channel_id: null == h ? void 0 : null === (l = h.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == h ? void 0 : null === (u = h.channel) || void 0 === u ? void 0 : u.type,
                        inviter_id: null == h ? void 0 : null === (d = h.inviter) || void 0 === d ? void 0 : d.id,
                        code: r.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: null == h ? void 0 : h.approximate_member_count,
                        size_online: null == h ? void 0 : h.approximate_presence_count,
                        destination_user_id: null == h ? void 0 : null === (_ = h.target_user) || void 0 === _ ? void 0 : _.id,
                        invite_type: f(h),
                        user_banned: E
                    })
                }
            }
        }).then(i => {
            let s = i.body;
            return null != t && o.default.track(c.AnalyticEvents.INVITE_RESOLVED, {
                resolved: !0,
                guild_id: null != s.guild ? s.guild.id : null,
                channel_id: null != s.channel ? s.channel.id : null,
                channel_type: null != s.channel ? s.channel.type : null,
                inviter_id: s.inviter ? s.inviter.id : null,
                code: r.baseCode,
                input_value: null == n ? void 0 : n.inputValue,
                location: t,
                authenticated: a.default.isAuthenticated(),
                size_total: s.approximate_member_count,
                size_online: s.approximate_presence_count,
                destination_user_id: null != s.target_user ? s.target_user.id : null,
                invite_type: f(s)
            }, {
                flush: !0
            }), {
                invite: s,
                code: e
            }
        }, i => {
            let s = null != i.body && i.body.code === c.AbortCodes.USER_BANNED;
            if (null != t) {
                var l, u;
                o.default.track(c.AnalyticEvents.INVITE_RESOLVED, {
                    resolved: !1,
                    code: r.baseCode,
                    input_value: null == n ? void 0 : n.inputValue,
                    location: t,
                    authenticated: a.default.isAuthenticated(),
                    user_banned: s,
                    error_code: null === (l = i.body) || void 0 === l ? void 0 : l.code,
                    error_message: null === (u = i.body) || void 0 === u ? void 0 : u.message
                }, {
                    flush: !0
                })
            }
            return {
                invite: null,
                code: e,
                banned: s
            }
        })
    }
}