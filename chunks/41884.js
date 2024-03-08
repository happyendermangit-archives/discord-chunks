function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983"),
        l = n("884691"),
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
            } = l.useMemo(() => ({
                usageWidth: s.random(60, 120),
                descriptionWidth: s.random(200, 600),
                sourceWidth: s.random(45, 90)
            }), []);
            return (0, i.jsxs)("div", {
                className: o.wrapper,
                children: [t ? (0, i.jsx)("div", {
                    className: o.image
                }) : null, (0, i.jsxs)("div", {
                    className: o.infoWrapper,
                    children: [(0, i.jsx)("div", {
                        style: {
                            maxWidth: (0, r.pxToRem)(n)
                        },
                        className: o.usageWrapper
                    }), (0, i.jsx)("div", {
                        style: {
                            maxWidth: (0, r.pxToRem)(a)
                        },
                        className: o.description
                    })]
                }), (0, i.jsx)("div", {
                    style: {
                        width: (0, r.pxToRem)(u)
                    },
                    className: o.source
                })]
            })
        }
}