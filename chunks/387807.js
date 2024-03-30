function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGuildIntegrationsApplications: function() {
            return s
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("338140"),
        a = n("428009"),
        u = n("281767");

    function s(e) {
        r.HTTP.get({
            url: u.Endpoints.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0
        }).then(function(t) {
            var n = t.body.map(function(e) {
                return null != e.user && (e.user = new a.default(e.user)), null != e.application && (e.application = i.default.createFromServer(e.application)), e
            });
            o.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                guildId: e,
                integrations: n
            })
        }).catch(function() {})
    }
}