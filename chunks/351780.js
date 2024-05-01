function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("392711"),
        a = n("442837"),
        s = n("570140"),
        o = n("524484");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = !1,
        d = {
            settingsVisible: !1,
            enabled: !1,
            combosEnabled: !0,
            combosRequiredCount: 5,
            comboSoundsEnabled: !0,
            screenshakeEnabled: !0,
            screenshakeEnabledLocations: {
                [o.ShakeLocation.CHAT_INPUT]: !0,
                [o.ShakeLocation.VOICE_USER]: !1,
                [o.ShakeLocation.MENTION]: !1
            },
            shakeIntensity: 1,
            confettiEnabled: !0,
            confettiEnabledLocations: {
                [o.ConfettiLocation.CHAT_INPUT]: !0,
                [o.ConfettiLocation.REACTION]: !0,
                [o.ConfettiLocation.MEMBER_USER]: !0,
                [o.ConfettiLocation.CALL_TILE]: !0
            },
            confettiSize: 16,
            confettiCount: 5,
            warningSeen: !1
        },
        _ = (0, r.cloneDeep)(d);
    class c extends(i = a.default.DeviceSettingsStore) {
        initialize(e) {
            _ = {
                ..._,
                ...e
            }
        }
        getUserAgnosticState() {
            return _
        }
        get settingsVisible() {
            return _.settingsVisible
        }
        isEnabled() {
            let {
                confettiLocation: e,
                shakeLocation: t
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || _.confettiEnabled && _.confettiEnabledLocations[e], i = null == t || _.screenshakeEnabled && _.screenshakeEnabledLocations[t];
            return this.settingsVisible && !u && _.enabled && n && i
        }
        get shakeIntensity() {
            return this.isEnabled() ? _.shakeIntensity : 0
        }
        get combosRequiredCount() {
            return this.isEnabled() ? _.combosRequiredCount : 0
        }
        get screenshakeEnabled() {
            return _.screenshakeEnabled
        }
        get screenshakeEnabledLocations() {
            return _.screenshakeEnabledLocations
        }
        get combosEnabled() {
            return _.combosEnabled
        }
        get comboSoundsEnabled() {
            return _.comboSoundsEnabled
        }
    }
    l(c, "displayName", "PoggermodeSettingsStore"), l(c, "persistKey", "PoggermodeSettingsStore"), t.default = new c(s.default, {
        POGGERMODE_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            _ = {
                ..._,
                ...t
            }
        },
        POGGERMODE_TEMPORARILY_DISABLED: function() {
            u = !0
        }
    })
}