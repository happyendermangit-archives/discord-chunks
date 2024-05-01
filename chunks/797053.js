function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("866442"),
        l = n("481060"),
        u = n("332870"),
        d = n("819729");
    t.default = e => {
        let {
            children: t,
            className: n,
            color: a,
            iconType: _,
            onMouseEnter: c,
            onMouseLeave: E,
            ...I
        } = e, [T, f] = r.useState(!1), S = r.useCallback(e => {
            f(!0), null == c || c(e)
        }, [f, c]), h = r.useCallback(e => {
            f(!1), null == E || E(e)
        }, [f, E]), A = {};
        return null != a && (A = {
            color: (0, o.int2hex)(a),
            backgroundColor: T ? (0, o.int2rgba)(a, .3) : (0, o.int2rgba)(a, .1)
        }), (0, i.jsx)(l.Clickable, {
            ...I,
            tag: "span",
            className: s()(n, {
                [d.wrapper]: !0,
                interactive: I.onClick
            }),
            onMouseEnter: S,
            onMouseLeave: h,
            style: A,
            tabIndex: null != I.onClick ? 0 : -1,
            children: null != _ ? (0, i.jsx)(u.default, {
                iconType: _,
                children: t
            }) : t
        })
    }
}