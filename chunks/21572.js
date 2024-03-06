function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return d
        }
    });
    var n = s("37983");
    s("884691");
    var o = s("77078"),
        a = s("794538"),
        l = s("145131"),
        r = s("124969"),
        i = s("782340"),
        u = s("619667"),
        c = s("890957");

    function d(e) {
        let {
            title: t,
            subtitle: s,
            error: d,
            onSubmit: h,
            onCancel: C
        } = e;
        return (0, n.jsxs)(l.default, {
            direction: l.default.Direction.VERTICAL,
            children: [(0, n.jsx)(r.Title, {
                className: c.marginBottom8,
                children: t
            }), (0, n.jsx)(r.SubTitle, {
                className: u.subTitle,
                children: s
            }), (0, n.jsxs)("div", {
                children: [(0, n.jsx)(a.default, {
                    inputClassName: u.codeInput,
                    onSubmit: h
                }), null != d ? (0, n.jsx)(o.Text, {
                    className: u.error,
                    variant: "text-sm/normal",
                    children: d
                }) : null]
            }), null != C && (0, n.jsx)(o.Button, {
                className: u.button,
                onClick: C,
                color: o.Button.Colors.PRIMARY,
                children: i.default.Messages.CANCEL
            })]
        })
    }
}