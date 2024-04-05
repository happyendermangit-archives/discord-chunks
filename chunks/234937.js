function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("442837"),
        r = n("481060"),
        s = n("430824"),
        i = n("346656"),
        d = n("689938"),
        o = n("325468");
    t.default = e => {
        let {
            event: t
        } = e, n = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id));
        return null == n ? null : (0, a.jsxs)("div", {
            className: o.container,
            children: [(0, a.jsx)(r.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: d.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
            }), (0, a.jsxs)("div", {
                className: o.guildContainer,
                children: [(0, a.jsxs)("div", {
                    className: o.guildInfo,
                    children: [(0, a.jsx)(i.default, {
                        guild: n,
                        size: i.default.Sizes.MINI,
                        className: o.guildIcon
                    }), (0, a.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: n.name
                    })]
                }), (0, a.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.name
                })]
            })]
        })
    }
}