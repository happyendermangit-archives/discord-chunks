function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CallTileCTA: function() {
            return u
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        i = n("77078"),
        l = n("551694");

    function u(e) {
        let {
            children: t,
            onClick: n,
            className: r,
            tooltip: u
        } = e;
        return (0, a.jsx)(i.Tooltip, {
            text: u,
            children: e => {
                let {
                    onClick: u,
                    ...o
                } = e;
                return (0, a.jsx)(i.Button, {
                    ...o,
                    onClick: e => {
                        null == n || n(e), null == u || u()
                    },
                    innerClassName: l.buttonReset,
                    color: s(l.cta, r),
                    size: i.Button.Sizes.MIN,
                    children: t
                })
            }
        })
    }
}