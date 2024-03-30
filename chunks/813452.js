function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("967888"),
        i = n("629815"),
        a = n("625864"),
        u = n("342942"),
        l = n("856469"),
        s = n("576827"),
        c = n("758989"),
        f = n("281767"),
        d = n("868615");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                l = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(l) : Promise.resolve(l).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
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
    r = n("255821").default;

    function m() {
        return (m = E(function(e) {
            var t, n, r, o, l, p, E = arguments;
            return _(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = E.length > 1 && void 0 !== E[1] && E[1], n = E.length > 2 && void 0 !== E[2] && E[2], i.default.dispatch({
                            type: "GIFT_CODE_RESOLVE",
                            code: e
                        }), o.label = 1;
                    case 1:
                        return o.trys.push([1, 11, , 12]), [4, (0, c.resolveGiftCode)(e, t, n)];
                    case 2:
                        if (!(null != (r = o.sent()).application_id && r.application_id !== d.PREMIUM_SUBSCRIPTION_APPLICATION) || null != u.default.getApplication(r.application_id)) return [3, 6];
                        o.label = 3;
                    case 3:
                        return o.trys.push([3, 5, , 6]), [4, a.default.fetchApplication(r.application_id)];
                    case 4:
                    case 5:
                        return o.sent(), [3, 6];
                    case 6:
                        if (r.application_id !== f.COLLECTIBLES_APPLICATION_ID) return [3, 10];
                        o.label = 7;
                    case 7:
                        return o.trys.push([7, 9, , 10]), [4, (0, s.fetchCollectiblesProduct)(r.sku_id)];
                    case 8:
                    case 9:
                        return o.sent(), [3, 10];
                    case 10:
                        return i.default.dispatch({
                            type: "GIFT_CODE_RESOLVE_SUCCESS",
                            giftCode: r
                        }), [2, {
                            giftCode: r
                        }];
                    case 11:
                        throw p = o.sent(), i.default.dispatch({
                            type: "GIFT_CODE_RESOLVE_FAILURE",
                            code: e,
                            error: p
                        }), p;
                    case 12:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }({
        resolveGiftCode: function(e) {
            return m.apply(this, arguments)
        },
        fetchUserGiftCodesForSKU: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return E(function() {
                var n, r;
                return _(this, function(r) {
                    switch (r.label) {
                        case 0:
                            i.default.dispatch({
                                type: "GIFT_CODES_FETCH",
                                skuId: e,
                                subscriptionPlanId: t
                            }), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, o.HTTP.get({
                                url: f.Endpoints.USER_GIFT_CODES,
                                query: {
                                    sku_id: e,
                                    subscription_plan_id: t
                                },
                                oldFormErrors: !0
                            })];
                        case 2:
                            return n = r.sent(), i.default.dispatch({
                                type: "GIFT_CODES_FETCH_SUCCESS",
                                giftCodes: n.body,
                                skuId: e,
                                subscriptionPlanId: t
                            }), [3, 4];
                        case 3:
                            return r.sent(), i.default.dispatch({
                                type: "GIFT_CODES_FETCH_FAILURE",
                                skuId: e,
                                subscriptionPlanId: t
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        createGiftCode: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return E(function() {
                var r, a;
                return _(this, function(a) {
                    switch (a.label) {
                        case 0:
                            i.default.dispatch({
                                type: "GIFT_CODE_CREATE_START",
                                skuId: e,
                                subscriptionPlanId: t
                            }), a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, o.HTTP.post({
                                url: f.Endpoints.USER_GIFT_CODE_CREATE,
                                body: {
                                    sku_id: e,
                                    subscription_plan_id: t,
                                    gift_style: n
                                },
                                oldFormErrors: !0
                            })];
                        case 2:
                            return r = a.sent(), i.default.dispatch({
                                type: "GIFT_CODE_CREATE_SUCCESS",
                                giftCode: r.body
                            }), [2, r.body];
                        case 3:
                            return a.sent(), i.default.dispatch({
                                type: "GIFT_CODE_CREATE_FAILURE",
                                skuId: e,
                                subscriptionPlanId: t
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        revokeGiftCode: function(e) {
            return E(function() {
                var t;
                return _(this, function(t) {
                    switch (t.label) {
                        case 0:
                            i.default.dispatch({
                                type: "GIFT_CODE_REVOKE",
                                code: e
                            }), t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, o.HTTP.del({
                                url: f.Endpoints.USER_GIFT_CODE_REVOKE(e),
                                oldFormErrors: !0
                            })];
                        case 2:
                            return t.sent(), i.default.dispatch({
                                type: "GIFT_CODE_REVOKE_SUCCESS",
                                code: e
                            }), [3, 4];
                        case 3:
                            return t.sent(), i.default.dispatch({
                                type: "GIFT_CODE_REVOKE_FAILURE",
                                code: e
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        openNativeGiftCodeModal: function(e) {
            l.default.openNativeAppModal(e, f.RPCCommands.GIFT_CODE_BROWSER)
        }
    }, r)
}