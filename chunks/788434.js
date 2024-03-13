function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openChangelog: function() {
            return l
        }
    });
    var a = n("37983");
    n("884691");
    var i = n("77078"),
        s = n("234222");

    function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !(!e && (0, i.hasAnyModalOpen)()) && (0, i.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("170935").then(n.bind(n, "170935"));
            return t => (0, a.jsx)(e, {
                ...t
            })
        }, {
            modalKey: s.CHANGELOG_MODAL_KEY
        })
    }
}