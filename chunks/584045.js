function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("481060"),
        o = n("129861"),
        l = n("963202"),
        u = n("979264"),
        d = n("969832"),
        _ = n("51144"),
        c = n("659101"),
        E = n("981631"),
        I = n("689938"),
        T = n("749853");

    function f(e) {
        let {
            user: t,
            shouldCopyOnClick: n,
            nickname: r,
            pronouns: f,
            usernameIcon: S,
            identityCTA: h,
            className: A,
            isTryItOut: m = !1,
            lastSection: N
        } = e, p = (0, l.useIsInUserClanExperiment)();
        return (0, i.jsxs)(c.default, {
            className: a()(T.container, A),
            lastSection: N,
            children: [(0, i.jsxs)("div", {
                className: n ? T.copiableNameTag : void 0,
                children: [(0, i.jsx)(d.CopiableField, {
                    className: T.copiableField,
                    copyMetaData: "User Tag",
                    copyTooltip: I.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    copyValue: _.default.getUserTag(t, {
                        decoration: "never",
                        identifiable: "always"
                    }),
                    showCopyIcon: !0,
                    disableCopy: !n,
                    children: (0, i.jsxs)("div", {
                        className: T.userText,
                        children: [null != r ? (0, i.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            className: T.nickname,
                            children: r
                        }) : null, (0, i.jsx)(o.default, {
                            usernameIcon: S,
                            user: t,
                            forceUsername: !0,
                            forcePomelo: m,
                            className: null == r ? T.userTagNoNickname : T.userTagWithNickname,
                            usernameClass: null == r ? T.userTagUsernameNoNickname : T.userTagUsernameBase,
                            discriminatorClass: null == r ? T.userTagDiscriminatorNoNickname : T.discrimBase,
                            botClass: null == r ? T.headerBotTag : T.headerBotTagWithNickname
                        }), h]
                    })
                }), null != f && "" !== f && (0, i.jsx)(s.Tooltip, {
                    text: I.default.Messages.USER_PROFILE_PRONOUNS,
                    children: e => (0, i.jsx)(s.Text, {
                        ...e,
                        variant: "text-sm/normal",
                        className: T.pronouns,
                        children: f
                    })
                })]
            }), p && (0, i.jsx)("div", {
                className: T.clanTag,
                children: (0, i.jsx)(u.default, {
                    clan: null,
                    userId: t.id,
                    inline: !1,
                    source: E.AnalyticsSections.PROFILE_POPOUT
                })
            })]
        })
    }
}