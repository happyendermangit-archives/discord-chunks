function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("129861"),
        l = n("659101"),
        u = n("689938"),
        d = n("395274");

    function _(e) {
        let {
            user: t,
            nickname: n,
            pronouns: r,
            usernameIcon: _,
            className: c,
            isTryItOut: E = !1,
            lastSection: I
        } = e;
        return (0, i.jsx)(l.default, {
            className: s()(d.container, c),
            lastSection: I,
            children: (0, i.jsxs)("div", {
                className: d.userText,
                children: [null != n ? (0, i.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    className: d.nickname,
                    children: n
                }) : null, (0, i.jsxs)("div", {
                    className: d.flex,
                    children: [(0, i.jsx)(o.default, {
                        usernameIcon: _,
                        user: t,
                        forceUsername: !0,
                        forcePomelo: E,
                        className: null == n ? d.userTagNoNickname : d.userTagWithNickname,
                        usernameClass: null == n ? d.userTagUsernameNoNickname : d.userTagUsernameBase,
                        discriminatorClass: null == n ? d.userTagDiscriminatorNoNickname : d.discrimBase,
                        botClass: null == n ? d.headerBotTag : d.headerBotTagWithNickname
                    }), null != r && "" !== r && (0, i.jsx)(a.Tooltip, {
                        text: u.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, i.jsx)(a.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: d.biteSizePronouns,
                            children: r
                        })
                    })]
                })]
            })
        })
    }
}