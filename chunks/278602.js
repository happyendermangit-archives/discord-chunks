function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("913527"),
        i = n.n(o),
        a = n("898511"),
        u = n("242880"),
        s = n("784184"),
        l = n("950175"),
        c = n("482644"),
        f = n("428920"),
        d = n("283248"),
        _ = n("247164"),
        E = n("412791"),
        p = n("830721"),
        m = n("276328"),
        y = n("281767"),
        I = n("868615"),
        h = n("941504"),
        O = n("139267");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var S = "premiumRetentionEmojiPickerNotice",
        v = u.Storage.get(S);
    t.default = function(e) {
        var t, n, o = e.closePopout,
            g = e.channel;
        var A = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            b = A[0],
            N = A[1],
            R = (0, a.useStateFromStoresObject)([f.default], function() {
                return {
                    subscription: f.default.getPremiumSubscription(),
                    hasFetchedSubscriptions: f.default.hasFetchedSubscriptions()
                }
            }),
            C = R.subscription,
            P = R.hasFetchedSubscriptions;
        if (r.useEffect(function() {
                !P && (0, l.fetchSubscriptions)()
            }, [P]), null == C || !(0, p.isSubscriptionStatusFailedPayment)(C.status) || b) return null;
        var D = C.status === y.SubscriptionStatusTypes.PAST_DUE ? (0, p.getBillingGracePeriodDaysAndExpiresDate)(C).expiresDate : i()(C.currentPeriodStart).add(I.MAX_ACCOUNT_HOLD_DAYS),
            L = "".concat(C.id, ":").concat(D.toISOString());
        if (v === L) return null;
        var M = p.default.getPremiumType(C.planId) === I.PremiumTypes.TIER_0 ? d.GradientCssUrls.PREMIUM_TIER_0 : p.default.getPremiumType(C.planId) === I.PremiumTypes.TIER_1 ? d.GradientCssUrls.PREMIUM_TIER_1 : d.GradientCssUrls.PREMIUM_TIER_2;
        return r.createElement("div", {
            className: O.premiumRetentionNotice
        }, r.createElement(E.default, {
            className: O.premiumRetentionNoticeIcon,
            color: M
        }), r.createElement("div", {
            className: O.premiumRetentionNoticeContent
        }, r.createElement(s.Text, {
            variant: "text-xs/normal"
        }, h.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
            planName: p.default.getDisplayPremiumType(C.planId),
            endsAt: D
        })), r.createElement("div", null, r.createElement(s.Anchor, {
            onClick: function() {
                (0, m.trackPremiumSettingsPaneOpened)(g), o(), c.default.open(y.UserSettingsSections.PREMIUM)
            }
        }, h.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION))), r.createElement(s.Clickable, {
            onClick: function() {
                u.Storage.set(S, L), v = L, N(!0)
            }
        }, r.createElement(_.default, {
            className: O.premiumRetentionNoticeClose
        })))
    }
}