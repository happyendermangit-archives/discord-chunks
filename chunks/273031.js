function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("404975"),
        u = n("281661");

    function d(e) {
        let {
            onClick: t,
            children: n,
            tooltip: s,
            dangerous: d = !1,
            className: _,
            "aria-label": c
        } = e;
        return (0, i.jsx)(o.Tooltip, {
            text: s,
            hideOnClick: !0,
            children: e => {
                let {
                    onMouseEnter: o,
                    onMouseLeave: E,
                    onClick: I
                } = e;
                return (0, i.jsx)(l.Button, {
                    onMouseEnter: o,
                    onMouseLeave: E,
                    onClick: e => {
                        e.stopPropagation(), null == I || I(), t(e)
                    },
                    dangerous: d,
                    "aria-label": null != c ? c : s,
                    className: _,
                    children: r.Children.map(n, e => r.isValidElement(e) ? r.cloneElement(e, {
                        className: a()(e.props.className, u.actionBarIcon)
                    }) : e)
                })
            }
        })
    }
}