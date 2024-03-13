function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PaymentAuthenticationState: function() {
            return r
        },
        usePaymentStepForAuthentication: function() {
            return S
        },
        usePaymentAuthenticationPoller: function() {
            return E
        }
    });
    var i, r, u = n("884691"),
        l = n("446674"),
        a = n("862337"),
        o = n("850068"),
        s = n("619443"),
        c = n("85336"),
        d = n("758764");

    function S(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = arguments.length > 4 ? arguments[4] : void 0;
        u.useEffect(() => {
            null != t && (1 === e && t !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : t === c.Step.AWAITING_AUTHENTICATION && (2 === e ? n(c.Step.REVIEW) : 3 === e && (i ? null != r ? r() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
        }, [t, e, n, i, r])
    }(i = r || (r = {}))[i.PENDING = 1] = "PENDING", i[i.ERROR = 2] = "ERROR", i[i.NONE = 3] = "NONE";

    function E(t) {
        let e = (0, l.useStateFromStores)([d.default], () => d.default.awaitingPaymentId),
            n = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()),
            i = u.useRef(new a.Interval);
        u.useEffect(() => {
            n || null == e || 1 !== t ? i.current.stop() : i.current.start(5e3, () => (0, o.fetchPayment)(e))
        }, [e, t, n])
    }
}