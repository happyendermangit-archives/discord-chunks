function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmojiCaptionsForUser: function() {
            return s
        },
        initiateEmojiInteraction: function() {
            return r
        }
    }), n("222007");
    var l = n("872717"),
        i = n("913144"),
        a = n("49111");
    async function s() {
        i.default.dispatch({
            type: "EMOJI_CAPTIONS_FETCH"
        });
        try {
            let {
                body: e
            } = await l.default.get({
                url: a.Endpoints.EMOJI_CAPTIONS_GET
            }), t = {};
            for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
            i.default.dispatch({
                type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
                emojiCaptions: t
            })
        } catch (t) {
            var e;
            i.default.dispatch({
                type: "EMOJI_CAPTIONS_FETCH_ERROR",
                is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
            })
        }
    }

    function r(e) {
        i.default.dispatch({
            type: "EMOJI_INTERACTION_INITIATED",
            interaction: e
        })
    }
}