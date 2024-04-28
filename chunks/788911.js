function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("256286");
    t.default = e => {
        let {
            message: t,
            className: n,
            noResultsImageURL: r,
            forceLightTheme: o,
            suggestions: l
        } = e;
        return (0, i.jsx)("div", {
            className: s()({
                [a.forceLightTheme]: o
            }, n),
            children: (0, i.jsxs)("div", {
                className: a.wrapper,
                children: [(0, i.jsx)("div", {
                    className: a.sadImage,
                    style: null != r ? {
                        backgroundImage: "url(".concat(r, ")")
                    } : {}
                }), (0, i.jsx)("div", {
                    children: t
                }), l]
            })
        })
    }
}