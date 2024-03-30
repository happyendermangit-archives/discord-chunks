function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        shouldFetchGuildFeed: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("156251"),
        a = n("98406");

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function l(e, t) {
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

    function c(e, t) {
        var n = a.default.getLastFetchedMillis(e);
        return !(!t && null != n && Date.now() - n < 72e5) && a.default.getFetchStatus(e).loading === a.LoadingStatus.NONE && !0
    }

    function f(e) {
        var t = e.guildId,
            n = e.highlightedItemData,
            u = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getFetchStatus(t)
            }, [t]),
            f = u.loading,
            d = u.error,
            _ = r.useCallback(function(e) {
                var r = e.force,
                    o = e.flushSeenItems;

                function a() {
                    return (a = s(function() {
                        return l(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, (0, i.fetchGuildFeed)({
                                        guildId: t,
                                        flushSeenItems: o,
                                        refresh: !0,
                                        highlightedItemData: n
                                    })];
                                case 1:
                                    return e.sent(), [3, 3];
                                case 2:
                                    return console.error(e.sent()), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                c(t, null != r && r) && ! function() {
                    a.apply(this, arguments)
                }()
            }, [t, n]),
            E = r.useCallback(function() {
                function e() {
                    return (e = s(function() {
                        return l(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, (0, i.fetchGuildFeed)({
                                        guildId: t,
                                        refresh: !1
                                    })];
                                case 1:
                                    return e.sent(), [3, 3];
                                case 2:
                                    return console.error(e.sent()), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                c(t, !0) && ! function() {
                    e.apply(this, arguments)
                }()
            }, [t]);
        return r.useEffect(function() {
            _({
                force: null != n
            })
        }, [_, n]), {
            fetchFresh: _,
            fetchPage: E,
            loading: f,
            error: d
        }
    }
}