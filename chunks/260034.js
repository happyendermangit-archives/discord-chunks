function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Heading: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("993365"),
        l = n("337033"),
        u = n("787151");
    let d = r.forwardRef(function(e, t) {
        let {
            variant: n,
            className: r,
            ...a
        } = e, d = (0, l.usePrivateHeadingLevel)(), _ = "h".concat(Math.min(d, 6));
        return (0, i.jsx)(o.Text, {
            ref: t,
            variant: n,
            tag: _,
            className: s()(u.defaultColor, r),
            ...d > 6 ? {
                "data-excessive-heading-level": d
            } : {},
            ...a
        })
    })
}