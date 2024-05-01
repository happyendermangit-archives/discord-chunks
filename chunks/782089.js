function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("780014"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return 16 === t || 16 === n ? (0, i.jsxs)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 16 16",
            children: [(0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
            }), (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
            }), (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
            })]
        }) : (0, i.jsx)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                className: a,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
            })
        })
    }, a.UserPlusIcon, void 0, {
        size: 24
    })
}