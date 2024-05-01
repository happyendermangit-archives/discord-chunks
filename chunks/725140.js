function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("579806"),
        a = n("246946");
    let s = !1;

    function o() {
        var e;
        let t = null === r.default || void 0 === r.default ? void 0 : null === (e = r.default.window) || void 0 === e ? void 0 : e.setContentProtection;
        if (null == t) return;
        let n = a.default.enableContentProtection;
        n !== s && (t(n), s = n)
    }
    class l extends i.default {
        constructor() {
            var e, t, n;
            o(), super(), e = this, t = "stores", n = new Map().set(a.default, o), t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
    t.default = new l
}