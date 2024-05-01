function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("325767");

    function a(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: a = "currentColor",
            foreground: s,
            className: o,
            ...l
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(l),
            className: o,
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: a,
                className: s,
                d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
            })
        })
    }
}