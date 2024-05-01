function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("70956");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = {
            captionsById: new Map
        },
        u = l,
        d = !1,
        _ = null;
    class c extends(i = r.default.PersistedStore) {
        initialize(e) {
            u = null != e ? {
                captionsById: new Map(e.captionsById)
            } : l
        }
        getState() {
            return u
        }
        getCaptionsForEmojiById(e) {
            var t;
            let {
                emojiId: n
            } = e;
            return null !== (t = u.captionsById.get(n)) && void 0 !== t ? t : []
        }
        getIsFetching() {
            return d
        }
        getEmojiCaptionsTTL() {
            return _
        }
        hasPersistedState() {
            return u.captionsById.size > 0
        }
        clear() {
            u = l, d = !1, _ = null
        }
    }
    o(c, "displayName", "EmojiCaptionsStore"), o(c, "persistKey", "EmojiCaptionsStore"), t.default = new c(s.default, {
        LOGOUT: function() {
            u = l, d = !1, _ = null
        },
        EMOJI_CAPTIONS_FETCH: function(e) {
            let {} = e;
            !d && (d = !0)
        },
        EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
            let {
                emojiCaptions: t
            } = e;
            u.captionsById = new Map(Object.entries(t)), d = !1, _ = Date.now() + 360 * a.default.Millis.MINUTE
        },
        EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
            let {
                is4XXError: t
            } = e;
            d = !1;
            _ = Date.now() + (t ? 10 : 1) * a.default.Millis.MINUTE
        },
        POST_CONNECTION_OPEN: function(e) {
            let {} = e;
            d = !1
        }
    })
}