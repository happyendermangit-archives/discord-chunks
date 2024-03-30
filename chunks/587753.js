function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        discountOfferHasTier: function() {
            return d
        },
        hasUserDiscountExpired: function() {
            return f
        },
        usePremiumDiscountOffer: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("945816"),
        a = n("208454"),
        u = n("432683"),
        s = n("830721"),
        l = n("868615");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function d(e, t) {
        var n;
        if (null == e) return !1;
        return new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(function(e) {
            return l.SubscriptionPlanInfo[e].skuId
        })).has(t)
    }

    function _(e) {
        var t, n, l = (0, o.useStateFromStores)([u.default], function() {
            return u.default.getUserDiscountOffer(e)
        });
        var d = (t = r.useState(f(l)), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            _ = d[0],
            E = d[1],
            p = (0, o.useStateFromStores)([a.default], function() {
                return (0, s.isPremium)(a.default.getCurrentUser())
            });
        return r.useEffect(function() {
            if (null != l && null != l.expires_at) {
                var e = new i.Timeout,
                    t = function() {
                        var n = null != l.expires_at ? Date.parse(l.expires_at) - Date.now() : 0;
                        null == e || e.start(n, function() {
                            !_ && f(l) ? E(!0) : t()
                        })
                    };
                return t(),
                    function() {
                        return e.stop()
                    }
            }
        }, [_, l]), _ || p ? null : l
    }

    function E() {
        var e, t, n = _(l.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
            r = _(l.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID),
            o = _(l.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID),
            i = _(l.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID);
        return null !== (t = null !== (e = null != n ? n : r) && void 0 !== e ? e : o) && void 0 !== t ? t : i
    }
}