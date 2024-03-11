function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        CloseSmallIcon: function() {
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
                d: "M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z",
                className: a
            })
        })
    }
}