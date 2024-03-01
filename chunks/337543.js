function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("702976");
    var r = n("446674"),
        i = n("913144"),
        l = n("9294"),
        u = n("49111");
    let a = {},
        o = {},
        s = {};

    function d(e, t) {
        var n;
        e = null != e ? e : "";
        let r = (0, l.parseExtraDataFromInviteKey)(e),
            i = a[e],
            o = null != i ? {
                state: u.InviteStates.RESOLVING,
                ...i
            } : {
                state: u.InviteStates.RESOLVING,
                code: r.baseCode
            };
        t(o), a = {
            ...a,
            [e]: o
        }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
            ...s,
            [o.guild.id]: e
        })
    }

    function E(e) {
        return d(e.code, t => {
            t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
        })
    }
    class _ extends r.default.Store {
        getInvite(e) {
            return a[e]
        }
        getInviteError(e) {
            return o[e]
        }
        getInvites() {
            return a
        }
        getInviteKeyForGuildId(e) {
            return s[e]
        }
    }
    _.displayName = "InviteStore";
    var c = new _(i.default, {
        INVITE_RESOLVE: function(e) {
            let {
                code: t
            } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
            a = {
                ...a,
                [t]: {
                    code: n.baseCode,
                    state: u.InviteStates.RESOLVING
                }
            }
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            return d(e.code, t => {
                var n, r;
                t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
            })
        },
        INVITE_RESOLVE_FAILURE: E,
        INSTANT_INVITE_REVOKE_SUCCESS: E,
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            return d(e.invite.code, t => {
                t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
            })
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            e.invites.forEach(e => d(e.code, e => {
                e.state = u.InviteStates.EXPIRED
            }))
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            return d(e.invite.code, t => {
                var n, r;
                t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
            })
        },
        INVITE_ACCEPT: function(e) {
            return d(e.code, e => {
                e.state = u.InviteStates.ACCEPTING
            })
        },
        INVITE_ACCEPT_SUCCESS: function(e) {
            return d(e.code, t => {
                t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                    ...t.channel,
                    ...e.invite.channel
                }
            })
        },
        INVITE_ACCEPT_FAILURE: function(e) {
            return o[e.code] = e.error, d(e.code, e => {
                e.state = u.InviteStates.ERROR
            })
        },
        INVITE_APP_OPENING: function(e) {
            return d(e.code, e => {
                e.state = u.InviteStates.APP_OPENING
            })
        },
        INVITE_APP_OPENED: function(e) {
            return d(e.code, e => {
                e.state = u.InviteStates.APP_OPENED
            })
        },
        INVITE_APP_NOT_OPENED: function(e) {
            return d(e.code, e => {
                e.state = u.InviteStates.APP_NOT_OPENED
            })
        }
    })
}