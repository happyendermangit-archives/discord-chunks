function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        confirmExternalAppLaunchAlert: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");

    function s(e) {
        let {
            application: t,
            onConfirm: s,
            onCancel: a
        } = e;
        return (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("99387"), n.e("18367")]).then(n.bind(n, "557751"));
            return n => (0, i.jsx)(e, {
                application: t,
                onConfirm: s,
                onCancel: a,
                ...n
            })
        }), Promise.resolve()
    }
}