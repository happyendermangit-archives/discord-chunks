function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("65597"),
        o = n("206230"),
        l = n("491605"),
        u = n("557132");

    function d(e) {
        let {
            className: t
        } = e, s = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
        async function d() {
            let {
                default: e
            } = await n.el("492013").then(n.t.bind(n, "492013", 19));
            return e
        }
        return (0, i.jsx)(l.default, {
            importData: d,
            shouldAnimate: !s,
            className: r(u.sparkles, t)
        })
    }
}