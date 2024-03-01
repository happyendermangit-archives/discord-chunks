function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return m
        }
    }), i("808653");
    var n = i("716241"),
        r = i("385976"),
        o = i("42203"),
        u = i("18494"),
        a = i("402671"),
        s = i("255214"),
        l = i("352046"),
        E = i("49111"),
        d = i("958706"),
        c = i("13030");

    function m(e) {
        var t;
        let {
            intention: i,
            containerWidth: m,
            rowSize: _,
            isBurstReaction: f,
            analyticsObject: g
        } = e, I = o.default.getChannel(u.default.getChannelId()), O = null == I ? void 0 : I.getGuildId(), C = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), p = null != I ? r.default.getDisambiguatedEmojiContext(I.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], y = C.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), S = null != O ? r.default.getGuildEmoji(O) : [], T = null !== (t = r.default.getDisambiguatedEmojiContext(null == I ? void 0 : I.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}, j = Object.values(T).reduce((e, t) => e += t.length, 0), {
            topEmojis: h,
            newlyAddedEmojis: A
        } = (0, l.getTopAndNewlyAddedEmojis)({
            guildId: null == I ? void 0 : I.getGuildId(),
            pickerIntention: i
        }), {
            visibleTopEmojis: M,
            visibleNewlyAddedEmojis: R
        } = (0, s.getEmojiHotrail)({
            topEmojis: h,
            newlyAddedEmojis: A,
            rowSize: _
        });
        n.default.trackWithMetadata(i === d.EmojiIntention.REACTION ? E.AnalyticEvents.REACTION_PICKER_OPENED : E.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
            width: m,
            tab: c.ExpressionPickerViewType.EMOJI,
            badged: !1,
            num_expressions_favorites: p.length,
            num_animated_expressions_favorites: p.filter(e => null == e ? void 0 : e.animated).length,
            num_custom_expressions_favorites: p.filter(a.default.isCustomEmoji).length,
            num_standard_expressions_favorites: p.filter(e => null == e.id).length,
            num_expressions_frecent: y.length,
            num_animated_expressions_frecent: y.filter(e => null == e ? void 0 : e.animated).length,
            num_custom_expressions_frecent: y.filter(a.default.isCustomEmoji).length,
            num_standard_expressions_frecent: y.filter(e => null == e.id).length,
            num_current_guild_expressions: S.length,
            num_custom_expressions_total: j,
            num_expressions_top_server: M.length,
            num_animated_expressions_top_server: M.filter(e => e.animated).length,
            num_expressions_newly_added: R.length,
            num_animated_expressions_newly_added: R.filter(e => e.animated).length,
            ...i === d.EmojiIntention.REACTION && {
                is_burst: f
            },
            ...null != g && {
                location_object: g
            }
        })
    }
}