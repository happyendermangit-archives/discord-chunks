function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGuildIntegrationsApplications: function() {
            return l
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("653047"),
        a = n("766274"),
        o = n("49111");

    function l(e) {
        i.HTTP.get({
            url: o.Endpoints.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0
        }).then(t => {
            let n = t.body.map(e => (null != e.user && (e.user = new a.default(e.user)), null != e.application && (e.application = r.default.createFromServer(e.application)), e));
            s.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                guildId: e,
                integrations: n
            })
        }).catch(() => {})
    }
}