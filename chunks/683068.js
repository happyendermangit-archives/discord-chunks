function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        i = n("77078"),
        r = n("569808"),
        u = n("913645"),
        o = n("473759"),
        d = n("970366"),
        c = n("271938"),
        f = n("124969"),
        E = n("599110"),
        I = n("724853"),
        _ = n("49111"),
        h = n("579033"),
        p = n("782340"),
        T = n("890957");

    function m(e, t, n) {
        e.preventDefault(), E.default.track(_.AnalyticEvents.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId
        });
        let s = c.default.getFingerprint(),
            a = null != s ? s : c.default.getId();
        u.default.openMobileApp(n.state === h.GuildTemplateStates.RESOLVED ? t : void 0, a)
    }

    function N(e) {
        let {
            code: t
        } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getGuildTemplate(t));
        return (a.useEffect(() => {
            (0, d.trackAppUIViewed)("guild_template_mobile")
        }, []), null == n || n.state === h.GuildTemplateStates.RESOLVING) ? (0, s.jsx)(f.default, {
            children: (0, s.jsx)(i.Spinner, {})
        }) : n.state === h.GuildTemplateStates.RESOLVED ? (0, s.jsxs)(f.default, {
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
    l.default.initialize()
}