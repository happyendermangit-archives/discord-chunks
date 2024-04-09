function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearErrors: function() {
            return p
        },
        closeGuildIdentitySettings: function() {
            return d
        },
        initGuildIdentitySettings: function() {
            return u
        },
        resetAllPending: function() {
            return O
        },
        resetAndCloseGuildIdentityForm: function() {
            return _
        },
        resetPendingMemberChanges: function() {
            return m
        },
        resetPendingProfileChanges: function() {
            return N
        },
        saveGuildIdentityChanges: function() {
            return o
        },
        setCurrentGuild: function() {
            return l
        },
        setDisableSubmit: function() {
            return R
        },
        setPendingAvatar: function() {
            return c
        },
        setPendingAvatarDecoration: function() {
            return E
        },
        setPendingBanner: function() {
            return T
        },
        setPendingBio: function() {
            return f
        },
        setPendingNickname: function() {
            return h
        },
        setPendingProfileEffectId: function() {
            return I
        },
        setPendingPronouns: function() {
            return S
        },
        setPendingThemeColors: function() {
            return A
        }
    }), n("411104");
    var i = n("544891"),
        r = n("570140"),
        s = n("37234"),
        a = n("981631");
    async function o(e, t) {
        let {
            nick: n,
            avatar: s,
            avatarDecoration: o
        } = t;
        if (null == e) throw Error("Need guildId");
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
        });
        let l = {
            nick: n,
            avatar: s,
            avatar_decoration_id: null === o ? null : null == o ? void 0 : o.id,
            avatar_decoration_sku_id: null === o ? null : null == o ? void 0 : o.skuId
        };
        try {
            let t = await i.HTTP.patch({
                url: a.Endpoints.SET_GUILD_MEMBER(e),
                body: l,
                oldFormErrors: !0
            });
            return r.default.dispatch({
                type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
            }), r.default.dispatch({
                type: "GUILD_MEMBER_PROFILE_UPDATE",
                guildMember: t.body,
                guildId: e
            }), t
        } catch (t) {
            let e = t.body;
            (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                errors: t.body
            })
        }
    }

    function l(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
            guild: e
        })
    }

    function u(e, t) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_INIT",
            guild: e,
            analyticsLocations: t
        })
    }

    function d() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_CLOSE"
        }), (0, s.popLayer)()
    }

    function _() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
        })
    }

    function c(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
            avatar: e
        })
    }

    function E(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
            avatarDecoration: e
        })
    }

    function I(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
            profileEffectId: e
        })
    }

    function T(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
            banner: e
        })
    }

    function f(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
            bio: e
        })
    }

    function S(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
            pronouns: e
        })
    }

    function h(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
            nickname: e
        })
    }

    function A(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
            themeColors: e
        })
    }

    function m() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
        })
    }

    function N() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
        })
    }

    function O() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
        })
    }

    function p() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
        })
    }

    function R(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
            disable: e
        })
    }
}