function(e, t, _) {
    "use strict";
    _.r(t), _.d(t, {
        GiftIcon: function() {
            return T
        }
    });
    var i = _("37983");
    _("884691");
    var s = _("669491"),
        I = _("82169");
    let T = e => {
        let {
            width: t = 24,
            height: _ = 24,
            color: T = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...u
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, I.default)(u),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: _,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof T ? T : T.css,
                fillRule: "evenodd",
                d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                clipRule: "evenodd",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof T ? T : T.css,
                d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                className: o
            })]
        })
    }
}