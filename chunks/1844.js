function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        a = n("570140"),
        s = n("581883");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l() {
        return {
            hasFetchedConsumedInboundPromotionId: !1,
            consumedInboundPromotionId: null,
            lastSeenOutboundPromotionStartDate: null,
            bogoPromotion: null
        }
    }
    let u = l(),
        d = !1,
        _ = null,
        c = !1,
        E = null,
        I = [],
        T = null;

    function f() {
        let e = null;
        for (let t of I)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
        return e
    }

    function S() {
        var e, t, n;
        T = null !== (n = null === (t = s.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
    }
    class h extends(i = r.default.PersistedStore) {
        initialize(e) {
            null != e && (u = e), this.waitFor(s.default), this.syncWith([s.default], S)
        }
        get outboundPromotions() {
            return I
        }
        get lastSeenOutboundPromotionStartDate() {
            return u.lastSeenOutboundPromotionStartDate
        }
        get lastDismissedOutboundPromotionStartDate() {
            return T
        }
        get lastFetchedActivePromotions() {
            return E
        }
        get isFetchingActiveOutboundPromotions() {
            return c
        }
        get hasFetchedConsumedInboundPromotionId() {
            return u.hasFetchedConsumedInboundPromotionId
        }
        get consumedInboundPromotionId() {
            return u.consumedInboundPromotionId
        }
        get bogoPromotion() {
            return u.bogoPromotion
        }
        get isFetchingActiveBogoPromotion() {
            return d
        }
        get lastFetchedActiveBogoPromotion() {
            return _
        }
        getState() {
            return u
        }
    }
    o(h, "displayName", "PromotionsStore"), o(h, "persistKey", "PromotionsPersistedStore"), t.default = new h(a.default, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
            let {
                activeOutboundPromotions: t,
                consumedInboundPromotionId: n
            } = e;
            I = t, E = Date.now(), c = !1, !u.hasFetchedConsumedInboundPromotionId && (u.hasFetchedConsumedInboundPromotionId = !0, u.consumedInboundPromotionId = n)
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
            c = !0
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
            I = [], c = !1
        },
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
            let {
                activePromotion: t
            } = e;
            u.bogoPromotion = t, _ = Date.now(), d = !1
        },
        ACTIVE_BOGO_PROMOTION_FETCH: function() {
            d = !0
        },
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
            u.bogoPromotion = null, d = !1
        },
        OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
            if (0 === I.length) return !1;
            let e = f();
            null != e && (T = e)
        },
        OUTBOUND_PROMOTIONS_SEEN: function() {
            if (0 === I.length) return !1;
            let e = f();
            null != e && (T = e, u.lastSeenOutboundPromotionStartDate = e)
        },
        LOGOUT: function() {
            u = l(), c = !1, E = null, d = !1, _ = null, I = []
        }
    })
}