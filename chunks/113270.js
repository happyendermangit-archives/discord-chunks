function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return a
        }
    });
    var n = r("37983");
    r("884691");
    var i = r("77078"),
        s = r("599110"),
        l = r("49111");

    function a(e) {
        s.default.track(l.AnalyticEvents.OPEN_MODAL, {
            type: l.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
            location: e
        }), (0, i.openModalLazy)(async () => {
            let {
                default: e
            } = await r.el("122846").then(r.bind(r, "122846"));
            return t => (0, n.jsx)(e, {
                ...t
            })
        })
    }
}