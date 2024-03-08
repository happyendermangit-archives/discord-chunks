function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("469563"),
        a = n("202804"),
        s = n("75196"),
        r = (0, l.replaceIcon)(function(e) {
            let {
                width: t = 16,
                height: n = 16,
                color: l = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    d: "M20 6.002H14V3.002C14 2.45 13.553 2.002 13 2.002H4C3.447 2.002 3 2.45 3 3.002V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.002C21 6.45 20.553 6.002 20 6.002Z",
                    fill: l,
                    className: a
                })
            })
        }, a.FlagIcon, void 0, {
            size: 16
        })
}