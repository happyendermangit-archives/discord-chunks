function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return r
        }
    }), t("222007");
    var d = t("171718"),
        s = t("913144"),
        n = t("316272"),
        i = t("773336");
    class c extends n.default {
        _initialize() {
            s.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        _terminate() {
            s.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        constructor(...e) {
            super(...e), this.handleConnectionOpen = e => {
                ((0, i.isWindows)() || (0, i.isMac)()) && d.default.encryptAndStoreTokens()
            }
        }
    }
    var r = new c
}