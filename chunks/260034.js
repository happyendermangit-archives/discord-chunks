function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Heading: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("993365"),
        o = n("337033"),
        l = n("787151");
    let u = e => {
        let {
            variant: t,
            className: n,
            ...r
        } = e, u = (0, o.usePrivateHeadingLevel)(), d = "h".concat(Math.min(u, 6));
        return (0, i.jsx)(s.Text, {
            variant: t,
            tag: d,
            className: a()(l.defaultColor, n),
            ...u > 6 ? {
                "data-excessive-heading-level": u
            } : {},
            ...r
        })
    }
}