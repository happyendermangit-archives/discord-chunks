function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        ArrowLargeRightIcon: function() {
            return r
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("669491"),
        n = E("82169");
    let r = e => {
        let {
            width: _ = 24,
            height: E = 24,
            color: r = o.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...i
        } = e;
        return (0, t.jsx)("svg", {
            ...(0, n.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: _,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M20.7 12.7a1 1 0 0 0 0-1.4l-8-8a1 1 0 1 0-1.4 1.4l6.29 6.3H4a1 1 0 1 0 0 2h13.59l-6.3 6.3a1 1 0 0 0 1.42 1.4l8-8Z",
                className: a
            })
        })
    }
}