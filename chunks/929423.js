function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        saveGuildIdentityChanges: function() {
            return _
        },
        setCurrentGuild: function() {
            return l
        },
        initGuildIdentitySettings: function() {
            return E
        },
        closeGuildIdentitySettings: function() {
            return T
        },
        resetAndCloseGuildIdentityForm: function() {
            return d
        },
        setPendingAvatar: function() {
            return a
        },
        setPendingAvatarDecoration: function() {
            return S
        },
        setPendingProfileEffectId: function() {
            return c
        },
        setPendingBanner: function() {
            return I
        },
        setPendingBio: function() {
            return s
        },
        setPendingPronouns: function() {
            return f
        },
        setPendingNickname: function() {
            return N
        },
        setPendingThemeColors: function() {
            return A
        },
        resetPendingMemberChanges: function() {
            return U
        },
        resetPendingProfileChanges: function() {
            return p
        },
        resetAllPending: function() {
            return R
        },
        clearErrors: function() {
            return D
        },
        setDisableSubmit: function() {
            return G
        }
    }), n("70102");
    var i = n("872717"),
        r = n("913144"),
        u = n("54239"),
        o = n("49111");
    async function _(e, t) {
        let {
            nick: n,
            avatar: u,
            avatarDecoration: _
        } = t;
        if (null == e) throw Error("Need guildId");
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
        });
        let l = {
            nick: n,
            avatar: u,
            avatar_decoration_id: null === _ ? null : null == _ ? void 0 : _.id,
            avatar_decoration_sku_id: null === _ ? null : null == _ ? void 0 : _.skuId
        };
        try {
            let t = await i.default.patch({
                url: o.Endpoints.SET_GUILD_MEMBER(e),
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

    function E(e, t) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_INIT",
            guild: e,
            analyticsLocations: t
        })
    }

    function T() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_CLOSE"
        }), (0, u.popLayer)()
    }

    function d() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
        })
    }

    function a(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
            avatar: e
        })
    }

    function S(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
            avatarDecoration: e
        })
    }

    function c(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
            profileEffectId: e
        })
    }

    function I(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
            banner: e
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
            bio: e
        })
    }

    function f(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
            pronouns: e
        })
    }

    function N(e) {
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

    function U() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
        })
    }

    function p() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
        })
    }

    function R() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
        })
    }

    function D() {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
        })
    }

    function G(e) {
        r.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
            disable: e
        })
    }
}