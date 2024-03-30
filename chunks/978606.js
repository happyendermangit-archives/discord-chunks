function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModal: function() {
            return u
        }
    });
    var r = n("470079"),
        a = n("784184"),
        o = n("658005"),
        l = n("463232");

    function i(e, t, n, r, a, o, l) {
        try {
            var i = e[o](l),
                u = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
    }

    function u(e, t, n, r) {
        return c.apply(this, arguments)
    }

    function c() {
        var e;
        return e = function(e, t, n, i) {
            var u, c, s, d, f, m, p, v, y, E, b, h = arguments;
            return function(e, t) {
                var n, r, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        return l.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        l.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop(), l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = (a = l.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < a[1]) {
                                            l.label = a[1], a = o;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2], l.ops.push(o);
                                            break
                                        }
                                        a[2] && l.ops.pop(), l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            }(this, function(b) {
                switch (b.label) {
                    case 0:
                        u = !(h.length > 4) || void 0 === h[4] || h[4], c = !(h.length > 5) || void 0 === h[5] || h[5], s = h.length > 6 ? h[6] : void 0, d = (0, a.getInteractingModalContext)(), b.label = 1;
                    case 1:
                        if (b.trys.push([1, 6, , 7]), !c) return [3, 3];
                        return [4, (0, o.getReportMenu)(e, t)];
                    case 2:
                        return m = b.sent(), [3, 5];
                    case 3:
                        return [4, (0, o.getUnauthenticatedReportMenu)(e, t)];
                    case 4:
                        m = b.sent(), b.label = 5;
                    case 5:
                        return f = m, p = [], v = void 0, y = function(e) {
                            p.push(e)
                        }, E = function(e) {
                            v = e, null == n || n()
                        }, (0, a.openModal)(function(t) {
                            return r.createElement(l.default, {
                                menu: f,
                                reportType: e,
                                modalProps: t,
                                onNavigate: y,
                                onSubmit: E,
                                isAuthenticated: c,
                                emailToken: s
                            })
                        }, {
                            onCloseCallback: function() {
                                (0, o.trackCloseReportModalAnalytics)(e, p, v), null == i || i(), u && (0, o.showInAppReportsFeedbackModal)(e, null != v ? v : null)
                            }
                        }, d), [3, 7];
                    case 6:
                        return b.sent(), [3, 7];
                    case 7:
                        return [2]
                }
            })
        }, (c = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, a) {
                var o = e.apply(t, n);

                function l(e) {
                    i(o, r, a, l, u, "next", e)
                }

                function u(e) {
                    i(o, r, a, l, u, "throw", e)
                }
                l(void 0)
            })
        }).apply(this, arguments)
    }
}