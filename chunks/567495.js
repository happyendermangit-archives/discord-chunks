function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("746762"),
        s = n("898511"),
        l = n("629815"),
        c = n("208454"),
        f = n("782653"),
        d = n("281767");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        if (null == e) throw TypeError("Cannot destructure " + e);
        return e
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = null,
        h = {},
        O = [],
        T = new Set,
        S = !1,
        v = new Set,
        g = new Set,
        A = {},
        b = 0,
        N = null,
        R = [],
        C = function() {
            return !0
        };

    function P(e) {
        v.add(e)
    }

    function D(e) {
        e.messages.forEach(function(e) {
            return L(e)
        })
    }

    function L(e) {
        var t, n = e.type === u.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
        if (null == n) return !1;
        if (!g.has(n) && !v.has(n)) {
            ;
            t = n, v.add(t), l.default.wait(function() {
                return (0, f.resolveReferralTrialOffer)(n).catch(d.NOOP_NULL)
            })
        }
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(c.default), this.syncWith([c.default], C)
            }
        }, {
            key: "checkAndFetchReferralsRemaining",
            value: function() {
                null == I && !S && b < 5 && (null == N || N < Date.now()) && (0, f.fetchReferralsRemaining)()
            }
        }, {
            key: "getReferralsRemaining",
            value: function() {
                return this.checkAndFetchReferralsRemaining(), I
            }
        }, {
            key: "getSentUserIds",
            value: function() {
                return this.checkAndFetchReferralsRemaining(), null == O ? [] : O
            }
        }, {
            key: "isFetchingReferralsRemaining",
            value: function() {
                return S
            }
        }, {
            key: "isFetchingRecipientEligibility",
            value: function(e) {
                return T.has(e)
            }
        }, {
            key: "getRecipientEligibility",
            value: function(e) {
                return void 0 === h[e] && !T.has(e) && (0, f.checkRecipientEligibility)(e), h[e]
            }
        }, {
            key: "getRelevantUserTrialOffer",
            value: function(e) {
                return A[e]
            }
        }, {
            key: "isResolving",
            value: function(e) {
                return v.has(e)
            }
        }, {
            key: "getEligibleUsers",
            value: function() {
                return R
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(s.default.Store);
    i = "ReferralTrialStore", (o = "displayName") in(r = M) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new M(l.default, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
            var t, n = e.userTrialOfferId,
                r = e.recipientId;
            if (!S && (0, f.fetchReferralsRemaining)(), !T.has(r) && (0, f.checkRecipientEligibility)(r), !v.has(n)) {
                ;
                t = n, v.add(t), l.default.wait(function() {
                    return (0, f.resolveReferralTrialOffer)(n).catch(d.NOOP_NULL)
                })
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
            m(e), S = !0
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
            var t = e.referrals_remaining,
                n = e.sent_user_ids;
            S = !1, I = t, O = n
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
            m(e), S = !1, b += 1, N = Date.now() + 1e3 * Math.pow(2, b)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
            var t = e.recipientId;
            T.add(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
            var t = e.recipientId,
                n = e.is_eligible;
            h[t] = n, T.delete(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
            var t = e.recipientId;
            h[t] = !1, T.delete(t)
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
            var t, n = e.userTrialOffer;
            (0, f.fetchReferralsRemaining)(), A[n.id] = n, O = ((function(e) {
                if (Array.isArray(e)) return _(e)
            })(t = O) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([n.user_id])
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
            var t = e.userTrialOffer;
            null != t && (v.delete(t.id), g.add(t.id), A[t.id] = t)
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
            var t = e.userTrialOfferId;
            v.delete(t), g.add(t)
        },
        LOAD_MESSAGES_SUCCESS: D,
        MESSAGE_CREATE: function(e) {
            L(e.message)
        },
        LOAD_MESSAGES_AROUND_SUCCESS: D,
        LOGOUT: function() {
            I = null, h = {}, O = [], T = new Set, S = !1, v = new Set, g = new Set, A = {}, b = 0, N = null, R = []
        }
    })
}