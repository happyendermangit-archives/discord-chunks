function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        i = n("77078"),
        u = n("145131"),
        o = n("324127");
    class d extends r.PureComponent {
        render() {
            let {
                note: e,
                title: t,
                action: n,
                className: r
            } = this.props;
            return (0, a.jsx)("div", {
                className: l(o.wrapper, r),
                children: (0, a.jsxs)(u.default, {
                    className: o.flexWrapper,
                    direction: u.default.Direction.VERTICAL,
                    align: u.default.Align.CENTER,
                    justify: u.default.Justify.CENTER,
                    children: [(0, a.jsx)(u.default.Child, {
                        grow: 0,
                        className: o.image
                    }), (0, a.jsxs)(u.default.Child, {
                        grow: 0,
                        className: o.text,
                        children: [(0, a.jsx)(i.H, {
                            className: o.title,
                            children: t
                        }), null != e ? (0, a.jsx)("div", {
                            className: o.note,
                            children: e
                        }) : null]
                    }), n]
                })
            })
        }
    }
    var c = d
}