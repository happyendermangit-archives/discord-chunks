function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("140817"),
        o = n("300983"),
        i = n("935741"),
        a = n("894288"),
        u = n("739226"),
        s = n("986609"),
        l = n("888136"),
        c = n("281767"),
        f = n("68735"),
        d = n("980671");

    function _(e) {
        var t, n = e.intention,
            _ = e.containerWidth,
            E = e.rowSize,
            p = e.isBurstReaction,
            m = e.analyticsObject,
            y = i.default.getChannel(a.default.getChannelId()),
            I = null == y ? void 0 : y.getGuildId(),
            h = o.default.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
            O = null != y ? o.default.getDisambiguatedEmojiContext(y.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
            T = h.slice(0, o.default.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems),
            S = null != I ? o.default.getGuildEmoji(I) : [],
            v = Object.values(null !== (t = o.default.getDisambiguatedEmojiContext(null == y ? void 0 : y.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {}).reduce(function(e, t) {
                return e += t.length
            }, 0),
            g = (0, l.getTopAndNewlyAddedEmojis)({
                guildId: null == y ? void 0 : y.getGuildId(),
                pickerIntention: n
            }),
            A = g.topEmojis,
            b = g.newlyAddedEmojis,
            N = (0, s.getEmojiHotrail)({
                topEmojis: A,
                newlyAddedEmojis: b,
                rowSize: E
            }),
            R = N.visibleTopEmojis,
            C = N.visibleNewlyAddedEmojis;
        r.default.trackWithMetadata(n === f.EmojiIntention.REACTION ? c.AnalyticEvents.REACTION_PICKER_OPENED : c.AnalyticEvents.EXPRESSION_PICKER_OPENED, function(e) {
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
        }({
            width: _,
            tab: d.ExpressionPickerViewType.EMOJI,
            badged: !1,
            num_expressions_favorites: O.length,
            num_animated_expressions_favorites: O.filter(function(e) {
                return null == e ? void 0 : e.animated
            }).length,
            num_custom_expressions_favorites: O.filter(u.default.isCustomEmoji).length,
            num_standard_expressions_favorites: O.filter(function(e) {
                return null == e.id
            }).length,
            num_expressions_frecent: T.length,
            num_animated_expressions_frecent: T.filter(function(e) {
                return null == e ? void 0 : e.animated
            }).length,
            num_custom_expressions_frecent: T.filter(u.default.isCustomEmoji).length,
            num_standard_expressions_frecent: T.filter(function(e) {
                return null == e.id
            }).length,
            num_current_guild_expressions: S.length,
            num_custom_expressions_total: v,
            num_expressions_top_server: R.length,
            num_animated_expressions_top_server: R.filter(function(e) {
                return e.animated
            }).length,
            num_expressions_newly_added: C.length,
            num_animated_expressions_newly_added: C.filter(function(e) {
                return e.animated
            }).length
        }, n === f.EmojiIntention.REACTION && {
            is_burst: p
        }, null != m && {
            location_object: m
        }))
    }
}