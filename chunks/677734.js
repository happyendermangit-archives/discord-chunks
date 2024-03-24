function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("367376"),
        i = n("442791"),
        d = n("782340"),
        o = n("595427"),
        u = e => {
            let {
                node: {
                    header: t,
                    subheader: n,
                    button: u
                }
            } = e, c = (null == u ? void 0 : u.type) === "submit", m = l.useRef(s.default.reactParserFor({
                ...s.default.defaultRules,
                link: i.LinkMarkupRule
            }));
            return (0, a.jsxs)("div", {
                className: o.headerContainer,
                children: [null != t && "" !== t ? (0, a.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: t
                }) : null, null != n && "" !== t ? (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: m.current(n)
                }) : null, c && (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: d.default.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
                })]
            })
        }
}