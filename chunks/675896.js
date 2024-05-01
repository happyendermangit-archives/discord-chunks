function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("210887"),
        r = n("626135"),
        s = n("607070"),
        a = n("94752");
    let o = a.AccessibilityFeatureFlags.NONE,
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
            s.default.addChangeListener(this.handleAccessibilityStoreChanged), i.default.addChangeListener(this.handleAccessibilityStoreChanged), l.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(l), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), _.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(_), c.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(c), d.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(d), r.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
        },
        getActiveFeatures: () => o,
        handlePrefersColorSchemeDarkChanged(e) {
            E(a.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, e.matches)
        },
        handlePrefersColorSchemeLightChanged(e) {
            E(a.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
        },
        handlePrefersMoreContrastChanged(e) {
            E(a.AccessibilityFeatureFlags.HIGH_CONTRAST, e.matches)
        },
        handlePrefersForcedColorsChanged(e) {
            E(a.AccessibilityFeatureFlags.FORCED_COLORS, e.matches)
        },
        handleInvertColorsChanged(e) {
            E(a.AccessibilityFeatureFlags.INVERT_COLORS, e.matches)
        },
        handleAccessibilityStoreChanged() {
            E(a.AccessibilityFeatureFlags.REDUCED_MOTION, s.default.useReducedMotion), E(a.AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== s.default.rawPrefersReducedMotion), E(a.AccessibilityFeatureFlags.FORCED_COLORS_FROM_USER_SETTINGS, s.default.syncForcedColors), E(a.AccessibilityFeatureFlags.CHAT_FONT_SCALE_DECREASED, s.default.isFontScaledDown), E(a.AccessibilityFeatureFlags.CHAT_FONT_SCALE_INCREASED, s.default.isFontScaledUp), E(a.AccessibilityFeatureFlags.ZOOM_LEVEL_DECREASED, s.default.isZoomedOut), E(a.AccessibilityFeatureFlags.ZOOM_LEVEL_INCREASED, s.default.isZoomedIn), E(a.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_DECREASED, s.default.isMessageGroupSpacingDecreased), E(a.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_INCREASED, s.default.isMessageGroupSpacingIncreased), E(a.AccessibilityFeatureFlags.DARK_SIDEBAR, i.default.darkSidebar), E(a.AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, s.default.saturation < 1), E(a.AccessibilityFeatureFlags.ROLE_STYLE_ADJUSTED, "username" !== s.default.roleStyle), E(a.AccessibilityFeatureFlags.SYNC_PROFILE_THEME_WITH_USER_THEME, s.default.syncProfileThemeWithUserTheme)
        }
    }
}