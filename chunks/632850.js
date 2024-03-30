function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createTestModeLibraryApplications: function() {
            return _
        },
        fetchLibrary: function() {
            return f
        },
        setActiveLaunchOptionId: function() {
            return p
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("197197"),
        a = n("329903"),
        u = n("281767");

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
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function c(e, t) {
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

    function f() {
        return d.apply(this, arguments)
    }

    function d() {
        return (d = l(function() {
            var e, t;
            return c(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, (0, a.httpGetWithCountryCodeQuery)({
                            url: u.Endpoints.LIBRARY,
                            oldFormErrors: !0
                        }, !1)];
                    case 1:
                        return e = n.sent(), o.default.dispatch({
                            type: "LIBRARY_FETCH_SUCCESS",
                            libraryApplications: e.body
                        }), [3, 3];
                    case 2:
                        return t = n.sent(), o.default.dispatch({
                            type: "LIBRARY_FETCH_FAIL",
                            error: t
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function _(e) {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = l(function(e) {
            var t, n;
            return c(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (null == (t = e.primarySkuId)) return [2];
                        return [4, r.HTTP.get({
                            url: u.Endpoints.APPLICATION_BRANCH_LIST(e.id),
                            oldFormErrors: !0
                        }).then(function(e) {
                            return e.body
                        })];
                    case 1:
                        return n = a.sent().map(function(n) {
                            return i.default.createForTestMode({
                                id: e.id,
                                skuId: t,
                                branch: n
                            })
                        }), o.default.dispatch({
                            type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
                            libraryApplications: n
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function p(e, t, n) {
        o.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
            applicationId: e,
            branchId: t,
            launchOptionId: n
        })
    }
}