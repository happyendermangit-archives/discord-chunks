function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return g
        }
    });
    var n = s("735250"),
        a = s("470079"),
        l = s("442837"),
        i = s("481060"),
        r = s("409059"),
        u = s("962220"),
        o = s("306453"),
        d = s("108427"),
        c = s("314897"),
        f = s("819570"),
        E = s("626135"),
        I = s("587444"),
        _ = s("981631"),
        h = s("58346"),
        p = s("689938"),
        T = s("794711");

    function N(e, t, s) {
        e.preventDefault(), E.default.track(_.AnalyticEvents.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: s.name,
            guild_template_description: s.description,
            guild_template_guild_id: s.sourceGuildId
        });
        let n = c.default.getFingerprint(),
            a = null != n ? n : c.default.getId();
        u.default.openMobileApp(s.state === h.GuildTemplateStates.RESOLVED ? t : void 0, a)
    }

    function g(e) {
        let {
            code: t
        } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.getGuildTemplate(t));
        return (a.useEffect(() => {
            (0, d.trackAppUIViewed)("guild_template_mobile")
        }, []), null == s || s.state === h.GuildTemplateStates.RESOLVING) ? (0, n.jsx)(f.default, {
            children: (0, n.jsx)(i.Spinner, {})
        }) : s.state === h.GuildTemplateStates.RESOLVED ? (0, n.jsxs)(f.default, {
            children: [(0, n.jsx)(o.default, {
                guildTemplate: s,
                tall: !0
            }), (0, n.jsx)(f.Button, {
                onClick: e => N(e, t, s),
                className: T.marginTop20,
                children: p.default.Messages.GUILD_TEMPLATE_OPEN
            })]
        }) : (0, n.jsx)(I.default, {
            text: p.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
            buttonCta: p.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
            onClick: e => N(e, t, s)
        })
    }
    l.default.initialize()
}