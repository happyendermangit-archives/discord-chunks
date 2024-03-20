function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return P
        }
    }), E("222007");
    var t = E("866227"),
        o = E.n(t),
        n = E("913144"),
        r = E("689988"),
        a = E("984273"),
        i = E("697218"),
        I = E("437712"),
        s = E("764364"),
        T = E("544774"),
        S = E("908309"),
        N = E("53641"),
        O = E("485426"),
        A = E("646718"),
        R = E("511143");
    let l = null,
        u = !1,
        L = 0;

    function C(e) {
        let _ = a.default.createFromServer(e.entitlement),
            E = (0, O.isPremiumTier2Entitlement)(_);
        if (E) L = 0, c({
            forceRefresh: !0,
            retryOnFail: !0
        });
        else if ((0, O.isValidTenureRewardEntitlement)(_)) {
            let e = N.default.getTenureRewardStatusForRewardId(_.skuId);
            null != e && n.default.dispatch({
                type: "USER_TENURE_REWARD_STATUS_DELETE",
                tenureRewardIds: [_.skuId]
            })
        }
    }

    function c() {
        let {
            forceRefresh: e = !1,
            retryOnFail: _ = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        d();
        let E = I.default.getForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION),
            t = (0, O.getPremiumTier2Entitlement)(E),
            r = i.default.getCurrentUser(),
            a = (0, s.isPremiumExactly)(r, A.PremiumTypes.TIER_2);
        if (!a && null == t) {
            n.default.dispatch({
                type: "USER_TENURE_REWARD_STATUS_RESET"
            });
            return
        }
        let T = (0, S.isUserEligibleForNitroTenureRewardCard)({
            location: "tenure_reward_manager"
        });
        if (!T) return;
        let l = N.default.getFetchState() === N.FetchState.FETCHED;
        if (!l || !0 === e || function() {
                var e;
                let _ = null !== (e = N.default.getTenureRewardStatusForRewardId(R.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : N.default.getTenureRewardStatusForRewardId(R.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
                if (null == _ || null == _.redeemable_at) return !1;
                let E = o(_.redeemable_at).diff(o.utc(), "seconds");
                return E <= 0
            }()) D({
            retryOnFail: _
        });
        else {
            let e = I.default.getForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION);
            if (null == e) return;
            let _ = Array.from(e).filter(e => null != N.default.getTenureRewardStatusForRewardId(e.skuId)).map(e => e.skuId);
            _.length > 0 && n.default.dispatch({
                type: "USER_TENURE_REWARD_STATUS_DELETE",
                tenureRewardIds: _
            })
        }
    }
    async function D() {
        let {
            retryOnFail: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !u && (u = !0, await T.syncUserTenureRewardStatus(), u = !1, n.default.wait(() => (function() {
            var e;
            let {
                retryOnFail: _ = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            d();
            let E = N.default.getFetchState();
            if (E !== N.FetchState.FETCHED || u) return;
            let t = null !== (e = N.default.getTenureRewardStatusForRewardId(R.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : N.default.getTenureRewardStatusForRewardId(R.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
            if ((null == t ? void 0 : t.redeemable_at) == null && !1 === _) return;
            let o = (null == t ? void 0 : t.redeemable_at) != null ? new Date(t.redeemable_at).getTime() - Date.now() : null;
            null != o && o > 0 ? l = setTimeout(c, o) : function(e) {
                var _;
                let {
                    retryOnFail: E
                } = e, t = null !== (_ = N.default.getTenureRewardStatusForRewardId(R.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== _ ? _ : N.default.getTenureRewardStatusForRewardId(R.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS);
                return null == t && !0 === E && L < 1
            }({
                retryOnFail: _
            }) && (L += 1, l = setTimeout(() => c({
                forceRefresh: !0
            }), 5e3))
        })({
            retryOnFail: e
        })))
    }

    function d() {
        clearTimeout(l), l = null
    }

    function U() {
        d()
    }

    function M() {
        c()
    }
    class h extends r.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: M,
                CONNECTION_CLOSED: U,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => c(),
                ENTITLEMENT_CREATE: C,
                ENTITLEMENT_UPDATE: () => c(),
                ENTITLEMENT_DELETE: () => c(),
                LOGOUT: d
            }
        }
    }
    var P = new h
}