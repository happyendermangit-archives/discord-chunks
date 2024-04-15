function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("430824"),
        a = n("346656"),
        o = n("689938"),
        l = n("656173");
    t.default = e => {
        let {
            stageInstance: t
        } = e, n = s.default.getGuild(t.guild_id);
        return null == n ? null : (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsx)(r.Heading, {
                className: l.header,
                variant: "heading-sm/semibold",
                children: o.default.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
            }), (0, i.jsxs)("div", {
                className: l.guildContainer,
                children: [(0, i.jsxs)("div", {
                    className: l.guildInfo,
                    children: [(0, i.jsx)(a.default, {
                        guild: n,
                        size: a.default.Sizes.MINI,
                        className: l.guildIcon
                    }), (0, i.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: n.name
                    })]
                }), (0, i.jsx)(r.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.topic
                })]
            })]
        })
    }
}