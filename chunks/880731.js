function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("917351"),
        s = n("446674"),
        r = n("913144"),
        a = n("39141");
    let o = !1,
        l = {
            settingsVisible: !1,
            enabled: !1,
            combosEnabled: !0,
            combosRequiredCount: 5,
            comboSoundsEnabled: !0,
            screenshakeEnabled: !0,
            screenshakeEnabledLocations: {
                [a.ShakeLocation.CHAT_INPUT]: !0,
                [a.ShakeLocation.VOICE_USER]: !1,
                [a.ShakeLocation.MENTION]: !1
            },
            shakeIntensity: 1,
            confettiEnabled: !0,
            confettiEnabledLocations: {
                [a.ConfettiLocation.CHAT_INPUT]: !0,
                [a.ConfettiLocation.REACTION]: !0,
                [a.ConfettiLocation.MEMBER_USER]: !0,
                [a.ConfettiLocation.CALL_TILE]: !0
            },
            confettiSize: 16,
            confettiCount: 5,
            warningSeen: !1
        },
        u = (0, i.cloneDeep)(l);
    class d extends s.default.DeviceSettingsStore {
        initialize(e) {
            u = {
                ...u,
                ...e
            }
        }
        getUserAgnosticState() {
            return u
        }
        get settingsVisible() {
            return u.settingsVisible
        }
        isEnabled() {
            let {
                confettiLocation: e,
                shakeLocation: t
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || u.confettiEnabled && u.confettiEnabledLocations[e], i = null == t || u.screenshakeEnabled && u.screenshakeEnabledLocations[t];
            return this.settingsVisible && !o && u.enabled && n && i
        }
        get shakeIntensity() {
            return this.isEnabled() ? u.shakeIntensity : 0
        }
        get combosRequiredCount() {
            return this.isEnabled() ? u.combosRequiredCount : 0
        }
        get screenshakeEnabled() {
            return u.screenshakeEnabled
        }
        get screenshakeEnabledLocations() {
            return u.screenshakeEnabledLocations
        }
        get combosEnabled() {
            return u.combosEnabled
        }
        get comboSoundsEnabled() {
            return u.comboSoundsEnabled
        }
    }
    d.displayName = "PoggermodeSettingsStore", d.persistKey = "PoggermodeSettingsStore";
    var c = new d(r.default, {
        POGGERMODE_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            u = {
                ...u,
                ...t
            }
        },
        POGGERMODE_TEMPORARILY_DISABLED: function() {
            o = !0
        }
    })
}