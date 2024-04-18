function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        },
        maybeFetchUserProfileForPopout: function() {
            return I
        }
    }), n("411104");
    var i = n("570140"),
        r = n("232567"),
        s = n("220082"),
        a = n("275759"),
        o = n("365943"),
        l = n("598077"),
        u = n("592125"),
        d = n("271383"),
        _ = n("342656"),
        c = n("621853"),
        E = n("120569");

    function I() {
        let e, t, n;
        for (var i, r, s = arguments.length, a = Array(s), o = 0; o < s; o++) a[o] = arguments[o];
        let u = a[0],
            d = a[1];
        if ("string" == typeof u && ("string" == typeof d || null == d)) e = u, t = d, n = a[2];
        else if (u instanceof l.default && ("object" == typeof d || null == d)) e = u.id, t = u.getAvatarURL(void 0, 80), n = d;
        else throw Error("Invalid arguments");
        if (null == e) return Promise.resolve();
        let c = (0, _.isInProfileMutualsExperiment)().enabled;
        return T(e, t, {
            withMutualFriends: null !== (i = null == n ? void 0 : n.withMutualFriends) && void 0 !== i ? i : c,
            withMutualGuilds: null !== (r = null == n ? void 0 : n.withMutualGuilds) && void 0 !== r ? r : c,
            ...n
        })
    }
    async function T(e, t) {
        var n, l, _;
        let I, {
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
        (0, o.fetchUserProfileEffects)(), null != t && (0, s.maybeFetchColors)(t), null != N && !T && (T = !0), null != N && (I = null !== (l = null === (n = (0, a.getVisibleConnectionsRole)({
            guildMember: d.default.getMember(N, e),
            channel: u.default.getChannel(p)
        })) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0);
        let O = c.default.getUserProfile(e),
            R = c.default.getMutualGuilds(e),
            C = c.default.getMutualFriends(e),
            g = c.default.getMutualFriendsCount(e),
            L = c.default.isFetchingProfile(e),
            D = !Array.isArray(R) && T,
            v = null == C && S,
            M = null == g && f,
            y = (null == O ? void 0 : O.profileFetchFailed) || !L && (D || v || M),
            P = A ? E.default : void 0,
            U = !1;
        null != N && (U = null == c.default.getGuildMemberProfile(e, N)), !(!y && !U && (L || Date.now() - (null !== (_ = null == O ? void 0 : O.lastFetched) && void 0 !== _ ? _ : 0) < 6e4)) && (m ? await i.default.wait(() => (0, r.fetchProfile)(e, {
            withMutualGuilds: T,
            withMutualFriends: S,
            withMutualFriendsCount: f,
            friendToken: h,
            guildId: N,
            connectionsRoleId: I
        }, P)) : await (0, r.fetchProfile)(e, {
            withMutualGuilds: T,
            withMutualFriends: S,
            withMutualFriendsCount: f,
            friendToken: h,
            guildId: N,
            connectionsRoleId: I
        }, P))
    }
}