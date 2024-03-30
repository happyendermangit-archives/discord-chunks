function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openProviderAuthorize: function() {
            return s
        }
    });
    var r = n("470888"),
        o = n("374550"),
        i = n("999325"),
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
            var t, n, u, s, l, c, f, d, _ = arguments;
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
            }(this, function(E) {
                switch (E.label) {
                    case 0:
                        n = (t = _.length > 1 && void 0 !== _[1] ? _[1] : {}).location, u = t.twoWayLinkType, s = _.length > 2 ? _[2] : void 0;
                        if (l = Math.round(screen.width / 2 - 350), c = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, f = null, !(0, o.isDesktop)() && (f = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(a.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(c, ",left=").concat(l, ",width=").concat(700, ",height=").concat(640))), !(null == (d = s) && e !== i.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE)) return [3, 2];
                        return [4, r.default.authorize(e, {
                            location: n,
                            twoWayLinkType: u
                        })];
                    case 1:
                        d = E.sent().body.url, E.label = 2;
                    case 2:
                        if (null == d) return [2];
                        return null != f ? f.location.href = d : window.open(d), [2, d]
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