function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showModal: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");

    function s(e, t) {
        (0, r.openModalLazy)(async () => {
            let {
                default: r
            } = await Promise.all([n.e("99387"), n.e("74112"), n.e("10667")]).then(n.bind(n, "253762"));
            return n => (0, i.jsx)(r, {
                analyticsLocation: e,
                platformType: t,
                ...n
            })
        })
    }
}