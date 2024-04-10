function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("724458");
    var i = n("367907"),
        r = n("339085"),
        s = n("592125"),
        a = n("944486"),
        o = n("176354"),
        l = n("304852"),
        u = n("199257"),
        d = n("981631"),
        _ = n("185923"),
        c = n("957825");

    function E(e) {
        var t;
        let {
            intention: n,
            containerWidth: E,
            rowSize: I,
            isBurstReaction: T,
            analyticsObject: f
        } = e, S = s.default.getChannel(a.default.getChannelId()), A = null == S ? void 0 : S.getGuildId(), h = r.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(), m = null != S ? r.default.getDisambiguatedEmojiContext(S.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], N = h.slice(0, r.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems), O = null != A ? r.default.getGuildEmoji(A) : [], p = Object.values(null !== (t = r.default.getDisambiguatedEmojiContext(null == S ? void 0 : S.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce((e, t) => e += t.length, 0), {
            topEmojis: R,
            newlyAddedEmojis: C
        } = (0, u.getTopAndNewlyAddedEmojis)({
            guildId: null == S ? void 0 : S.getGuildId(),
            pickerIntention: n
        }), {
            visibleTopEmojis: g,
            visibleNewlyAddedEmojis: L
        } = (0, l.getEmojiHotrail)({
            topEmojis: R,
            newlyAddedEmojis: C,
            rowSize: I
        });
        i.default.trackWithMetadata(n === _.EmojiIntention.REACTION ? d.AnalyticEvents.REACTION_PICKER_OPENED : d.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
            width: E,
            tab: c.ExpressionPickerViewType.EMOJI,
            badged: !1,
            num_expressions_favorites: m.length,
            num_animated_expressions_favorites: m.filter(e => null == e ? void 0 : e.animated).length,
            num_custom_expressions_favorites: m.filter(o.default.isCustomEmoji).length,
            num_standard_expressions_favorites: m.filter(e => null == e.id).length,
            num_expressions_frecent: N.length,
            num_animated_expressions_frecent: N.filter(e => null == e ? void 0 : e.animated).length,
            num_custom_expressions_frecent: N.filter(o.default.isCustomEmoji).length,
            num_standard_expressions_frecent: N.filter(e => null == e.id).length,
            num_current_guild_expressions: O.length,
            num_custom_expressions_total: p,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter(e => e.animated).length,
            num_expressions_newly_added: L.length,
            num_animated_expressions_newly_added: L.filter(e => e.animated).length,
            ...n === _.EmojiIntention.REACTION && {
                is_burst: T
            },
            ...null != f && {
                location_object: f
            }
        })
    }
}