function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackStickerPickerOpen: function() {
            return u
        },
        trackStickerFavorited: function() {
            return d
        },
        trackStickerSearchStart: function() {
            return c
        },
        trackStickerSearchResultsViewed: function() {
            return f
        },
        trackStickerSearchSelect: function() {
            return m
        },
        trackStickerSelect: function() {
            return p
        },
        trackStickerSearchEmpty: function() {
            return h
        }
    });
    var l = n("716241"),
        i = n("599110"),
        a = n("161585"),
        s = n("49111"),
        r = n("13030"),
        o = n("646718");
    let u = e => {
            let {
                containerWidth: t,
                favoriteStickers: n,
                frequentlyUsedStickers: i,
                guildStickers: o,
                stickersTotal: u
            } = e;
            l.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                width: t,
                tab: r.ExpressionPickerViewType.STICKER,
                badged: !1,
                num_expressions_favorites: n.length,
                num_animated_expressions_favorites: n.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
                num_custom_expressions_favorites: n.filter(e => (0, a.isCustomSticker)(e.type)).length,
                num_standard_expressions_favorites: n.filter(e => !(0, a.isCustomSticker)(e.type)).length,
                num_expressions_frecent: i.length,
                num_custom_expressions_frecent: i.filter(e => (0, a.isCustomSticker)(e.type)).length,
                num_animated_expressions_frecent: i.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
                num_standard_expressions_frecent: i.filter(e => !(0, a.isCustomSticker)(e.type)).length,
                num_current_guild_expressions: o.length,
                num_custom_expressions_total: u
            })
        },
        d = e => {
            let t, {
                sticker: n,
                location: i
            } = e;
            n.type === a.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_FAVORITED, {
                location: i,
                expression_type: r.ExpressionPickerViewType.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, a.isAnimatedSticker)(n.format_type),
                is_custom: (0, a.isCustomSticker)(n.type)
            })
        },
        c = () => {
            i.default.track(s.AnalyticEvents.SEARCH_STARTED, {
                search_type: s.SearchTypes.STICKER
            })
        },
        f = (e, t, n) => {
            l.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                search_type: s.SearchTypes.STICKER,
                total_results: t,
                query: e,
                is_suggestion: n
            })
        },
        m = (e, t, n) => {
            let i;
            let {
                sticker: r
            } = e;
            r.type === a.MetaStickerType.GUILD && (i = r.guild_id), l.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                load_id: r.id,
                search_type: s.SearchTypes.STICKER,
                source_object: "Sticker Picker",
                total_results: n,
                expression_guild_id: i,
                sticker_id: r.id,
                query: t
            })
        },
        p = e => {
            let t;
            let {
                sticker: n,
                category: i
            } = e;
            n.type === a.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: o.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: i,
                expression_guild_id: t,
                is_animated: (0, a.isAnimatedSticker)(n.format_type),
                is_custom: (0, a.isCustomSticker)(n.type)
            })
        },
        h = e => {
            null != e && "" !== e && l.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: s.SearchTypes.STICKER,
                source_object: "Sticker Picker"
            })
        }
}