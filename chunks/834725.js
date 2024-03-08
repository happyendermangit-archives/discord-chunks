function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackAutocompleteOpen: function() {
            return u
        },
        trackAutocompleteSelect: function() {
            return d
        },
        trackStickerPreviewSelect: function() {
            return c
        }
    });
    var i, l, a = n("716241"),
        s = n("161585"),
        r = n("599110"),
        o = n("49111");

    function u(e, t, n) {
        var i, l, s;
        r.default.track(o.AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, {
            ...(0, a.collectChannelAnalyticsMetadata)(t),
            ...(0, a.collectGuildAnalyticsMetadata)(t.guild_id),
            autocomplete_type: e,
            num_emoji_results: null !== (i = null == n ? void 0 : n.numEmojiResults) && void 0 !== i ? i : 0,
            num_locked_emoji_results: null !== (l = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== l ? l : 0,
            num_sticker_results: null !== (s = null == n ? void 0 : n.numStickerResults) && void 0 !== s ? s : 0
        })
    }

    function d(e, t, n, i) {
        var l, s, u, d, c;
        r.default.track(o.AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, {
            ...(0, a.collectChannelAnalyticsMetadata)(n),
            ...(0, a.collectGuildAnalyticsMetadata)(n.guild_id),
            autocomplete_type: e,
            selection_type: t,
            emoji_id: null == i ? void 0 : i.emojiId,
            sticker_id: null == i ? void 0 : i.stickerId,
            num_emoji_results: null !== (l = null == i ? void 0 : i.numEmojiResults) && void 0 !== l ? l : 0,
            num_sticker_results: null !== (s = null == i ? void 0 : i.numStickerResults) && void 0 !== s ? s : 0,
            emoji_name: null !== (u = null == i ? void 0 : i.expressionName) && void 0 !== u ? u : "",
            is_custom: null !== (d = null == i ? void 0 : i.isCustom) && void 0 !== d && d,
            is_animated: null !== (c = null == i ? void 0 : i.isAnimated) && void 0 !== c && c
        })
    }(i = l || (l = {})).AUTOCOMPLETE = "autocomplete", i.AUTOSUGGEST = "autosuggest", i.STICKER_PICKER = "picker";

    function c(e) {
        let {
            sticker: t,
            stickerSelectLocation: n,
            isReplacement: i,
            analyticsLocations: l
        } = e;
        r.default.track(o.AnalyticEvents.STICKER_ATTACHED, {
            replaced: i,
            source: function(e) {
                switch (e) {
                    case s.StickerSelectLocation.AUTOCOMPLETE:
                        return "autocomplete";
                    case s.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                        return "autosuggest";
                    case s.StickerSelectLocation.STICKER_PICKER:
                        return "picker";
                    default:
                        return null
                }
            }(n),
            sticker_id: t.id,
            location_stack: l
        })
    }
}