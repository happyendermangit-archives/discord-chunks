function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("872343");
    t.default = (0, o.replaceIcon)(function(e) {
        var t = e.width,
            n = e.height,
            o = e.color,
            i = e.className,
            a = e.foreground;
        return r.createElement("svg", {
            className: i,
            width: void 0 === t ? 16 : t,
            height: void 0 === n ? 16 : n,
            viewBox: "0 0 24 24"
        }, r.createElement("path", {
            className: a,
            fill: void 0 === o ? "currentColor" : o,
            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
        }))
    }, i.CirclePlusIcon, void 0, {
        size: 16
    })
}