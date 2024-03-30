function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("242880"),
        a = n("751848"),
        u = n("629815"),
        s = n("53867"),
        l = n("851285"),
        c = n("618396"),
        f = n("281767"),
        d = n("401146");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = {
            fontSize: f.Accessibility.FONT_SIZE_DEFAULT,
            zoom: f.Accessibility.ZOOM_DEFAULT,
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
        O = h,
        T = {
            12: "font-size-12",
            14: "font-size-14",
            15: "font-size-15",
            16: "font-size-16",
            18: "font-size-18",
            20: "font-size-20",
            24: "font-size-24"
        },
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = p(t);
                if (n) {
                    var a = p(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "initialize",
                value: function(e) {
                    this.waitFor(l.default), isNaN((O = m({}, h, null != e ? e : null)).fontSize) && (O.fontSize = f.Accessibility.FONT_SIZE_DEFAULT), 0 > d.MESSAGE_GROUP_SPACING.indexOf(null != O.messageGroupSpacing ? O.messageGroupSpacing : -1) && (O.messageGroupSpacing = null)
                }
            }, {
                key: "fontScale",
                get: function() {
                    return O.fontSize / f.Accessibility.FONT_SIZE_DEFAULT * 100
                }
            }, {
                key: "fontSize",
                get: function() {
                    return O.fontSize
                }
            }, {
                key: "isFontScaledUp",
                get: function() {
                    return O.fontSize > f.Accessibility.FONT_SIZE_DEFAULT
                }
            }, {
                key: "isFontScaledDown",
                get: function() {
                    return O.fontSize < f.Accessibility.FONT_SIZE_DEFAULT
                }
            }, {
                key: "fontScaleClass",
                get: function() {
                    var e, t = null !== (e = T[this.fontSize]) && void 0 !== e ? e : "";
                    return this.isFontScaledUp ? "a11y-font-scaled-up ".concat(t) : this.isFontScaledDown ? "a11y-font-scaled-down ".concat(t) : "".concat(t)
                }
            }, {
                key: "zoom",
                get: function() {
                    return O.zoom
                }
            }, {
                key: "isZoomedIn",
                get: function() {
                    return O.zoom > f.Accessibility.ZOOM_DEFAULT
                }
            }, {
                key: "isZoomedOut",
                get: function() {
                    return O.zoom < f.Accessibility.ZOOM_DEFAULT
                }
            }, {
                key: "keyboardModeEnabled",
                get: function() {
                    return O.keyboardModeEnabled
                }
            }, {
                key: "colorblindMode",
                get: function() {
                    return O.colorblindMode
                }
            }, {
                key: "lowContrastMode",
                get: function() {
                    return O.lowContrastMode
                }
            }, {
                key: "saturation",
                get: function() {
                    return O.saturation
                }
            }, {
                key: "contrast",
                get: function() {
                    return O.contrast
                }
            }, {
                key: "desaturateUserColors",
                get: function() {
                    return O.desaturateUserColors
                }
            }, {
                key: "forcedColorsModalSeen",
                get: function() {
                    return O.forcedColorsModalSeen
                }
            }, {
                key: "keyboardNavigationExplainerModalSeen",
                get: function() {
                    return O.keyboardNavigationExplainerModalSeen
                }
            }, {
                key: "messageGroupSpacing",
                get: function() {
                    return null != O.messageGroupSpacing ? O.messageGroupSpacing : s.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING
                }
            }, {
                key: "isMessageGroupSpacingIncreased",
                get: function() {
                    var e = s.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing > e
                }
            }, {
                key: "isMessageGroupSpacingDecreased",
                get: function() {
                    var e = s.MessageDisplayCompact.getSetting() ? d.DEFAULT_COMPACT_SPACING : d.DEFAULT_COZY_SPACING;
                    return this.messageGroupSpacing < e
                }
            }, {
                key: "isSubmitButtonEnabled",
                get: function() {
                    return O.submitButtonEnabled
                }
            }, {
                key: "syncProfileThemeWithUserTheme",
                get: function() {
                    return O.syncProfileThemeWithUserTheme
                }
            }, {
                key: "systemPrefersReducedMotion",
                get: function() {
                    return O.systemPrefersReducedMotion
                }
            }, {
                key: "rawPrefersReducedMotion",
                get: function() {
                    return O.prefersReducedMotion
                }
            }, {
                key: "useReducedMotion",
                get: function() {
                    switch (O.prefersReducedMotion) {
                        case "no-preference":
                            return !1;
                        case "reduce":
                            return !0;
                        default:
                            return "reduce" === O.systemPrefersReducedMotion
                    }
                }
            }, {
                key: "systemForcedColors",
                get: function() {
                    return O.systemForcedColors
                }
            }, {
                key: "syncForcedColors",
                get: function() {
                    return O.syncForcedColors
                }
            }, {
                key: "useForcedColors",
                get: function() {
                    return !!O.syncForcedColors && "active" === O.systemForcedColors || !1
                }
            }, {
                key: "systemPrefersContrast",
                get: function() {
                    return O.systemPrefersContrast
                }
            }, {
                key: "systemPrefersCrossfades",
                get: function() {
                    return O.systemPrefersCrossfades
                }
            }, {
                key: "alwaysShowLinkDecorations",
                get: function() {
                    return O.alwaysShowLinkDecorations
                }
            }, {
                key: "roleStyle",
                get: function() {
                    return O.roleStyle
                }
            }, {
                key: "disableVoiceBackgrounds",
                get: function() {
                    return O.disableVoiceBackgrounds
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return O
                }
            }], _(r.prototype, o), i && _(r, i), u
        }(o.default.DeviceSettingsStore);
    E(S, "displayName", "AccessibilityStore"), E(S, "persistKey", "AccessibilityStore"), E(S, "migrations", [function() {
        var e = {
                FONT_SCALE: "a11yFontScale",
                ZOOM: "a11yZoom",
                COLORBLIND_MODE: "a11yColorblindMode"
            },
            t = i.Storage.get(e.FONT_SCALE) || 100,
            n = i.Storage.get(e.ZOOM) || f.Accessibility.ZOOM_DEFAULT,
            r = i.Storage.get(e.COLORBLIND_MODE) || !1;
        return i.Storage.remove(e.FONT_SCALE), i.Storage.remove(e.ZOOM), i.Storage.remove(e.COLORBLIND_MODE), {
            fontScale: t,
            zoom: n,
            colorblindMode: r,
            keyboardModeEnabled: !1
        }
    }, function(e) {
        var t = e.fontScale,
            n = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["fontScale"]),
            r = 16;
        switch (t) {
            case 82:
                r = 12;
                break;
            case 92:
                r = 15;
                break;
            case 100:
                r = 16;
                break;
            case 110:
                r = 18;
                break;
            case 125:
                r = 20;
                break;
            case 150:
                r = 24
        }
        return y(m({}, n), {
            fontSize: r
        })
    }, function(e) {
        return y(m({}, e), {
            darkSidebar: !1
        })
    }, function(e) {
        return y(m({}, e), {
            messageGroupSpacing: null
        })
    }, function(e) {
        return y(m({}, e), {
            systemPrefersReducedMotion: "no-preference",
            prefersReducedMotion: "auto"
        })
    }, function(e) {
        return y(m({}, e), {
            alwaysShowLinkDecorations: e.saturation <= a.LOW_SATURATION_THRESHOLD
        })
    }, function(e) {
        return y(m({}, e), {
            disableVoiceBackgrounds: !1
        })
    }]);
    var v = new S(u.default, {
        ACCESSIBILITY_SET_FONT_SIZE: function(e) {
            var t, n = (t = e.fontSize, f.Accessibility.FONT_SIZES.indexOf(t) >= 0 ? t : f.Accessibility.FONT_SIZE_DEFAULT);
            if (n > f.Accessibility.FONT_SIZE_MAX || n < f.Accessibility.FONT_SIZE_MIN || O.fontSize === n) return !1;
            (O = m({}, O)).fontSize = n
        },
        ACCESSIBILITY_SET_ZOOM: function(e) {
            if (e.zoom < f.Accessibility.ZOOM_MIN || e.zoom > f.Accessibility.ZOOM_MAX || O.zoom === e.zoom) return !1;
            (O = m({}, O)).zoom = e.zoom, c.default.setZoomFactor(O.zoom)
        },
        ACCESSIBILITY_RESET_TO_DEFAULT: function() {
            var e = O.fontSize !== f.Accessibility.FONT_SIZE_DEFAULT,
                t = O.zoom !== f.Accessibility.ZOOM_DEFAULT;
            if (!e && !t) return !1;
            (O = m({}, O)).fontSize !== f.Accessibility.FONT_SIZE_DEFAULT && (O.fontSize = f.Accessibility.FONT_SIZE_DEFAULT), O.zoom !== f.Accessibility.ZOOM_DEFAULT && (O.zoom = f.Accessibility.ZOOM_DEFAULT, c.default.setZoomFactor(O.zoom))
        },
        ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function() {
            if (O.keyboardModeEnabled) return !1;
            (O = m({}, O)).keyboardModeEnabled = !0
        },
        ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function() {
            if (!O.keyboardModeEnabled) return !1;
            (O = m({}, O)).keyboardModeEnabled = !1
        },
        ACCESSIBILITY_COLORBLIND_TOGGLE: function() {
            (O = m({}, O)).colorblindMode = !O.colorblindMode
        },
        ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function() {
            (O = m({}, O)).lowContrastMode = !O.lowContrastMode
        },
        ACCESSIBILITY_SET_SATURATION: function(e) {
            (O = m({}, O)).saturation = e.saturation
        },
        ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function() {
            (O = m({}, O)).desaturateUserColors = !O.desaturateUserColors
        },
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
            var t;
            return O = y(m({}, O), {
                systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : "none"
            }), !0
        },
        ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function(e) {
            if (O.systemPrefersContrast === e.systemPrefersContrast) return !1;
            O = y(m({}, O), {
                systemPrefersContrast: e.systemPrefersContrast
            })
        },
        ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function(e) {
            if (O.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
            O = y(m({}, O), {
                systemPrefersReducedMotion: e.systemPrefersReducedMotion
            })
        },
        ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function(e) {
            if (O.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
            O = y(m({}, O), {
                systemPrefersCrossfades: e.systemPrefersCrossfades
            })
        },
        ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function(e) {
            if (O.prefersReducedMotion === e.prefersReducedMotion) return !1;
            O = y(m({}, O), {
                prefersReducedMotion: e.prefersReducedMotion
            })
        },
        ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function(e) {
            O.syncForcedColors = e.syncForcedColors
        },
        ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function(e) {
            O = y(m({}, O), {
                alwaysShowLinkDecorations: e.alwaysShowLinkDecorations
            })
        },
        ACCESSIBILITY_SET_ROLE_STYLE: function(e) {
            O.roleStyle = e.roleStyle
        },
        ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function() {
            O.forcedColorsModalSeen = !0
        },
        KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function() {
            O = y(m({}, O), {
                keyboardNavigationExplainerModalSeen: !0
            })
        },
        ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function(e) {
            var t = e.messageGroupSpacing;
            O = y(m({}, O), {
                messageGroupSpacing: t
            })
        },
        ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function() {
            (O = m({}, O)).submitButtonEnabled = !O.submitButtonEnabled
        },
        ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function() {
            (O = m({}, O)).syncProfileThemeWithUserTheme = !O.syncProfileThemeWithUserTheme
        },
        ACCESSIBILITY_SET_CONTRAST: function(e) {
            var t = e.contrast;
            O = y(m({}, O), {
                contrast: t
            })
        },
        ACCESSIBILITY_TOGGLE_DISABLE_VOICE_BACKGROUNDS: function() {
            (O = m({}, O)).disableVoiceBackgrounds = !O.disableVoiceBackgrounds
        }
    });
    t.default = v
}