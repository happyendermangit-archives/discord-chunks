function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("843762"), n("222007");
    var i = n("298386"),
        l = n("123225"),
        a = n("679653"),
        s = n("42203"),
        r = n("923959"),
        o = n("501536"),
        u = n("25292"),
        d = n("200294"),
        c = n("851745"),
        f = n("406291"),
        p = n("724210"),
        m = n("782340");
    let h = {
        sentinel: f.CHANNEL_SENTINEL,
        matches: (e, t, n, i, l) => l.mentions.channel !== c.ChannelMentionMode.DENY && !e.isPrivate(),
        queryResults(e, t, n, i, a) {
            let s, o, d = r.GUILD_SELECTABLE_CHANNELS_KEY;
            return n.charAt(0) === l.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = r.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), i.forNonStringCommandOption ? s = u.default.queryApplicationCommandChannelResults({
                query: n,
                channel: e,
                channelTypes: i.allowedChannelTypes
            }) : (s = u.default.queryChannelResults({
                query: n,
                channel: e,
                type: d
            }), null != t && (o = u.default.queryStaticRouteChannels({
                query: n,
                guild: t
            }), s.channels.unshift(...o))), {
                results: s,
                staticRouteChannels: o
            }
        },
        renderResults(e) {
            let t, n, {
                    results: {
                        channels: i
                    },
                    selectedIndex: a,
                    query: r,
                    options: u,
                    onHover: c,
                    onClick: p
                } = e,
                h = r.charAt(0) === l.AutocompleterQuerySymbols.VOICE_CHANNEL;
            return h ? (t = m.default.Messages.VOICE_CHANNELS_MATCHING, n = m.default.Messages.VOICE_CHANNELS, r = r.substring(1)) : u.forNonStringCommandOption ? (t = m.default.Messages.CHANNELS_MATCHING, n = m.default.Messages.CHANNELS) : (t = m.default.Messages.TEXT_CHANNELS_MATCHING, n = m.default.Messages.TEXT_CHANNELS), (0, d.renderAutocompleteGroup)({
                query: r,
                selectedIndex: a,
                autocompletes: i,
                onHover: c,
                onClick: p,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: o.default.Channel,
                getProps: e => ({
                    channel: e,
                    key: e.id,
                    category: s.default.getChannel(e.parent_id)
                }),
                getQuery: e => h ? "".concat(f.CHANNEL_SENTINEL).concat(l.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(f.CHANNEL_SENTINEL).concat(e),
                key: "channels"
            })
        },
        onSelect(e) {
            let {
                results: {
                    channels: t
                },
                index: n,
                options: l
            } = e, s = t[n];
            return l.insertText(function(e) {
                switch (e.type) {
                    case i.ChannelTypes.PUBLIC_THREAD:
                    case i.ChannelTypes.PRIVATE_THREAD:
                    case i.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case i.ChannelTypes.GUILD_VOICE:
                    case i.ChannelTypes.GUILD_STAGE_VOICE:
                    case i.ChannelTypes.GUILD_CATEGORY:
                        return '#"'.concat((0, a.escapeChannelName)(e.name), '"');
                    default:
                        let t = r.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                        return "#".concat(null != t ? t.name : e.name)
                }
            }(s), function(e) {
                return p.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
            }(s)), {
                type: c.AutocompleteSelectionTypes.CHANNEL
            }
        }
    };
    var x = h
}