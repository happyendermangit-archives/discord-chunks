function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("718517");
    let a = {
            captionsById: new Map
        },
        o = a,
        l = !1,
        u = null;
    class d extends i.default.PersistedStore {
        initialize(e) {
            o = null != e ? {
                captionsById: new Map(e.captionsById)
            } : a
        }
        getState() {
            return o
        }
        getCaptionsForEmojiById(e) {
            var t;
            let {
                emojiId: n
            } = e;
            return null !== (t = o.captionsById.get(n)) && void 0 !== t ? t : []
        }
        getIsFetching() {
            return l
        }
        getEmojiCaptionsTTL() {
            return u
        }
        hasPersistedState() {
            return o.captionsById.size > 0
        }
        clear() {
            o = a, l = !1, u = null
        }
    }
    d.displayName = "EmojiCaptionsStore", d.persistKey = "EmojiCaptionsStore";
    var c = new d(s.default, {
        LOGOUT: function() {
            o = a, l = !1, u = null
        },
        EMOJI_CAPTIONS_FETCH: function(e) {
            let {} = e;
            !l && (l = !0)
        },
        EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
            let {
                emojiCaptions: t
            } = e;
            o.captionsById = new Map(Object.entries(t)), l = !1, u = Date.now() + 360 * r.default.Millis.MINUTE
        },
        EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
            let {
                is4XXError: t
            } = e;
            l = !1;
            u = Date.now() + (t ? 10 : 1) * r.default.Millis.MINUTE
        },
        POST_CONNECTION_OPEN: function(e) {
            let {} = e;
            l = !1
        }
    })
}