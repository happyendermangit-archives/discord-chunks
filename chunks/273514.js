function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("592125"),
        s = n("430824"),
        i = n("346656"),
        d = n("689938"),
        o = n("61574");
    t.default = e => {
        let {
            entry: t
        } = e, n = r.default.getChannel(t.channelId);
        if (null == n) return null;
        let u = s.default.getGuild(n.guild_id);
        return null == u ? null : (0, a.jsxs)("div", {
            className: o.container,
            children: [(0, a.jsx)(l.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: d.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
            }), (0, a.jsxs)("div", {
                className: o.guildContainer,
                children: [(0, a.jsxs)("div", {
                    className: o.hubInfo,
                    children: [(0, a.jsx)(i.default, {
                        guild: u,
                        size: i.default.Sizes.MINI,
                        className: o.hubIcon
                    }), (0, a.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: u.name
                    })]
                }), (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.name
                })]
            })]
        })
    }
}