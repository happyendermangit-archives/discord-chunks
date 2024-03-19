function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return i
        }
    });
    var d = t("37983");
    t("884691");
    var s = t("77078"),
        n = t("845579"),
        c = t("49111");

    function i(e, a) {
        n.AlwaysPreviewVideo.getSetting() ? (0, s.openModalLazy)(async () => {
            let {
                default: a
            } = await t.el("381736").then(t.bind(t, "381736"));
            return t => (0, d.jsx)(a, {
                ...t,
                onEnable: e,
                videoEnabled: !1
            })
        }, {
            modalKey: "camera-preview",
            contextKey: a === c.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
        }) : null == e || e()
    }
}