function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        MultiAccountTokenStatus: function() {
            return s
        }
    }), n("653041");
    var s, a, o, l = n("213919"),
        u = n("442837"),
        d = n("570140"),
        _ = n("990492"),
        c = n("988965"),
        E = n("798077");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(o = s || (s = {}))[o.INVALID = 0] = "INVALID", o[o.VALIDATING = 1] = "VALIDATING", o[o.VALID = 2] = "VALID";
    let T = [],
        f = !1;

    function S(e) {
        T = T.filter(t => {
            let {
                id: n
            } = t;
            return n !== e
        }), l.removeToken(e)
    }

    function A(e, t) {
        let n = T.slice(),
            i = n.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            });
        null != i && (i.tokenStatus = t, T = n)
    }
    class h extends(a = u.default.PersistedStore) {
        initialize(e) {
            if (null != e) {
                var t;
                T = null !== (t = e.users) && void 0 !== t ? t : [], r = e.canUseMultiAccountMobile
            }
        }
        getCanUseMultiAccountMobile() {
            return r
        }
        getState() {
            return {
                users: T,
                canUseMultiAccountMobile: r
            }
        }
        getUsers() {
            return T
        }
        getValidUsers() {
            return T.filter(e => {
                let {
                    tokenStatus: t
                } = e;
                return 0 !== t
            })
        }
        getHasLoggedInAccounts() {
            return T.length > 0
        }
        getIsValidatingUsers() {
            return T.some(e => {
                let {
                    tokenStatus: t
                } = e;
                return 1 === t
            })
        }
        get canUseMultiAccountNotifications() {
            return this.getCanUseMultiAccountMobile() && c.MultiAccountMobileNotificationsExperiment.getCurrentConfig({
                location: "09e468_1"
            }, {
                autoTrackExposure: !1
            }).isMultiAccountMobileNotificationsEnabled
        }
        get isSwitchingAccount() {
            return f
        }
    }
    I(h, "displayName", "MultiAccountStore"), I(h, "persistKey", "MultiAccountStore"), I(h, "migrations", [e => {
        if (null != e) {
            var t;
            return {
                users: null !== (t = e.users) && void 0 !== t ? t : [],
                canUseMultiAccountMobile: !1
            }
        }
        return {
            users: [],
            canUseMultiAccountMobile: !1
        }
    }]), t.default = new h(d.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t
            } = e;
            i = t.id, f = !1;
            let n = T.slice(),
                r = n.findIndex(e => {
                    let {
                        id: n
                    } = e;
                    return n === t.id
                });
            r > -1 ? (T[r].avatar = t.avatar, T[r].username = t.username, T[r].discriminator = t.discriminator, T[r].tokenStatus = 2) : n.push({
                id: t.id,
                avatar: t.avatar,
                username: t.username,
                discriminator: t.discriminator,
                tokenStatus: 2,
                pushSyncToken: null
            }), (T = n).length > E.MAX_ACCOUNTS && T.splice(E.MAX_ACCOUNTS).forEach(e => {
                let {
                    id: t
                } = e;
                S(t)
            })
        },
        LOGOUT: function(e) {
            f = !!e.isSwitchingAccount, !e.isSwitchingAccount && (T = T.filter(e => {
                let {
                    id: t
                } = e;
                return t !== i
            })), i = null
        },
        MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: e => A(e.userId, 1),
        MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: e => A(e.userId, 2),
        MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: e => A(e.userId, 0),
        MULTI_ACCOUNT_REMOVE_ACCOUNT: e => S(e.userId),
        MULTI_ACCOUNT_MOVE_ACCOUNT: function(e) {
            let {
                from: t,
                to: n
            } = e;
            T = (0, _.moveItemFromTo)(T, t, n)
        },
        CURRENT_USER_UPDATE: function(e) {
            let {
                user: t
            } = e, n = T.slice(), i = n.find(e => {
                let {
                    id: n
                } = e;
                return n === t.id
            });
            null != i && (i.avatar = t.avatar, i.username = t.username, i.discriminator = t.discriminator, T = n)
        },
        MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: function(e) {
            let {
                multiAccountMobileExperimentEnabled: t
            } = e;
            r = t
        },
        MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function(e) {
            let {
                userId: t,
                pushSyncToken: n
            } = e;
            T = T.map(e => e.id === t ? {
                ...e,
                pushSyncToken: n
            } : e)
        },
        MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function(e) {
            let {
                invalidPushSyncTokens: t
            } = e;
            T = T.map(e => null != e.pushSyncToken && t.includes(e.pushSyncToken) ? {
                ...e,
                pushSyncToken: null
            } : e)
        }
    })
}