function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        o = n("83910"),
        s = n("93393"),
        r = n("317041"),
        u = n("262657");
    let d = e => {
        switch (e.id) {
            case r.BuiltInSectionId.BUILT_IN:
                return o.default;
            case r.BuiltInSectionId.FRECENCY:
                return s.default;
            default:
                return
        }
    };

    function c(e) {
        let {
            section: t,
            className: n,
            width: l,
            height: o,
            padding: s,
            isSelected: r,
            selectable: c = !1,
            ...p
        } = e, f = d(t);
        return (0, i.jsx)("div", {
            className: a(u.wrapper, n, {
                [u.selectable]: c,
                [u.selected]: c && r
            }),
            style: {
                width: l,
                height: o,
                padding: null != s ? s : 0
            },
            children: null != f ? (0, i.jsx)(f, {
                className: u.icon,
                width: l,
                height: o,
                ...p
            }) : null
        })
    }
}