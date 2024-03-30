function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("898511"),
        a = n("482644"),
        u = n("622780"),
        s = n("674594"),
        l = n("382021"),
        c = n("281767");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = Object.freeze((f(r = {}, l.UserSettingsScrollPositions.ProfileCustomizationScrollPositions.TRY_IT_OUT, c.UserSettingsSections.PROFILE_CUSTOMIZATION), f(r, l.UserSettingsScrollPositions.AccessibilityScrollPositions.REDUCED_MOTION, c.UserSettingsSections.ACCESSIBILITY), f(r, l.UserSettingsScrollPositions.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME, c.UserSettingsSections.ACCESSIBILITY), f(r, l.UserSettingsScrollPositions.AccessibilityScrollPositions.LEGACY_CHAT_INPUT, c.UserSettingsSections.ACCESSIBILITY), f(r, l.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION, c.UserSettingsSections.VOICE), f(r, l.UserSettingsScrollPositions.AppearanceScrollPositions.CUSTOM_APP_ICONS, c.UserSettingsSections.APPEARANCE), r));
    t.default = function(e, t) {
        var n = (0, i.useStateFromStores)([u.default], function() {
                return u.default.useReducedMotion
            }),
            r = (0, i.useStateFromStores)([s.default], function() {
                return s.default.getScrollPosition()
            });
        (0, o.useEffect)(function() {
            var o = e.current;
            if (null != o && t === r) {
                var i = requestAnimationFrame(function() {
                    o.scrollIntoView({
                        behavior: n ? "auto" : "smooth"
                    }), a.default.clearScrollPosition(d[t])
                });
                return function() {
                    return cancelAnimationFrame(i)
                }
            }
        }, [e, t, r, n])
    }
}