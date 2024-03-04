function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormLabel: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("741662"),
        o = n("258078"),
        l = n("782340"),
        u = n("665977");

    function d(e) {
        let {
            children: t,
            className: n,
            disabled: s,
            required: d = !1,
            ...c
        } = e;
        return (0, i.jsxs)(o.default, {
            tag: "label",
            color: o.default.Colors.HEADER_SECONDARY,
            className: r(u.label, n, {
                [u.defaultMargin]: null == n,
                [u.disabled]: s
            }),
            ...c,
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