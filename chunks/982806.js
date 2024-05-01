function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060");
    t.default = {
        show(e) {
            let {
                url: t,
                trustUrl: a,
                onConfirm: s,
                isProtocol: o
            } = e;
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("85668")]).then(n.bind(n, "720553"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    url: t,
                    isProtocol: o,
                    trustUrl: a,
                    onConfirm: s
                })
            })
        }
    }
}