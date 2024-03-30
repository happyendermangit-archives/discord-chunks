function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("852858");
    t.default = (0, o.replaceIcon)(function(e) {
        var t = e.width,
            n = e.height,
            o = e.color,
            i = e.className,
            a = e.foreground;
        return r.createElement("svg", {
            width: void 0 === t ? 16 : t,
            height: void 0 === n ? 16 : n,
            className: i,
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg"
        }, r.createElement("path", {
            transform: "translate(2.000000, 2.000000)",
            fillRule: "nonzero",
            fill: void 0 === o ? "currentColor" : o,
            className: a,
            d: "M4,0 L4,3 L0,3 L0,0 L4,0 Z M12,4 L12,7 L8,7 L8,4 L12,4 Z M8,9 L12,9 L12,12 L8,12 L8,9.33333333 L8,9 Z M7,7 L3,7 L3,10 L7,10 L7,12 L3,12 L1,12 L1,4 L3,4 L3,5 L7,5 L7,7 Z"
        }))
    }, i.FolderIcon, void 0, {
        size: 16
    })
}