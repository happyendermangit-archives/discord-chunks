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
    var s = n("414456"),
        r = n.n(s),
        l = n("79798"),
        a = n("988268"),
        o = n("293005"),
        u = e => {
            let {
                name: t,
                discriminator: n,
                invertBotTagColor: s,
                nameColor: a,
                className: u,
                botType: c,
                usernameClass: d,
                discriminatorClass: f,
                botClass: h,
                botVerified: v = !1,
                style: E,
                useRemSizes: C = !1,
                usernameIcon: p
            } = e;
            return (0, i.jsxs)("div", {
                className: r(u, o.nameTag),
                style: E,
                children: [(0, i.jsxs)("span", {
                    className: r(o.username, d),
                    style: null != a ? {
                        color: a
                    } : void 0,
                    children: [p, t]
                }), null != n ? (0, i.jsxs)("span", {
                    className: null != f ? f : void 0,
                    children: ["#", n]
                }) : null, null != c ? (0, i.jsx)(l.default, {
                    type: c,
                    invertColor: s,
                    className: r(h, o.bot),
                    verified: v,
                    useRemSizes: C
                }) : null]
            })
        }
}