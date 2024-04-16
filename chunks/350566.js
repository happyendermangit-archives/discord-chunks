function(e, s, a) {
    "use strict";
    a.r(s);
    var t = a("544891"),
        l = a("570140"),
        n = a("38618"),
        E = a("920440"),
        r = a("430824"),
        _ = a("981631");
    s.default = {
        acceptGuildTemplate: (e, s, a) => (l.default.dispatch({
            type: "GUILD_TEMPLATE_ACCEPT",
            code: e
        }), new Promise((u, d) => {
            t.HTTP.post({
                url: _.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                body: {
                    name: s,
                    icon: a
                },
                oldFormErrors: !0
            }).then(s => {
                let a = s.body;
                l.default.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                    code: e,
                    guild: a
                }), n.default.isConnected() ? r.default.addConditionalChangeListener(() => {
                    if (null != r.default.getGuild(a.id)) return (0, E.transitionToGuild)(a.id), u(a), !1
                }) : ((0, E.transitionToGuild)(a.id), u(a))
            }, s => {
                l.default.dispatch({
                    type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                    code: e
                }), d(s.body)
            })
        }))
    }
}