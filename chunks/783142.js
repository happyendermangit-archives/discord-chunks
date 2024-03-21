function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        saveProfileChanges: function() {
            return S
        },
        handleProfileAccessibilityTooltipViewed: function() {
            return c
        },
        resetPendingProfileChanges: function() {
            return I
        },
        setPendingBanner: function() {
            return s
        },
        setPendingBio: function() {
            return f
        },
        setPendingPronouns: function() {
            return N
        },
        setPendingAccentColor: function() {
            return A
        },
        setPendingThemeColors: function() {
            return U
        },
        setTryItOutAvatar: function() {
            return p
        },
        setTryItOutAvatarDecoration: function() {
            return R
        },
        setTryItOutBanner: function() {
            return D
        },
        setTryItOutThemeColors: function() {
            return G
        }
    });
    var i = n("872717"),
        r = n("913144"),
        u = n("448993"),
        o = n("884351"),
        _ = n("845579"),
        l = n("697218"),
        E = n("599110"),
        T = n("49111"),
        d = n("646718");

    function a(e) {
        E.default.track(T.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
            feature_name: e,
            feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
        })
    }
    async function S(e, t) {
        var n, E;
        let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        if (null == d) return;
        let a = _.UseLegacyChatInput.getSetting();
        null != e.bio && a && (e.bio = o.default.parse(void 0, e.bio).content);
        try {
            r.default.dispatch({
                type: "USER_PROFILE_UPDATE_START",
                userId: d
            });
            let n = await i.HTTP.patch({
                url: null != t ? T.Endpoints.GUILD_PROFILE(t, T.ME) : T.Endpoints.USER_PROFILE(T.ME),
                body: e
            });
            if (n.ok) {
                let e = null === (E = n.body.profile_effect) || void 0 === E ? void 0 : E.id;
                r.default.dispatch({
                    type: "USER_PROFILE_UPDATE_SUCCESS",
                    userId: d,
                    profileEffectId: e,
                    ...n.body
                })
            } else {
                let e = new u.APIError(n);
                r.default.dispatch({
                    type: "USER_PROFILE_UPDATE_FAILURE",
                    errors: n.body,
                    apiError: e
                })
            }
            return n
        } catch (t) {
            let e = new u.APIError(t);
            r.default.dispatch({
                type: "USER_PROFILE_UPDATE_FAILURE",
                errors: {},
                apiError: e
            })
        }
    }

    function c() {
        r.default.dispatch({
            type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
        })
    }

    function I() {
        r.default.dispatch({
            type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
            banner: e
        })
    }

    function f(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
            bio: e
        })
    }

    function N(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
            pronouns: e
        })
    }

    function A(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
            color: e
        })
    }

    function U(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
            themeColors: e
        })
    }

    function p(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
            avatar: e
        }), a(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
    }

    function R(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
            avatarDecoration: e
        }), a(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
    }

    function D(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
            banner: e
        }), a(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
    }

    function G(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
            themeColors: e
        }), a(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
    }
}