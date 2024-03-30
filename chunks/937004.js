function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaymentAuthenticationState: function() {
            return o
        },
        usePaymentAuthenticationPoller: function() {
            return _
        },
        usePaymentStepForAuthentication: function() {
            return d
        }
    });
    var r, o, i = n("470079"),
        a = n("898511"),
        u = n("945816"),
        s = n("950175"),
        l = n("950879"),
        c = n("710589"),
        f = n("963002");

    function d(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = arguments.length > 4 ? arguments[4] : void 0;
        i.useEffect(function() {
            null != e && (1 === t && e !== c.Step.AWAITING_AUTHENTICATION ? n(c.Step.AWAITING_AUTHENTICATION) : e === c.Step.AWAITING_AUTHENTICATION && (2 === t ? n(c.Step.REVIEW) : 3 === t && (r ? null != o ? o() : n(c.Step.REVIEW) : n(c.Step.CONFIRM))))
        }, [e, t, n, r, o])
    }(r = o || (o = {}))[r.PENDING = 1] = "PENDING", r[r.ERROR = 2] = "ERROR", r[r.NONE = 3] = "NONE";

    function _(e) {
        var t = (0, a.useStateFromStores)([f.default], function() {
                return f.default.awaitingPaymentId
            }),
            n = (0, a.useStateFromStores)([l.default], function() {
                return l.default.isConnected()
            }),
            r = i.useRef(new u.Interval);
        i.useEffect(function() {
            n || null == t || 1 !== e ? r.current.stop() : r.current.start(5e3, function() {
                return (0, s.fetchPayment)(t)
            })
        }, [t, e, n])
    }
}