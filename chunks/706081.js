function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return p
        }
    });
    var i = s("37983");
    s("884691");
    var r = s("414456"),
        a = s.n(r),
        l = s("77078"),
        o = s("441413"),
        n = s("46829"),
        u = s("700297"),
        d = s("549586"),
        c = s("110006"),
        E = s("83900"),
        _ = s("394832"),
        T = s("754576"),
        I = s("277703"),
        N = s("16988"),
        f = s("368121"),
        R = s("228427"),
        g = s("507491"),
        m = s("427459"),
        S = s("49111"),
        M = s("646718"),
        G = s("782340"),
        h = s("888601");
    let O = [{
        tier: S.BoostedGuildTiers.TIER_1,
        perks: [{
            icon: n.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
                numEmojiSlots: M.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji
            })
        }, {
            icon: T.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
                numSoundboardSlots: M.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.soundboardSounds
            }),
            isNew: !0
        }, {
            icon: c.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
        }, {
            icon: f.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
        }]
    }, {
        tier: S.BoostedGuildTiers.TIER_2,
        perks: [{
            icon: _.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
        }, {
            icon: g.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                uploadSizeLimit: G.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
            })
        }, {
            icon: u.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
        }, {
            icon: d.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
        }]
    }, {
        tier: S.BoostedGuildTiers.TIER_3,
        perks: [{
            icon: E.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
        }, {
            icon: g.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                uploadSizeLimit: G.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
            })
        }, {
            icon: f.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
        }, {
            icon: c.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
        }, {
            icon: R.default,
            getCopy: () => G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
                numStageSeats: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
            })
        }]
    }];
    var p = function(e) {
        let {
            guild: t
        } = e;
        return (0, i.jsx)("div", {
            className: h.tierCards,
            children: O.map(e => (0, i.jsxs)("div", {
                className: h.tierCard,
                children: [e.tier === S.BoostedGuildTiers.TIER_3 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: a(h.tierCardBorderHighlight, h.tierCardBorderHighlightTopRight)
                    }), (0, i.jsx)("div", {
                        className: a(h.tierCardBorderHighlight, h.tierCardBorderHighlightBottomLeft)
                    }), (0, i.jsxs)("div", {
                        className: a(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightTopRight),
                        children: [(0, i.jsx)(N.default, {
                            className: h.tierCardSparkle1
                        }), (0, i.jsx)(N.default, {
                            className: h.tierCardSparkle2
                        }), (0, i.jsx)(I.default, {
                            className: h.tierCardSparkle3
                        })]
                    }), (0, i.jsx)("div", {
                        className: a(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightBottomLeft),
                        children: (0, i.jsx)(N.default, {
                            className: h.tierCardSparkle1
                        })
                    })]
                }), e.tier === t.premiumTier && (0, i.jsx)(l.Text, {
                    className: h.tierCardCurrentTier,
                    tag: "div",
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
                }), (0, i.jsxs)("div", {
                    className: h.tierCardHeader,
                    children: [(0, i.jsx)(l.Heading, {
                        className: h.tierCardHeading,
                        variant: "heading-xxl/semibold",
                        color: "always-white",
                        children: (0, m.getTierName)(e.tier, {
                            useLevels: !1
                        })
                    }), (0, i.jsx)(l.Text, {
                        className: h.tierCardBoostRequirement,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: G.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
                            numBoostsRequired: S.AppliedGuildBoostsRequiredForBoostedGuildTier[e.tier]
                        })
                    })]
                }), (0, i.jsx)("ul", {
                    className: h.tierCardList,
                    children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, i.jsxs)("li", {
                        className: h.tierCardPerkRow,
                        children: [(0, i.jsxs)(l.Text, {
                            className: h.tierCardListItem,
                            variant: "text-md/normal",
                            color: "always-white",
                            children: [(0, i.jsx)(e.icon, {
                                className: h.tierCardListIcon
                            }), e.getCopy()]
                        }), e.isNew ? (0, i.jsx)(o.default, {
                            className: h.tierCardNewFeatureBadge,
                            forceUseColorForSparkles: !0,
                            shouldInheritBackgroundColor: !0,
                            shouldInheritTextColor: !0
                        }) : null]
                    }, t) : null)
                })]
            }, e.tier))
        })
    }
}