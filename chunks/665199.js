function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PerkIcons: function() {
            return i
        },
        appliedGuildBoostsRequiredForPerks: function() {
            return w
        },
        boostedGuildTierToAnalyticsObjectType: function() {
            return R
        },
        generateBlockGuildSubscriptionPurchasesNode: function() {
            return M
        },
        getAppliedGuildBoostsRequired: function() {
            return k
        },
        getAvailableGuildBoostSlots: function() {
            return L
        },
        getAvailableSoundboardSoundCount: function() {
            return F
        },
        getAvailableStickerSlotCount: function() {
            return j
        },
        getGracePeriodEndingDate: function() {
            return B
        },
        getGuildTierFromAppliedBoostCount: function() {
            return C
        },
        getIncrementalSoundboardSoundCountForTier: function() {
            return v
        },
        getIncrementalStickerCountForTier: function() {
            return T
        },
        getNextTier: function() {
            return h
        },
        getNumberOfAppliedBoostsNeededForTier: function() {
            return V
        },
        getShortenedTierName: function() {
            return b
        },
        getTierName: function() {
            return A
        },
        getTiers: function() {
            return g
        },
        getTotalSoundboardSoundCountForTier: function() {
            return S
        },
        getTotalStickerCountForTier: function() {
            return O
        },
        isGuildBoostSlotCanceled: function() {
            return H
        },
        isGuildBoostedAtLeast: function() {
            return P
        },
        isInGracePeriod: function() {
            return U
        },
        isTierUnlocked: function() {
            return D
        },
        minimumRequiredTierForGuildFeature: function() {
            return N
        }
    });
    var r, o, i, a = n("392711"),
        u = n.n(a);
    n("913527");
    var s = n("762497"),
        l = n("428920"),
        c = n("304933"),
        f = n("162677"),
        d = n("481971"),
        _ = n("830721"),
        E = n("281767"),
        p = n("868615"),
        m = n("941504");

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.freeze((y(o = {}, 1, 1), y(o, 2, 2), y(o, 3, 3), y(o, 4, 6), y(o, 5, 9), y(o, 6, 12), y(o, 7, 15), y(o, 8, 18), y(o, 9, 24), o)), (r = i || (i = {}))[r.EMOJI = 1] = "EMOJI", r[r.AUDIO = 2] = "AUDIO", r[r.ANIMATED = 3] = "ANIMATED", r[r.CUSTOMIZATION = 4] = "CUSTOMIZATION", r[r.UPLOAD = 5] = "UPLOAD", r[r.VANITY = 6] = "VANITY", r[r.STREAM = 7] = "STREAM", r[r.STICKER = 8] = "STICKER", r[r.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", r[r.STAGE_VIDEO = 12] = "STAGE_VIDEO", r[r.SOUNDBOARD = 13] = "SOUNDBOARD";
    var I = [E.BoostedGuildTiers.NONE, E.BoostedGuildTiers.TIER_1, E.BoostedGuildTiers.TIER_2, E.BoostedGuildTiers.TIER_3],
        h = function(e, t) {
            var n;
            return e === E.BoostedGuildTiers.NONE ? E.BoostedGuildTiers.TIER_1 : null === (n = G(t).find(function(t) {
                return t.tier === e
            })) || void 0 === n ? void 0 : n.nextTier
        },
        O = function(e) {
            return p.TotalStickerCountsByTier[e]
        },
        T = function(e) {
            return p.IncrementalStickerCountsByTier[e]
        },
        S = function(e) {
            return p.TotalSoundboardSoundCountsByTier[e]
        },
        v = function(e) {
            if (e === E.BoostedGuildTiers.NONE) return p.TotalSoundboardSoundCountsByTier[e];
            var t = I[I.indexOf(e) - 1];
            return p.TotalSoundboardSoundCountsByTier[e] - p.TotalSoundboardSoundCountsByTier[t]
        },
        g = function(e) {
            return [{
                tier: E.BoostedGuildTiers.TIER_1,
                title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                perks: [{
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji - p.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.emoji,
                        total: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                    icon: 1
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: T(E.BoostedGuildTiers.TIER_1),
                        total: O(E.BoostedGuildTiers.TIER_1)
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                    icon: 8
                }, {
                    title: m.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: v(E.BoostedGuildTiers.TIER_1),
                        totalSoundCount: S(E.BoostedGuildTiers.TIER_1)
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                    icon: 13
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                        bitrate: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                    icon: 2
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                    icon: 3
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                    icon: 4
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                    icon: 7
                }].filter(f.isNotNullish)
            }, {
                tier: E.BoostedGuildTiers.TIER_2,
                title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                perks: [{
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji - p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji,
                        total: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                    icon: 1
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: T(E.BoostedGuildTiers.TIER_2),
                        total: O(E.BoostedGuildTiers.TIER_2)
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                    icon: 8
                }, {
                    title: m.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: v(E.BoostedGuildTiers.TIER_2),
                        totalSoundCount: S(E.BoostedGuildTiers.TIER_2)
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                    icon: 13
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                        bitrate: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                    icon: 2
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                    icon: 4
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                        fileSize: (0, c.formatSize)(p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                            useKibibytes: !0
                        })
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                    icon: 5
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                    icon: 7
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                    icon: 11
                }, e ? {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                        limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                        limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                    }),
                    icon: 12
                } : null].filter(f.isNotNullish)
            }, {
                tier: E.BoostedGuildTiers.TIER_3,
                title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                perks: [{
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji - p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji,
                        total: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                    icon: 1
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: T(E.BoostedGuildTiers.TIER_3),
                        total: O(E.BoostedGuildTiers.TIER_3)
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                    icon: 8
                }, {
                    title: m.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: v(E.BoostedGuildTiers.TIER_3),
                        totalSoundCount: S(E.BoostedGuildTiers.TIER_3)
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                    icon: 13
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                        bitrate: p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                    icon: 2
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                        helpdeskArticle: d.default.getArticleURL(E.HelpdeskArticles.GUILD_VANITY_URL)
                    }),
                    icon: 6
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                        fileSize: (0, c.formatSize)(p.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                            useKibibytes: !0
                        })
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                    icon: 5
                }, {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                    icon: 3
                }, e ? {
                    title: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                        limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                    }),
                    description: m.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                        limit: E.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                    }),
                    icon: 12
                } : null].filter(f.isNotNullish)
            }]
        };

    function A(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.useLevels;
        switch (e) {
            case E.BoostedGuildTiers.NONE:
                return void 0 === n || n ? m.default.Messages.PREMIUM_GUILD_TIER_0 : m.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
            case E.BoostedGuildTiers.TIER_1:
                return m.default.Messages.PREMIUM_GUILD_TIER_1;
            case E.BoostedGuildTiers.TIER_2:
                return m.default.Messages.PREMIUM_GUILD_TIER_2;
            case E.BoostedGuildTiers.TIER_3:
                return m.default.Messages.PREMIUM_GUILD_TIER_3;
            default:
                throw Error("Not a valid tier type")
        }
    }

    function b(e) {
        switch (e) {
            case E.BoostedGuildTiers.NONE:
                return m.default.Messages.PREMIUM_GUILD_TIER_0;
            case E.BoostedGuildTiers.TIER_1:
                return m.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
            case E.BoostedGuildTiers.TIER_2:
                return m.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
            case E.BoostedGuildTiers.TIER_3:
                return m.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
            default:
                throw Error("Not a valid tier type")
        }
    }
    var N = u().memoize(function(e) {
            return (0, p.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_1].features.includes(e) ? E.BoostedGuildTiers.TIER_1 : (0, p.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_2].features.includes(e) ? E.BoostedGuildTiers.TIER_2 : (0, p.BoostedGuildFeatures)[E.BoostedGuildTiers.TIER_3].features.includes(e) ? E.BoostedGuildTiers.TIER_3 : null
        }),
        R = function(e) {
            if (e === E.BoostedGuildTiers.NONE) return E.AnalyticsObjectTypes.NONE;
            if (e === E.BoostedGuildTiers.TIER_1) return E.AnalyticsObjectTypes.TIER_1;
            if (e === E.BoostedGuildTiers.TIER_2) return E.AnalyticsObjectTypes.TIER_2;
            else if (e === E.BoostedGuildTiers.TIER_3) return E.AnalyticsObjectTypes.TIER_3;
            return null
        };

    function C(e, t) {
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = G(t)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                if (e >= u.amount) return u.tier
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return E.BoostedGuildTiers.NONE
    }

    function P(e, t) {
        return null == t || null != e && e >= t
    }

    function D(e, t) {
        return P(e.premiumTier, t)
    }

    function L(e) {
        return u().values(e).filter(function(e) {
            return e.isAvailable()
        })
    }

    function M() {
        var e = l.default.getPremiumTypeSubscription(),
            t = Object.values(s.default.boostSlots).reduce(function(e, t) {
                return H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e
            }, {
                numAvailableGuildBoostSlots: 0,
                numCanceledGuildBoostSlots: 0
            }),
            n = t.numAvailableGuildBoostSlots,
            r = t.numCanceledGuildBoostSlots;
        if (null == e || n > 0) return null;
        if (e.status === E.SubscriptionStatusTypes.PAST_DUE) return m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
        if (e.status === E.SubscriptionStatusTypes.ACCOUNT_HOLD) return m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
        if (r > 0) return m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
        if (null == e.renewalMutations) return null;
        var o = _.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans);
        return _.getNumPremiumGuildSubscriptions(e.additionalPlans) > o ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
    }

    function U(e, t) {
        return w(e, t) > 0
    }

    function w(e, t) {
        var n = C(e.length, t),
            r = k(t)[n],
            o = e.filter(function(e) {
                return null != e.endsAt
            });
        return r - (e.length - o.length)
    }

    function k(e) {
        return E.AppliedGuildBoostsRequiredForBoostedGuildTier
    }

    function G(e) {
        var t = k(e);
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

    function B(e, t) {
        var n = w(e, t);
        if (n > 0) {
            var r = e.sort(function(e, t) {
                return null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1
            }).filter(function(e) {
                return null != e.endsAt
            });
            return r[r.length - n].endsAt
        }
        return null
    }

    function j(e, t) {
        var n = T(t),
            r = I.indexOf(t);
        if (-1 === r) return 0;
        var o = I[r - 1],
            i = null != o ? O(o) : 0,
            a = O(t);
        return Math.max(0, n - e.slice(i, a).length)
    }

    function F(e, t) {
        return -1 === I.indexOf(t) ? 0 : Math.max(0, S(t) - e.length)
    }

    function V(e, t) {
        var n = e.premiumSubscriberCount;
        return Math.max(0, k(e.id)[t] - n)
    }

    function H(e) {
        var t;
        return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === E.SubscriptionStatusTypes.CANCELED || e.canceled
    }
}