function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ThemeSelectionGroupType: function() {
            return o
        },
        trackClientThemeUpdated: function() {
            return W
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("278074"),
        c = n("898511"),
        f = n("14782"),
        d = n("751848"),
        _ = n("784184"),
        E = n("100064"),
        p = n("622780"),
        m = n("649455"),
        y = n("396586"),
        I = n("150736"),
        h = n("844615"),
        O = n("444169"),
        T = n("118197"),
        S = n("610312"),
        v = n("798206"),
        g = n("24039"),
        A = n("405026"),
        b = n("719328"),
        N = n("870331"),
        R = n("872042"),
        C = n("15949"),
        P = n("932403"),
        D = n("953844"),
        L = n("281767"),
        M = n("868615"),
        U = n("223228"),
        w = n("382021"),
        k = n("563090"),
        G = n("941504"),
        B = n("209395");

    function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function F(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function H(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return j(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {})).EDITOR = "EDITOR", r.SETTINGS = "SETTINGS";
    var x = Object.freeze((V(i = {}, "EDITOR", w.UserSettingsDelay.SLOW_USER_ACTION), V(i, "SETTINGS", w.UserSettingsDelay.INFREQUENT_USER_ACTION), i)),
        Y = a.createContext({}),
        W = function(e) {
            var t = e.isPersisted,
                n = e.themeName,
                r = e.analyticsLocations;
            N.default.track(L.AnalyticEvents.CLIENT_THEME_UPDATED, {
                feature_name: M.AnalyticsPremiumFeatureNames.CLIENT_THEME,
                theme_name: n,
                is_persisted: t,
                location_stack: r
            })
        },
        K = function(e) {
            var t = e.type,
                n = e.isPreview,
                r = e.isCoachmark,
                o = (0, l.match)({
                    type: t,
                    isPreview: n,
                    isCoachmark: r
                }).with({
                    type: "EDITOR",
                    isCoachmark: !0,
                    isPreview: !0
                }, function() {
                    return G.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER
                }).with({
                    type: "EDITOR",
                    isCoachmark: !0
                }, function() {
                    return G.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER
                }).otherwise(function() {
                    return G.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE
                });
            return a.createElement("div", {
                className: B.title
            }, a.createElement(_.Heading, {
                "aria-label": o,
                variant: "text-md/medium"
            }, o), a.createElement(T.default, {
                className: B.premiumIcon
            }))
        },
        z = function(e) {
            var t, n, r = e.type,
                o = e.isPreview,
                i = e.isCoachmark;
            if ((null === (n = (0, h.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === M.PremiumSubscriptionSKUs.TIER_2 && o) return null;
            var u = (0, l.match)({
                type: r,
                isPreview: o,
                isCoachmark: i
            }).with({
                type: "EDITOR",
                isPreview: !0
            }, function() {
                return G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
                    onPremiumClick: I.navigateToPremiumMarketingPage
                })
            }).with({
                type: "EDITOR",
                isCoachmark: !0
            }, function() {
                return G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK
            }).with({
                type: "EDITOR",
                isPreview: !1
            }, function() {
                return G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION
            }).with({
                isPreview: !0
            }, function() {
                return G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
                    onPremiumClick: I.navigateToPremiumMarketingPage
                })
            }).otherwise(function() {
                return G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS
            });
            return a.createElement(_.Heading, {
                variant: "text-sm/normal"
            }, u)
        },
        X = function(e) {
            var t, n, r = e.type,
                o = e.children,
                i = (0, b.useUID)(),
                u = (0, _.useRadioGroup)({
                    orientation: "horizontal",
                    labelledBy: i
                }),
                s = a.useMemo(function() {
                    return {
                        type: r,
                        delay: x[r]
                    }
                }, [r]);
            return a.createElement(Y.Provider, {
                value: s
            }, a.createElement("div", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        V(e, t, n[t])
                    })
                }
                return e
            }({}, u), n = (n = {
                className: B.__invalid_container
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), o))
        };
    X.Basic = function(e) {
        var t = e.className,
            n = a.useContext(Y).delay,
            r = (0, y.default)(m.default.CLIENT_THEMES_THEME_SELECTOR).analyticsLocations,
            o = H((0, c.useStateFromStoresArray)([v.default, g.default, C.default], function() {
                return [v.default.theme, null == C.default.gradientPreset, g.default.useSystemTheme === U.SystemThemeState.ON]
            }), 3),
            i = o[0],
            u = o[1],
            l = o[2],
            f = function(e) {
                (0, R.resetBackgroundGradientPreset)(), W({
                    isPersisted: !0,
                    analyticsLocations: r,
                    themeName: "default ".concat(e)
                }), (0, E.saveClientTheme)({
                    theme: e
                }, n)
            };
        return a.createElement("section", {
            className: s()(B.presets, t)
        }, a.createElement(P.DefaultThemeSelection, {
            theme: k.ThemeTypes.LIGHT,
            isSelected: u && !l && (0, d.isThemeLight)(i),
            onSelect: function() {
                return f(k.ThemeTypes.LIGHT)
            }
        }), a.createElement(P.DefaultThemeSelection, {
            theme: k.ThemeTypes.DARK,
            isSelected: u && !l && (0, d.isThemeDark)(i),
            onSelect: function() {
                return f(k.ThemeTypes.DARK)
            }
        }), a.createElement(P.DefaultThemeSelection, {
            theme: "system",
            isSelected: u && l,
            onSelect: function() {
                return f("system")
            }
        }))
    }, X.Gradient = function(e) {
        var t, r, o = e.className,
            i = e.renderCTAButtons,
            u = e.disabled,
            s = void 0 !== u && u,
            l = a.useContext(Y),
            d = l.type,
            _ = l.delay,
            T = (0, y.default)(m.default.CLIENT_THEMES_THEME_SELECTOR).analyticsLocations,
            v = H((0, c.useStateFromStoresArray)([C.default], function() {
                var e;
                return [C.default.isPreview, C.default.isCoachmark, null === (e = C.default.gradientPreset) || void 0 === e ? void 0 : e.id]
            }), 3),
            g = v[0],
            b = v[1],
            N = v[2],
            L = H(a.useState(!1), 2),
            w = L[0],
            k = L[1],
            j = H(a.useState(-1), 2),
            V = j[0],
            x = j[1],
            X = (0, c.useStateFromStores)([p.default], function() {
                return p.default.useReducedMotion
            }),
            q = (null === (r = (0, h.usePremiumTrialOffer)()) || void 0 === r ? void 0 : null === (t = r.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === M.PremiumSubscriptionSKUs.TIER_2;
        a.useEffect(function() {
            (V === D.BACKGROUND_GRADIENT_PRESETS.length - 2 && "EDITOR" === d || N === f.BackgroundGradientPresetId.EASTER_EGG) && k(!0)
        }, [V, d, N]);
        var Q = function(e, t) {
            if ((0, R.updateBackgroundGradientPreset)(e.id), W({
                    isPersisted: !g,
                    analyticsLocations: T,
                    themeName: f.BackgroundGradientPresetId[e.id]
                }), g) {
                (0, S.setUseSystemTheme)(U.SystemThemeState.OFF);
                return
            }
            if ((0, E.saveClientTheme)({
                    backgroundGradientPresetId: e.id,
                    theme: e.theme
                }, _), null != t) {
                if (w && k(!1), t <= V || 0 === t) {
                    x(0);
                    return
                }
                x(function(e) {
                    return e + 1
                })
            }
        };
        return a.createElement("section", {
            className: o
        }, "EDITOR" === d && g && q ? a.createElement(O.default, {
            type: M.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
            subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2
        }, G.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
            onPremiumClick: I.navigateToPremiumMarketingPage
        })) : a.createElement("div", {
            className: B.header
        }, a.createElement("div", {
            className: B.headings
        }, a.createElement(K, {
            type: d,
            isPreview: g,
            isCoachmark: b
        }), a.createElement(z, {
            type: d,
            isPreview: g,
            isCoachmark: b
        })), null == i ? void 0 : i()), a.createElement("div", {
            className: B.presets
        }, D.BACKGROUND_GRADIENT_PRESETS.filter(function(e) {
            return e.id !== f.BackgroundGradientPresetId.EASTER_EGG
        }).map(function(e, t) {
            return a.createElement(P.GradientThemeSelection, {
                key: e.id,
                preset: e,
                isSelected: N === e.id,
                onSelect: function() {
                    return Q(e, t)
                },
                disabled: s,
                tabIndex: 0 !== t || s ? void 0 : 0
            })
        }), function() {
            if (!w) return null;
            var e = D.BACKGROUND_GRADIENT_PRESETS_MAP[f.BackgroundGradientPresetId.EASTER_EGG];
            if (null == e) return null;

            function t() {
                var e;
                return e = function() {
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e("5217").then(n.t.bind(n, "801048", 19))];
                            case 1:
                                return [2, e.sent().default]
                        }
                    })
                }, (t = function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            F(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            F(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }).apply(this, arguments)
            }
            return a.createElement("div", {
                className: B.easterEggSelection
            }, a.createElement(P.GradientThemeSelection, {
                preset: e,
                isSelected: N === f.BackgroundGradientPresetId.EASTER_EGG,
                onSelect: function() {
                    return Q(e)
                }
            }), a.createElement(A.default, {
                importData: function() {
                    return t.apply(this, arguments)
                },
                shouldAnimate: !X,
                className: B.sparkles
            }))
        }()))
    }, t.default = X
}