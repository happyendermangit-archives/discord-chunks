function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("210887"),
        r = n("626135"),
        a = n("607070"),
        s = n("94752");
    let o = s.AccessibilityFeatureFlags.NONE,
        l = window.matchMedia("(prefers-color-scheme: dark)"),
        u = window.matchMedia("(prefers-color-scheme: light)"),
        d = window.matchMedia("(inverted-colors: inverted)"),
        _ = window.matchMedia("(prefers-contrast: more)"),
        c = window.matchMedia("(forced-colors: active)");

    function E(e, t) {
        t ? o |= e : o &= ~e
    }
    t.default = {
        init() {
            a.default.addChangeListener(this.handleAccessibilityStoreChanged), i.default.addChangeListener(this.handleAccessibilityStoreChanged), l.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(l), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), _.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(_), c.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(c), d.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(d), r.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
        },
        getActiveFeatures: () => o,
        handlePrefersColorSchemeDarkChanged(e) {
            E(s.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, e.matches)
        },
        handlePrefersColorSchemeLightChanged(e) {
            E(s.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
        },
        handlePrefersMoreContrastChanged(e) {
            E(s.AccessibilityFeatureFlags.HIGH_CONTRAST, e.matches)
        },
        handlePrefersForcedColorsChanged(e) {
            E(s.AccessibilityFeatureFlags.FORCED_COLORS, e.matches)
        },
        handleInvertColorsChanged(e) {
            E(s.AccessibilityFeatureFlags.INVERT_COLORS, e.matches)
        },
        handleAccessibilityStoreChanged() {
            E(s.AccessibilityFeatureFlags.REDUCED_MOTION, a.default.useReducedMotion), E(s.AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== a.default.rawPrefersReducedMotion), E(s.AccessibilityFeatureFlags.FORCED_COLORS_FROM_USER_SETTINGS, a.default.syncForcedColors), E(s.AccessibilityFeatureFlags.CHAT_FONT_SCALE_DECREASED, a.default.isFontScaledDown), E(s.AccessibilityFeatureFlags.CHAT_FONT_SCALE_INCREASED, a.default.isFontScaledUp), E(s.AccessibilityFeatureFlags.ZOOM_LEVEL_DECREASED, a.default.isZoomedOut), E(s.AccessibilityFeatureFlags.ZOOM_LEVEL_INCREASED, a.default.isZoomedIn), E(s.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_DECREASED, a.default.isMessageGroupSpacingDecreased), E(s.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_INCREASED, a.default.isMessageGroupSpacingIncreased), E(s.AccessibilityFeatureFlags.DARK_SIDEBAR, i.default.darkSidebar), E(s.AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, a.default.saturation < 1), E(s.AccessibilityFeatureFlags.ROLE_STYLE_ADJUSTED, "username" !== a.default.roleStyle), E(s.AccessibilityFeatureFlags.SYNC_PROFILE_THEME_WITH_USER_THEME, a.default.syncProfileThemeWithUserTheme)
        }
    }
}