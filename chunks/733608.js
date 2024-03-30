function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualFriends: function() {
            return p
        }
    });
    var r, o, i = n("470079"),
        a = n("392711"),
        u = n("898511"),
        s = n("531822"),
        l = n("217014"),
        c = n("92704"),
        f = n("689381"),
        d = n("903716");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        var t, n, r, o, p = (0, u.useStateFromStores)([d.default], function() {
                return d.default.getMutualFriends(e.id)
            }),
            m = i.useRef(null != p);
        var y = (t = i.useState(m.current ? 2 : 0), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = y[0],
            h = y[1],
            O = i.useRef(new AbortController),
            T = (0, u.useStateFromStores)([l.default], function() {
                return l.default.getId()
            }),
            S = e.id === T,
            v = e.bot || S,
            g = (0, f.useProfileMutualsExperiment)({
                disable: v
            }).enabled;
        var A = i.useCallback((o = (r = function(e, t) {
            var n;
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
            }(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (t > 0) return [2];
                        h(1), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, (0, s.fetchMutualFriends)(e, O.current.signal)];
                    case 2:
                    case 3:
                        return n.sent(), [3, 4];
                    case 4:
                        return h(2), [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, o) {
                var i = r.apply(e, t);

                function a(e) {
                    E(i, n, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, n, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function(e, t) {
            return o.apply(this, arguments)
        }), []);
        return i.useEffect(function() {
            null == p && !v && g && A(e.id, I)
        }, [v, g, I, A, p, e.bot, e.id]), i.useEffect(function() {
            return function() {
                var e;
                null === (e = O.current) || void 0 === e || e.abort()
            }
        }, []), [I > 1, (0, u.useStateFromStoresArray)([c.default], function() {
            return (0, a.sortBy)(p, function(e) {
                var t, n, r = e.user;
                return -(null !== (n = null === (t = c.default.getUserAffinity(r.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0)
            })
        })]
    }(r = o || (o = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED"
}