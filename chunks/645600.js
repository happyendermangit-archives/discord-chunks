function(e, t, d) {
    "use strict";
    d.r(t), d.d(t, {
        default: function() {
            return u
        }
    }), d("222007");
    var n = d("446674"),
        i = d("913144");
    let a = {};
    class l extends n.default.Store {
        isItemSeen(e, t) {
            let d = a[e];
            return null != d && d.has(t)
        }
    }
    l.displayName = "GuildFeedSeenStore";
    var u = new l(i.default, {
        GUILD_FEED_ITEM_READ_ACK: function(e) {
            let {
                guildId: t,
                itemId: d
            } = e;
            null == a[t] && (a[t] = new Set);
            let n = a[t];
            n.add(d)
        }
    })
}