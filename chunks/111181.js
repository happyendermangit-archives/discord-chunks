function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("446674"),
        r = n("77078"),
        s = n("305961"),
        i = n("476263"),
        d = n("782340"),
        u = n("705923"),
        o = e => {
            let {
                event: t
            } = e, n = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id));
            return null == n ? null : (0, a.jsxs)("div", {
                className: u.container,
                children: [(0, a.jsx)(r.Heading, {
                    className: u.header,
                    variant: "heading-sm/semibold",
                    children: d.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
                }), (0, a.jsxs)("div", {
                    className: u.guildContainer,
                    children: [(0, a.jsxs)("div", {
                        className: u.guildInfo,
                        children: [(0, a.jsx)(i.default, {
                            guild: n,
                            size: i.default.Sizes.MINI,
                            className: u.guildIcon
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