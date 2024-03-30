function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyToGuild: function() {
            return y
        },
        cancelGuildBoostSlot: function() {
            return T
        },
        fetchAppliedGuildBoostsForGuild: function() {
            return _
        },
        fetchGuildBoostSlots: function() {
            return p
        },
        unapplyFromGuild: function() {
            return h
        },
        uncancelGuildBoostSlot: function() {
            return v
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("146591"),
        a = n("81164"),
        u = n("69527"),
        s = n("428920"),
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

    function _(e) {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = f(function(e) {
            var t;
            return d(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, r.HTTP.get({
                            url: l.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return t = n.sent().body.map(function(e) {
                            return a.default.createFromServer(e)
                        }), o.default.dispatch({
                            type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                            guildId: e,
                            appliedBoosts: t
                        }), [2, t]
                }
            })
        })).apply(this, arguments)
    }

    function p() {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = f(function() {
            var e;
            return d(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, r.HTTP.get({
                            url: l.Endpoints.USER_GUILD_BOOST_SLOTS,
                            oldFormErrors: !0
                        })];
                    case 1:
                        return e = t.sent().body.map(function(e) {
                            return u.default.createFromServer(e, s.default.getSubscriptionById(e.subscription_id))
                        }), o.default.dispatch({
                            type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                            guildBoostSlots: e
                        }), [2, e]
                }
            })
        })).apply(this, arguments)
    }

    function y(e, t) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = f(function(e, t) {
            var n, u, s, c;
            return d(this, function(f) {
                switch (f.label) {
                    case 0:
                        o.default.dispatch({
                            type: "GUILD_APPLY_BOOST_START"
                        }), f.label = 1;
                    case 1:
                        return f.trys.push([1, 3, , 4]), [4, r.HTTP.put({
                            url: l.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        })];
                    case 2:
                        return u = Array.isArray((n = f.sent()).body) ? n.body.map(a.default.createFromServer) : [a.default.createFromServer(n.body)], o.default.dispatch({
                            type: "GUILD_APPLY_BOOST_SUCCESS",
                            appliedGuildBoost: u
                        }), p(), [2, u];
                    case 3:
                        throw s = f.sent(), c = new i.AppliedGuildBoostError(s), o.default.dispatch({
                            type: "GUILD_APPLY_BOOST_FAIL",
                            error: c
                        }), c;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function h(e, t) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = f(function(e, t) {
            var n, a;
            return d(this, function(u) {
                switch (u.label) {
                    case 0:
                        o.default.dispatch({
                            type: "GUILD_UNAPPLY_BOOST_START"
                        }), u.label = 1;
                    case 1:
                        return u.trys.push([1, 3, , 4]), [4, r.HTTP.del({
                            url: l.Endpoints.APPLIED_GUILD_BOOST(e, t),
                            oldFormErrors: !0
                        })];
                    case 2:
                        return u.sent(), p(), [3, 4];
                    case 3:
                        throw n = u.sent(), a = new i.AppliedGuildBoostError(n), o.default.dispatch({
                            type: "GUILD_UNAPPLY_BOOST_FAIL",
                            error: a
                        }), a;
                    case 4:
                        return o.default.dispatch({
                            type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                            boostId: t
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = f(function(e) {
            var t, n;
            return d(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, r.HTTP.post({
                            url: l.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return t = i.sent(), n = u.default.createFromServer(t.body, s.default.getSubscriptionById(t.body.subscription_id)), o.default.dispatch({
                            type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                            guildBoostSlot: n
                        }), [2, n]
                }
            })
        })).apply(this, arguments)
    }

    function v(e) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = f(function(e) {
            var t, n;
            return d(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, r.HTTP.post({
                            url: l.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return t = i.sent(), n = u.default.createFromServer(t.body, s.default.getSubscriptionById(t.body.subscription_id)), o.default.dispatch({
                            type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                            guildBoostSlot: n
                        }), [2, n]
                }
            })
        })).apply(this, arguments)
    }
}