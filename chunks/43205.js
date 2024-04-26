function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ContentImage: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("410030"),
        o = n("438071"),
        l = n("92661");

    function u(e) {
        let {
            src: t,
            size: n,
            className: r,
            alt: u = "icon"
        } = e, d = (0, a.default)();
        return null == t ? (0, i.jsx)(o.default, {
            width: n,
            height: n,
            color: "dark" === d ? "white" : "black",
            className: s()(l.contentImage, r)
        }) : (0, i.jsx)("img", {
            style: {
                maxWidth: "".concat(n, "px"),
                height: "".concat(n, "px")
            },
            className: s()(l.contentImage, r),
            src: t,
            alt: u
        })
    }
}