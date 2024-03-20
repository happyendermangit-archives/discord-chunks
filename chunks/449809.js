function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        confirmNoSharedServerSubscribeWarningModal: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("77078");

    function s(e) {
        let {
            application: t,
            onConfirm: s,
            onCancel: r
        } = e;
        return (0, a.openModalLazy)(async () => {
            let {
                ConfirmNoSharedServerSubscribeWarningModal: e
            } = await n.el("754768").then(n.bind(n, "754768"));
            return n => (0, i.jsx)(e, {
                ...n,
                application: t,
                onConfirm: s,
                onCancel: r
            })
        }, {
            modalKey: "application-user-subscribe-no-shared-server-warning"
        }), Promise.resolve()
    }
}