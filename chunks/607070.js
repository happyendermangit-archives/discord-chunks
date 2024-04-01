function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("433517"),
        a = n("780384"),
        o = n("570140"),
        l = n("695346"),
        u = n("581883"),
        d = n("12647"),
        _ = n("981631"),
        c = n("959517");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = {
            fontSize: _.Accessibility.FONT_SIZE_DEFAULT,
            zoom: _.Accessibility.ZOOM_DEFAULT,
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
        T = I,
        f = {
            12: "font-size-12",
            14: "font-size-14",
            15: "font-size-15",
            16: "font-size-16",
            18: "font-size-18",
            20: "font-size-20",
            24: "font-size-24"
        };
    class S extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            this.waitFor(u.default), isNaN((T = {
                ...I,
                ...null != e ? e : null
            }).fontSize) && (T.fontSize = _.Accessibility.FONT_SIZE_DEFAULT), 0 > c.MESSAGE_GROUP_SPACING.indexOf(null != T.messageGroupSpacing ? T.messageGroupSpacing : -1) && (T.messageGroupSpacing = null)
        }
        get fontScale() {
            return T.fontSize / _.Accessibility.FONT_SIZE_DEFAULT * 100
        }
        get fontSize() {
            return T.fontSize
        }
        get isFontScaledUp() {
            return T.fontSize > _.Accessibility.FONT_SIZE_DEFAULT
        }
        get isFontScaledDown() {
            return T.fontSize < _.Accessibility.FONT_SIZE_DEFAULT
        }
        get fontScaleClass() {
            var e;
            let t = null !== (e = f[this.fontSize]) && void 0 !== e ? e : "";
            return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
        }
        get zoom() {
            return T.zoom
        }
        get isZoomedIn() {
            return T.zoom > _.Accessibility.ZOOM_DEFAULT
        }
        get isZoomedOut() {
            return T.zoom < _.Accessibility.ZOOM_DEFAULT
        }
        get keyboardModeEnabled() {
            return T.keyboardModeEnabled
        }
        get colorblindMode() {
            return T.colorblindMode
        }
        get lowContrastMode() {
            return T.lowContrastMode
        }
        get saturation() {
            return T.saturation
        }
        get contrast() {
            return T.contrast
        }
        get desaturateUserColors() {
            return T.desaturateUserColors
        }
        get forcedColorsModalSeen() {
            return T.forcedColorsModalSeen
        }
        get keyboardNavigationExplainerModalSeen() {
            return T.keyboardNavigationExplainerModalSeen
        }
        get messageGroupSpacing() {
            return null != T.messageGroupSpacing ? T.messageGroupSpacing : l.MessageDisplayCompact.getSetting() ? c.DEFAULT_COMPACT_SPACING : c.DEFAULT_COZY_SPACING
        }
        get isMessageGroupSpacingIncreased() {
            let e = l.MessageDisplayCompact.getSetting() ? c.DEFAULT_COMPACT_SPACING : c.DEFAULT_COZY_SPACING;
            return this.messageGroupSpacing > e
        }
        get isMessageGroupSpacingDecreased() {
            let e = l.MessageDisplayCompact.getSetting() ? c.DEFAULT_COMPACT_SPACING : c.DEFAULT_COZY_SPACING;
            return this.messageGroupSpacing < e
        }
        get isSubmitButtonEnabled() {
            return T.submitButtonEnabled
        }
        get syncProfileThemeWithUserTheme() {
            return T.syncProfileThemeWithUserTheme
        }
        get systemPrefersReducedMotion() {
            return T.systemPrefersReducedMotion
        }
        get rawPrefersReducedMotion() {
            return T.prefersReducedMotion
        }
        get useReducedMotion() {
            switch (T.prefersReducedMotion) {
                case "no-preference":
                    return !1;
                case "reduce":
                    return !0;
                default:
                    return "reduce" === T.systemPrefersReducedMotion
            }
        }
        get systemForcedColors() {
            return T.systemForcedColors
        }
        get syncForcedColors() {
            return T.syncForcedColors
        }
        get useForcedColors() {
            return !!T.syncForcedColors && "active" === T.systemForcedColors || !1
        }
        get systemPrefersContrast() {
            return T.systemPrefersContrast
        }
        get systemPrefersCrossfades() {
            return T.systemPrefersCrossfades
        }
        get alwaysShowLinkDecorations() {
            return T.alwaysShowLinkDecorations
        }
        get roleStyle() {
            return T.roleStyle
        }
        get disableVoiceBackgrounds() {
            return T.disableVoiceBackgrounds
        }
        getUserAgnosticState() {
            return T
        }
    }
    E(S, "displayName", "AccessibilityStore"), E(S, "persistKey", "AccessibilityStore"), E(S, "migrations", [() => {
        let e = {
                FONT_SCALE: "a11yFontScale",
                ZOOM: "a11yZoom",
                COLORBLIND_MODE: "a11yColorblindMode"
            },
            t = s.Storage.get(e.FONT_SCALE) || 100,
            n = s.Storage.get(e.ZOOM) || _.Accessibility.ZOOM_DEFAULT,
            i = s.Storage.get(e.COLORBLIND_MODE) || !1;
        return s.Storage.remove(e.FONT_SCALE), s.Storage.remove(e.ZOOM), s.Storage.remove(e.COLORBLIND_MODE), {
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
        alwaysShowLinkDecorations: e.saturation <= a.LOW_SATURATION_THRESHOLD
    }), e => ({
        ...e,
        disableVoiceBackgrounds: !1
    })]);
    let A = new S(o.default, {
        ACCESSIBILITY_SET_FONT_SIZE: function(e) {
            var t;
            let n = (t = e.fontSize, _.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : _.Accessibility.FONT_SIZE_DEFAULT);
            if (n > _.Accessibility.FONT_SIZE_MAX || n < _.Accessibility.FONT_SIZE_MIN || T.fontSize === n) return !1;
            (T = {
                ...T
            }).fontSize = n
        },
        ACCESSIBILITY_SET_ZOOM: function(e) {
            if (e.zoom < _.Accessibility.ZOOM_MIN || e.zoom > _.Accessibility.ZOOM_MAX || T.zoom === e.zoom) return !1;
            (T = {
                ...T
            }).zoom = e.zoom, d.default.setZoomFactor(T.zoom)
        },
        ACCESSIBILITY_RESET_TO_DEFAULT: function() {
            let e = T.fontSize !== _.Accessibility.FONT_SIZE_DEFAULT,
                t = T.zoom !== _.Accessibility.ZOOM_DEFAULT;
            if (!e && !t) return !1;
            (T = {
                ...T
            }).fontSize !== _.Accessibility.FONT_SIZE_DEFAULT && (T.fontSize = _.Accessibility.FONT_SIZE_DEFAULT), T.zoom !== _.Accessibility.ZOOM_DEFAULT && (T.zoom = _.Accessibility.ZOOM_DEFAULT, d.default.setZoomFactor(T.zoom))
        },
        ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
            if (T.keyboardModeEnabled) return !1;
            (T = {
                ...T
            }).keyboardModeEnabled = !0
        },
        ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
            if (!T.keyboardModeEnabled) return !1;
            (T = {
                ...T
            }).keyboardModeEnabled = !1
        },
        ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
            (T = {
                ...T
            }).colorblindMode = !T.colorblindMode
        },
        ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
            (T = {
                ...T
            }).lowContrastMode = !T.lowContrastMode
        },
        ACCESSIBILITY_SET_SATURATION: function(e) {
            (T = {
                ...T
            }).saturation = e.saturation
        },
        ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
            (T = {
                ...T
            }).desaturateUserColors = !T.desaturateUserColors
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            var t;
            return T = {
                ...T,
                systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
            }, !0
        },
        ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
            if (T.systemPrefersContrast === e.systemPrefersContrast) return !1;
            T = {
                ...T,
                systemPrefersContrast: e.systemPrefersContrast
            }
        },
        ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
            if (T.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
            T = {
                ...T,
                systemPrefersReducedMotion: e.systemPrefersReducedMotion
            }
        },
        ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
            if (T.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
            T = {
                ...T,
                systemPrefersCrossfades: e.systemPrefersCrossfades
            }
        },
        ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
            if (T.prefersReducedMotion === e.prefersReducedMotion) return !1;
            T = {
                ...T,
                prefersReducedMotion: e.prefersReducedMotion
            }
        },
        ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
            T.syncForcedColors = e.syncForcedColors
        },
        ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
            T = {
                ...T,
                alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
            }
        },
        ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
            T.roleStyle = e.roleStyle
        },
        ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
            T.forcedColorsModalSeen = !0
        },
        KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
            T = {
                ...T,
                keyboardNavigationExplainerModalSeen: !0
            }
        },
        ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
            let {
                messageGroupSpacing: t
            } = e;
            T = {
                ...T,
                messageGroupSpacing: t
            }
        },
        ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
            (T = {
                ...T
            }).submitButtonEnabled = !T.submitButtonEnabled
        },
        ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
            (T = {
                ...T
            }).syncProfileThemeWithUserTheme = !T.syncProfileThemeWithUserTheme
        },
        ACCESSIBILITY_SET_CONTRAST: function(e) {
            let {
                contrast: t
            } = e;
            T = {
                ...T,
                contrast: t
            }
        },
        ACCESSIBILITY_TOGGLE_DISABLE_VOICE_BACKGROUNDS: function() {
            (T = {
                ...T
            }).disableVoiceBackgrounds = !T.disableVoiceBackgrounds
        }
    });
    t.default = A
}