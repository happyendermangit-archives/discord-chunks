function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("446674"),
        a = n("913144");
    let o = {
        canPlayWowMoment: !1,
        isFetchingWowMomentMedia: !1,
        wowMomentWumpusMediaUrl: null
    };
    class s extends i.default.PersistedStore {
        initialize(e) {
            null != e && (o = e), o.canPlayWowMoment = !1, o.isFetchingWowMomentMedia = !1, o.wowMomentWumpusMediaUrl = null
        }
        getState() {
            return o
        }
        get canPlayWowMoment() {
            return o.canPlayWowMoment
        }
        get isFetchingWowMomentMedia() {
            return o.isFetchingWowMomentMedia
        }
        get wowMomentWumpusMedia() {
            return o.wowMomentWumpusMediaUrl
        }
    }
    s.displayName = "PurchasedItemsFestivityStore", s.persistKey = "PurchasedItemsFestivityStore", s.migrations = [e => ({
        ...e
    })];
    var r = new s(a.default, {
        LOGOUT: function() {
            o = {
                canPlayWowMoment: !1,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null
            }
        },
        PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function(e) {
            let {
                value: t
            } = e;
            o.canPlayWowMoment = t
        },
        PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
            let {
                value: t
            } = e;
            o.isFetchingWowMomentMedia = t
        },
        PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
            let {
                wumpusMedia: t
            } = e;
            o.wowMomentWumpusMediaUrl = t, o.isFetchingWowMomentMedia = !1
        }
    })
}