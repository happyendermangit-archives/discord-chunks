function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showInaccessibleLinkModal: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");

    function a(e) {
        let {
            kind: t
        } = e;
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("99387"), n.e("7285")]).then(n.bind(n, "951269"));
            return n => (0, i.jsx)(e, {
                ...n,
                kind: t
            })
        })
    }
}