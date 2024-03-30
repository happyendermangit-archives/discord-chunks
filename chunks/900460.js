function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060");
    t.default = {
        show(e) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("99387"), n.e("74194")]).then(n.bind(n, "269817"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    url: e
                })
            })
        }
    }
}