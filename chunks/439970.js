function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("383959"),
        o = n("774300"),
        i = n("569492"),
        a = n("217014"),
        u = n("870331"),
        s = n("463156"),
        l = n("54976"),
        c = n("551941"),
        f = n("281767");

    function d(e) {
        var t = null;
        if (null != e && null != e.channel) {
            var n = e.channel;
            t = e.target_type === c.InviteTargetTypes.STREAM ? f.LoggingInviteTypes.STREAM : e.target_type === c.InviteTargetTypes.EMBEDDED_APPLICATION ? f.LoggingInviteTypes.APPLICATION : (0, i.isMultiUserDM)(n.type) ? f.LoggingInviteTypes.GDM_INVITE : null == n || (0, i.isPrivate)(n.type) ? f.LoggingInviteTypes.FRIEND_INVITE : f.LoggingInviteTypes.SERVER_INVITE
        }
        return t
    }

    function _(e, t, n) {
        u.default.track(f.AnalyticEvents.INVITE_OPENED, {
            invite_code: e
        });
        var i, c, _ = (0, l.parseExtraDataFromInviteKey)(e);
        var E = (i = function(e) {
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
        }({}, n), c = (c = {
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: _.guildScheduledEventId
        }, c), Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(c)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
        }), i);
        return s.default.get({
            url: f.Endpoints.INVITE(_.baseCode),
            query: E,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: function(e) {
                    var r, i, u, s, l, c, E = e.body,
                        p = (null === (r = e.body) || void 0 === r ? void 0 : r.code) === f.AbortCodes.USER_BANNED;
                    return (0, o.exact)({
                        resolved: e.ok,
                        guild_id: null == E ? void 0 : null === (i = E.guild) || void 0 === i ? void 0 : i.id,
                        channel_id: null == E ? void 0 : null === (u = E.channel) || void 0 === u ? void 0 : u.id,
                        channel_type: null == E ? void 0 : null === (s = E.channel) || void 0 === s ? void 0 : s.type,
                        inviter_id: null == E ? void 0 : null === (l = E.inviter) || void 0 === l ? void 0 : l.id,
                        code: _.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: a.default.isAuthenticated(),
                        size_total: null == E ? void 0 : E.approximate_member_count,
                        size_online: null == E ? void 0 : E.approximate_presence_count,
                        destination_user_id: null == E ? void 0 : null === (c = E.target_user) || void 0 === c ? void 0 : c.id,
                        invite_type: d(E),
                        user_banned: p
                    })
                }
            }
        }).then(function(r) {
            var o = r.body;
            return null != t && u.default.track(f.AnalyticEvents.INVITE_RESOLVED, {
                resolved: !0,
                guild_id: null != o.guild ? o.guild.id : null,
                channel_id: null != o.channel ? o.channel.id : null,
                channel_type: null != o.channel ? o.channel.type : null,
                inviter_id: o.inviter ? o.inviter.id : null,
                code: _.baseCode,
                input_value: null == n ? void 0 : n.inputValue,
                location: t,
                authenticated: a.default.isAuthenticated(),
                size_total: o.approximate_member_count,
                size_online: o.approximate_presence_count,
                destination_user_id: null != o.target_user ? o.target_user.id : null,
                invite_type: d(o)
            }, {
                flush: !0
            }), {
                invite: o,
                code: e
            }
        }, function(r) {
            var o, i, s = null != r.body && r.body.code === f.AbortCodes.USER_BANNED;
            return null != t && u.default.track(f.AnalyticEvents.INVITE_RESOLVED, {
                resolved: !1,
                code: _.baseCode,
                input_value: null == n ? void 0 : n.inputValue,
                location: t,
                authenticated: a.default.isAuthenticated(),
                user_banned: s,
                error_code: null === (o = r.body) || void 0 === o ? void 0 : o.code,
                error_message: null === (i = r.body) || void 0 === i ? void 0 : i.message
            }, {
                flush: !0
            }), {
                invite: null,
                code: e,
                banned: s
            }
        })
    }
}