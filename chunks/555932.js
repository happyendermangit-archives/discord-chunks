function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("718017"),
        a = n("442837"),
        o = n("607070"),
        l = n("267642"),
        u = n("198466"),
        d = n("436444"),
        _ = n("981631"),
        c = n("689938"),
        E = n("372020");
    let I = [_.BoostedGuildTiers.NONE, _.BoostedGuildTiers.TIER_1, _.BoostedGuildTiers.TIER_2, _.BoostedGuildTiers.TIER_3];

    function T(e) {
        let {
            guild: t
        } = e, n = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion), [T, f] = r.useState(!1), [S, h] = r.useState(0), A = r.useRef(null), m = Math.min(_.BoostedGuildTiers.TIER_3, t.premiumTier + 1), N = _.AppliedGuildBoostsRequiredForBoostedGuildTier[t.premiumTier], p = _.AppliedGuildBoostsRequiredForBoostedGuildTier[m], O = (t.premiumSubscriberCount - N) / (p - N), R = d.TierMarkerPositions[t.premiumTier], C = d.TierMarkerPositions[m], g = t.premiumTier === _.BoostedGuildTiers.TIER_3, {
            progressBarFillWidthFactor: L,
            isProgressBarAnimationComplete: v,
            setShouldFireConfetti: D,
            shouldFireConfetti: M,
            tierMarkerAnimationPosition: y
        } = function(e) {
            let {
                fillFactor: t,
                guildBoostCount: n,
                premiumTier: i,
                isRevealed: a,
                useReducedMotion: o
            } = e, [l, u] = r.useState(o ? i : -1), [c, E] = r.useState(0 === n), [I, T] = r.useState(!1), f = r.useRef(!0), {
                widthFactor: S
            } = (0, s.useSpring)({
                from: {
                    widthFactor: 0
                },
                to: {
                    widthFactor: a ? t : 0
                },
                config: {
                    tension: 15,
                    friction: 7,
                    clamp: !0
                },
                immediate: o,
                onChange: function(e) {
                    let {
                        widthFactor: t
                    } = e;
                    for (let [e, n] of Object.entries(d.TierMarkerPositions).reverse())
                        if (t >= n - .02727272727272727) {
                            u(Number(e));
                            break
                        }
                },
                onStart: () => {
                    E(!1)
                },
                onRest: () => {
                    E(!0), i === _.BoostedGuildTiers.TIER_3 && (T(!0), window.setTimeout(() => {
                        f.current && T(!1)
                    }, 200))
                }
            });
            return r.useEffect(() => () => {
                f.current = !1
            }, []), {
                isProgressBarAnimationComplete: c,
                progressBarFillWidthFactor: S,
                setShouldFireConfetti: T,
                shouldFireConfetti: I,
                tierMarkerAnimationPosition: l
            }
        }({
            fillFactor: g ? 1 : O * (C - R) + R,
            isRevealed: T || n,
            useReducedMotion: n,
            premiumTier: t.premiumTier,
            guildBoostCount: t.premiumSubscriberCount
        });
        return r.useEffect(() => {
            let e = window.setTimeout(() => {
                f(!0)
            }, 250);
            return () => {
                window.clearTimeout(e)
            }
        }, []), (0, i.jsxs)("div", {
            className: E.progressBar,
            role: "progressbar",
            "aria-valuenow": t.premiumSubscriberCount,
            "aria-valuetext": t.premiumTier === _.BoostedGuildTiers.NONE ? c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
                numSubscriptionsApplied: t.premiumSubscriberCount
            }) : c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
                numSubscriptionsApplied: t.premiumSubscriberCount,
                tierName: (0, l.getTierName)(t.premiumTier, {
                    useLevels: !1
                })
            }),
            children: [(0, i.jsxs)("div", {
                className: E.progressBarScrubber,
                children: [(0, i.jsx)(s.animated.div, {
                    className: E.progressBarFill,
                    style: {
                        width: L.to({
                            range: [0, 1],
                            output: [0, 100]
                        }).to(e => "".concat(e, "%"))
                    }
                }), (0, i.jsx)("div", {
                    className: E.progressBarTrack
                })]
            }), I.map(e => (0, i.jsx)(d.default, {
                confettiTriggerRef: A,
                guild: t,
                isProgressBarAnimationComplete: v,
                setConfettiCount: h,
                setShouldFireConfetti: D,
                tier: e,
                tierMarkerAnimationPosition: y,
                children: (0, l.getTierName)(e)
            }, e)), (0, i.jsx)(u.default, {
                confettiCount: S,
                confettiTriggerRef: A,
                isFiring: M
            })]
        })
    }
}