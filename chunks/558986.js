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
    var i = n("872717"),
        l = n("913144"),
        a = n("49111");
    async function s() {
        l.default.dispatch({
            type: "EMOJI_CAPTIONS_FETCH"
        });
        try {
            let {
                body: e
            } = await i.default.get({
                url: a.Endpoints.EMOJI_CAPTIONS_GET
            }), t = {};
            for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
            l.default.dispatch({
                type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
                emojiCaptions: t
            })
        } catch (t) {
            var e;
            l.default.dispatch({
                type: "EMOJI_CAPTIONS_FETCH_ERROR",
                is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
            })
        }
    }

    function r(e) {
        l.default.dispatch({
            type: "EMOJI_INTERACTION_INITIATED",
            interaction: e
        })
    }
}