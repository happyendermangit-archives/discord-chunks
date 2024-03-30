function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("549579"),
        i = n("72967"),
        a = n("245222"),
        u = n("935741");

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
    t.default = {
        handleUserContextMenu: function(e, t, i, a) {
            var c, f = u.default.getChannel(t);
            null != f && (0, o.openContextMenuLazy)(a, (c = function() {
                var t;
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
                }(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("92379"), n.e("51051"), n.e("13618"), n.e("91440"), n.e("88609"), n.e("28432"), n.e("46187"), n.e("85865")]).then(n.bind(n, "641727"))];
                        case 1:
                            return t = o.sent().default, [2, function(n) {
                                var o, a;
                                return r.createElement(t, (o = l({}, n), a = (a = {
                                    user: e,
                                    channel: f,
                                    guildId: i
                                }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(a)).forEach(function(e) {
                                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
                                }), o))
                            }]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, r) {
                    var o = c.apply(e, t);

                    function i(e) {
                        s(o, n, r, i, a, "next", e)
                    }

                    function a(e) {
                        s(o, n, r, i, a, "throw", e)
                    }
                    i(void 0)
                })
            }))
        },
        react: function(e, t, n) {
            var o = e.userId,
                u = e.channelId;
            return null == o ? r.createElement(i.default, l({
                key: n.key,
                inlinePreview: n.formatInline
            }, e), t(e.content, n)) : r.createElement(a.default, {
                key: n.key,
                className: "mention",
                userId: o,
                channelId: u,
                inlinePreview: n.noStyleAndInteraction
            })
        }
    }
}