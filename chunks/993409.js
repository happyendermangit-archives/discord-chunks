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
        a = n.n(r),
        s = n("693789"),
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
            children: e => (0, i.jsx)(s.Button, {
                className: a()(l.compactButton, u),
                innerClassName: a()(l.compactButtonInner, d),
                color: a()(s.ButtonColors.PRIMARY, l.color),
                look: s.Button.Looks.FILLED,
                size: s.Button.Sizes.NONE,
                grow: !1,
                ...e,
                ..._,
                children: c
            })
        }) : (0, i.jsxs)(s.Button, {
            innerClassName: a()(l.button, u),
            color: a()(s.ButtonColors.PRIMARY, l.color),
            look: s.Button.Looks.FILLED,
            size: s.Button.Sizes.MEDIUM,
            ..._,
            children: [c, n]
        })
    }
}