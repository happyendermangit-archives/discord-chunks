function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        redeemGiftCode: function() {
            return c
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("146591"),
        a = n("146703"),
        u = n("281767");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                l = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(l) : Promise.resolve(l).then(r, o)
    }
    var s = Object.freeze({});

    function c(e) {
        return f.apply(this, arguments)
    }

    function f() {
        var e;
        return e = function(e) {
            var t, n, l, c, f, d, p, E, _, m, y, v, b, h, S;
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
            }(this, function(g) {
                switch (g.label) {
                    case 0:
                        t = e.code, l = void 0 === (n = e.options) ? s : n, c = e.onRedeemed, f = e.onError, p = void 0 === (d = l.channelId) ? null : d, _ = void 0 === (E = l.paymentSource) ? null : E, o.default.dispatch({
                            type: "GIFT_CODE_REDEEM",
                            code: t
                        }), g.label = 1;
                    case 1:
                        return g.trys.push([1, 4, , 5]), y = r.HTTP.post, v = {
                            url: u.Endpoints.GIFT_CODE_REDEEM(t)
                        }, b = {
                            channel_id: p,
                            payment_source_id: null == _ ? void 0 : _.id
                        }, [4, (0, a.createGatewayCheckoutContext)(_)];
                    case 2:
                        return [4, y.apply(r.HTTP, [(v.body = (b.gateway_checkout_context = g.sent(), b), v.oldFormErrors = !0, v)])];
                    case 3:
                        return m = g.sent(), o.default.dispatch({
                            type: "GIFT_CODE_REDEEM_SUCCESS",
                            code: t,
                            entitlement: m.body
                        }), null == c || c(), [2, {
                            code: t,
                            entitlement: m
                        }];
                    case 4:
                        throw h = g.sent(), S = new i.BillingError(h), o.default.dispatch({
                            type: "GIFT_CODE_REDEEM_FAILURE",
                            code: t,
                            error: S
                        }), null == f || f(S), S;
                    case 5:
                        return [2]
                }
            })
        }, (f = function() {
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
        }).apply(this, arguments)
    }
    t.default = {
        redeemGiftCode: c
    }
}