function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        accountDetailsClose: function() {
            return I
        },
        accountDetailsInit: function() {
            return y
        },
        clearErrors: function() {
            return C
        },
        disableAccount: function() {
            return h
        },
        getHarvestStatus: function() {
            return v
        },
        requestHarvest: function() {
            return g
        },
        resetAllPending: function() {
            return D
        },
        resetAndCloseUserProfileForm: function() {
            return L
        },
        resetPendingAccountChanges: function() {
            return P
        },
        saveAccountChanges: function() {
            return S
        },
        saveAccountRequest: function() {
            return O
        },
        setDisableSubmit: function() {
            return M
        },
        setPendingAvatar: function() {
            return A
        },
        setPendingAvatarDecoration: function() {
            return N
        },
        setPendingGlobalNameName: function() {
            return b
        },
        setPendingProfileEffectId: function() {
            return R
        }
    });
    var r = n("967888"),
        o = n("242880"),
        i = n("751848"),
        a = n("629815"),
        u = n("163291"),
        s = n("870331"),
        l = n("299529"),
        c = n("475743"),
        f = n("493174"),
        d = n("281767"),
        _ = n("10077"),
        E = n("941504");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function y() {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_INIT"
        })
    }

    function I() {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_CLOSE"
        })
    }

    function h(e, t) {
        var n = t ? E.default.Messages.DELETE_ACCOUNT : E.default.Messages.DISABLE_ACCOUNT,
            o = t ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
        return (0, c.default)(function(t) {
            return r.HTTP.post({
                url: o,
                body: m({
                    password: e
                }, t),
                oldFormErrors: !0
            })
        }, {
            modalProps: {
                title: n
            },
            checkEnabled: !1
        }).then(function() {
            f.default.logoutInternal(), (0, u.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
        })
    }

    function O(e) {
        return T.apply(this, arguments)
    }

    function T() {
        var e;
        return e = function(e) {
            var t, n, o;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, r.HTTP.patch({
                            url: d.Endpoints.ME,
                            oldFormErrors: !0,
                            body: e
                        })];
                    case 1:
                        return (n = (t = i.sent()).body).token && (o = n.token, delete n.token, a.default.dispatch({
                            type: "UPDATE_TOKEN",
                            token: o,
                            userId: n.id
                        }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && a.default.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: n.id
                        })), a.default.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: n
                        }), [2, t]
                }
            })
        }, (T = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function S(e) {
        var t = e.username,
            n = e.discriminator,
            r = e.email,
            i = e.emailToken,
            u = e.password,
            f = e.avatar,
            p = e.avatarDecoration,
            y = e.newPassword,
            I = e.globalName;
        return a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SUBMIT"
        }), (0, c.default)(function(e) {
            var a = m({
                username: t,
                email: r,
                email_token: i,
                password: u,
                avatar: f,
                discriminator: n,
                global_name: I,
                new_password: y
            }, e);
            null === p && (a.avatar_decoration_id = null), null != p && (a.avatar_decoration_id = p.id, a.avatar_decoration_sku_id = p.skuId);
            var s = o.Storage.get(d.DEVICE_TOKEN),
                l = (0, _.getDevicePushProvider)();
            null != l && null != s && (a.push_provider = l, a.push_token = s);
            var c = o.Storage.get(d.DEVICE_VOIP_TOKEN);
            return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != c && (a.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, a.push_voip_token = c), O(a)
        }, {
            checkEnabled: !1,
            modalProps: {
                title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
            },
            hooks: {
                onEarlyClose: function() {
                    return a.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                        errors: {}
                    })
                }
            }
        }).then(function(e) {
            var t = e.body;
            return s.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                animated: (0, l.isAnimatedIconHash)(t.avatar)
            }), a.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
            }), e
        }, function(e) {
            return a.default.dispatch({
                type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    }

    function v() {
        return r.HTTP.get({
            url: d.Endpoints.USER_HARVEST,
            oldFormErrors: !0
        })
    }

    function g() {
        return r.HTTP.post({
            url: d.Endpoints.USER_HARVEST,
            oldFormErrors: !0
        })
    }

    function A(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
            avatar: e
        }), null == e ? i.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
    }

    function b(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
            globalName: e
        })
    }

    function N(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
            avatarDecoration: e
        })
    }

    function R(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
            profileEffectId: e
        })
    }

    function C() {
        a.default.dispatch({
            type: "USER_SETTINGS_CLEAR_ERRORS"
        })
    }

    function P() {
        a.default.dispatch({
            type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
        })
    }

    function D() {
        a.default.dispatch({
            type: "USER_SETTINGS_RESET_ALL_PENDING"
        })
    }

    function L() {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
        })
    }

    function M(e) {
        a.default.dispatch({
            type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
            disable: e
        })
    }
}