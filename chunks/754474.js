function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BotTypes: function() {
            return a.BotTagTypes
        },
        default: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        l = n("79798"),
        a = n("988268"),
        o = n("293005"),
        u = e => {
            let {
                name: t,
                discriminator: n,
                invertBotTagColor: r,
                nameColor: a,
                className: u,
                botType: c,
                usernameClass: d,
                discriminatorClass: f,
                botClass: h,
                botVerified: v = !1,
                style: p,
                useRemSizes: C = !1,
                usernameIcon: E
            } = e;
            return (0, i.jsxs)("div", {
                className: s(u, o.nameTag),
                style: p,
                children: [(0, i.jsxs)("span", {
                    className: s(o.username, d),
                    style: null != a ? {
                        color: a
                    } : void 0,
                    children: [E, t]
                }), null != n ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n]
                }) : null, null != c ? (0, i.jsx)(l.default, {
                    type: c,
                    invertColor: r,
                    className: s(h, o.bot),
                    verified: v,
                    useRemSizes: C
                }) : null]
            })
        }
}