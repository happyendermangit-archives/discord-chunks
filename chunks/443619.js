function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchTopEmojis: function() {
            return a
        },
        updateNewlyAddedEmojiSeenAcknowledged: function() {
            return s
        },
        updateNewlyAddedLastSeen: function() {
            return u
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("281767");

    function a(e) {
        o.default.dispatch({
            type: "TOP_EMOJIS_FETCH",
            guildId: e
        }), r.HTTP.get({
            url: i.Endpoints.TOP_EMOJIS_FOR_GUILD(e),
            oldFormErrors: !0
        }).then(function(t) {
            return o.default.dispatch({
                type: "TOP_EMOJIS_FETCH_SUCCESS",
                guildId: e,
                topEmojisMetadata: t.body.items.map(function(e) {
                    return {
                        emojiId: e.emoji_id,
                        rank: e.emoji_rank
                    }
                }).sort(function(e, t) {
                    return e.rank - t.rank
                })
            })
        }, function() {
            return o.default.dispatch({
                type: "TOP_EMOJIS_FETCH_FAILURE",
                guildId: e
            })
        })
    }

    function u(e, t) {
        o.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
        }), null != e && null != t && o.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
            guildId: e,
            emojiId: t
        })
    }

    function s(e, t) {
        null != e && null != t && o.default.dispatch({
            type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
            guildId: e,
            emojiId: t
        })
    }
}