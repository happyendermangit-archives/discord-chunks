function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("735250");
    n("470079");
    var r = n("803997"),
        i = n.n(r),
        s = n("304497"),
        l = n("481060"),
        o = n("26290"),
        u = n("689938"),
        c = n("225687");

    function d(e) {
        let {
            className: t
        } = e;
        return (0, a.jsx)(o.TextBadge, {
            className: i()(t, c.badge),
            disableColor: !0,
            text: (0, a.jsxs)("div", {
                className: c.innerBadge,
                children: [(0, a.jsx)(s.PollsIcon, {
                    className: c.icon,
                    color: l.tokens.colors.INTERACTIVE_ACTIVE
                }), (0, a.jsx)(l.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    children: u.default.Messages.POLL
                })]
            })
        })
    }
}