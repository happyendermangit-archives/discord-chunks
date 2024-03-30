function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGiftableEntitlements: function() {
            return _
        },
        fetchUserEntitlements: function() {
            return f
        },
        fetchUserEntitlementsForApplication: function() {
            return c
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("329903"),
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
        return function() {
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
        }
    }

    function l(e, t) {
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

    function c(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return o.default.wait(function() {
            o.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_START",
                applicationId: e
            })
        }), r.HTTP.get({
            url: a.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
            oldFormErrors: !0,
            query: {
                exclude_consumed: t
            }
        }).then(function(t) {
            return o.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                applicationId: e,
                entitlements: t.body
            }), t.body
        }).catch(function() {
            o.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: e
            })
        })
    }

    function f(e) {
        return d.apply(this, arguments)
    }

    function d() {
        return (d = s(function(e) {
            var t, n, i, u, s, c, f;
            return l(this, function(l) {
                switch (l.label) {
                    case 0:
                        n = void 0 !== (t = e.withSku) && t, u = void 0 !== (i = e.withApplication) && i, s = e.entitlementType, o.default.dispatch({
                            type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                        }), l.label = 1;
                    case 1:
                        return l.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: a.Endpoints.ENTITLEMENTS_FOR_USER,
                            query: {
                                with_sku: n,
                                with_application: u,
                                entitlement_type: s
                            }
                        })];
                    case 2:
                        return c = l.sent(), o.default.dispatch({
                            type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                            entitlements: c.body
                        }), [3, 4];
                    case 3:
                        return l.sent(), o.default.dispatch({
                            type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function _() {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = s(function() {
            var e, t;
            return l(this, function(t) {
                switch (t.label) {
                    case 0:
                        o.default.dispatch({
                            type: "ENTITLEMENTS_GIFTABLE_FETCH"
                        }), t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]), [4, (0, i.httpGetWithCountryCodeQuery)({
                            url: a.Endpoints.ENTITLEMENTS_GIFTABLE
                        })];
                    case 2:
                        return e = t.sent(), o.default.dispatch({
                            type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                            entitlements: e.body
                        }), [3, 4];
                    case 3:
                        return t.sent(), o.default.dispatch({
                            type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}