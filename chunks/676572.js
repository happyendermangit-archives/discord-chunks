function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return u
        }
    });
    var r = i("446674"),
        n = i("913144");
    let s = {
            premiumLikelihood: void 0,
            isFetching: !1,
            fetched: !1
        },
        a = s;
    class l extends r.default.Store {
        initialize() {
            a = s
        }
        getState() {
            return a
        }
        shouldFetchPremiumLikelihood() {
            return !a.isFetching && !a.fetched
        }
    }
    l.displayName = "UserPremiumLikelihoodStore";
    var u = new l(n.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
            a.isFetching = !0
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
            let {
                premiumLikelihood: t
            } = e;
            a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
            a.isFetching = !1
        },
        LOGOUT: function() {
            a.premiumLikelihood = void 0
        }
    })
}