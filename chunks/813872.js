function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("40851"),
        l = n("189432"),
        u = n("189357"),
        d = n("944486"),
        _ = n("626135"),
        c = n("981631"),
        E = n("176505"),
        I = n("50493"),
        T = n("689938");

    function f(e) {
        let {
            userId: t,
            guildId: n,
            channelId: f,
            location: S,
            onAction: h
        } = e, A = r.useContext(_.AnalyticsContext), m = (0, o.useWindowDispatch)(), N = (0, s.useStateFromStores)([d.default], () => null != f ? f : d.default.getChannelId(n, !0), [f, n]), p = (0, u.useCanAccessGuildMemberModView)(n, !0);
        return null != n && p ? (0, i.jsx)(a.MenuItem, {
            id: "mod-view",
            label: T.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
            action: () => {
                null == h || h(), (0, l.openGuildMemberModViewSidebar)(n, t, null != N ? N : E.StaticChannelRoute.MEMBER_SAFETY, {
                    modViewPanel: I.ModViewPanel.INFO,
                    sourceLocation: null != S ? S : A.location
                }), m.dispatch(c.ComponentActions.POPOUT_CLOSE)
            }
        }) : null
    }
}