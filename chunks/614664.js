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
        a = n("184325"),
        o = n("689938"),
        l = n("395274");

    function u(e) {
        let {
            user: t,
            guildId: n,
            nickname: u,
            pronouns: d,
            usernameIcon: _
        } = e;
        return (0, i.jsx)("div", {
            className: l.container,
            children: (0, i.jsxs)("div", {
                className: l.userText,
                children: [null != u ? (0, i.jsx)(r.Heading, {
                    variant: "heading-lg/semibold",
                    className: l.nickname,
                    children: u
                }) : null, (0, i.jsxs)("div", {
                    className: l.flexRow,
                    children: [(0, i.jsx)(s.default, {
                        usernameIcon: _,
                        user: t,
                        forceUsername: !0,
                        className: null == u ? l.userTagNoNickname : l.userTagWithNickname,
                        usernameClass: null == u ? l.userTagUsernameNoNickname : l.userTagUsernameBase,
                        discriminatorClass: null == u ? l.userTagDiscriminatorNoNickname : l.discrimBase,
                        botClass: null == u ? l.headerBotTag : l.headerBotTagWithNickname
                    }), null != d && "" !== d && (0, i.jsx)(r.Tooltip, {
                        text: o.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, i.jsx)(r.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: l.biteSizePronouns,
                            children: d
                        })
                    }), (0, i.jsx)(a.default, {
                        className: l.badges,
                        user: t,
                        guildId: n,
                        size: a.BadgeSizes.SIZE_20
                    })]
                })]
            })
        })
    }
}