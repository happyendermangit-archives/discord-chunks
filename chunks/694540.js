function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOutboundPromotions: function() {
            return _
        },
        useUnseenOutboundPromotions: function() {
            return E
        },
        useBogoPromotion: function() {
            return I
        }
    }), n("222007");
    var r = n("884691"),
        i = n("446674"),
        l = n("913144"),
        a = n("697218"),
        s = n("719923"),
        o = n("324878"),
        u = n("44678"),
        c = n("538620"),
        d = n("807345"),
        f = n("646718");

    function m() {
        let e = (0, i.useStateFromStoresArray)([d.default], () => d.default.outboundPromotions),
            t = (0, i.useStateFromStores)([d.default], () => d.default.consumedInboundPromotionId),
            n = r.useMemo(() => e.filter(e => {
                let {
                    id: n
                } = e;
                return n !== t
            }), [e, t]);
        return n
    }

    function _() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.lastFetchedActivePromotions),
            t = m(),
            n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
            _ = (0, o.useHasActiveTrial)(),
            [E, I] = r.useState(!1),
            [T, C] = r.useState([]);
        r.useEffect(() => {
            null != e && l.default.wait(() => c.default.markOutboundPromotionsSeen())
        }, [e]);
        let p = r.useCallback(e => {
                C(t => t.some(t => {
                    let {
                        promotion: n
                    } = t;
                    return n.id === e.promotion.id
                }) ? t : [...t, e])
            }, []),
            S = (0, s.isPremiumExactly)(n, f.PremiumTypes.TIER_2);
        r.useEffect(() => {
            l.default.wait(() => {
                S && null == e && c.default.fetchActiveOutboundPromotions()
            })
        }, [e, S]), r.useEffect(() => {
            l.default.wait(() => {
                (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                    C(e), I(!0)
                }).catch(() => {
                    C([]), I(!0)
                })
            })
        }, []);
        let P = {};
        for (let {
                code: e,
                promotion: t
            }
            of T) P[t.id] = e;
        let R = new Set(t.map(e => {
                let {
                    id: t
                } = e;
                return t
            })),
            O = T.filter(e => {
                let {
                    promotion: t
                } = e;
                return !R.has(t.id)
            }),
            L = E && (!S || null != e);
        return {
            promotionsLoaded: L,
            activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, P))),
            claimedEndedOutboundPromotions: O.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
            claimedOutboundPromotionCodeMap: P,
            addClaimedOutboundPromotionCode: p
        }
    }

    function E() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
            t = (0, o.useHasActiveTrial)(),
            n = m(),
            l = r.useMemo(() => {
                if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
                let r = n.filter(t => {
                    let {
                        startDate: n
                    } = t;
                    return new Date(n) > new Date(e)
                });
                return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r
            }, [n, e, t]);
        return l.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
    }

    function I() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.bogoPromotion);
        return {
            promotion: e
        }
    }
}