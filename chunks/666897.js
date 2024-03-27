function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("509043"),
        o = n("77078"),
        u = n("873218"),
        d = n("510948"),
        c = e => {
            let {
                children: t,
                className: n,
                color: a,
                iconType: c,
                onMouseEnter: f,
                onMouseLeave: m,
                ...p
            } = e, [h, x] = l.useState(!1), E = l.useCallback(e => {
                x(!0), null == f || f(e)
            }, [x, f]), y = l.useCallback(e => {
                x(!1), null == m || m(e)
            }, [x, m]), g = {};
            return null != a && (g = {
                color: (0, r.int2hex)(a),
                backgroundColor: h ? (0, r.int2rgba)(a, .3) : (0, r.int2rgba)(a, .1)
            }), (0, i.jsx)(o.Clickable, {
                ...p,
                tag: "span",
                className: s(n, {
                    [d.wrapper]: !0,
                    interactive: p.onClick
                }),
                onMouseEnter: E,
                onMouseLeave: y,
                style: g,
                tabIndex: null != p.onClick ? 0 : -1,
                children: null != c ? (0, i.jsx)(u.default, {
                    iconType: c,
                    children: t
                }) : t
            })
        }
}