function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("145079"),
        o = n("618927"),
        u = n("158998"),
        d = n("777003"),
        c = n("782340"),
        f = n("918829");

    function m(e) {
        let {
            user: t,
            shouldCopyOnClick: n,
            nickname: l,
            pronouns: m,
            usernameIcon: p,
            identityCTA: h,
            className: x,
            isTryItOut: E = !1,
            lastSection: y
        } = e;
        return (0, i.jsx)(d.default, {
            className: a(f.container, x),
            lastSection: y,
            children: (0, i.jsxs)("div", {
                className: n ? f.copiableNameTag : void 0,
                children: [(0, i.jsx)(o.CopiableField, {
                    className: f.copiableField,
                    copyMetaData: "User Tag",
                    copyTooltip: c.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    copyValue: u.default.getUserTag(t, {
                        decoration: "never",
                        identifiable: "always"
                    }),
                    showCopyIcon: !0,
                    disableCopy: !n,
                    children: (0, i.jsxs)("div", {
                        className: f.userText,
                        children: [null != l ? (0, i.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            className: f.nickname,
                            children: l
                        }) : null, (0, i.jsx)(r.default, {
                            usernameIcon: p,
                            user: t,
                            forceUsername: !0,
                            forcePomelo: E,
                            className: null == l ? f.userTagNoNickname : f.userTagWithNickname,
                            usernameClass: null == l ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                            discriminatorClass: null == l ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                            botClass: null == l ? f.headerBotTag : f.headerBotTagWithNickname
                        }), h]
                    })
                }), null != m && "" !== m && (0, i.jsx)(s.Tooltip, {
                    text: c.default.Messages.USER_PROFILE_PRONOUNS,
                    children: e => (0, i.jsx)(s.Text, {
                        ...e,
                        variant: "text-sm/normal",
                        className: f.pronouns,
                        children: m
                    })
                })]
            })
        })
    }
}