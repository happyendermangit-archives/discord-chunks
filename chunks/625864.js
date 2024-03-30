function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("947248"),
        a = n("342942"),
        u = n("281767");

    function s(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function l(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function c(e, t) {
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
    t.default = {
        createApplication: function(e) {
            var t = e.name,
                n = e.guildId,
                i = e.type,
                a = e.teamId;
            return l(function() {
                var e;
                return c(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, r.HTTP.post({
                                url: u.Endpoints.APPLICATIONS,
                                body: {
                                    name: t,
                                    type: i,
                                    guild_id: n,
                                    team_id: a
                                }
                            })];
                        case 1:
                            return e = s.sent().body, null != n && null != i && o.default.dispatch({
                                type: "APPLICATION_FETCH_SUCCESS",
                                application: e
                            }), [2, e]
                    }
                })
            })()
        },
        getApplicationsForGuild: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return l(function() {
                var n, i, a;
                return c(this, function(s) {
                    switch (s.label) {
                        case 0:
                            var l, c;
                            return n = t.includeTeam, i = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < i.length; r++) {
                                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                    }
                                }
                                return o
                            }(t, ["includeTeam"]), [4, r.HTTP.get({
                                url: u.Endpoints.GUILD_APPLICATIONS(e),
                                query: (l = function(e) {
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
                                }({}, i), c = (c = {
                                    include_team: n
                                }, c), Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(c)).forEach(function(e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
                                }), l)
                            })];
                        case 1:
                            return a = s.sent().body, o.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: a
                            }), [2, a]
                    }
                })
            })()
        },
        transferApplication: function(e) {
            var t = e.applicationId,
                n = e.teamId;
            return l(function() {
                var e;
                return c(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, r.HTTP.post({
                                url: u.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                                body: {
                                    team_id: n
                                }
                            })];
                        case 1:
                            return e = i.sent().body, o.default.dispatch({
                                type: "APPLICATION_FETCH_SUCCESS",
                                application: e
                            }), [2, e]
                    }
                })
            })()
        },
        fetchApplications: function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return l(function() {
                var n, s, l, f;
                return c(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (n = e, !t && (s = function(e) {
                                    var t, n, r = a.default.getApplication(e),
                                        o = (0, i.hasFlag)(null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0, u.ApplicationFlags.EMBEDDED) && (null == r ? void 0 : null === (t = r.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                    return !(null != r && !o) && !a.default.isFetchingApplication(e) && !a.default.didFetchingApplicationFail(e) && e.length > 0
                                }, n = e.filter(s)), !(n.length > 0)) return [3, 5];
                            o.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            }), c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                                url: u.Endpoints.APPLICATIONS_PUBLIC,
                                query: new URLSearchParams(n.map(function(e) {
                                    return ["application_ids", e]
                                })).toString(),
                                oldFormErrors: !0
                            })];
                        case 2:
                            return l = c.sent(), [3, 4];
                        case 3:
                            throw f = c.sent(), o.default.dispatch({
                                type: "APPLICATIONS_FETCH_FAIL",
                                applicationIds: n
                            }), f;
                        case 4:
                            o.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: l.body
                            }), c.label = 5;
                        case 5:
                            return [2]
                    }
                })
            })()
        },
        fetchApplication: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return o.default.dispatch({
                type: "APPLICATION_FETCH",
                applicationId: e
            }), r.HTTP.get({
                url: u.Endpoints.APPLICATION_PUBLIC(e),
                query: {
                    with_guild: t
                },
                oldFormErrors: !0
            }).then(function(e) {
                return o.default.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: e.body
                }), e.body
            }).catch(function(t) {
                return o.default.dispatch({
                    type: "APPLICATION_FETCH_FAIL",
                    applicationId: e
                }), Promise.reject(t)
            })
        }
    }
}