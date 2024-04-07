function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("481060"),
        r = n("430824"),
        s = n("346656"),
        i = n("689938"),
        d = n("656173");
    t.default = e => {
        let {
            stageInstance: t
        } = e, n = r.default.getGuild(t.guild_id);
        return null == n ? null : (0, a.jsxs)("div", {
            className: d.container,
            children: [(0, a.jsx)(l.Heading, {
                className: d.header,
                variant: "heading-sm/semibold",
                children: i.default.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
            }), (0, a.jsxs)("div", {
                className: d.guildContainer,
                children: [(0, a.jsxs)("div", {
                    className: d.guildInfo,
                    children: [(0, a.jsx)(s.default, {
                        guild: n,
                        size: s.default.Sizes.MINI,
                        className: d.guildIcon
                    }), (0, a.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: n.name
                    })]
                }), (0, a.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.topic
                })]
            })]
        })
    }
}