function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return r
        }
    }), t("222007");
    var s = t("171718"),
        d = t("913144"),
        n = t("316272"),
        c = t("773336");
    class i extends n.default {
        _initialize() {
            d.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        _terminate() {
            d.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
        }
        constructor(...e) {
            super(...e), this.handleConnectionOpen = e => {
                ((0, c.isWindows)() || (0, c.isMac)()) && s.encryptAndStoreTokens()
            }
        }
    }
    var r = new i
}