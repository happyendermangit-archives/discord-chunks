function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchActiveBogoPromotion: function() {
            return h
        },
        fetchActiveOutboundPromotions: function() {
            return y
        }
    });
    var r = n("967888"),
        o = n("700449"),
        i = n("629815"),
        a = n("772309"),
        u = n("225098"),
        s = n("968574"),
        l = n("275053"),
        c = n("106923"),
        f = n("489248"),
        d = n("868615"),
        _ = n("281767");

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function m(e, t) {
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

    function y() {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = p(function() {
            var e, t, n, o, s, E;
            return m(this, function(E) {
                switch (E.label) {
                    case 0:
                        if (f.default.isFetchingActiveOutboundPromotions) return [2];
                        E.label = 1;
                    case 1:
                        return E.trys.push([1, 5, , 6]), i.default.dispatch({
                            type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH"
                        }), e = l.PromotionPreviewExperiment.getCurrentConfig({
                            location: "5731cc_1"
                        }, {
                            autoTrackExposure: !1
                        }).previewEnabled ? _.Endpoints.OUTBOUND_PROMOTIONS_PREVIEW : _.Endpoints.OUTBOUND_PROMOTIONS, [4, r.HTTP.get({
                            url: e,
                            query: {
                                locale: u.default.locale
                            },
                            oldFormErrors: !0
                        })];
                    case 2:
                        if (t = E.sent().body, n = f.default.consumedInboundPromotionId, f.default.hasFetchedConsumedInboundPromotionId) return [3, 4];
                        return [4, (0, a.fetchUserEntitlementsForApplication)(d.PREMIUM_SUBSCRIPTION_APPLICATION, !1)];
                    case 3:
                        n = null !== (s = null == (o = E.sent().find(function(e) {
                            return null != e.promotion_id && !0 === e.consumed
                        })) ? void 0 : o.promotion_id) && void 0 !== s ? s : null, E.label = 4;
                    case 4:
                        return i.default.dispatch({
                            type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS",
                            activeOutboundPromotions: t.map(function(e) {
                                return (0, c.outboundPromotionFromServer)(e)
                            }),
                            consumedInboundPromotionId: n
                        }), [3, 6];
                    case 5:
                        return E.sent(), i.default.dispatch({
                            type: "ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL"
                        }), [3, 6];
                    case 6:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function h() {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = p(function() {
            var e, t;
            return m(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (f.default.isFetchingActiveBogoPromotion) return [2];
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]), i.default.dispatch({
                            type: "ACTIVE_BOGO_PROMOTION_FETCH"
                        }), [4, r.HTTP.get({
                            url: _.Endpoints.BOGO_PROMOTIONS,
                            query: {
                                locale: u.default.locale
                            }
                        })];
                    case 2:
                        return e = t.sent().body, i.default.dispatch({
                            type: "ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS",
                            activePromotion: (0, c.bogoPromotionFromServer)(e)
                        }), [3, 4];
                    case 3:
                        return t.sent(), i.default.dispatch({
                            type: "ACTIVE_BOGO_PROMOTION_FETCH_FAIL"
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = {
        fetchActiveOutboundPromotions: y,
        dismissOutboundPromotionNotice: function() {
            i.default.dispatch({
                type: "OUTBOUND_PROMOTION_NOTICE_DISMISS"
            });
            var e = f.default.lastDismissedOutboundPromotionStartDate;
            null != e && s.PreloadedUserSettingsActionCreators.updateAsync("userContent", function(t) {
                t.lastDismissedOutboundPromotionStartDate = o.StringValue.create({
                    value: e
                })
            }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
        },
        markOutboundPromotionsSeen: function() {
            i.default.dispatch({
                type: "OUTBOUND_PROMOTIONS_SEEN"
            })
        },
        fetchActiveBogoPromotion: h
    }
}