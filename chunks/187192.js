function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleProfileAccessibilityTooltipViewed: function() {
            return m
        },
        resetPendingProfileChanges: function() {
            return y
        },
        saveProfileChanges: function() {
            return E
        },
        setPendingAccentColor: function() {
            return T
        },
        setPendingBanner: function() {
            return I
        },
        setPendingBio: function() {
            return h
        },
        setPendingPronouns: function() {
            return O
        },
        setPendingThemeColors: function() {
            return S
        },
        setTryItOutAvatar: function() {
            return v
        },
        setTryItOutAvatarDecoration: function() {
            return g
        },
        setTryItOutBanner: function() {
            return A
        },
        setTryItOutThemeColors: function() {
            return b
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("146591"),
        a = n("261535"),
        u = n("53867"),
        s = n("208454"),
        l = n("870331"),
        c = n("281767"),
        f = n("868615");

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e) {
        l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
            feature_name: e,
            feature_tier: f.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
        })
    }

    function E(e, t) {
        return p.apply(this, arguments)
    }

    function p() {
        var e;
        return e = function(e, t) {
            var n, l, f, d, _, E, p, m, y;
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
            }(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (null == (l = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return [2];
                        f = u.UseLegacyChatInput.getSetting(), null != e.bio && f && (e.bio = a.default.parse(void 0, e.bio).content), I.label = 1;
                    case 1:
                        return I.trys.push([1, 3, , 4]), o.default.dispatch({
                            type: "USER_PROFILE_UPDATE_START",
                            userId: l
                        }), [4, r.HTTP.patch({
                            url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                            body: e
                        })];
                    case 2:
                        return (d = I.sent()).ok ? (E = null === (_ = d.body.profile_effect) || void 0 === _ ? void 0 : _.id, o.default.dispatch(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r, o, i;
                                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[o] = i
                                })
                            }
                            return e
                        }({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: l,
                            profileEffectId: E
                        }, d.body))) : (p = new i.APIError(d), o.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: d.body,
                            apiError: p
                        })), [2, d];
                    case 3:
                        return m = I.sent(), y = new i.APIError(m), o.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: {},
                            apiError: y
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        }, (p = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    d(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    d(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function m() {
        o.default.dispatch({
            type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
        })
    }

    function y() {
        o.default.dispatch({
            type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
        })
    }

    function I(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
            banner: e
        })
    }

    function h(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
            bio: e
        })
    }

    function O(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
            pronouns: e
        })
    }

    function T(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
            color: e
        })
    }

    function S(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
            themeColors: e
        })
    }

    function v(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
            avatar: e
        }), _(f.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
    }

    function g(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
            avatarDecoration: e
        }), _(f.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
    }

    function A(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
            banner: e
        }), _(f.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
    }

    function b(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
            themeColors: e
        }), _(f.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
    }
}