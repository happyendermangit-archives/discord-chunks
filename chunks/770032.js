function(e, _, E) {
    "use strict";
    let t, o;
    E.r(_), E.d(_, {
        MultiAccountTokenStatus: function() {
            return n
        },
        default: function() {
            return u
        }
    }), E("424973");
    var n, r, a = E("171718"),
        i = E("446674"),
        I = E("913144"),
        T = E("746574"),
        s = E("995802"),
        S = E("583374");
    (r = n || (n = {}))[r.INVALID = 0] = "INVALID", r[r.VALIDATING = 1] = "VALIDATING", r[r.VALID = 2] = "VALID";
    let N = [],
        O = !1;

    function A(e) {
        N = N.filter(_ => {
            let {
                id: E
            } = _;
            return E !== e
        }), a.default.removeToken(e)
    }

    function R(e, _) {
        let E = N.slice(),
            t = E.find(_ => {
                let {
                    id: E
                } = _;
                return E === e
            });
        null != t && (t.tokenStatus = _, N = E)
    }
    class l extends i.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                var _;
                N = null !== (_ = e.users) && void 0 !== _ ? _ : [], o = e.canUseMultiAccountMobile
            }
        }
        getCanUseMultiAccountMobile() {
            return o
        }
        getState() {
            return {
                users: N,
                canUseMultiAccountMobile: o
            }
        }
        getUsers() {
            return N
        }
        getValidUsers() {
            return N.filter(e => {
                let {
                    tokenStatus: _
                } = e;
                return 0 !== _
            })
        }
        getHasLoggedInAccounts() {
            return N.length > 0
        }
        getIsValidatingUsers() {
            return N.some(e => {
                let {
                    tokenStatus: _
                } = e;
                return 1 === _
            })
        }
        get canUseMultiAccountNotifications() {
            return this.getCanUseMultiAccountMobile() && s.MultiAccountMobileNotificationsExperiment.getCurrentConfig({
                location: "09e468_1"
            }, {
                autoTrackExposure: !1
            }).isMultiAccountMobileNotificationsEnabled
        }
        get isSwitchingAccount() {
            return O
        }
    }
    l.displayName = "MultiAccountStore", l.persistKey = "MultiAccountStore", l.migrations = [e => {
        if (null != e) {
            var _;
            return {
                users: null !== (_ = e.users) && void 0 !== _ ? _ : [],
                canUseMultiAccountMobile: !1
            }
        }
        return {
            users: [],
            canUseMultiAccountMobile: !1
        }
    }];
    var u = new l(I.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: _
            } = e;
            t = _.id, O = !1;
            let E = N.slice(),
                o = E.findIndex(e => {
                    let {
                        id: E
                    } = e;
                    return E === _.id
                });
            if (o > -1 ? (N[o].avatar = _.avatar, N[o].username = _.username, N[o].discriminator = _.discriminator, N[o].tokenStatus = 2) : E.push({
                    id: _.id,
                    avatar: _.avatar,
                    username: _.username,
                    discriminator: _.discriminator,
                    tokenStatus: 2,
                    pushSyncToken: null
                }), (N = E).length > S.MAX_ACCOUNTS) {
                let e = N.splice(S.MAX_ACCOUNTS);
                e.forEach(e => {
                    let {
                        id: _
                    } = e;
                    A(_)
                })
            }
        },
        LOGOUT: function(e) {
            O = !!e.isSwitchingAccount, !e.isSwitchingAccount && (N = N.filter(e => {
                let {
                    id: _
                } = e;
                return _ !== t
            })), t = null
        },
        MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: e => R(e.userId, 1),
        MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: e => R(e.userId, 2),
        MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: e => R(e.userId, 0),
        MULTI_ACCOUNT_REMOVE_ACCOUNT: e => A(e.userId),
        MULTI_ACCOUNT_MOVE_ACCOUNT: function(e) {
            let {
                from: _,
                to: E
            } = e;
            N = (0, T.moveItemFromTo)(N, _, E)
        },
        CURRENT_USER_UPDATE: function(e) {
            let {
                user: _
            } = e, E = N.slice(), t = E.find(e => {
                let {
                    id: E
                } = e;
                return E === _.id
            });
            null != t && (t.avatar = _.avatar, t.username = _.username, t.discriminator = _.discriminator, N = E)
        },
        MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: function(e) {
            let {
                multiAccountMobileExperimentEnabled: _
            } = e;
            o = _
        },
        MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function(e) {
            let {
                userId: _,
                pushSyncToken: E
            } = e;
            N = N.map(e => e.id === _ ? {
                ...e,
                pushSyncToken: E
            } : e)
        },
        MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function(e) {
            let {
                invalidPushSyncTokens: _
            } = e;
            N = N.map(e => null != e.pushSyncToken && _.includes(e.pushSyncToken) ? {
                ...e,
                pushSyncToken: null
            } : e)
        }
    })
}