function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("702976");
    var i = n("446674"),
        s = n("913144"),
        r = n("9294"),
        a = n("49111");
    let o = {},
        l = {},
        u = {};

    function d(e, t) {
        var n;
        e = null != e ? e : "";
        let i = (0, r.parseExtraDataFromInviteKey)(e),
            s = o[e],
            l = null != s ? {
                state: a.InviteStates.RESOLVING,
                ...s
            } : {
                state: a.InviteStates.RESOLVING,
                code: i.baseCode
            };
        t(l), o = {
            ...o,
            [e]: l
        }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
            ...u,
            [l.guild.id]: e
        })
    }

    function c(e) {
        return d(e.code, t => {
            t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
        })
    }
    class _ extends i.default.Store {
        getInvite(e) {
            return o[e]
        }
        getInviteError(e) {
            return l[e]
        }
        getInvites() {
            return o
        }
        getInviteKeyForGuildId(e) {
            return u[e]
        }
    }
    _.displayName = "InviteStore";
    var f = new _(s.default, {
        INVITE_RESOLVE: function(e) {
            let {
                code: t
            } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
            o = {
                ...o,
                [t]: {
                    code: n.baseCode,
                    state: a.InviteStates.RESOLVING
                }
            }
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            return d(e.code, t => {
                var n, i;
                t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
            })
        },
        INVITE_RESOLVE_FAILURE: c,
        INSTANT_INVITE_REVOKE_SUCCESS: c,
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            return d(e.invite.code, t => {
                t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
            })
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            e.invites.forEach(e => d(e.code, e => {
                e.state = a.InviteStates.EXPIRED
            }))
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            return d(e.invite.code, t => {
                var n, i;
                t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
            })
        },
        INVITE_ACCEPT: function(e) {
            return d(e.code, e => {
                e.state = a.InviteStates.ACCEPTING
            })
        },
        INVITE_ACCEPT_SUCCESS: function(e) {
            return d(e.code, t => {
                t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                    ...t.channel,
                    ...e.invite.channel
                }
            })
        },
        INVITE_ACCEPT_FAILURE: function(e) {
            return l[e.code] = e.error, d(e.code, e => {
                e.state = a.InviteStates.ERROR
            })
        },
        INVITE_APP_OPENING: function(e) {
            return d(e.code, e => {
                e.state = a.InviteStates.APP_OPENING
            })
        },
        INVITE_APP_OPENED: function(e) {
            return d(e.code, e => {
                e.state = a.InviteStates.APP_OPENED
            })
        },
        INVITE_APP_NOT_OPENED: function(e) {
            return d(e.code, e => {
                e.state = a.InviteStates.APP_NOT_OPENED
            })
        }
    })
}