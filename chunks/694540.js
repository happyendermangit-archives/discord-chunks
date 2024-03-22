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
        a = n("913144"),
        l = n("697218"),
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
            n = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser()),
            _ = (0, o.useHasActiveTrial)(),
            [E, I] = r.useState(!1),
            [T, p] = r.useState([]);
        r.useEffect(() => {
            null != e && a.default.wait(() => c.default.markOutboundPromotionsSeen())
        }, [e]);
        let S = r.useCallback(e => {
                p(t => t.some(t => {
                    let {
                        promotion: n
                    } = t;
                    return n.id === e.promotion.id
                }) ? t : [...t, e])
            }, []),
            P = (0, s.isPremiumExactly)(n, f.PremiumTypes.TIER_2);
        r.useEffect(() => {
            a.default.wait(() => {
                P && null == e && c.default.fetchActiveOutboundPromotions()
            })
        }, [e, P]), r.useEffect(() => {
            a.default.wait(() => {
                (0, u.fetchClaimedOutboundPromotionCodes)().then(e => {
                    p(e), I(!0)
                }).catch(() => {
                    p([]), I(!0)
                })
            })
        }, []);
        let R = {};
        for (let {
                code: e,
                promotion: t
            }
            of T) R[t.id] = e;
        let C = new Set(t.map(e => {
                let {
                    id: t
                } = e;
                return t
            })),
            O = T.filter(e => {
                let {
                    promotion: t
                } = e;
                return !C.has(t.id)
            }),
            g = E && (!P || null != e);
        return {
            promotionsLoaded: g,
            activeOutboundPromotions: t.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e) && (!_ || (0, u.isTrialUserEligibleToSeeOutboundPromotion)(e, R))),
            claimedEndedOutboundPromotions: O.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e.promotion)),
            claimedOutboundPromotionCodeMap: R,
            addClaimedOutboundPromotionCode: S
        }
    }

    function E() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.lastSeenOutboundPromotionStartDate),
            t = (0, o.useHasActiveTrial)(),
            n = m(),
            a = r.useMemo(() => {
                if (null == e) return t ? n.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : n;
                let r = n.filter(t => {
                    let {
                        startDate: n
                    } = t;
                    return new Date(n) > new Date(e)
                });
                return t ? r.filter(e => (0, u.isOutboundPromotionRedeemableByTrialUsers)(e)) : r
            }, [n, e, t]);
        return a.filter(e => (0, u.shouldShowOutboundPromotionOnPlatform)(e))
    }

    function I() {
        let e = (0, i.useStateFromStores)([d.default], () => d.default.bogoPromotion);
        return {
            promotion: e
        }
    }
}