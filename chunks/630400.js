function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        maybeFetchTopEmojisByGuild: function() {
            return a
        }
    });
    var n = i("697218"),
        r = i("385976"),
        o = i("26430"),
        u = i("305781");

    function a(e) {
        if (null == e) return;
        let t = n.default.getCurrentUser();
        if (null == t) return;
        let i = r.default.getTopEmojisMetadata(e);
        if (null != i) {
            let {
                topEmojisTTL: e
            } = i;
            if (null == e || Date.now() < e) return
        }!o.default.getIsFetching(e) && (0, u.fetchTopEmojis)(e)
    }
}