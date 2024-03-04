function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Heading: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("577776"),
        o = n("860226"),
        l = n("433528");
    let u = e => {
        let {
            variant: t,
            className: n,
            ...s
        } = e, u = (0, o.usePrivateHeadingLevel)(), d = "h".concat(Math.min(u, 6));
        return (0, i.jsx)(a.Text, {
            variant: t,
            tag: d,
            className: r(l.defaultColor, n),
            ...u > 6 ? {
                "data-excessive-heading-level": u
            } : {},
            ...s
        })
    }
}