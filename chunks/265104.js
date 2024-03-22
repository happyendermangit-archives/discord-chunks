function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("305961"),
        s = n("476263"),
        i = n("782340"),
        d = n("845673"),
        o = e => {
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