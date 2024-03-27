function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("570140"),
        r = n("232567"),
        s = n("220082"),
        a = n("275759"),
        o = n("996678"),
        l = n("592125"),
        u = n("271383"),
        d = n("621853"),
        _ = n("120569");
    async function c(e, t) {
        var n, c, E;
        let I, {
            withMutualGuilds: T = !1,
            withMutualFriendsCount: f = !1,
            friendToken: S,
            preloadUserBanner: h = !0,
            dispatchWait: A = !1,
            guildId: m,
            channelId: N
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("" === e) return;
        (0, o.getOrFetchProfileEffects)(), null != t && (0, s.maybeFetchColors)(t), null != m && !T && (T = !0), null != m && (I = null !== (c = null === (n = (0, a.getVisibleConnectionsRole)({
            guildMember: u.default.getMember(m, e),
            channel: l.default.getChannel(N)
        })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
        let O = d.default.getUserProfile(e),
            p = d.default.getMutualGuilds(e),
            R = d.default.getMutualFriendsCount(e),
            C = d.default.isFetchingProfile(e),
            g = (null == O ? void 0 : O.profileFetchFailed) || !C && (!Array.isArray(p) && T || null == R && f),
            L = h ? _.default : void 0,
            D = !1;
        null != m && (D = null == d.default.getGuildMemberProfile(e, m)), !(!g && !D && (C || Date.now() - (null !== (E = null == O ? void 0 : O.lastFetched) && void 0 !== E ? E : 0) < 6e4)) && (A ? await i.default.wait(() => (0, r.fetchProfile)(e, {
            withMutualGuilds: T,
            withMutualFriendsCount: f,
            friendToken: S,
            guildId: m,
            connectionsRoleId: I
        }, L)) : await (0, r.fetchProfile)(e, {
            withMutualGuilds: T,
            withMutualFriendsCount: f,
            friendToken: S,
            guildId: m,
            connectionsRoleId: I
        }, L))
    }
}