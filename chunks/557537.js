function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchApplication: function() {
            return m
        },
        fetchEligibleApplicationSubscriptionGuilds: function() {
            return y
        },
        getApplicationSubscriptionGroupListingsForApplication: function() {
            return _
        },
        getEntitlementsForGuild: function() {
            return E
        },
        getSubscriptionGroupForSubscriptionPlan: function() {
            return p
        }
    });
    var r, o, i, a = n("967888"),
        u = n("629815"),
        s = n("375314"),
        l = n("281767");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function d(e, t) {
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
    var _ = (r = f(function(e, t) {
        return d(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, a.HTTP.get({
                        url: l.Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t)
                    })];
                case 1:
                    return [2, n.sent().body]
            }
        })
    }), function(e, t) {
        return r.apply(this, arguments)
    });
    var E = (o = f(function(e) {
        var t, n = arguments;
        return d(this, function(r) {
            switch (r.label) {
                case 0:
                    return t = n.length > 1 && void 0 !== n[1] && n[1], [4, a.HTTP.get({
                        url: l.Endpoints.GUILD_ENTITLEMENTS(e),
                        query: {
                            with_sku: !0,
                            with_application: !0,
                            exclude_deleted: t
                        }
                    })];
                case 1:
                    return [2, r.sent().body]
            }
        })
    }), function(e) {
        return o.apply(this, arguments)
    });
    var p = (i = f(function(e) {
        return d(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, a.HTTP.get({
                        url: l.Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(e)
                    })];
                case 1:
                    return [2, t.sent().body]
            }
        })
    }), function(e) {
        return i.apply(this, arguments)
    });

    function m(e) {
        return u.default.dispatch({
            type: "APPLICATION_FETCH",
            applicationId: e
        }), a.HTTP.get({
            url: l.Endpoints.APPLICATION_PUBLIC(e)
        }).then(function(e) {
            return u.default.dispatch({
                type: "APPLICATION_FETCH_SUCCESS",
                application: e.body
            }), e.body
        }).catch(function(t) {
            return u.default.dispatch({
                type: "APPLICATION_FETCH_FAIL",
                applicationId: e
            }), Promise.reject(new s.default(t))
        })
    }

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = f(function(e) {
            return d(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, a.HTTP.get({
                            url: l.Endpoints.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
                            query: {
                                application_id: e
                            }
                        })];
                    case 1:
                        return [2, t.sent().body]
                }
            })
        })).apply(this, arguments)
    }
}