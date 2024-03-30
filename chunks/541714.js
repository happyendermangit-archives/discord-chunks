function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchApplicationCommandIndex: function() {
            return f
        },
        requestApplicationCommandIndex: function() {
            return _
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("870331"),
        a = n("388990"),
        u = n("281767");

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
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function c(e, t) {
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

    function f(e, t, n) {
        return d.apply(this, arguments)
    }

    function d() {
        return (d = l(function(e, t, n) {
            var s, f, d, _, E;
            return c(this, function(p) {
                switch (p.label) {
                    case 0:
                        var m;
                        switch (s = 0, e.type) {
                            case "channel":
                                f = u.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                                break;
                            case "guild":
                                f = u.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                                break;
                            case "user":
                                f = u.Endpoints.APPLICATION_COMMAND_INDEX_USER
                        }
                        return m = l(function(t) {
                            return c(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (s >= 3) return E(!0), [2, o.default.dispatch({
                                            type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                                            target: e
                                        })];
                                        return [4, new Promise(function(e) {
                                            return setTimeout(e, t)
                                        })];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return [2, _()]
                                }
                            })
                        }), d = function(e) {
                            return m.apply(this, arguments)
                        }, _ = function() {
                            return r.HTTP.get({
                                url: f,
                                retries: 3 - s - 1,
                                signal: n.signal,
                                onRequestCreated: function() {
                                    return s++
                                }
                            }).then(function(t) {
                                return 202 === t.status ? d(5e3) : (E(!1), o.default.dispatch({
                                    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
                                    target: e,
                                    index: t.body
                                }))
                            }, function(t) {
                                if (n.signal.aborted) {
                                    E(!0);
                                    return
                                }
                                return 429 === t.status ? d(t.body.retry_after * a.default.Millis.SECOND) : (E(!0), o.default.dispatch({
                                    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                                    target: e
                                }))
                            })
                        }, E = function(e) {
                            var r = performance.now() - t;
                            i.default.track(u.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                                duration_ms: r,
                                error: e,
                                aborted: n.signal.aborted,
                                include_applications: !0,
                                retries: Math.max(s - 1, 0),
                                kind: null,
                                command_type: null
                            })
                        }, [4, _()];
                    case 1:
                        return p.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function _(e) {
        o.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
            start: performance.now(),
            target: e
        })
    }
}