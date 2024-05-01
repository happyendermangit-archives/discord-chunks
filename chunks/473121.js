function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("481060"),
        s = n("454585"),
        o = n("273744"),
        l = n("689938"),
        u = n("319755");
    t.default = e => {
        let {
            node: {
                header: t,
                subheader: n,
                button: d
            }
        } = e, _ = (null == d ? void 0 : d.type) === "submit", c = r.useRef(s.default.reactParserFor({
            ...s.default.defaultRules,
            link: o.LinkMarkupRule
        }));
        return (0, i.jsxs)("div", {
            className: u.headerContainer,
            children: [null != t && "" !== t ? (0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                children: t
            }) : null, null != n && "" !== t ? (0, i.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: c.current(n)
            }) : null, _ && (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: l.default.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
            })]
        })
    }
}