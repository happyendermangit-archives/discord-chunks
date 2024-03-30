function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("67381"),
        i = n("733374"),
        a = n("163291"),
        u = n("909080"),
        s = n("935741"),
        l = n("42969"),
        c = n("88813"),
        f = n("281767");

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    d(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    d(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function E(e, t) {
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

    function p(e, t, n) {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = _(function(e, t, d) {
            var p, m, y;
            return E(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (!(m = null != (p = (0, l.tryParseChannelPath)(e)))) return [3, 2];
                        return [4, (0, c.default)(p)];
                    case 1:
                        m = !I.sent(), I.label = 2;
                    case 2:
                        if (m) return (0, o.openModalLazy)(_(function() {
                            var e;
                            return E(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("54869")]).then(n.bind(n, "668206"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            return r.createElement(e, t)
                                        }]
                                }
                            })
                        })), [2];
                        if (null == p) return (0, a.transitionTo)(e), [2];
                        if (null == (y = function(e) {
                                if (null == e.channelId) return e;
                                var t, n, r = s.default.getChannel(e.channelId);
                                if (null == r) return e;
                                var o = (0, i.getGuildIdForGenericRedirect)(r);
                                return t = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                            var r, o, i;
                                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                                value: i,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : r[o] = i
                                        })
                                    }
                                    return e
                                }({}, e), n = (n = {
                                    guildId: null != o ? o : f.ME
                                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }), t
                            }(p)).channelId) return (0, u.transitionToGuild)(y.guildId), [2];
                        return null != y.threadId ? (0, a.transitionTo)(f.Routes.CHANNEL_THREAD_VIEW(y.guildId, y.channelId, y.threadId, y.messageId), t, d) : (0, a.transitionTo)(f.Routes.CHANNEL(y.guildId, y.channelId, y.messageId), t, d), [2]
                }
            })
        })).apply(this, arguments)
    }
}