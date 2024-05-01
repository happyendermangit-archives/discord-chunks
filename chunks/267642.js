function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PerkIcons: function() {
            return i
        },
        appliedGuildBoostsRequiredForPerks: function() {
            return U
        },
        boostedGuildTierToAnalyticsObjectType: function() {
            return g
        },
        generateBlockGuildSubscriptionPurchasesNode: function() {
            return y
        },
        getAppliedGuildBoostsRequired: function() {
            return b
        },
        getAvailableGuildBoostSlots: function() {
            return M
        },
        getAvailableSoundboardSoundCount: function() {
            return k
        },
        getAvailableStickerSlotCount: function() {
            return B
        },
        getGracePeriodEndingDate: function() {
            return w
        },
        getGuildTierFromAppliedBoostCount: function() {
            return L
        },
        getIncrementalSoundboardSoundCountForTier: function() {
            return N
        },
        getIncrementalStickerCountForTier: function() {
            return A
        },
        getNextTier: function() {
            return S
        },
        getNumberOfAppliedBoostsNeededForTier: function() {
            return V
        },
        getShortenedTierName: function() {
            return R
        },
        getTierName: function() {
            return O
        },
        getTiers: function() {
            return p
        },
        getTotalSoundboardSoundCountForTier: function() {
            return m
        },
        getTotalStickerCountForTier: function() {
            return h
        },
        isGuildBoostSlotCanceled: function() {
            return x
        },
        isGuildBoostedAtLeast: function() {
            return v
        },
        isInGracePeriod: function() {
            return P
        },
        isTierUnlocked: function() {
            return D
        },
        minimumRequiredTierForGuildFeature: function() {
            return C
        }
    }), n("411104"), n("47120"), n("724458");
    var i, r, a = n("392711"),
        s = n.n(a);
    n("913527");
    var o = n("314884"),
        l = n("78839"),
        u = n("424218"),
        d = n("823379"),
        _ = n("63063"),
        c = n("74538"),
        E = n("981631"),
        I = n("474936"),
        T = n("689938");
    Object.freeze({
        1: 1,
        2: 2,
        3: 3,
        4: 6,
        5: 9,
        6: 12,
        7: 15,
        8: 18,
        9: 24
    }), (r = i || (i = {}))[r.EMOJI = 1] = "EMOJI", r[r.AUDIO = 2] = "AUDIO", r[r.ANIMATED = 3] = "ANIMATED", r[r.CUSTOMIZATION = 4] = "CUSTOMIZATION", r[r.UPLOAD = 5] = "UPLOAD", r[r.VANITY = 6] = "VANITY", r[r.STREAM = 7] = "STREAM", r[r.STICKER = 8] = "STICKER", r[r.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", r[r.STAGE_VIDEO = 12] = "STAGE_VIDEO", r[r.SOUNDBOARD = 13] = "SOUNDBOARD";
    let f = [E.BoostedGuildTiers.NONE, E.BoostedGuildTiers.TIER_1, E.BoostedGuildTiers.TIER_2, E.BoostedGuildTiers.TIER_3],
        S = (e, t) => {
            var n;
            return e === E.BoostedGuildTiers.NONE ? E.BoostedGuildTiers.TIER_1 : null === (n = G(t).find(t => t.tier === e)) || void 0 === n ? void 0 : n.nextTier
        },
        h = e => I.TotalStickerCountsByTier[e],
        A = e => I.IncrementalStickerCountsByTier[e],
        m = e => I.TotalSoundboardSoundCountsByTier[e],
        N = e => {
            if (e === E.BoostedGuildTiers.NONE) return I.TotalSoundboardSoundCountsByTier[e];
            let t = f[f.indexOf(e) - 1];
            return I.TotalSoundboardSoundCountsByTier[e] - I.TotalSoundboardSoundCountsByTier[t]
        },
        p = e => [{
            tier: E.BoostedGuildTiers.TIER_1,
            title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
            perks: [{
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                    adding: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji - I.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.emoji,
                    total: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                icon: 1
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                    adding: A(E.BoostedGuildTiers.TIER_1),
                    total: h(E.BoostedGuildTiers.TIER_1)
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                icon: 8
            }, {
                title: T.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                    soundCount: N(E.BoostedGuildTiers.TIER_1),
                    totalSoundCount: m(E.BoostedGuildTiers.TIER_1)
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                icon: 13
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                    bitrate: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                icon: 2
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                icon: 3
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                icon: 4
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                icon: 7
            }].filter(d.isNotNullish)
        }, {
            tier: E.BoostedGuildTiers.TIER_2,
            title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
            perks: [{
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                    adding: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji - I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji,
                    total: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                icon: 1
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                    adding: A(E.BoostedGuildTiers.TIER_2),
                    total: h(E.BoostedGuildTiers.TIER_2)
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                icon: 8
            }, {
                title: T.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                    soundCount: N(E.BoostedGuildTiers.TIER_2),
                    totalSoundCount: m(E.BoostedGuildTiers.TIER_2)
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                icon: 13
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                    bitrate: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                icon: 2
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                icon: 4
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                    fileSize: (0, u.formatSize)(I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                        useKibibytes: !0
                    })
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                icon: 5
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                icon: 7
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                icon: 11
            }, e ? {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                }),
                icon: 12
            } : null].filter(d.isNotNullish)
        }, {
            tier: E.BoostedGuildTiers.TIER_3,
            title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
            perks: [{
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                    adding: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji - I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji,
                    total: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                icon: 1
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                    adding: A(E.BoostedGuildTiers.TIER_3),
                    total: h(E.BoostedGuildTiers.TIER_3)
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                icon: 8
            }, {
                title: T.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                    soundCount: N(E.BoostedGuildTiers.TIER_3),
                    totalSoundCount: m(E.BoostedGuildTiers.TIER_3)
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                icon: 13
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                    bitrate: I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                icon: 2
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                    helpdeskArticle: _.default.getArticleURL(E.HelpdeskArticles.GUILD_VANITY_URL)
                }),
                icon: 6
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                    fileSize: (0, u.formatSize)(I.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                        useKibibytes: !0
                    })
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                icon: 5
            }, {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                icon: 3
            }, e ? {
                title: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                }),
                description: T.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                }),
                icon: 12
            } : null].filter(d.isNotNullish)
        }];

    function O(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                useLevels: n = !0
            } = t;
        switch (e) {
            case E.BoostedGuildTiers.NONE:
                return n ? T.default.Messages.PREMIUM_GUILD_TIER_0 : T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
            case E.BoostedGuildTiers.TIER_1:
                return T.default.Messages.PREMIUM_GUILD_TIER_1;
            case E.BoostedGuildTiers.TIER_2:
                return T.default.Messages.PREMIUM_GUILD_TIER_2;
            case E.BoostedGuildTiers.TIER_3:
                return T.default.Messages.PREMIUM_GUILD_TIER_3;
            default:
                throw Error("Not a valid tier type")
        }
    }

    function R(e) {
        switch (e) {
            case E.BoostedGuildTiers.NONE:
                return T.default.Messages.PREMIUM_GUILD_TIER_0;
            case E.BoostedGuildTiers.TIER_1:
                return T.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
            case E.BoostedGuildTiers.TIER_2:
                return T.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
            case E.BoostedGuildTiers.TIER_3:
                return T.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
            default:
                throw Error("Not a valid tier type")
        }
    }
    let C = s().memoize(e => (0, I.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_1].features.includes(e) ? E.BoostedGuildTiers.TIER_1 : (0, I.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_2].features.includes(e) ? E.BoostedGuildTiers.TIER_2 : (0, I.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_3].features.includes(e) ? E.BoostedGuildTiers.TIER_3 : null),
        g = e => {
            if (e === E.BoostedGuildTiers.NONE) return E.AnalyticsObjectTypes.NONE;
            if (e === E.BoostedGuildTiers.TIER_1) return E.AnalyticsObjectTypes.TIER_1;
            if (e === E.BoostedGuildTiers.TIER_2) return E.AnalyticsObjectTypes.TIER_2;
            else if (e === E.BoostedGuildTiers.TIER_3) return E.AnalyticsObjectTypes.TIER_3;
            return null
        };

    function L(e, t) {
        for (let n of G(t))
            if (e >= n.amount) return n.tier;
        return E.BoostedGuildTiers.NONE
    }

    function v(e, t) {
        return null == t || null != e && e >= t
    }

    function D(e, t) {
        return v(e.premiumTier, t)
    }

    function M(e) {
        return s().values(e).filter(e => e.isAvailable())
    }

    function y() {
        let e = l.default.getPremiumTypeSubscription();
        if (null == e ? void 0 : e.isPausedOrPausePending) return T.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION;
        let {
            numAvailableGuildBoostSlots: t,
            numCanceledGuildBoostSlots: n
        } = Object.values(o.default.boostSlots).reduce((e, t) => (x(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
            numAvailableGuildBoostSlots: 0,
            numCanceledGuildBoostSlots: 0
        });
        if (null == e || t > 0) return null;
        if (e.status === E.SubscriptionStatusTypes.PAST_DUE) return T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
        if (e.status === E.SubscriptionStatusTypes.ACCOUNT_HOLD) return T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
        if (n > 0) return T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
        if (null == e.renewalMutations) return null;
        let i = c.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans);
        return c.getNumPremiumGuildSubscriptions(e.additionalPlans) > i ? T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
    }

    function P(e, t) {
        return U(e, t) > 0
    }

    function U(e, t) {
        let n = L(e.length, t),
            i = b(t)[n],
            r = e.filter(e => null != e.endsAt);
        return i - (e.length - r.length)
    }

    function b(e) {
        return E.AppliedGuildBoostsRequiredForBoostedGuildTier
    }

    function G(e) {
        let t = b(e);
        return [{
            tier: E.BoostedGuildTiers.TIER_3,
            amount: t[E.BoostedGuildTiers.TIER_3],
            nextTier: null
        }, {
            tier: E.BoostedGuildTiers.TIER_2,
            amount: t[E.BoostedGuildTiers.TIER_2],
            nextTier: E.BoostedGuildTiers.TIER_3
        }, {
            tier: E.BoostedGuildTiers.TIER_1,
            amount: t[E.BoostedGuildTiers.TIER_1],
            nextTier: E.BoostedGuildTiers.TIER_2
        }]
    }

    function w(e, t) {
        let n = U(e, t);
        if (n > 0) {
            let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt);
            return t[t.length - n].endsAt
        }
        return null
    }

    function B(e, t) {
        let n = A(t),
            i = f.indexOf(t);
        if (-1 === i) return 0;
        let r = f[i - 1],
            a = null != r ? h(r) : 0,
            s = h(t);
        return Math.max(0, n - e.slice(a, s).length)
    }

    function k(e, t) {
        return -1 === f.indexOf(t) ? 0 : Math.max(0, m(t) - e.length)
    }

    function V(e, t) {
        let n = e.premiumSubscriberCount;
        return Math.max(0, b(e.id)[t] - n)
    }

    function x(e) {
        var t;
        return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === E.SubscriptionStatusTypes.CANCELED || e.canceled
    }
}