function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("478763");
    t.default = e => {
        let {
            children: t,
            shouldAnimate: n
        } = e;
        return n ? (0, i.jsx)("div", {
            className: r.outerContainer,
            children: (0, i.jsx)("div", {
                className: r.innerContainer,
                children: t
            })
        }) : t
    }
}