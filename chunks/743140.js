function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("317955"),
        o = n("505793"),
        i = n("534965"),
        a = n("935741"),
        u = n("29604"),
        s = n("587996"),
        l = n("378309"),
        c = n("233126"),
        f = n("209610"),
        d = n("407048"),
        _ = n("928204"),
        E = n("941504");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var m = {
        sentinel: d.CHANNEL_SENTINEL,
        matches: function(e, t, n, r, o) {
            return o.mentions.channel !== f.ChannelMentionMode.DENY && !e.isPrivate()
        },
        queryResults: function(e, t, n, r, i) {
            var a, s, c, f, d = u.GUILD_SELECTABLE_CHANNELS_KEY;
            if (n.charAt(0) === o.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = u.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), r.forNonStringCommandOption) s = l.default.queryApplicationCommandChannelResults({
                query: n,
                channel: e,
                channelTypes: r.allowedChannelTypes
            });
            else if (s = l.default.queryChannelResults({
                    query: n,
                    channel: e,
                    type: d
                }), null != t) {
                ;
                c = l.default.queryStaticRouteChannels({
                    query: n,
                    guild: t
                }), (f = s.channels).unshift.apply(f, function(e) {
                    if (Array.isArray(e)) return p(e)
                }(a = c) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(a) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                    }
                }(a) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            }
            return {
                results: s,
                staticRouteChannels: c
            }
        },
        renderResults: function(e) {
            var t, n, r = e.results.channels,
                i = e.selectedIndex,
                u = e.query,
                l = e.options,
                f = e.onHover,
                _ = e.onClick,
                p = u.charAt(0) === o.AutocompleterQuerySymbols.VOICE_CHANNEL;
            return p ? (t = E.default.Messages.VOICE_CHANNELS_MATCHING, n = E.default.Messages.VOICE_CHANNELS, u = u.substring(1)) : l.forNonStringCommandOption ? (t = E.default.Messages.CHANNELS_MATCHING, n = E.default.Messages.CHANNELS) : (t = E.default.Messages.TEXT_CHANNELS_MATCHING, n = E.default.Messages.TEXT_CHANNELS), (0, c.renderAutocompleteGroup)({
                query: u,
                selectedIndex: i,
                autocompletes: r,
                onHover: f,
                onClick: _,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: s.default.Channel,
                getProps: function(e) {
                    return {
                        channel: e,
                        key: e.id,
                        category: a.default.getChannel(e.parent_id)
                    }
                },
                getQuery: function(e) {
                    return p ? "".concat(d.CHANNEL_SENTINEL).concat(o.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(d.CHANNEL_SENTINEL).concat(e)
                },
                key: "channels"
            })
        },
        onSelect: function(e) {
            var t = e.results.channels,
                n = e.index,
                o = e.options,
                a = t[n];
            return o.insertText(function(e) {
                switch (e.type) {
                    case r.ChannelTypes.PUBLIC_THREAD:
                    case r.ChannelTypes.PRIVATE_THREAD:
                    case r.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case r.ChannelTypes.GUILD_VOICE:
                    case r.ChannelTypes.GUILD_STAGE_VOICE:
                    case r.ChannelTypes.GUILD_CATEGORY:
                        return '#"'.concat((0, i.escapeChannelName)(e.name), '"');
                    default:
                        var t = u.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                        return "#".concat(null != t ? t.name : e.name)
                }
            }(a), function(e) {
                return _.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
            }(a)), {
                type: f.AutocompleteSelectionTypes.CHANNEL
            }
        }
    };
    t.default = m
}