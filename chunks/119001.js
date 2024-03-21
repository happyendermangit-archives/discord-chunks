function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        i = n("167115"),
        l = n("77078"),
        o = n("956089"),
        u = n("782340"),
        c = n("320692");

    function d(e) {
        let {
            className: t
        } = e;
        return (0, a.jsx)(o.TextBadge, {
            className: r(t, c.badge),
            disableColor: !0,
            text: (0, a.jsxs)("div", {
                className: c.innerBadge,
                children: [(0, a.jsx)(i.PollsIcon, {
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