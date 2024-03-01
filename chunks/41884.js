function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("917351"),
        s = n.n(a),
        r = n("355263"),
        o = n("300344"),
        u = e => {
            let {
                showImage: t
            } = e, {
                usageWidth: n,
                descriptionWidth: a,
                sourceWidth: u
            } = i.useMemo(() => ({
                usageWidth: s.random(60, 120),
                descriptionWidth: s.random(200, 600),
                sourceWidth: s.random(45, 90)
            }), []);
            return (0, l.jsxs)("div", {
                className: o.wrapper,
                children: [t ? (0, l.jsx)("div", {
                    className: o.image
                }) : null, (0, l.jsxs)("div", {
                    className: o.infoWrapper,
                    children: [(0, l.jsx)("div", {
                        style: {
                            maxWidth: (0, r.pxToRem)(n)
                        },
                        className: o.usageWrapper
                    }), (0, l.jsx)("div", {
                        style: {
                            maxWidth: (0, r.pxToRem)(a)
                        },
                        className: o.description
                    })]
                }), (0, l.jsx)("div", {
                    style: {
                        width: (0, r.pxToRem)(u)
                    },
                    className: o.source
                })]
            })
        }
}