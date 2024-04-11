function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptAgreements: function() {
            return T
        },
        fetchCurrentUser: function() {
            return I
        },
        fetchMutualFriends: function() {
            return h
        },
        fetchProfile: function() {
            return A
        },
        getUser: function() {
            return S
        },
        setFlag: function() {
            return f
        }
    }), n("789020");
    var i = n("512722"),
        r = n.n(i),
        s = n("525769"),
        a = n("259443"),
        o = n("544891"),
        l = n("570140"),
        u = n("598077"),
        d = n("594174"),
        _ = n("573261"),
        c = n("981631");
    let E = new a.Logger("UserProfileModalActionCreators");

    function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                withAnalyticsToken: t = !1
            } = e;
        return o.HTTP.get({
            url: c.Endpoints.ME,
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

    function T() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return _.default.patch({
            url: c.Endpoints.USER_AGREEMENTS,
            trackedActionData: {
                event: s.NetworkActionNames.USER_ACCEPT_AGREEMENTS
            },
            body: {
                terms: e,
                privacy: t
            },
            oldFormErrors: !0
        }).then(() => !0, () => !1)
    }

    function f(e, t) {
        let n = d.default.getCurrentUser();
        r()(null != n, "setFlag: user cannot be undefined");
        let i = t ? n.flags | e : n.flags & ~e;
        return o.HTTP.patch({
            url: c.Endpoints.ME,
            oldFormErrors: !0,
            body: {
                flags: i
            }
        })
    }

    function S(e) {
        let t = d.default.getUser(e);
        return null != t ? Promise.resolve(t) : o.HTTP.get({
            url: c.Endpoints.USER(e),
            oldFormErrors: !0
        }).then(t => (l.default.dispatch({
            type: "USER_UPDATE",
            user: t.body
        }), d.default.getUser(e)))
    }
    async function A(e) {
        let {
            friendToken: t,
            withMutualGuilds: n,
            withMutualFriendsCount: i,
            withMutualFriends: r,
            guildId: s,
            connectionsRoleId: a
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = arguments.length > 2 ? arguments[2] : void 0;
        l.default.dispatch({
            type: "USER_PROFILE_FETCH_START",
            userId: e
        });
        try {
            let d = await o.HTTP.get({
                url: c.Endpoints.USER_PROFILE(e),
                query: {
                    friend_token: t,
                    with_mutual_guilds: n,
                    with_mutual_friends: r,
                    with_mutual_friends_count: i && (null == r || !r),
                    guild_id: s,
                    connections_role_id: a
                },
                oldFormErrors: !0
            });
            return null == u || u(d.body, s), l.default.dispatch({
                type: "USER_UPDATE",
                user: d.body.user
            }), l.default.dispatch({
                type: "USER_PROFILE_FETCH_SUCCESS",
                ...d.body
            }), null != s && null != d.body.guild_member && l.default.dispatch({
                type: "GUILD_MEMBER_PROFILE_UPDATE",
                guildId: s,
                guildMember: d.body.guild_member
            }), d.body
        } catch (t) {
            throw null != t && (null == t ? void 0 : t.body) != null && E.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                type: "USER_PROFILE_FETCH_FAILURE",
                userId: e
            }), t
        }
    }
    async function h(e, t) {
        l.default.dispatch({
            type: "MUTUAL_FRIENDS_FETCH_START",
            userId: e
        });
        try {
            let n = await o.HTTP.get({
                url: c.Endpoints.USER_RELATIONSHIPS(e),
                oldFormErrors: !0,
                signal: t
            });
            l.default.dispatch({
                type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                userId: e,
                mutualFriends: n.body
            })
        } catch (t) {
            throw (null == t ? void 0 : t.body) != null && E.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                userId: e
            }), t
        }
    }
}