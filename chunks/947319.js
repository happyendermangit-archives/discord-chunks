function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("42203"),
        s = n("305961"),
        i = n("476263"),
        d = n("782340"),
        o = n("946565"),
        u = e => {
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