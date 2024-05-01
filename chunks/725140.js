function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("579806"),
        s = n("246946");
    let a = !1;

    function o() {
        var e;
        let t = null === r.default || void 0 === r.default ? void 0 : null === (e = r.default.window) || void 0 === e ? void 0 : e.setContentProtection;
        if (null == t) return;
        let n = s.default.enableContentProtection;
        n !== a && (t(n), a = n)
    }
    class l extends i.default {
        constructor() {
            var e, t, n;
            o(), super(), e = this, t = "stores", n = new Map().set(s.default, o), t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
    t.default = new l
}