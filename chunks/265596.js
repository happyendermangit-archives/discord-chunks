function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var a = n("446674"),
        r = n("913144");
    let s = new Map;
    class i extends a.default.Store {
        getFeed(e) {
            return s.get(e)
        }
        getFeedRequestId(e) {
            var t;
            return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
        }
    }
    i.displayName = "ContentInventoryStore";
    var l = new i(r.default, {
        CONNECTION_OPEN: function() {
            s.clear()
        },
        CONTENT_INVENTORY_SET_FEED: function(e) {
            let {
                feedId: t,
                feed: n
            } = e;
            s.set(t, n)
        }
    })
}