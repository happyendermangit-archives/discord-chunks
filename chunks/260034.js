function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Heading: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("993365"),
        o = n("337033"),
        l = n("787035");
    let u = e => {
        let {
            variant: t,
            className: n,
            ...r
        } = e, u = (0, o.usePrivateHeadingLevel)(), d = "h".concat(Math.min(u, 6));
        return (0, i.jsx)(a.Text, {
            variant: t,
            tag: d,
            className: s()(l.defaultColor, n),
            ...u > 6 ? {
                "data-excessive-heading-level": u
            } : {},
            ...r
        })
    }
}