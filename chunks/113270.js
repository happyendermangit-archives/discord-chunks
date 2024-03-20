function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return l
        }
    });
    var r = i("37983");
    i("884691");
    var n = i("77078"),
        s = i("599110"),
        a = i("49111");

    function l(e) {
        s.default.track(a.AnalyticEvents.OPEN_MODAL, {
            type: a.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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