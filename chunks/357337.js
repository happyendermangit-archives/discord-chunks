function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disableKeyboardMode: function() {
            return E
        },
        enableKeyboardMode: function() {
            return _
        },
        keyboardNavigationExplainerModalSeen: function() {
            return y
        },
        setAlwaysShowLinkDecorations: function() {
            return g
        },
        setFontSize: function() {
            return c
        },
        setMessageGroupSpacing: function() {
            return f
        },
        setPrefersReducedMotion: function() {
            return O
        },
        setRoleStyle: function() {
            return A
        },
        setSaturation: function() {
            return h
        },
        setSyncForcedColors: function() {
            return T
        },
        setZoom: function() {
            return d
        },
        systemColorPreferencesChanged: function() {
            return S
        },
        systemPrefersContrastChanged: function() {
            return v
        },
        systemPrefersReducedMotionChanged: function() {
            return I
        },
        toggleDarkSidebar: function() {
            return m
        },
        toggleDesaturateUserColors: function() {
            return p
        },
        toggleSubmitButton: function() {
            return b
        },
        toggleSyncProfileThemeWithUserTheme: function() {
            return N
        }
    });
    var r = n("629815"),
        o = n("100064"),
        i = n("870331"),
        a = n("622780"),
        u = n("281767"),
        s = n("530951"),
        l = n("271172");

    function c(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_FONT_SIZE",
            fontSize: e
        })
    }

    function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
            messageGroupSpacing: e
        })
    }

    function d(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_ZOOM",
            zoom: e
        })
    }

    function _() {
        r.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE"
        }), i.default.track(u.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !0
        })
    }

    function E() {
        r.default.dispatch({
            type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE"
        }), i.default.track(u.AnalyticEvents.KEYBOARD_MODE_TOGGLED, {
            enabled: !1
        })
    }

    function p() {
        r.default.dispatch({
            type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE"
        })
    }

    function m() {
        r.default.dispatch({
            type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE"
        })
    }

    function y() {
        r.default.dispatch({
            type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN"
        })
    }

    function I(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
            systemPrefersReducedMotion: e
        })
    }

    function h(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_SATURATION",
            saturation: e
        })
    }

    function O(e) {
        var t = a.default.useReducedMotion;
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
            prefersReducedMotion: e
        });
        var n = a.default.useReducedMotion;
        !t && n ? o.default.applySettingsOverride({
            gifAutoPlay: {
                value: !1,
                reasonKey: s.SettingsOverrideReasonKeys.REDUCED_MOTION
            },
            animateEmoji: {
                value: !1,
                reasonKey: s.SettingsOverrideReasonKeys.REDUCED_MOTION
            },
            animateStickers: {
                value: l.StickerAnimationSettings.ANIMATE_ON_INTERACTION,
                reasonKey: s.SettingsOverrideReasonKeys.REDUCED_MOTION_STICKERS
            }
        }) : t && !n && o.default.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers")
    }

    function T(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
            syncForcedColors: e
        })
    }

    function S(e, t) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
            systemPrefersColorScheme: e,
            systemForcedColors: t
        })
    }

    function v(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
            systemPrefersContrast: e
        })
    }

    function g(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
            alwaysShowLinkDecorations: e
        })
    }

    function A(e) {
        r.default.dispatch({
            type: "ACCESSIBILITY_SET_ROLE_STYLE",
            roleStyle: e
        }), i.default.track(u.AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, {
            role_style: e
        })
    }

    function b() {
        r.default.dispatch({
            type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE"
        })
    }

    function N() {
        r.default.dispatch({
            type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE"
        })
    }
}