function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("981631");
    let d = 0;
    class _ extends(a = o.default.Store) {
        getId() {
            return d
        }
    }
    s = "InstanceIdStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        RPC_SERVER_READY: function(e) {
            let {
                port: t
            } = e;
            d = u.RPC_STARTING_PORT - t
        }
    })
}