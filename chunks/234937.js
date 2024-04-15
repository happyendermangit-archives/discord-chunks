function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("430824"),
        o = n("346656"),
        l = n("689938"),
        u = n("325468");
    t.default = e => {
        let {
            event: t
        } = e, n = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(t.guild_id));
        return null == n ? null : (0, i.jsxs)("div", {
            className: u.container,
            children: [(0, i.jsx)(s.Heading, {
                className: u.header,
                variant: "heading-sm/semibold",
                children: l.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
            }), (0, i.jsxs)("div", {
                className: u.guildContainer,
                children: [(0, i.jsxs)("div", {
                    className: u.guildInfo,
                    children: [(0, i.jsx)(o.default, {
                        guild: n,
                        size: o.default.Sizes.MINI,
                        className: u.guildIcon
                    }), (0, i.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: n.name
                    })]
                }), (0, i.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.name
                })]
            })]
        })
    }
}