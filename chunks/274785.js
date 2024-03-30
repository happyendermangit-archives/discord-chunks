function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useBogoPromotion: function() {
            return h
        },
        useOutboundPromotions: function() {
            return y
        },
        useUnseenOutboundPromotions: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("629815"),
        a = n("208454"),
        u = n("830721"),
        s = n("552437"),
        l = n("106923"),
        c = n("141095"),
        f = n("489248"),
        d = n("868615");

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
        }(e, t) || p(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
    }

    function m() {
        var e = (0, o.useStateFromStoresArray)([f.default], function() {
                return f.default.outboundPromotions
            }),
            t = (0, o.useStateFromStores)([f.default], function() {
                return f.default.consumedInboundPromotionId
            });
        return r.useMemo(function() {
            return e.filter(function(e) {
                return e.id !== t
            })
        }, [e, t])
    }

    function y() {
        var e = (0, o.useStateFromStores)([f.default], function() {
                return f.default.lastFetchedActivePromotions
            }),
            t = m(),
            n = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getCurrentUser()
            }),
            y = (0, s.useHasActiveTrial)(),
            I = E(r.useState(!1), 2),
            h = I[0],
            O = I[1],
            T = E(r.useState([]), 2),
            S = T[0],
            v = T[1];
        r.useEffect(function() {
            null != e && i.default.wait(function() {
                return c.default.markOutboundPromotionsSeen()
            })
        }, [e]);
        var g = r.useCallback(function(e) {
                v(function(t) {
                    var n;
                    if (t.some(function(t) {
                            return t.promotion.id === e.promotion.id
                        })) return t;
                    return ((function(e) {
                        if (Array.isArray(e)) return _(e)
                    })(n = t) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(n) || p(n) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).concat([e])
                })
            }, []),
            A = (0, u.isPremiumExactly)(n, d.PremiumTypes.TIER_2);
        r.useEffect(function() {
            i.default.wait(function() {
                A && null == e && c.default.fetchActiveOutboundPromotions()
            })
        }, [e, A]), r.useEffect(function() {
            i.default.wait(function() {
                (0, l.fetchClaimedOutboundPromotionCodes)().then(function(e) {
                    v(e), O(!0)
                }).catch(function() {
                    v([]), O(!0)
                })
            })
        }, []);
        var b = {},
            N = !0,
            R = !1,
            C = void 0;
        try {
            for (var P, D = S[Symbol.iterator](); !(N = (P = D.next()).done); N = !0) {
                var L = P.value,
                    M = L.code;
                b[L.promotion.id] = M
            }
        } catch (e) {
            R = !0, C = e
        } finally {
            try {
                !N && null != D.return && D.return()
            } finally {
                if (R) throw C
            }
        }
        var U = new Set(t.map(function(e) {
                return e.id
            })),
            w = S.filter(function(e) {
                var t = e.promotion;
                return !U.has(t.id)
            });
        return {
            promotionsLoaded: h && (!A || null != e),
            activeOutboundPromotions: t.filter(function(e) {
                return (0, l.shouldShowOutboundPromotionOnPlatform)(e) && (!y || (0, l.isTrialUserEligibleToSeeOutboundPromotion)(e, b))
            }),
            claimedEndedOutboundPromotions: w.filter(function(e) {
                return (0, l.shouldShowOutboundPromotionOnPlatform)(e.promotion)
            }),
            claimedOutboundPromotionCodeMap: b,
            addClaimedOutboundPromotionCode: g
        }
    }

    function I() {
        var e = (0, o.useStateFromStores)([f.default], function() {
                return f.default.lastSeenOutboundPromotionStartDate
            }),
            t = (0, s.useHasActiveTrial)(),
            n = m();
        return r.useMemo(function() {
            if (null == e) return t ? n.filter(function(e) {
                return (0, l.isOutboundPromotionRedeemableByTrialUsers)(e)
            }) : n;
            var r = n.filter(function(t) {
                return new Date(t.startDate) > new Date(e)
            });
            return t ? r.filter(function(e) {
                return (0, l.isOutboundPromotionRedeemableByTrialUsers)(e)
            }) : r
        }, [n, e, t]).filter(function(e) {
            return (0, l.shouldShowOutboundPromotionOnPlatform)(e)
        })
    }

    function h() {
        return {
            promotion: (0, o.useStateFromStores)([f.default], function() {
                return f.default.bogoPromotion
            })
        }
    }
}