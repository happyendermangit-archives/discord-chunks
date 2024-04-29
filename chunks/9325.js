function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var s = n("735250"),
        a = n("470079"),
        l = n("442837"),
        i = n("481060"),
        r = n("409059"),
        u = n("962220"),
        o = n("306453"),
        d = n("108427"),
        c = n("314897"),
        f = n("819570"),
        E = n("626135"),
        _ = n("587444"),
        I = n("981631"),
        p = n("58346"),
        h = n("689938"),
        T = n("611273");

    function N(e, t, n) {
        e.preventDefault(), E.default.track(I.AnalyticEvents.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
        let s = c.default.getFingerprint(),
            a = null != s ? s : c.default.getId();
        u.default.openMobileApp(n.state === p.GuildTemplateStates.RESOLVED ? t : void 0, a)
    }

    function g(e) {
        let {
            code: t
        } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getGuildTemplate(t));
        return (a.useEffect(() => {
            (0, d.trackAppUIViewed)("guild_template_mobile")
        }, []), null == n || n.state === p.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(f.default, {
            children: (0, s.jsx)(i.Spinner, {})
        }) : n.state === p.GuildTemplateStates.RESOLVED ? (0, s.jsxs)(f.default, {
            children: [(0, s.jsx)(o.default, {
                guildTemplate: n,
                tall: !0
            }), (0, s.jsx)(f.Button, {
                onClick: e => N(e, t, n),
                className: T.marginTop20,
                children: h.default.Messages.GUILD_TEMPLATE_OPEN
            })]
        }) : (0, s.jsx)(_.default, {
            text: h.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
            buttonCta: h.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
            onClick: e => N(e, t, n)
        })
    }
    l.default.initialize()
}