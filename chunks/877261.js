function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PaymentAuthenticationState: function() {
            return i
        },
        usePaymentStepForAuthentication: function() {
            return E
        },
        usePaymentAuthenticationPoller: function() {
            return d
        }
    });
    var u, i, r = n("884691"),
        l = n("446674"),
        a = n("862337"),
        o = n("850068"),
        s = n("619443"),
        c = n("85336"),
        S = n("758764");

    function E(t, e, n) {
        let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = arguments.length > 4 ? arguments[4] : void 0;
        r.useEffect(() => {
            null != t && (1 === e && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (2 === e ? n(c.Step.REVIEW) : 3 === e && (u ? null != i ? i() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
        }, [t, e, n, u, i])
    }(u = i || (i = {}))[u.PENDING = 1] = "PENDING", u[u.ERROR = 2] = "ERROR", u[u.NONE = 3] = "NONE";

    function d(t) {
        let e = (0, l.useStateFromStores)([S.default], () => S.default.awaitingPaymentId),
            n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
            u = r.useRef(new a.Interval);
        r.useEffect(() => {
            n || null == e || 1 !== t ? u.current.stop() : u.current.start(5e3, () => (0, o.fetchPayment)(e))
        }, [e, t, n])
    }
}