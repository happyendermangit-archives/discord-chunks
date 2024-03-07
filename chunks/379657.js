function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("77078"),
        s = n("716241"),
        r = n("240249"),
        o = n("781423"),
        u = n("252063"),
        d = n("599110"),
        c = n("777003"),
        f = n("49111"),
        m = n("782340"),
        p = n("48827"),
        h = n("862939");

    function E(e) {
        let {
            applicationId: t,
            commandIds: n,
            channel: E,
            guildId: g,
            onClick: S
        } = e;
        (0, u.usePrivateChannelIntegrationState)({
            channelId: E.id
        });
        let {
            commands: C
        } = r.useCommandsForApplication(E, t, n), T = i.useMemo(() => null == C ? void 0 : C.filter(e => !0 !== e.nsfw), [C]), v = i.useCallback(e => {
            null == S || S(), d.default.track(f.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: g,
                ...(0, s.collectChannelAnalyticsMetadataFromId)(E.id)
            })
        }, [t, E.id, g, S]);
        return null == T || 0 === T.length ? null : (0, l.jsxs)(c.default, {
            children: [(0, l.jsx)(a.Heading, {
                variant: "eyebrow",
                className: h.title,
                children: m.default.Messages.BOT_PROFILE_SLASH_COMMANDS
            }), (0, l.jsx)("ul", {
                className: p.popularApplicationCommandsList,
                children: T.map(e => (0, l.jsx)("li", {
                    children: (0, l.jsx)(o.CommandClickable, {
                        commandId: e.id,
                        commandName: e.displayName,
                        commandDescription: e.displayDescription,
                        onClick: v,
                        guildId: g,
                        channelId: E.id
                    })
                }, e.id))
            })]
        })
    }
}