function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TierMarkerPositions: function() {
            return T
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("718017"),
        s = n("37295"),
        l = n("784184"),
        c = n("622780"),
        f = n("396586"),
        d = n("228605"),
        _ = n("843317"),
        E = n("665199"),
        p = n("608458"),
        m = n("398844"),
        y = n("281767"),
        I = n("941504"),
        h = n("90952");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var T = (O(r = {}, y.BoostedGuildTiers.NONE, 0), O(r, y.BoostedGuildTiers.TIER_1, 1 / 3), O(r, y.BoostedGuildTiers.TIER_2, 2 / 3), O(r, y.BoostedGuildTiers.TIER_3, 1), r);
    t.default = function(e) {
        var t = e.children,
            n = e.confettiTriggerRef,
            r = e.guild,
            i = e.isProgressBarAnimationComplete,
            S = e.setConfettiCount,
            v = e.setShouldFireConfetti,
            g = e.tier,
            A = e.tierMarkerAnimationPosition,
            b = (0, s.useStateFromStores)([c.default], function() {
                return c.default.useReducedMotion
            }),
            N = (0, f.default)().analyticsLocations,
            R = y.AppliedGuildBoostsRequiredForBoostedGuildTier[g] - r.premiumSubscriberCount,
            C = g <= A || i,
            P = C && g <= r.premiumTier,
            D = C && g < r.premiumTier,
            L = C && g === r.premiumTier,
            M = (0, u.useSpring)({
                from: {
                    scaleFactor: 0
                },
                to: {
                    scaleFactor: A >= g || i && A + 1 === g || i && -1 === A && g === y.BoostedGuildTiers.NONE ? 1 : 0
                },
                config: {
                    tension: 360,
                    friction: 12
                },
                immediate: b
            }).scaleFactor,
            U = o.createElement(o.Fragment, null, o.createElement(u.animated.div, {
                className: h.progressBarMarkerIndicator,
                style: {
                    transform: M.to(function(e) {
                        return "translate(-50%, -50%) scale(".concat(e, ")")
                    })
                }
            }), g !== y.BoostedGuildTiers.NONE && o.createElement(d.default, {
                tier: g,
                className: h.boostedTierIcon
            })),
            w = P ? "div" : l.Clickable,
            k = P ? {} : {
                onClick: function() {
                    C && (0, p.addAppliedGuildBoosts)({
                        analyticsLocations: N,
                        analyticsLocation: {
                            page: y.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            section: y.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                            object: y.AnalyticsObjects.SUBSCRIBE_TO_TIER_BUTTON,
                            objectType: function(e) {
                                switch (e) {
                                    case y.BoostedGuildTiers.TIER_3:
                                        return y.AnalyticsObjectTypes.TIER_3;
                                    case y.BoostedGuildTiers.TIER_2:
                                        return y.AnalyticsObjectTypes.TIER_2;
                                    case y.BoostedGuildTiers.TIER_1:
                                        return y.AnalyticsObjectTypes.TIER_1;
                                    default:
                                        throw Error("Unsupported Boosting tier: ".concat(e))
                                }
                            }(g)
                        },
                        numberOfBoostsToAdd: R,
                        guild: r
                    })
                }
            };
        return o.createElement(l.Tooltip, {
            text: P ? I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
                tierName: (0, E.getTierName)(g, {
                    useLevels: !1
                })
            }) : I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
                numBoostsRequired: R,
                tierName: (0, E.getTierName)(g, {
                    useLevels: !1
                })
            }),
            shouldShow: g !== y.BoostedGuildTiers.NONE
        }, function(e) {
            var r;
            return o.createElement(w, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        O(e, t, n[t])
                    })
                }
                return e
            }({
                className: a()(h.progressBarMarker, (O(r = {}, h.progressBarMarkerUnlocked, P), O(r, h.progressBarMarkerLocked, !P), O(r, h.progressBarMarkerLower, D), O(r, h.progressBarMarkerCurrent, L), r)),
                style: {
                    left: "".concat(100 * T[g], "%")
                }
            }, e, k), !P && o.createElement("div", {
                className: h.boostedTierIconBackground
            }), P && g === y.BoostedGuildTiers.TIER_3 ? o.createElement(m.ProgressBarConfettiTrigger, {
                confettiTriggerRef: n,
                setConfettiCount: S,
                setShouldFireConfetti: v
            }, U) : U, o.createElement(l.Text, {
                className: h.progressBarMarkerLabel,
                variant: "text-md/normal"
            }, P && g !== y.BoostedGuildTiers.NONE && o.createElement(_.default, {
                className: h.progressBarMarkerUnlockedIcon
            }), t))
        })
    }
}