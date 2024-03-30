function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("573626"),
        a = n("110825"),
        u = n("835471"),
        s = n("254093"),
        l = n("437596"),
        c = n("281767");

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

    function d(e) {
        var t, d = e.platformType,
            _ = e.location,
            E = e.overrideUrl;
        if (d === c.PlatformTypes.LEAGUE_OF_LEGENDS && (d = c.PlatformTypes.RIOT_GAMES), d === c.PlatformTypes.CRUNCHYROLL) {
            i.showModal([null != _ ? _ : "unknown"]);
            return
        }
        if (d === c.PlatformTypes.XBOX) {
            u.showModal([null != _ ? _ : "unknown"]);
            return
        }
        if (d === c.PlatformTypes.PLAYSTATION || d === c.PlatformTypes.PLAYSTATION_STAGING) {
            a.showModal([null != _ ? _ : "unknown"], d);
            return
        }
        if (d === c.PlatformTypes.DOMAIN) {
            ;
            (0, o.openModalLazy)((t = function() {
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
                            return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("28637")]).then(n.bind(n, "130089"))];
                        case 1:
                            return e = t.sent().default, [2, function(t) {
                                return r.createElement(e, function(e) {
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
                                }({
                                    analyticsLocation: [null != _ ? _ : "unknown"]
                                }, t))
                            }]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        f(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        f(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }));
            return
        }
        if (null != E) {
            (0, s.handleClick)({
                shouldConfirm: !0,
                href: E,
                onConfirm: function() {
                    (0, l.openProviderAuthorize)(d, {
                        location: _
                    }, E)
                }
            });
            return
        }(0, l.openProviderAuthorize)(d, {
            location: _
        })
    }
}