function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("145079"),
        o = n("777003"),
        u = n("782340"),
        d = n("364927");

    function c(e) {
        let {
            user: t,
            nickname: n,
            pronouns: l,
            usernameIcon: c,
            className: f,
            isTryItOut: p = !1,
            lastSection: m
        } = e;
        return (0, i.jsx)(o.default, {
            className: a(d.container, f),
            lastSection: m,
            children: (0, i.jsxs)("div", {
                className: d.userText,
                children: [null != n ? (0, i.jsx)(s.Heading, {
                    variant: "heading-lg/semibold",
                    className: d.nickname,
                    children: n
                }) : null, (0, i.jsxs)("div", {
                    className: d.flex,
                    children: [(0, i.jsx)(r.default, {
                        usernameIcon: c,
                        user: t,
                        forceUsername: !0,
                        forcePomelo: p,
                        className: null == n ? d.userTagNoNickname : d.userTagWithNickname,
                        usernameClass: null == n ? d.userTagUsernameNoNickname : d.userTagUsernameBase,
                        discriminatorClass: null == n ? d.userTagDiscriminatorNoNickname : d.discrimBase,
                        botClass: null == n ? d.headerBotTag : d.headerBotTagWithNickname
                    }), null != l && "" !== l && (0, i.jsx)(s.Tooltip, {
                        text: u.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, i.jsx)(s.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: d.biteSizePronouns,
                            children: l
                        })
                    })]
                })]
            })
        })
    }
}