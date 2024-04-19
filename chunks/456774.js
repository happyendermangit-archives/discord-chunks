function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("666188"),
        a = n("940627"),
        o = n("705600"),
        l = n("764864");

    function u(e) {
        let {
            guild: t
        } = e, n = (0, s.default)(t);
        return (0, i.jsx)("div", {
            className: l.container,
            children: (0, i.jsxs)("div", {
                className: l.header,
                children: [n ? (0, i.jsx)(o.default, {
                    guild: t,
                    size: 16,
                    className: l.rowIconV2
                }) : (0, i.jsx)(a.default, {
                    guild: t,
                    size: 20,
                    className: l.rowIcon
                }), (0, i.jsx)(r.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    children: t.name
                })]
            })
        })
    }
}