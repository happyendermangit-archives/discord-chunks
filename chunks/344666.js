function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchActiveChannels: function() {
            return s
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("375314"),
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
        return l.apply(this, arguments)
    }

    function l() {
        var e;
        return e = function(e) {
            var t, n, u, s, l, c, f = arguments;
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
            }(this, function(d) {
                switch (d.label) {
                    case 0:
                        t = f.length > 1 && void 0 !== f[1] ? f[1] : 10, o.default.dispatch({
                            type: "ACTIVE_CHANNELS_FETCH_START",
                            guildId: e
                        }), d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: a.Endpoints.ACTIVE_CHANNELS(e),
                            query: {
                                channel_limit: t
                            }
                        })];
                    case 2:
                        return l = null !== (s = null === (n = (u = d.sent()).body) || void 0 === n ? void 0 : n.channels) && void 0 !== s ? s : [], o.default.dispatch({
                            type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
                            guildId: e,
                            channels: l
                        }), [2, u];
                    case 3:
                        throw c = d.sent(), o.default.dispatch({
                            type: "ACTIVE_CHANNELS_FETCH_FAILURE",
                            guildId: e,
                            error: new i.default(c)
                        }), c;
                    case 4:
                        return [2]
                }
            })
        }, (l = function() {
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
        }).apply(this, arguments)
    }
}