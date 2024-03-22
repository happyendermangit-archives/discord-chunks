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
        c = t("773336");
    class i extends n.default {
        _initialize() {
            s.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        _terminate() {
            s.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        constructor(...e) {
            super(...e), this.handleConnectionOpen = e => {
                ((0, c.isWindows)() || (0, c.isMac)()) && d.encryptAndStoreTokens()
            }
        }
    }
    var r = new i
}