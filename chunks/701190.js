function(e, t, n) {
    "use strict";
    n.r(t), n("789020");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("264229"),
        d = n("981631");
    let _ = {},
        c = {},
        E = {};

    function I(e, t) {
        var n;
        e = null != e ? e : "";
        let i = (0, u.parseExtraDataFromInviteKey)(e),
            r = _[e],
            s = null != r ? {
                state: d.InviteStates.RESOLVING,
                ...r
            } : {
                state: d.InviteStates.RESOLVING,
                code: i.baseCode
            };
        t(s), _ = {
            ..._,
            [e]: s
        }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (E = {
            ...E,
            [s.guild.id]: e
        })
    }

    function T(e) {
        return I(e.code, t => {
            t.state = "banned" in e && e.banned ? d.InviteStates.BANNED : d.InviteStates.EXPIRED
        })
    }
    class f extends(i = o.default.Store) {
        getInvite(e) {
            return _[e]
        }
        getInviteError(e) {
            return c[e]
        }
        getInvites() {
            return _
        }
        getInviteKeyForGuildId(e) {
            return E[e]
        }
    }
    a = "InviteStore", (s = "displayName") in(r = f) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new f(l.default, {
        INVITE_RESOLVE: function(e) {
            let {
                code: t
            } = e, n = (0, u.parseExtraDataFromInviteKey)(t);
            _ = {
                ..._,
                [t]: {
                    code: n.baseCode,
                    state: d.InviteStates.RESOLVING
                }
            }
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            return I(e.code, t => {
                var n, i;
                t.state = d.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
            })
        },
        INVITE_RESOLVE_FAILURE: T,
        INSTANT_INVITE_REVOKE_SUCCESS: T,
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            return I(e.invite.code, t => {
                t.state = d.InviteStates.RESOLVED, t.inviter = e.invite.inviter
            })
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            e.invites.forEach(e => I(e.code, e => {
                e.state = d.InviteStates.EXPIRED
            }))
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            return I(e.invite.code, t => {
                var n, i;
                t.state = d.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
            })
        },
        INVITE_ACCEPT: function(e) {
            return I(e.code, e => {
                e.state = d.InviteStates.ACCEPTING
            })
        },
        INVITE_ACCEPT_SUCCESS: function(e) {
            return I(e.code, t => {
                t.state = d.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                    ...t.channel,
                    ...e.invite.channel
                }
            })
        },
        INVITE_ACCEPT_FAILURE: function(e) {
            return c[e.code] = e.error, I(e.code, e => {
                e.state = d.InviteStates.ERROR
            })
        },
        INVITE_APP_OPENING: function(e) {
            return I(e.code, e => {
                e.state = d.InviteStates.APP_OPENING
            })
        },
        INVITE_APP_OPENED: function(e) {
            return I(e.code, e => {
                e.state = d.InviteStates.APP_OPENED
            })
        },
        INVITE_APP_NOT_OPENED: function(e) {
            return I(e.code, e => {
                e.state = d.InviteStates.APP_NOT_OPENED
            })
        }
    })
}