function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("77078"),
        r = {
            show(e) {
                let {
                    url: t,
                    trustUrl: r,
                    onConfirm: a,
                    isProtocol: o
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("153128").then(n.bind(n, "153128"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        url: t,
                        isProtocol: o,
                        trustUrl: r,
                        onConfirm: a
                    })
                })
            }
        }
}