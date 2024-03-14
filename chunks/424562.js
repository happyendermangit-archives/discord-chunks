function(e, t, n) {
    "use strict";
    let i, r, u, o, _, l, E, T, d, a, S;
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var c = n("446674"),
        I = n("913144"),
        s = n("49111");
    let f = s.FormStates.CLOSED,
        N = {},
        A = !1;

    function U() {
        f = s.FormStates.CLOSED, N = {}, d = null, a = void 0, S = []
    }

    function p() {
        R(), D(), N = {}, f = s.FormStates.OPEN
    }

    function R() {
        i = void 0, E = void 0, r = void 0
    }

    function D() {
        o = void 0, _ = void 0, l = void 0, T = void 0, u = void 0
    }
    class G extends c.default.Store {
        getFormState() {
            return f
        }
        getErrors() {
            return N
        }
        showNotice() {
            return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== o || void 0 !== _ || void 0 !== l || void 0 !== E || void 0 !== T
        }
        getPendingAvatar() {
            return i
        }
        getPendingAvatarDecoration() {
            return r
        }
        getPendingProfileEffectId() {
            return u
        }
        getPendingBanner() {
            return o
        }
        getPendingBio() {
            return _
        }
        getPendingNickname() {
            return E
        }
        getPendingPronouns() {
            return l
        }
        getPendingAccentColor() {
            return E
        }
        getPendingThemeColors() {
            return T
        }
        getAllPending() {
            return {
                pendingAvatar: i,
                pendingAvatarDecoration: r,
                pendingProfileEffectId: u,
                pendingBanner: o,
                pendingBio: _,
                pendingPronouns: l,
                pendingNickname: E,
                pendingThemeColors: T
            }
        }
        getGuild() {
            return d
        }
        getSource() {
            return a
        }
        getAnalyticsLocations() {
            return S
        }
        getIsDisableSubmit() {
            return A
        }
    }
    G.displayName = "GuildIdentitySettingsStore";
    var C = new G(I.default, {
        GUILD_IDENTITY_SETTINGS_INIT: function(e) {
            d = e.guild, f = s.FormStates.OPEN, N = {}, a = e.source, S = e.analyticsLocations
        },
        GUILD_IDENTITY_SETTINGS_CLOSE: U,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
            p(), U()
        },
        GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
            d = e.guild, N = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
            f = s.FormStates.SUBMITTING, N = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            if (f !== s.FormStates.SUBMITTING) return !1;
            f = s.FormStates.OPEN, N = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_PROFILE_UPDATE_FAILURE: function(e) {
            f = s.FormStates.OPEN, N = e.errors
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
            u = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
            let {
                banner: t
            } = e;
            o = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
            let {
                bio: t
            } = e;
            _ = t
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
            E = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
            let {
                themeColors: t
            } = e;
            T = t
        },
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: R,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: D,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
            N = {}
        },
        GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
            let {
                disable: t
            } = e;
            A = t
        }
    })
}