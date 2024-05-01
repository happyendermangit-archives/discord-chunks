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
        a = n.n(r),
        s = n("481060"),
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
            nicknameIcons: E,
            pronouns: I,
            className: T,
            onOpenProfile: f,
            nicknameVariant: S = "heading-lg/bold",
            pronounsVariant: h = "text-sm/medium"
        } = e, A = e => null == f ? e : (0, i.jsx)(s.Clickable, {
            onClick: f,
            className: d.clickableUsername,
            children: e
        });
        return (0, i.jsxs)("div", {
            className: a()(d.container, T),
            children: [(0, i.jsxs)("div", {
                className: d.usernameRow,
                children: [A((0, i.jsx)(s.Heading, {
                    className: d.nickname,
                    variant: S,
                    children: l.default.getName(n, r, t)
                })), E]
            }), (0, i.jsxs)("div", {
                className: d.tags,
                children: [A((0, i.jsx)(o.default, {
                    user: t,
                    usernameIcon: _,
                    forceUsername: !0,
                    className: d.userTag,
                    usernameClass: d.userTagUsername,
                    discriminatorClass: d.userTagDiscriminator
                })), null != I && I.length > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: d.dotSpacer
                    }), (0, i.jsx)(s.TooltipContainer, {
                        text: u.default.Messages.USER_PROFILE_PRONOUNS,
                        children: (0, i.jsx)(s.Text, {
                            variant: h,
                            className: d.pronouns,
                            children: I
                        })
                    })]
                }), c]
            })]
        })
    }
}