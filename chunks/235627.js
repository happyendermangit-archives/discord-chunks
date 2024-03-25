function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestsIconWithGradient: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("82169"),
        a = n("421050"),
        s = n("449918"),
        r = n("843455");
    let o = e => {
        let {
            height: t = 24,
            width: n = 24,
            color: o,
            ...u
        } = e, d = (0, s.useColorValue)(r.Color.TEAL_160), c = (0, s.useColorValue)(r.Color.BRAND_430);
        return (0, i.jsxs)("svg", {
            ...(0, l.default)(u),
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                    id: "gradient",
                    x1: "0",
                    x2: "0",
                    y1: "0",
                    y2: "1",
                    children: [(0, i.jsx)("stop", {
                        offset: "0%",
                        stopColor: d.hex
                    }), (0, i.jsx)("stop", {
                        offset: "100%",
                        stopColor: c.hex
                    })]
                })
            }), (0, i.jsx)(a.QuestsIcon, {
                color: "url(#gradient)",
                height: "100%",
                width: "100%",
                ...u
            })]
        })
    }
}