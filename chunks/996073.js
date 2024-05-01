function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("442837"),
        s = n("230711"),
        a = n("607070"),
        o = n("663389"),
        l = n("526761"),
        u = n("981631");
    let d = Object.freeze({
        [l.UserSettingsScrollPositions.ProfileCustomizationScrollPositions.TRY_IT_OUT]: u.UserSettingsSections.PROFILE_CUSTOMIZATION,
        [l.UserSettingsScrollPositions.AccessibilityScrollPositions.REDUCED_MOTION]: u.UserSettingsSections.ACCESSIBILITY,
        [l.UserSettingsScrollPositions.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: u.UserSettingsSections.ACCESSIBILITY,
        [l.UserSettingsScrollPositions.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: u.UserSettingsSections.ACCESSIBILITY,
        [l.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: u.UserSettingsSections.VOICE,
        [l.UserSettingsScrollPositions.AppearanceScrollPositions.CUSTOM_APP_ICONS]: u.UserSettingsSections.APPEARANCE,
        [l.UserSettingsScrollPositions.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS]: u.UserSettingsSections.PRIVACY_AND_SAFETY,
        [l.UserSettingsScrollPositions.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS]: u.UserSettingsSections.PRIVACY_AND_SAFETY,
        [l.UserSettingsScrollPositions.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION]: u.UserSettingsSections.PRIVACY_AND_SAFETY
    });
    t.default = function(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            u = (0, r.useStateFromStores)([a.default], () => a.default.useReducedMotion),
            _ = (0, r.useStateFromStores)([o.default], () => o.default.getScrollPosition());
        (0, i.useEffect)(() => {
            let i = e.current;
            null != i && t === _ && setTimeout(() => {
                let e = requestAnimationFrame(() => {
                    i.scrollIntoView({
                        behavior: u ? "auto" : "smooth",
                        ...n
                    }), s.default.clearScrollPosition(d[t])
                });
                return () => cancelAnimationFrame(e)
            }, l)
        }, [e, t, _, u, n, l])
    }
}