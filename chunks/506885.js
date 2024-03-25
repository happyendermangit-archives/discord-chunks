function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return c
        }
    });
    var l = i("913144"),
        r = i("327037"),
        n = i("462274"),
        u = i("535013"),
        o = i("501768"),
        s = i("42203"),
        a = i("26989"),
        d = i("713135"),
        f = i("386714");
    async function c(e, t) {
        var i, c, h;
        let g, {
            withMutualGuilds: v = !1,
            withMutualFriendsCount: m = !1,
            friendToken: p,
            preloadUserBanner: P = !0,
            dispatchWait: E = !1,
            guildId: _,
            channelId: F
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("" === e) return;
        (0, o.getOrFetchProfileEffects)(), null != t && (0, n.maybeFetchColors)(t), null != _ && !v && (v = !0), null != _ && (g = null !== (c = null === (i = (0, u.getVisibleConnectionsRole)({
            guildMember: a.default.getMember(_, e),
            channel: s.default.getChannel(F)
        })) || void 0 === i ? void 0 : i.id) && void 0 !== c ? c : void 0);
        let C = d.default.getUserProfile(e),
            b = d.default.getMutualGuilds(e),
            S = d.default.getMutualFriendsCount(e),
            U = d.default.isFetchingProfile(e),
            I = (null == C ? void 0 : C.profileFetchFailed) || !U && (!Array.isArray(b) && v || null == S && m),
            T = P ? f.default : void 0,
            y = !1;
        if (null != _) {
            let t = d.default.getGuildMemberProfile(e, _);
            y = null == t
        }!(!I && !y && (U || Date.now() - (null !== (h = null == C ? void 0 : C.lastFetched) && void 0 !== h ? h : 0) < 6e4)) && (E ? await l.default.wait(() => (0, r.fetchProfile)(e, {
            withMutualGuilds: v,
            withMutualFriendsCount: m,
            friendToken: p,
            guildId: _,
            connectionsRoleId: g
        }, T)) : await (0, r.fetchProfile)(e, {
            withMutualGuilds: v,
            withMutualFriendsCount: m,
            friendToken: p,
            guildId: _,
            connectionsRoleId: g
        }, T))
    }
}