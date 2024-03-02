function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Y
        }
    }), n("222007"), n("702976");
    var i = n("917351"),
        r = n.n(i),
        u = n("376556"),
        o = n("915639"),
        _ = n("766274"),
        l = n("271938"),
        E = n("305961"),
        T = n("824563"),
        d = n("455079"),
        a = n("677099");
    let S = new Set,
        c = new Set,
        I = {},
        s = {},
        f = {},
        N = {},
        A = {},
        U = !1,
        p = !1;

    function R() {
        S.clear(), c.clear(), I = {}, s = {}, f = {}, N = {}, A = {}, U = !1
    }

    function D(e) {
        let {
            userId: t
        } = e;
        c.add(t)
    }

    function G(e) {
        let {
            userId: t
        } = e;
        c.delete(t)
    }

    function C(e) {
        c.delete(e.userId), f[e.userId] = r(e.mutualFriends).map(e => ({
            key: e.id,
            user: new _.default(e),
            status: T.default.getStatus(e.id)
        })).sortBy(e => {
            let {
                user: t
            } = e;
            return t.username.toLowerCase()
        }).value(), N[e.userId] = e.mutualFriends.length
    }

    function O() {
        if (0 === Object.keys(A).length) return !1;
        A = {}
    }

    function P(e) {
        if (null == A[e.user.id]) return !1;
        delete A[e.user.id]
    }

    function g(e) {
        var t, n, i, r, o, _, l, T, d, c, f, U, p, R, D, G, C;
        if (S.delete(e.user.id), null != e.mutual_guilds) {
            let t = {};
            e.mutual_guilds.forEach(e => {
                let {
                    id: n,
                    nick: i
                } = e, r = E.default.getGuild(n);
                null != r && (t[n] = {
                    guild: r,
                    nick: i
                })
            }), A[e.user.id] = a.default.getFlattenedGuildIds().filter(e => null != t[e]).map(e => ({
                guild: t[e].guild,
                nick: t[e].nick
            }))
        }
        if (null != e.mutual_friends_count) {
            let t = e.mutual_friends_count;
            N[e.user.id] = t
        }
        let O = null !== (d = e.premium_since) && void 0 !== d ? d : null,
            P = e.application;
        if (I[e.user.id] = {
                userId: e.user.id,
                banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
                accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
                themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
                popoutAnimationParticleType: null === (r = e.user_profile) || void 0 === r ? void 0 : r.popout_animation_particle_type,
                bio: null !== (c = null === (o = e.user_profile) || void 0 === o ? void 0 : o.bio) && void 0 !== c ? c : "",
                profileEffectId: null === (l = e.user_profile) || void 0 === l ? void 0 : null === (_ = l.profile_effect) || void 0 === _ ? void 0 : _.id,
                pronouns: null !== (f = null === (T = e.user_profile) || void 0 === T ? void 0 : T.pronouns) && void 0 !== f ? f : "",
                connectedAccounts: null !== (U = e.connected_accounts.filter(e => u.default.isSupported(e.type))) && void 0 !== U ? U : [],
                applicationRoleConnections: null !== (p = e.application_role_connections) && void 0 !== p ? p : [],
                premiumSince: null != O ? new Date(O) : null,
                premiumType: e.premium_type,
                premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                lastFetched: Date.now(),
                legacyUsername: e.legacy_username,
                profileFetchFailed: !1,
                application: null != P ? {
                    id: P.id,
                    primarySkuId: P.primary_sku_id,
                    customInstallUrl: P.custom_install_url,
                    installParams: P.install_params,
                    integrationTypesConfig: P.integration_types_config,
                    flags: P.flags,
                    popularApplicationCommandIds: P.popular_application_command_ids
                } : null,
                badges: e.badges
            }, null != e.guild_member_profile) {
            let t = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (R = e.guild_member_profile) || void 0 === R ? void 0 : R.theme_colors,
                popoutAnimationParticleType: null === (D = e.guild_member_profile) || void 0 === D ? void 0 : D.popout_animation_particle_type,
                profileEffectId: null === (C = e.guild_member_profile) || void 0 === C ? void 0 : null === (G = C.profile_effect) || void 0 === G ? void 0 : G.id,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            };
            null != s[e.user.id] ? s[e.user.id][e.guild_member_profile.guild_id] = t : s[e.user.id] = {
                [e.guild_member_profile.guild_id]: t
            }
        }
    }

    function v(e) {
        let {
            userId: t
        } = e;
        S.add(t)
    }

    function L(e) {
        var t;
        let {
            userId: n
        } = e;
        I[n] = null !== (t = I[n]) && void 0 !== t ? t : {
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
        }, S.delete(n)
    }

    function m(e) {
        U = !0
    }

    function y(e) {
        U = !1, null != e.guild_id ? ! function(e) {
            let {
                userId: t,
                guild_id: n,
                accent_color: i,
                banner: r,
                bio: u,
                pronouns: o,
                popout_animation_particle_type: _,
                theme_colors: l,
                profileEffectId: E
            } = e;
            if (null == n || null == s[t]) return !1;
            let T = s[t][n];
            if (null == T) return !1;
            s[t][n] = {
                ...T,
                accentColor: i,
                banner: r,
                bio: u,
                pronouns: o,
                popoutAnimationParticleType: _,
                themeColors: l,
                profileEffectId: E
            }
        }(e) : ! function(e) {
            let {
                userId: t,
                accent_color: n,
                banner: i,
                bio: r,
                pronouns: u,
                popout_animation_particle_type: o,
                theme_colors: _,
                profileEffectId: l
            } = e, E = I[t];
            if (null == E) return !1;
            I[t] = {
                ...E,
                accentColor: n,
                banner: i,
                bio: r,
                pronouns: u,
                popoutAnimationParticleType: o,
                themeColors: _,
                profileEffectId: l
            }
        }(e)
    }

    function h(e) {
        U = !1
    }

    function F(e) {
        p = !0
    }

    function M(e) {
        let {
            user: t
        } = e;
        if (S.has(t.id) || null == I[t.id]) return !1;
        I[t.id].lastFetched = 0
    }

    function b() {
        S.clear(), I = {}, s = {}
    }
    class B extends d.default {
        initialize() {
            this.waitFor(a.default), this.syncWith([o.default], b)
        }
        isFetchingProfile(e) {
            return S.has(e)
        }
        isFetchingFriends(e) {
            return c.has(e)
        }
        get isSubmitting() {
            return U
        }
        getUserProfile(e) {
            return I[e]
        }
        getGuildMemberProfile(e, t) {
            var n;
            return null == t ? null : null === (n = s[e]) || void 0 === n ? void 0 : n[t]
        }
        getMutualFriends(e) {
            return f[e]
        }
        getMutualFriendsCount(e) {
            return N[e]
        }
        getMutualGuilds(e) {
            return A[e]
        }
        getIsAccessibilityTooltipViewed() {
            return p
        }
        takeSnapshot() {
            let e = l.default.getId();
            return {
                version: B.LATEST_SNAPSHOT_VERSION,
                data: [{
                    userId: e,
                    profile: I[e]
                }]
            }
        }
        constructor() {
            super({
                CACHE_LOADED_LAZY: () => this.loadCache(),
                USER_PROFILE_FETCH_START: v,
                USER_PROFILE_FETCH_FAILURE: L,
                USER_PROFILE_FETCH_SUCCESS: g,
                USER_PROFILE_UPDATE_START: m,
                USER_PROFILE_UPDATE_SUCCESS: y,
                USER_PROFILE_UPDATE_FAILURE: h,
                USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: F,
                MUTUAL_FRIENDS_FETCH_START: D,
                MUTUAL_FRIENDS_FETCH_SUCCESS: C,
                MUTUAL_FRIENDS_FETCH_FAILURE: G,
                GUILD_JOIN: O,
                GUILD_DELETE: O,
                GUILD_MEMBER_ADD: P,
                GUILD_MEMBER_REMOVE: P,
                GUILD_MEMBER_UPDATE: M,
                USER_UPDATE: M,
                LOGOUT: R
            }), this.loadCache = () => {
                let e = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
                null != e && e.forEach(e => {
                    let {
                        userId: t,
                        profile: n
                    } = e;
                    I[t] = n
                })
            }
        }
    }
    B.displayName = "UserProfileStore", B.LATEST_SNAPSHOT_VERSION = 1;
    var Y = new B
}