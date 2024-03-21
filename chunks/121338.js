function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connect: function() {
            return u
        },
        disconnect: function() {
            return d
        },
        setReceiveEventHandler: function() {
            return c
        },
        setReceiveCommandHandler: function() {
            return _
        },
        send: function() {
            return f
        }
    });
    var i = n("43982"),
        s = n("861309"),
        r = n("261131"),
        a = n("828777"),
        o = n("49111"),
        l = n("492249");

    function u() {
        i.default.connect()
    }

    function d() {
        i.default.disconnect()
    }

    function c(e, t) {
        if (!__OVERLAY__) throw new s.default({
            errorCode: o.RPCErrors.UNKNOWN_ERROR
        }, "called from wrong app context");
        i.default.subscribe(o.RPCEvents.OVERLAY, {
            token: t
        }, t => e((0, a.deserializeObject)(t)))
    }

    function _(e, t) {
        if (__OVERLAY__) throw new s.default({
            errorCode: o.RPCErrors.UNKNOWN_ERROR
        }, "called from wrong app context");
        r.default.setCommandHandler(o.RPCCommands.OVERLAY, {
            scope: l.RPC_PRIVATE_SCOPE,
            handler(n) {
                let {
                    args: i
                } = n;
                if (!t(i.token)) throw new s.default({
                    errorCode: o.RPCErrors.INVALID_TOKEN
                }, "Invalid RPC auth token provided");
                e((0, a.deserializeObject)(i))
            }
        }), r.default.setEventHandler(o.RPCEvents.OVERLAY, {
            scope: l.RPC_PRIVATE_SCOPE,
            handler(e) {
                let {
                    args: n
                } = e;
                if (!t(n.token)) throw new s.default({
                    errorCode: o.RPCErrors.INVALID_TOKEN
                }, "Invalid RPC auth token provided")
            }
        })
    }

    function f(e) {
        __OVERLAY__ ? i.default.request(o.RPCCommands.OVERLAY, (0, a.serializeObject)(e)) : r.default.dispatchToSubscriptions(o.RPCEvents.OVERLAY, {}, (0, a.serializeObject)(e))
    }
}