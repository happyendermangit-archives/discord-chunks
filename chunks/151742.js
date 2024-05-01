function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserSettingsManager: function() {
            return a
        }
    }), n("177593"), n("47120");
    var i = n("147913"),
        r = n("695346");
    let s = !1;
    class a extends i.default {
        maybeShowChangeLanguageToast() {}
        setVerifyTimezone() {
            s = !0
        }
        ensureTimezoneUpdated() {
            if (!s) return;
            s = !1;
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
    t.default = new a
}