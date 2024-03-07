function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("884691"),
        a = n("446674"),
        l = n("79112"),
        s = n("206230"),
        o = n("26092"),
        r = n("397336"),
        u = n("49111");
    let d = Object.freeze({
        [r.UserSettingsScrollPositions.ProfileCustomizationScrollPositions.TRY_IT_OUT]: u.UserSettingsSections.PROFILE_CUSTOMIZATION,
        [r.UserSettingsScrollPositions.AccessibilityScrollPositions.REDUCED_MOTION]: u.UserSettingsSections.ACCESSIBILITY,
        [r.UserSettingsScrollPositions.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: u.UserSettingsSections.ACCESSIBILITY,
        [r.UserSettingsScrollPositions.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: u.UserSettingsSections.ACCESSIBILITY,
        [r.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: u.UserSettingsSections.VOICE,
        [r.UserSettingsScrollPositions.AppearanceScrollPositions.CUSTOM_APP_ICONS]: u.UserSettingsSections.APPEARANCE
    });
    var c = (e, t) => {
        let n = (0, a.useStateFromStores)([s.default], () => s.default.useReducedMotion),
            r = (0, a.useStateFromStores)([o.default], () => o.default.getScrollPosition());
        (0, i.useEffect)(() => {
            let i = e.current;
            if (null == i || t !== r) return;
            let a = requestAnimationFrame(() => {
                i.scrollIntoView({
                    behavior: n ? "auto" : "smooth"
                }), l.default.clearScrollPosition(d[t])
            });
            return () => cancelAnimationFrame(a)
        }, [e, t, r, n])
    }
}