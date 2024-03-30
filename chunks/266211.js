function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("324727"),
        a = n("264437"),
        u = n("281767"),
        s = n("941504"),
        l = n("293876"),
        c = {
            page: u.AnalyticsPages.GUILD_CHANNEL,
            section: u.AnalyticsSections.PROFILE_POPOUT,
            object: u.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
        },
        f = {
            page: u.AnalyticsPages.USER_POPOUT,
            section: u.AnalyticsSections.PROFILE_POPOUT
        };

    function d(e) {
        var t = e.onSelect,
            n = e.onClose,
            u = e.guild,
            d = (0, i.default)({
                guild: u,
                analyticsLocation: c
            }),
            _ = (0, i.default)({
                analyticsLocation: f
            }),
            E = (0, a.useUserProfileAnalyticsContext)().trackUserProfileAction;
        return r.createElement(o.Menu, {
            className: l.popoutMenu,
            onSelect: t,
            navId: "edit-profile-popout",
            onClose: n,
            "aria-label": s.default.Messages.PROFILE_ACTIONS_MENU_LABEL
        }, r.createElement(o.MenuItem, {
            id: "edit-server-profile",
            label: s.default.Messages.CHANGE_IDENTITY,
            subtext: s.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
            action: function() {
                E({
                    action: "EDIT_GUILD_PROFILE"
                }), d()
            }
        }), r.createElement(o.MenuItem, {
            id: "edit-default-profile",
            label: s.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
            subtext: s.default.Messages.USER_PROFILE_MENU_HELP,
            action: function() {
                E({
                    action: "EDIT_PROFILE"
                }), _()
            }
        }))
    }
}