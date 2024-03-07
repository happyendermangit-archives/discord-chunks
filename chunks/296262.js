function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("917351"),
        r = n.n(s),
        o = n("77078"),
        u = n("476263"),
        d = n("305130");

    function c(e) {
        let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: s,
            onClick: c,
            size: f = u.default.Sizes.SMALLER,
            hideOverflowCount: m = !1
        } = e;
        return i.length <= 0 ? null : (0, l.jsx)("div", {
            className: a(t, d.avatars),
            children: function() {
                let e = r(i).take(n).map(e => {
                        let t = e.name;
                        return (0, l.jsx)(o.TooltipContainer, {
                            text: t,
                            className: d.avatar,
                            children: (0, l.jsx)(u.default, {
                                guild: e,
                                onClick: c,
                                size: f
                            })
                        }, e.id)
                    }).value(),
                    t = i.length - n;
                return t > 0 && !m && (e[e.length - 1] = (0, l.jsxs)(o.Button, {
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