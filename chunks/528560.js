function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        BellIcon: function() {
            return a
        }
    });
    var n = t("735250");
    t("470079");
    var s = t("692547"),
        i = t("331595");
    let a = e => {
        let {
            width: l = 24,
            height: t = 24,
            color: a = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...u
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, i.default)(u),
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
                className: o
            })
        })
    }
}