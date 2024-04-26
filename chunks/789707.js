function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("499033"),
        a = n("839523"),
        o = n("689938"),
        l = n("24557");

    function u() {
        return (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsxs)("div", {
                className: l.iconContainer,
                children: [(0, i.jsx)("div", {
                    className: l.icon,
                    children: (0, i.jsx)(a.default, {
                        className: l.iconOffset,
                        width: 28,
                        height: 28
                    })
                }), (0, i.jsx)(s.default, {
                    className: l.stars
                })]
            }), (0, i.jsx)(r.Heading, {
                className: l.header,
                variant: "heading-xl/semibold",
                children: o.default.Messages.SUMMARY_EMPTY_STATE_TITLE
            }), (0, i.jsx)(r.Text, {
                className: l.text,
                color: "header-secondary",
                variant: "text-md/normal",
                children: o.default.Messages.SUMMARY_EMPTY_STATE_TEXT
            })]
        })
    }
}