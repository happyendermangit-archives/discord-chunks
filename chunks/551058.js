function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("481060"),
        l = n("605403"),
        u = n("209661");
    let d = r.memo(function(e) {
        let {
            children: t,
            className: n,
            icon: r,
            isCollapsed: a,
            onClick: d,
            "aria-label": _
        } = e;
        return (0, i.jsx)("div", {
            className: s()(u.wrapper, n),
            children: (0, i.jsxs)(o.Clickable, {
                onClick: d,
                onKeyDown: e => e.stopPropagation(),
                className: s()(u.header, {
                    [u.interactive]: null != a
                }),
                "aria-expanded": null != a ? !a : void 0,
                "aria-label": _,
                children: [null != r && (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: u.headerIcon,
                    children: r
                }), (0, i.jsx)("span", {
                    className: u.headerLabel,
                    children: t
                }), null != a ? (0, i.jsx)(l.default, {
                    className: s()(u.headerCollapseIcon, {
                        [u.headerCollapseIconCollapsed]: a
                    }),
                    height: 16,
                    width: 16
                }) : null]
            })
        })
    });
    t.default = d
}