function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("884691"),
        a = n("446674"),
        s = n("79112"),
        l = n("206230"),
        r = n("26092"),
        o = n("397336"),
        u = n("49111");
    let d = Object.freeze({
        [o.UserSettingsScrollPositions.ProfileCustomizationScrollPositions.TRY_IT_OUT]: u.UserSettingsSections.PROFILE_CUSTOMIZATION,
        [o.UserSettingsScrollPositions.AccessibilityScrollPositions.REDUCED_MOTION]: u.UserSettingsSections.ACCESSIBILITY,
        [o.UserSettingsScrollPositions.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: u.UserSettingsSections.ACCESSIBILITY,
        [o.UserSettingsScrollPositions.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: u.UserSettingsSections.ACCESSIBILITY,
        [o.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: u.UserSettingsSections.VOICE,
        [o.UserSettingsScrollPositions.AppearanceScrollPositions.CUSTOM_APP_ICONS]: u.UserSettingsSections.APPEARANCE
    });
    var c = (e, t) => {
        let n = (0, a.useStateFromStores)([l.default], () => l.default.useReducedMotion),
            o = (0, a.useStateFromStores)([r.default], () => r.default.getScrollPosition());
        (0, i.useEffect)(() => {
            let i = e.current;
            if (null == i || t !== o) return;
            let a = requestAnimationFrame(() => {
                i.scrollIntoView({
                    behavior: n ? "auto" : "smooth"
                }), s.default.clearScrollPosition(d[t])
            });
            return () => cancelAnimationFrame(a)
        }, [e, t, o, n])
    }
}