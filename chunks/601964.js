function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildRecordWithRoles: function() {
            return c
        },
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("81825"),
        r = n("768581"),
        s = n("709054"),
        a = n("624138"),
        o = n("981631"),
        l = n("185923"),
        u = n("474936");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class _ extends i.default {
        merge(e) {
            let {
                features: t
            } = e;
            if (null != t) {
                let n = new Set(t);
                if (n.size === this.features.size) {
                    let t = !1;
                    for (let e of n)
                        if (!this.features.has(e)) {
                            t = !0;
                            break
                        }! t && (e.features = this.features)
                }
            }
            return super.merge.call(this, e)
        }
        getSafetyAlertsChannelId() {
            var e;
            return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId
        }
        getIconURL(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return r.default.getGuildIconURL({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: t
            })
        }
        getIconSource(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return r.default.getAnimatableSourceWithFallback(t, t => r.default.getGuildIconSource({
                id: this.id,
                size: e,
                icon: this.icon,
                canAnimate: t
            }))
        }
        getApplicationId() {
            return this.application_id
        }
        toString() {
            var e;
            return null !== (e = this.name) && void 0 !== e ? e : ""
        }
        get acronym() {
            return (0, a.getAcronym)(this.name)
        }
        isOwner(e) {
            let t = "string" == typeof e ? e : null != e ? e.id : null;
            return this.ownerId === t
        }
        isOwnerWithRequiredMfaLevel(e) {
            return (!!e.mfaEnabled || this.mfaLevel !== o.MFALevels.ELEVATED) && this.isOwner(e)
        }
        isNew() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
                t = s.default.extractTimestamp(this.id);
            return Date.now() - t < 864e5 * e
        }
        isLurker() {
            return null == this.joinedAt
        }
        hasFeature(e) {
            return this.features.has(e)
        }
        getEveryoneRoleId() {
            return s.default.castGuildIdAsEveryoneGuildRoleId(this.id)
        }
        getMaxEmojiSlots() {
            return Math.max(this.hasFeature(o.GuildFeatures.MORE_EMOJI) ? 200 : l.EMOJI_MAX_SLOTS, u.BoostedGuildFeatures[this.premiumTier].limits.emoji)
        }
        getMaxRoleSubscriptionEmojiSlots() {
            return 25
        }
        getMaxSoundboardSlots() {
            return u.BoostedGuildFeatures[this.premiumTier].limits.soundboardSounds
        }
        isCommunity() {
            return this.hasFeature(o.GuildFeatures.COMMUNITY)
        }
        hasVerificationGate() {
            return this.hasFeature(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(o.GuildFeatures.COMMUNITY) || this.hasFeature(o.GuildFeatures.CLAN))
        }
        hasCommunityInfoSubheader() {
            return this.hasFeature(o.GuildFeatures.COMMUNITY) && this.hasFeature(o.GuildFeatures.DISCOVERABLE)
        }
        canHaveRaidActivityAlerts() {
            return !this.hasFeature(o.GuildFeatures.COMMUNITY) && this.hasFeature(o.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || this.hasFeature(o.GuildFeatures.COMMUNITY) && !this.hasFeature(o.GuildFeatures.RAID_ALERTS_DISABLED)
        }
        updateJoinedAt(e) {
            return this.set("joinedAt", "string" == typeof e ? new Date(e) : e)
        }
        constructor(e) {
            var t, n;
            super(), d(this, "id", void 0), d(this, "name", void 0), d(this, "description", void 0), d(this, "ownerId", void 0), d(this, "icon", void 0), d(this, "splash", void 0), d(this, "banner", void 0), d(this, "homeHeader", void 0), d(this, "preferredLocale", void 0), d(this, "features", void 0), d(this, "afkChannelId", void 0), d(this, "afkTimeout", void 0), d(this, "systemChannelId", void 0), d(this, "verificationLevel", void 0), d(this, "joinedAt", void 0), d(this, "defaultMessageNotifications", void 0), d(this, "mfaLevel", void 0), d(this, "application_id", void 0), d(this, "explicitContentFilter", void 0), d(this, "vanityURLCode", void 0), d(this, "premiumTier", void 0), d(this, "premiumSubscriberCount", void 0), d(this, "premiumProgressBarEnabled", void 0), d(this, "systemChannelFlags", void 0), d(this, "rulesChannelId", void 0), d(this, "safetyAlertsChannelId", void 0), d(this, "discoverySplash", void 0), d(this, "publicUpdatesChannelId", void 0), d(this, "maxStageVideoChannelUsers", void 0), d(this, "maxVideoChannelUsers", void 0), d(this, "maxMembers", void 0), d(this, "nsfwLevel", void 0), d(this, "hubType", void 0), d(this, "latestOnboardingQuestionId", void 0);
            let i = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
            this.id = e.id, this.name = e.name || "", this.description = e.description || null, this.ownerId = e.ownerId || null, this.icon = e.icon || null, this.splash = e.splash || null, this.banner = e.banner || null, this.homeHeader = e.homeHeader || null, this.features = i, this.preferredLocale = e.preferredLocale || "en-US", this.afkChannelId = e.afkChannelId || null, this.afkTimeout = e.afkTimeout, this.systemChannelId = e.systemChannelId || null, this.verificationLevel = e.verificationLevel || o.VerificationLevels.NONE, this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt), this.defaultMessageNotifications = e.defaultMessageNotifications || o.UserNotificationSettings.ALL_MESSAGES, this.mfaLevel = e.mfaLevel || o.MFALevels.NONE, this.application_id = e.application_id || null, this.explicitContentFilter = e.explicitContentFilter || o.GuildExplicitContentFilterTypes.DISABLED, this.vanityURLCode = e.vanityURLCode || void 0, this.premiumTier = e.premiumTier || o.BoostedGuildTiers.NONE, this.premiumSubscriberCount = e.premiumSubscriberCount || 0, this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1, this.systemChannelFlags = e.systemChannelFlags, this.discoverySplash = e.discoverySplash || null, this.rulesChannelId = e.rulesChannelId || null, this.safetyAlertsChannelId = e.safetyAlertsChannelId || null, this.publicUpdatesChannelId = e.publicUpdatesChannelId || null, this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1, this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1, this.maxMembers = e.maxMembers || -1, this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : o.GuildNSFWContentLevel.DEFAULT, this.hubType = e.hubType, this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null
        }
    }
    class c extends _ {
        constructor(e) {
            var t;
            super(e), d(this, "roles", void 0), this.roles = null !== (t = e.roles) && void 0 !== t ? t : {}
        }
    }
}