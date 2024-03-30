function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("29884"),
        o = n("587996"),
        i = n("378309"),
        a = n("233126"),
        u = n("209610"),
        s = n("407048"),
        l = n("281767"),
        c = n("68735"),
        f = n("941504"),
        d = {
            sentinel: s.REACTION_START_SENTINEL,
            matches: function(e, t, n, o, i) {
                var a, u;
                return o && null !== (u = null === (a = i.chatInputType.autocomplete) || void 0 === a ? void 0 : a.addReactionShortcut) && void 0 !== u && u && (r.default.can(l.Permissions.ADD_REACTIONS, e) || e.isPrivate())
            },
            queryResults: function(e, t, n, r, o) {
                return {
                    results: {
                        emojis: i.default.queryEmojiResults({
                            query: n,
                            channel: e,
                            intention: c.EmojiIntention.REACTION
                        }).emojis.unlocked
                    }
                }
            },
            renderResults: function(e) {
                var t = e.results.emojis,
                    n = e.selectedIndex,
                    r = e.query,
                    i = e.onHover,
                    u = e.onClick;
                return (0, a.renderAutocompleteGroup)({
                    query: r,
                    selectedIndex: n,
                    autocompletes: t,
                    onHover: i,
                    onClick: u,
                    titleWithQuery: f.default.Messages.REACTIONS_MATCHING,
                    titleWithoutQuery: f.default.Messages.EMOJI,
                    Component: o.default.Emoji,
                    getProps: function(e) {
                        return {
                            emoji: e,
                            key: e.id || e.uniqueName || e.name,
                            sentinel: s.EMOJI_SENTINEL,
                            isLocked: !1
                        }
                    },
                    getQuery: function(e) {
                        return "".concat(s.REACTION_START_SENTINEL).concat(e)
                    },
                    key: "reactions"
                })
            },
            onSelect: function(e) {
                var t = e.results.emojis,
                    n = e.index,
                    r = e.options,
                    o = t[n];
                return r.sendMessage(function(e) {
                    return "".concat(s.REACTION_START_SENTINEL).concat(e.name).concat(s.REACTION_END_SENTINEL)
                }(o)), {
                    type: u.AutocompleteSelectionTypes.REACTION
                }
            }
        };
    t.default = d
}