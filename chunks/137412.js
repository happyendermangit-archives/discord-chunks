function(e, t, a) {
    "use strict";
    a.r(t), a("47120");
    var d = a("213919"),
        n = a("570140"),
        i = a("317770"),
        c = a("358085");
    class o extends i.default {
        _initialize() {
            n.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        _terminate() {
            n.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        constructor(...e) {
            var t, a, n;
            super(...e), t = this, a = "handleConnectionOpen", n = e => {
                ((0, c.isWindows)() || (0, c.isMac)()) && d.encryptAndStoreTokens()
            }, a in t ? Object.defineProperty(t, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = n
        }
    }
    t.default = new o
}