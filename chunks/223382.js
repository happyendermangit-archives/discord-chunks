function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("752576");
    t.default = (0, o.replaceIcon)(function(e) {
        var t = e.width,
            n = e.height,
            o = e.color,
            i = e.className,
            a = e.foreground;
        return r.createElement("svg", {
            width: void 0 === t ? 24 : t,
            height: void 0 === n ? 24 : n,
            viewBox: "0 0 40 40",
            fill: "none",
            className: i
        }, r.createElement("path", {
            className: a,
            fill: void 0 === o ? "currentColor" : o,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33 34.5833V7.49998H35V36.6666H9C6.791 36.6666 5 34.801 5 32.5V7.49998C5 5.19894 6.791 3.33331 9 3.33331H31V30.4166H9C7.8955 30.4166 7 31.3485 7 32.5C7 33.6515 7.8955 34.5833 9 34.5833H33ZM23.9718 9.99998L15.8889 17.9915L12.7086 14.8441L10 17.5058L15.8885 23.3333L26.6667 12.6669L23.9718 9.99998Z"
        }))
    }, i.BookCheckIcon, void 0, {
        size: 24
    })
}