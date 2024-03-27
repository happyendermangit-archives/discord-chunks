function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGuildIntegrationsApplications: function() {
            return l
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("973616"),
        a = n("598077"),
        o = n("981631");

    function l(e) {
        i.HTTP.get({
            url: o.Endpoints.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0
        }).then(t => {
            let n = t.body.map(e => (null != e.user && (e.user = new a.default(e.user)), null != e.application && (e.application = s.default.createFromServer(e.application)), e));
            r.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                guildId: e,
                integrations: n
            })
        }).catch(() => {})
    }
}