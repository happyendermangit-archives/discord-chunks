function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        s = n("885110");
    class a extends r.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "stores", i = new Map().set(s.default, o), n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }

    function o() {
        i.default.dispatch({
            type: "SELF_PRESENCE_STORE_UPDATE",
            status: s.default.getStatus(),
            activities: s.default.getActivities()
        })
    }
    t.default = new a
}