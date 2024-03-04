function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fromServer: function() {
            return o
        },
        fromBackgroundSync: function() {
            return l
        },
        fromServerUpdate: function() {
            return u
        },
        fromInviteGuild: function() {
            return d
        },
        toServer: function() {
            return c
        },
        fromSerializedGuildRecord: function() {
            return f
        },
        filterRoleDeletes: function() {
            return _
        }
    }), n("222007");
    var i = n("627929"),
        s = n("813006"),
        r = n("605136"),
        a = n("49111");

    function o(e, t) {
        var n, o, l, u, d, c, f, _, h, E, g, m, p;
        let S = {
            id: e.id,
            name: null !== (n = e.properties.name) && void 0 !== n ? n : "",
            description: e.properties.description,
            icon: e.properties.icon,
            splash: e.properties.splash,
            banner: e.properties.banner,
            homeHeader: e.properties.home_header,
            features: new Set(null !== (o = e.properties.features) && void 0 !== o ? o : []),
            preferredLocale: null !== (l = e.properties.preferred_locale) && void 0 !== l ? l : "en-us",
            ownerId: e.properties.owner_id,
            application_id: e.properties.application_id,
            roles: e.roles instanceof Array ? (0, r.sortServerRoles)(e.id, e.roles) : e.roles,
            afkChannelId: e.properties.afk_channel_id,
            afkTimeout: e.properties.afk_timeout,
            systemChannelId: e.properties.system_channel_id,
            joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
            verificationLevel: null !== (u = e.properties.verification_level) && void 0 !== u ? u : a.VerificationLevels.NONE,
            explicitContentFilter: null !== (d = e.properties.explicit_content_filter) && void 0 !== d ? d : a.GuildExplicitContentFilterTypes.DISABLED,
            defaultMessageNotifications: null !== (c = e.properties.default_message_notifications) && void 0 !== c ? c : a.UserNotificationSettings.ALL_MESSAGES,
            mfaLevel: null !== (f = e.properties.mfa_level) && void 0 !== f ? f : a.MFALevels.NONE,
            vanityURLCode: e.properties.vanity_url_code,
            premiumTier: null !== (_ = e.properties.premium_tier) && void 0 !== _ ? _ : a.BoostedGuildTiers.NONE,
            premiumSubscriberCount: null !== (h = e.premium_subscription_count) && void 0 !== h ? h : 0,
            premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
            systemChannelFlags: e.properties.system_channel_flags,
            discoverySplash: e.properties.discovery_splash,
            rulesChannelId: e.properties.rules_channel_id,
            safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
            publicUpdatesChannelId: e.properties.public_updates_channel_id,
            maxStageVideoChannelUsers: null !== (E = e.properties.max_stage_video_channel_users) && void 0 !== E ? E : -1,
            maxVideoChannelUsers: null !== (g = e.properties.max_video_channel_users) && void 0 !== g ? g : -1,
            maxMembers: null !== (m = e.properties.max_members) && void 0 !== m ? m : -1,
            nsfwLevel: null !== (p = e.properties.nsfw_level) && void 0 !== p ? p : a.GuildNSFWContentLevel.DEFAULT,
            hubType: e.properties.hub_type,
            latestOnboardingQuestionId: e.properties.latest_onboarding_question_id
        };
        return null == t ? (0, i.dangerouslyCast)(S, s.default) : t.merge(S)
    }

    function l(e, t) {
        var n, i, s, o, l, u, d, f, h, E, g, m, p;
        let S = null !== (n = e.properties) && void 0 !== n ? n : c(t),
            v = {
                id: e.id,
                name: null !== (i = S.name) && void 0 !== i ? i : "",
                description: S.description,
                icon: S.icon,
                splash: S.splash,
                banner: S.banner,
                homeHeader: S.home_header,
                features: new Set(null !== (s = S.features) && void 0 !== s ? s : []),
                preferredLocale: null !== (o = S.preferred_locale) && void 0 !== o ? o : "en-us",
                ownerId: S.owner_id,
                application_id: S.application_id,
                roles: "partial" === e.data_mode ? _(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids) : (0, r.sortServerRoles)(e.id, e.roles),
                afkChannelId: S.afk_channel_id,
                afkTimeout: S.afk_timeout,
                systemChannelId: S.system_channel_id,
                verificationLevel: null !== (l = S.verification_level) && void 0 !== l ? l : a.VerificationLevels.NONE,
                explicitContentFilter: null !== (u = S.explicit_content_filter) && void 0 !== u ? u : a.GuildExplicitContentFilterTypes.DISABLED,
                defaultMessageNotifications: null !== (d = S.default_message_notifications) && void 0 !== d ? d : a.UserNotificationSettings.ALL_MESSAGES,
                mfaLevel: null !== (f = S.mfa_level) && void 0 !== f ? f : a.MFALevels.NONE,
                vanityURLCode: S.vanity_url_code,
                premiumTier: null !== (h = S.premium_tier) && void 0 !== h ? h : a.BoostedGuildTiers.NONE,
                premiumProgressBarEnabled: S.premium_progress_bar_enabled || !1,
                systemChannelFlags: S.system_channel_flags,
                discoverySplash: S.discovery_splash,
                rulesChannelId: S.rules_channel_id,
                safetyAlertsChannelId: S.safety_alerts_channel_id,
                publicUpdatesChannelId: S.public_updates_channel_id,
                maxStageVideoChannelUsers: null !== (E = S.max_stage_video_channel_users) && void 0 !== E ? E : -1,
                maxVideoChannelUsers: null !== (g = S.max_video_channel_users) && void 0 !== g ? g : -1,
                maxMembers: null !== (m = S.max_members) && void 0 !== m ? m : -1,
                nsfwLevel: null !== (p = S.nsfw_level) && void 0 !== p ? p : a.GuildNSFWContentLevel.DEFAULT,
                hubType: S.hub_type,
                latestOnboardingQuestionId: S.latest_onboarding_question_id
            };
        return t.merge(v)
    }

    function u(e, t) {
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

    function d(e) {
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

    function c(e) {
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

    function f(e) {
        var t;
        for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, r.fromSerializedGuildRole)(e.roles[n]);
        return (0, i.dangerouslyCast)(e, s.default)
    }

    function _(e, t, n, i) {
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