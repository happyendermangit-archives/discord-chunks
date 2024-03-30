function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I = n("898511"),
        h = n("629815"),
        O = n("281767");

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var g = O.FormStates.CLOSED,
        A = {},
        b = !1;

    function N() {
        g = O.FormStates.CLOSED, A = {}, E = null, p = void 0, m = []
    }

    function R() {
        C(), P(), A = {}, g = O.FormStates.OPEN
    }

    function C() {
        a = void 0, d = void 0, u = void 0
    }

    function P() {
        l = void 0, c = void 0, f = void 0, _ = void 0, s = void 0
    }
    var D = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(I, e);
        var t, n, r, o, i, y = (t = I, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function I() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, I), y.apply(this, arguments)
        }
        return r = I, o = [{
            key: "getFormState",
            value: function() {
                return g
            }
        }, {
            key: "getErrors",
            value: function() {
                return A
            }
        }, {
            key: "showNotice",
            value: function() {
                return void 0 !== a || void 0 !== u || void 0 !== s || void 0 !== l || void 0 !== c || void 0 !== f || void 0 !== d || void 0 !== _
            }
        }, {
            key: "getPendingAvatar",
            value: function() {
                return a
            }
        }, {
            key: "getPendingAvatarDecoration",
            value: function() {
                return u
            }
        }, {
            key: "getPendingProfileEffectId",
            value: function() {
                return s
            }
        }, {
            key: "getPendingBanner",
            value: function() {
                return l
            }
        }, {
            key: "getPendingBio",
            value: function() {
                return c
            }
        }, {
            key: "getPendingNickname",
            value: function() {
                return d
            }
        }, {
            key: "getPendingPronouns",
            value: function() {
                return f
            }
        }, {
            key: "getPendingAccentColor",
            value: function() {
                return d
            }
        }, {
            key: "getPendingThemeColors",
            value: function() {
                return _
            }
        }, {
            key: "getAllPending",
            value: function() {
                return {
                    pendingAvatar: a,
                    pendingAvatarDecoration: u,
                    pendingProfileEffectId: s,
                    pendingBanner: l,
                    pendingBio: c,
                    pendingPronouns: f,
                    pendingNickname: d,
                    pendingThemeColors: _
                }
            }
        }, {
            key: "getGuild",
            value: function() {
                return E
            }
        }, {
            key: "getSource",
            value: function() {
                return p
            }
        }, {
            key: "getAnalyticsLocations",
            value: function() {
                return m
            }
        }, {
            key: "getIsDisableSubmit",
            value: function() {
                return b
            }
        }], T(r.prototype, o), i && T(r, i), I
    }(I.default.Store);
    i = "GuildIdentitySettingsStore", (o = "displayName") in(r = D) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new D(h.default, {
        GUILD_IDENTITY_SETTINGS_INIT: function(e) {
            E = e.guild, g = O.FormStates.OPEN, A = {}, p = e.source, m = e.analyticsLocations
        },
        GUILD_IDENTITY_SETTINGS_CLOSE: N,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
            R(), N()
        },
        GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
            E = e.guild, A = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
            g = O.FormStates.SUBMITTING, A = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            if (g !== O.FormStates.SUBMITTING) return !1;
            g = O.FormStates.OPEN, A = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_PROFILE_UPDATE_FAILURE: function(e) {
            g = O.FormStates.OPEN, A = e.errors
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
            a = e.avatar
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function(e) {
            u = e.avatarDecoration
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
            s = e.profileEffectId
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
            l = e.banner
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
            c = e.bio
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
            f = e.pronouns
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
            d = e.nickname
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
            _ = e.themeColors
        },
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: P,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: R,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: R,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
            A = {}
        },
        GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
            b = e.disable
        }
    })
}