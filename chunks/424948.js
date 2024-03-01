function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    });
    var t = E("161778"),
        o = E("599110"),
        n = E("206230"),
        r = E("727538");
    let i = r.AccessibilityFeatureFlags.NONE,
        a = window.matchMedia("(prefers-color-scheme: dark)"),
        I = window.matchMedia("(prefers-color-scheme: light)"),
        s = window.matchMedia("(inverted-colors: inverted)"),
        T = window.matchMedia("(prefers-contrast: more)"),
        S = window.matchMedia("(forced-colors: active)");

    function N(e, _) {
        _ ? i |= e : i &= ~e
    }
    var O = {
        init() {
            n.default.addChangeListener(this.handleAccessibilityStoreChanged), t.default.addChangeListener(this.handleAccessibilityStoreChanged), a.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(a), I.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(I), T.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(T), S.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(S), s.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(s), o.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
        },
        getActiveFeatures: () => i,
        handlePrefersColorSchemeDarkChanged(e) {
            N(r.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_DARK, e.matches)
        },
        handlePrefersColorSchemeLightChanged(e) {
            N(r.AccessibilityFeatureFlags.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
        },
        handlePrefersMoreContrastChanged(e) {
            N(r.AccessibilityFeatureFlags.HIGH_CONTRAST, e.matches)
        },
        handlePrefersForcedColorsChanged(e) {
            N(r.AccessibilityFeatureFlags.FORCED_COLORS, e.matches)
        },
        handleInvertColorsChanged(e) {
            N(r.AccessibilityFeatureFlags.INVERT_COLORS, e.matches)
        },
        handleAccessibilityStoreChanged() {
            N(r.AccessibilityFeatureFlags.REDUCED_MOTION, n.default.useReducedMotion), N(r.AccessibilityFeatureFlags.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== n.default.rawPrefersReducedMotion), N(r.AccessibilityFeatureFlags.FORCED_COLORS_FROM_USER_SETTINGS, n.default.syncForcedColors), N(r.AccessibilityFeatureFlags.CHAT_FONT_SCALE_DECREASED, n.default.isFontScaledDown), N(r.AccessibilityFeatureFlags.CHAT_FONT_SCALE_INCREASED, n.default.isFontScaledUp), N(r.AccessibilityFeatureFlags.ZOOM_LEVEL_DECREASED, n.default.isZoomedOut), N(r.AccessibilityFeatureFlags.ZOOM_LEVEL_INCREASED, n.default.isZoomedIn), N(r.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_DECREASED, n.default.isMessageGroupSpacingDecreased), N(r.AccessibilityFeatureFlags.MESSAGE_GROUP_SPACING_INCREASED, n.default.isMessageGroupSpacingIncreased), N(r.AccessibilityFeatureFlags.DARK_SIDEBAR, t.default.darkSidebar), N(r.AccessibilityFeatureFlags.SATURATION_LEVEL_DECREASED, n.default.saturation < 1), N(r.AccessibilityFeatureFlags.ROLE_STYLE_ADJUSTED, "username" !== n.default.roleStyle), N(r.AccessibilityFeatureFlags.SYNC_PROFILE_THEME_WITH_USER_THEME, n.default.syncProfileThemeWithUserTheme)
        }
    }
}