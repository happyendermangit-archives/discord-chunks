function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("866442"),
        l = n("481060"),
        u = n("332870"),
        d = n("6829");
    t.default = e => {
        let {
            children: t,
            className: n,
            color: s,
            iconType: _,
            onMouseEnter: c,
            onMouseLeave: E,
            ...I
        } = e, [T, f] = r.useState(!1), S = r.useCallback(e => {
            f(!0), null == c || c(e)
        }, [f, c]), h = r.useCallback(e => {
            f(!1), null == E || E(e)
        }, [f, E]), A = {};
        return null != s && (A = {
            color: (0, o.int2hex)(s),
            backgroundColor: T ? (0, o.int2rgba)(s, .3) : (0, o.int2rgba)(s, .1)
        }), (0, i.jsx)(l.Clickable, {
            ...I,
            tag: "span",
            className: a()(n, {
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