function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var l = n("37983");
    n("884691");
    var r = n("414456"),
        a = n.n(r),
        u = n("77078"),
        s = n("451914"),
        o = n("548122");
    let i = Object.freeze({
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
                className: r = s.wrapper,
                size: o = i.SIZE_14,
                selectable: c = !1,
                children: E,
                color: d,
                onClick: _,
                onContextMenu: T,
                style: f,
                title: S,
                uppercase: h
            } = e;
            return (0, l.jsx)(u.H, {
                role: null != _ ? "button" : void 0,
                onClick: _,
                onContextMenu: T,
                id: t,
                className: a(r, {
                    [s.base]: !0,
                    [o]: !0,
                    [s.selectable]: c,
                    [s.muted]: n,
                    [s.uppercase]: h
                }),
                title: S,
                style: null != d ? {
                    ...f,
                    color: d
                } : f,
                children: E
            })
        };
    c.Sizes = i;
    var E = c
}