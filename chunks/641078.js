function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsEligibleForBogoPromotion: function() {
            return x
        },
        maybeFetchActiveBogoPromotion: function() {
            return v
        },
        isEligibleForBOGOAnnouncementModal: function() {
            return A
        },
        getBOGOPillCopy: function() {
            return U
        }
    });
    var r = n("866227"),
        i = n.n(r),
        l = n("65597"),
        a = n("151426"),
        s = n("850068"),
        o = n("174727"),
        u = n("619935"),
        c = n("10641"),
        d = n("915639"),
        f = n("697218"),
        m = n("521012"),
        _ = n("340412"),
        E = n("719923"),
        T = n("982457"),
        I = n("433947"),
        C = n("705337"),
        p = n("935566"),
        S = n("917247"),
        P = n("538620"),
        R = n("694540"),
        L = n("807345"),
        O = n("646718"),
        M = n("49111"),
        g = n("782340");

    function h(e) {
        var t, n, r;
        let {
            experimentEnabled: l,
            premiumSubscription: a,
            mostRecentSubscription: s
        } = e, o = !1, u = !1;
        if (null != s && s.status === M.SubscriptionStatusTypes.ENDED) {
            let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
                r = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
                l = null != r && E.default.getPremiumType(r) === O.PremiumTypes.TIER_2;
            u = null != e && l && e.add(10, "days").isAfter(i())
        }
        if (null != a) {
            let e = null === (r = (0, E.getPremiumPlanItem)(a)) || void 0 === r ? void 0 : r.planId,
                t = null != e && E.default.getPremiumType(e) === O.PremiumTypes.TIER_2,
                n = f.default.getCurrentUser(),
                i = (null == a ? void 0 : a.trialId) != null && E.default.isPremiumExactly(n, O.PremiumTypes.TIER_0);
            o = t || i
        }
        return !l || o || u
    }

    function x() {
        var e;
        let {
            paymentsBlocked: t
        } = u.default.useExperiment({
            location: "153d31_1"
        }, {
            autoTrackExposure: !1
        }), {
            promotion: n
        } = (0, R.useBogoPromotion)(), {
            enabled: r
        } = (0, p.default)(), {
            mostRecentSubscription: i,
            premiumSubscription: a
        } = (0, l.useStateFromStoresObject)([m.default], () => ({
            mostRecentSubscription: m.default.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: m.default.getPremiumTypeSubscription()
        })), s = (0, S.usePremiumTrialOffer)(), c = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
        (0, o.default)(c, 1e3, void 0, c + 2e3 < Date.now());
        let d = !h({
                experimentEnabled: r,
                premiumSubscription: a,
                mostRecentSubscription: i
            }),
            f = d && null == s && null != n && !t,
            _ = Date.now(),
            {
                enabled: E
            } = C.default.useExperiment({
                location: "153d31_2"
            }, {
                autoTrackExposure: f,
                disable: !f
            });
        return !(_ > c) && E
    }
    async function N() {
        var e;
        let t = f.default.getCurrentUser(),
            n = !(null == t ? void 0 : t.isClaimed()),
            {
                paymentsBlocked: r
            } = u.default.getCurrentConfig({
                location: "153d31_3"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: i
            } = (0, p.isBogoPromotionExperimentEnabled)(),
            {
                enabled: l
            } = C.default.getCurrentConfig({
                location: "153d31_4"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: a
            } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                location: "153d31_5"
            }, {
                autoTrackExposure: !1
            });
        if (n || r || !i || !a && !l) return !1;
        if (_.default.shouldFetchOffer() && await T.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
        !m.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(O.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !m.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
        let o = m.default.getMostRecentPremiumTypeSubscription(),
            c = m.default.getPremiumTypeSubscription();
        return !h({
            experimentEnabled: i,
            premiumSubscription: c,
            mostRecentSubscription: o
        })
    }
    async function v() {
        let e = await N();
        if (!e) return;
        let t = L.default.bogoPromotion;
        if (null != t) {
            let e = new Date(t.endDate).valueOf();
            if (e >= Date.now()) return
        }
        await (0, P.fetchActiveBogoPromotion)()
    }
    async function A() {
        let e = L.default.bogoPromotion,
            t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
            n = (0, c.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
            r = await N(),
            {
                enabled: i
            } = p.BogoPromotionExperiment.getCurrentConfig({
                location: "153d31_6"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: l
            } = I.BOGOAnnouncementModalExperiment.getCurrentConfig({
                location: "153d31_7"
            }, {
                autoTrackExposure: t && i && !n && r
            });
        return t && l && i && !n && r
    }

    function U() {
        let e = d.default.locale;
        switch (e) {
            case "de":
            case "es-ES":
            case "fr":
            case "hr":
            case "it":
            case "lt":
            case "nl":
            case "pl":
            case "pt-BR":
            case "ro":
            case "fi":
            case "sv-SE":
            case "tr":
            case "cs":
            case "el":
            case "bg":
            case "ru":
            case "uk":
            case "ja":
            case "ko":
                return g.default.Messages.NITRO_BADGE_TEXT;
            default:
                return g.default.Messages.BOGO_PILL
        }
    }
}