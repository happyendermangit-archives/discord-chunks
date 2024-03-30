function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        tryLoadAsync: function() {
            return s
        },
        tryLoadOrResetCacheGateway: function() {
            return c
        },
        tryLoadOrResetCacheGatewayAsync: function() {
            return f
        }
    });
    var r = n("629815");

    function o(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function i(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, i) {
                var a = e.apply(t, n);

                function u(e) {
                    o(a, r, i, u, s, "next", e)
                }

                function s(e) {
                    o(a, r, i, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function a(e, t) {
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
    var u = new(n("35523")).default("TryLoad");

    function s(e) {
        return l.apply(this, arguments)
    }

    function l() {
        return (l = i(function(e) {
            var t;
            return a(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, e()];
                    case 1:
                        return [2, n.sent()];
                    case 2:
                        return t = n.sent(), u.log("database load failed.", t), [2, null];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function c(e, t) {
        try {
            return t()
        } catch (t) {
            return u.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), r.default.dispatch({
                type: "RESET_SOCKET",
                args: {
                    error: t,
                    action: "tryLoadOrResetCacheGateway (".concat(e, ")"),
                    clearCache: !0
                }
            }), null
        }
    }

    function f(e, t) {
        return d.apply(this, arguments)
    }

    function d() {
        return (d = i(function(e, t) {
            var n;
            return a(this, function(o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 3]), [4, t()];
                    case 1:
                        return [2, o.sent()];
                    case 2:
                        return n = o.sent(), u.log("".concat(e, ": exception thrown, resetting socket."), n, n.stack), r.default.dispatch({
                            type: "RESET_SOCKET",
                            args: {
                                error: n,
                                action: "tryLoadOrResetCacheGatewayAsync (".concat(e, ")"),
                                clearCache: !0
                            }
                        }), [2, null];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}