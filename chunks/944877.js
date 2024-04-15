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
        s = n.n(r),
        a = n("377617"),
        o = n("855693"),
        l = n("689079"),
        u = n("382379");
    let d = e => {
        switch (e.id) {
            case l.BuiltInSectionId.BUILT_IN:
                return a.default;
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
            height: a,
            padding: o,
            isSelected: l,
            selectable: _ = !1,
            ...c
        } = e, E = d(t);
        return (0, i.jsx)("div", {
            className: s()(u.wrapper, n, {
                [u.selectable]: _,
                [u.selected]: _ && l
            }),
            style: {
                width: r,
                height: a,
                padding: null != o ? o : 0
            },
            children: null != E ? (0, i.jsx)(E, {
                className: u.icon,
                width: r,
                height: a,
                ...c
            }) : null
        })
    }
}