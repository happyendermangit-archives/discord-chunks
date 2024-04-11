function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("367907"),
        o = n("10718"),
        l = n("69626"),
        u = n("556084"),
        d = n("626135"),
        _ = n("659101"),
        c = n("981631"),
        E = n("689938"),
        I = n("139835"),
        T = n("989171");

    function f(e) {
        let {
            applicationId: t,
            commandIds: n,
            channel: f,
            guildId: S,
            onClick: h
        } = e;
        (0, u.usePrivateChannelIntegrationState)({
            channelId: f.id
        });
        let {
            commands: A
        } = o.useCommandsForApplication(f, t, n), m = r.useMemo(() => null == A ? void 0 : A.filter(e => !0 !== e.nsfw), [A]), N = r.useCallback(e => {
            null == h || h(), d.default.track(c.AnalyticEvents.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: S,
                ...(0, a.collectChannelAnalyticsMetadataFromId)(f.id)
            })
        }, [t, f.id, S, h]);
        return null == m || 0 === m.length ? null : (0, i.jsxs)(_.default, {
            children: [(0, i.jsx)(s.Heading, {
                variant: "eyebrow",
                className: T.title,
                children: E.default.Messages.BOT_PROFILE_SLASH_COMMANDS
            }), (0, i.jsx)("ul", {
                className: I.popularApplicationCommandsList,
                children: m.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(l.CommandClickable, {
                        commandId: e.id,
                        commandName: e.displayName,
                        commandDescription: e.displayDescription,
                        onClick: N,
                        guildId: S,
                        channelId: f.id
                    })
                }, e.id))
            })]
        })
    }
}