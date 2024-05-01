function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BrowserCheckoutState: function() {
            return o
        }
    });
    var i, r, a, s, o, l, u = n("442837"),
        d = n("570140");
    (i = o || (o = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.DONE = 2] = "DONE";
    let _ = 0,
        c = null;
    class E extends(l = u.default.Store) {
        get browserCheckoutState() {
            return _
        }
        get loadId() {
            return c
        }
    }
    s = "BrowserCheckoutStateStore", (a = "displayName") in(r = E) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new E(d.default, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(e) {
            _ = 1, c = e.loadId
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(e) {
            c === e.loadId && (_ = 2)
        }
    })
}