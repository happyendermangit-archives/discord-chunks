function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useBogoPromotion: function() {
            return f
        },
        useOutboundPromotions: function() {
            return I
        },
        useUnseenOutboundPromotions: function() {
            return T
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("570140"),
        a = n("594174"),
        o = n("74538"),
        l = n("775412"),
        u = n("443852"),
        d = n("748770"),
        _ = n("1844"),
        c = n("474936");

    function E() {
        let e = (0, r.useStateFromStoresArray)([_.default], () => _.default.outboundPromotions),
            t = (0, r.useStateFromStores)([_.default], () => _.default.consumedInboundPromotionId);
        return i.useMemo(() => e.filter(e => {
            let {
                id: n
            } = e;
            return n !== t
        }), [e, t])
    }

    function I() {
        let e = (0, r.useStateFromStores)([_.default], () => _.default.lastFetchedActivePromotions),
            t = E(),
            n = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
            I = (0, l.useHasActiveTrial)(),
            [T, f] = i.useState(!1),
            [S, h] = i.useState([]);
        i.useEffect(() => {
            null != e && s.default.wait(() => d.default.markOutboundPromotionsSeen())
        }, [e]);
        let A = i.useCallback(e => {
                h(t => t.some(t => {
                    let {
                        promotion: n
                    } = t;
                    return n.id === e.promotion.id
                }) ? t : [...t, e])
            }, []),
            m = (0, o.isPremiumExactly)(n, c.PremiumTypes.TIER_2);
        i.useEffect(() => {
            s.default.wait(() => {
                m && null == e && d.default.fetchActiveOutboundPromotions()
            })
        }, [e, m]), i.useEffect(() => {
            s.default.wait(() => {
                (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                    h(e), f(!0)
                }).catch(() => {
                    h([]), f(!0)
                })
            })
        }, []);
        let N = {};
        for (let {
                code: e,
                promotion: t
            }
            of S) N[t.id] = e;
        let O = new Set(t.map(e => {
                let {
                    id: t
                } = e;
                return t
            })),
            p = S.filter(e => {
                let {
                    promotion: t
                } = e;
                return !O.has(t.id)
            });
        return {
            promotionsLoaded: T && (!m || null != e),
            activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!I || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, N))),
            claimedEndedOutboundPromotions: p.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
            claimedOutboundPromotionCodeMap: N,
            addClaimedOutboundPromotionCode: A
        }
    }

    function T() {
        let e = (0, r.useStateFromStores)([_.default], () => _.default.lastSeenOutboundPromotionStartDate),
            t = (0, l.useHasActiveTrial)(),
            n = E();
        return i.useMemo(() => {
            if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
            let i = n.filter(t => {
                let {
                    startDate: n
                } = t;
                return new Date(n) > new Date(e)
            });
            return t ? i.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : i
        }, [n, e, t]).filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
    }

    function f() {
        return {
            promotion: (0, r.useStateFromStores)([_.default], () => _.default.bogoPromotion)
        }
    }
}