function(e, t, n) {
    "use strict";
    let i, r, a, s, o, l, u, d, _, c, E;
    n.r(t);
    var I, T, f, S, h = n("442837"),
        A = n("570140"),
        m = n("981631");
    let N = m.FormStates.CLOSED,
        p = {};

    function O() {
        N = m.FormStates.CLOSED, p = {}, _ = null, c = void 0, E = []
    }

    function R() {
        C(), g(), p = {}, N = m.FormStates.OPEN
    }

    function C() {
        i = void 0, u = void 0, r = void 0
    }

    function g() {
        s = void 0, o = void 0, l = void 0, d = void 0, a = void 0
    }
    class L extends(S = h.default.Store) {
        getFormState() {
            return N
        }
        getErrors() {
            return p
        }
        showNotice() {
            return void 0 !== i || void 0 !== r || void 0 !== a || void 0 !== s || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== d
        }
        getIsSubmitDisabled() {
            return void 0 !== o && o.length > m.BIO_MAX_LENGTH
        }
        getPendingAvatar() {
            return i
        }
        getPendingAvatarDecoration() {
            return r
        }
        getPendingProfileEffectId() {
            return a
        }
        getPendingBanner() {
            return s
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
                pendingProfileEffectId: a,
                pendingBanner: s,
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
    }
    f = "GuildIdentitySettingsStore", (T = "displayName") in(I = L) ? Object.defineProperty(I, T, {
        value: f,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : I[T] = f, t.default = new L(A.default, {
        GUILD_IDENTITY_SETTINGS_INIT: function(e) {
            _ = e.guild, N = m.FormStates.OPEN, p = {}, c = e.source, E = e.analyticsLocations
        },
        GUILD_IDENTITY_SETTINGS_CLOSE: O,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
            R(), O()
        },
        GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
            _ = e.guild, p = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
            N = m.FormStates.SUBMITTING, p = {}
        },
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            if (N !== m.FormStates.SUBMITTING) return !1;
            N = m.FormStates.OPEN, p = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        USER_PROFILE_UPDATE_FAILURE: function(e) {
            N = m.FormStates.OPEN, p = e.errors
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
            a = t
        },
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
            let {
                banner: t
            } = e;
            s = t
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
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: R,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: R,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
            p = {}
        }
    })
}