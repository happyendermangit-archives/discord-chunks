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
        r = n("42203"),
        s = n("305961"),
        i = n("476263"),
        d = n("782340"),
        u = n("946565"),
        o = e => {
            let {
                entry: t
            } = e, n = r.default.getChannel(t.channelId);
            if (null == n) return null;
            let o = s.default.getGuild(n.guild_id);
            return null == o ? null : (0, a.jsxs)("div", {
                className: u.container,
                children: [(0, a.jsx)(l.Heading, {
                    className: u.header,
                    variant: "heading-sm/semibold",
                    children: d.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                }), (0, a.jsxs)("div", {
                    className: u.guildContainer,
                    children: [(0, a.jsxs)("div", {
                        className: u.hubInfo,
                        children: [(0, a.jsx)(i.default, {
                            guild: o,
                            size: i.default.Sizes.MINI,
                            className: u.hubIcon
                        }), (0, a.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: o.name
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