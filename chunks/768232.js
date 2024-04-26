function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("304497"),
        o = n("481060"),
        l = n("26290"),
        u = n("689938"),
        d = n("279705");

    function _(e) {
        let {
            className: t
        } = e;
        return (0, i.jsx)(l.TextBadge, {
            className: s()(t, d.badge),
            disableColor: !0,
            text: (0, i.jsxs)("div", {
                className: d.innerBadge,
                children: [(0, i.jsx)(a.PollsIcon, {
                    className: d.icon,
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    children: u.default.Messages.POLL
                })]
            })
        })
    }
}