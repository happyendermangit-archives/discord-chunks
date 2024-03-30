function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("386823"),
        a = n("225098"),
        u = n("428009"),
        s = n("217014"),
        l = n("306912"),
        c = n("868447"),
        f = n("837133"),
        d = n("380512");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = new Set,
        T = new Set,
        S = {},
        v = {},
        g = {},
        A = {},
        b = {},
        N = !1,
        R = !1;

    function C() {
        O.clear(), T.clear(), S = {}, v = {}, g = {}, A = {}, b = {}, N = !1
    }

    function P(e) {
        var t = e.userId;
        T.add(t)
    }

    function D(e) {
        var t = e.userId;
        T.delete(t)
    }

    function L(e) {
        T.delete(e.userId), g[e.userId] = o()(e.mutualFriends).map(function(e) {
            return {
                key: e.id,
                user: new u.default(e),
                status: c.default.getStatus(e.id)
            }
        }).sortBy(function(e) {
            return e.user.username.toLowerCase()
        }).value(), A[e.userId] = e.mutualFriends.length
    }

    function M() {
        if (0 === Object.keys(b).length) return !1;
        b = {}
    }

    function U(e) {
        if (null == b[e.user.id]) return !1;
        delete b[e.user.id]
    }

    function w(e) {
        if (O.delete(e.user.id), null != e.mutual_guilds) {
            var t = {};
            e.mutual_guilds.forEach(function(e) {
                var n = e.id,
                    r = e.nick,
                    o = l.default.getGuild(n);
                null != o && (t[n] = {
                    guild: o,
                    nick: r
                })
            }), b[e.user.id] = d.default.getFlattenedGuildIds().filter(function(e) {
                return null != t[e]
            }).map(function(e) {
                return {
                    guild: t[e].guild,
                    nick: t[e].nick
                }
            })
        }
        if (null != e.mutual_friends_count) {
            var n = e.mutual_friends_count;
            A[e.user.id] = n
        }
        var r = null !== (y = e.premium_since) && void 0 !== y ? y : null,
            o = e.application;
        if (S[e.user.id] = {
                userId: e.user.id,
                banner: null === (a = e.user_profile) || void 0 === a ? void 0 : a.banner,
                accentColor: null === (u = e.user_profile) || void 0 === u ? void 0 : u.accent_color,
                themeColors: null === (s = e.user_profile) || void 0 === s ? void 0 : s.theme_colors,
                popoutAnimationParticleType: null === (c = e.user_profile) || void 0 === c ? void 0 : c.popout_animation_particle_type,
                bio: null !== (I = null === (f = e.user_profile) || void 0 === f ? void 0 : f.bio) && void 0 !== I ? I : "",
                profileEffectId: null === (E = e.user_profile) || void 0 === E ? void 0 : null === (_ = E.profile_effect) || void 0 === _ ? void 0 : _.id,
                pronouns: null !== (h = null === (m = e.user_profile) || void 0 === m ? void 0 : m.pronouns) && void 0 !== h ? h : "",
                connectedAccounts: null !== (T = e.connected_accounts.filter(function(e) {
                    return i.default.isSupported(e.type)
                })) && void 0 !== T ? T : [],
                applicationRoleConnections: null !== (g = e.application_role_connections) && void 0 !== g ? g : [],
                premiumSince: null != r ? new Date(r) : null,
                premiumType: e.premium_type,
                premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                lastFetched: Date.now(),
                legacyUsername: e.legacy_username,
                profileFetchFailed: !1,
                application: null != o ? {
                    id: o.id,
                    primarySkuId: o.primary_sku_id,
                    customInstallUrl: o.custom_install_url,
                    installParams: o.install_params,
                    integrationTypesConfig: o.integration_types_config,
                    flags: o.flags,
                    popularApplicationCommandIds: o.popular_application_command_ids
                } : null,
                badges: e.badges
            }, null != e.guild_member_profile) {
            var a, u, s, c, f, _, E, m, y, I, h, T, g, N, R, C, P, D = {
                userId: e.user.id,
                guildId: e.guild_member_profile.guild_id,
                banner: e.guild_member_profile.banner,
                accentColor: e.guild_member_profile.accent_color,
                themeColors: null === (N = e.guild_member_profile) || void 0 === N ? void 0 : N.theme_colors,
                popoutAnimationParticleType: null === (R = e.guild_member_profile) || void 0 === R ? void 0 : R.popout_animation_particle_type,
                profileEffectId: null === (P = e.guild_member_profile) || void 0 === P ? void 0 : null === (C = P.profile_effect) || void 0 === C ? void 0 : C.id,
                bio: e.guild_member_profile.bio,
                pronouns: e.guild_member_profile.pronouns,
                badges: e.guild_badges
            };
            null != v[e.user.id] ? v[e.user.id][e.guild_member_profile.guild_id] = D : v[e.user.id] = p({}, e.guild_member_profile.guild_id, D)
        }
    }

    function k(e) {
        var t = e.userId;
        O.add(t)
    }

    function G(e) {
        var t, n = e.userId;
        S[n] = null !== (t = S[n]) && void 0 !== t ? t : {
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
        }, O.delete(n)
    }

    function B(e) {
        N = !0
    }

    function j(e) {
        N = !1, null != e.guild_id ? ! function(e) {
            var t = e.userId,
                n = e.guild_id,
                r = e.accent_color,
                o = e.banner,
                i = e.bio,
                a = e.pronouns,
                u = e.popout_animation_particle_type,
                s = e.theme_colors,
                l = e.profileEffectId;
            if (null == n || null == v[t]) return !1;
            var c = v[t][n];
            if (null == c) return !1;
            v[t][n] = I(y({}, c), {
                accentColor: r,
                banner: o,
                bio: i,
                pronouns: a,
                popoutAnimationParticleType: u,
                themeColors: s,
                profileEffectId: l
            })
        }(e) : ! function(e) {
            var t = e.userId,
                n = e.accent_color,
                r = e.banner,
                o = e.bio,
                i = e.pronouns,
                a = e.popout_animation_particle_type,
                u = e.theme_colors,
                s = e.profileEffectId,
                l = S[t];
            if (null == l) return !1;
            S[t] = I(y({}, l), {
                accentColor: n,
                banner: r,
                bio: o,
                pronouns: i,
                popoutAnimationParticleType: a,
                themeColors: u,
                profileEffectId: s
            })
        }(e)
    }

    function F(e) {
        N = !1
    }

    function V(e) {
        R = !0
    }

    function H(e) {
        var t = e.user;
        if (O.has(t.id) || null == S[t.id]) return !1;
        S[t.id].lastFetched = 0
    }

    function x() {
        O.clear(), S = {}, v = {}
    }
    var Y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(l, e);
        var t, n, r, o, i, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : _(e)
        });

        function l() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), p(_(e = u.call(this, {
                CACHE_LOADED_LAZY: function() {
                    return e.loadCache()
                },
                USER_PROFILE_FETCH_START: k,
                USER_PROFILE_FETCH_FAILURE: G,
                USER_PROFILE_FETCH_SUCCESS: w,
                USER_PROFILE_UPDATE_START: B,
                USER_PROFILE_UPDATE_SUCCESS: j,
                USER_PROFILE_UPDATE_FAILURE: F,
                USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: V,
                MUTUAL_FRIENDS_FETCH_START: P,
                MUTUAL_FRIENDS_FETCH_SUCCESS: L,
                MUTUAL_FRIENDS_FETCH_FAILURE: D,
                GUILD_JOIN: M,
                GUILD_DELETE: M,
                GUILD_MEMBER_ADD: U,
                GUILD_MEMBER_REMOVE: U,
                GUILD_MEMBER_UPDATE: H,
                USER_UPDATE: H,
                LOGOUT: C
            })), "loadCache", function() {
                var t = e.readSnapshot(l.LATEST_SNAPSHOT_VERSION);
                null != t && t.forEach(function(e) {
                    var t = e.userId,
                        n = e.profile;
                    S[t] = n
                })
            }), e
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(d.default), this.syncWith([a.default], x)
            }
        }, {
            key: "isFetchingProfile",
            value: function(e) {
                return O.has(e)
            }
        }, {
            key: "isFetchingFriends",
            value: function(e) {
                return T.has(e)
            }
        }, {
            key: "isSubmitting",
            get: function() {
                return N
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                return S[e]
            }
        }, {
            key: "getGuildMemberProfile",
            value: function(e, t) {
                var n;
                return null == t ? null : null === (n = v[e]) || void 0 === n ? void 0 : n[t]
            }
        }, {
            key: "getMutualFriends",
            value: function(e) {
                return g[e]
            }
        }, {
            key: "getMutualFriendsCount",
            value: function(e) {
                return A[e]
            }
        }, {
            key: "getMutualGuilds",
            value: function(e) {
                return b[e]
            }
        }, {
            key: "getIsAccessibilityTooltipViewed",
            value: function() {
                return R
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                var e = s.default.getId();
                return {
                    version: l.LATEST_SNAPSHOT_VERSION,
                    data: [{
                        userId: e,
                        profile: S[e]
                    }]
                }
            }
        }], E(r.prototype, o), i && E(r, i), l
    }(f.default);
    p(Y, "displayName", "UserProfileStore"), p(Y, "LATEST_SNAPSHOT_VERSION", 1), t.default = new Y
}