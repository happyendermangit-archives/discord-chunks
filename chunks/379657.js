function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("77078"),
        s = n("716241"),
        r = n("240249"),
        o = n("781423"),
        u = n("252063"),
        d = n("599110"),
        c = n("777003"),
        f = n("49111"),
        p = n("782340"),
        m = n("48827"),
        h = n("862939");

    function x(e) {
        let {
            applicationId: t,
            commandIds: n,
            channel: x,
            guildId: E,
            onClick: y
        } = e;
        (0, u.usePrivateChannelIntegrationState)({
            channelId: x.id
        });
        let {
            commands: g
        } = r.useCommandsForApplication(x, t, n), S = l.useMemo(() => null == g ? void 0 : g.filter(e => !0 !== e.nsfw), [g]), C = l.useCallback(e => {
            null == y || y(), d.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: E,
                ...(0, s.collectChannelAnalyticsMetadataFromId)(x.id)
            })
        }, [t, x.id, E, y]);
        return null == S || 0 === S.length ? null : (0, i.jsxs)(c.default, {
            children: [(0, i.jsx)(a.Heading, {
                variant: "eyebrow",
                className: h.title,
                children: p.default.Messages.BOT_PROFILE_SLASH_COMMANDS
            }), (0, i.jsx)("ul", {
                className: m.popularApplicationCommandsList,
                children: S.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(o.CommandClickable, {
                        commandId: e.id,
                        commandName: e.displayName,
                        commandDescription: e.displayDescription,
                        onClick: C,
                        guildId: E,
                        channelId: x.id
                    })
                }, e.id))
            })]
        })
    }
}