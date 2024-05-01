function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("496675"),
        r = n("156361"),
        a = n("483360"),
        s = n("877565"),
        o = n("590921"),
        l = n("665692"),
        u = n("981631"),
        d = n("185923"),
        _ = n("689938");
    let c = {
        sentinel: l.REACTION_START_SENTINEL,
        matches(e, t, n, r, a) {
            var s, o;
            return r && null !== (o = null === (s = a.chatInputType.autocomplete) || void 0 === s ? void 0 : s.addReactionShortcut) && void 0 !== o && o && (i.default.can(u.Permissions.ADD_REACTIONS, e) || e.isPrivate())
        },
        queryResults(e, t, n, i, r) {
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
                onClick: o
            } = e;
            return (0, s.renderAutocompleteGroup)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: o,
                titleWithQuery: _.default.Messages.REACTIONS_MATCHING,
                titleWithoutQuery: _.default.Messages.EMOJI,
                Component: r.default.Emoji,
                getProps: e => ({
                    emoji: e,
                    key: e.id || e.uniqueName || e.name,
                    sentinel: l.EMOJI_SENTINEL
                }),
                getQuery: e => "".concat(l.REACTION_START_SENTINEL).concat(e),
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
            } = e, r = t[n];
            return i.sendMessage(function(e) {
                return "".concat(l.REACTION_START_SENTINEL).concat(e.name).concat(l.REACTION_END_SENTINEL)
            }(r)), {
                type: o.AutocompleteSelectionTypes.REACTION
            }
        }
    };
    t.default = c
}