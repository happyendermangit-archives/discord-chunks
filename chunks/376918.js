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
            return _
        }
    });
    var i, r, a = n("367907"),
        s = n("373228"),
        o = n("626135"),
        l = n("981631");

    function u(e, t, n) {
        var i, r, s;
        o.default.track(l.AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, {
            ...(0, a.collectChannelAnalyticsMetadata)(t),
            ...(0, a.collectGuildAnalyticsMetadata)(t.guild_id),
            autocomplete_type: e,
            num_emoji_results: null !== (i = null == n ? void 0 : n.numEmojiResults) && void 0 !== i ? i : 0,
            num_locked_emoji_results: null !== (r = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== r ? r : 0,
            num_sticker_results: null !== (s = null == n ? void 0 : n.numStickerResults) && void 0 !== s ? s : 0
        })
    }

    function d(e, t, n, i) {
        var r, s, u, d, _;
        o.default.track(l.AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, {
            ...(0, a.collectChannelAnalyticsMetadata)(n),
            ...(0, a.collectGuildAnalyticsMetadata)(n.guild_id),
            autocomplete_type: e,
            selection_type: t,
            emoji_id: null == i ? void 0 : i.emojiId,
            sticker_id: null == i ? void 0 : i.stickerId,
            num_emoji_results: null !== (r = null == i ? void 0 : i.numEmojiResults) && void 0 !== r ? r : 0,
            num_sticker_results: null !== (s = null == i ? void 0 : i.numStickerResults) && void 0 !== s ? s : 0,
            emoji_name: null !== (u = null == i ? void 0 : i.expressionName) && void 0 !== u ? u : "",
            is_custom: null !== (d = null == i ? void 0 : i.isCustom) && void 0 !== d && d,
            is_animated: null !== (_ = null == i ? void 0 : i.isAnimated) && void 0 !== _ && _
        })
    }(i = r || (r = {})).AUTOCOMPLETE = "autocomplete", i.AUTOSUGGEST = "autosuggest", i.STICKER_PICKER = "picker";

    function _(e) {
        let {
            sticker: t,
            stickerSelectLocation: n,
            isReplacement: i,
            analyticsLocations: r
        } = e;
        o.default.track(l.AnalyticEvents.STICKER_ATTACHED, {
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
            location_stack: r
        })
    }
}