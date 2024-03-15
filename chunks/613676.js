function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canInstallApplication: function() {
            return d
        },
        installApplication: function() {
            return c
        }
    });
    var i = n("394846"),
        l = n("316693"),
        a = n("389153"),
        s = n("33942"),
        r = n("599110"),
        o = n("128259"),
        u = n("49111");

    function d(e) {
        let {
            customInstallUrl: t,
            installParams: n,
            integrationTypesConfig: i
        } = e;
        return null != t || null != n || null != i && Object.values(i).some(e => null != e && null != e.oauth2_install_params) && (0, a.isUserInUserAppExperiment)({
            location: "canInstallApplication"
        })
    }

    function c(e) {
        let {
            applicationId: t,
            customInstallUrl: n,
            installParams: d,
            integrationTypesConfig: c,
            guildId: f,
            channelId: p,
            disableGuildSelect: m,
            source: h
        } = e;
        if (null != n) {
            r.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                application_id: t,
                guild_id: f,
                auth_type: "custom_url",
                source: h,
                device_platform: i.isMobile ? "mobile_web" : "desktop_web"
            }), (0, o.handleClick)({
                href: n
            });
            return
        }
        if (null != c && Object.values(c).some(e => null != e && null != e.oauth2_install_params) && (0, a.isUserInUserAppExperiment)({
                location: "installApplication"
            })) {
            r.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                application_id: t,
                guild_id: f,
                auth_type: "in_app",
                source: h,
                device_platform: i.isMobile ? "mobile_web" : "desktop_web"
            }), (0, s.openOAuth2Modal)({
                clientId: t,
                guildId: f,
                channelId: p,
                disableGuildSelect: m
            });
            return
        }
        null != d && (r.default.track(u.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: f,
            auth_type: "in_app",
            source: h,
            device_platform: i.isMobile ? "mobile_web" : "desktop_web"
        }), (0, s.openOAuth2Modal)({
            clientId: t,
            guildId: f,
            channelId: p,
            disableGuildSelect: m,
            scopes: d.scopes,
            permissions: null != d.permissions ? l.default.deserialize(d.permissions) : void 0
        }))
    }
}