function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        ShieldUserIcon: function() {
            return l
        }
    });
    var i = s("37983");
    s("884691");
    var r = s("669491"),
        a = s("82169");
    let l = e => {
        let {
            width: t = 24,
            height: s = 24,
            color: l = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...n
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(n),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: s,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M3.47 5.18c.27-.4.64-.74 1.1-.96l6.09-3.05a3 3 0 0 1 2.68 0l6.1 3.05A2.83 2.83 0 0 1 21 6.75v3.5a14.17 14.17 0 0 1-8.42 12.5c-.37.16-.79.16-1.16 0A14.18 14.18 0 0 1 3 9.77V6.75c0-.57.17-1.11.47-1.57Zm2.95 10.3A12.18 12.18 0 0 0 12 20.82a12.18 12.18 0 0 0 5.58-5.32A9.49 9.49 0 0 0 12.47 14h-.94c-1.88 0-3.63.55-5.11 1.49ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}