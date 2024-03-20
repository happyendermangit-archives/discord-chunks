function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        l = n("77078"),
        a = n("451914"),
        o = n("548122");
    let u = Object.freeze({
            SIZE_10: o.size10,
            SIZE_12: o.size12,
            SIZE_14: o.size14,
            SIZE_16: o.size16,
            SIZE_20: o.size20,
            SIZE_24: o.size24,
            SIZE_32: o.size32
        }),
        c = e => {
            let {
                id: t,
                muted: n = !1,
                className: r = a.wrapper,
                size: o = u.SIZE_14,
                selectable: c = !1,
                children: d,
                color: f,
                onClick: h,
                onContextMenu: E,
                style: v,
                title: C,
                uppercase: p
            } = e;
            return (0, i.jsx)(l.H, {
                role: null != h ? "button" : void 0,
                onClick: h,
                onContextMenu: E,
                id: t,
                className: s(r, {
                    [a.base]: !0,
                    [o]: !0,
                    [a.selectable]: c,
                    [a.muted]: n,
                    [a.uppercase]: p
                }),
                title: C,
                style: null != f ? {
                    ...v,
                    color: f
                } : v,
                children: d
            })
        };
    c.Sizes = u;
    var d = c
}