function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return d
        }
    });
    var n = s("735250");
    s("470079");
    var o = s("481060"),
        l = s("985513"),
        a = s("285952"),
        r = s("819570"),
        i = s("689938"),
        u = s("915812"),
        c = s("949086");

    function d(e) {
        let {
            title: t,
            subtitle: s,
            error: d,
            onSubmit: h,
            onCancel: f
        } = e;
        return (0, n.jsxs)(a.default, {
            direction: a.default.Direction.VERTICAL,
            children: [(0, n.jsx)(r.Title, {
                className: c.marginBottom8,
                children: t
            }), (0, n.jsx)(r.SubTitle, {
                className: u.subTitle,
                children: s
            }), (0, n.jsxs)("div", {
                children: [(0, n.jsx)(l.default, {
                    inputClassName: u.codeInput,
                    onSubmit: h
                }), null != d ? (0, n.jsx)(o.Text, {
                    className: u.error,
                    variant: "text-sm/normal",
                    children: d
                }) : null]
            }), null != f && (0, n.jsx)(o.Button, {
                className: u.button,
                onClick: f,
                color: o.Button.Colors.PRIMARY,
                children: i.default.Messages.CANCEL
            })]
        })
    }
}