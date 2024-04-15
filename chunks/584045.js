function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("129861"),
        l = n("969832"),
        u = n("51144"),
        d = n("659101"),
        _ = n("689938"),
        c = n("674582");

    function E(e) {
        let {
            user: t,
            shouldCopyOnClick: n,
            nickname: r,
            pronouns: E,
            usernameIcon: I,
            identityCTA: T,
            className: f,
            isTryItOut: S = !1,
            lastSection: h
        } = e;
        return (0, i.jsx)(d.default, {
            className: s()(c.container, f),
            lastSection: h,
            children: (0, i.jsxs)("div", {
                className: n ? c.copiableNameTag : void 0,
                children: [(0, i.jsx)(l.CopiableField, {
                    className: c.copiableField,
                    copyMetaData: "User Tag",
                    copyTooltip: _.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    copyValue: u.default.getUserTag(t, {
                        decoration: "never",
                        identifiable: "always"
                    }),
                    showCopyIcon: !0,
                    disableCopy: !n,
                    children: (0, i.jsxs)("div", {
                        className: c.userText,
                        children: [null != r ? (0, i.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            className: c.nickname,
                            children: r
                        }) : null, (0, i.jsx)(o.default, {
                            usernameIcon: I,
                            user: t,
                            forceUsername: !0,
                            forcePomelo: S,
                            className: null == r ? c.userTagNoNickname : c.userTagWithNickname,
                            usernameClass: null == r ? c.userTagUsernameNoNickname : c.userTagUsernameBase,
                            discriminatorClass: null == r ? c.userTagDiscriminatorNoNickname : c.discrimBase,
                            botClass: null == r ? c.headerBotTag : c.headerBotTagWithNickname
                        }), T]
                    })
                }), null != E && "" !== E && (0, i.jsx)(a.Tooltip, {
                    text: _.default.Messages.USER_PROFILE_PRONOUNS,
                    children: e => (0, i.jsx)(a.Text, {
                        ...e,
                        variant: "text-sm/normal",
                        className: c.pronouns,
                        children: E
                    })
                })]
            })
        })
    }
}