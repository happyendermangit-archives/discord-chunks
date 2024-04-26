function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("605403"),
        u = n("209661");
    let d = r.memo(function(e) {
        let {
            children: t,
            className: n,
            icon: r,
            isCollapsed: s,
            onClick: d,
            "aria-label": _
        } = e;
        return (0, i.jsx)("div", {
            className: a()(u.wrapper, n),
            children: (0, i.jsxs)(o.Clickable, {
                onClick: d,
                onKeyDown: e => e.stopPropagation(),
                className: a()(u.header, {
                    [u.interactive]: null != s
                }),
                "aria-expanded": null != s ? !s : void 0,
                "aria-label": _,
                children: [null != r && (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: u.headerIcon,
                    children: r
                }), (0, i.jsx)("span", {
                    className: u.headerLabel,
                    children: t
                }), null != s ? (0, i.jsx)(l.default, {
                    className: a()(u.headerCollapseIcon, {
                        [u.headerCollapseIconCollapsed]: s
                    }),
                    height: 16,
                    width: 16
                }) : null]
            })
        })
    });
    t.default = d
}