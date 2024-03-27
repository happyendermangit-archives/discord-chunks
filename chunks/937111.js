function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        joinRequestFromServer: function() {
            return T
        }
    });
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("601964"),
        d = n("594174"),
        _ = n("881952");
    let c = {},
        E = !1,
        I = {};

    function T(e) {
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
        let i = T(n),
            r = d.default.getCurrentUser();
        if (null != r && i.userId !== r.id) return !1;
        (0, _.isApprovedAndAcked)(i) ? delete c[t]: c[t] = i
    }
    class S extends(a = o.default.Store) {
        getRequest(e) {
            return c[e]
        }
        computeGuildIds() {
            return Object.values(c).map(e => null == e ? void 0 : e.guildId).filter(e => null != e)
        }
        getJoinRequestGuild(e) {
            return null != I[e] ? new u.default(I[e]) : null
        }
        get hasFetchedRequestToJoinGuilds() {
            return E
        }
    }
    s = "UserGuildJoinRequestStore", (r = "displayName") in(i = S) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new S(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guildJoinRequests: t
            } = e;
            E = !1, I = {}, c = {}, t.forEach(e => {
                let {
                    guild_id: t
                } = e;
                null != t && (c[t] = T(e))
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
                delete c[n];
                return
            }
            let i = T(t);
            (0, _.isApprovedAndAcked)(i) ? delete c[n]: c[n] = i
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete c[t.id]
        },
        USER_JOIN_REQUEST_GUILDS_FETCH: function(e) {
            let {
                guilds: t
            } = e;
            E = !0, t.forEach(e => {
                let {
                    id: t,
                    name: n,
                    features: i,
                    icon: r
                } = e;
                I[t] = {
                    id: t,
                    name: n,
                    features: i,
                    icon: r
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
                    icon: r,
                    features: s
                } = t.guild;
                I[n] = {
                    id: e,
                    name: i,
                    icon: r,
                    features: null != s ? s : []
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
                c[e] = T(i);
                let {
                    id: t,
                    name: r,
                    icon: s,
                    features: a
                } = n;
                I[t] = {
                    id: t,
                    name: r,
                    icon: s,
                    features: null != a ? a : []
                }
            }
        },
        ACK_APPROVED_GUILD_JOIN_REQUEST: function(e) {
            let {
                guildId: t
            } = e;
            delete c[t]
        }
    })
}