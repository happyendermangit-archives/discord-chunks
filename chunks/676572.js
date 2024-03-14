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
        l = s;
    class a extends r.default.Store {
        initialize() {
            l = s
        }
        getState() {
            return l
        }
        shouldFetchPremiumLikelihood() {
            return !l.isFetching && !l.fetched
        }
    }
    a.displayName = "UserPremiumLikelihoodStore";
    var u = new a(n.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
            l.isFetching = !0
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
            let {
                premiumLikelihood: t
            } = e;
            l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
            l.isFetching = !1
        },
        LOGOUT: function() {
            l.premiumLikelihood = void 0
        }
    })
}