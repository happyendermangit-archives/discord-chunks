function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var a = n("446674"),
        r = n("913144");
    let s = new Map,
        l = !1;
    class i extends a.default.Store {
        getFeed(e) {
            return s.get(e)
        }
        getFeedRequestId(e) {
            var t;
            return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
        }
        get hidden() {
            return l
        }
    }
    i.displayName = "ContentInventoryStore";
    var u = new i(r.default, {
        CONNECTION_OPEN: function() {
            s.clear(), l = !1
        },
        CONTENT_INVENTORY_SET_FEED: function(e) {
            let {
                feedId: t,
                feed: n
            } = e;
            s.set(t, n)
        },
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
            l = !l
        }
    })
}