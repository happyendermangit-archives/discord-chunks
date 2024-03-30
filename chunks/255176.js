function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmojiAndSourceGuild: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("306912"),
        a = n("300983"),
        u = n("148527"),
        s = n("186606"),
        l = n("281767");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var _ = function(e, t, n) {
            var r = null != n ? e.getCustomEmojiById(n) : null;
            if ((null == r ? void 0 : r.type) === u.EmojiTypes.GUILD) return {
                emoji: r,
                joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId)
            };
            return {
                emoji: null,
                joinedEmojiSourceGuildRecord: null
            }
        },
        E = function(e) {
            var t = e.emojiId,
                n = e.refreshPositionKey,
                u = (0, o.useStateFromStoresObject)([a.default, i.default], function() {
                    return _(a.default, i.default, t)
                }),
                c = u.joinedEmojiSourceGuildRecord,
                E = u.emoji,
                p = null != c,
                m = null != c && c.hasFeature(l.GuildFeatures.DISCOVERABLE),
                y = (!p || m) && null != t,
                I = d(r.useState(y), 2),
                h = I[0],
                O = I[1],
                T = null != c ? s.default.createFromGuildRecord(c) : null,
                S = d(r.useState(T), 2),
                v = S[0],
                g = S[1];
            return r.useEffect(function() {
                null == n || n();
                var e, r, o = (r = (e = function() {
                    var e;
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
                    }(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!(null != t)) return [3, 2];
                                return [4, s.default.getGuildFromEmojiId(t)];
                            case 1:
                                return e = r.sent(), [3, 3];
                            case 2:
                                e = null, r.label = 3;
                            case 3:
                                return g(e), O(!1), null == n || n(), [2]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            f(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            f(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }), function() {
                    return r.apply(this, arguments)
                });
                if (y) {
                    o();
                    return
                }
                null == n || n()
            }, [t, y]), {
                expressionSourceGuild: v,
                joinedEmojiSourceGuildRecord: c,
                hasJoinedEmojiSourceGuild: p,
                emoji: E,
                isFetching: h
            }
        }
}