function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleProfileAccessibilityTooltipViewed: function() {
            return I
        },
        resetPendingProfileChanges: function() {
            return T
        },
        saveProfileChanges: function() {
            return E
        },
        setPendingAccentColor: function() {
            return h
        },
        setPendingBanner: function() {
            return f
        },
        setPendingBio: function() {
            return S
        },
        setPendingPronouns: function() {
            return A
        },
        setPendingThemeColors: function() {
            return m
        },
        setTryItOutAvatar: function() {
            return N
        },
        setTryItOutAvatarDecoration: function() {
            return O
        },
        setTryItOutBanner: function() {
            return p
        },
        setTryItOutThemeColors: function() {
            return R
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("881052"),
        a = n("957730"),
        o = n("695346"),
        l = n("594174"),
        u = n("626135"),
        d = n("981631"),
        _ = n("474936");

    function c(e) {
        u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
            feature_name: e,
            feature_tier: _.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
        })
    }
    async function E(e, t) {
        var n, u;
        let _ = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        if (null == _) return;
        let c = o.UseLegacyChatInput.getSetting();
        null != e.bio && c && (e.bio = a.default.parse(void 0, e.bio).content);
        try {
            r.default.dispatch({
                type: "USER_PROFILE_UPDATE_START",
                userId: _
            });
            let n = await i.HTTP.patch({
                url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                body: e
            });
            if (n.ok) {
                let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
                r.default.dispatch({
                    type: "USER_PROFILE_UPDATE_SUCCESS",
                    userId: _,
                    profileEffectId: e,
                    ...n.body
                })
            } else {
                let e = new s.APIError(n);
                r.default.dispatch({
                    type: "USER_PROFILE_UPDATE_FAILURE",
                    errors: n.body,
                    apiError: e
                })
            }
            return n
        } catch (t) {
            let e = new s.APIError(t);
            r.default.dispatch({
                type: "USER_PROFILE_UPDATE_FAILURE",
                errors: {},
                apiError: e
            })
        }
    }

    function I() {
        r.default.dispatch({
            type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
        })
    }

    function T() {
        r.default.dispatch({
            type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
        })
    }

    function f(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
            banner: e
        })
    }

    function S(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
            bio: e
        })
    }

    function A(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
            pronouns: e
        })
    }

    function h(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
            color: e
        })
    }

    function m(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
            themeColors: e
        })
    }

    function N(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
            avatar: e
        }), c(_.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
    }

    function O(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
            avatarDecoration: e
        }), c(_.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
    }

    function p(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
            banner: e
        }), c(_.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
    }

    function R(e) {
        r.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
            themeColors: e
        }), c(_.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
    }
}