function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        confirmActivityAgeGateAlert: function() {
            return r
        }
    });
    var n = i("37983");
    i("884691");
    var l = i("77078"),
        a = i("870346"),
        u = i("49111");

    function r(t) {
        let {
            application: e,
            onAgree: r,
            onDisagree: d
        } = t, s = a.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT), o = s ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
        return (0, l.openModalLazy)(async () => {
            let {
                ActivityAgeGateModal: t
            } = await i.el("413012").then(i.bind(i, "413012"));
            return i => (0, n.jsx)(t, {
                ...i,
                application: e,
                onAgree: r,
                onDisagree: d
            })
        }, {
            modalKey: "activity-age-gate",
            contextKey: o
        }), Promise.resolve()
    }
}