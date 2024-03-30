function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("419137"),
        s = n("227783"),
        l = n("967554"),
        c = n("446624"),
        f = n("2158"),
        d = n("438398"),
        _ = n("350073"),
        E = n("400648"),
        p = n("52285"),
        m = n("421334"),
        y = n("893427"),
        I = n("417863"),
        h = n("825916"),
        O = n("665199"),
        T = n("281767"),
        S = n("868615"),
        v = n("941504"),
        g = n("855260"),
        A = [{
            tier: T.BoostedGuildTiers.TIER_1,
            perks: [{
                icon: s.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
                        numEmojiSlots: S.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_1].limits.emoji
                    })
                }
            }, {
                icon: E.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
                        numSoundboardSlots: S.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_1].limits.soundboardSounds
                    })
                },
                isNew: !0
            }, {
                icon: f.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
                }
            }, {
                icon: y.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
                }
            }]
        }, {
            tier: T.BoostedGuildTiers.TIER_2,
            perks: [{
                icon: _.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
                }
            }, {
                icon: h.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                        uploadSizeLimit: v.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
                    })
                }
            }, {
                icon: l.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
                }
            }, {
                icon: c.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
                }
            }]
        }, {
            tier: T.BoostedGuildTiers.TIER_3,
            perks: [{
                icon: d.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
                }
            }, {
                icon: h.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                        uploadSizeLimit: v.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
                    })
                }
            }, {
                icon: y.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
                }
            }, {
                icon: f.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
                }
            }, {
                icon: I.default,
                getCopy: function() {
                    return v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
                        numStageSeats: T.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                    })
                }
            }]
        }];
    t.default = function(e) {
        var t = e.guild;
        return r.createElement("div", {
            className: g.tierCards
        }, A.map(function(e) {
            return r.createElement("div", {
                className: g.tierCard,
                key: e.tier
            }, e.tier === T.BoostedGuildTiers.TIER_3 && r.createElement(r.Fragment, null, r.createElement("div", {
                className: i()(g.tierCardBorderHighlight, g.tierCardBorderHighlightTopRight)
            }), r.createElement("div", {
                className: i()(g.tierCardBorderHighlight, g.tierCardBorderHighlightBottomLeft)
            }), r.createElement("div", {
                className: i()(g.tierCardSparkleHighlight, g.tierCardSparkleHighlightTopRight)
            }, r.createElement(m.default, {
                className: g.tierCardSparkle1
            }), r.createElement(m.default, {
                className: g.tierCardSparkle2
            }), r.createElement(p.default, {
                className: g.tierCardSparkle3
            })), r.createElement("div", {
                className: i()(g.tierCardSparkleHighlight, g.tierCardSparkleHighlightBottomLeft)
            }, r.createElement(m.default, {
                className: g.tierCardSparkle1
            }))), e.tier === t.premiumTier && r.createElement(a.Text, {
                className: g.tierCardCurrentTier,
                tag: "div",
                variant: "text-xs/semibold",
                color: "always-white"
            }, v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL), r.createElement("div", {
                className: g.tierCardHeader
            }, r.createElement(a.Heading, {
                className: g.tierCardHeading,
                variant: "heading-xxl/semibold",
                color: "always-white"
            }, (0, O.getTierName)(e.tier, {
                useLevels: !1
            })), r.createElement(a.Text, {
                className: g.tierCardBoostRequirement,
                variant: "text-md/normal",
                color: "always-white"
            }, v.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
                numBoostsRequired: T.AppliedGuildBoostsRequiredForBoostedGuildTier[e.tier]
            }))), r.createElement("ul", {
                className: g.tierCardList
            }, e.perks.map(function(e, t) {
                return null == e.predicate || e.predicate() ? r.createElement("li", {
                    key: t,
                    className: g.tierCardPerkRow
                }, r.createElement(a.Text, {
                    className: g.tierCardListItem,
                    variant: "text-md/normal",
                    color: "always-white"
                }, r.createElement(e.icon, {
                    className: g.tierCardListIcon
                }), e.getCopy()), e.isNew ? r.createElement(u.default, {
                    className: g.tierCardNewFeatureBadge,
                    forceUseColorForSparkles: !0,
                    shouldInheritBackgroundColor: !0,
                    shouldInheritTextColor: !0
                }) : null) : null
            })))
        }))
    }
}