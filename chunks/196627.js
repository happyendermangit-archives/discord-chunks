function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("432537");
    let r = n("848304");
    t.default = e => {
        let {
            element: t
        } = e;
        return (null == t ? void 0 : t.type) !== "success" ? null : (0, a.jsx)("img", {
            alt: "",
            src: r,
            className: l.successImg
        })
    }
}