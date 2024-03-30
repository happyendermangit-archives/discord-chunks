function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disableKeyboardMode: function() {
            return I
        },
        enableKeyboardMode: function() {
            return E
        },
        keyboardNavigationExplainerModalSeen: function() {
            return S
        },
        setAlwaysShowLinkDecorations: function() {
            return R
        },
        setFontSize: function() {
            return d
        },
        setMessageGroupSpacing: function() {
            return _
        },
        setPrefersReducedMotion: function() {
            return m
        },
        setRoleStyle: function() {
            return C
        },
        setSaturation: function() {
            return A
        },
        setSyncForcedColors: function() {
            return N
        },
        setZoom: function() {
            return c
        },
        systemColorPreferencesChanged: function() {
            return O
        },
        systemPrefersContrastChanged: function() {
            return p
        },
        systemPrefersReducedMotionChanged: function() {
            return h
        },
        toggleDarkSidebar: function() {
            return f
        },
        toggleDesaturateUserColors: function() {
            return T
        },
        toggleSubmitButton: function() {
            return g
        },
        toggleSyncProfileThemeWithUserTheme: function() {
            return L
        }
    });
    var i = n("570140"),
        r = n("153867"),
        s = n("626135"),
        a = n("607070"),
        o = n("981631"),
        l = n("969943"),
        u = n("611480");

    function d(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_FONT_SIZE",
            fontSize: e
        })
    }

    function _() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
            messageGroupSpacing: e
        })
    }

    function c(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ZOOM",
            zoom: e
        })
    }

    function E() {
        i.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE"
        }), s.default.track(o.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !0
        })
    }

    function I() {
        i.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE"
        }), s.default.track(o.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !1
        })
    }

    function T() {
        i.default.dispatch({
            type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE"
        })
    }

    function f() {
        i.default.dispatch({
            type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE"
        })
    }

    function S() {
        i.default.dispatch({
            type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN"
        })
    }

    function h(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
            systemPrefersReducedMotion: e
        })
    }

    function A(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_SATURATION",
            saturation: e
        })
    }

    function m(e) {
        let t = a.default.useReducedMotion;
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
            prefersReducedMotion: e
        });
        let n = a.default.useReducedMotion;
        !t && n ? r.default.applySettingsOverride({
            gifAutoPlay: {
                value: !1,
                reasonKey: l.SettingsOverrideReasonKeys.REDUCED_MOTION
            },
            animateEmoji: {
                value: !1,
                reasonKey: l.SettingsOverrideReasonKeys.REDUCED_MOTION
            },
            animateStickers: {
                value: u.StickerAnimationSettings.ANIMATE_ON_INTERACTION,
                reasonKey: l.SettingsOverrideReasonKeys.REDUCED_MOTION_STICKERS
            }
        }) : t && !n && r.default.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers")
    }

    function N(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
            syncForcedColors: e
        })
    }

    function O(e, t) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
            systemPrefersColorScheme: e,
            systemForcedColors: t
        })
    }

    function p(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
            systemPrefersContrast: e
        })
    }

    function R(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
            alwaysShowLinkDecorations: e
        })
    }

    function C(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ROLE_STYLE",
            roleStyle: e
        }), s.default.track(o.AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, {
            role_style: e
        })
    }

    function g() {
        i.default.dispatch({
            type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE"
        })
    }

    function L() {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE"
        })
    }
}