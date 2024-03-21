function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setFontSize: function() {
            return d
        },
        setMessageGroupSpacing: function() {
            return c
        },
        setZoom: function() {
            return _
        },
        enableKeyboardMode: function() {
            return f
        },
        disableKeyboardMode: function() {
            return E
        },
        toggleDesaturateUserColors: function() {
            return h
        },
        toggleDarkSidebar: function() {
            return g
        },
        keyboardNavigationExplainerModalSeen: function() {
            return m
        },
        systemPrefersReducedMotionChanged: function() {
            return p
        },
        setSaturation: function() {
            return S
        },
        setPrefersReducedMotion: function() {
            return T
        },
        setSyncForcedColors: function() {
            return v
        },
        systemColorPreferencesChanged: function() {
            return I
        },
        systemPrefersContrastChanged: function() {
            return A
        },
        setAlwaysShowLinkDecorations: function() {
            return C
        },
        setRoleStyle: function() {
            return y
        },
        toggleSubmitButton: function() {
            return N
        },
        toggleSyncProfileThemeWithUserTheme: function() {
            return R
        }
    });
    var i = n("913144"),
        s = n("452804"),
        r = n("599110"),
        a = n("206230"),
        o = n("49111"),
        l = n("468200"),
        u = n("560241");

    function d(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_FONT_SIZE",
            fontSize: e
        })
    }

    function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
            messageGroupSpacing: e
        })
    }

    function _(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ZOOM",
            zoom: e
        })
    }

    function f() {
        i.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE"
        }), r.default.track(o.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !0
        })
    }

    function E() {
        i.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE"
        }), r.default.track(o.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !1
        })
    }

    function h() {
        i.default.dispatch({
            type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE"
        })
    }

    function g() {
        i.default.dispatch({
            type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE"
        })
    }

    function m() {
        i.default.dispatch({
            type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN"
        })
    }

    function p(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
            systemPrefersReducedMotion: e
        })
    }

    function S(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_SATURATION",
            saturation: e
        })
    }

    function T(e) {
        let t = a.default.useReducedMotion;
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
            prefersReducedMotion: e
        });
        let n = a.default.useReducedMotion;
        !t && n ? s.default.applySettingsOverride({
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
        }) : t && !n && s.default.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers")
    }

    function v(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
            syncForcedColors: e
        })
    }

    function I(e, t) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
            systemPrefersColorScheme: e,
            systemForcedColors: t
        })
    }

    function A(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
            systemPrefersContrast: e
        })
    }

    function C(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
            alwaysShowLinkDecorations: e
        })
    }

    function y(e) {
        i.default.dispatch({
            type: "ACCESSIBILITY_SET_ROLE_STYLE",
            roleStyle: e
        }), r.default.track(o.AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, {
            role_style: e
        })
    }

    function N() {
        i.default.dispatch({
            type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE"
        })
    }

    function R() {
        i.default.dispatch({
            type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE"
        })
    }
}