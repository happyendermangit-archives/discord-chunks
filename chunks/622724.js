function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("100527"),
        s = n("726521"),
        o = n("87620"),
        l = n("981631"),
        u = n("689938");

    function d(e) {
        let {
            user: t,
            guildId: n,
            color: d,
            onAction: _,
            location: c = a.default.CONTEXT_MENU
        } = e;
        return !(0, o.useIsIarUserReportingEnabled)(c) || t.isNonUserBot() ? null : (0, i.jsx)(r.MenuItem, {
            id: "report-user",
            color: d,
            label: u.default.Messages.REPORTS_USER_BUTTON_TITLE,
            action: () => (0, s.showReportModalForUser)(t, n === l.ME ? void 0 : n, _)
        })
    }
}