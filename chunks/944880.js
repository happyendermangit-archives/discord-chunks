function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("913527"),
        r = n.n(i),
        s = n("570140"),
        a = n("147913"),
        o = n("959546"),
        l = n("594174"),
        u = n("580130"),
        d = n("111361"),
        _ = n("470918"),
        c = n("595878"),
        E = n("513785"),
        I = n("106255"),
        T = n("474936"),
        f = n("735825");
    let S = null,
        h = !1,
        A = 0;

    function m(e) {
        let t = o.default.createFromServer(e.entitlement);
        (0, I.isPremiumTier2Entitlement)(t) ? (A = 0, N({
            forceRefresh: !0,
            retryOnFail: !0
        })) : (0, I.isValidTenureRewardEntitlement)(t) && null != E.default.getTenureRewardStatusForRewardId(t.skuId) && s.default.dispatch({
            type: "USER_TENURE_REWARD_STATUS_DELETE",
            tenureRewardIds: [t.skuId]
        })
    }

    function N() {
        let {
            forceRefresh: e = !1,
            retryOnFail: t = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        p();
        let n = u.default.getForApplication(T.PREMIUM_SUBSCRIPTION_APPLICATION),
            i = (0, I.getPremiumTier2Entitlement)(n),
            a = l.default.getCurrentUser();
        if (!(0, d.isPremiumExactly)(a, T.PremiumTypes.TIER_2) && null == i) {
            s.default.dispatch({
                type: "USER_TENURE_REWARD_STATUS_RESET"
            });
            return
        }
        if (!!(0, c.isUserEligibleForNitroTenureRewardCard)({
                location: "tenure_reward_manager"
            }))
            if (E.default.getFetchState() !== E.FetchState.FETCHED || !0 === e || function() {
                    var e;
                    let t = null !== (e = E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
                    return null != t && null != t.redeemable_at && 0 >= r()(t.redeemable_at).diff(r().utc(), "seconds")
                }()) O({
                retryOnFail: t
            });
            else {
                let e = u.default.getForApplication(T.PREMIUM_SUBSCRIPTION_APPLICATION);
                if (null == e) return;
                let t = Array.from(e).filter(e => null != E.default.getTenureRewardStatusForRewardId(e.skuId)).map(e => e.skuId);
                t.length > 0 && s.default.dispatch({
                    type: "USER_TENURE_REWARD_STATUS_DELETE",
                    tenureRewardIds: t
                })
            }
    }
    async function O() {
        let {
            retryOnFail: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !h && (h = !0, await _.syncUserTenureRewardStatus(), h = !1, s.default.wait(() => (function() {
            var e;
            let {
                retryOnFail: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (p(), E.default.getFetchState() !== E.FetchState.FETCHED || h) return;
            let n = null !== (e = E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
            if ((null == n ? void 0 : n.redeemable_at) == null && !1 === t) return;
            let i = (null == n ? void 0 : n.redeemable_at) != null ? new Date(n.redeemable_at).getTime() - Date.now() : null;
            null != i && i > 0 ? S = setTimeout(N, i) : function(e) {
                var t;
                let {
                    retryOnFail: n
                } = e;
                return null == (null !== (t = E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== t ? t : E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS)) && !0 === n && A < 1
            }({
                retryOnFail: t
            }) && (A += 1, S = setTimeout(() => N({
                forceRefresh: !0
            }), 5e3))
        })({
            retryOnFail: e
        })))
    }

    function p() {
        clearTimeout(S), S = null
    }

    function R() {
        p()
    }

    function C() {
        N()
    }
    class g extends a.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: C,
                CONNECTION_CLOSED: R,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => N(),
                ENTITLEMENT_CREATE: m,
                ENTITLEMENT_UPDATE: () => N(),
                ENTITLEMENT_DELETE: () => N(),
                LOGOUT: p
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new g
}