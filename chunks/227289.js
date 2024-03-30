function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canInstallApplication: function() {
            return c
        },
        installApplication: function() {
            return f
        }
    });
    var r = n("56300"),
        o = n("22287"),
        i = n("653754"),
        a = n("971332"),
        u = n("870331"),
        s = n("254093"),
        l = n("281767");

    function c(e) {
        var t = e.customInstallUrl,
            n = e.installParams,
            r = e.integrationTypesConfig;
        return null != t || null != n || null != r && Object.values(r).some(function(e) {
            return null != e && null != e.oauth2_install_params
        }) && (0, i.isUserInUserAppExperiment)({
            location: "canInstallApplication"
        })
    }

    function f(e) {
        var t = e.applicationId,
            n = e.customInstallUrl,
            c = e.installParams,
            f = e.integrationTypesConfig,
            d = e.guildId,
            _ = e.channelId,
            E = e.disableGuildSelect,
            p = e.source;
        if (null != n) {
            u.default.track(l.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                application_id: t,
                guild_id: d,
                auth_type: "custom_url",
                source: p,
                device_platform: r.isMobile ? "mobile_web" : "desktop_web"
            }), (0, s.handleClick)({
                href: n
            });
            return
        }
        if (null != f && Object.values(f).some(function(e) {
                return null != e && null != e.oauth2_install_params
            }) && (0, i.isUserInUserAppExperiment)({
                location: "installApplication"
            })) {
            u.default.track(l.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                application_id: t,
                guild_id: d,
                auth_type: "in_app",
                source: p,
                device_platform: r.isMobile ? "mobile_web" : "desktop_web"
            }), (0, a.openOAuth2Modal)({
                clientId: t,
                guildId: d,
                channelId: _,
                disableGuildSelect: E
            });
            return
        }
        null != c && (u.default.track(l.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: "in_app",
            source: p,
            device_platform: r.isMobile ? "mobile_web" : "desktop_web"
        }), (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: d,
            channelId: _,
            disableGuildSelect: E,
            scopes: c.scopes,
            permissions: null != c.permissions ? o.deserialize(c.permissions) : void 0
        }))
    }
}