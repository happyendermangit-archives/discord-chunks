function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CallTileCTA: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("272903");

    function l(e) {
        let {
            children: t,
            onClick: n,
            className: r,
            tooltip: l
        } = e;
        return (0, i.jsx)(a.Tooltip, {
            text: l,
            children: e => {
                let {
                    onClick: l,
                    ...u
                } = e;
                return (0, i.jsx)(a.Button, {
                    ...u,
                    onClick: e => {
                        null == n || n(e), null == l || l()
                    },
                    innerClassName: o.buttonReset,
                    color: s()(o.cta, r),
                    size: a.Button.Sizes.MIN,
                    children: t
                })
            }
        })
    }
}