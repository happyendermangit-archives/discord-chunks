function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackStickerFavorited: function() {
            return d
        },
        trackStickerPickerOpen: function() {
            return u
        },
        trackStickerSearchEmpty: function() {
            return T
        },
        trackStickerSearchResultsViewed: function() {
            return c
        },
        trackStickerSearchSelect: function() {
            return E
        },
        trackStickerSearchStart: function() {
            return _
        },
        trackStickerSelect: function() {
            return I
        }
    });
    var i = n("367907"),
        r = n("626135"),
        a = n("373228"),
        s = n("981631"),
        o = n("957825"),
        l = n("474936");
    let u = e => {
            let {
                containerWidth: t,
                favoriteStickers: n,
                frequentlyUsedStickers: r,
                guildStickers: l,
                stickersTotal: u
            } = e;
            i.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                width: t,
                tab: o.ExpressionPickerViewType.STICKER,
                badged: !1,
                num_expressions_favorites: n.length,
                num_animated_expressions_favorites: n.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
                num_custom_expressions_favorites: n.filter(e => (0, a.isCustomSticker)(e.type)).length,
                num_standard_expressions_favorites: n.filter(e => !(0, a.isCustomSticker)(e.type)).length,
                num_expressions_frecent: r.length,
                num_custom_expressions_frecent: r.filter(e => (0, a.isCustomSticker)(e.type)).length,
                num_animated_expressions_frecent: r.filter(e => (0, a.isAnimatedSticker)(e.format_type)).length,
                num_standard_expressions_frecent: r.filter(e => !(0, a.isCustomSticker)(e.type)).length,
                num_current_guild_expressions: l.length,
                num_custom_expressions_total: u
            })
        },
        d = e => {
            let t, {
                sticker: n,
                location: r
            } = e;
            n.type === a.MetaStickerType.GUILD && (t = n.guild_id), i.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_FAVORITED, {
                location: r,
                expression_type: o.ExpressionPickerViewType.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, a.isAnimatedSticker)(n.format_type),
                is_custom: (0, a.isCustomSticker)(n.type)
            })
        },
        _ = () => {
            r.default.track(s.AnalyticEvents.SEARCH_STARTED, {
                search_type: s.SearchTypes.STICKER
            })
        },
        c = (e, t, n) => {
            i.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                search_type: s.SearchTypes.STICKER,
                total_results: t,
                query: e,
                is_suggestion: n
            })
        },
        E = (e, t, n) => {
            let r;
            let {
                sticker: o
            } = e;
            o.type === a.MetaStickerType.GUILD && (r = o.guild_id), i.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                load_id: o.id,
                search_type: s.SearchTypes.STICKER,
                source_object: "Sticker Picker",
                total_results: n,
                expression_guild_id: r,
                sticker_id: o.id,
                query: t
            })
        },
        I = e => {
            let t;
            let {
                sticker: n,
                category: r
            } = e;
            n.type === a.MetaStickerType.GUILD && (t = n.guild_id), i.default.trackWithMetadata(s.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: l.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: r,
                expression_guild_id: t,
                is_animated: (0, a.isAnimatedSticker)(n.format_type),
                is_custom: (0, a.isCustomSticker)(n.type)
            })
        },
        T = e => {
            null != e && "" !== e && i.default.trackWithMetadata(s.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: s.SearchTypes.STICKER,
                source_object: "Sticker Picker"
            })
        }
}