function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchTopEmojis: function() {
            return a
        },
        updateNewlyAddedEmojiSeenAcknowledged: function() {
            return l
        },
        updateNewlyAddedLastSeen: function() {
            return o
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("981631");

    function a(e) {
        r.default.dispatch({
            type: "TOP_EMOJIS_FETCH",
            guildId: e
        }), i.HTTP.get({
            url: s.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
            oldFormErrors: !0
        }).then(t => r.default.dispatch({
            type: "TOP_EMOJIS_FETCH_SUCCESS",
            guildId: e,
            topEmojisMetadata: t.body.items.map(e => ({
                emojiId: e.emoji_id,
                rank: e.emoji_rank
            })).sort((e, t) => e.rank - t.rank)
        }), () => r.default.dispatch({
            type: "TOP_EMOJIS_FETCH_FAILURE",
            guildId: e
        }))
    }

    function o(e, t) {
        r.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
        }), null != e && null != t && r.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
            guildId: e,
            emojiId: t
        })
    }

    function l(e, t) {
        null != e && null != t && r.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
            guildId: e,
            emojiId: t
        })
    }
}