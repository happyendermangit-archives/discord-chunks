function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ExperimentalLootboxIcon: function() {
            return l
        }
    });
    var a = n("37983");
    n("884691");
    var i = n("669491"),
        s = n("82169");
    let l = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: l = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...r
        } = e;
        return (0, a.jsx)("svg", {
            ...(0, s.default)(r),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M23 6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v4.5c0 .28.22.5.5.5h7c.22 0 .41-.14.5-.34.53-1.3 1.68-2.41 3-2.41s2.47 1.11 3 2.4c.09.2.28.35.5.35h7a.5.5 0 0 0 .5-.5V6ZM23 13.5a.5.5 0 0 0-.5-.5h-7c-.22 0-.41.14-.5.34-.53 1.3-1.68 2.41-3 2.41s-2.47-1.11-3-2.4a.54.54 0 0 0-.5-.35h-7a.5.5 0 0 0-.5.5V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4.5Z",
                className: o
            })
        })
    }
}