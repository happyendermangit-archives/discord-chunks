function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("384433"),
        o = n("160718");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e) {
        var t, n, a = !1;
        e.on(r.MediaEngineEvent.Destroy, function() {
            return a = !0
        });
        var u = (n = (t = function() {
            var t, n, i, s, l, c, f, d, _, E;
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
            }(this, function(p) {
                switch (p.label) {
                    case 0:
                        if (a) return [2];
                        t = [], e.eachConnection(function(e) {
                            return t.push({
                                connection: e,
                                stats: e.emitStats()
                            })
                        }), n = [], i = !0, s = !1, l = void 0, p.label = 1;
                    case 1:
                        p.trys.push([1, 6, 7, 8]), c = t[Symbol.iterator](), p.label = 2;
                    case 2:
                        if (i = (f = c.next()).done) return [3, 5];
                        return [4, (d = f.value).stats];
                    case 3:
                        null != (_ = p.sent()) && n.push({
                            connection: d.connection,
                            stats: _
                        }), p.label = 4;
                    case 4:
                        return i = !0, [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        return E = p.sent(), s = !0, l = E, [3, 8];
                    case 7:
                        try {
                            !i && null != c.return && c.return()
                        } finally {
                            if (s) throw l
                        }
                        return [7];
                    case 8:
                        return e.emit(r.MediaEngineEvent.ConnectionStats, n), setTimeout(u, o.STATS_INTERVAL), [2]
                }
            })
        }, function() {
            var e = this,
                n = arguments;
            return new Promise(function(r, o) {
                var a = t.apply(e, n);

                function u(e) {
                    i(a, r, o, u, s, "next", e)
                }

                function s(e) {
                    i(a, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }), function() {
            return n.apply(this, arguments)
        });
        setTimeout(u, o.STATS_INTERVAL)
    }
}