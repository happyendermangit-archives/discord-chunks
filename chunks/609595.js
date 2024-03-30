function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchLiveBuild: function() {
            return y
        }
    });
    var r = n("967888"),
        o = n("849680"),
        i = n("945816"),
        a = n("629815"),
        u = n("225098"),
        s = n("620205"),
        l = n("783522"),
        c = n("388990"),
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
    var _ = 10 * c.default.Millis.MINUTE,
        E = 10 * c.default.Millis.MINUTE,
        p = 1 * c.default.Millis.MINUTE,
        m = {};

    function y(e, t) {
        return I.apply(this, arguments)
    }

    function I() {
        var e;
        return e = function(e, t) {
            var n, c, d = arguments;
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
            }(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (n = d.length > 2 && void 0 !== d[2] && d[2], c = u.default.locale, a.default.dispatch({
                                type: "APPLICATION_BUILD_FETCH_START",
                                applicationId: e,
                                branchId: t,
                                locale: c
                            }), !n) return [3, 2];
                        return [4, (0, o.sleep)(Math.random() * p)];
                    case 1:
                        I.sent(), I.label = 2;
                    case 2:
                        return [2, r.HTTP.get({
                            url: f.Endpoints.APPLICATION_LIVE_BUILD(e, t),
                            query: {
                                platform: (0, l.getBuildPlatform)(),
                                locale: c
                            },
                            oldFormErrors: !0
                        }).then(function(n) {
                            var r = n.body;
                            if (0 === r.manifests.length) {
                                a.default.dispatch({
                                    type: "APPLICATION_BUILD_NOT_FOUND",
                                    applicationId: e,
                                    branchId: t
                                });
                                return
                            }
                            a.default.dispatch({
                                type: "APPLICATION_BUILD_FETCH_SUCCESS",
                                applicationId: e,
                                branchId: t,
                                locale: c,
                                build: r
                            })
                        }, function(n) {
                            if (404 === n.status) a.default.dispatch({
                                type: "APPLICATION_BUILD_NOT_FOUND",
                                applicationId: e,
                                branchId: t
                            });
                            else {
                                var r, o;
                                r = e, null == m[o = t] && (m[o] = new i.Timeout), m[o].start(_ + Math.random() * E, function() {
                                    null != s.default.getLibraryApplication(r, o) && y(r, o)
                                })
                            }
                        })]
                }
            })
        }, (I = function() {
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
        }).apply(this, arguments)
    }
}