function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        flushAnalyticsFeedItems: function() {
            return s
        },
        markAnalyticsFeedItemSeen: function() {
            return r
        },
        markAnalyticsFeedItemUnseen: function() {
            return a
        }
    });
    var i = n("570140");

    function r(e, t, n) {
        i.default.dispatch({
            type: "ANALYTICS_FEED_ITEM_SEEN",
            id: e,
            feedItemId: t,
            timestampMillis: n
        })
    }

    function a(e, t, n) {
        i.default.dispatch({
            type: "ANALYTICS_FEED_ITEM_UNSEEN",
            id: e,
            feedItemId: t,
            timestampMillis: n
        })
    }

    function s(e, t) {
        i.default.dispatch({
            type: "ANALYTICS_FEED_FLUSH",
            id: e,
            force: t
        })
    }
}