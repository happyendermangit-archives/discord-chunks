function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("399606"),
        s = n("481060"),
        a = n("275759"),
        o = n("706454"),
        l = n("346656"),
        u = n("68972"),
        d = n("709054"),
        _ = n("689938"),
        c = n("590354");

    function E(e) {
        let {
            userId: t,
            headingClassName: n,
            textClassName: E,
            guild: I,
            guildMember: T
        } = e, f = (0, r.useStateFromStores)([o.default], () => o.default.locale), S = null != I && null != T;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.Heading, {
                variant: "eyebrow",
                className: n,
                children: S ? _.default.Messages.USER_PROFILE_MEMBER_SINCE : _.default.Messages.USER_PROFILE_DISCORD_MEMBER_SINCE
            }), (0, i.jsxs)("div", {
                className: c.memberSinceContainer,
                children: [S && (0, i.jsx)(s.Tooltip, {
                    text: _.default.Messages.DISCORD_NAME,
                    children: e => (0, i.jsx)(u.default, {
                        ...e,
                        className: c.discordIcon
                    })
                }), (0, i.jsx)(s.Text, {
                    className: E,
                    variant: "text-sm/normal",
                    children: (0, a.getCreatedAtDate)(d.default.extractTimestamp(t), f)
                }), null != I && null != T && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: c.divider
                    }), (0, i.jsx)(s.Tooltip, {
                        text: I.name,
                        children: e => (0, i.jsx)(l.default, {
                            ...e,
                            guild: I,
                            size: l.default.Sizes.SMOL
                        })
                    }), (0, i.jsx)(s.Text, {
                        className: E,
                        variant: "text-sm/normal",
                        children: (0, a.getCreatedAtDate)(T.joinedAt, f)
                    })]
                })]
            })]
        })
    }
}