function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
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
            icon: d,
            tags: _,
            className: c,
            nicknameVariant: E = "heading-lg/bold"
        } = e, I = t.isNonUserBot() ? null : l.default.getName(n, r, t);
        return (0, i.jsxs)("div", {
            className: s()(u.container, c),
            children: [null != I && (0, i.jsx)(a.Heading, {
                className: u.nickname,
                variant: E,
                children: I
            }), (0, i.jsxs)("div", {
                className: u.tags,
                children: [(0, i.jsx)(o.default, {
                    user: t,
                    usernameIcon: d,
                    forceUsername: !0,
                    className: null == I ? u.userTagNoNickname : u.userTagWithNickname,
                    usernameClass: null == I ? u.userTagUsernameNoNickname : u.userTagUsernameBase,
                    discriminatorClass: null == I ? u.userTagDiscriminatorNoNickname : u.discrimBase,
                    botClass: null == I ? u.headerBotTag : u.headerBotTagWithNickname
                }), _]
            })]
        })
    }
}