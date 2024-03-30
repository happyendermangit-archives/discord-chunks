function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        attachRoles: function() {
            return f
        },
        filterRoleDeletes: function() {
            return y
        },
        fromBackgroundSync: function() {
            return d
        },
        fromInviteGuild: function() {
            return E
        },
        fromSerializedGuildRecord: function() {
            return m
        },
        fromServer: function() {
            return c
        },
        fromServerUpdate: function() {
            return _
        },
        toServer: function() {
            return p
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("774300"),
        a = n("393588"),
        u = n("989396"),
        s = n("281767");

    function l(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function c(e, t) {
        var n, r, u, c, f, d, _, E, p, m, y, I, h, O = null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            T = null !== (n = e.premium_subscription_count) && void 0 !== n ? n : 0;
        if (null == e.properties) {
            o()(null != t, "If guild.properties is null, existingGuild must be passed in");
            var S = l(t.joinedAt, Date) ? t.joinedAt.getTime() : t.joinedAt,
                v = l(O, Date) ? O.getTime() : O;
            return T === t.premiumSubscriberCount && S === v ? t : t.merge({
                joinedAt: O,
                premiumSubscriberCount: T
            })
        }
        var g = {
            id: e.id,
            joinedAt: O,
            premiumSubscriberCount: T,
            name: null !== (r = e.properties.name) && void 0 !== r ? r : "",
            description: e.properties.description,
            icon: e.properties.icon,
            splash: e.properties.splash,
            banner: e.properties.banner,
            homeHeader: e.properties.home_header,
            features: new Set(null !== (u = e.properties.features) && void 0 !== u ? u : []),
            preferredLocale: null !== (c = e.properties.preferred_locale) && void 0 !== c ? c : "en-us",
            ownerId: e.properties.owner_id,
            application_id: e.properties.application_id,
            afkChannelId: e.properties.afk_channel_id,
            afkTimeout: e.properties.afk_timeout,
            systemChannelId: e.properties.system_channel_id,
            verificationLevel: null !== (f = e.properties.verification_level) && void 0 !== f ? f : s.VerificationLevels.NONE,
            explicitContentFilter: null !== (d = e.properties.explicit_content_filter) && void 0 !== d ? d : s.GuildExplicitContentFilterTypes.DISABLED,
            defaultMessageNotifications: null !== (_ = e.properties.default_message_notifications) && void 0 !== _ ? _ : s.UserNotificationSettings.ALL_MESSAGES,
            mfaLevel: null !== (E = e.properties.mfa_level) && void 0 !== E ? E : s.MFALevels.NONE,
            vanityURLCode: e.properties.vanity_url_code,
            premiumTier: null !== (p = e.properties.premium_tier) && void 0 !== p ? p : s.BoostedGuildTiers.NONE,
            premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
            systemChannelFlags: e.properties.system_channel_flags,
            discoverySplash: e.properties.discovery_splash,
            rulesChannelId: e.properties.rules_channel_id,
            safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
            publicUpdatesChannelId: e.properties.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (m = e.properties.max_stage_video_channel_users) && void 0 !== m ? m : -1,
            maxVideoChannelUsers: null !== (y = e.properties.max_video_channel_users) && void 0 !== y ? y : -1,
            maxMembers: null !== (I = e.properties.max_members) && void 0 !== I ? I : -1,
            nsfwLevel: null !== (h = e.properties.nsfw_level) && void 0 !== h ? h : s.GuildNSFWContentLevel.DEFAULT,
            hubType: e.properties.hub_type,
            latestOnboardingQuestionId: e.properties.latest_onboarding_question_id
        };
        return null == t ? (0, i.dangerouslyCast)(g, a.default) : t.merge(g)
    }

    function f(e, t) {
        var n, r;
        return new a.GuildRecordWithRoles((n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, e), r = (r = {
            roles: t
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
    }

    function d(e, t) {
        var n, r, o, i, a, u, l, c, f, d, _, E, m, y = null !== (n = e.properties) && void 0 !== n ? n : p(t),
            I = {
                id: e.id,
                name: null !== (r = y.name) && void 0 !== r ? r : "",
                description: y.description,
                icon: y.icon,
                splash: y.splash,
                banner: y.banner,
                homeHeader: y.home_header,
                features: new Set(null !== (o = y.features) && void 0 !== o ? o : []),
                preferredLocale: null !== (i = y.preferred_locale) && void 0 !== i ? i : "en-us",
                ownerId: y.owner_id,
                application_id: y.application_id,
                afkChannelId: y.afk_channel_id,
                afkTimeout: y.afk_timeout,
                systemChannelId: y.system_channel_id,
                verificationLevel: null !== (a = y.verification_level) && void 0 !== a ? a : s.VerificationLevels.NONE,
                explicitContentFilter: null !== (u = y.explicit_content_filter) && void 0 !== u ? u : s.GuildExplicitContentFilterTypes.DISABLED,
                defaultMessageNotifications: null !== (l = y.default_message_notifications) && void 0 !== l ? l : s.UserNotificationSettings.ALL_MESSAGES,
                mfaLevel: null !== (c = y.mfa_level) && void 0 !== c ? c : s.MFALevels.NONE,
                vanityURLCode: y.vanity_url_code,
                premiumTier: null !== (f = y.premium_tier) && void 0 !== f ? f : s.BoostedGuildTiers.NONE,
                premiumProgressBarEnabled: y.premium_progress_bar_enabled || !1,
                systemChannelFlags: y.system_channel_flags,
                discoverySplash: y.discovery_splash,
                rulesChannelId: y.rules_channel_id,
                safetyAlertsChannelId: y.safety_alerts_channel_id,
                publicUpdatesChannelId: y.public_updates_channel_id,
                maxStageVideoChannelUsers: null !== (d = y.max_stage_video_channel_users) && void 0 !== d ? d : -1,
                maxVideoChannelUsers: null !== (_ = y.max_video_channel_users) && void 0 !== _ ? _ : -1,
                maxMembers: null !== (E = y.max_members) && void 0 !== E ? E : -1,
                nsfwLevel: null !== (m = y.nsfw_level) && void 0 !== m ? m : s.GuildNSFWContentLevel.DEFAULT,
                hubType: y.hub_type,
                latestOnboardingQuestionId: y.latest_onboarding_question_id
            };
        return t.merge(I)
    }

    function _(e, t) {
        var n = {
            id: e.id,
            name: e.name,
            description: e.description,
            icon: e.icon,
            splash: e.splash,
            banner: e.banner,
            homeHeader: e.home_header,
            features: e.features,
            preferredLocale: e.preferred_locale,
            ownerId: e.owner_id,
            application_id: e.application_id,
            roles: (0, u.sortServerRoles)(e.id, e.roles),
            afkChannelId: e.afk_channel_id,
            afkTimeout: e.afk_timeout,
            systemChannelId: e.system_channel_id,
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            verificationLevel: e.verification_level,
            explicitContentFilter: e.explicit_content_filter,
            defaultMessageNotifications: e.default_message_notifications,
            mfaLevel: e.mfa_level,
            vanityURLCode: e.vanity_url_code,
            premiumTier: e.premium_tier,
            premiumSubscriberCount: e.premium_subscription_count,
            premiumProgressBarEnabled: e.premium_progress_bar_enabled,
            systemChannelFlags: e.system_channel_flags,
            discoverySplash: e.discovery_splash,
            rulesChannelId: e.rules_channel_id,
            safetyAlertsChannelId: e.safety_alerts_channel_id,
            publicUpdatesChannelId: e.public_updates_channel_id,
            maxStageVideoChannelUsers: e.max_stage_video_channel_users,
            maxVideoChannelUsers: e.max_video_channel_users,
            maxMembers: e.max_members,
            nsfwLevel: e.nsfw_level,
            hubType: e.hub_type,
            latestOnboardingQuestionId: e.latest_onboarding_question_id
        };
        return null == t ? new a.default(n) : t.merge(n)
    }

    function E(e) {
        var t = {
            id: e.id,
            name: e.name,
            description: e.description,
            icon: e.icon,
            splash: e.splash,
            banner: e.banner,
            features: e.features,
            verificationLevel: e.verification_level,
            vanityURLCode: e.vanity_url_code,
            premiumSubscriberCount: e.premium_subscription_count,
            nsfwLevel: e.nsfw_level,
            memberCount: e.approximate_member_count
        };
        return new a.default(t)
    }

    function p(e) {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            icon: e.icon,
            splash: e.splash,
            banner: e.banner,
            home_header: e.homeHeader,
            features: Array.from(e.features),
            preferred_locale: e.preferredLocale,
            owner_id: e.ownerId,
            application_id: e.application_id,
            afk_channel_id: e.afkChannelId,
            afk_timeout: e.afkTimeout,
            system_channel_id: e.systemChannelId,
            verification_level: e.verificationLevel,
            explicit_content_filter: e.explicitContentFilter,
            default_message_notifications: e.defaultMessageNotifications,
            mfa_level: e.mfaLevel,
            vanity_url_code: e.vanityURLCode,
            premium_tier: e.premiumTier,
            premium_progress_bar_enabled: e.premiumProgressBarEnabled,
            system_channel_flags: e.systemChannelFlags,
            discovery_splash: e.discoverySplash,
            rules_channel_id: e.rulesChannelId,
            safety_alerts_channel_id: e.safetyAlertsChannelId,
            public_updates_channel_id: e.publicUpdatesChannelId,
            max_stage_video_channel_users: e.maxStageVideoChannelUsers,
            max_video_channel_users: e.maxVideoChannelUsers,
            unavailable: !1,
            max_members: e.maxMembers,
            nsfw_level: e.nsfwLevel,
            hub_type: e.hubType,
            latest_onboarding_question_id: e.latestOnboardingQuestionId
        }
    }

    function m(e) {
        var t;
        for (var n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, u.fromSerializedGuildRole)(e.roles[n]);
        return (0, i.dangerouslyCast)(e, a.default)
    }

    function y(e, t, n, r) {
        var o = !1;
        if (null != r) {
            var i = !0,
                a = !1,
                s = void 0;
            try {
                for (var l, c = r[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                    var f = l.value;
                    delete t[f], o = !0
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !i && null != c.return && c.return()
                } finally {
                    if (a) throw s
                }
            }
        }
        if (null != n && n.length > 0) {
            var d = !0,
                _ = !1,
                E = void 0;
            try {
                for (var p, m = n[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                    var y = p.value;
                    t[y.id] = (0, u.fromServerRole)(y)
                }
            } catch (e) {
                _ = !0, E = e
            } finally {
                try {
                    !d && null != m.return && m.return()
                } finally {
                    if (_) throw E
                }
            }
            o = !0
        }
        return o ? (0, u.sortClientRoles)(e, Object.values(t)) : t
    }
}