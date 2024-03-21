function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fromServer: function() {
            return u
        },
        attachRoles: function() {
            return d
        },
        fromBackgroundSync: function() {
            return c
        },
        fromServerUpdate: function() {
            return _
        },
        fromInviteGuild: function() {
            return f
        },
        toServer: function() {
            return E
        },
        fromSerializedGuildRecord: function() {
            return h
        },
        filterRoleDeletes: function() {
            return g
        }
    }), n("222007");
    var i = n("627445"),
        s = n.n(i),
        r = n("627929"),
        a = n("813006"),
        o = n("605136"),
        l = n("49111");

    function u(e, t) {
        var n, i, o, u, d, c, _, f, E, h, g, m, p;
        let S = null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            T = null !== (n = e.premium_subscription_count) && void 0 !== n ? n : 0;
        if (null == e.properties) {
            s(null != t, "If guild.properties is null, existingGuild must be passed in");
            let e = t.joinedAt instanceof Date ? t.joinedAt.getTime() : t.joinedAt,
                n = S instanceof Date ? S.getTime() : S;
            return T === t.premiumSubscriberCount && e === n ? t : t.merge({
                joinedAt: S,
                premiumSubscriberCount: T
            })
        }
        let v = {
            id: e.id,
            joinedAt: S,
            premiumSubscriberCount: T,
            name: null !== (i = e.properties.name) && void 0 !== i ? i : "",
            description: e.properties.description,
            icon: e.properties.icon,
            splash: e.properties.splash,
            banner: e.properties.banner,
            homeHeader: e.properties.home_header,
            features: new Set(null !== (o = e.properties.features) && void 0 !== o ? o : []),
            preferredLocale: null !== (u = e.properties.preferred_locale) && void 0 !== u ? u : "en-us",
            ownerId: e.properties.owner_id,
            application_id: e.properties.application_id,
            afkChannelId: e.properties.afk_channel_id,
            afkTimeout: e.properties.afk_timeout,
            systemChannelId: e.properties.system_channel_id,
            verificationLevel: null !== (d = e.properties.verification_level) && void 0 !== d ? d : l.VerificationLevels.NONE,
            explicitContentFilter: null !== (c = e.properties.explicit_content_filter) && void 0 !== c ? c : l.GuildExplicitContentFilterTypes.DISABLED,
            defaultMessageNotifications: null !== (_ = e.properties.default_message_notifications) && void 0 !== _ ? _ : l.UserNotificationSettings.ALL_MESSAGES,
            mfaLevel: null !== (f = e.properties.mfa_level) && void 0 !== f ? f : l.MFALevels.NONE,
            vanityURLCode: e.properties.vanity_url_code,
            premiumTier: null !== (E = e.properties.premium_tier) && void 0 !== E ? E : l.BoostedGuildTiers.NONE,
            premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
            systemChannelFlags: e.properties.system_channel_flags,
            discoverySplash: e.properties.discovery_splash,
            rulesChannelId: e.properties.rules_channel_id,
            safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
            publicUpdatesChannelId: e.properties.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (h = e.properties.max_stage_video_channel_users) && void 0 !== h ? h : -1,
            maxVideoChannelUsers: null !== (g = e.properties.max_video_channel_users) && void 0 !== g ? g : -1,
            maxMembers: null !== (m = e.properties.max_members) && void 0 !== m ? m : -1,
            nsfwLevel: null !== (p = e.properties.nsfw_level) && void 0 !== p ? p : l.GuildNSFWContentLevel.DEFAULT,
            hubType: e.properties.hub_type,
            latestOnboardingQuestionId: e.properties.latest_onboarding_question_id
        };
        return null == t ? (0, r.dangerouslyCast)(v, a.default) : t.merge(v)
    }

    function d(e, t) {
        return new a.GuildRecordWithRoles({
            ...e,
            roles: t
        })
    }

    function c(e, t) {
        var n, i, s, r, a, o, u, d, c, _, f, h, g;
        let m = null !== (n = e.properties) && void 0 !== n ? n : E(t),
            p = {
                id: e.id,
                name: null !== (i = m.name) && void 0 !== i ? i : "",
                description: m.description,
                icon: m.icon,
                splash: m.splash,
                banner: m.banner,
                homeHeader: m.home_header,
                features: new Set(null !== (s = m.features) && void 0 !== s ? s : []),
                preferredLocale: null !== (r = m.preferred_locale) && void 0 !== r ? r : "en-us",
                ownerId: m.owner_id,
                application_id: m.application_id,
                afkChannelId: m.afk_channel_id,
                afkTimeout: m.afk_timeout,
                systemChannelId: m.system_channel_id,
                verificationLevel: null !== (a = m.verification_level) && void 0 !== a ? a : l.VerificationLevels.NONE,
                explicitContentFilter: null !== (o = m.explicit_content_filter) && void 0 !== o ? o : l.GuildExplicitContentFilterTypes.DISABLED,
                defaultMessageNotifications: null !== (u = m.default_message_notifications) && void 0 !== u ? u : l.UserNotificationSettings.ALL_MESSAGES,
                mfaLevel: null !== (d = m.mfa_level) && void 0 !== d ? d : l.MFALevels.NONE,
                vanityURLCode: m.vanity_url_code,
                premiumTier: null !== (c = m.premium_tier) && void 0 !== c ? c : l.BoostedGuildTiers.NONE,
                premiumProgressBarEnabled: m.premium_progress_bar_enabled || !1,
                systemChannelFlags: m.system_channel_flags,
                discoverySplash: m.discovery_splash,
                rulesChannelId: m.rules_channel_id,
                safetyAlertsChannelId: m.safety_alerts_channel_id,
                publicUpdatesChannelId: m.public_updates_channel_id,
                maxStageVideoChannelUsers: null !== (_ = m.max_stage_video_channel_users) && void 0 !== _ ? _ : -1,
                maxVideoChannelUsers: null !== (f = m.max_video_channel_users) && void 0 !== f ? f : -1,
                maxMembers: null !== (h = m.max_members) && void 0 !== h ? h : -1,
                nsfwLevel: null !== (g = m.nsfw_level) && void 0 !== g ? g : l.GuildNSFWContentLevel.DEFAULT,
                hubType: m.hub_type,
                latestOnboardingQuestionId: m.latest_onboarding_question_id
            };
        return t.merge(p)
    }

    function _(e, t) {
        let n = {
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
            roles: (0, o.sortServerRoles)(e.id, e.roles),
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

    function f(e) {
        let t = {
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

    function E(e) {
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

    function h(e) {
        var t;
        for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, o.fromSerializedGuildRole)(e.roles[n]);
        return (0, r.dangerouslyCast)(e, a.default)
    }

    function g(e, t, n, i) {
        let s = !1;
        if (null != i)
            for (let e of i) delete t[e], s = !0;
        if (null != n && n.length > 0) {
            for (let e of n) t[e.id] = (0, o.fromServerRole)(e);
            s = !0
        }
        return s ? (0, o.sortClientRoles)(e, Object.values(t)) : t
    }
}