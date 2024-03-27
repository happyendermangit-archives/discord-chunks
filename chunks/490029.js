function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connect: function() {
            return u
        },
        disconnect: function() {
            return d
        },
        send: function() {
            return E
        },
        setReceiveCommandHandler: function() {
            return c
        },
        setReceiveEventHandler: function() {
            return _
        }
    });
    var i = n("536285"),
        r = n("996106"),
        s = n("812967"),
        a = n("511405"),
        o = n("981631"),
        l = n("186901");

    function u() {
        i.default.connect()
    }

    function d() {
        i.default.disconnect()
    }

    function _(e, t) {
        if (!__OVERLAY__) throw new r.default({
            errorCode: o.RPCErrors.UNKNOWN_ERROR
        }, "called from wrong app context");
        i.default.subscribe(o.RPCEvents.OVERLAY, {
            token: t
        }, t => e((0, a.deserializeObject)(t)))
    }

    function c(e, t) {
        if (__OVERLAY__) throw new r.default({
            errorCode: o.RPCErrors.UNKNOWN_ERROR
        }, "called from wrong app context");
        s.default.setCommandHandler(o.RPCCommands.OVERLAY, {
            scope: l.RPC_PRIVATE_SCOPE,
            handler(n) {
                let {
                    args: i
                } = n;
                if (!t(i.token)) throw new r.default({
                    errorCode: o.RPCErrors.INVALID_TOKEN
                }, "Invalid RPC auth token provided");
                e((0, a.deserializeObject)(i))
            }
        }), s.default.setEventHandler(o.RPCEvents.OVERLAY, {
            scope: l.RPC_PRIVATE_SCOPE,
            handler(e) {
                let {
                    args: n
                } = e;
                if (!t(n.token)) throw new r.default({
                    errorCode: o.RPCErrors.INVALID_TOKEN
                }, "Invalid RPC auth token provided")
            }
        })
    }

    function E(e) {
        __OVERLAY__ ? i.default.request(o.RPCCommands.OVERLAY, (0, a.serializeObject)(e)) : s.default.dispatchToSubscriptions(o.RPCEvents.OVERLAY, {}, (0, a.serializeObject)(e))
    }
}