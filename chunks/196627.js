function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("669212");
    let s = n("848304");
    t.default = e => {
        let {
            element: t
        } = e;
        return (null == t ? void 0 : t.type) !== "success" ? null : (0, i.jsx)("img", {
            alt: "",
            src: s,
            className: r.successImg
        })
    }
}