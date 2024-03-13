function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BrowserCheckoutState: function() {
            return r
        },
        default: function() {
            return c
        }
    });
    var i, r, u = n("446674"),
        l = n("913144");
    (i = r || (r = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.DONE = 2] = "DONE";
    let a = 0,
        o = null;
    class s extends u.default.Store {
        get browserCheckoutState() {
            return a
        }
        get loadId() {
            return o
        }
    }
    s.displayName = "BrowserCheckoutStateStore";
    var c = new s(l.default, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(t) {
            a = 1, o = t.loadId
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(t) {
            o === t.loadId && (a = 2)
        }
    })
}