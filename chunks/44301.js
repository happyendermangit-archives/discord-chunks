function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBranches: function() {
            return E
        },
        fetchBranchesForApplication: function() {
            return m
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("967888"),
        a = n("629815"),
        u = n("355185"),
        s = n("620205"),
        l = n("671566"),
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
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    f(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    f(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function _(e, t) {
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

    function E() {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = d(function() {
            var e, t, n, r, f, E = arguments;
            return _(this, function(f) {
                switch (f.label) {
                    case 0:
                        if (e = E.length > 0 && void 0 !== E[0] ? E[0] : s.default.entitledBranchIds, !(0, l.isSupportedPlatform)() || 0 === e.length) return [2, []];
                        t = o().chunk(e, 50), f.label = 1;
                    case 1:
                        var p;
                        return f.trys.push([1, 3, , 4]), [4, Promise.all(t.map((p = d(function(e) {
                            return _(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, i.HTTP.post({
                                            url: c.Endpoints.APPLICATION_BRANCHES,
                                            body: {
                                                branch_ids: e
                                            },
                                            oldFormErrors: !0
                                        })];
                                    case 1:
                                        return [2, t.sent().body.map(u.default.createFromServer)]
                                }
                            })
                        }), function(e) {
                            return p.apply(this, arguments)
                        })))];
                    case 2:
                        return n = f.sent(), r = o().flatten(n), a.default.dispatch({
                            type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
                            branches: r
                        }), [2, r];
                    case 3:
                        return f.sent(), a.default.dispatch({
                            type: "APPLICATION_BRANCHES_FETCH_FAIL",
                            branchIds: e
                        }), [2, []];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function m(e) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = d(function(e) {
            var t, n, r;
            return _(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, i.HTTP.get({
                            url: c.Endpoints.OWNED_APPLICATION_BRANCHES(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return n = Array.isArray((t = r.sent()).body) ? t.body.map(u.default.createFromServer) : [], a.default.dispatch({
                            type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
                            applicationId: e,
                            branches: n
                        }), [2, n];
                    case 2:
                        return r.sent(), a.default.dispatch({
                            type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
                            applicationId: e
                        }), [2, []];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}