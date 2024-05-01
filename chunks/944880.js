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
        h = !1;

    function A(e) {
        let t = o.default.createFromServer(e.entitlement);
        (0, I.isPremiumTier2Entitlement)(t) ? m({
            forceRefresh: !0
        }): (0, I.isValidTenureRewardEntitlement)(t) && null != E.default.getTenureRewardStatusForRewardId(t.skuId) && s.default.dispatch({
            type: "USER_TENURE_REWARD_STATUS_DELETE",
            tenureRewardIds: [t.skuId]
        })
    }

    function m() {
        let {
            forceRefresh: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        p();
        let t = u.default.getForApplication(T.PREMIUM_SUBSCRIPTION_APPLICATION),
            n = (0, I.getPremiumTier2Entitlement)(t),
            i = (0, I.getTenureRewardEntitlement)([f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, f.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], t),
            a = l.default.getCurrentUser();
        if (!(0, d.isPremiumExactly)(a, T.PremiumTypes.TIER_2) && null == n) {
            s.default.dispatch({
                type: "USER_TENURE_REWARD_STATUS_RESET"
            });
            return
        }
        if (!!(0, c.isUserEligibleForNitroTenureRewardCard)({
                location: "tenure_reward_manager"
            }))
            if ((E.default.getFetchState() !== E.FetchState.FETCHED || !0 === e || function() {
                    var e;
                    let t = null !== (e = E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
                    return null != t && null != t.redeemable_at && 0 >= r()(t.redeemable_at).diff(r().utc(), "seconds")
                }() || function() {
                    let e = E.default.getState();
                    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 12096e5
                }()) && null == i) N();
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
    async function N() {
        !h && (h = !0, await _.syncUserTenureRewardStatus(), h = !1, s.default.wait(() => (function() {
            var e;
            if (p(), E.default.getFetchState() !== E.FetchState.FETCHED || h) return;
            let t = null !== (e = E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : E.default.getTenureRewardStatusForRewardId(f.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
            if ((null == t ? void 0 : t.redeemable_at) == null) return;
            let n = (null == t ? void 0 : t.redeemable_at) != null ? new Date(t.redeemable_at).getTime() - Date.now() : null;
            null != n && n > 0 && (S = setTimeout(m, n))
        })()))
    }

    function p() {
        clearTimeout(S), S = null
    }

    function O() {
        p()
    }

    function R() {
        m()
    }
    class C extends a.default {
        forceRefreshIfOutdated() {
            let e = E.default.getState();
            null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 864e5 && m({
                forceRefresh: !0
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: R,
                CONNECTION_CLOSED: O,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => m(),
                ENTITLEMENT_CREATE: A,
                ENTITLEMENT_UPDATE: () => m(),
                ENTITLEMENT_DELETE: () => m(),
                LOGOUT: p
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new C
}