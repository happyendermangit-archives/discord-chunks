function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("898511"),
        u = n("14782"),
        s = n("629815"),
        l = n("510077"),
        c = n("92118"),
        f = n("798206"),
        d = n("569492"),
        _ = n("935741"),
        E = n("208454"),
        p = n("830721"),
        m = n("830567"),
        y = n("213324"),
        I = n("953844");

    function h(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var g = !1,
        A = !0,
        b = !1;

    function N() {
        g = !0
    }

    function R() {
        A && (r = void 0), b = !1, g = !1
    }
    var C = function() {
            A = !p.default.canUseClientThemes(E.default.getCurrentUser())
        },
        P = function() {
            var e, t, n = null === (t = c.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
            null != n && (r = I.BACKGROUND_GRADIENT_PRESETS_MAP[n])
        },
        D = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(l, e);
            var t, n, i, a, u, s = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = S(t);
                if (n) {
                    var a = S(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : h(e)
            });

            function l() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), e = s.apply(this, arguments), T(h(e), "migrations", [function(e) {
                    var t;
                    return {
                        gradientPresetId: null == e ? void 0 : null === (t = e.gradientPreset) || void 0 === t ? void 0 : t.id
                    }
                }]), e
            }
            return i = l, a = [{
                key: "initialize",
                value: function(e) {
                    null != e && (r = (null == e ? void 0 : e.gradientPresetId) != null ? I.BACKGROUND_GRADIENT_PRESETS_MAP[e.gradientPresetId] : void 0), this.waitFor(E.default, f.default, _.default, c.default), this.syncWith([E.default], C), this.syncWith([c.default], P)
                }
            }, {
                key: "getState",
                value: function() {
                    return A ? {} : {
                        gradientPresetId: null == r ? void 0 : r.id
                    }
                }
            }, {
                key: "gradientPreset",
                get: function() {
                    return r
                }
            }, {
                key: "getLinearGradient",
                value: function() {
                    return null == this.gradientPreset ? null : (0, y.getLinearGradientForBackgroundGradient)(this.gradientPreset)
                }
            }, {
                key: "isEditorOpen",
                get: function() {
                    return g
                }
            }, {
                key: "isPreview",
                get: function() {
                    return A
                }
            }, {
                key: "isCoachmark",
                get: function() {
                    return b
                }
            }, {
                key: "mobilePendingThemeIndex",
                get: function() {
                    return o
                }
            }], O(i.prototype, a), u && O(i, u), l
        }(a.default.PersistedStore);
    T(D, "displayName", "ClientThemesBackgroundStore"), T(D, "persistKey", "ClientThemesBackgroundStore"), t.default = new D(s.default, {
        UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
            var t = e.presetId;
            if (null == t) {
                r = void 0;
                return
            }
            r = I.BACKGROUND_GRADIENT_PRESETS_MAP[t]
        },
        UPDATE_MOBILE_PENDING_THEME_INDEX: function(e) {
            var t = e.mobileThemesIndex;
            if (null == t) {
                o = void 0;
                return
            }
            o = t
        },
        CLIENT_THEMES_EDITOR_OPEN: function(e) {
            (function() {
                g = !0
            })()
        },
        CLIENT_THEMES_EDITOR_CLOSE: function(e) {
            R()
        },
        RESET_PREVIEW_CLIENT_THEME: function(e) {
            r = void 0
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId,
                n = e.guildId,
                r = E.default.getCurrentUser();
            if (!(null == t || null == n || (0, l.isDismissibleContentDismissed)(u.DismissibleContent.CLIENT_THEMES_COACHMARK)) && (0, m.ageEligibleForPremiumUpsell)(r)) {
                var o = _.default.getChannel(t);
                null != o && (0, d.isGuildTextChannelType)(o.type) && (b = !0, function() {
                    g = !0
                }())
            }
        },
        LOGOUT: function(e) {
            R()
        }
    })
}