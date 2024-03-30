function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connect: function() {
            return l
        },
        disconnect: function() {
            return c
        },
        send: function() {
            return _
        },
        setReceiveCommandHandler: function() {
            return d
        },
        setReceiveEventHandler: function() {
            return f
        }
    });
    var r = n("23501"),
        o = n("829416"),
        i = n("593525"),
        a = n("23046"),
        u = n("281767"),
        s = n("902735");

    function l() {
        r.default.connect()
    }

    function c() {
        r.default.disconnect()
    }

    function f(e, t) {
        if (!__OVERLAY__) throw new o.default({
            errorCode: u.RPCErrors.UNKNOWN_ERROR
        }, "called from wrong app context");
        r.default.subscribe(u.RPCEvents.OVERLAY, {
            token: t
        }, function(t) {
            return e((0, a.deserializeObject)(t))
        })
    }

    function d(e, t) {
        if (__OVERLAY__) throw new o.default({
            errorCode: u.RPCErrors.UNKNOWN_ERROR
        }, "called from wrong app context");
        i.default.setCommandHandler(u.RPCCommands.OVERLAY, {
            scope: s.RPC_PRIVATE_SCOPE,
            handler: function(n) {
                var r = n.args;
                if (!t(r.token)) throw new o.default({
                    errorCode: u.RPCErrors.INVALID_TOKEN
                }, "Invalid RPC auth token provided");
                e((0, a.deserializeObject)(r))
            }
        }), i.default.setEventHandler(u.RPCEvents.OVERLAY, {
            scope: s.RPC_PRIVATE_SCOPE,
            handler: function(e) {
                if (!t(e.args.token)) throw new o.default({
                    errorCode: u.RPCErrors.INVALID_TOKEN
                }, "Invalid RPC auth token provided")
            }
        })
    }

    function _(e) {
        __OVERLAY__ ? r.default.request(u.RPCCommands.OVERLAY, (0, a.serializeObject)(e)) : i.default.dispatchToSubscriptions(u.RPCEvents.OVERLAY, {}, (0, a.serializeObject)(e))
    }
}