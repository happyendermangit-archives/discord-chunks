function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        useFetchPurchases: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("399606"),
        s = n("634894"),
        a = n("335131"),
        o = n("597688"),
        l = n("337679"),
        u = n("1870");

    function d() {
        let e = "useFetchPurchases";
        (0, s.useTriggerDebuggingAA)({
            location: e + " auto on",
            autoTrackExposure: !0
        }), (0, s.useTriggerDebuggingAA)({
            location: e + " auto off",
            autoTrackExposure: !1
        });
        let [t, n, o, d, _] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]), {
            shouldFakePurchaseSuccessFlowLocally: c
        } = (0, l.default)({
            location: "useFetchPurchases"
        });
        return (0, i.useEffect)(() => {
            (!c || !(_.size > 0)) && (0, a.fetchCollectiblesPurchases)()
        }, [c]), {
            isClaiming: n,
            fetchError: o,
            claimError: d,
            isFetching: t,
            purchases: _
        }
    }

    function _(e) {
        var t;
        let n = "useFetchCollectiblesCategoriesAndPurchases";
        (0, s.useTriggerDebuggingAA)({
            location: n + " auto on",
            autoTrackExposure: !0
        }), (0, s.useTriggerDebuggingAA)({
            location: n + " auto off",
            autoTrackExposure: !1
        });
        let {
            isFetching: l,
            categories: u,
            error: _
        } = function(e) {
            let t = "useMaybeFetchCollectiblesCategories";
            (0, s.useTriggerDebuggingAA)({
                location: t + " auto on",
                autoTrackExposure: !0
            }), (0, s.useTriggerDebuggingAA)({
                location: t + " auto off",
                autoTrackExposure: !1
            });
            let [n, l, u, d] = (0, r.useStateFromStoresArray)([o.default], () => {
                var e;
                return [o.default.isFetchingCategories, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
            });
            return (0, i.useEffect)(() => {
                !(n || l || Date.now() - u < 6e5) && (0, a.fetchCollectiblesCategories)(e)
            }, [n, u, l, e]), {
                isFetching: n,
                categories: d,
                error: l
            }
        }(e), {
            isClaiming: c,
            fetchError: E,
            claimError: I,
            isFetching: T,
            purchases: f
        } = d();
        return {
            isFetching: l || T,
            isFetchingCategories: l,
            isFetchingPurchases: T,
            isClaiming: c,
            categories: u,
            purchases: f,
            error: null !== (t = null != _ ? _ : E) && void 0 !== t ? t : I
        }
    }
}