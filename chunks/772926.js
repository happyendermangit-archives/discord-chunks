function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        confirmExternalAppLaunchAlert: function() {
            return a
        }
    });
    var n = i("37983");
    i("884691");
    var l = i("77078");

    function a(t) {
        let {
            application: e,
            onConfirm: a,
            onCancel: u
        } = t;
        return (0, l.openModalLazy)(async () => {
            let {
                default: t
            } = await i.el("285281").then(i.bind(i, "285281"));
            return i => (0, n.jsx)(t, {
                application: e,
                onConfirm: a,
                onCancel: u,
                ...i
            })
        }), Promise.resolve()
    }
}