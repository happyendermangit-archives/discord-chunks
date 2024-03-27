function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("129861"),
        a = n("659101"),
        o = n("689938"),
        l = n("395274");

    function u(e) {
        let {
            user: t,
            nickname: n,
            pronouns: u,
            usernameIcon: d,
            isTryItOut: _ = !1,
            lastSection: c
        } = e;
        return (0, i.jsx)(a.default, {
            className: l.container,
            lastSection: c,
            children: (0, i.jsxs)("div", {
                className: l.userText,
                children: [null != n ? (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    className: l.nickname,
                    children: n
                }) : null, (0, i.jsxs)("div", {
                    className: l.flex,
                    children: [(0, i.jsx)(s.default, {
                        usernameIcon: d,
                        user: t,
                        forceUsername: !0,
                        forcePomelo: _,
                        className: null == n ? l.userTagNoNickname : l.userTagWithNickname,
                        usernameClass: null == n ? l.userTagUsernameNoNickname : l.userTagUsernameBase,
                        discriminatorClass: null == n ? l.userTagDiscriminatorNoNickname : l.discrimBase,
                        botClass: null == n ? l.headerBotTag : l.headerBotTagWithNickname
                    }), null != u && "" !== u && (0, i.jsx)(r.Tooltip, {
                        text: o.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, i.jsx)(r.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: l.biteSizePronouns,
                            children: u
                        })
                    })]
                })]
            })
        })
    }
}