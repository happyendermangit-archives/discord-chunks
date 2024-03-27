function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = {};
    class d extends(i = o.default.Store) {
        isItemSeen(e, t) {
            let n = u[e];
            return null != n && n.has(t)
        }
    }
    a = "GuildFeedSeenStore", (s = "displayName") in(r = d) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new d(l.default, {
        GUILD_FEED_ITEM_READ_ACK: function(e) {
            let {
                guildId: t,
                itemId: n
            } = e;
            null == u[t] && (u[t] = new Set), u[t].add(n)
        }
    })
}