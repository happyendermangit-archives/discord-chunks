function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserRecentGames: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("79460"),
        a = n("784596"),
        u = n("276256");

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
        var t, n = (0, u.useIsUserRecentGamesFetchEnabled)({
                userId: e,
                location: "28tk0bf_4"
            }),
            l = r.useRef(new AbortController),
            c = (0, o.useStateFromStoresObject)([a.default], function() {
                return {
                    currentUserApplicationIds: a.default.getCurrentUserApplicationIds(),
                    recentGames: a.default.getRecentGames(e),
                    isFetching: a.default.isFetching(e),
                    isError: a.default.isError(e)
                }
            }),
            f = c.currentUserApplicationIds,
            d = c.recentGames,
            _ = c.isFetching,
            E = c.isError;
        var p = r.useCallback((t = function() {
            var t;
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
            }(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (!n || _ || E) return [2];
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]), [4, i.default.fetchUserRecentGames(e, l.current.signal, !0)];
                    case 2:
                    case 3:
                        return t.sent(), [3, 4];
                    case 4:
                        return [2]
                }
            })
        }, function() {
            var e = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = t.apply(e, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), [E, n, _, e]);
        return r.useEffect(function() {
            p()
        }, [p]), r.useEffect(function() {
            var e = l.current;
            return function() {
                null == e || e.abort()
            }
        }, []), {
            isFetching: _,
            isError: E,
            recentGames: d,
            currentUserApplicationIds: f
        }
    }
}