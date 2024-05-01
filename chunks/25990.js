function(e, t, n) {
    "use strict";
    let i, r, a, s, o, l, u, d, _, c, E, I, T, f;
    n.r(t);
    var S, h, A, m, N = n("979554"),
        p = n("442837"),
        O = n("570140"),
        R = n("981631");
    let C = R.FormStates.CLOSED,
        g = {};

    function L() {
        C = R.FormStates.OPEN, g = {}
    }

    function v() {
        C = R.FormStates.CLOSED, g = {}
    }

    function D() {
        M(), y(), g = {}
    }

    function M() {
        i = void 0, r = void 0, a = void 0, s = void 0
    }

    function y() {
        o = void 0, l = void 0, u = void 0, d = void 0, _ = void 0, s = void 0
    }

    function P() {
        E = void 0, I = void 0, T = void 0, f = void 0, c = void 0
    }
    class U extends(m = p.default.Store) {
        getFormState() {
            return C
        }
        getErrors() {
            return g
        }
        showNotice() {
            return void 0 !== i || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== d || void 0 !== _ || void 0 !== a || void 0 !== s || void 0 !== r
        }
        getIsSubmitDisabled() {
            return void 0 !== l && l.length > R.BIO_MAX_LENGTH
        }
        getPendingAvatar() {
            return i
        }
        getPendingGlobalName() {
            return r
        }
        getPendingBanner() {
            return o
        }
        getPendingBio() {
            return l
        }
        getPendingPronouns() {
            return u
        }
        getPendingAccentColor() {
            return d
        }
        getPendingThemeColors() {
            return _
        }
        getPendingAvatarDecoration() {
            return a
        }
        getPendingProfileEffectId() {
            return s
        }
        getAllPending() {
            return {
                pendingAvatar: i,
                pendingBanner: o,
                pendingBio: l,
                pendingPronouns: u,
                pendingAccentColor: d,
                pendingThemeColors: _,
                pendingAvatarDecoration: a,
                pendingProfileEffectId: s,
                pendingGlobalName: r
            }
        }
        getTryItOutThemeColors() {
            return c
        }
        getTryItOutAvatar() {
            return E
        }
        getTryItOutAvatarDecoration() {
            return I
        }
        getTryItOutProfileEffectId() {
            return T
        }
        getTryItOutBanner() {
            return f
        }
        getAllTryItOut() {
            return {
                tryItOutThemeColors: c,
                tryItOutAvatar: E,
                tryItOutAvatarDecoration: I,
                tryItOutProfileEffectId: T,
                tryItOutBanner: f
            }
        }
    }
    A = "UserSettingsAccountStore", (h = "displayName") in(S = U) ? Object.defineProperty(S, h, {
        value: A,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : S[h] = A, t.default = new U(O.default, {
        USER_SETTINGS_ACCOUNT_INIT: L,
        USER_SETTINGS_MODAL_INIT: L,
        USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: L,
        USER_SETTINGS_MODAL_SET_SECTION: function(e) {
            let {
                section: t
            } = e;
            return t === R.UserSettingsSections.ACCOUNT && L()
        },
        USER_SETTINGS_ACCOUNT_CLOSE: v,
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
            D(), P(), v()
        },
        USER_SETTINGS_ACCOUNT_SUBMIT: function() {
            C = R.FormStates.SUBMITTING, g = {}
        },
        USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
            var t;
            if (C !== R.FormStates.SUBMITTING) return !1;
            C = R.FormStates.OPEN, g = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
            let {
                avatar: t
            } = e;
            i = t, E = void 0
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
            let {
                globalName: t
            } = e;
            r = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
            let {
                avatarDecoration: t
            } = e;
            a = t
        },
        USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
            let {
                item: t
            } = e;
            (null == t ? void 0 : t.type) === N.CollectiblesItemType.PROFILE_EFFECT ? (I = null, T = null == t ? void 0 : t.id) : (T = null, I = t)
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
            let {
                profileEffectId: t
            } = e;
            s = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
            let {
                banner: t
            } = e;
            o = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
            let {
                bio: t
            } = e;
            l = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
            let {
                pronouns: t
            } = e;
            u = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
            let {
                color: t
            } = e;
            d = t
        },
        USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
            let {
                themeColors: t
            } = e;
            _ = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
            let {
                avatar: t
            } = e;
            E = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
            let {
                avatarDecoration: t
            } = e;
            I = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
            let {
                profileEffectId: t
            } = e;
            T = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
            let {
                banner: t
            } = e;
            f = t
        },
        USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
            let {
                themeColors: t
            } = e;
            c = t
        },
        USER_SETTINGS_CLEAR_ERRORS: function() {
            g = {}
        },
        USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: M,
        USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: y,
        USER_SETTINGS_RESET_ALL_PENDING: D,
        USER_SETTINGS_RESET_ALL_TRY_IT_OUT: P,
        USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
            a = void 0
        },
        LOGOUT: function() {
            i = void 0
        }
    })
}