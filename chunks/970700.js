function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGuildIntegrationsApplications: function() {
            return u
        }
    });
    var l = n("872717"),
        i = n("913144"),
        r = n("653047"),
        d = n("766274"),
        s = n("49111");

    function u(e) {
        l.default.get({
            url: s.Endpoints.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0
        }).then(t => {
            let n = t.body.map(e => (null != e.user && (e.user = new d.default(e.user)), null != e.application && (e.application = r.default.createFromServer(e.application)), e));
            i.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                guildId: e,
                integrations: n
            })
        }).catch(() => {})
    }
}