function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        UserSettingsManager: function() {
            return r
        },
        default: function() {
            return a
        }
    }), E("860677"), E("222007");
    var t = E("689988"),
        o = E("845579");
    let n = !1;
    class r extends t.default {
        maybeShowChangeLanguageToast() {}
        setVerifyTimezone() {
            n = !0
        }
        ensureTimezoneUpdated() {
            if (!n) return;
            n = !1;
            let e = new Date().getTimezoneOffset();
            o.TimezoneOffset.getSetting() !== e && setImmediate(() => o.TimezoneOffset.updateSetting(e))
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => {
                    this.setVerifyTimezone(), this.maybeShowChangeLanguageToast()
                },
                OVERLAY_INITIALIZE: this.setVerifyTimezone,
                USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
            }
        }
    }
    var a = new r
}