function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("626135"),
        s = n("981631");

    function o(e) {
        a.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: s.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
            location: e
        }), (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("75613")]).then(n.bind(n, "72691"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }
}