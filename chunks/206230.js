function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("446674"),
        r = n("95410"),
        o = n("819855"),
        s = n("913144"),
        l = n("845579"),
        a = n("374363"),
        u = n("922932"),
        c = n("49111"),
        d = n("894488");
    let _ = {
            fontSize: c.Accessibility.FONT_SIZE_DEFAULT,
            zoom: c.Accessibility.ZOOM_DEFAULT,
            keyboardModeEnabled: !1,
            colorblindMode: !1,
            lowContrastMode: !1,
            saturation: 1,
            contrast: 1,
            desaturateUserColors: !1,
            forcedColorsModalSeen: !1,
            keyboardNavigationExplainerModalSeen: !1,
            messageGroupSpacing: null,
            systemPrefersReducedMotion: "no-preference",
            systemPrefersCrossfades: !1,
            prefersReducedMotion: "auto",
            systemForcedColors: "none",
            syncForcedColors: !0,
            systemPrefersContrast: "no-preference",
            alwaysShowLinkDecorations: !1,
            roleStyle: "username",
            submitButtonEnabled: !1,
            syncProfileThemeWithUserTheme: !1,
            disableVoiceBackgrounds: !1
        },
        f = _,
        S = {
            12: "font-size-12",
            14: "font-size-14",
            15: "font-size-15",
            16: "font-size-16",
            18: "font-size-18",
            20: "font-size-20",
            24: "font-size-24"
        };
    class E extends i.default.DeviceSettingsStore {
        initialize(e) {
            this.waitFor(a.default), isNaN((f = {
                ..._,
                ...null != e ? e : null
            }).fontSize) && (f.fontSize = c.Accessibility.FONT_SIZE_DEFAULT), 0 > d.MESSAGE_GROUP_SPACING.indexOf(null != f.messageGroupSpacing ? f.messageGroupSpacing : -1) && (f.messageGroupSpacing = null)
        }
        get fontScale() {
            return f.fontSize / c.Accessibility.FONT_SIZE_DEFAULT * 100
        }
        get fontSize() {
            return f.fontSize
        }
        get isFontScaledUp() {
            return f.fontSize > c.Accessibility.FONT_SIZE_DEFAULT
        }
        get isFontScaledDown() {
            return f.fontSize < c.Accessibility.FONT_SIZE_DEFAULT
        }
        get fontScaleClass() {
            var e;
            let t = null !== (e = S[this.fontSize]) && void 0 !== e ? e : "";
            return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
        }
        get zoom() {
            return f.zoom
        }
        get isZoomedIn() {
            return f.zoom > c.Accessibility.ZOOM_DEFAULT
        }
        get isZoomedOut() {
            return f.zoom < c.Accessibility.ZOOM_DEFAULT
        }
        get keyboardModeEnabled() {
            return f.keyboardModeEnabled
        }
        get colorblindMode() {
            return f.colorblindMode
        }
        get lowContrastMode() {
            return f.lowContrastMode
        }
        get saturation() {
            return f.saturation
        }
        get contrast() {
            return f.contrast
        }
        get desaturateUserColors() {
            return f.desaturateUserColors
        }
        get forcedColorsModalSeen() {
            return f.forcedColorsModalSeen
        }
        get keyboardNavigationExplainerModalSeen() {
            return f.keyboardNavigationExplainerModalSeen
        }
        get messageGroupSpacing() {
            return null != f.messageGroupSpacing ? f.messageGroupSpacing : l.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING
        }
        get isMessageGroupSpacingIncreased() {
            let e = l.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
            return this.messageGroupSpacing > e
        }
        get isMessageGroupSpacingDecreased() {
            let e = l.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
            return this.messageGroupSpacing < e
        }
        get isSubmitButtonEnabled() {
            return f.submitButtonEnabled
        }
        get syncProfileThemeWithUserTheme() {
            return f.syncProfileThemeWithUserTheme
        }
        get systemPrefersReducedMotion() {
            return f.systemPrefersReducedMotion
        }
        get rawPrefersReducedMotion() {
            return f.prefersReducedMotion
        }
        get useReducedMotion() {
            switch (f.prefersReducedMotion) {
                case "no-preference":
                    return !1;
                case "reduce":
                    return !0;
                default:
                    return "reduce" === f.systemPrefersReducedMotion
            }
        }
        get systemForcedColors() {
            return f.systemForcedColors
        }
        get syncForcedColors() {
            return f.syncForcedColors
        }
        get useForcedColors() {
            return !!f.syncForcedColors && "active" === f.systemForcedColors || !1
        }
        get systemPrefersContrast() {
            return f.systemPrefersContrast
        }
        get systemPrefersCrossfades() {
            return f.systemPrefersCrossfades
        }
        get alwaysShowLinkDecorations() {
            return f.alwaysShowLinkDecorations
        }
        get roleStyle() {
            return f.roleStyle
        }
        get disableVoiceBackgrounds() {
            return f.disableVoiceBackgrounds
        }
        getUserAgnosticState() {
            return f
        }
    }
    E.displayName = "AccessibilityStore", E.persistKey = "AccessibilityStore", E.migrations = [() => {
        let e = {
                FONT_SCALE: "a11yFontScale",
                ZOOM: "a11yZoom",
                COLORBLIND_MODE: "a11yColorblindMode"
            },
            t = r.Storage.get(e.FONT_SCALE) || 100,
            n = r.Storage.get(e.ZOOM) || c.Accessibility.ZOOM_DEFAULT,
            i = r.Storage.get(e.COLORBLIND_MODE) || !1;
        return r.Storage.remove(e.FONT_SCALE), r.Storage.remove(e.ZOOM), r.Storage.remove(e.COLORBLIND_MODE), {
            fontScale: t,
            zoom: n,
            colorblindMode: i,
            keyboardModeEnabled: !1
        }
    }, e => {
        let {
            fontScale: t,
            ...n
        } = e, i = 16;
        switch (t) {
            case 82:
                i = 12;
                break;
            case 92:
                i = 15;
                break;
            case 100:
                i = 16;
                break;
            case 110:
                i = 18;
                break;
            case 125:
                i = 20;
                break;
            case 150:
                i = 24
        }
        return {
            ...n,
            fontSize: i
        }
    }, e => ({
        ...e,
        darkSidebar: !1
    }), e => ({
        ...e,
        messageGroupSpacing: null
    }), e => ({
        ...e,
        systemPrefersReducedMotion: "no-preference",
        prefersReducedMotion: "auto"
    }), e => ({
        ...e,
        alwaysShowLinkDecorations: e.saturation <= o.LOW_SATURATION_THRESHOLD
    }), e => ({
        ...e,
        disableVoiceBackgrounds: !1
    })];
    let g = new E(s.default, {
        ACCESSIBILITY_SET_FONT_SIZE: function(e) {
            var t;
            let n = (t = e.fontSize, c.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : c.Accessibility.FONT_SIZE_DEFAULT);
            if (n > c.Accessibility.FONT_SIZE_MAX || n < c.Accessibility.FONT_SIZE_MIN || f.fontSize === n) return !1;
            (f = {
                ...f
            }).fontSize = n
        },
        ACCESSIBILITY_SET_ZOOM: function(e) {
            if (e.zoom < c.Accessibility.ZOOM_MIN || e.zoom > c.Accessibility.ZOOM_MAX || f.zoom === e.zoom) return !1;
            (f = {
                ...f
            }).zoom = e.zoom, u.default.setZoomFactor(f.zoom)
        },
        ACCESSIBILITY_RESET_TO_DEFAULT: function() {
            let e = f.fontSize !== c.Accessibility.FONT_SIZE_DEFAULT,
                t = f.zoom !== c.Accessibility.ZOOM_DEFAULT;
            if (!e && !t) return !1;
            (f = {
                ...f
            }).fontSize !== c.Accessibility.FONT_SIZE_DEFAULT && (f.fontSize = c.Accessibility.FONT_SIZE_DEFAULT), f.zoom !== c.Accessibility.ZOOM_DEFAULT && (f.zoom = c.Accessibility.ZOOM_DEFAULT, u.default.setZoomFactor(f.zoom))
        },
        ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
            if (f.keyboardModeEnabled) return !1;
            (f = {
                ...f
            }).keyboardModeEnabled = !0
        },
        ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
            if (!f.keyboardModeEnabled) return !1;
            (f = {
                ...f
            }).keyboardModeEnabled = !1
        },
        ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
            (f = {
                ...f
            }).colorblindMode = !f.colorblindMode
        },
        ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
            (f = {
                ...f
            }).lowContrastMode = !f.lowContrastMode
        },
        ACCESSIBILITY_SET_SATURATION: function(e) {
            (f = {
                ...f
            }).saturation = e.saturation
        },
        ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
            (f = {
                ...f
            }).desaturateUserColors = !f.desaturateUserColors
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            var t;
            return f = {
                ...f,
                systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
            }, !0
        },
        ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
            if (f.systemPrefersContrast === e.systemPrefersContrast) return !1;
            f = {
                ...f,
                systemPrefersContrast: e.systemPrefersContrast
            }
        },
        ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
            if (f.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
            f = {
                ...f,
                systemPrefersReducedMotion: e.systemPrefersReducedMotion
            }
        },
        ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
            if (f.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
            f = {
                ...f,
                systemPrefersCrossfades: e.systemPrefersCrossfades
            }
        },
        ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
            if (f.prefersReducedMotion === e.prefersReducedMotion) return !1;
            f = {
                ...f,
                prefersReducedMotion: e.prefersReducedMotion
            }
        },
        ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
            f.syncForcedColors = e.syncForcedColors
        },
        ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
            f = {
                ...f,
                alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
            }
        },
        ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
            f.roleStyle = e.roleStyle
        },
        ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
            f.forcedColorsModalSeen = !0
        },
        KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
            f = {
                ...f,
                keyboardNavigationExplainerModalSeen: !0
            }
        },
        ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
            let {
                messageGroupSpacing: t
            } = e;
            f = {
                ...f,
                messageGroupSpacing: t
            }
        },
        ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
            (f = {
                ...f
            }).submitButtonEnabled = !f.submitButtonEnabled
        },
        ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
            (f = {
                ...f
            }).syncProfileThemeWithUserTheme = !f.syncProfileThemeWithUserTheme
        },
        ACCESSIBILITY_SET_CONTRAST: function(e) {
            let {
                contrast: t
            } = e;
            f = {
                ...f,
                contrast: t
            }
        },
        ACCESSIBILITY_TOGGLE_DISABLE_VOICE_BACKGROUNDS: function() {
            (f = {
                ...f
            }).disableVoiceBackgrounds = !f.disableVoiceBackgrounds
        }
    });
    var m = g
}