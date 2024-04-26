function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("129861"),
        l = n("5192"),
        u = n("689938"),
        d = n("173110");

    function _(e) {
        let {
            user: t,
            guildId: n,
            channelId: r,
            usernameIcon: _,
            tags: c,
            nicknameIcon: E,
            pronouns: I,
            className: T,
            nicknameVariant: f = "heading-lg/bold",
            pronounsVariant: S = "text-sm/medium"
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(d.container, T),
            children: [(0, i.jsxs)("div", {
                className: d.usernameRow,
                children: [(0, i.jsx)(a.Heading, {
                    className: d.nickname,
                    variant: f,
                    children: l.default.getName(n, r, t)
                }), E]
            }), (0, i.jsxs)("div", {
                className: d.tags,
                children: [(0, i.jsx)(o.default, {
                    user: t,
                    usernameIcon: _,
                    forceUsername: !0,
                    className: d.userTag,
                    usernameClass: d.userTagUsername,
                    discriminatorClass: d.userTagDiscriminator
                }), null != I && I.length > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: d.dotSpacer
                    }), (0, i.jsx)(a.TooltipContainer, {
                        text: u.default.Messages.USER_PROFILE_PRONOUNS,
                        children: (0, i.jsx)(a.Text, {
                            variant: S,
                            className: d.userTag,
                            children: I
                        })
                    })]
                }), c]
            })]
        })
    }
}