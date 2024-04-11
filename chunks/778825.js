function(e, t, n) {
    "use strict";
    let i, r, s, a, o, l, u, d, _, c, E;
    n.r(t);
    var I, T, f, S, h = n("442837"),
        A = n("570140"),
        m = n("981631");
    let N = m.FormStates.CLOSED,
        O = {},
        p = !1;

    function R() {
        N = m.FormStates.CLOSED, O = {}, _ = null, c = void 0, E = []
    }

    function C() {
        g(), L(), O = {}, N = m.FormStates.OPEN
    }

    function g() {
        i = void 0, u = void 0, r = void 0
    }

    function L() {
        a = void 0, o = void 0, l = void 0, d = void 0, s = void 0
    }
    class D extends(S = h.default.Store) {
        getFormState() {
            return N
        }
        getErrors() {
            return O
        }
        showNotice() {
            return void 0 !== i || void 0 !== r || void 0 !== s || void 0 !== a || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== d
        }
        getPendingAvatar() {
            return i
        }
        getPendingAvatarDecoration() {
            return r
        }
        getPendingProfileEffectId() {
            return s
        }
        getPendingBanner() {
            return a
        }
        getPendingBio() {
            return o
        }
        getPendingNickname() {
            return u
        }
        getPendingPronouns() {
            return l
        }
        getPendingAccentColor() {
            return u
        }
        getPendingThemeColors() {
            return d
        }
        getAllPending() {
            return {
                pendingAvatar: i,
                pendingAvatarDecoration: r,
                pendingProfileEffectId: s,
                pendingBanner: a,
                pendingBio: o,
                pendingPronouns: l,
                pendingNickname: u,
                pendingThemeColors: d
            }
        }
        getGuild() {
            return _
        }
        getSource() {
            return c
        }
        getAnalyticsLocations() {
            return E
        }
        getIsDisableSubmit() {
            return p
        }
    }
    f = "GuildIdentitySettingsStore", (T = "displayName") in(I = D) ? Object.defineProperty(I, T, {
        value: f,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : I[T] = f, t.default = new D(A.default, {
        GUILD_IDENTITY_SETTINGS_INIT: function(e) {
            _ = e.guild, N = m.FormStates.OPEN, O = {}, c = e.source, E = e.analyticsLocations
        },
        GUILD_IDENTITY_SETTINGS_CLOSE: R,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
            C(), R()
        },
        GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
            _ = e.guild, O = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
            N = m.FormStates.SUBMITTING, O = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            if (N !== m.FormStates.SUBMITTING) return !1;
            N = m.FormStates.OPEN, O = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_PROFILE_UPDATE_FAILURE: function(e) {
            N = m.FormStates.OPEN, O = e.errors
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
            let {
                avatar: t
            } = e;
            i = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function(e) {
            let {
                avatarDecoration: t
            } = e;
            r = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
            let {
                profileEffectId: t
            } = e;
            s = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
            let {
                banner: t
            } = e;
            a = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
            let {
                bio: t
            } = e;
            o = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
            let {
                pronouns: t
            } = e;
            l = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
            let {
                nickname: t
            } = e;
            u = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
            let {
                themeColors: t
            } = e;
            d = t
        },
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: g,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: C,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: C,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
            O = {}
        },
        GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
            let {
                disable: t
            } = e;
            p = t
        }
    })
}