function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("995991"),
        a = n("435801"),
        u = n("782615"),
        s = n("556322");

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

    function d(e, t, n) {
        return _.apply(this, arguments)
    }

    function _() {
        return (_ = c(function(e, t, l) {
            var d, _, E;
            return f(this, function(p) {
                switch (p.label) {
                    case 0:
                        if (d = e.hasSpotifyAccount, _ = e.activity, E = e.user, !(0, s.default)(d) || null == _ || null == _.sync_id) return [2];
                        return [4, (0, a.ensureSpotifyPlayable)()];
                    case 1:
                        return p.sent(), [4, (0, a.ensureSpotifyPremium)().catch(function(e) {
                            return (0, o.openModalLazy)(c(function() {
                                var e;
                                return f(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Promise.all([n.e("99387"), n.e("26933")]).then(n.bind(n, "796272"))];
                                        case 1:
                                            return e = t.sent().default, [2, function(t) {
                                                return r.createElement(e, t)
                                            }]
                                    }
                                })
                            })), Promise.reject(e)
                        })];
                    case 2:
                        return p.sent(), i.sync(_, E.id), (0, u.default)(t, E, _, l), [2]
                }
            })
        })).apply(this, arguments)
    }
}