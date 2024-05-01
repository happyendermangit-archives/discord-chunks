function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openChangelog: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("596401");

    function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !(!e && (0, r.hasAnyModalOpen)()) && (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("81539"), n.e("44808")]).then(n.bind(n, "678420"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: s.CHANGELOG_MODAL_KEY
        })
    }
}