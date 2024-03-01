function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        confirmExternalAppLaunchAlert: function() {
            return a
        }
    });
    var n = i("37983");
    i("884691");
    var l = i("77078");

    function a(e) {
        let {
            application: t,
            onConfirm: a,
            onCancel: u
        } = e;
        return (0, l.openModalLazy)(async () => {
            let {
                default: e
            } = await i.el("285281").then(i.bind(i, "285281"));
            return i => (0, n.jsx)(e, {
                application: t,
                onConfirm: a,
                onCancel: u,
                ...i
            })
        }), Promise.resolve()
    }
}