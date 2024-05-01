function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        maybeFetchUserProfileForPopout: function() {
            return T
        }
    }), n("411104");
    var i = n("570140"),
        r = n("232567"),
        a = n("220082"),
        s = n("275759"),
        o = n("365943"),
        l = n("598077"),
        u = n("592125"),
        d = n("271383"),
        _ = n("342656"),
        c = n("447452"),
        E = n("621853"),
        I = n("120569");

    function T() {
        let e, t, n;
        for (var i, r, a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
        let u = s[0],
            d = s[1];
        if ("string" == typeof u && ("string" == typeof d || null == d)) e = u, t = d, n = s[2];
        else if (u instanceof l.default && ("object" == typeof d || null == d)) e = u.id, t = u.getAvatarURL(void 0, 80), n = d;
        else throw Error("Invalid arguments");
        if (null == e) return Promise.resolve();
        let E = (0, _.isInProfileMutualsExperiment)().enabled || (0, c.getSimplifiedProfileExperimentConfig)({
            location: "maybeFetchUserProfileForPopout",
            autoTrackExposure: !1
        }).basicsEnabled;
        return f(e, t, {
            withMutualFriends: null !== (i = null == n ? void 0 : n.withMutualFriends) && void 0 !== i ? i : E,
            withMutualGuilds: null !== (r = null == n ? void 0 : n.withMutualGuilds) && void 0 !== r ? r : E,
            ...n
        })
    }
    async function f(e, t) {
        var n, l, _;
        let c, {
            withMutualGuilds: T = !1,
            withMutualFriendsCount: f = !1,
            withMutualFriends: S = !1,
            friendToken: h,
            preloadUserBanner: A = !0,
            dispatchWait: m = !1,
            guildId: N,
            channelId: p
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("" === e) return;
        (0, o.fetchUserProfileEffects)(), null != t && (0, a.maybeFetchColors)(t), null != N && !T && (T = !0), null != N && (c = null !== (l = null === (n = (0, s.getVisibleConnectionsRole)({
            guildMember: d.default.getMember(N, e),
            channel: u.default.getChannel(p)
        })) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0);
        let O = E.default.getUserProfile(e),
            R = E.default.getMutualGuilds(e),
            C = E.default.getMutualFriends(e),
            g = E.default.getMutualFriendsCount(e),
            L = E.default.isFetchingProfile(e),
            v = !Array.isArray(R) && T,
            D = !Array.isArray(C) && S,
            M = null == g && f,
            y = (null == O ? void 0 : O.profileFetchFailed) || !L && (v || M || D),
            P = A ? I.default : void 0,
            U = !1;
        null != N && (U = null == E.default.getGuildMemberProfile(e, N)), !(!y && !U && (L || Date.now() - (null !== (_ = null == O ? void 0 : O.lastFetched) && void 0 !== _ ? _ : 0) < 6e4)) && (m ? await i.default.wait(() => (0, r.fetchProfile)(e, {
            withMutualGuilds: T,
            withMutualFriends: S,
            withMutualFriendsCount: f,
            friendToken: h,
            guildId: N,
            connectionsRoleId: c
        }, P)) : await (0, r.fetchProfile)(e, {
            withMutualGuilds: T,
            withMutualFriends: S,
            withMutualFriendsCount: f,
            friendToken: h,
            guildId: N,
            connectionsRoleId: c
        }, P))
    }
}