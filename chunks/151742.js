function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserSettingsManager: function() {
            return s
        }
    }), n("177593"), n("47120");
    var i = n("147913"),
        r = n("695346");
    let a = !1;
    class s extends i.default {
        maybeShowChangeLanguageToast() {}
        setVerifyTimezone() {
            a = !0
        }
        ensureTimezoneUpdated() {
            if (!a) return;
            a = !1;
            let e = new Date().getTimezoneOffset();
            r.TimezoneOffset.getSetting() !== e && setImmediate(() => r.TimezoneOffset.updateSetting(e))
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: () => {
                    this.setVerifyTimezone(), this.maybeShowChangeLanguageToast()
                },
                OVERLAY_INITIALIZE: this.setVerifyTimezone,
                USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new s
}