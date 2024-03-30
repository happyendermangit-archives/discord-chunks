function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("718017"),
        i = n("898511"),
        a = n("622780"),
        u = n("665199"),
        s = n("398844"),
        l = n("572257"),
        c = n("281767"),
        f = n("941504"),
        d = n("75107");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = [c.BoostedGuildTiers.NONE, c.BoostedGuildTiers.TIER_1, c.BoostedGuildTiers.TIER_2, c.BoostedGuildTiers.TIER_3];

    function m(e) {
        var t, n, _, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P = e.guild,
            D = (0, i.useStateFromStores)([a.default], function() {
                return a.default.useReducedMotion
            }),
            L = E(r.useState(!1), 2),
            M = L[0],
            U = L[1],
            w = E(r.useState(0), 2),
            k = w[0],
            G = w[1],
            B = r.useRef(null),
            j = Math.min(c.BoostedGuildTiers.TIER_3, P.premiumTier + 1),
            F = c.AppliedGuildBoostsRequiredForBoostedGuildTier[P.premiumTier],
            V = c.AppliedGuildBoostsRequiredForBoostedGuildTier[j],
            H = (P.premiumSubscriberCount - F) / (V - F),
            x = l.TierMarkerPositions[P.premiumTier],
            Y = l.TierMarkerPositions[j],
            W = P.premiumTier === c.BoostedGuildTiers.TIER_3;
        var K = (n = (t = {
                fillFactor: W ? 1 : H * (Y - x) + x,
                isRevealed: M || D,
                useReducedMotion: D,
                premiumTier: P.premiumTier,
                guildBoostCount: P.premiumSubscriberCount
            }).fillFactor, _ = t.guildBoostCount, m = t.premiumTier, y = t.isRevealed, I = t.useReducedMotion, O = (h = E(r.useState(I ? m : -1), 2))[0], T = h[1], v = (S = E(r.useState(0 === _), 2))[0], g = S[1], b = (A = E(r.useState(!1), 2))[0], N = A[1], R = r.useRef(!0), C = (0, o.useSpring)({
                from: {
                    widthFactor: 0
                },
                to: {
                    widthFactor: y ? n : 0
                },
                config: {
                    tension: 15,
                    friction: 7,
                    clamp: !0
                },
                immediate: I,
                onChange: function(e) {
                    var t = e.widthFactor,
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.entries(l.TierMarkerPositions).reverse()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = E(i.value, 2),
                                s = u[0],
                                c = u[1];
                            if (t >= c - .02727272727272727) {
                                T(Number(s));
                                break
                            }
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
                },
                onStart: function() {
                    g(!1)
                },
                onRest: function() {
                    g(!0), m === c.BoostedGuildTiers.TIER_3 && (N(!0), window.setTimeout(function() {
                        R.current && N(!1)
                    }, 200))
                }
            }).widthFactor, r.useEffect(function() {
                return function() {
                    R.current = !1
                }
            }, []), {
                isProgressBarAnimationComplete: v,
                progressBarFillWidthFactor: C,
                setShouldFireConfetti: N,
                shouldFireConfetti: b,
                tierMarkerAnimationPosition: O
            }),
            z = K.progressBarFillWidthFactor,
            X = K.isProgressBarAnimationComplete,
            q = K.setShouldFireConfetti,
            Q = K.shouldFireConfetti,
            J = K.tierMarkerAnimationPosition;
        return r.useEffect(function() {
            var e = window.setTimeout(function() {
                U(!0)
            }, 250);
            return function() {
                window.clearTimeout(e)
            }
        }, []), r.createElement("div", {
            className: d.progressBar,
            role: "progressbar",
            "aria-valuenow": P.premiumSubscriberCount,
            "aria-valuetext": P.premiumTier === c.BoostedGuildTiers.NONE ? f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
                numSubscriptionsApplied: P.premiumSubscriberCount
            }) : f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
                numSubscriptionsApplied: P.premiumSubscriberCount,
                tierName: (0, u.getTierName)(P.premiumTier, {
                    useLevels: !1
                })
            })
        }, r.createElement("div", {
            className: d.progressBarScrubber
        }, r.createElement(o.animated.div, {
            className: d.progressBarFill,
            style: {
                width: z.to({
                    range: [0, 1],
                    output: [0, 100]
                }).to(function(e) {
                    return "".concat(e, "%")
                })
            }
        }), r.createElement("div", {
            className: d.progressBarTrack
        })), p.map(function(e) {
            return r.createElement(l.default, {
                key: e,
                confettiTriggerRef: B,
                guild: P,
                isProgressBarAnimationComplete: X,
                setConfettiCount: G,
                setShouldFireConfetti: q,
                tier: e,
                tierMarkerAnimationPosition: J
            }, (0, u.getTierName)(e))
        }), r.createElement(s.default, {
            confettiCount: k,
            confettiTriggerRef: B,
            isFiring: Q
        }))
    }
}