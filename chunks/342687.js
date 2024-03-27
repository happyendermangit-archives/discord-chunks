function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("392711"),
        a = n.n(s),
        o = n("826298"),
        l = n("314850");
    t.default = e => {
        let {
            showImage: t
        } = e, {
            usageWidth: n,
            descriptionWidth: s,
            sourceWidth: u
        } = r.useMemo(() => ({
            usageWidth: a().random(60, 120),
            descriptionWidth: a().random(200, 600),
            sourceWidth: a().random(45, 90)
        }), []);
        return (0, i.jsxs)("div", {
            className: l.wrapper,
            children: [t ? (0, i.jsx)("div", {
                className: l.image
            }) : null, (0, i.jsxs)("div", {
                className: l.infoWrapper,
                children: [(0, i.jsx)("div", {
                    style: {
                        maxWidth: (0, o.pxToRem)(n)
                    },
                    className: l.usageWrapper
                }), (0, i.jsx)("div", {
                    style: {
                        maxWidth: (0, o.pxToRem)(s)
                    },
                    className: l.description
                })]
            }), (0, i.jsx)("div", {
                style: {
                    width: (0, o.pxToRem)(u)
                },
                className: l.source
            })]
        })
    }
}