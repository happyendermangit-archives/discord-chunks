function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var a = n("917351"),
        l = n("446674"),
        s = n("913144"),
        i = n("39141");
    let r = !1,
        u = {
            settingsVisible: !1,
            enabled: !1,
            combosEnabled: !0,
            combosRequiredCount: 5,
            comboSoundsEnabled: !0,
            screenshakeEnabled: !0,
            screenshakeEnabledLocations: {
                [i.ShakeLocation.CHAT_INPUT]: !0,
                [i.ShakeLocation.VOICE_USER]: !1,
                [i.ShakeLocation.MENTION]: !1
            },
            shakeIntensity: 1,
            confettiEnabled: !0,
            confettiEnabledLocations: {
                [i.ConfettiLocation.CHAT_INPUT]: !0,
                [i.ConfettiLocation.REACTION]: !0,
                [i.ConfettiLocation.MEMBER_USER]: !0,
                [i.ConfettiLocation.CALL_TILE]: !0
            },
            confettiSize: 16,
            confettiCount: 5,
            warningSeen: !1
        },
        d = (0, a.cloneDeep)(u);
    class o extends l.default.DeviceSettingsStore {
        initialize(e) {
            d = {
                ...d,
                ...e
            }
        }
        getUserAgnosticState() {
            return d
        }
        get settingsVisible() {
            return d.settingsVisible
        }
        isEnabled() {
            let {
                confettiLocation: e,
                shakeLocation: t
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || d.confettiEnabled && d.confettiEnabledLocations[e], a = null == t || d.screenshakeEnabled && d.screenshakeEnabledLocations[t];
            return this.settingsVisible && !r && d.enabled && n && a
        }
        get shakeIntensity() {
            return this.isEnabled() ? d.shakeIntensity : 0
        }
        get combosRequiredCount() {
            return this.isEnabled() ? d.combosRequiredCount : 0
        }
        get screenshakeEnabled() {
            return d.screenshakeEnabled
        }
        get screenshakeEnabledLocations() {
            return d.screenshakeEnabledLocations
        }
        get combosEnabled() {
            return d.combosEnabled
        }
        get comboSoundsEnabled() {
            return d.comboSoundsEnabled
        }
    }
    o.displayName = "PoggermodeSettingsStore", o.persistKey = "PoggermodeSettingsStore";
    var c = new o(s.default, {
        POGGERMODE_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            d = {
                ...d,
                ...t
            }
        },
        POGGERMODE_TEMPORARILY_DISABLED: function() {
            r = !0
        }
    })
}