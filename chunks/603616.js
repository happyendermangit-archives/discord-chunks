function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormLabel: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        a = n("741662"),
        o = n("258078"),
        l = n("782340"),
        u = n("665977");

    function c(e) {
        let {
            children: t,
            className: n,
            disabled: r,
            required: c = !1,
            ...d
        } = e;
        return (0, i.jsxs)(o.default, {
            tag: "label",
            color: o.default.Colors.HEADER_SECONDARY,
            className: s(u.label, n, {
                [u.defaultMargin]: null == n,
                [u.disabled]: r
            }),
            ...d,
            children: [t, c && (0, i.jsxs)(i.Fragment, {
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