function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("23812");

    function l(e) {
        let {
            icon: t,
            text: n,
            className: r,
            innerClassName: l,
            ...u
        } = e, d = (0, i.jsx)(t, {
            width: 16,
            height: 16,
            color: "currentColor"
        });
        return null != n ? (0, i.jsx)(a.Tooltip, {
            text: n,
            children: e => (0, i.jsx)(a.Button, {
                className: s()(o.button, r),
                innerClassName: s()(o.buttonInner, l),
                color: o.color,
                look: a.Button.Looks.FILLED,
                size: a.Button.Sizes.NONE,
                grow: !1,
                ...e,
                ...u,
                children: d
            })
        }) : (0, i.jsx)(a.Button, {
            className: s()(o.button, r),
            innerClassName: s()(o.buttonInner, l),
            color: o.color,
            look: a.Button.Looks.FILLED,
            size: a.Button.Sizes.NONE,
            grow: !1,
            ...u,
            children: d
        })
    }
}