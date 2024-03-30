function(e, t, n) {
    "use strict";

    function r(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function o(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(o, i) {
                var a = e.apply(t, n);

                function u(e) {
                    r(a, o, i, u, s, "next", e)
                }

                function s(e) {
                    r(a, o, i, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function i(e, t) {
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

    function a(e) {
        var t = e.getFocusableElements,
            n = e.getActiveElement,
            r = e.scrollToStart,
            a = e.scrollToEnd;

        function u() {
            return (u = o(function(e) {
                var o, a;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            var u, s;
                            if (null == (o = (null == e ? void 0 : e.from) || n())) return [2, null];
                            if (u = o, !(null == (a = null !== (s = t().find(function(e) {
                                    return !!(u.compareDocumentPosition(e) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY))
                                })) && void 0 !== s ? s : null) && (null == e ? void 0 : e.wrap))) return [3, 2];
                            return [4, null == r ? void 0 : r()];
                        case 1:
                            return i.sent(), [2, l()];
                        case 2:
                            return [2, a]
                    }
                })
            })).apply(this, arguments)
        }

        function s() {
            return (s = o(function(e) {
                var r, o;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (null == (r = (null == e ? void 0 : e.from) || n())) return [2, null];
                            if (!(null == (o = function(e) {
                                    for (var n = t(), r = n.length - 1; r >= 0; r--) {
                                        var o = n[r];
                                        if (e.compareDocumentPosition(o) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return o
                                    }
                                    return null
                                }(r)) && (null == e ? void 0 : e.wrap))) return [3, 2];
                            return [4, null == a ? void 0 : a()];
                        case 1:
                            return i.sent(), [2, c()];
                        case 2:
                            return [2, o]
                    }
                })
            })).apply(this, arguments)
        }

        function l() {
            var e;
            return null !== (e = t()[0]) && void 0 !== e ? e : null
        }

        function c() {
            var e, n = t();
            return null !== (e = n[n.length - 1]) && void 0 !== e ? e : null
        }
        return {
            getNextFocusableElement: function(e) {
                return u.apply(this, arguments)
            },
            getPreviousFocusableElement: function(e) {
                return s.apply(this, arguments)
            },
            getFirstFocusableElement: l,
            getLastFocusableElement: c
        }
    }
    n.r(t), n.d(t, {
        createFocusManager: function() {
            return a
        }
    })
}