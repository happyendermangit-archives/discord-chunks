function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("256170"),
        u = n("573821");
    let d = i.memo(function(e) {
        let {
            children: t,
            className: n,
            icon: i,
            isCollapsed: a,
            onClick: d,
            "aria-label": c
        } = e;
        return (0, l.jsx)("div", {
            className: s(u.wrapper, n),
            children: (0, l.jsxs)(r.Clickable, {
                onClick: d,
                onKeyDown: e => e.stopPropagation(),
                className: s(u.header, {
                    [u.interactive]: null != a
                }),
                "aria-expanded": null != a ? !a : void 0,
                "aria-label": c,
                children: [null != i && (0, l.jsx)("div", {
                    "aria-hidden": !0,
                    className: u.headerIcon,
                    children: i
                }), (0, l.jsx)("span", {
                    className: u.headerLabel,
                    children: t
                }), null != a ? (0, l.jsx)(o.default, {
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