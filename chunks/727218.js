function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("621292"),
        l = n("527166");
    let u = Object.freeze({
            SIZE_10: l.size10,
            SIZE_12: l.size12,
            SIZE_14: l.size14,
            SIZE_16: l.size16,
            SIZE_20: l.size20,
            SIZE_24: l.size24,
            SIZE_32: l.size32
        }),
        d = e => {
            let {
                id: t,
                muted: n = !1,
                className: r = o.wrapper,
                size: l = u.SIZE_14,
                selectable: d = !1,
                children: _,
                color: c,
                onClick: E,
                onContextMenu: I,
                style: T,
                title: f,
                uppercase: S
            } = e;
            return (0, i.jsx)(a.H, {
                role: null != E ? "button" : void 0,
                onClick: E,
                onContextMenu: I,
                id: t,
                className: s()(r, {
                    [o.base]: !0,
                    [l]: !0,
                    [o.selectable]: d,
                    [o.muted]: n,
                    [o.uppercase]: S
                }),
                title: f,
                style: null != c ? {
                    ...T,
                    color: c
                } : T,
                children: _
            })
        };
    d.Sizes = u, t.default = d
}