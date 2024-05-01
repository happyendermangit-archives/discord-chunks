function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("359653"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, i.jsx)("path", {
                className: a,
                d: "M12.3345 2.71469L21.0315 10.542C21.3721 10.8486 21.1553 11.4137 20.697 11.4137H19V18.4137C19 18.9659 18.5523 19.4137 18 19.4137H15C14.4477 19.4137 14 18.9659 14 18.4137V13.4137H10V18.4137C10 18.9659 9.55228 19.4137 9 19.4137H6C5.44771 19.4137 5 18.9659 5 18.4137V11.4137H3.30298C2.84473 11.4137 2.62789 10.8486 2.96849 10.542L11.6655 2.71469C11.8557 2.54356 12.1443 2.54356 12.3345 2.71469Z",
                fill: r
            })
        })
    }, a.HomeIcon, void 0, {
        size: 24
    })
}