function(e, t, n) {
    "use strict";
    n.r(t), n("733860"), n("47120");
    var i = n("106351"),
        r = n("212819"),
        a = n("933557"),
        s = n("592125"),
        o = n("984933"),
        l = n("156361"),
        u = n("483360"),
        d = n("877565"),
        _ = n("590921"),
        c = n("665692"),
        E = n("176505"),
        I = n("689938");
    let T = {
        sentinel: c.CHANNEL_SENTINEL,
        matches: (e, t, n, i, r) => r.mentions.channel !== _.ChannelMentionMode.DENY && !e.isPrivate(),
        queryResults(e, t, n, i, a) {
            let s, l, d = o.GUILD_SELECTABLE_CHANNELS_KEY;
            return n.charAt(0) === r.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = o.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), i.forNonStringCommandOption ? s = u.default.queryApplicationCommandChannelResults({
                query: n,
                channel: e,
                channelTypes: i.allowedChannelTypes
            }) : (s = u.default.queryChannelResults({
                query: n,
                channel: e,
                type: d
            }), null != t && (l = u.default.queryStaticRouteChannels({
                query: n,
                guild: t
            }), s.channels.unshift(...l))), {
                results: s,
                staticRouteChannels: l
            }
        },
        renderResults(e) {
            let t, n, {
                    results: {
                        channels: i
                    },
                    selectedIndex: a,
                    query: o,
                    options: u,
                    onHover: _,
                    onClick: E
                } = e,
                T = o.charAt(0) === r.AutocompleterQuerySymbols.VOICE_CHANNEL;
            return T ? (t = I.default.Messages.VOICE_CHANNELS_MATCHING, n = I.default.Messages.VOICE_CHANNELS, o = o.substring(1)) : u.forNonStringCommandOption ? (t = I.default.Messages.CHANNELS_MATCHING, n = I.default.Messages.CHANNELS) : (t = I.default.Messages.TEXT_CHANNELS_MATCHING, n = I.default.Messages.TEXT_CHANNELS), (0, d.renderAutocompleteGroup)({
                query: o,
                selectedIndex: a,
                autocompletes: i,
                onHover: _,
                onClick: E,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: l.default.Channel,
                getProps: e => ({
                    channel: e,
                    key: e.id,
                    category: s.default.getChannel(e.parent_id)
                }),
                getQuery: e => T ? "".concat(c.CHANNEL_SENTINEL).concat(r.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(c.CHANNEL_SENTINEL).concat(e),
                key: "channels"
            })
        },
        onSelect(e) {
            let {
                results: {
                    channels: t
                },
                index: n,
                options: r
            } = e, s = t[n];
            return r.insertText(function(e) {
                switch (e.type) {
                    case i.ChannelTypes.PUBLIC_THREAD:
                    case i.ChannelTypes.PRIVATE_THREAD:
                    case i.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case i.ChannelTypes.GUILD_VOICE:
                    case i.ChannelTypes.GUILD_STAGE_VOICE:
                    case i.ChannelTypes.GUILD_CATEGORY:
                        return '#"'.concat((0, a.escapeChannelName)(e.name), '"');
                    default:
                        let t = o.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                        return "#".concat(null != t ? t.name : e.name)
                }
            }(s), function(e) {
                return E.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
            }(s)), {
                type: _.AutocompleteSelectionTypes.CHANNEL
            }
        }
    };
    t.default = T
}