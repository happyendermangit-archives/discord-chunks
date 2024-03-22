function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var r = n("446674"),
        i = n("913144"),
        a = n("374363");

    function l() {
        return {
            hasFetchedConsumedInboundPromotionId: !1,
            consumedInboundPromotionId: null,
            lastSeenOutboundPromotionStartDate: null,
            bogoPromotion: null
        }
    }
    let s = l(),
        o = !1,
        u = null,
        c = !1,
        d = null,
        f = [],
        m = null;

    function _() {
        let e = null;
        for (let t of f)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
        return e
    }

    function E() {
        var e, t, n;
        m = null !== (n = null === (t = a.default.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
    }
    class I extends r.default.PersistedStore {
        initialize(e) {
            null != e && (s = e), this.waitFor(a.default), this.syncWith([a.default], E)
        }
        get outboundPromotions() {
            return f
        }
        get lastSeenOutboundPromotionStartDate() {
            return s.lastSeenOutboundPromotionStartDate
        }
        get lastDismissedOutboundPromotionStartDate() {
            return m
        }
        get lastFetchedActivePromotions() {
            return d
        }
        get isFetchingActiveOutboundPromotions() {
            return c
        }
        get hasFetchedConsumedInboundPromotionId() {
            return s.hasFetchedConsumedInboundPromotionId
        }
        get consumedInboundPromotionId() {
            return s.consumedInboundPromotionId
        }
        get bogoPromotion() {
            return s.bogoPromotion
        }
        get isFetchingActiveBogoPromotion() {
            return o
        }
        get lastFetchedActiveBogoPromotion() {
            return u
        }
        getState() {
            return s
        }
    }
    I.displayName = "PromotionsStore", I.persistKey = "PromotionsPersistedStore";
    var T = new I(i.default, {
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
            let {
                activeOutboundPromotions: t,
                consumedInboundPromotionId: n
            } = e;
            f = t, d = Date.now(), c = !1, !s.hasFetchedConsumedInboundPromotionId && (s.hasFetchedConsumedInboundPromotionId = !0, s.consumedInboundPromotionId = n)
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
            c = !0
        },
        ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
            f = [], c = !1
        },
        ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
            let {
                activePromotion: t
            } = e;
            s.bogoPromotion = t, u = Date.now(), o = !1
        },
        ACTIVE_BOGO_PROMOTION_FETCH: function() {
            o = !0
        },
        ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
            s.bogoPromotion = null, o = !1
        },
        OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
            if (0 === f.length) return !1;
            let e = _();
            null != e && (m = e)
        },
        OUTBOUND_PROMOTIONS_SEEN: function() {
            if (0 === f.length) return !1;
            let e = _();
            null != e && (m = e, s.lastSeenOutboundPromotionStartDate = e)
        },
        LOGOUT: function() {
            s = l(), c = !1, d = null, o = !1, u = null, f = []
        }
    })
}