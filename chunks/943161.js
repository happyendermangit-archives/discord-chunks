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
        r = n("93393"),
        s = n("317041"),
        u = n("262657");
    let d = e => {
        switch (e.id) {
            case s.BuiltInSectionId.BUILT_IN:
                return o.default;
            case s.BuiltInSectionId.FRECENCY:
                return r.default;
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
            padding: r,
            isSelected: s,
            selectable: c = !1,
            ...p
        } = e, f = d(t);
        return (0, i.jsx)("div", {
            className: a(u.wrapper, n, {
                [u.selectable]: c,
                [u.selected]: c && s
            }),
            style: {
                width: l,
                height: o,
                padding: null != r ? r : 0
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