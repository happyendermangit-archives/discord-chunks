function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("37983"),
        a = n("884691"),
        r = n("90915"),
        l = n("266491");
    class i extends a.Component {
        render() {
            let {
                children: e,
                location: t,
                history: n,
                staticContext: i,
                match: o,
                ...u
            } = this.props, d = null, c = null;
            return a.Children.forEach(e, e => {
                if (null == d && a.isValidElement(e)) {
                    let {
                        component: s,
                        render: l,
                        ...o
                    } = e.props, u = o.path || o.from;
                    null != (d = null != u ? (0, r.matchPath)(t.pathname, {
                        ...o,
                        path: u
                    }) : null) && (o = {
                        ...o,
                        key: u,
                        location: t,
                        match: d,
                        history: n,
                        staticContext: i
                    }, null != s ? c = a.createElement(s, o) : null != l && (c = l(o)))
                }
            }), (0, s.jsx)(l.default, {
                ...u,
                children: c
            })
        }
    }
    var o = (0, r.withRouter)(i)
}