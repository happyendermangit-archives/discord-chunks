function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a("967888"),
        r = a("629815"),
        l = a("950879"),
        s = a("909080"),
        u = a("306912"),
        E = a("281767");
    t.default = {
        acceptGuildTemplate: function(e, t, a) {
            return r.default.dispatch({
                type: "GUILD_TEMPLATE_ACCEPT",
                code: e
            }), new Promise(function(i, c) {
                n.HTTP.post({
                    url: E.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                    body: {
                        name: t,
                        icon: a
                    },
                    oldFormErrors: !0
                }).then(function(t) {
                    var a = t.body;
                    r.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                        code: e,
                        guild: a
                    }), l.default.isConnected() ? u.default.addConditionalChangeListener(function() {
                        if (null != u.default.getGuild(a.id)) return (0, s.transitionToGuild)(a.id), i(a), !1
                    }) : ((0, s.transitionToGuild)(a.id), i(a))
                }, function(t) {
                    r.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                        code: e
                    }), c(t.body)
                })
            })
        }
    }
}