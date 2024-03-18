function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        TierMarkerPositions: function() {
            return g
        },
        default: function() {
            return m
        }
    }), s("70102");
    var i = s("37983");
    s("884691");
    var r = s("414456"),
        a = s.n(r),
        l = s("146606"),
        o = s("65597"),
        n = s("77078"),
        u = s("206230"),
        d = s("685665"),
        c = s("206453"),
        E = s("36694"),
        _ = s("427459"),
        T = s("954296"),
        I = s("651971"),
        N = s("49111"),
        f = s("782340"),
        R = s("319519");
    let g = {
        [N.BoostedGuildTiers.NONE]: 0,
        [N.BoostedGuildTiers.TIER_1]: 1 / 3,
        [N.BoostedGuildTiers.TIER_2]: 2 / 3,
        [N.BoostedGuildTiers.TIER_3]: 1
    };
    var m = function(e) {
        let {
            children: t,
            confettiTriggerRef: s,
            guild: r,
            isProgressBarAnimationComplete: m,
            setConfettiCount: S,
            setShouldFireConfetti: M,
            tier: G,
            tierMarkerAnimationPosition: h
        } = e, O = (0, o.default)([u.default], () => u.default.useReducedMotion), {
            analyticsLocations: p
        } = (0, d.default)(), C = N.AppliedGuildBoostsRequiredForBoostedGuildTier[G], A = C - r.premiumSubscriberCount, B = G <= h || m, x = B && G <= r.premiumTier, v = B && G < r.premiumTier, P = B && G === r.premiumTier, {
            scaleFactor: L
        } = (0, l.useSpring)({
            from: {
                scaleFactor: 0
            },
            to: {
                scaleFactor: h >= G || m && h + 1 === G || m && -1 === h && G === N.BoostedGuildTiers.NONE ? 1 : 0
            },
            config: {
                tension: 360,
                friction: 12
            },
            immediate: O
        }), j = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.animated.div, {
                className: R.progressBarMarkerIndicator,
                style: {
                    transform: L.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
                }
            }), G !== N.BoostedGuildTiers.NONE && (0, i.jsx)(c.default, {
                tier: G,
                className: R.boostedTierIcon
            })]
        }), D = x ? "div" : n.Clickable, b = x ? {} : {
            onClick: function() {
                B && (0, T.addAppliedGuildBoosts)({
                    analyticsLocations: p,
                    analyticsLocation: {
                        page: N.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        section: N.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: N.AnalyticsObjects.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: function(e) {
                            switch (e) {
                                case N.BoostedGuildTiers.TIER_3:
                                    return N.AnalyticsObjectTypes.TIER_3;
                                case N.BoostedGuildTiers.TIER_2:
                                    return N.AnalyticsObjectTypes.TIER_2;
                                case N.BoostedGuildTiers.TIER_1:
                                    return N.AnalyticsObjectTypes.TIER_1;
                                default:
                                    throw Error("Unsupported Boosting tier: ".concat(e))
                            }
                        }(G)
                    },
                    numberOfBoostsToAdd: A,
                    guild: r
                })
            }
        };
        return (0, i.jsx)(n.Tooltip, {
            text: x ? f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
                tierName: (0, _.getTierName)(G, {
                    useLevels: !1
                })
            }) : f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
                numBoostsRequired: A,
                tierName: (0, _.getTierName)(G, {
                    useLevels: !1
                })
            }),
            shouldShow: G !== N.BoostedGuildTiers.NONE,
            children: e => (0, i.jsxs)(D, {
                className: a(R.progressBarMarker, {
                    [R.progressBarMarkerUnlocked]: x,
                    [R.progressBarMarkerLocked]: !x,
                    [R.progressBarMarkerLower]: v,
                    [R.progressBarMarkerCurrent]: P
                }),
                style: {
                    left: "".concat(100 * g[G], "%")
                },
                ...e,
                ...b,
                children: [!x && (0, i.jsx)("div", {
                    className: R.boostedTierIconBackground
                }), x && G === N.BoostedGuildTiers.TIER_3 ? (0, i.jsx)(I.ProgressBarConfettiTrigger, {
                    confettiTriggerRef: s,
                    setConfettiCount: S,
                    setShouldFireConfetti: M,
                    children: j
                }) : j, (0, i.jsxs)(n.Text, {
                    className: R.progressBarMarkerLabel,
                    variant: "text-md/normal",
                    children: [x && G !== N.BoostedGuildTiers.NONE && (0, i.jsx)(E.default, {
                        className: R.progressBarMarkerUnlockedIcon
                    }), t]
                })]
            })
        })
    }
}