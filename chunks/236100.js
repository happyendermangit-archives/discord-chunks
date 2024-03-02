function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("38766"),
        s = n("49111"),
        r = n("782340"),
        o = n("769143");
    let u = {
            page: s.AnalyticsPages.GUILD_CHANNEL,
            section: s.AnalyticsSections.PROFILE_POPOUT,
            object: s.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
        },
        d = {
            page: s.AnalyticsPages.USER_POPOUT,
            section: s.AnalyticsSections.PROFILE_POPOUT
        };

    function c(e) {
        let {
            onSelect: t,
            onClose: n,
            guild: s
        } = e, c = (0, a.default)({
            guild: s,
            analyticsLocation: u
        }), f = (0, a.default)({
            analyticsLocation: d
        });
        return (0, l.jsxs)(i.Menu, {
            className: o.popoutMenu,
            onSelect: t,
            navId: "edit-profile-popout",
            onClose: n,
            "aria-label": r.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
            children: [(0, l.jsx)(i.MenuItem, {
                id: "edit-server-profile",
                label: r.default.Messages.CHANGE_IDENTITY,
                subtext: r.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                action: () => c()
            }), (0, l.jsx)(i.MenuItem, {
                id: "edit-default-profile",
                label: r.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                subtext: r.default.Messages.USER_PROFILE_MENU_HELP,
                action: () => f()
            })]
        })
    }
}