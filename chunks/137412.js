function(e, t, a) {
    "use strict";
    a.r(t), a("47120");
    var d = a("213919"),
        n = a("570140"),
        c = a("317770"),
        i = a("358085");
    class o extends c.default {
        _initialize() {
            n.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        _terminate() {
            n.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        constructor(...e) {
            var t, a, n;
            super(...e), t = this, a = "handleConnectionOpen", n = e => {
                ((0, i.isWindows)() || (0, i.isMac)()) && d.encryptAndStoreTokens()
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