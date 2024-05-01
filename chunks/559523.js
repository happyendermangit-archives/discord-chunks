function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("307876"),
        s = n("894257"),
        o = n("981631");
    t.default = new a.default(() => (0, r.openModalLazy)(async () => {
        let {
            default: e
        } = await Promise.all([n.e("99387"), n.e("67607")]).then(n.bind(n, "520615"));
        return t => (0, i.jsx)(e, {
            ...t
        })
    }, {
        modalKey: s.URGENT_MODAL_KEY,
        onCloseRequest: o.NOOP_NULL
    }))
}