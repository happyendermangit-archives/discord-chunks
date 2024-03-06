function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        BotTypes: function() {
            return k.BotTagTypes
        },
        default: function() {
            return p
        }
    });
    var s = t("37983");
    t("884691");
    var a = t("414456"),
        o = t.n(a),
        y = t("79798"),
        k = t("988268"),
        d = t("293005"),
        p = i => {
            let {
                name: x,
                discriminator: t,
                invertBotTagColor: a,
                nameColor: k,
                className: p,
                botType: r,
                usernameClass: e,
                discriminatorClass: m,
                botClass: n,
                botVerified: c = !1,
                style: l,
                useRemSizes: f = !1,
                usernameIcon: h
            } = i;
            return (0, s.jsxs)("div", {
                className: o(p, d.nameTag),
                style: l,
                children: [(0, s.jsxs)("span", {
                    className: o(d.username, e),
                    style: null != k ? {
                        color: k
                    } : void 0,
                    children: [h, x]
                }), null != t ? (0, s.jsxs)("span", {
                    className: null != m ? m : void 0,
                    children: ["#", t]
                }) : null, null != r ? (0, s.jsx)(y.default, {
                    type: r,
                    invertColor: a,
                    className: o(n, d.bot),
                    verified: c,
                    useRemSizes: f
                }) : null]
            })
        }
}