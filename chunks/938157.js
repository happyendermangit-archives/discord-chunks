function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showModal: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("77078");

    function r(e, t) {
        (0, s.openModalLazy)(async () => {
            let {
                default: s
            } = await n.el("59833").then(n.bind(n, "59833"));
            return n => (0, i.jsx)(s, {
                analyticsLocation: e,
                platformType: t,
                ...n
            })
        })
    }
}