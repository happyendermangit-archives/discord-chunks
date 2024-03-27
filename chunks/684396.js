function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("957255"),
        l = n("501536"),
        a = n("25292"),
        s = n("200294"),
        r = n("851745"),
        o = n("406291"),
        u = n("49111"),
        d = n("958706"),
        c = n("782340");
    let f = {
        sentinel: o.REACTION_START_SENTINEL,
        matches(e, t, n, l, a) {
            var s, r;
            return l && null !== (r = null === (s = a.chatInputType.autocomplete) || void 0 === s ? void 0 : s.addReactionShortcut) && void 0 !== r && r && (i.default.can(u.Permissions.ADD_REACTIONS, e) || e.isPrivate())
        },
        queryResults(e, t, n, i, l) {
            let {
                emojis: s
            } = a.default.queryEmojiResults({
                query: n,
                channel: e,
                intention: d.EmojiIntention.REACTION
            });
            return {
                results: {
                    emojis: s.unlocked
                }
            }
        },
        renderResults(e) {
            let {
                results: {
                    emojis: t
                },
                selectedIndex: n,
                query: i,
                onHover: a,
                onClick: r
            } = e;
            return (0, s.renderAutocompleteGroup)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: r,
                titleWithQuery: c.default.Messages.REACTIONS_MATCHING,
                titleWithoutQuery: c.default.Messages.EMOJI,
                Component: l.default.Emoji,
                getProps: e => ({
                    emoji: e,
                    key: e.id || e.uniqueName || e.name,
                    sentinel: o.EMOJI_SENTINEL,
                    isLocked: !1
                }),
                getQuery: e => "".concat(o.REACTION_START_SENTINEL).concat(e),
                key: "reactions"
            })
        },
        onSelect(e) {
            let {
                results: {
                    emojis: t
                },
                index: n,
                options: i
            } = e, l = t[n];
            return i.sendMessage(function(e) {
                return "".concat(o.REACTION_START_SENTINEL).concat(e.name).concat(o.REACTION_END_SENTINEL)
            }(l)), {
                type: r.AutocompleteSelectionTypes.REACTION
            }
        }
    };
    var m = f
}