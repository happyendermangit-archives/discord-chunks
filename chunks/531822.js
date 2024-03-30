function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptAgreements: function() {
            return I
        },
        fetchCurrentUser: function() {
            return y
        },
        fetchMutualFriends: function() {
            return v
        },
        fetchProfile: function() {
            return T
        },
        getUser: function() {
            return O
        },
        setFlag: function() {
            return h
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("545525"),
        a = n("188129"),
        u = n("967888"),
        s = n("629815"),
        l = n("428009"),
        c = n("208454"),
        f = n("463156"),
        d = n("281767");

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e, t) {
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
    }
    var m = new a.Logger("UserProfileModalActionCreators");

    function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.withAnalyticsToken,
            n = void 0 !== t && t;
        return u.HTTP.get({
            url: d.Endpoints.ME,
            query: {
                with_analytics_token: n
            },
            oldFormErrors: !0
        }).then(function(e) {
            return s.default.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: e.body,
                analyticsToken: n ? e.body.analytics_token : void 0
            }), new l.default(e.body)
        })
    }

    function I() {
        var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return f.default.patch({
            url: d.Endpoints.USER_AGREEMENTS,
            trackedActionData: {
                event: i.NetworkActionNames.USER_ACCEPT_AGREEMENTS
            },
            body: {
                terms: e,
                privacy: t
            },
            oldFormErrors: !0
        }).then(function() {
            return !0
        }, function() {
            return !1
        })
    }

    function h(e, t) {
        var n = c.default.getCurrentUser();
        o()(null != n, "setFlag: user cannot be undefined");
        var r = t ? n.flags | e : n.flags & ~e;
        return u.HTTP.patch({
            url: d.Endpoints.ME,
            oldFormErrors: !0,
            body: {
                flags: r
            }
        })
    }

    function O(e) {
        var t = c.default.getUser(e);
        return null != t ? Promise.resolve(t) : u.HTTP.get({
            url: d.Endpoints.USER(e),
            oldFormErrors: !0
        }).then(function(t) {
            return s.default.dispatch({
                type: "USER_UPDATE",
                user: t.body
            }), c.default.getUser(e)
        })
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = E(function(e) {
            var t, n, r, o, i, a, l, c, f, _ = arguments;
            return p(this, function(E) {
                switch (E.label) {
                    case 0:
                        n = (t = _.length > 1 && void 0 !== _[1] ? _[1] : {}).friendToken, r = t.withMutualGuilds, o = t.withMutualFriendsCount, i = t.guildId, a = t.connectionsRoleId, l = _.length > 2 ? _[2] : void 0, s.default.dispatch({
                            type: "USER_PROFILE_FETCH_START",
                            userId: e
                        }), E.label = 1;
                    case 1:
                        return E.trys.push([1, 3, , 4]), [4, u.HTTP.get({
                            url: d.Endpoints.USER_PROFILE(e),
                            query: {
                                friend_token: n,
                                with_mutual_guilds: r,
                                with_mutual_friends_count: o,
                                guild_id: i,
                                connections_role_id: a
                            },
                            oldFormErrors: !0
                        })];
                    case 2:
                        return c = E.sent(), null == l || l(c.body, i), s.default.dispatch({
                            type: "USER_UPDATE",
                            user: c.body.user
                        }), s.default.dispatch(function(e) {
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
                        }({
                            type: "USER_PROFILE_FETCH_SUCCESS"
                        }, c.body)), null != i && null != c.body.guild_member && s.default.dispatch({
                            type: "GUILD_MEMBER_PROFILE_UPDATE",
                            guildId: i,
                            guildMember: c.body.guild_member
                        }), [2, c.body];
                    case 3:
                        throw null != (f = E.sent()) && (null == f ? void 0 : f.body) != null && m.warn("fetchProfile error: ".concat(f.body.code, " - ").concat(f.body.message)), s.default.dispatch({
                            type: "USER_PROFILE_FETCH_FAILURE",
                            userId: e
                        }), f;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e, t) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = E(function(e, t) {
            var n, r;
            return p(this, function(o) {
                switch (o.label) {
                    case 0:
                        s.default.dispatch({
                            type: "MUTUAL_FRIENDS_FETCH_START",
                            userId: e
                        }), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, u.HTTP.get({
                            url: d.Endpoints.USER_RELATIONSHIPS(e),
                            oldFormErrors: !0,
                            signal: t
                        })];
                    case 2:
                        return n = o.sent(), s.default.dispatch({
                            type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                            userId: e,
                            mutualFriends: n.body
                        }), [3, 4];
                    case 3:
                        throw (null == (r = o.sent()) ? void 0 : r.body) != null && m.warn("fetchMutualFriends error: ".concat(r.body.code, " - ").concat(r.body.message)), s.default.dispatch({
                            type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                            userId: e
                        }), r;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}