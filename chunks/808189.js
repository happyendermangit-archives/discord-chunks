function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("535322"),
        l = n("642113"),
        u = n("57128"),
        d = n("705077"),
        _ = n("115102"),
        c = n("757698"),
        E = n("645284"),
        I = n("503705"),
        T = n("31698"),
        f = n("528771"),
        S = n("632184"),
        h = n("170039"),
        A = n("617506"),
        m = n("267642"),
        N = n("981631"),
        p = n("474936"),
        O = n("689938"),
        R = n("277801");
    let C = [{
        tier: N.BoostedGuildTiers.TIER_1,
        perks: [{
            icon: l.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
                numEmojiSlots: p.BoostedGuildFeatures[N.BoostedGuildTiers.TIER_1].limits.emoji
            })
        }, {
            icon: I.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
                numSoundboardSlots: p.BoostedGuildFeatures[N.BoostedGuildTiers.TIER_1].limits.soundboardSounds
            }),
            isNew: !0
        }, {
            icon: _.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
        }, {
            icon: S.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
        }]
    }, {
        tier: N.BoostedGuildTiers.TIER_2,
        perks: [{
            icon: E.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
        }, {
            icon: A.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                uploadSizeLimit: O.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
            })
        }, {
            icon: u.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
        }, {
            icon: d.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
        }]
    }, {
        tier: N.BoostedGuildTiers.TIER_3,
        perks: [{
            icon: c.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
        }, {
            icon: A.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
                uploadSizeLimit: O.default.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
            })
        }, {
            icon: S.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
        }, {
            icon: _.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
        }, {
            icon: h.default,
            getCopy: () => O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({
                numStageSeats: N.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
            })
        }]
    }];
    t.default = function(e) {
        let {
            guild: t
        } = e;
        return (0, i.jsx)("div", {
            className: R.tierCards,
            children: C.map(e => (0, i.jsxs)("div", {
                className: R.tierCard,
                children: [e.tier === N.BoostedGuildTiers.TIER_3 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: s()(R.tierCardBorderHighlight, R.tierCardBorderHighlightTopRight)
                    }), (0, i.jsx)("div", {
                        className: s()(R.tierCardBorderHighlight, R.tierCardBorderHighlightBottomLeft)
                    }), (0, i.jsxs)("div", {
                        className: s()(R.tierCardSparkleHighlight, R.tierCardSparkleHighlightTopRight),
                        children: [(0, i.jsx)(f.default, {
                            className: R.tierCardSparkle1
                        }), (0, i.jsx)(f.default, {
                            className: R.tierCardSparkle2
                        }), (0, i.jsx)(T.default, {
                            className: R.tierCardSparkle3
                        })]
                    }), (0, i.jsx)("div", {
                        className: s()(R.tierCardSparkleHighlight, R.tierCardSparkleHighlightBottomLeft),
                        children: (0, i.jsx)(f.default, {
                            className: R.tierCardSparkle1
                        })
                    })]
                }), e.tier === t.premiumTier && (0, i.jsx)(a.Text, {
                    className: R.tierCardCurrentTier,
                    tag: "div",
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
                }), (0, i.jsxs)("div", {
                    className: R.tierCardHeader,
                    children: [(0, i.jsx)(a.Heading, {
                        className: R.tierCardHeading,
                        variant: "heading-xxl/semibold",
                        color: "always-white",
                        children: (0, m.getTierName)(e.tier, {
                            useLevels: !1
                        })
                    }), (0, i.jsx)(a.Text, {
                        className: R.tierCardBoostRequirement,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
                            numBoostsRequired: N.AppliedGuildBoostsRequiredForBoostedGuildTier[e.tier]
                        })
                    })]
                }), (0, i.jsx)("ul", {
                    className: R.tierCardList,
                    children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, i.jsxs)("li", {
                        className: R.tierCardPerkRow,
                        children: [(0, i.jsxs)(a.Text, {
                            className: R.tierCardListItem,
                            variant: "text-md/normal",
                            color: "always-white",
                            children: [(0, i.jsx)(e.icon, {
                                className: R.tierCardListIcon
                            }), e.getCopy()]
                        }), e.isNew ? (0, i.jsx)(o.default, {
                            className: R.tierCardNewFeatureBadge,
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