function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("693789"),
        o = n("481060"),
        l = n("255877");

    function u(e) {
        let {
            icon: t,
            text: n,
            compact: r,
            className: u,
            innerClassName: d,
            ..._
        } = e, c = (0, i.jsx)(t, {
            width: 16,
            height: 16,
            color: "currentColor"
        });
        return r ? (0, i.jsx)(o.Tooltip, {
            text: n,
            children: e => (0, i.jsx)(a.Button, {
                className: s()(l.compactButton, u),
                innerClassName: s()(l.compactButtonInner, d),
                color: s()(a.ButtonColors.PRIMARY, l.color),
                look: a.Button.Looks.FILLED,
                size: a.Button.Sizes.NONE,
                grow: !1,
                ...e,
                ..._,
                children: c
            })
        }) : (0, i.jsxs)(a.Button, {
            innerClassName: s()(l.button, u),
            color: s()(a.ButtonColors.PRIMARY, l.color),
            look: a.Button.Looks.FILLED,
            size: a.Button.Sizes.MEDIUM,
            ..._,
            children: [c, n]
        })
    }
}