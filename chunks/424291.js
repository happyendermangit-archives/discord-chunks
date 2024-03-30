function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        confirmActivityAgeGateAlert: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("522474"),
        a = n("981631");

    function o(e) {
        let {
            application: t,
            onAgree: o,
            onDisagree: l
        } = e, u = s.default.getWindowOpen(a.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        return (0, r.openModalLazy)(async () => {
            let {
                ActivityAgeGateModal: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("43782")]).then(n.bind(n, "224604"));
            return n => (0, i.jsx)(e, {
                ...n,
                application: t,
                onAgree: o,
                onDisagree: l
            })
        }, {
            modalKey: "activity-age-gate",
            contextKey: u
        }), Promise.resolve()
    }
}