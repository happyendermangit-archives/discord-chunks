function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showModal: function() {
            return r
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("77078");

    function r(e, t) {
        (0, i.openModalLazy)(async () => {
            let {
                default: i
            } = await n.el("59833").then(n.bind(n, "59833"));
            return n => (0, s.jsx)(i, {
                analyticsLocation: e,
                platformType: t,
                ...n
            })
        })
    }
}