function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PaymentAuthenticationState: function() {
            return u
        },
        usePaymentStepForAuthentication: function() {
            return E
        },
        usePaymentAuthenticationPoller: function() {
            return d
        }
    });
    var i, u, r = n("884691"),
        l = n("446674"),
        a = n("862337"),
        o = n("850068"),
        s = n("619443"),
        c = n("85336"),
        S = n("758764");

    function E(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = arguments.length > 4 ? arguments[4] : void 0;
        r.useEffect(() => {
            null != t && (1 === e && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (2 === e ? n(c.Step.REVIEW) : 3 === e && (i ? null != u ? u() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
        }, [t, e, n, i, u])
    }(i = u || (u = {}))[i.PENDING = 1] = "PENDING", i[i.ERROR = 2] = "ERROR", i[i.NONE = 3] = "NONE";

    function d(t) {
        let e = (0, l.useStateFromStores)([S.default], () => S.default.awaitingPaymentId),
            n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
            i = r.useRef(new a.Interval);
        r.useEffect(() => {
            n || null == e || 1 !== t ? i.current.stop() : i.current.start(5e3, () => (0, o.fetchPayment)(e))
        }, [e, t, n])
    }
}