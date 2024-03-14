function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openChangelog: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("77078"),
        l = n("234222");

    function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !(!e && (0, a.hasAnyModalOpen)()) && (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("170935").then(n.bind(n, "170935"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: l.CHANGELOG_MODAL_KEY
        })
    }
}