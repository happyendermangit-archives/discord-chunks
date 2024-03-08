function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildRecordWithRoles: function() {
            return c
        },
        default: function() {
            return i
        }
    }), n("222007");
    var i, s = n("666038"),
        r = n("315102"),
        a = n("299039"),
        o = n("159885"),
        l = n("49111"),
        u = n("958706"),
        d = n("646718");
    i = class extends s.default {
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
            return (0, o.getAcronym)(this.name)
        }
        isOwner(e) {
            let t = "string" == typeof e ? e : null != e ? e.id : null;
            return this.ownerId === t
        }
        isOwnerWithRequiredMfaLevel(e) {
            return (!!e.mfaEnabled || this.mfaLevel !== l.MFALevels.ELEVATED) && this.isOwner(e)
        }
        isNew() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
                t = a.default.extractTimestamp(this.id);
            return Date.now() - t < 864e5 * e
        }
        isLurker() {
            return null == this.joinedAt
        }
        hasFeature(e) {
            return this.features.has(e)
        }
        getEveryoneRoleId() {
            return a.default.castGuildIdAsEveryoneGuildRoleId(this.id)
        }
        getMaxEmojiSlots() {
            return Math.max(this.hasFeature(l.GuildFeatures.MORE_EMOJI) ? 200 : u.EMOJI_MAX_SLOTS, d.BoostedGuildFeatures[this.premiumTier].limits.emoji)
        }
        getMaxRoleSubscriptionEmojiSlots() {
            return 25
        }
        getMaxSoundboardSlots() {
            return d.BoostedGuildFeatures[this.premiumTier].limits.soundboardSounds
        }
        isCommunity() {
            return this.hasFeature(l.GuildFeatures.COMMUNITY)
        }
        hasVerificationGate() {
            return this.hasFeature(l.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(l.GuildFeatures.COMMUNITY) || this.hasFeature(l.GuildFeatures.CLAN))
        }
        hasCommunityInfoSubheader() {
            return this.hasFeature(l.GuildFeatures.COMMUNITY) && this.hasFeature(l.GuildFeatures.DISCOVERABLE)
        }
        canHaveRaidActivityAlerts() {
            return !this.hasFeature(l.GuildFeatures.COMMUNITY) && this.hasFeature(l.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || this.hasFeature(l.GuildFeatures.COMMUNITY) && !this.hasFeature(l.GuildFeatures.RAID_ALERTS_DISABLED)
        }
        updateJoinedAt(e) {
            return this.set("joinedAt", "string" == typeof e ? new Date(e) : e)
        }
        constructor(e) {
            var t, n;
            super();
            let i = e.features instanceof Set ? e.features : new Set(Array.from(e.features || []));
            this.id = e.id, this.name = e.name || "", this.description = e.description || null, this.ownerId = e.ownerId || null, this.icon = e.icon || null, this.splash = e.splash || null, this.banner = e.banner || null, this.homeHeader = e.homeHeader || null, this.features = i, this.preferredLocale = e.preferredLocale || "en-US", this.afkChannelId = e.afkChannelId || null, this.afkTimeout = e.afkTimeout, this.systemChannelId = e.systemChannelId || null, this.verificationLevel = e.verificationLevel || l.VerificationLevels.NONE, this.joinedAt = e.joinedAt instanceof Date ? e.joinedAt : new Date(e.joinedAt), this.defaultMessageNotifications = e.defaultMessageNotifications || l.UserNotificationSettings.ALL_MESSAGES, this.mfaLevel = e.mfaLevel || l.MFALevels.NONE, this.application_id = e.application_id || null, this.explicitContentFilter = e.explicitContentFilter || l.GuildExplicitContentFilterTypes.DISABLED, this.vanityURLCode = e.vanityURLCode || void 0, this.premiumTier = e.premiumTier || l.BoostedGuildTiers.NONE, this.premiumSubscriberCount = e.premiumSubscriberCount || 0, this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1, this.systemChannelFlags = e.systemChannelFlags, this.discoverySplash = e.discoverySplash || null, this.rulesChannelId = e.rulesChannelId || null, this.safetyAlertsChannelId = e.safetyAlertsChannelId || null, this.publicUpdatesChannelId = e.publicUpdatesChannelId || null, this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1, this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1, this.maxMembers = e.maxMembers || -1, this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : l.GuildNSFWContentLevel.DEFAULT, this.hubType = e.hubType, this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null
        }
    };
    class c extends i {
        constructor(e) {
            var t;
            super(e), this.roles = null !== (t = e.roles) && void 0 !== t ? t : {}
        }
    }
}