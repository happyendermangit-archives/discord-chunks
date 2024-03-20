function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return l
        }
    });
    var i = r("37983");
    r("884691");
    var n = r("77078"),
        s = r("599110"),
        a = r("49111");

    function l(e) {
        s.default.track(a.AnalyticEvents.OPEN_MODAL, {
            type: a.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
            location: e
        }), (0, n.openModalLazy)(async () => {
            let {
                default: e
            } = await r.el("122846").then(r.bind(r, "122846"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }
}