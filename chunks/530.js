function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("129861"),
        l = n("5192"),
        u = n("690612");

    function d(e) {
        let {
            user: t,
            guildId: n,
            channelId: r,
            usernameIcon: d,
            tags: _,
            nicknameIcon: c,
            className: E,
            nicknameVariant: I = "heading-lg/bold"
        } = e, T = t.isNonUserBot() ? null : l.default.getName(n, r, t);
        return (0, i.jsxs)("div", {
            className: s()(u.container, E),
            children: [null != T ? (0, i.jsxs)("div", {
                className: u.usernameRow,
                children: [(0, i.jsx)(a.Heading, {
                    className: u.nickname,
                    variant: I,
                    children: T
                }), c]
            }) : null, (0, i.jsxs)("div", {
                className: u.tags,
                children: [(0, i.jsx)(o.default, {
                    user: t,
                    usernameIcon: d,
                    forceUsername: !0,
                    className: null == T ? u.userTagNoNickname : u.userTagWithNickname,
                    usernameClass: null == T ? u.userTagUsernameNoNickname : u.userTagUsernameBase,
                    discriminatorClass: null == T ? u.userTagDiscriminatorNoNickname : u.discrimBase,
                    botClass: null == T ? u.headerBotTag : u.headerBotTagWithNickname
                }), _]
            })]
        })
    }
}