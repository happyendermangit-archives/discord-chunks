function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var s = n("735250"),
        a = n("470079"),
        i = n("442837"),
        l = n("481060"),
        r = n("409059"),
        u = n("962220"),
        o = n("306453"),
        d = n("108427"),
        c = n("314897"),
        f = n("819570"),
        E = n("626135"),
        I = n("587444"),
        h = n("981631"),
        _ = n("58346"),
        p = n("689938"),
        T = n("794711");

    function m(e, t, n) {
        e.preventDefault(), E.default.track(h.AnalyticEvents.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
        let s = c.default.getFingerprint(),
            a = null != s ? s : c.default.getId();
        u.default.openMobileApp(n.state === _.GuildTemplateStates.RESOLVED ? t : void 0, a)
    }

    function N(e) {
        let {
            code: t
        } = e, n = (0, i.useStateFromStores)([r.default], () => r.default.getGuildTemplate(t));
        return (a.useEffect(() => {
            (0, d.trackAppUIViewed)("guild_template_mobile")
        }, []), null == n || n.state === _.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(f.default, {
            children: (0, s.jsx)(l.Spinner, {})
        }) : n.state === _.GuildTemplateStates.RESOLVED ? (0, s.jsxs)(f.default, {
            children: [(0, s.jsx)(o.default, {
                guildTemplate: n,
                tall: !0
            }), (0, s.jsx)(f.Button, {
                onClick: e => m(e, t, n),
                className: T.marginTop20,
                children: p.default.Messages.GUILD_TEMPLATE_OPEN
            })]
        }) : (0, s.jsx)(I.default, {
            text: p.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_ERROR,
            buttonCta: p.default.Messages.GUILD_TEMPLATE_MOBILE_INVALID_CTA,
            onClick: e => m(e, t, n)
        })
    }
    i.default.initialize()
}