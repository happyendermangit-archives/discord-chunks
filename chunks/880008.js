function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("960259"),
        a = n("344809"),
        o = n("325767");
    t.default = (0, s.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: s = "currentColor",
            foregroundColor: a = r.default.unsafe_rawColors.RED_400.css,
            foreground: l,
            background: u,
            ...d
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, o.default)(d),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("rect", {
                fill: a,
                className: l,
                x: "2",
                y: "21.2154",
                width: "26",
                height: "2",
                transform: "rotate(-45 2 21.2154)"
            }), (0, i.jsx)("path", {
                fill: s,
                className: u,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
            })]
        })
    }, a.EyeSlashIcon, void 0, {
        size: 24
    })
}