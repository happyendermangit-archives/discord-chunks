function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("956067"),
        r = n("147913"),
        a = n("70956"),
        s = n("640795"),
        o = n("139674");
    let l = 4 * a.default.Millis.HOUR;
    class u extends r.default {
        _initialize() {
            setTimeout(() => i.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => o.default.getBlockedDomainList()), 1e3), setTimeout(() => (0, s.fetchBlockedDomainList)(), 10 * a.default.Millis.SECOND), this.intervalID = setInterval(s.fetchBlockedDomainList, l)
        }
        _terminate() {
            clearInterval(this.intervalID)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, i = void 0, (n = "intervalID") in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new u
}