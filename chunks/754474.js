function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        BotTypes: function() {
            return d.BotTagTypes
        },
        default: function() {
            return r
        }
    });
    var s = t("37983");
    t("884691");
    var a = t("414456"),
        o = t.n(a),
        y = t("79798"),
        d = t("988268"),
        k = t("293005"),
        r = i => {
            let {
                name: x,
                discriminator: t,
                invertBotTagColor: a,
                nameColor: d,
                className: r,
                botType: e,
                usernameClass: p,
                discriminatorClass: n,
                botClass: m,
                botVerified: c = !1,
                style: l,
                useRemSizes: f = !1,
                usernameIcon: _
            } = i;
            return (0, s.jsxs)("div", {
                className: o(r, k.nameTag),
                style: l,
                children: [(0, s.jsxs)("span", {
                    className: o(k.username, p),
                    style: null != d ? {
                        color: d
                    } : void 0,
                    children: [_, x]
                }), null != t ? (0, s.jsxs)("span", {
                    className: null != n ? n : void 0,
                    children: ["#", t]
                }) : null, null != e ? (0, s.jsx)(y.default, {
                    type: e,
                    invertColor: a,
                    className: o(m, k.bot),
                    verified: c,
                    useRemSizes: f
                }) : null]
            })
        }
}