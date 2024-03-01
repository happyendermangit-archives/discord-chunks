function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        CheckmarkSmallIcon: function() {
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
            colorClass: i = "",
            ...a
        } = e;
        return (0, t.jsx)("svg", {
            ...(0, n.default)(a),
            xmlns: "http://www.w3.org/2000/svg",
            width: _,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                clipRule: "evenodd",
                className: i
            })
        })
    }
}