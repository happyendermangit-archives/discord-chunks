function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackAutocompleteOpen: function() {
            return f
        },
        trackAutocompleteSelect: function() {
            return d
        },
        trackStickerPreviewSelect: function() {
            return _
        }
    });
    var r, o, i = n("140817"),
        a = n("294463"),
        u = n("870331"),
        s = n("281767");

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function c(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function f(e, t, n) {
        var r, o, a;
        u.default.track(s.AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, c(l({}, (0, i.collectChannelAnalyticsMetadata)(t), (0, i.collectGuildAnalyticsMetadata)(t.guild_id)), {
            autocomplete_type: e,
            num_emoji_results: null !== (r = null == n ? void 0 : n.numEmojiResults) && void 0 !== r ? r : 0,
            num_locked_emoji_results: null !== (o = null == n ? void 0 : n.numLockedEmojiResults) && void 0 !== o ? o : 0,
            num_sticker_results: null !== (a = null == n ? void 0 : n.numStickerResults) && void 0 !== a ? a : 0
        }))
    }

    function d(e, t, n, r) {
        var o, a, f, d, _;
        u.default.track(s.AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, c(l({}, (0, i.collectChannelAnalyticsMetadata)(n), (0, i.collectGuildAnalyticsMetadata)(n.guild_id)), {
            autocomplete_type: e,
            selection_type: t,
            emoji_id: null == r ? void 0 : r.emojiId,
            sticker_id: null == r ? void 0 : r.stickerId,
            num_emoji_results: null !== (o = null == r ? void 0 : r.numEmojiResults) && void 0 !== o ? o : 0,
            num_sticker_results: null !== (a = null == r ? void 0 : r.numStickerResults) && void 0 !== a ? a : 0,
            emoji_name: null !== (f = null == r ? void 0 : r.expressionName) && void 0 !== f ? f : "",
            is_custom: null !== (d = null == r ? void 0 : r.isCustom) && void 0 !== d && d,
            is_animated: null !== (_ = null == r ? void 0 : r.isAnimated) && void 0 !== _ && _
        }))
    }(r = o || (o = {})).AUTOCOMPLETE = "autocomplete", r.AUTOSUGGEST = "autosuggest", r.STICKER_PICKER = "picker";

    function _(e) {
        var t = e.sticker,
            n = e.stickerSelectLocation,
            r = e.isReplacement,
            o = e.analyticsLocations;
        u.default.track(s.AnalyticEvents.STICKER_ATTACHED, {
            replaced: r,
            source: function(e) {
                switch (e) {
                    case a.StickerSelectLocation.AUTOCOMPLETE:
                        return "autocomplete";
                    case a.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                        return "autosuggest";
                    case a.StickerSelectLocation.STICKER_PICKER:
                        return "picker";
                    default:
                        return null
                }
            }(n),
            sticker_id: t.id,
            location_stack: o
        })
    }
}