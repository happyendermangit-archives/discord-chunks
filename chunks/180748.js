function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setFontSize: function() {
            return c
        },
        setMessageGroupSpacing: function() {
            return d
        },
        setZoom: function() {
            return f
        },
        enableKeyboardMode: function() {
            return E
        },
        disableKeyboardMode: function() {
            return p
        },
        toggleDesaturateUserColors: function() {
            return h
        },
        toggleDarkSidebar: function() {
            return _
        },
        keyboardNavigationExplainerModalSeen: function() {
            return S
        },
        systemPrefersReducedMotionChanged: function() {
            return m
        },
        setSaturation: function() {
            return T
        },
        setPrefersReducedMotion: function() {
            return g
        },
        setSyncForcedColors: function() {
            return I
        },
        systemColorPreferencesChanged: function() {
            return C
        },
        systemPrefersContrastChanged: function() {
            return v
        },
        setAlwaysShowLinkDecorations: function() {
            return A
        },
        setRoleStyle: function() {
            return R
        },
        toggleSubmitButton: function() {
            return N
        },
        toggleSyncProfileThemeWithUserTheme: function() {
            return O
        }
    });
    var i = n("913144"),
        r = n("452804"),
        s = n("599110"),
        a = n("206230"),
        o = n("49111"),
        l = n("468200"),
        u = n("560241");

    function c(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_FONT_SIZE",
            fontSize: e
        })
    }

    function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
            messageGroupSpacing: e
        })
    }

    function f(e) {
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

    function p() {
        i.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE"
        }), s.default.track(o.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !1
        })
    }

    function h() {
        i.default.dispatch({
            type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE"
        })
    }

    function _() {
        i.default.dispatch({
            type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE"
        })
    }

    function S() {
        i.default.dispatch({
            type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN"
        })
    }

    function m(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
            systemPrefersReducedMotion: e
        })
    }

    function T(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_SATURATION",
            saturation: e
        })
    }

    function g(e) {
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

    function I(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
            syncForcedColors: e
        })
    }

    function C(e, t) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
            systemPrefersColorScheme: e,
            systemForcedColors: t
        })
    }

    function v(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
            systemPrefersContrast: e
        })
    }

    function A(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
            alwaysShowLinkDecorations: e
        })
    }

    function R(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ROLE_STYLE",
            roleStyle: e
        }), s.default.track(o.AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, {
            role_style: e
        })
    }

    function N() {
        i.default.dispatch({
            type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE"
        })
    }

    function O() {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE"
        })
    }
}