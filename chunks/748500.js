function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("331650"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 19,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 19 24",
            fill: "none",
            children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
                fill: r,
                className: a
            })
        })
    }, a.MicrophoneIcon, void 0, {
        size: 24
    })
}