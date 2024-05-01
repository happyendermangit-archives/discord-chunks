function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("377617"),
        o = n("855693"),
        l = n("689079"),
        u = n("261531");
    let d = e => {
        switch (e.id) {
            case l.BuiltInSectionId.BUILT_IN:
                return s.default;
            case l.BuiltInSectionId.FRECENCY:
                return o.default;
            default:
                return
        }
    };

    function _(e) {
        let {
            section: t,
            className: n,
            width: r,
            height: s,
            padding: o,
            isSelected: l,
            selectable: _ = !1,
            ...c
        } = e, E = d(t);
        return (0, i.jsx)("div", {
            className: a()(u.wrapper, n, {
                [u.selectable]: _,
                [u.selected]: _ && l
            }),
            style: {
                width: r,
                height: s,
                padding: null != o ? o : 0
            },
            children: null != E ? (0, i.jsx)(E, {
                className: u.icon,
                width: r,
                height: s,
                ...c
            }) : null
        })
    }
}