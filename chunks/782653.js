function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkRecipientEligibility: function() {
            return E
        },
        createReferralTrial: function() {
            return p
        },
        fetchReferralEligibleUsers: function() {
            return f
        },
        fetchReferralsRemaining: function() {
            return _
        },
        resolveReferralTrialOffer: function() {
            return y
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("443458"),
        a = n("894288"),
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
            return c(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, r.HTTP.get({
                            url: u.Endpoints.GET_REFERRAL_ELIGIBLE_USERS,
                            oldFormErrors: !0
                        })];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }
    var _ = function() {
            return o.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_START"
            }), r.HTTP.get({
                url: u.Endpoints.GET_REFERRALS_REMAINING,
                oldFormErrors: !0
            }).then(function(e) {
                o.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                    referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                    sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                })
            }, function() {
                o.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                })
            })
        },
        E = function(e) {
            return o.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                recipientId: e
            }), r.HTTP.post({
                url: u.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                oldFormErrors: !0
            }).then(function(t) {
                o.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                    recipientId: e,
                    is_eligible: null != t.body && t.body.is_eligible
                })
            }, function() {
                o.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                    recipientId: e
                })
            })
        };

    function p(e) {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = l(function(e) {
            var t, n, s, l;
            return c(this, function(c) {
                switch (c.label) {
                    case 0:
                        return c.trys.push([0, 2, , 3]), [4, r.HTTP.post({
                            url: u.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return n = null !== (t = c.sent().body) && void 0 !== t ? t : null, o.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_SUCCESS",
                            userTrialOffer: n
                        }), [2, {
                            userTrialOffer: n
                        }];
                    case 2:
                        return s = c.sent(), o.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), s.body.code === u.AbortCodes.INVALID_MESSAGE_SEND_USER && null != (l = a.default.getCurrentlySelectedChannelId()) && i.default.sendClydeError(l, s.body.code), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = l(function(e) {
            var t, n, i;
            return c(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, r.HTTP.get({
                            url: u.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return n = null !== (t = i.sent().body) && void 0 !== t ? t : null, o.default.dispatch({
                            type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                            userTrialOffer: n
                        }), [2, {
                            userTrialOffer: n
                        }];
                    case 2:
                        return i.sent(), o.default.dispatch({
                            type: "BILLING_REFERRAL_RESOLVE_FAIL",
                            userTrialOfferId: e
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}