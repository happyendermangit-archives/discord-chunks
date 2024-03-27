function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestsIconWithGradient: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("331595"),
        s = n("844099"),
        a = n("44315"),
        o = n("231338");
    let l = e => {
        let {
            height: t = 24,
            width: n = 24,
            color: l,
            ...u
        } = e, d = (0, a.useColorValue)(o.Color.TEAL_160), _ = (0, a.useColorValue)(o.Color.BRAND_430);
        return (0, i.jsxs)("svg", {
            ...(0, r.default)(u),
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
                        stopColor: _.hex
                    })]
                })
            }), (0, i.jsx)(s.QuestsIcon, {
                color: "url(#gradient)",
                height: "100%",
                width: "100%",
                ...u
            })]
        })
    }
}