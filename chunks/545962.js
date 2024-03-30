function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MultiAccountTokenStatus: function() {
            return o
        }
    });
    var r, o, i, a, u, s = n("173977"),
        l = n("898511"),
        c = n("629815"),
        f = n("648905"),
        d = n("541418"),
        _ = n("115610");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function I(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.INVALID = 0] = "INVALID", r[r.VALIDATING = 1] = "VALIDATING", r[r.VALID = 2] = "VALID";
    var O = [],
        T = !1;

    function S(e) {
        O = O.filter(function(t) {
            return t.id !== e
        }), s.removeToken(e)
    }

    function v(e, t) {
        var n = O.slice(),
            r = n.find(function(t) {
                return t.id === e
            });
        null != r && (r.tokenStatus = t, O = n)
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function(e) {
                if (null != e) {
                    var t;
                    O = null !== (t = e.users) && void 0 !== t ? t : [], a = e.canUseMultiAccountMobile
                }
            }
        }, {
            key: "getCanUseMultiAccountMobile",
            value: function() {
                return a
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    users: O,
                    canUseMultiAccountMobile: a
                }
            }
        }, {
            key: "getUsers",
            value: function() {
                return O
            }
        }, {
            key: "getValidUsers",
            value: function() {
                return O.filter(function(e) {
                    return 0 !== e.tokenStatus
                })
            }
        }, {
            key: "getHasLoggedInAccounts",
            value: function() {
                return O.length > 0
            }
        }, {
            key: "getIsValidatingUsers",
            value: function() {
                return O.some(function(e) {
                    return 1 === e.tokenStatus
                })
            }
        }, {
            key: "canUseMultiAccountNotifications",
            get: function() {
                return this.getCanUseMultiAccountMobile() && d.MultiAccountMobileNotificationsExperiment.getCurrentConfig({
                    location: "09e468_1"
                }, {
                    autoTrackExposure: !1
                }).isMultiAccountMobileNotificationsEnabled
            }
        }, {
            key: "isSwitchingAccount",
            get: function() {
                return T
            }
        }], E(r.prototype, o), i && E(r, i), s
    }(l.default.PersistedStore);
    p(g, "displayName", "MultiAccountStore"), p(g, "persistKey", "MultiAccountStore"), p(g, "migrations", [function(e) {
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
    }]), t.default = new g(c.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.user;
            i = t.id, T = !1;
            var n = O.slice(),
                r = n.findIndex(function(e) {
                    return e.id === t.id
                });
            r > -1 ? (O[r].avatar = t.avatar, O[r].username = t.username, O[r].discriminator = t.discriminator, O[r].tokenStatus = 2) : n.push({
                id: t.id,
                avatar: t.avatar,
                username: t.username,
                discriminator: t.discriminator,
                tokenStatus: 2,
                pushSyncToken: null
            }), (O = n).length > _.MAX_ACCOUNTS && O.splice(_.MAX_ACCOUNTS).forEach(function(e) {
                S(e.id)
            })
        },
        LOGOUT: function(e) {
            T = !!e.isSwitchingAccount, !e.isSwitchingAccount && (O = O.filter(function(e) {
                return e.id !== i
            })), i = null
        },
        MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: function(e) {
            return v(e.userId, 1)
        },
        MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: function(e) {
            return v(e.userId, 2)
        },
        MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: function(e) {
            return v(e.userId, 0)
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            return S(e.userId)
        },
        MULTI_ACCOUNT_MOVE_ACCOUNT: function(e) {
            var t = e.from,
                n = e.to;
            O = (0, f.moveItemFromTo)(O, t, n)
        },
        CURRENT_USER_UPDATE: function(e) {
            var t = e.user,
                n = O.slice(),
                r = n.find(function(e) {
                    return e.id === t.id
                });
            null != r && (r.avatar = t.avatar, r.username = t.username, r.discriminator = t.discriminator, O = n)
        },
        MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: function(e) {
            a = e.multiAccountMobileExperimentEnabled
        },
        MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function(e) {
            var t = e.userId,
                n = e.pushSyncToken;
            O = O.map(function(e) {
                return e.id === t ? I(y({}, e), {
                    pushSyncToken: n
                }) : e
            })
        },
        MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function(e) {
            var t = e.invalidPushSyncTokens;
            O = O.map(function(e) {
                return null != e.pushSyncToken && t.includes(e.pushSyncToken) ? I(y({}, e), {
                    pushSyncToken: null
                }) : e
            })
        }
    })
}