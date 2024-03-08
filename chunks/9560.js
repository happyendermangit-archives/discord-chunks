function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("149279"),
        u = n("713815");

    function d(e) {
        let {
            onClick: t,
            children: n,
            tooltip: a,
            dangerous: d = !1,
            className: c,
            "aria-label": f
        } = e;
        return (0, i.jsx)(r.Tooltip, {
            text: a,
            hideOnClick: !0,
            children: e => {
                let {
                    onMouseEnter: r,
                    onMouseLeave: p,
                    onClick: m
                } = e;
                return (0, i.jsx)(o.Button, {
                    onMouseEnter: r,
                    onMouseLeave: p,
                    onClick: e => {
                        e.stopPropagation(), null == m || m(), t(e)
                    },
                    dangerous: d,
                    "aria-label": null != f ? f : a,
                    className: c,
                    children: l.Children.map(n, e => l.isValidElement(e) ? l.cloneElement(e, {
                        className: s(e.props.className, u.actionBarIcon)
                    }) : e)
                })
            }
        })
    }
}