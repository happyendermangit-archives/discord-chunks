function(e, t, _) {
    "use strict";
    _.r(t), _.d(t, {
        PerkIcons: function() {
            return i
        },
        getNextTier: function() {
            return S
        },
        getTotalStickerCountForTier: function() {
            return U
        },
        getIncrementalStickerCountForTier: function() {
            return M
        },
        getTotalSoundboardSoundCountForTier: function() {
            return D
        },
        getIncrementalSoundboardSoundCountForTier: function() {
            return f
        },
        getTiers: function() {
            return N
        },
        getTierName: function() {
            return c
        },
        getShortenedTierName: function() {
            return L
        },
        minimumRequiredTierForGuildFeature: function() {
            return P
        },
        boostedGuildTierToAnalyticsObjectType: function() {
            return O
        },
        getGuildTierFromAppliedBoostCount: function() {
            return B
        },
        isGuildBoostedAtLeast: function() {
            return A
        },
        isTierUnlocked: function() {
            return C
        },
        getAvailableGuildBoostSlots: function() {
            return g
        },
        generateBlockGuildSubscriptionPurchasesNode: function() {
            return m
        },
        isInGracePeriod: function() {
            return p
        },
        appliedGuildBoostsRequiredForPerks: function() {
            return K
        },
        getAppliedGuildBoostsRequired: function() {
            return b
        },
        getGracePeriodEndingDate: function() {
            return v
        },
        getAvailableStickerSlotCount: function() {
            return y
        },
        getAvailableSoundboardSoundCount: function() {
            return F
        },
        getNumberOfAppliedBoostsNeededForTier: function() {
            return H
        },
        isGuildBoostSlotCanceled: function() {
            return V
        }
    }), _("70102"), _("222007"), _("808653");
    var i, s, I = _("917351"),
        T = _.n(I);
    _("866227");
    var o = _("625634"),
        u = _("521012"),
        E = _("993105"),
        r = _("449008"),
        l = _("701909"),
        d = _("719923"),
        n = _("49111"),
        a = _("646718"),
        R = _("782340");
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
    }), (s = i || (i = {}))[s.EMOJI = 1] = "EMOJI", s[s.AUDIO = 2] = "AUDIO", s[s.ANIMATED = 3] = "ANIMATED", s[s.CUSTOMIZATION = 4] = "CUSTOMIZATION", s[s.UPLOAD = 5] = "UPLOAD", s[s.VANITY = 6] = "VANITY", s[s.STREAM = 7] = "STREAM", s[s.STICKER = 8] = "STICKER", s[s.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", s[s.STAGE_VIDEO = 12] = "STAGE_VIDEO", s[s.SOUNDBOARD = 13] = "SOUNDBOARD";
    let G = [n.BoostedGuildTiers.NONE, n.BoostedGuildTiers.TIER_1, n.BoostedGuildTiers.TIER_2, n.BoostedGuildTiers.TIER_3],
        S = (e, t) => {
            var _;
            return e === n.BoostedGuildTiers.NONE ? n.BoostedGuildTiers.TIER_1 : null === (_ = h(t).find(t => t.tier === e)) || void 0 === _ ? void 0 : _.nextTier
        },
        U = e => a.TotalStickerCountsByTier[e],
        M = e => a.IncrementalStickerCountsByTier[e],
        D = e => a.TotalSoundboardSoundCountsByTier[e],
        f = e => {
            if (e === n.BoostedGuildTiers.NONE) return a.TotalSoundboardSoundCountsByTier[e];
            let t = G[G.indexOf(e) - 1];
            return a.TotalSoundboardSoundCountsByTier[e] - a.TotalSoundboardSoundCountsByTier[t]
        },
        N = e => [{
            tier: n.BoostedGuildTiers.TIER_1,
            title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
            perks: [{
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                    adding: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji - a.BoostedGuildFeatures[n.BoostedGuildTiers.NONE].limits.emoji,
                    total: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                icon: 1
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                    adding: M(n.BoostedGuildTiers.TIER_1),
                    total: U(n.BoostedGuildTiers.TIER_1)
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                icon: 8
            }, {
                title: R.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                    soundCount: f(n.BoostedGuildTiers.TIER_1),
                    totalSoundCount: D(n.BoostedGuildTiers.TIER_1)
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                icon: 13
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                    bitrate: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                icon: 2
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                icon: 3
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                icon: 4
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                icon: 7
            }].filter(r.isNotNullish)
        }, {
            tier: n.BoostedGuildTiers.TIER_2,
            title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
            perks: [{
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                    adding: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji - a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji,
                    total: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                icon: 1
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                    adding: M(n.BoostedGuildTiers.TIER_2),
                    total: U(n.BoostedGuildTiers.TIER_2)
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                icon: 8
            }, {
                title: R.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                    soundCount: f(n.BoostedGuildTiers.TIER_2),
                    totalSoundCount: D(n.BoostedGuildTiers.TIER_2)
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                icon: 13
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                    bitrate: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                icon: 2
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                icon: 4
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                    fileSize: (0, E.formatSize)(a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                        useKibibytes: !0
                    })
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                icon: 5
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                icon: 7
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                icon: 11
            }, e ? {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                }),
                icon: 12
            } : null].filter(r.isNotNullish)
        }, {
            tier: n.BoostedGuildTiers.TIER_3,
            title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
            perks: [{
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                    adding: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.emoji - a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji,
                    total: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.emoji
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                icon: 1
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                    adding: M(n.BoostedGuildTiers.TIER_3),
                    total: U(n.BoostedGuildTiers.TIER_3)
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                icon: 8
            }, {
                title: R.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                    soundCount: f(n.BoostedGuildTiers.TIER_3),
                    totalSoundCount: D(n.BoostedGuildTiers.TIER_3)
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                icon: 13
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                    bitrate: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                icon: 2
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                    helpdeskArticle: l.default.getArticleURL(n.HelpdeskArticles.GUILD_VANITY_URL)
                }),
                icon: 6
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                    fileSize: (0, E.formatSize)(a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                        useKibibytes: !0
                    })
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                icon: 5
            }, {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                icon: 3
            }, e ? {
                title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                }),
                description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                    limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                }),
                icon: 12
            } : null].filter(r.isNotNullish)
        }];

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                useLevels: _ = !0
            } = t;
        switch (e) {
            case n.BoostedGuildTiers.NONE:
                return _ ? R.default.Messages.PREMIUM_GUILD_TIER_0 : R.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
            case n.BoostedGuildTiers.TIER_1:
                return R.default.Messages.PREMIUM_GUILD_TIER_1;
            case n.BoostedGuildTiers.TIER_2:
                return R.default.Messages.PREMIUM_GUILD_TIER_2;
            case n.BoostedGuildTiers.TIER_3:
                return R.default.Messages.PREMIUM_GUILD_TIER_3;
            default:
                throw Error("Not a valid tier type")
        }
    }

    function L(e) {
        switch (e) {
            case n.BoostedGuildTiers.NONE:
                return R.default.Messages.PREMIUM_GUILD_TIER_0;
            case n.BoostedGuildTiers.TIER_1:
                return R.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
            case n.BoostedGuildTiers.TIER_2:
                return R.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
            case n.BoostedGuildTiers.TIER_3:
                return R.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
            default:
                throw Error("Not a valid tier type")
        }
    }
    let P = T.memoize(e => (0, a.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_1].features.includes(e) ? n.BoostedGuildTiers.TIER_1 : (0, a.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_2].features.includes(e) ? n.BoostedGuildTiers.TIER_2 : (0, a.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_3].features.includes(e) ? n.BoostedGuildTiers.TIER_3 : null),
        O = e => {
            if (e === n.BoostedGuildTiers.NONE) return n.AnalyticsObjectTypes.NONE;
            if (e === n.BoostedGuildTiers.TIER_1) return n.AnalyticsObjectTypes.TIER_1;
            if (e === n.BoostedGuildTiers.TIER_2) return n.AnalyticsObjectTypes.TIER_2;
            else if (e === n.BoostedGuildTiers.TIER_3) return n.AnalyticsObjectTypes.TIER_3;
            return null
        };

    function B(e, t) {
        for (let _ of h(t))
            if (e >= _.amount) return _.tier;
        return n.BoostedGuildTiers.NONE
    }

    function A(e, t) {
        return null == t || null != e && e >= t
    }

    function C(e, t) {
        return A(e.premiumTier, t)
    }

    function g(e) {
        return T.values(e).filter(e => e.isAvailable())
    }

    function m() {
        let e = u.default.getPremiumTypeSubscription(),
            t = Object.values(o.default.boostSlots),
            {
                numAvailableGuildBoostSlots: _,
                numCanceledGuildBoostSlots: i
            } = t.reduce((e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
                numAvailableGuildBoostSlots: 0,
                numCanceledGuildBoostSlots: 0
            });
        if (null == e || _ > 0) return null;
        if (e.status === n.SubscriptionStatusTypes.PAST_DUE) return R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
        if (e.status === n.SubscriptionStatusTypes.ACCOUNT_HOLD) return R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
        if (i > 0) return R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
        if (null == e.renewalMutations) return null;
        let s = d.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans),
            I = d.getNumPremiumGuildSubscriptions(e.additionalPlans);
        return I > s ? R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
    }

    function p(e, t) {
        return K(e, t) > 0
    }

    function K(e, t) {
        let _ = B(e.length, t),
            i = b(t)[_],
            s = e.filter(e => null != e.endsAt);
        return i - (e.length - s.length)
    }

    function b(e) {
        return n.AppliedGuildBoostsRequiredForBoostedGuildTier
    }

    function h(e) {
        let t = b(e);
        return [{
            tier: n.BoostedGuildTiers.TIER_3,
            amount: t[n.BoostedGuildTiers.TIER_3],
            nextTier: null
        }, {
            tier: n.BoostedGuildTiers.TIER_2,
            amount: t[n.BoostedGuildTiers.TIER_2],
            nextTier: n.BoostedGuildTiers.TIER_3
        }, {
            tier: n.BoostedGuildTiers.TIER_1,
            amount: t[n.BoostedGuildTiers.TIER_1],
            nextTier: n.BoostedGuildTiers.TIER_2
        }]
    }

    function v(e, t) {
        let _ = K(e, t);
        if (_ > 0) {
            let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt),
                i = t[t.length - _];
            return i.endsAt
        }
        return null
    }

    function y(e, t) {
        let _ = M(t),
            i = G.indexOf(t);
        if (-1 === i) return 0;
        let s = G[i - 1],
            I = null != s ? U(s) : 0,
            T = U(t);
        return Math.max(0, _ - e.slice(I, T).length)
    }

    function F(e, t) {
        let _ = G.indexOf(t);
        if (-1 === _) return 0;
        let i = D(t);
        return Math.max(0, i - e.length)
    }

    function H(e, t) {
        let _ = e.premiumSubscriberCount,
            i = b(e.id)[t];
        return Math.max(0, i - _)
    }

    function V(e) {
        var t;
        return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === n.SubscriptionStatusTypes.CANCELED || e.canceled
    }
}