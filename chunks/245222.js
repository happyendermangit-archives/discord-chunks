function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("56300"),
        u = n("898511"),
        s = n("784184"),
        l = n("549579"),
        c = n("649455"),
        f = n("396586"),
        d = n("646220"),
        _ = n("335050"),
        E = n("540105"),
        p = n("935741"),
        m = n("957808"),
        y = n("306912"),
        I = n("776982"),
        h = n("208454"),
        O = n("266140"),
        T = n("62957"),
        S = n("830567"),
        v = n("142680");

    function g(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function A(e) {
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
    }

    function b(e) {
        var t = e.className,
            o = e.userId,
            b = e.channelId,
            N = e.inlinePreview,
            R = void 0 !== N && N,
            C = (0, f.default)(c.default.USER_MENTION).analyticsLocations,
            P = (0, u.useStateFromStores)([h.default], function() {
                return h.default.getUser(o)
            }),
            D = (0, u.useStateFromStores)([p.default], function() {
                return p.default.getChannel(b)
            }),
            L = null != D ? D.getGuildId() : null,
            M = R || null == P || null == L || null == b ? void 0 : function(e) {
                var t;
                null != D && (0, l.openContextMenuLazy)(e, (t = function() {
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
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("92379"), n.e("51051"), n.e("13618"), n.e("91440"), n.e("88609"), n.e("28432"), n.e("46187"), n.e("85865")]).then(n.bind(n, "641727"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    var n, o;
                                    return r.createElement(e, (n = A({}, t), o = (o = {
                                        user: P,
                                        channel: D,
                                        guildId: L
                                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(o)).forEach(function(e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                                    }), n))
                                }]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            g(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            g(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            },
            U = S.default.useName(P),
            w = (0, u.useStateFromStores)([p.default, m.default, I.default], function() {
                return T.default.getNickname(L, b, P)
            }),
            k = y.default.getGuild(L),
            G = (0, d.useClydeEnabled)(k, D) && o === v.CLYDE_AI_USER_ID ? v.CLYDE_AI_MENTION_COLOR : null,
            B = function(e) {
                return r.createElement(O.default, A({
                    className: t,
                    onContextMenu: M,
                    color: G
                }, e), "@".concat(null != w ? w : U))
            };
        return R ? r.createElement(f.AnalyticsLocationProvider, {
            value: C
        }, B()) : r.createElement(f.AnalyticsLocationProvider, {
            value: C
        }, r.createElement(s.Popout, {
            preload: null == P ? void 0 : function() {
                return (0, _.default)(P.id, P.getAvatarURL(L, 80), {
                    guildId: null != L ? L : void 0,
                    channelId: null != b ? b : void 0
                })
            },
            renderPopout: function(e) {
                return i()(null != P, "Unexpected missing user"), r.createElement(E.default, A({
                    location: "UserMention",
                    userId: P.id,
                    guildId: null != L ? L : void 0,
                    channelId: b
                }, e))
            },
            position: a.isMobile ? "top" : "right"
        }, function(e) {
            return B(e)
        }))
    }
}