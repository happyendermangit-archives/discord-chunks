function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeFetchTopEmojisByGuild: function() {
            return o
        }
    });
    var i = n("594174"),
        r = n("339085"),
        s = n("396352"),
        a = n("664437");

    function o(e) {
        if (null == e || null == i.default.getCurrentUser()) return;
        let t = r.default.getTopEmojisMetadata(e);
        if (null != t) {
            let {
                topEmojisTTL: e
            } = t;
            if (null == e || Date.now() < e) return
        }!s.default.getIsFetching(e) && (0, a.fetchTopEmojis)(e)
    }
}