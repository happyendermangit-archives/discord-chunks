function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageWarningIcon: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("331595");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: a = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6.99c0-.48.12-.98.4-1.47l.88-1.53H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0l.73.98.27-.48a3.06 3.06 0 0 1 5.3 0l.35.62V5a3 3 0 0 0-3-3H5Zm3.65 3.08c.67-.65 1.78-.01 1.55.9-.12.49.17.98.65 1.12.9.26.9 1.54 0 1.8a.93.93 0 0 0-.65 1.12c.23.91-.88 1.55-1.55.9a.93.93 0 0 0-1.3 0c-.67.65-1.78.01-1.55-.9a.93.93 0 0 0-.65-1.12c-.9-.26-.9-1.54 0-1.8a.93.93 0 0 0 .65-1.12c-.23-.91.88-1.55 1.55-.9.36.35.94.35 1.3 0Z",
                clipRule: "evenodd",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M19.91 14.63a1.06 1.06 0 0 0-1.82 0l-3.96 6.9c-.38.66.12 1.47.91 1.47h7.92c.79 0 1.3-.81.91-1.48l-3.96-6.9Zm-.46 1.87h-.9a.5.5 0 0 0-.5.55l.22 2.02c.01.16.17.26.33.23a1.93 1.93 0 0 1 .8 0c.16.03.32-.07.33-.23l.21-2.02a.5.5 0 0 0-.5-.55ZM20 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                clipRule: "evenodd",
                className: o
            })]
        })
    }
}