function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        o = n("77078"),
        u = n("476263"),
        d = n("305130");

    function c(e) {
        let {
            className: t,
            maxGuilds: n,
            guilds: l,
            onFocus: s,
            onClick: c,
            size: f = u.default.Sizes.SMALLER,
            hideOverflowCount: p = !1,
            disableGuildNameTooltip: m = !1
        } = e;
        return l.length <= 0 ? null : (0, i.jsx)("div", {
            className: a(t, d.avatars),
            children: function() {
                let e = r(l).take(n).map(e => {
                        let t = e.name;
                        return m ? (0, i.jsx)("div", {
                            className: d.avatar,
                            children: (0, i.jsx)(u.default, {
                                guild: e,
                                onClick: c,
                                size: f,
                                showTooltip: !1
                            })
                        }) : (0, i.jsx)(o.TooltipContainer, {
                            text: t,
                            className: d.avatar,
                            children: (0, i.jsx)(u.default, {
                                guild: e,
                                onClick: c,
                                size: f
                            })
                        }, e.id)
                    }).value(),
                    t = l.length - n;
                return t > 0 && !p && (e[e.length - 1] = (0, i.jsxs)(o.Button, {
                    className: a(d.avatar, d.overflow),
                    onFocus: s,
                    onClick: e => null == c ? void 0 : c(e),
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.NONE,
                    children: ["+", t + 1]
                })), e
            }()
        })
    }
}