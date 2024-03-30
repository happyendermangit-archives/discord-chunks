function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeFetchTopEmojisByGuild: function() {
            return u
        }
    });
    var r = n("208454"),
        o = n("300983"),
        i = n("769200"),
        a = n("443619");

    function u(e) {
        if (null != e && null != r.default.getCurrentUser()) {
            var t = o.default.getTopEmojisMetadata(e);
            if (null != t) {
                var n = t.topEmojisTTL;
                if (null == n || Date.now() < n) return
            }!i.default.getIsFetching(e) && (0, a.fetchTopEmojis)(e)
        }
    }
}