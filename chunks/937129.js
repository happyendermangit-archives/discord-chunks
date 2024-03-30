function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O, T = n("63202"),
        S = n("898511"),
        v = n("629815"),
        g = n("281767");

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var R = g.FormStates.CLOSED,
        C = {},
        P = !1;

    function D() {
        R = g.FormStates.OPEN, C = {}
    }

    function L() {
        R = g.FormStates.CLOSED, C = {}
    }

    function M() {
        U(), w(), C = {}
    }

    function U() {
        a = void 0, u = void 0, s = void 0, l = void 0
    }

    function w() {
        c = void 0, f = void 0, d = void 0, _ = void 0, E = void 0, l = void 0
    }

    function k() {
        m = void 0, y = void 0, I = void 0, h = void 0, p = void 0
    }
    var G = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(e, t)
        }(T, e);
        var t, n, r, o, i, O = (t = T, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = b(t);
            if (n) {
                var a = b(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function T() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), O.apply(this, arguments)
        }
        return r = T, o = [{
            key: "getFormState",
            value: function() {
                return R
            }
        }, {
            key: "getErrors",
            value: function() {
                return C
            }
        }, {
            key: "showNotice",
            value: function() {
                return void 0 !== a || void 0 !== c || void 0 !== f || void 0 !== d || void 0 !== _ || void 0 !== E || void 0 !== s || void 0 !== l || void 0 !== u
            }
        }, {
            key: "getPendingAvatar",
            value: function() {
                return a
            }
        }, {
            key: "getPendingGlobalName",
            value: function() {
                return u
            }
        }, {
            key: "getPendingBanner",
            value: function() {
                return c
            }
        }, {
            key: "getPendingBio",
            value: function() {
                return f
            }
        }, {
            key: "getPendingPronouns",
            value: function() {
                return d
            }
        }, {
            key: "getPendingAccentColor",
            value: function() {
                return _
            }
        }, {
            key: "getPendingThemeColors",
            value: function() {
                return E
            }
        }, {
            key: "getPendingAvatarDecoration",
            value: function() {
                return s
            }
        }, {
            key: "getPendingProfileEffectId",
            value: function() {
                return l
            }
        }, {
            key: "getAllPending",
            value: function() {
                return {
                    pendingAvatar: a,
                    pendingBanner: c,
                    pendingBio: f,
                    pendingPronouns: d,
                    pendingAccentColor: _,
                    pendingThemeColors: E,
                    pendingAvatarDecoration: s,
                    pendingProfileEffectId: l,
                    pendingGlobalName: u
                }
            }
        }, {
            key: "getTryItOutThemeColors",
            value: function() {
                return p
            }
        }, {
            key: "getTryItOutAvatar",
            value: function() {
                return m
            }
        }, {
            key: "getTryItOutAvatarDecoration",
            value: function() {
                return y
            }
        }, {
            key: "getTryItOutProfileEffectId",
            value: function() {
                return I
            }
        }, {
            key: "getTryItOutBanner",
            value: function() {
                return h
            }
        }, {
            key: "getAllTryItOut",
            value: function() {
                return {
                    tryItOutThemeColors: p,
                    tryItOutAvatar: m,
                    tryItOutAvatarDecoration: y,
                    tryItOutProfileEffectId: I,
                    tryItOutBanner: h
                }
            }
        }, {
            key: "getIsDisableSubmit",
            value: function() {
                return P
            }
        }], A(r.prototype, o), i && A(r, i), T
    }(S.default.Store);
    i = "UserSettingsAccountStore", (o = "displayName") in(r = G) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new G(v.default, {
        USER_SETTINGS_ACCOUNT_INIT: D,
        USER_SETTINGS_MODAL_INIT: D,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: D,
        USER_SETTINGS_MODAL_SET_SECTION: function(e) {
            return e.section === g.UserSettingsSections.ACCOUNT && D()
        },
        USER_SETTINGS_ACCOUNT_CLOSE: L,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
            M(), k(), L()
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function() {
            R = g.FormStates.SUBMITTING, C = {}
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
            var t;
            if (R !== g.FormStates.SUBMITTING) return !1;
            R = g.FormStates.OPEN, C = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
            a = e.avatar, m = void 0
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
            u = e.globalName
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
            s = e.avatarDecoration
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
            var t = e.item;
            (null == t ? void 0 : t.type) === T.CollectiblesItemType.PROFILE_EFFECT ? (y = null, I = null == t ? void 0 : t.id) : (I = null, y = t)
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
            l = e.profileEffectId
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
            c = e.banner
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
            f = e.bio
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
            d = e.pronouns
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
            _ = e.color
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
            E = e.themeColors
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
            m = e.avatar
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
            y = e.avatarDecoration
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
            I = e.profileEffectId
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
            h = e.banner
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
            p = e.themeColors
        },
        USER_SETTINGS_CLEAR_ERRORS: function() {
            C = {}
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: U,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: w,
        USER_SETTINGS_RESET_ALL_PENDING: M,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: k,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
            s = void 0
        },
        LOGOUT: function() {
            a = void 0
        },
        USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
            P = e.disable
        }
    })
}