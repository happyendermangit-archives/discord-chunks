function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("414456"),
        l = n.n(i),
        a = n("77078"),
        u = n("451914"),
        s = n("548122");
    let o = Object.freeze({
            SIZE_10: s.size10,
            SIZE_12: s.size12,
            SIZE_14: s.size14,
            SIZE_16: s.size16,
            SIZE_20: s.size20,
            SIZE_24: s.size24,
            SIZE_32: s.size32
        }),
        c = e => {
            let {
                id: t,
                muted: n = !1,
                className: i = u.wrapper,
                size: s = o.SIZE_14,
                selectable: c = !1,
                children: d,
                color: f,
                onClick: E,
                onContextMenu: _,
                style: I,
                title: T,
                uppercase: M
            } = e;
            return (0, r.jsx)(a.H, {
                role: null != E ? "button" : void 0,
                onClick: E,
                onContextMenu: _,
                id: t,
                className: l(i, {
                    [u.base]: !0,
                    [s]: !0,
                    [u.selectable]: c,
                    [u.muted]: n,
                    [u.uppercase]: M
                }),
                title: T,
                style: null != f ? {
                    ...I,
                    color: f
                } : I,
                children: d
            })
        };
    c.Sizes = o;
    var d = c
}