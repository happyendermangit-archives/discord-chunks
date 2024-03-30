function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("798206"),
        o = n("870331"),
        i = n("622780"),
        a = n("748476"),
        u = a.AccessibilityFeatureFlags.NONE,
        s = window.matchMedia("(prefers-color-scheme: dark)"),
        l = window.matchMedia("(prefers-color-scheme: light)"),
        c = window.matchMedia("(inverted-colors: inverted)"),
        f = window.matchMedia("(prefers-contrast: more)"),
        d = window.matchMedia("(forced-colors: active)");

    function _(e, t) {
        t ? u |= e : u &= ~e
    }
    t.default = {
        init: function() {
            i.default.addChangeListener(this.handleAccessibilityStoreChanged), r.default.addChangeListener(this.handleAccessibilityStoreChanged), s.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(s), l.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(l), f.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(f), d.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(d), c.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(c), o.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
        },
        getActiveFeatures: function() {
            return u
        },
        handlePrefersColorSchemeDarkChanged: function(e) {
            _(a.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, e.matches)
        },
        handlePrefersColorSchemeLightChanged: function(e) {
            _(a.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
        },
        handlePrefersMoreContrastChanged: function(e) {
            _(a.AccessibilityFeatureFlags.HIGH_CONTRAST, e.matches)
        },
        handlePrefersForcedColorsChanged: function(e) {
            _(a.AccessibilityFeatureFlags.FORCED_COLORS, e.matches)
        },
        handleInvertColorsChanged: function(e) {
            _(a.AccessibilityFeatureFlags.INVERT_COLORS, e.matches)
        },
        handleAccessibilityStoreChanged: function() {
            _(a.AccessibilityFeatureFlags.REDUCED_MOTION, i.default.useReducedMotion), _(a.AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== i.default.rawPrefersReducedMotion), _(a.AccessibilityFeatureFlags.FORCED_COLORS_FROM_USER_SETTINGS, i.default.syncForcedColors), _(a.AccessibilityFeatureFlags.CHAT_FONT_SCALE_DECREASED, i.default.isFontScaledDown), _(a.AccessibilityFeatureFlags.CHAT_FONT_SCALE_INCREASED, i.default.isFontScaledUp), _(a.AccessibilityFeatureFlags.ZOOM_LEVEL_DECREASED, i.default.isZoomedOut), _(a.AccessibilityFeatureFlags.ZOOM_LEVEL_INCREASED, i.default.isZoomedIn), _(a.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_DECREASED, i.default.isMessageGroupSpacingDecreased), _(a.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_INCREASED, i.default.isMessageGroupSpacingIncreased), _(a.AccessibilityFeatureFlags.DARK_SIDEBAR, r.default.darkSidebar), _(a.AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, i.default.saturation < 1), _(a.AccessibilityFeatureFlags.ROLE_STYLE_ADJUSTED, "username" !== i.default.roleStyle), _(a.AccessibilityFeatureFlags.SYNC_PROFILE_THEME_WITH_USER_THEME, i.default.syncProfileThemeWithUserTheme)
        }
    }
}