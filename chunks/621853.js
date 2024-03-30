function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i = n("392711"),
        r = n.n(i),
        s = n("726542"),
        a = n("706454"),
        o = n("598077"),
        l = n("314897"),
        u = n("430824"),
        d = n("158776"),
        _ = n("412788"),
        c = n("771845");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = new Set,
        T = new Set,
        f = {},
        S = {},
        h = {},
        A = {},
        m = {},
        N = !1,
        O = !1;

    function p() {
        I.clear(), T.clear(), f = {}, S = {}, h = {}, A = {}, m = {}, N = !1
    }

    function R(e) {
        let {
            userId: t
        } = e;
        T.add(t)
    }

    function C(e) {
        let {
            userId: t
        } = e;
        T.delete(t)
    }

    function g(e) {
        T.delete(e.userId), h[e.userId] = r()(e.mutualFriends).map(e => ({
            key: e.id,
            user: new o.default(e),
            status: d.default.getStatus(e.id)
        })).sortBy(e => {
            let {
                user: t
            } = e;
            return t.username.toLowerCase()
        }).value(), A[e.userId] = e.mutualFriends.length
    }

    function L() {
        if (0 === Object.keys(m).length) return !1;
        m = {}
    }

    function D(e) {
        if (null == m[e.user.id]) return !1;
        delete m[e.user.id]
    }

    function v(e) {
        var t, n, i, r, a, o, l, d, _, E, T, h, N, O, p, R, C;
        if (I.delete(e.user.id), null != e.mutual_guilds) {
            let t = {};
            e.mutual_guilds.forEach(e => {
                let {
                    id: n,
                    nick: i
                } = e, r = u.default.getGuild(n);
                null != r && (t[n] = {
                    guild: r,
                    nick: i
                })
            }), m[e.user.id] = c.default.getFlattenedGuildIds().filter(e => null != t[e]).map(e => ({
                guild: t[e].guild,
                nick: t[e].nick
            }))
        }
        if (null != e.mutual_friends_count) {
            let t = e.mutual_friends_count;
            A[e.user.id] = t
        }
        let g = null !== (_ = e.premium_since) && void 0 !== _ ? _ : null,
            L = e.application;
        if (f[e.user.id] = {
                userId: e.user.id,
                banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
                accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
                themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
                popoutAnimationParticleType: null === (r = e.user_profile) || void 0 === r ? void 0 : r.popout_animation_particle_type,
                bio: null !== (E = null === (a = e.user_profile) || void 0 === a ? void 0 : a.bio) && void 0 !== E ? E : "",
                profileEffectId: null === (l = e.user_profile) || void 0 === l ? void 0 : null === (o = l.profile_effect) || void 0 === o ? void 0 : o.id,
                pronouns: null !== (T = null === (d = e.user_profile) || void 0 === d ? void 0 : d.pronouns) && void 0 !== T ? T : "",
                connectedAccounts: null !== (h = e.connected_accounts.filter(e => s.default.isSupported(e.type))) && void 0 !== h ? h : [],
                applicationRoleConnections: null !== (N = e.application_role_connections) && void 0 !== N ? N : [],
                premiumSince: null != g ? new Date(g) : null,
                premiumType: e.premium_type,
                premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                lastFetched: Date.now(),
                legacyUsername: e.legacy_username,
                profileFetchFailed: !1,
                application: null != L ? {
                    id: L.id,
                    primarySkuId: L.primary_sku_id,
                    customInstallUrl: L.custom_install_url,
                    installParams: L.install_params,
                    integrationTypesConfig: L.integration_types_config,
                    flags: L.flags,
                    popularApplicationCommandIds: L.popular_application_command_ids
                } : null,
                badges: e.badges
            }, null != e.guild_member_profile) {
            let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (O = e.guild_member_profile) || void 0 === O ? void 0 : O.theme_colors,
                popoutAnimationParticleType: null === (p = e.guild_member_profile) || void 0 === p ? void 0 : p.popout_animation_particle_type,
                profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (R = C.profile_effect) || void 0 === R ? void 0 : R.id,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            };
            null != S[e.user.id] ? S[e.user.id][e.guild_member_profile.guild_id] = t : S[e.user.id] = {
                [e.guild_member_profile.guild_id]: t
            }
        }
    }

    function M(e) {
        let {
            userId: t
        } = e;
        I.add(t)
    }

    function y(e) {
        var t;
        let {
            userId: n
        } = e;
        f[n] = null !== (t = f[n]) && void 0 !== t ? t : {
            connectedAccounts: [],
            applicationRoleConnections: [],
            premiumSince: null,
            premiumGuildSince: null,
            lastFetched: Date.now(),
            profileFetchFailed: !0,
            application: null,
            legacyUsername: null,
            userId: n,
            banner: null,
            accentColor: null,
            bio: "",
            pronouns: ""
        }, I.delete(n)
    }

    function P(e) {
        N = !0
    }

    function U(e) {
        N = !1, null != e.guild_id ? ! function(e) {
            let {
                userId: t,
                guild_id: n,
                accent_color: i,
                banner: r,
                bio: s,
                pronouns: a,
                popout_animation_particle_type: o,
                theme_colors: l,
                profileEffectId: u
            } = e;
            if (null == n || null == S[t]) return !1;
            let d = S[t][n];
            if (null == d) return !1;
            S[t][n] = {
                ...d,
                accentColor: i,
                banner: r,
                bio: s,
                pronouns: a,
                popoutAnimationParticleType: o,
                themeColors: l,
                profileEffectId: u
            }
        }(e) : ! function(e) {
            let {
                userId: t,
                accent_color: n,
                banner: i,
                bio: r,
                pronouns: s,
                popout_animation_particle_type: a,
                theme_colors: o,
                profileEffectId: l
            } = e, u = f[t];
            if (null == u) return !1;
            f[t] = {
                ...u,
                accentColor: n,
                banner: i,
                bio: r,
                pronouns: s,
                popoutAnimationParticleType: a,
                themeColors: o,
                profileEffectId: l
            }
        }(e)
    }

    function b(e) {
        N = !1
    }

    function G(e) {
        O = !0
    }

    function w(e) {
        let {
            user: t
        } = e;
        if (I.has(t.id) || null == f[t.id]) return !1;
        f[t.id].lastFetched = 0
    }

    function k() {
        I.clear(), f = {}, S = {}
    }
    class B extends _.default {
        initialize() {
            this.waitFor(c.default), this.syncWith([a.default], k)
        }
        isFetchingProfile(e) {
            return I.has(e)
        }
        isFetchingFriends(e) {
            return T.has(e)
        }
        get isSubmitting() {
            return N
        }
        getUserProfile(e) {
            return f[e]
        }
        getGuildMemberProfile(e, t) {
            var n;
            return null == t ? null : null === (n = S[e]) || void 0 === n ? void 0 : n[t]
        }
        getMutualFriends(e) {
            return h[e]
        }
        getMutualFriendsCount(e) {
            return A[e]
        }
        getMutualGuilds(e) {
            return m[e]
        }
        getIsAccessibilityTooltipViewed() {
            return O
        }
        takeSnapshot() {
            let e = l.default.getId();
            return {
                version: B.LATEST_SNAPSHOT_VERSION,
                data: [{
                    userId: e,
                    profile: f[e]
                }]
            }
        }
        constructor() {
            super({
                CACHE_LOADED_LAZY: () => this.loadCache(),
                USER_PROFILE_FETCH_START: M,
                USER_PROFILE_FETCH_FAILURE: y,
                USER_PROFILE_FETCH_SUCCESS: v,
                USER_PROFILE_UPDATE_START: P,
                USER_PROFILE_UPDATE_SUCCESS: U,
                USER_PROFILE_UPDATE_FAILURE: b,
                USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: G,
                MUTUAL_FRIENDS_FETCH_START: R,
                MUTUAL_FRIENDS_FETCH_SUCCESS: g,
                MUTUAL_FRIENDS_FETCH_FAILURE: C,
                GUILD_JOIN: L,
                GUILD_DELETE: L,
                GUILD_MEMBER_ADD: D,
                GUILD_MEMBER_REMOVE: D,
                GUILD_MEMBER_UPDATE: w,
                USER_UPDATE: w,
                LOGOUT: p
            }), E(this, "loadCache", () => {
                let e = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
                null != e && e.forEach(e => {
                    let {
                        userId: t,
                        profile: n
                    } = e;
                    f[t] = n
                })
            })
        }
    }
    E(B, "displayName", "UserProfileStore"), E(B, "LATEST_SNAPSHOT_VERSION", 1), t.default = new B
}