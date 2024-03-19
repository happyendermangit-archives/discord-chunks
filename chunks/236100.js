function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("38766"),
        s = n("756507"),
        r = n("49111"),
        o = n("782340"),
        u = n("769143");
    let d = {
            page: r.AnalyticsPages.GUILD_CHANNEL,
            section: r.AnalyticsSections.PROFILE_POPOUT,
            object: r.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
        },
        c = {
            page: r.AnalyticsPages.USER_POPOUT,
            section: r.AnalyticsSections.PROFILE_POPOUT
        };

    function f(e) {
        let {
            onSelect: t,
            onClose: n,
            guild: r
        } = e, f = (0, a.default)({
            guild: r,
            analyticsLocation: d
        }), p = (0, a.default)({
            analyticsLocation: c
        }), {
            trackUserProfileAction: m
        } = (0, s.useUserProfileAnalyticsContext)();
        return (0, i.jsxs)(l.Menu, {
            className: u.popoutMenu,
            onSelect: t,
            navId: "edit-profile-popout",
            onClose: n,
            "aria-label": o.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
            children: [(0, i.jsx)(l.MenuItem, {
                id: "edit-server-profile",
                label: o.default.Messages.CHANGE_IDENTITY,
                subtext: o.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                action: () => {
                    m({
                        action: "EDIT_GUILD_PROFILE"
                    }), f()
                }
            }), (0, i.jsx)(l.MenuItem, {
                id: "edit-default-profile",
                label: o.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                subtext: o.default.Messages.USER_PROFILE_MENU_HELP,
                action: () => {
                    m({
                        action: "EDIT_PROFILE"
                    }), p()
                }
            })]
        })
    }
}