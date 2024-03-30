function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackStickerFavorited: function() {
            return c
        },
        trackStickerPickerOpen: function() {
            return l
        },
        trackStickerSearchEmpty: function() {
            return p
        },
        trackStickerSearchResultsViewed: function() {
            return d
        },
        trackStickerSearchSelect: function() {
            return _
        },
        trackStickerSearchStart: function() {
            return f
        },
        trackStickerSelect: function() {
            return E
        }
    });
    var r = n("140817"),
        o = n("870331"),
        i = n("294463"),
        a = n("281767"),
        u = n("980671"),
        s = n("868615"),
        l = function(e) {
            var t = e.containerWidth,
                n = e.favoriteStickers,
                o = e.frequentlyUsedStickers,
                s = e.guildStickers,
                l = e.stickersTotal;
            r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                width: t,
                tab: u.ExpressionPickerViewType.STICKER,
                badged: !1,
                num_expressions_favorites: n.length,
                num_animated_expressions_favorites: n.filter(function(e) {
                    return (0, i.isAnimatedSticker)(e.format_type)
                }).length,
                num_custom_expressions_favorites: n.filter(function(e) {
                    return (0, i.isCustomSticker)(e.type)
                }).length,
                num_standard_expressions_favorites: n.filter(function(e) {
                    return !(0, i.isCustomSticker)(e.type)
                }).length,
                num_expressions_frecent: o.length,
                num_custom_expressions_frecent: o.filter(function(e) {
                    return (0, i.isCustomSticker)(e.type)
                }).length,
                num_animated_expressions_frecent: o.filter(function(e) {
                    return (0, i.isAnimatedSticker)(e.format_type)
                }).length,
                num_standard_expressions_frecent: o.filter(function(e) {
                    return !(0, i.isCustomSticker)(e.type)
                }).length,
                num_current_guild_expressions: s.length,
                num_custom_expressions_total: l
            })
        },
        c = function(e) {
            var t, n = e.sticker,
                o = e.location;
            n.type === i.MetaStickerType.GUILD && (t = n.guild_id), r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_FAVORITED, {
                location: o,
                expression_type: u.ExpressionPickerViewType.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, i.isAnimatedSticker)(n.format_type),
                is_custom: (0, i.isCustomSticker)(n.type)
            })
        },
        f = function() {
            o.default.track(a.AnalyticEvents.SEARCH_STARTED, {
                search_type: a.SearchTypes.STICKER
            })
        },
        d = function(e, t, n) {
            r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                search_type: a.SearchTypes.STICKER,
                total_results: t,
                query: e,
                is_suggestion: n
            })
        },
        _ = function(e, t, n) {
            var o, u = e.sticker;
            u.type === i.MetaStickerType.GUILD && (o = u.guild_id), r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                load_id: u.id,
                search_type: a.SearchTypes.STICKER,
                source_object: "Sticker Picker",
                total_results: n,
                expression_guild_id: o,
                sticker_id: u.id,
                query: t
            })
        },
        E = function(e) {
            var t, n = e.sticker,
                o = e.category;
            n.type === i.MetaStickerType.GUILD && (t = n.guild_id), r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: s.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: o,
                expression_guild_id: t,
                is_animated: (0, i.isAnimatedSticker)(n.format_type),
                is_custom: (0, i.isCustomSticker)(n.type)
            })
        },
        p = function(e) {
            null != e && "" !== e && r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: a.SearchTypes.STICKER,
                source_object: "Sticker Picker"
            })
        }
}