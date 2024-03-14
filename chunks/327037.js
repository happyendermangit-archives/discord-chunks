function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchCurrentUser: function() {
            return E
        },
        acceptAgreements: function() {
            return h
        },
        setFlag: function() {
            return g
        },
        getUser: function() {
            return m
        },
        fetchProfile: function() {
            return p
        },
        fetchMutualFriends: function() {
            return S
        }
    }), n("702976");
    var i = n("627445"),
        s = n.n(i),
        r = n("33112"),
        a = n("811022"),
        o = n("872717"),
        l = n("913144"),
        u = n("766274"),
        d = n("697218"),
        c = n("840707"),
        f = n("49111");
    let _ = new a.default("UserProfileModalActionCreators");

    function E() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                withAnalyticsToken: t = !1
            } = e;
        return o.default.get({
            url: f.Endpoints.ME,
            query: {
                with_analytics_token: t
            },
            oldFormErrors: !0
        }).then(e => (l.default.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: e.body,
            analyticsToken: t ? e.body.analytics_token : void 0
        }), new u.default(e.body)))
    }

    function h() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return c.default.patch({
            url: f.Endpoints.USER_AGREEMENTS,
            trackedActionData: {
                event: r.NetworkActionNames.USER_ACCEPT_AGREEMENTS
            },
            body: {
                terms: e,
                privacy: t
            },
            oldFormErrors: !0
        }).then(() => !0, () => !1)
    }

    function g(e, t) {
        let n = d.default.getCurrentUser();
        s(null != n, "setFlag: user cannot be undefined");
        let i = t ? n.flags | e : n.flags & ~e;
        return o.default.patch({
            url: f.Endpoints.ME,
            oldFormErrors: !0,
            body: {
                flags: i
            }
        })
    }

    function m(e) {
        let t = d.default.getUser(e);
        return null != t ? Promise.resolve(t) : o.default.get({
            url: f.Endpoints.USER(e),
            oldFormErrors: !0
        }).then(t => (l.default.dispatch({
            type: "USER_UPDATE",
            user: t.body
        }), d.default.getUser(e)))
    }
    async function p(e) {
        let {
            friendToken: t,
            withMutualGuilds: n,
            withMutualFriendsCount: i,
            guildId: s,
            connectionsRoleId: r
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
        l.default.dispatch({
            type: "USER_PROFILE_FETCH_START",
            userId: e
        });
        try {
            let u = await o.default.get({
                url: f.Endpoints.USER_PROFILE(e),
                query: {
                    friend_token: t,
                    with_mutual_guilds: n,
                    with_mutual_friends_count: i,
                    guild_id: s,
                    connections_role_id: r
                },
                oldFormErrors: !0
            });
            return null == a || a(u.body, s), l.default.dispatch({
                type: "USER_UPDATE",
                user: u.body.user
            }), l.default.dispatch({
                type: "USER_PROFILE_FETCH_SUCCESS",
                ...u.body
            }), null != s && null != u.body.guild_member && l.default.dispatch({
                type: "GUILD_MEMBER_PROFILE_UPDATE",
                guildId: s,
                guildMember: u.body.guild_member
            }), u.body
        } catch (t) {
            throw null != t && (null == t ? void 0 : t.body) != null && _.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                type: "USER_PROFILE_FETCH_FAILURE",
                userId: e
            }), t
        }
    }
    async function S(e) {
        l.default.dispatch({
            type: "MUTUAL_FRIENDS_FETCH_START",
            userId: e
        });
        try {
            let t = await o.default.get({
                url: f.Endpoints.USER_RELATIONSHIPS(e),
                oldFormErrors: !0
            });
            l.default.dispatch({
                type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                userId: e,
                mutualFriends: t.body
            })
        } catch (t) {
            throw (null == t ? void 0 : t.body) != null && _.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                userId: e
            }), t
        }
    }
}