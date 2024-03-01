function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("446674"),
        r = n("913144"),
        s = n("49111");
    let a = 0;
    class o extends i.default.Store {
        getId() {
            return a
        }
    }
    o.displayName = "InstanceIdStore";
    var l = new o(r.default, {
        RPC_SERVER_READY: function(e) {
            let {
                port: t
            } = e;
            a = s.RPC_STARTING_PORT - t
        }
    })
}