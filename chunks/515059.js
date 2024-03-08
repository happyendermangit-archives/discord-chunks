function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("256170"),
        u = n("573821");
    let d = l.memo(function(e) {
        let {
            children: t,
            className: n,
            icon: l,
            isCollapsed: a,
            onClick: d,
            "aria-label": c
        } = e;
        return (0, i.jsx)("div", {
            className: s(u.wrapper, n),
            children: (0, i.jsxs)(r.Clickable, {
                onClick: d,
                onKeyDown: e => e.stopPropagation(),
                className: s(u.header, {
                    [u.interactive]: null != a
                }),
                "aria-expanded": null != a ? !a : void 0,
                "aria-label": c,
                children: [null != l && (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: u.headerIcon,
                    children: l
                }), (0, i.jsx)("span", {
                    className: u.headerLabel,
                    children: t
                }), null != a ? (0, i.jsx)(o.default, {
                    className: s(u.headerCollapseIcon, {
                        [u.headerCollapseIconCollapsed]: a
                    }),
                    height: 16,
                    width: 16
                }) : null]
            })
        })
    });
    var c = d
}