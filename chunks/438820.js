function(e, t, n) {
    "use strict";
    n.r(t);
    var i, a = n("442837"),
        o = n("570140");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = {
        canPlayWowMoment: !1,
        isFetchingWowMomentMedia: !1,
        wowMomentWumpusMediaUrl: null
    };
    class r extends(i = a.default.PersistedStore) {
        initialize(e) {
            null != e && (u = e), u.canPlayWowMoment = !1, u.isFetchingWowMomentMedia = !1, u.wowMomentWumpusMediaUrl = null
        }
        getState() {
            return u
        }
        get canPlayWowMoment() {
            return u.canPlayWowMoment
        }
        get isFetchingWowMomentMedia() {
            return u.isFetchingWowMomentMedia
        }
        get wowMomentWumpusMedia() {
            return u.wowMomentWumpusMediaUrl
        }
    }
    s(r, "displayName", "PurchasedItemsFestivityStore"), s(r, "persistKey", "PurchasedItemsFestivityStore"), s(r, "migrations", [e => ({
        ...e
    })]), t.default = new r(o.default, {
        LOGOUT: function() {
            u = {
                canPlayWowMoment: !1,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null
            }
        },
        PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function(e) {
            let {
                value: t
            } = e;
            u.canPlayWowMoment = t
        },
        PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
            let {
                value: t
            } = e;
            u.isFetchingWowMomentMedia = t
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
            let {
                wumpusMedia: t
            } = e;
            u.wowMomentWumpusMediaUrl = t, u.isFetchingWowMomentMedia = !1
        }
    })
}