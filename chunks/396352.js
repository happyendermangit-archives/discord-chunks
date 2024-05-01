function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140");

    function a(e, t, n) {
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
    a(d, "displayName", "TopEmojiStore"), a(d, "persistKey", "TopEmojiStore"), t.default = new d(s.default, {
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