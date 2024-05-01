function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("392711"),
        s = n.n(a),
        o = n("826298"),
        l = n("110855");
    t.default = e => {
        let {
            showImage: t
        } = e, {
            usageWidth: n,
            descriptionWidth: a,
            sourceWidth: u
        } = r.useMemo(() => ({
            usageWidth: s().random(60, 120),
            descriptionWidth: s().random(200, 600),
            sourceWidth: s().random(45, 90)
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
                        maxWidth: (0, o.pxToRem)(a)
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