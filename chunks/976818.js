function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("543289"),
        s = n("909004"),
        r = n("782340"),
        o = n("59204");

    function u() {
        return (0, i.jsxs)("div", {
            className: o.container,
            children: [(0, i.jsxs)("div", {
                className: o.iconContainer,
                children: [(0, i.jsx)("div", {
                    className: o.icon,
                    children: (0, i.jsx)(s.default, {
                        className: o.iconOffset,
                        width: 28,
                        height: 28
                    })
                }), (0, i.jsx)(a.default, {
                    className: o.stars
                })]
            }), (0, i.jsx)(l.Heading, {
                className: o.header,
                variant: "heading-xl/semibold",
                children: r.default.Messages.SUMMARY_EMPTY_STATE_TITLE
            }), (0, i.jsx)(l.Text, {
                className: o.text,
                color: "header-secondary",
                variant: "text-md/normal",
                children: r.default.Messages.SUMMARY_EMPTY_STATE_TEXT
            })]
        })
    }
}