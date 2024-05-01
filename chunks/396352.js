function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        a = n("570140");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = {
            topEmojisByGuildId: {}
        },
        l = o,
        u = {};
    class d extends(i = r.default.PersistedStore) {
        initialize(e) {
            l = null != e ? e : o
        }
        getState() {
            return l
        }
        getTopEmojiIdsByGuildId(e) {
            return l.topEmojisByGuildId[e]
        }
        getIsFetching(e) {
            return u[e]
        }
    }
    s(d, "displayName", "TopEmojiStore"), s(d, "persistKey", "TopEmojiStore"), t.default = new d(a.default, {
        LOGOUT: function() {
            l = o, u = {}
        },
        TOP_EMOJIS_FETCH: function(e) {
            let {
                guildId: t
            } = e;
            u[t] = !0
        },
        TOP_EMOJIS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                topEmojisMetadata: n
            } = e;
            l.topEmojisByGuildId[t] = n.map(e => e.emojiId), u[t] = !1
        }
    })
}