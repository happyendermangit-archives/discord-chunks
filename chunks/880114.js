function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("65597"),
        a = n("77078"),
        s = n("535013"),
        r = n("915639"),
        o = n("476263"),
        u = n("153769"),
        d = n("299039"),
        c = n("782340"),
        f = n("687941");

    function m(e) {
        let {
            userId: t,
            headingClassName: n,
            textClassName: m,
            guild: p,
            guildMember: h
        } = e, E = (0, i.default)([r.default], () => r.default.locale), g = null != p && null != h;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(a.Heading, {
                variant: "eyebrow",
                className: n,
                children: g ? c.default.Messages.USER_PROFILE_MEMBER_SINCE : c.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
            }), (0, l.jsxs)("div", {
                className: f.memberSinceContainer,
                children: [g && (0, l.jsx)(a.Tooltip, {
                    text: c.default.Messages.DISCORD_NAME,
                    children: e => (0, l.jsx)(u.default, {
                        ...e,
                        className: f.discordIcon
                    })
                }), (0, l.jsx)(a.Text, {
                    className: m,
                    variant: "text-sm/normal",
                    children: (0, s.getCreatedAtDate)(d.default.extractTimestamp(t), E)
                }), null != p && null != h && (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: f.divider
                    }), (0, l.jsx)(a.Tooltip, {
                        text: p.name,
                        children: e => (0, l.jsx)(o.default, {
                            ...e,
                            guild: p,
                            size: o.default.Sizes.SMOL
                        })
                    }), (0, l.jsx)(a.Text, {
                        className: m,
                        variant: "text-sm/normal",
                        children: (0, s.getCreatedAtDate)(h.joinedAt, E)
                    })]
                })]
            })]
        })
    }
}