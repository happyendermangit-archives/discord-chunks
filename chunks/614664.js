function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("129861"),
        a = n("689938"),
        o = n("395274");

    function l(e) {
        let {
            user: t,
            nickname: n,
            pronouns: l,
            usernameIcon: u
        } = e;
        return (0, i.jsx)("div", {
            className: o.container,
            children: (0, i.jsxs)("div", {
                className: o.userText,
                children: [null != n ? (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    className: o.nickname,
                    children: n
                }) : null, (0, i.jsxs)("div", {
                    className: o.flex,
                    children: [(0, i.jsx)(s.default, {
                        usernameIcon: u,
                        user: t,
                        forceUsername: !0,
                        className: null == n ? o.userTagNoNickname : o.userTagWithNickname,
                        usernameClass: null == n ? o.userTagUsernameNoNickname : o.userTagUsernameBase,
                        discriminatorClass: null == n ? o.userTagDiscriminatorNoNickname : o.discrimBase,
                        botClass: null == n ? o.headerBotTag : o.headerBotTagWithNickname
                    }), null != l && "" !== l && (0, i.jsx)(r.Tooltip, {
                        text: a.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, i.jsx)(r.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: o.biteSizePronouns,
                            children: l
                        })
                    })]
                })]
            })
        })
    }
}