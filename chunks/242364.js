function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        flushAnalyticsFeedItems: function() {
            return a
        },
        markAnalyticsFeedItemSeen: function() {
            return o
        },
        markAnalyticsFeedItemUnseen: function() {
            return i
        }
    });
    var r = n("629815");

    function o(e, t, n) {
        r.default.dispatch({
            type: "ANALYTICS_FEED_ITEM_SEEN",
            id: e,
            feedItemId: t,
            timestampMillis: n
        })
    }

    function i(e, t, n) {
        r.default.dispatch({
            type: "ANALYTICS_FEED_ITEM_UNSEEN",
            id: e,
            feedItemId: t,
            timestampMillis: n
        })
    }

    function a(e, t) {
        r.default.dispatch({
            type: "ANALYTICS_FEED_FLUSH",
            id: e,
            force: t
        })
    }
}