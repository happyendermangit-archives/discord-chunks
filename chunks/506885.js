function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return f
        }
    });
    var n = i("913144"),
        r = i("327037"),
        l = i("462274"),
        u = i("535013"),
        o = i("42203"),
        s = i("26989"),
        a = i("713135"),
        d = i("386714");
    async function f(e, t) {
        var i, f, c;
        let h, {
            withMutualGuilds: m = !1,
            withMutualFriendsCount: g = !1,
            friendToken: v,
            preloadUserBanner: b = !0,
            dispatchWait: p = !1,
            guildId: P,
            channelId: M
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("" === e) return;
        null != t && (0, l.maybeFetchColors)(t), null != P && !m && (m = !0), null != P && (h = null !== (f = null === (i = (0, u.getVisibleConnectionsRole)({
            guildMember: s.default.getMember(P, e),
            channel: o.default.getChannel(M)
        })) || void 0 === i ? void 0 : i.id) && void 0 !== f ? f : void 0);
        let _ = a.default.getUserProfile(e),
            U = a.default.getMutualGuilds(e),
            I = a.default.getMutualFriendsCount(e),
            C = a.default.isFetchingProfile(e),
            S = (null == _ ? void 0 : _.profileFetchFailed) || !C && (!Array.isArray(U) && m || null == I && g),
            y = b ? d.default : void 0,
            E = !1;
        if (null != P) {
            let t = a.default.getGuildMemberProfile(e, P);
            E = null == t
        }!(!S && !E && (C || Date.now() - (null !== (c = null == _ ? void 0 : _.lastFetched) && void 0 !== c ? c : 0) < 6e4)) && (p ? await n.default.wait(() => (0, r.fetchProfile)(e, {
            withMutualGuilds: m,
            withMutualFriendsCount: g,
            friendToken: v,
            guildId: P,
            connectionsRoleId: h
        }, y)) : await (0, r.fetchProfile)(e, {
            withMutualGuilds: m,
            withMutualFriendsCount: g,
            friendToken: v,
            guildId: P,
            connectionsRoleId: h
        }, y))
    }
}