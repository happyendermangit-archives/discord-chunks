function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("35523"),
        o = n("931983");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var a = e.apply(t, n);

                function u(e) {
                    i(a, r, o, u, s, "next", e)
                }

                function s(e) {
                    i(a, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t) {
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
    var l = new r.default("ChannelReader"),
        c = function() {
            var e, t, n;

            function r() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r)
            }
            return e = r, t = null, n = [{
                key: "getSync",
                value: function(e, t) {
                    var n = performance.now(),
                        r = o.default.channels(e).getManySyncUnsafe(t),
                        i = performance.now() - n;
                    return l.log("synchronously loaded in ".concat(i, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), [r, i]
                }
            }, {
                key: "getAsync",
                value: function(e, t) {
                    return a(function() {
                        var n, r, i;
                        return s(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = performance.now(), [4, o.default.channels(e).getMany(t)];
                                case 1:
                                    return r = a.sent(), i = performance.now() - n, l.verbose("loaded in ".concat(i, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), [2, r]
                            }
                        })
                    })()
                }
            }, {
                key: "getGuildIds",
                value: function() {
                    return a(function() {
                        var e, t, n, r;
                        return s(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (i.trys.push([0, 2, , 3]), null == (e = o.default.channels())) return [2, new Set];
                                    return [4, e.getGuildIds()];
                                case 1:
                                    return n = (null !== (t = i.sent()) && void 0 !== t ? t : []).filter(function(e) {
                                        return null !== e && "string" == typeof e
                                    }), [2, new Set(n)];
                                case 2:
                                    return r = i.sent(), l.warn("couldn't get guild ids", r), [2, new Set];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                }
            }], t && u(e.prototype, t), n && u(e, n), r
        }()
}