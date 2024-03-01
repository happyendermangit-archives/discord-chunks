function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return a
        }
    });
    var r = i("37983");
    i("884691");
    var n = i("77078"),
        s = i("599110"),
        l = i("49111");

    function a(e) {
        s.default.track(l.AnalyticEvents.OPEN_MODAL, {
            type: l.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
            location: e
        }), (0, n.openModalLazy)(async () => {
            let {
                default: e
            } = await i.el("122846").then(i.bind(i, "122846"));
            return t => (0, r.jsx)(e, {
                ...t
            })
        })
    }
}