function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return i
        }
    });
    var s = t("37983");
    t("884691");
    var d = t("77078"),
        n = t("845579"),
        c = t("49111");

    function i(e, a) {
        n.AlwaysPreviewVideo.getSetting() ? (0, d.openModalLazy)(async () => {
            let {
                default: a
            } = await t.el("381736").then(t.bind(t, "381736"));
            return t => (0, s.jsx)(a, {
                ...t,
                onEnable: e,
                videoEnabled: !1
            })
        }, {
            modalKey: "camera-preview",
            contextKey: a === c.AppContext.POPOUT ? d.POPOUT_MODAL_CONTEXT : d.DEFAULT_MODAL_CONTEXT
        }) : null == e || e()
    }
}