function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("129861"),
        l = n("963202"),
        u = n("979264"),
        d = n("969832"),
        _ = n("51144"),
        c = n("659101"),
        E = n("689938"),
        I = n("614076");

    function T(e) {
        let {
            user: t,
            shouldCopyOnClick: n,
            nickname: r,
            pronouns: T,
            usernameIcon: f,
            identityCTA: S,
            className: h,
            isTryItOut: A = !1,
            lastSection: m
        } = e, N = (0, l.useIsInUserClanExperiment)();
        return (0, i.jsxs)(c.default, {
            className: s()(I.container, h),
            lastSection: m,
            children: [(0, i.jsxs)("div", {
                className: n ? I.copiableNameTag : void 0,
                children: [(0, i.jsx)(d.CopiableField, {
                    className: I.copiableField,
                    copyMetaData: "User Tag",
                    copyTooltip: E.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    copyValue: _.default.getUserTag(t, {
                        decoration: "never",
                        identifiable: "always"
                    }),
                    showCopyIcon: !0,
                    disableCopy: !n,
                    children: (0, i.jsxs)("div", {
                        className: I.userText,
                        children: [null != r ? (0, i.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            className: I.nickname,
                            children: r
                        }) : null, (0, i.jsx)(o.default, {
                            usernameIcon: f,
                            user: t,
                            forceUsername: !0,
                            forcePomelo: A,
                            className: null == r ? I.userTagNoNickname : I.userTagWithNickname,
                            usernameClass: null == r ? I.userTagUsernameNoNickname : I.userTagUsernameBase,
                            discriminatorClass: null == r ? I.userTagDiscriminatorNoNickname : I.discrimBase,
                            botClass: null == r ? I.headerBotTag : I.headerBotTagWithNickname
                        }), S]
                    })
                }), null != T && "" !== T && (0, i.jsx)(a.Tooltip, {
                    text: E.default.Messages.USER_PROFILE_PRONOUNS,
                    children: e => (0, i.jsx)(a.Text, {
                        ...e,
                        variant: "text-sm/normal",
                        className: I.pronouns,
                        children: T
                    })
                })]
            }), N && (0, i.jsx)("div", {
                className: I.clanTag,
                children: (0, i.jsx)(u.default, {
                    clan: null,
                    userId: t.id,
                    inline: !1
                })
            })]
        })
    }
}