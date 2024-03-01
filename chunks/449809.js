function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        confirmNoSharedServerSubscribeWarningModal: function() {
            return a
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078");

    function a(e) {
        let {
            application: t,
            onConfirm: a,
            onCancel: s
        } = e;
        return (0, i.openModalLazy)(async () => {
            let {
                ConfirmNoSharedServerSubscribeWarningModal: e
            } = await n.el("754768").then(n.bind(n, "754768"));
            return n => (0, l.jsx)(e, {
                ...n,
                application: t,
                onConfirm: a,
                onCancel: s
            })
        }, {
            modalKey: "application-user-subscribe-no-shared-server-warning"
        }), Promise.resolve()
    }
}