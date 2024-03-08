function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fromServer: function() {
            return o
        },
        attachRoles: function() {
            return l
        },
        fromBackgroundSync: function() {
            return u
        },
        fromServerUpdate: function() {
            return d
        },
        fromInviteGuild: function() {
            return c
        },
        toServer: function() {
            return f
        },
        fromSerializedGuildRecord: function() {
            return _
        },
        filterRoleDeletes: function() {
            return h
        }
    }), n("222007");
    var i = n("627929"),
        s = n("813006"),
        r = n("605136"),
        a = n("49111");

    function o(e, t) {
        var n, r, o, l, u, d, c, f, _, h, E, g, m;
        let p = {
            id: e.id,
            name: null !== (n = e.properties.name) && void 0 !== n ? n : "",
            description: e.properties.description,
            icon: e.properties.icon,
            splash: e.properties.splash,
            banner: e.properties.banner,
            homeHeader: e.properties.home_header,
            features: new Set(null !== (r = e.properties.features) && void 0 !== r ? r : []),
            preferredLocale: null !== (o = e.properties.preferred_locale) && void 0 !== o ? o : "en-us",
            ownerId: e.properties.owner_id,
            application_id: e.properties.application_id,
            afkChannelId: e.properties.afk_channel_id,
            afkTimeout: e.properties.afk_timeout,
            systemChannelId: e.properties.system_channel_id,
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            verificationLevel: null !== (l = e.properties.verification_level) && void 0 !== l ? l : a.VerificationLevels.NONE,
            explicitContentFilter: null !== (u = e.properties.explicit_content_filter) && void 0 !== u ? u : a.GuildExplicitContentFilterTypes.DISABLED,
            defaultMessageNotifications: null !== (d = e.properties.default_message_notifications) && void 0 !== d ? d : a.UserNotificationSettings.ALL_MESSAGES,
            mfaLevel: null !== (c = e.properties.mfa_level) && void 0 !== c ? c : a.MFALevels.NONE,
            vanityURLCode: e.properties.vanity_url_code,
            premiumTier: null !== (f = e.properties.premium_tier) && void 0 !== f ? f : a.BoostedGuildTiers.NONE,
            premiumSubscriberCount: null !== (_ = e.premium_subscription_count) && void 0 !== _ ? _ : 0,
            premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
            systemChannelFlags: e.properties.system_channel_flags,
            discoverySplash: e.properties.discovery_splash,
            rulesChannelId: e.properties.rules_channel_id,
            safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
            publicUpdatesChannelId: e.properties.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (h = e.properties.max_stage_video_channel_users) && void 0 !== h ? h : -1,
            maxVideoChannelUsers: null !== (E = e.properties.max_video_channel_users) && void 0 !== E ? E : -1,
            maxMembers: null !== (g = e.properties.max_members) && void 0 !== g ? g : -1,
            nsfwLevel: null !== (m = e.properties.nsfw_level) && void 0 !== m ? m : a.GuildNSFWContentLevel.DEFAULT,
            hubType: e.properties.hub_type,
            latestOnboardingQuestionId: e.properties.latest_onboarding_question_id
        };
        return null == t ? (0, i.dangerouslyCast)(p, s.default) : t.merge(p)
    }

    function l(e, t) {
        return new s.GuildRecordWithRoles({
            ...e,
            roles: t
        })
    }

    function u(e, t) {
        var n, i, s, r, o, l, u, d, c, _, h, E, g;
        let m = null !== (n = e.properties) && void 0 !== n ? n : f(t),
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
                verificationLevel: null !== (o = m.verification_level) && void 0 !== o ? o : a.VerificationLevels.NONE,
                explicitContentFilter: null !== (l = m.explicit_content_filter) && void 0 !== l ? l : a.GuildExplicitContentFilterTypes.DISABLED,
                defaultMessageNotifications: null !== (u = m.default_message_notifications) && void 0 !== u ? u : a.UserNotificationSettings.ALL_MESSAGES,
                mfaLevel: null !== (d = m.mfa_level) && void 0 !== d ? d : a.MFALevels.NONE,
                vanityURLCode: m.vanity_url_code,
                premiumTier: null !== (c = m.premium_tier) && void 0 !== c ? c : a.BoostedGuildTiers.NONE,
                premiumProgressBarEnabled: m.premium_progress_bar_enabled || !1,
                systemChannelFlags: m.system_channel_flags,
                discoverySplash: m.discovery_splash,
                rulesChannelId: m.rules_channel_id,
                safetyAlertsChannelId: m.safety_alerts_channel_id,
                publicUpdatesChannelId: m.public_updates_channel_id,
                maxStageVideoChannelUsers: null !== (_ = m.max_stage_video_channel_users) && void 0 !== _ ? _ : -1,
                maxVideoChannelUsers: null !== (h = m.max_video_channel_users) && void 0 !== h ? h : -1,
                maxMembers: null !== (E = m.max_members) && void 0 !== E ? E : -1,
                nsfwLevel: null !== (g = m.nsfw_level) && void 0 !== g ? g : a.GuildNSFWContentLevel.DEFAULT,
                hubType: m.hub_type,
                latestOnboardingQuestionId: m.latest_onboarding_question_id
            };
        return t.merge(p)
    }

    function d(e, t) {
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
            roles: (0, r.sortServerRoles)(e.id, e.roles),
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
        return null == t ? new s.default(n) : t.merge(n)
    }

    function c(e) {
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
        return new s.default(t)
    }

    function f(e) {
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

    function _(e) {
        var t;
        for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, r.fromSerializedGuildRole)(e.roles[n]);
        return (0, i.dangerouslyCast)(e, s.default)
    }

    function h(e, t, n, i) {
        let s = !1;
        if (null != i)
            for (let e of i) delete t[e], s = !0;
        if (null != n && n.length > 0) {
            for (let e of n) t[e.id] = (0, r.fromServerRole)(e);
            s = !0
        }
        return s ? (0, r.sortClientRoles)(e, Object.values(t)) : t
    }
}