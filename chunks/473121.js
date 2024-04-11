function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250"),
        l = n("470079"),
        r = n("481060"),
        s = n("454585"),
        i = n("273744"),
        d = n("689938"),
        o = n("140715");
    t.default = e => {
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