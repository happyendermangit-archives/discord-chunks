function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("160679"),
        a = n("446674"),
        r = n("913144"),
        l = n("773336"),
        i = n("586391");
    let o = null,
        u = "underage";
    class d extends a.default.Store {
        isUnderageAnonymous() {
            if (l.isPlatformEmbedded) {
                if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) return !0
            } else {
                let e = s.parse(document.cookie)[u];
                return null != e
            }
            return !1
        }
    }
    d.displayName = "AgeGateStore";
    var c = new d(r.default, {
        AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
            o = Date.now(), document.cookie = "".concat(u, "=1;path=/")
        },
        LOGIN_SUCCESS: function() {
            o = null, document.cookie = "".concat(u, "=1;path=/;max-age=0")
        }
    })
}