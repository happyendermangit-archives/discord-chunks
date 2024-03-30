function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("175779");
    t.default = (0, o.replaceIcon)(function(e) {
        var t = e.width,
            n = e.height,
            o = e.color,
            i = e.className,
            a = e.foreground;
        return r.createElement("svg", {
            className: i,
            width: void 0 === t ? 24 : t,
            height: void 0 === n ? 24 : n,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            className: a,
            fill: void 0 === o ? "currentColor" : o,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
        }))
    }, i.ScreenArrowIcon, void 0, {
        size: 24
    })
}