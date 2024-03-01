function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("446674"),
        i = n("913144");
    let r = {
            topEmojisByGuildId: {}
        },
        a = r,
        o = {};
    class d extends s.default.PersistedStore {
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
    d.displayName = "TopEmojiStore", d.persistKey = "TopEmojiStore";
    var u = new d(i.default, {
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