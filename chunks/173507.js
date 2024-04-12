function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return r
        }
    });
    var d = a("735250");
    a("470079");
    var n = a("481060"),
        c = a("695346"),
        i = a("981631");

    function r(e, t) {
        c.AlwaysPreviewVideo.getSetting() ? (0, n.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([a.e("99387"), a.e("5528"), a.e("45733")]).then(a.bind(a, "601572"));
            return a => (0, d.jsx)(t, {
                ...a,
                onEnable: e,
                videoEnabled: !1
            })
        }, {
            modalKey: "camera-preview",
            contextKey: t === i.AppContext.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT
        }) : null == e || e()
    }
}