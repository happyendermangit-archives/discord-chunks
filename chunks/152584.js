function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        accountDetailsInit: function() {
            return I
        },
        accountDetailsClose: function() {
            return s
        },
        disableAccount: function() {
            return f
        },
        saveAccountRequest: function() {
            return N
        },
        saveAccountChanges: function() {
            return A
        },
        getHarvestStatus: function() {
            return U
        },
        requestHarvest: function() {
            return p
        },
        setPendingAvatar: function() {
            return R
        },
        setPendingGlobalNameName: function() {
            return D
        },
        setPendingAvatarDecoration: function() {
            return G
        },
        setPendingProfileEffectId: function() {
            return C
        },
        clearErrors: function() {
            return P
        },
        resetPendingAccountChanges: function() {
            return O
        },
        resetAllPending: function() {
            return g
        },
        resetAndCloseUserProfileForm: function() {
            return v
        },
        setDisableSubmit: function() {
            return L
        }
    });
    var i = n("872717"),
        r = n("95410"),
        u = n("819855"),
        o = n("913144"),
        _ = n("393414"),
        l = n("599110"),
        E = n("315102"),
        T = n("730622"),
        d = n("437822"),
        a = n("49111"),
        S = n("191349"),
        c = n("782340");

    function I() {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_INIT"
        })
    }

    function s() {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_CLOSE"
        })
    }

    function f(e, t) {
        let n = t ? c.default.Messages.DELETE_ACCOUNT : c.default.Messages.DISABLE_ACCOUNT,
            r = t ? a.Endpoints.DELETE_ACCOUNT : a.Endpoints.DISABLE_ACCOUNT;
        return (0, T.default)(t => i.HTTP.post({
            url: r,
            body: {
                password: e,
                ...t
            },
            oldFormErrors: !0
        }), {
            modalProps: {
                title: n
            },
            checkEnabled: !1
        }).then(() => {
            d.default.logoutInternal(), (0, _.transitionTo)(a.Routes.DEFAULT_LOGGED_OUT)
        })
    }
    async function N(e) {
        let t = await i.HTTP.patch({
                url: a.Endpoints.ME,
                oldFormErrors: !0,
                body: e
            }),
            n = t.body;
        if (n.token) {
            let t = n.token;
            delete n.token, o.default.dispatch({
                type: "UPDATE_TOKEN",
                token: t,
                userId: n.id
            }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
                type: "PASSWORD_UPDATED",
                userId: n.id
            })
        }
        return o.default.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: n
        }), t
    }

    function A(e) {
        let {
            username: t,
            discriminator: n,
            email: i,
            emailToken: u,
            password: _,
            avatar: d,
            avatarDecoration: I,
            newPassword: s,
            globalName: f
        } = e;
        return o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SUBMIT"
        }), (0, T.default)(e => {
            let o = {
                username: t,
                email: i,
                email_token: u,
                password: _,
                avatar: d,
                discriminator: n,
                global_name: f,
                new_password: s,
                ...e
            };
            null === I && (o.avatar_decoration_id = null), null != I && (o.avatar_decoration_id = I.id, o.avatar_decoration_sku_id = I.skuId);
            let l = r.default.get(a.DEVICE_TOKEN),
                E = (0, S.getDevicePushProvider)();
            null != E && null != l && (o.push_provider = E, o.push_token = l);
            let T = r.default.get(a.DEVICE_VOIP_TOKEN);
            return null != S.DEVICE_PUSH_VOIP_PROVIDER && null != T && (o.push_voip_provider = S.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = T), N(o)
        }, {
            checkEnabled: !1,
            modalProps: {
                title: c.default.Messages.TWO_FA_CHANGE_ACCOUNT
            },
            hooks: {
                onEarlyClose: () => o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: {}
                })
            }
        }).then(e => {
            let t = e.body;
            return l.default.track(a.AnalyticEvents.USER_AVATAR_UPDATED, {
                animated: (0, E.isAnimatedIconHash)(t.avatar)
            }), o.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
            }), e
        }, e => (o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
            errors: e.body
        }), e))
    }

    function U() {
        return i.HTTP.get({
            url: a.Endpoints.USER_HARVEST,
            oldFormErrors: !0
        })
    }

    function p() {
        return i.HTTP.post({
            url: a.Endpoints.USER_HARVEST,
            oldFormErrors: !0
        })
    }

    function R(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
            avatar: e
        }), null == e ? u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
    }

    function D(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
            globalName: e
        })
    }

    function G(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
            avatarDecoration: e
        })
    }

    function C(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
            profileEffectId: e
        })
    }

    function P() {
        o.default.dispatch({
            type: "USER_SETTINGS_CLEAR_ERRORS"
        })
    }

    function O() {
        o.default.dispatch({
            type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
        })
    }

    function g() {
        o.default.dispatch({
            type: "USER_SETTINGS_RESET_ALL_PENDING"
        })
    }

    function v() {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
        })
    }

    function L(e) {
        o.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
            disable: e
        })
    }
}