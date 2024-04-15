function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        accountDetailsClose: function() {
            return f
        },
        accountDetailsInit: function() {
            return T
        },
        clearErrors: function() {
            return g
        },
        disableAccount: function() {
            return S
        },
        getHarvestStatus: function() {
            return m
        },
        requestHarvest: function() {
            return N
        },
        resetAllPending: function() {
            return D
        },
        resetAndCloseUserProfileForm: function() {
            return v
        },
        resetPendingAccountChanges: function() {
            return L
        },
        saveAccountChanges: function() {
            return A
        },
        saveAccountRequest: function() {
            return h
        },
        setPendingAvatar: function() {
            return p
        },
        setPendingAvatarDecoration: function() {
            return R
        },
        setPendingGlobalNameName: function() {
            return O
        },
        setPendingProfileEffectId: function() {
            return C
        }
    });
    var i = n("544891"),
        r = n("433517"),
        s = n("780384"),
        a = n("570140"),
        o = n("703656"),
        l = n("626135"),
        u = n("768581"),
        d = n("546796"),
        _ = n("893776"),
        c = n("981631"),
        E = n("792101"),
        I = n("689938");

    function T() {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_INIT"
        })
    }

    function f() {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_CLOSE"
        })
    }

    function S(e, t) {
        let n = t ? I.default.Messages.DELETE_ACCOUNT : I.default.Messages.DISABLE_ACCOUNT,
            r = t ? c.Endpoints.DELETE_ACCOUNT : c.Endpoints.DISABLE_ACCOUNT;
        return (0, d.default)(t => i.HTTP.post({
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
            _.default.logoutInternal(), (0, o.transitionTo)(c.Routes.DEFAULT_LOGGED_OUT)
        })
    }
    async function h(e) {
        let t = await i.HTTP.patch({
                url: c.Endpoints.ME,
                oldFormErrors: !0,
                body: e
            }),
            n = t.body;
        if (n.token) {
            let t = n.token;
            delete n.token, a.default.dispatch({
                type: "UPDATE_TOKEN",
                token: t,
                userId: n.id
            }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                type: "PASSWORD_UPDATED",
                userId: n.id
            })
        }
        return a.default.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: n
        }), t
    }

    function A(e) {
        let {
            username: t,
            discriminator: n,
            email: i,
            emailToken: s,
            password: o,
            avatar: _,
            avatarDecoration: T,
            newPassword: f,
            globalName: S
        } = e;
        return a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SUBMIT"
        }), (0, d.default)(e => {
            let a = {
                username: t,
                email: i,
                email_token: s,
                password: o,
                avatar: _,
                discriminator: n,
                global_name: S,
                new_password: f,
                ...e
            };
            null === T && (a.avatar_decoration_id = null), null != T && (a.avatar_decoration_id = T.id, a.avatar_decoration_sku_id = T.skuId);
            let l = r.Storage.get(c.DEVICE_TOKEN),
                u = (0, E.getDevicePushProvider)();
            null != u && null != l && (a.push_provider = u, a.push_token = l);
            let d = r.Storage.get(c.DEVICE_VOIP_TOKEN);
            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != d && (a.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = d), h(a)
        }, {
            checkEnabled: !1,
            modalProps: {
                title: I.default.Messages.TWO_FA_CHANGE_ACCOUNT
            },
            hooks: {
                onEarlyClose: () => a.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: {}
                })
            }
        }).then(e => {
            let t = e.body;
            return l.default.track(c.AnalyticEvents.USER_AVATAR_UPDATED, {
                animated: (0, u.isAnimatedIconHash)(t.avatar)
            }), a.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
            }), e
        }, e => (a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
            errors: e.body
        }), e))
    }

    function m() {
        return i.HTTP.get({
            url: c.Endpoints.USER_HARVEST,
            oldFormErrors: !0
        })
    }

    function N() {
        return i.HTTP.post({
            url: c.Endpoints.USER_HARVEST,
            oldFormErrors: !0
        })
    }

    function p(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
            avatar: e
        }), null == e ? s.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : s.AccessibilityAnnouncer.announce(I.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
    }

    function O(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
            globalName: e
        })
    }

    function R(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
            avatarDecoration: e
        })
    }

    function C(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
            profileEffectId: e
        })
    }

    function g() {
        a.default.dispatch({
            type: "USER_SETTINGS_CLEAR_ERRORS"
        })
    }

    function L() {
        a.default.dispatch({
            type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
        })
    }

    function D() {
        a.default.dispatch({
            type: "USER_SETTINGS_RESET_ALL_PENDING"
        })
    }

    function v() {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
        })
    }
}