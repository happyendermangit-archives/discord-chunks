function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("140817"),
        a = n("292206"),
        u = n("439723"),
        s = n("429383"),
        l = n("870331"),
        c = n("877987"),
        f = n("281767"),
        d = n("941504"),
        _ = n("139835"),
        E = n("989171");

    function p(e) {
        var t = e.applicationId,
            n = e.commandIds,
            p = e.channel,
            m = e.guildId,
            y = e.onClick;
        (0, s.usePrivateChannelIntegrationState)({
            channelId: p.id
        });
        var I = a.useCommandsForApplication(p, t, n).commands,
            h = r.useMemo(function() {
                return null == I ? void 0 : I.filter(function(e) {
                    return !0 !== e.nsfw
                })
            }, [I]),
            O = r.useCallback(function(e) {
                null == y || y(), l.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, function(e) {
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
                    application_id: t,
                    command_id: e,
                    guild_id: m
                }, (0, i.collectChannelAnalyticsMetadataFromId)(p.id)))
            }, [t, p.id, m, y]);
        return null == h || 0 === h.length ? null : r.createElement(c.default, null, r.createElement(o.Heading, {
            variant: "eyebrow",
            className: E.title
        }, d.default.Messages.BOT_PROFILE_SLASH_COMMANDS), r.createElement("ul", {
            className: _.popularApplicationCommandsList
        }, h.map(function(e) {
            return r.createElement("li", {
                key: e.id
            }, r.createElement(u.CommandClickable, {
                commandId: e.id,
                commandName: e.displayName,
                commandDescription: e.displayDescription,
                onClick: O,
                guildId: m,
                channelId: p.id
            }))
        })))
    }
}