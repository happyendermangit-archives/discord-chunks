function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormLabel: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("766646"),
        o = n("154921"),
        l = n("689938"),
        u = n("636176");

    function d(e) {
        let {
            children: t,
            className: n,
            disabled: r,
            required: d = !1,
            ..._
        } = e;
        return (0, i.jsxs)(o.default, {
            tag: "label",
            color: o.default.Colors.HEADER_SECONDARY,
            className: s()(u.label, n, {
                [u.defaultMargin]: null == n,
                [u.disabled]: r
            }),
            ..._,
            children: [t, d && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("span", {
                    className: u.required,
                    "aria-hidden": !0,
                    children: "*"
                }), (0, i.jsx)(a.HiddenVisually, {
                    children: l.default.Messages.REQUIRED
                })]
            })]
        })
    }
}