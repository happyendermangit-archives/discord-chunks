function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBOGOPillCopy: function() {
            return P
        },
        isEligibleForBOGOAnnouncementModal: function() {
            return y
        },
        maybeFetchActiveBogoPromotion: function() {
            return M
        },
        useIsEligibleForBogoPromotion: function() {
            return D
        }
    });
    var i = n("913527"),
        r = n.n(i),
        s = n("399606"),
        a = n("524437"),
        o = n("355467"),
        l = n("774078"),
        u = n("211242"),
        d = n("605236"),
        _ = n("706454"),
        c = n("594174"),
        E = n("78839"),
        I = n("295226"),
        T = n("74538"),
        f = n("316941"),
        S = n("59561"),
        h = n("388622"),
        A = n("61196"),
        m = n("639119"),
        N = n("748770"),
        O = n("725727"),
        p = n("1844"),
        R = n("474936"),
        C = n("981631"),
        g = n("689938");

    function L(e) {
        var t, n, i;
        let {
            experimentEnabled: s,
            premiumSubscription: a,
            mostRecentSubscription: o
        } = e, l = !1, u = !1;
        if (null != o && o.status === C.SubscriptionStatusTypes.ENDED) {
            let e = (null === (t = o.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? r()(o.metadata.ended_at) : null,
                i = null === (n = (0, T.getPremiumPlanItem)(o)) || void 0 === n ? void 0 : n.planId,
                s = null != i && T.default.getPremiumType(i) === R.PremiumTypes.TIER_2;
            u = null != e && s && e.add(10, "days").isAfter(r()())
        }
        if (null != a) {
            let e = null === (i = (0, T.getPremiumPlanItem)(a)) || void 0 === i ? void 0 : i.planId,
                t = null != e && T.default.getPremiumType(e) === R.PremiumTypes.TIER_2,
                n = c.default.getCurrentUser(),
                r = (null == a ? void 0 : a.trialId) != null && T.default.isPremiumExactly(n, R.PremiumTypes.TIER_0);
            l = t || r
        }
        return !s || l || u
    }

    function D() {
        var e;
        let {
            paymentsBlocked: t
        } = u.default.useExperiment({
            location: "153d31_1"
        }, {
            autoTrackExposure: !1
        }), {
            promotion: n
        } = (0, O.useBogoPromotion)(), {
            enabled: i
        } = (0, A.default)(), {
            mostRecentSubscription: r,
            premiumSubscription: a
        } = (0, s.useStateFromStoresObject)([E.default], () => ({
            mostRecentSubscription: E.default.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: E.default.getPremiumTypeSubscription()
        })), o = (0, m.usePremiumTrialOffer)(), d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
        (0, l.default)(d, 1e3, void 0, d + 2e3 < Date.now());
        let _ = !L({
                experimentEnabled: i,
                premiumSubscription: a,
                mostRecentSubscription: r
            }) && null == o && null != n && !t,
            c = Date.now(),
            {
                enabled: I
            } = h.default.useExperiment({
                location: "153d31_2"
            }, {
                autoTrackExposure: _,
                disable: !_
            });
        return !(c > d) && I
    }
    async function v() {
        var e;
        let t = c.default.getCurrentUser(),
            n = !(null == t ? void 0 : t.isClaimed()),
            {
                paymentsBlocked: i
            } = u.default.getCurrentConfig({
                location: "153d31_3"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: r
            } = (0, A.isBogoPromotionExperimentEnabled)(),
            {
                enabled: s
            } = h.default.getCurrentConfig({
                location: "153d31_4"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: a
            } = S.BOGOAnnouncementModalExperiment.getCurrentConfig({
                location: "153d31_5"
            }, {
                autoTrackExposure: !1
            });
        if (n || i || !r || !a && !s) return !1;
        if (I.default.shouldFetchOffer() && await f.default.fetchUserTrialOffer(), I.default.hasFetchedOffer() && I.default.hasAnyUnexpiredOffer()) return !1;
        !E.default.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(R.PremiumSubscriptionSKUs.TIER_2)) && await (0, o.fetchMostRecentSubscription)(), !E.default.hasFetchedSubscriptions() && await (0, o.fetchSubscriptions)();
        let l = E.default.getMostRecentPremiumTypeSubscription();
        return !L({
            experimentEnabled: r,
            premiumSubscription: E.default.getPremiumTypeSubscription(),
            mostRecentSubscription: l
        })
    }
    async function M() {
        if (!await v()) return;
        let e = p.default.bogoPromotion;
        if (!(null != e && new Date(e.endDate).valueOf() >= Date.now())) await (0, N.fetchActiveBogoPromotion)()
    }
    async function y() {
        let e = p.default.bogoPromotion,
            t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
            n = (0, d.isDismissibleContentDismissed)(a.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
            i = await v(),
            {
                enabled: r
            } = A.BogoPromotionExperiment.getCurrentConfig({
                location: "153d31_6"
            }, {
                autoTrackExposure: !1
            }),
            {
                enabled: s
            } = S.BOGOAnnouncementModalExperiment.getCurrentConfig({
                location: "153d31_7"
            }, {
                autoTrackExposure: t && r && !n && i
            });
        return t && s && r && !n && i
    }

    function P() {
        switch (_.default.locale) {
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