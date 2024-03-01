function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("404439"),
        s = e => {
            let {
                children: t,
                shouldAnimate: n
            } = e;
            return n ? (0, a.jsx)("div", {
                className: r.outerContainer,
                children: (0, a.jsx)("div", {
                    className: r.innerContainer,
                    children: t
                })
            }) : t
        }
}