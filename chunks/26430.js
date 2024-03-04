function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = {
            topEmojisByGuildId: {}
        },
        a = r,
        o = {};
    class l extends i.default.PersistedStore {
        initialize(e) {
            a = null != e ? e : r
        }
        getState() {
            return a
        }
        getTopEmojiIdsByGuildId(e) {
            return a.topEmojisByGuildId[e]
        }
        getIsFetching(e) {
            return o[e]
        }
    }
    l.displayName = "TopEmojiStore", l.persistKey = "TopEmojiStore";
    var u = new l(s.default, {
        LOGOUT: function() {
            a = r, o = {}
        },
        TOP_EMOJIS_FETCH: function(e) {
            let {
                guildId: t
            } = e;
            o[t] = !0
        },
        TOP_EMOJIS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                topEmojisMetadata: n
            } = e;
            a.topEmojisByGuildId[t] = n.map(e => e.emojiId), o[t] = !1
        }
    })
}