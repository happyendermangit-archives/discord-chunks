function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("285952"),
        u = n("121972");
    class d extends r.PureComponent {
        render() {
            let {
                note: e,
                title: t,
                action: n,
                className: r
            } = this.props;
            return (0, i.jsx)("div", {
                className: a()(u.wrapper, r),
                children: (0, i.jsxs)(l.default, {
                    className: u.flexWrapper,
                    direction: l.default.Direction.VERTICAL,
                    align: l.default.Align.CENTER,
                    justify: l.default.Justify.CENTER,
                    children: [(0, i.jsx)(l.default.Child, {
                        grow: 0,
                        className: u.image
                    }), (0, i.jsxs)(l.default.Child, {
                        grow: 0,
                        className: u.text,
                        children: [(0, i.jsx)(o.H, {
                            className: u.title,
                            children: t
                        }), null != e ? (0, i.jsx)("div", {
                            className: u.note,
                            children: e
                        }) : null]
                    }), n]
                })
            })
        }
    }
    t.default = d
}