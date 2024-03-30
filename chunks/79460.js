function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("217014"),
        a = n("388990"),
        u = n("784596"),
        s = n("281767");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function f(e, t) {
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
    var d = 5 * a.default.Millis.MINUTE;

    function _(e, t) {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = c(function(e, t) {
            var n, i;
            return f(this, function(i) {
                switch (i.label) {
                    case 0:
                        o.default.dispatch({
                            type: "USER_RECENT_GAMES_FETCH_START",
                            userId: e
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: s.Endpoints.USER_RECENT_GAMES(e),
                            signal: t
                        })];
                    case 2:
                        return n = i.sent(), o.default.dispatch({
                            type: "USER_RECENT_GAMES_FETCH_SUCCESS",
                            userId: e,
                            recentGames: n.body.recent_games
                        }), [3, 4];
                    case 3:
                        return i.sent(), o.default.dispatch({
                            type: "USER_RECENT_GAMES_FETCH_ERROR",
                            userId: e
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function p() {
        return (p = c(function(e, t, n) {
            var r, a, s;
            return f(this, function(l) {
                switch (l.label) {
                    case 0:
                        if (null != (r = u.default.getLastFetchTimestamp(e)) && Date.now() - r < d) return [2];
                        return o.default.dispatch({
                            type: "USER_RECENT_GAMES_FETCH_START",
                            userId: e
                        }), [4, _(e, t)];
                    case 1:
                        if (l.sent(), !n) return [3, 3];
                        if (a = i.default.getId(), s = u.default.getLastFetchTimestamp(a), !(a !== e && null == s)) return [3, 3];
                        return [4, _(a, t)];
                    case 2:
                        l.sent(), l.label = 3;
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = {
        fetchUserRecentGames: function(e, t, n) {
            return p.apply(this, arguments)
        },
        updateUserRecentGamesLocal: function(e, t) {
            o.default.dispatch({
                type: "USER_RECENT_GAMES_UPDATE_LOCAL",
                applicationId: e,
                duration: t
            })
        }
    }
}