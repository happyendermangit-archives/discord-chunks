function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmojiCaptionsForUser: function() {
            return a
        },
        initiateEmojiInteraction: function() {
            return o
        }
    }), n("47120");
    var i = n("544891"),
        r = n("570140"),
        s = n("981631");
    async function a() {
        r.default.dispatch({
            type: "EMOJI_CAPTIONS_FETCH"
        });
        try {
            let {
                body: e
            } = await i.HTTP.get({
                url: s.Endpoints.EMOJI_CAPTIONS_GET
            }), t = {};
            for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
            r.default.dispatch({
                type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
                emojiCaptions: t
            })
        } catch (t) {
            var e;
            r.default.dispatch({
                type: "EMOJI_CAPTIONS_FETCH_ERROR",
                is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
            })
        }
    }

    function o(e) {
        r.default.dispatch({
            type: "EMOJI_INTERACTION_INITIATED",
            interaction: e
        })
    }
}