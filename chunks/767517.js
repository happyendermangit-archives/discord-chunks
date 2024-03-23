function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("872717"),
        a = n("913144"),
        l = n("619443"),
        i = n("239380"),
        r = n("305961"),
        u = n("49111"),
        o = {
            acceptGuildTemplate: (e, t, n) => (a.default.dispatch({
                type: "GUILD_TEMPLATE_ACCEPT",
                code: e
            }), new Promise((o, d) => {
                s.HTTP.post({
                    url: u.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                    body: {
                        name: t,
                        icon: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body;
                    a.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                        code: e,
                        guild: n
                    }), l.default.isConnected() ? r.default.addConditionalChangeListener(() => {
                        if (null != r.default.getGuild(n.id)) return (0, i.transitionToGuild)(n.id), o(n), !1
                    }) : ((0, i.transitionToGuild)(n.id), o(n))
                }, t => {
                    a.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                        code: e
                    }), d(t.body)
                })
            }))
        }
}