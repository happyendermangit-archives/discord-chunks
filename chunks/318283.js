function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        backupSettings: function() {
            return y
        },
        listSnapshots: function() {
            return c
        },
        restoreSnapshot: function() {
            return E
        },
        takeSnapshot: function() {
            return d
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("967888"),
        a = n("281767");

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

    function c() {
        return f.apply(this, arguments)
    }

    function f() {
        return (f = s(function() {
            return l(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, i.HTTP.get(a.Endpoints.NOTIFICATION_SNAPSHOTS)];
                    case 1:
                        return [2, e.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function d(e) {
        return _.apply(this, arguments)
    }

    function _() {
        return (_ = s(function(e) {
            return l(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.HTTP.post({
                            url: a.Endpoints.NOTIFICATION_SNAPSHOTS,
                            body: {
                                label: e
                            }
                        })];
                    case 1:
                        return [2, t.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function E(e) {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = s(function(e) {
            return l(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.HTTP.post(a.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))];
                    case 1:
                        return [2, t.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function m() {
        return (m = s(function(e) {
            return l(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.HTTP.del(a.Endpoints.NOTIFICATION_SNAPSHOT(e))];
                    case 1:
                        return [2, t.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = s(function(e) {
            var t, n, r;
            return l(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!(e.length > 0)) return [3, 2];
                        if (t = o().sum(e.map(function(e) {
                                return e.length
                            })), r = null !== (n = o().max(e.map(function(e) {
                                return e.length
                            }))) && void 0 !== n ? n : 0, !(e.length >= 5 || t + r > 1e6)) return [3, 2];
                        return [4, function(e) {
                            return m.apply(this, arguments)
                        }(o().sortBy(e, function(e) {
                            return new Date(e.recorded_at).getTime()
                        })[0].id)];
                    case 1:
                        i.sent(), i.label = 2;
                    case 2:
                        return [2, d("Backup from ".concat(new Date().toLocaleDateString()))]
                }
            })
        })).apply(this, arguments)
    }
}