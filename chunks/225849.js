function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var a = n("884691"),
        i = n("446674"),
        s = n("79112"),
        l = n("206230"),
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
        let n = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion),
            r = (0, i.useStateFromStores)([o.default], () => o.default.getScrollPosition());
        (0, a.useEffect)(() => {
            let a = e.current;
            if (null == a || t !== r) return;
            let i = requestAnimationFrame(() => {
                a.scrollIntoView({
                    behavior: n ? "auto" : "smooth"
                }), s.default.clearScrollPosition(d[t])
            });
            return () => cancelAnimationFrame(i)
        }, [e, t, r, n])
    }
}