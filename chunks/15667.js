function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("392711"),
        s = n("481060"),
        a = n("689938"),
        o = n("160503");
    t.default = e => {
        let t = (0, r.flatMap)(e.history, e => {
            var t;
            let {
                destination: [n],
                multiSelect: i
            } = e, r = [null, null], s = Object.values(null !== (t = null == i ? void 0 : i.state) && void 0 !== t ? t : {});
            return s.length > 0 && (r[0] = s.join(", ")), "" !== n && (r[1] = n), r
        }).filter(e => null != e);
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            className: o.container,
            children: [(0, i.jsx)(s.Heading, {
                className: o.breadcrumbsHeader,
                color: "header-secondary",
                variant: "heading-sm/semibold",
                children: a.default.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
            }), t.map((e, t) => (0, i.jsxs)("div", {
                className: o.breadcrumbContainer,
                children: [(0, i.jsx)("div", {
                    className: o.breadcrumbDot
                }), (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: o.breadcrumbText,
                    children: e
                })]
            }, "".concat(e, "+").concat(t)))]
        })
    }
}