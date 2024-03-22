function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsEligibleForBogoPromotion: function() {
            return N
        },
        maybeFetchActiveBogoPromotion: function() {
            return x
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
        a = n("65597"),
        l = n("151426"),
        s = n("850068"),
        o = n("174727"),
        u = n("619935"),
        c = n("10641"),
        d = n("915639"),
        f = n("697218"),
        m = n("521012"),
        _ = n("340412"),
        E = n("719923"),
        I = n("982457"),
        T = n("433947"),
        p = n("705337"),
        S = n("935566"),
        P = n("917247"),
        R = n("538620"),
        C = n("694540"),
        O = n("807345"),
        g = n("646718"),
        M = n("49111"),
        h = n("782340");

    function L(e) {
        var t, n, r;
        let {
            experimentEnabled: a,
            premiumSubscription: l,
            mostRecentSubscription: s
        } = e, o = !1, u = !1;
        if (null != s && s.status === M.SubscriptionStatusTypes.ENDED) {
            let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i(s.metadata.ended_at) : null,
                r = null === (n = (0, E.getPremiumPlanItem)(s)) || void 0 === n ? void 0 : n.planId,
                a = null != r && E.default.getPremiumType(r) === g.PremiumTypes.TIER_2;
            u = null != e && a && e.add(10, "days").isAfter(i())
        }
        if (null != l) {
            let e = null === (r = (0, E.getPremiumPlanItem)(l)) || void 0 === r ? void 0 : r.planId,
                t = null != e && E.default.getPremiumType(e) === g.PremiumTypes.TIER_2,
                n = f.default.getCurrentUser(),
                i = (null == l ? void 0 : l.trialId) != null && E.default.isPremiumExactly(n, g.PremiumTypes.TIER_0);
            o = t || i
        }
        return !a || o || u
    }

    function N() {
        var e;
        let {
            paymentsBlocked: t
        } = u.default.useExperiment({
            location: "153d31_1"
        }, {
            autoTrackExposure: !1
        }), {
            promotion: n
        } = (0, C.useBogoPromotion)(), {
            enabled: r
        } = (0, S.default)(), {
            mostRecentSubscription: i,
            premiumSubscription: l
        } = (0, a.useStateFromStoresObject)([m.default], () => ({
            mostRecentSubscription: m.default.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: m.default.getPremiumTypeSubscription()
        })), s = (0, P.usePremiumTrialOffer)(), c = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
        (0, o.default)(c, 1e3, void 0, c + 2e3 < Date.now());
        let d = !L({
                experimentEnabled: r,
                premiumSubscription: l,
                mostRecentSubscription: i
            }),
            f = d && null == s && null != n && !t,
            _ = Date.now(),
            {
                enabled: E
            } = p.default.useExperiment({
                location: "153d31_2"
            }, {
                autoTrackExposure: f,
                disable: !f
            });
        return !(_ > c) && E
    }
    async function v() {
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
            } = (0, S.isBogoPromotionExperimentEnabled)(),
            {
                enabled: a
            } = p.default.getCurrentConfig({
                location: "153d31_4"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: l
            } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                location: "153d31_5"
            }, {
                autoTrackExposure: !1
            });
        if (n || r || !i || !l && !a) return !1;
        if (_.default.shouldFetchOffer() && await I.default.fetchUserTrialOffer(), _.default.hasFetchedOffer() && _.default.hasAnyUnexpiredOffer()) return !1;
        !m.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(g.PremiumSubscriptionSKUs.TIER_2)) && await (0, s.fetchMostRecentSubscription)(), !m.default.hasFetchedSubscriptions() && await (0, s.fetchSubscriptions)();
        let o = m.default.getMostRecentPremiumTypeSubscription(),
            c = m.default.getPremiumTypeSubscription();
        return !L({
            experimentEnabled: i,
            premiumSubscription: c,
            mostRecentSubscription: o
        })
    }
    async function x() {
        let e = await v();
        if (!e) return;
        let t = O.default.bogoPromotion;
        if (null != t) {
            let e = new Date(t.endDate).valueOf();
            if (e >= Date.now()) return
        }
        await (0, R.fetchActiveBogoPromotion)()
    }
    async function A() {
        let e = O.default.bogoPromotion,
            t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
            n = (0, c.isDismissibleContentDismissed)(l.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
            r = await v(),
            {
                enabled: i
            } = S.BogoPromotionExperiment.getCurrentConfig({
                location: "153d31_6"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: a
            } = T.BOGOAnnouncementModalExperiment.getCurrentConfig({
                location: "153d31_7"
            }, {
                autoTrackExposure: t && i && !n && r
            });
        return t && a && i && !n && r
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
                return h.default.Messages.NITRO_BADGE_TEXT;
            default:
                return h.default.Messages.BOGO_PILL
        }
    }
}