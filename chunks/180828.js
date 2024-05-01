function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BotTypes: function() {
            return o.BotTagTypes
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("467679"),
        o = n("674563"),
        l = n("646344");
    t.default = e => {
        let {
            name: t,
            discriminator: n,
            invertBotTagColor: r,
            nameColor: o,
            className: u,
            botType: d,
            usernameClass: _,
            discriminatorClass: c,
            botClass: E,
            botVerified: I = !1,
            style: T,
            useRemSizes: f = !1,
            usernameIcon: S
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(u, l.nameTag),
            style: T,
            children: [(0, i.jsxs)("span", {
                className: a()(l.username, _),
                style: null != o ? {
                    color: o
                } : void 0,
                children: [S, t]
            }), null != n ? (0, i.jsxs)("span", {
                className: null != c ? c : void 0,
                children: ["#", n]
            }) : null, null != d ? (0, i.jsx)(s.default, {
                type: d,
                invertColor: r,
                className: a()(E, l.bot),
                verified: I,
                useRemSizes: f
            }) : null]
        })
    }
}