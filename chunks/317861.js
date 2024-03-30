function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyPublicBuildOverride: function() {
            return p
        },
        applyStaffBuildOverride: function() {
            return _
        },
        clearBuildOverride: function() {
            return y
        },
        getPublicBuildOverrideLink: function() {
            return h
        }
    });
    var r, o, i = n("967888"),
        a = n("217014"),
        u = n("618396"),
        s = n("884876");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function f(e, t) {
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
    var d = "/__development/build_overrides";

    function _(e) {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = c(function(e) {
            var t, n;
            return f(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 3, , 4]), [4, i.HTTP.put({
                            url: (0, s.getAPIEndpoint)(d),
                            body: {
                                overrides: e,
                                version: s.APP_VERSION
                            },
                            headers: {
                                Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : ""
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [4, o(n = r.sent())];
                    case 2:
                        return r.sent(), [2, n];
                    case 3:
                        return [2, r.sent()];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function p(e) {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = c(function(e) {
            var t;
            return f(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 3, , 4]), [4, i.HTTP.put({
                            url: (0, s.getAPIEndpoint)("/__development/link"),
                            body: {
                                payload: e,
                                token: a.default.getToken(),
                                version: s.APP_VERSION
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [4, o(t = n.sent())];
                    case 2:
                        return n.sent(), [2, t];
                    case 3:
                        return [2, n.sent()];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function y() {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = c(function() {
            var e;
            return f(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.HTTP.del({
                            url: (0, s.getAPIEndpoint)(d),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [4, o(e = t.sent())];
                    case 2:
                        return t.sent(), [2, e]
                }
            })
        })).apply(this, arguments)
    }

    function h(e) {
        var t;
        return i.HTTP.post({
            url: (0, s.getAPIEndpoint)("/__development/create_build_override_link"),
            body: e,
            headers: {
                Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : ""
            },
            oldFormErrors: !0
        }).then(function(e) {
            return {
                url: e.body.url,
                error: !1
            }
        }, function(e) {
            return 400 === e.status ? {
                url: !1,
                error: e.body
            } : {
                url: !1,
                error: "Error making API request (".concat(e.status, ")")
            }
        })
    }
    r = c(function(e) {
        var t;
        return f(this, function(e) {
            switch (e.label) {
                case 0:
                    return e.trys.push([0, 2, , 3]), [4, u.default.flushCookies()];
                case 1:
                case 2:
                    return e.sent(), [3, 3];
                case 3:
                    return [2]
            }
        })
    }), o = function(e) {
        return r.apply(this, arguments)
    }
}