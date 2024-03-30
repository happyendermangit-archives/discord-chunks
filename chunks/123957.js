function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var r = n("525654"),
        a = n.n(r),
        l = n("99109"),
        u = n("296890"),
        i = n("732268"),
        o = n("531822"),
        s = n("163291"),
        c = n("217014"),
        E = n("425997"),
        d = n("870331"),
        _ = n("165091"),
        f = n("281767");

    function p(e, t, n, r, a, l, u) {
        try {
            var i = e[l](u),
                o = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(o) : Promise.resolve(o).then(r, a)
    }

    function I(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, a) {
                var l = e.apply(t, n);

                function u(e) {
                    p(l, r, a, u, i, "next", e)
                }

                function i(e) {
                    p(l, r, a, u, i, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function T(e, t) {
        var n, r, a, l, u = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return l = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this
        }), l;

        function i(l) {
            return function(i) {
                return function(l) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                        switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                            case 0:
                            case 1:
                                a = l;
                                break;
                            case 4:
                                return u.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, r = l[1], l = [0];
                                continue;
                            case 7:
                                l = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = u.trys).length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                    u.label = l[1];
                                    break
                                }
                                if (6 === l[0] && u.label < a[1]) {
                                    u.label = a[1], a = l;
                                    break
                                }
                                if (a && u.label < a[2]) {
                                    u.label = a[2], u.ops.push(l);
                                    break
                                }
                                a[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        l = t.call(e, u)
                    } catch (e) {
                        l = [6, e], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & l[0]) throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }([l, i])
            }
        }
    }

    function m() {
        return (m = I(function(e) {
            var t, n, r, i, s, E;
            return T(this, function(E) {
                switch (E.label) {
                    case 0:
                        if (!("Android" === (n = null === (t = a().os) || void 0 === t ? void 0 : t.family) || "iOS" === n)) return [3, 5];
                        if (i = null !== (r = c.default.getFingerprint()) && void 0 !== r ? r : c.default.getId(), s = (0, u.generateAttemptId)(), !(null == i && c.default.isAuthenticated())) return [3, 4];
                        E.label = 1;
                    case 1:
                        return E.trys.push([1, 3, , 4]), [4, (0, o.fetchCurrentUser)()];
                    case 2:
                        return E.sent(), i = c.default.getId(), [3, 4];
                    case 3:
                        return E.sent(), [3, 4];
                    case 4:
                        return [2, (0, u.default)((0, l.getDefaultDynamicLinkTemplate)(), {
                            utmSource: e,
                            fingerprint: i,
                            attemptId: s
                        })];
                    case 5:
                        return [2, "discord://"]
                }
            })
        })).apply(this, arguments)
    }

    function N(e) {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = I(function(e) {
            var t, n;
            return T(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, function(e) {
                            return m.apply(this, arguments)
                        }(e)];
                    case 1:
                        return t = r.sent(), null != (n = (0, u.parseDynamicLink)(t)) && d.default.track(f.AnalyticEvents.DEEP_LINK_CLICKED, {
                            fingerprint: (0, i.maybeExtractId)(n.fingerprint),
                            attempt_id: n.attemptId,
                            source: n.utmSource
                        }), _.default.launch(t, function(e) {
                            !e && (0, s.replaceWith)(E.default.fallbackRoute)
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }
}