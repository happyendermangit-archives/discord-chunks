function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("914576"),
        s = n("906732"),
        o = n("189432"),
        l = n("189357"),
        u = n("314897"),
        d = n("944486"),
        _ = n("785717"),
        c = n("537387"),
        E = n("176505"),
        I = n("50493"),
        T = n("689938");

    function f(e) {
        let {
            user: t,
            guildId: n,
            channelId: f,
            onClose: S
        } = e, {
            trackUserProfileAction: h
        } = (0, _.useUserProfileAnalyticsContext)(), {
            newestAnalyticsLocation: A
        } = (0, s.default)(), m = (0, r.useStateFromStores)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), N = (0, l.useCanAccessGuildMemberModView)(null != n ? n : null, !0), p = (0, r.useStateFromStores)([d.default], () => null != f ? f : d.default.getChannelId(n, !0), [f, n]);
        return null == n || !N || m ? null : (0, i.jsx)(c.default, {
            icon: a.ShieldIcon,
            text: T.default.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
            onClick: () => {
                h({
                    action: "PRESS_MOD_VIEW"
                }), (0, o.openGuildMemberModViewSidebar)(n, t.id, null != p ? p : E.StaticChannelRoute.MEMBER_SAFETY, {
                    modViewPanel: I.ModViewPanel.INFO,
                    sourceLocation: A
                }), null == S || S()
            }
        })
    }
}