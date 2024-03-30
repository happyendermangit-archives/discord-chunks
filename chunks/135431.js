function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canInstallApplication: function() {
            return d
        },
        installApplication: function() {
            return _
        }
    });
    var i = n("873546"),
        r = n("149765"),
        s = n("581364"),
        a = n("69580"),
        o = n("626135"),
        l = n("49012"),
        u = n("981631");

    function d(e) {
        let {
            customInstallUrl: t,
            installParams: n,
            integrationTypesConfig: i
        } = e;
        return null != t || null != n || null != i && Object.values(i).some(e => null != e && null != e.oauth2_install_params) && (0, s.isUserInUserAppExperiment)({
            location: "canInstallApplication"
        })
    }

    function _(e) {
        let {
            applicationId: t,
            customInstallUrl: n,
            installParams: d,
            integrationTypesConfig: _,
            guildId: c,
            channelId: E,
            disableGuildSelect: I,
            source: T
        } = e;
        if (null != n) {
            o.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                application_id: t,
                guild_id: c,
                auth_type: "custom_url",
                source: T,
                device_platform: i.isMobile ? "mobile_web" : "desktop_web"
            }), (0, l.handleClick)({
                href: n
            });
            return
        }
        if (null != _ && Object.values(_).some(e => null != e && null != e.oauth2_install_params) && (0, s.isUserInUserAppExperiment)({
                location: "installApplication"
            })) {
            o.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                application_id: t,
                guild_id: c,
                auth_type: "in_app",
                source: T,
                device_platform: i.isMobile ? "mobile_web" : "desktop_web"
            }), (0, a.openOAuth2Modal)({
                clientId: t,
                guildId: c,
                channelId: E,
                disableGuildSelect: I
            });
            return
        }
        null != d && (o.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: c,
            auth_type: "in_app",
            source: T,
            device_platform: i.isMobile ? "mobile_web" : "desktop_web"
        }), (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: c,
            channelId: E,
            disableGuildSelect: I,
            scopes: d.scopes,
            permissions: null != d.permissions ? r.deserialize(d.permissions) : void 0
        }))
    }
}