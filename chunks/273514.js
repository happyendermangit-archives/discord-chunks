function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("592125"),
        a = n("430824"),
        o = n("346656"),
        l = n("689938"),
        u = n("939414");
    t.default = e => {
        let {
            entry: t
        } = e, n = s.default.getChannel(t.channelId);
        if (null == n) return null;
        let d = a.default.getGuild(n.guild_id);
        return null == d ? null : (0, i.jsxs)("div", {
            className: u.container,
            children: [(0, i.jsx)(r.Heading, {
                className: u.header,
                variant: "heading-sm/semibold",
                children: l.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
            }), (0, i.jsxs)("div", {
                className: u.guildContainer,
                children: [(0, i.jsxs)("div", {
                    className: u.hubInfo,
                    children: [(0, i.jsx)(o.default, {
                        guild: d,
                        size: o.default.Sizes.MINI,
                        className: u.hubIcon
                    }), (0, i.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: d.name
                    })]
                }), (0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.name
                })]
            })]
        })
    }
}