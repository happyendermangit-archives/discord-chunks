function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        joinRequestFromServer: function() {
            return c
        },
        default: function() {
            return E
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("813006"),
        a = n("697218"),
        o = n("591023");
    let l = {},
        u = !1,
        d = {};

    function c(e) {
        return {
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            user: e.user,
            createdAt: e.created_at,
            formResponses: e.form_responses,
            rejectionReason: e.rejection_reason,
            applicationStatus: e.application_status,
            actionedAt: e.actioned_at,
            actionedByUser: e.actioned_by_user,
            lastSeen: e.last_seen
        }
    }

    function f(e) {
        let {
            guildId: t,
            request: n
        } = e;
        if (null == n) return;
        let i = c(n),
            s = a.default.getCurrentUser();
        if (null != s && i.userId !== s.id) return !1;
        (0, o.isApprovedAndAcked)(i) ? delete l[t]: l[t] = i
    }
    class _ extends i.default.Store {
        getRequest(e) {
            return l[e]
        }
        computeGuildIds() {
            return Object.values(l).map(e => null == e ? void 0 : e.guildId).filter(e => null != e)
        }
        getJoinRequestGuild(e) {
            return null != d[e] ? new r.default(d[e]) : null
        }
        get hasFetchedRequestToJoinGuilds() {
            return u
        }
    }
    _.displayName = "UserGuildJoinRequestStore";
    var E = new _(s.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guildJoinRequests: t
            } = e;
            u = !1, d = {}, l = {}, t.forEach(e => {
                let {
                    guild_id: t
                } = e;
                null != t && (l[t] = c(e))
            })
        },
        GUILD_JOIN_REQUEST_UPDATE: f,
        GUILD_JOIN_REQUEST_CREATE: f,
        USER_GUILD_JOIN_REQUEST_UPDATE: function(e) {
            let {
                request: t,
                guildId: n
            } = e;
            if (null == t) {
                delete l[n];
                return
            }
            let i = c(t);
            (0, o.isApprovedAndAcked)(i) ? delete l[n]: l[n] = i
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete l[t.id]
        },
        USER_JOIN_REQUEST_GUILDS_FETCH: function(e) {
            let {
                guilds: t
            } = e;
            u = !0, t.forEach(e => {
                let {
                    id: t,
                    name: n,
                    features: i,
                    icon: s
                } = e;
                d[t] = {
                    id: t,
                    name: n,
                    features: i,
                    icon: s
                }
            })
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
            let {
                form: t,
                guildId: n
            } = e;
            if ((null == t ? void 0 : t.guild) != null) {
                let {
                    id: e,
                    name: i,
                    icon: s,
                    features: r
                } = t.guild;
                d[n] = {
                    id: e,
                    name: i,
                    icon: s,
                    features: null != r ? r : []
                }
            }
        },
        INVITE_ACCEPT_SUCCESS: function(e) {
            let {
                invite: t
            } = e, {
                guild: n,
                join_request: i
            } = t;
            if (null != n && null != i) {
                let {
                    guild_id: e
                } = i;
                l[e] = c(i);
                let {
                    id: t,
                    name: s,
                    icon: r,
                    features: a
                } = n;
                d[t] = {
                    id: t,
                    name: s,
                    icon: r,
                    features: null != a ? a : []
                }
            }
        },
        ACK_APPROVED_GUILD_JOIN_REQUEST: function(e) {
            let {
                guildId: t
            } = e;
            delete l[t]
        }
    })
}