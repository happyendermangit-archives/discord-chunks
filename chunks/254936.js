function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("536685");
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
            viewBox: "0 0 16 16"
        }, r.createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, r.createElement("rect", {
            width: "16",
            height: "16"
        }), r.createElement("polygon", {
            className: a,
            fill: void 0 === o ? "currentColor" : o,
            points: "12 2.32 10.513 2 4 13.68 5.487 14"
        })))
    }, i.SlashIcon, void 0, {
        size: 16
    })
}