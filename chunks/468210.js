function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("399606"),
        o = n("607070"),
        l = n("301822"),
        u = n("498003");

    function d(e) {
        let {
            className: t
        } = e, r = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
        async function d() {
            let {
                default: e
            } = await n.e("17672").then(n.t.bind(n, "475429", 19));
            return e
        }
        return (0, i.jsx)(l.default, {
            importData: d,
            shouldAnimate: !r,
            className: s()(u.sparkles, t)
        })
    }
}