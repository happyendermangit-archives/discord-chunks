function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("355467"),
        a = n("853872");

    function o(e) {
        let {
            isGift: t,
            activeSubscription: n
        } = e, {
            defaultPaymentSourceId: o,
            paymentSources: l,
            hasFetchedPaymentSources: u
        } = (0, r.useStateFromStoresObject)([a.default], () => ({
            defaultPaymentSourceId: a.default.defaultPaymentSourceId,
            paymentSources: a.default.paymentSources,
            hasFetchedPaymentSources: a.default.hasFetchedPaymentSources
        })), d = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [_, c] = i.useState(() => d(t, n, o));
        return i.useEffect(() => {
            u ? c(d(t, n, o)) : (0, s.fetchPaymentSources)()
        }, [u, t, n, o]), {
            paymentSources: l,
            hasPaymentSources: Object.keys(l).length > 0,
            paymentSourceId: _,
            setPaymentSourceId: c,
            hasFetchedPaymentSources: u
        }
    }
}