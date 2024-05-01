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
        a = n.n(r),
        s = n("481060"),
        o = n("505138");

    function l(e) {
        let {
            children: t,
            onClick: n,
            className: r,
            tooltip: l
        } = e;
        return (0, i.jsx)(s.Tooltip, {
            text: l,
            children: e => {
                let {
                    onClick: l,
                    ...u
                } = e;
                return (0, i.jsx)(s.Button, {
                    ...u,
                    onClick: e => {
                        null == n || n(e), null == l || l()
                    },
                    innerClassName: o.buttonReset,
                    color: a()(o.cta, r),
                    size: s.Button.Sizes.MIN,
                    children: t
                })
            }
        })
    }
}