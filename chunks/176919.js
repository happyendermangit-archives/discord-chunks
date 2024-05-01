function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaymentAuthenticationState: function() {
            return r
        },
        usePaymentAuthenticationPoller: function() {
            return E
        },
        usePaymentStepForAuthentication: function() {
            return c
        }
    });
    var i, r, a = n("470079"),
        s = n("442837"),
        o = n("846519"),
        l = n("355467"),
        u = n("38618"),
        d = n("409813"),
        _ = n("505649");

    function c(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = arguments.length > 4 ? arguments[4] : void 0;
        a.useEffect(() => {
            null != e && (1 === t && e !== d.Step.AWAITING_AUTHENTICATION ? n(d.Step.AWAITING_AUTHENTICATION) : e === d.Step.AWAITING_AUTHENTICATION && (2 === t ? n(d.Step.REVIEW) : 3 === t && (i ? null != r ? r() : n(d.Step.REVIEW) : n(d.Step.CONFIRM))))
        }, [e, t, n, i, r])
    }(i = r || (r = {}))[i.PENDING = 1] = "PENDING", i[i.ERROR = 2] = "ERROR", i[i.NONE = 3] = "NONE";

    function E(e) {
        let t = (0, s.useStateFromStores)([_.default], () => _.default.awaitingPaymentId),
            n = (0, s.useStateFromStores)([u.default], () => u.default.isConnected()),
            i = a.useRef(new o.Interval);
        a.useEffect(() => {
            n || null == t || 1 !== e ? i.current.stop() : i.current.start(5e3, () => (0, l.fetchPayment)(t))
        }, [t, e, n])
    }
}