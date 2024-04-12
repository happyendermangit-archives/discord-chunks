function(e, t, n) {
    "use strict";
    n.r(t);
    var s, a, i, r, l = n("973361"),
        o = n("442837"),
        u = n("570140"),
        d = n("358085"),
        c = n("723359");
    let f = null,
        h = "underage";
    class g extends(r = o.default.Store) {
        isUnderageAnonymous() {
            return d.isPlatformEmbedded ? !!(null != f && f + c.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) || !1 : null != l.parse(document.cookie)[h]
        }
    }
    i = "AgeGateStore", (a = "displayName") in(s = g) ? Object.defineProperty(s, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = i, t.default = new g(u.default, {
        AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
            f = Date.now(), document.cookie = "".concat(h, "=1;path=/")
        },
        LOGIN_SUCCESS: function() {
            f = null, document.cookie = "".concat(h, "=1;path=/;max-age=0")
        }
    })
}