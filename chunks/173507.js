function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return o
        }
    });
    var d = a("735250");
    a("470079");
    var n = a("481060"),
        i = a("695346"),
        c = a("981631");

    function o(e, t) {
        i.AlwaysPreviewVideo.getSetting() ? (0, n.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([a.e("99387"), a.e("5528"), a.e("13170")]).then(a.bind(a, "601572"));
            return a => (0, d.jsx)(t, {
                ...a,
                onEnable: e,
                videoEnabled: !1
            })
        }, {
            modalKey: "camera-preview",
            contextKey: t === c.AppContext.POPOUT ? n.POPOUT_MODAL_CONTEXT : n.DEFAULT_MODAL_CONTEXT
        }) : null == e || e()
    }
}