function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        stopLurking: function() {
            return E
        },
        stopLurkingAll: function() {
            return d
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("545072"),
        a = n("162677"),
        u = n("368995"),
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

    function d(e) {
        return _.apply(this, arguments)
    }

    function _() {
        return (_ = c(function(e) {
            var t;
            return f(this, function(n) {
                switch (n.label) {
                    case 0:
                        var i;
                        if (0 === (t = u.default.lurkingGuildIds().filter(function(t) {
                                return !e.includes(t)
                            })).length) return [2];
                        return o.default.dispatch({
                            type: "GUILD_STOP_LURKING",
                            ignoredGuildIds: e
                        }), [4, Promise.all(t.map((i = c(function(e) {
                            var t, n;
                            return f(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = u.default.getLurkingSource(), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, r.HTTP.del({
                                            url: s.Endpoints.GUILD_LEAVE(e),
                                            body: {
                                                lurking: !0
                                            },
                                            oldFormErrors: !0
                                        })];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return n.sent(), o.default.dispatch({
                                            type: "GUILD_STOP_LURKING_FAILURE",
                                            lurkingGuildId: e,
                                            lurkingSource: t
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        }), function(e) {
                            return i.apply(this, arguments)
                        })))];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function E() {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = c(function() {
            var e, t, n = arguments;
            return f(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (e = n.length > 0 && void 0 !== n[0] ? n[0] : null, 0 === (t = u.default.lurkingGuildIds()).length || !(null == e || !t.includes(e))) return [2];
                        return [4, d([e, i.default.getGuildId()].filter(a.isNotNullish))];
                    case 1:
                        return r.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }
}