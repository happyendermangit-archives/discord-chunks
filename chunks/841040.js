function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("300284"),
        s = n("785717"),
        o = n("981631"),
        l = n("689938"),
        u = n("357282");
    let d = {
            page: o.AnalyticsPages.GUILD_CHANNEL,
            section: o.AnalyticsSections.PROFILE_POPOUT,
            object: o.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
        },
        _ = {
            page: o.AnalyticsPages.USER_POPOUT,
            section: o.AnalyticsSections.PROFILE_POPOUT
        };

    function c(e) {
        let {
            onSelect: t,
            onClose: n,
            guild: o
        } = e, c = (0, a.default)({
            guild: o,
            analyticsLocation: d
        }), E = (0, a.default)({
            analyticsLocation: _
        }), {
            trackUserProfileAction: I
        } = (0, s.useUserProfileAnalyticsContext)();
        return (0, i.jsxs)(r.Menu, {
            className: u.popoutMenu,
            onSelect: t,
            navId: "edit-profile-popout",
            onClose: n,
            "aria-label": l.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
            children: [(0, i.jsx)(r.MenuItem, {
                id: "edit-server-profile",
                label: l.default.Messages.CHANGE_IDENTITY,
                subtext: l.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                action: () => {
                    I({
                        action: "EDIT_GUILD_PROFILE"
                    }), c()
                }
            }), (0, i.jsx)(r.MenuItem, {
                id: "edit-default-profile",
                label: l.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
                subtext: l.default.Messages.USER_PROFILE_MENU_HELP,
                action: () => {
                    I({
                        action: "EDIT_PROFILE"
                    }), E()
                }
            })]
        })
    }
}