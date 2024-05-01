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
        let {
            stickerPack: t,
            sourceSticker: o,
            analyticsLocations: l,
            analyticsLocation: u
        } = e;
        return a.default.track(s.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
            sticker_id: null == o ? void 0 : o.id,
            sticker_pack_id: t.id,
            location: u,
            location_stack: l
        }), a.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: s.AnalyticsSections.STICKER_PACK_VIEW_ALL,
            location: u
        }), (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("39511")]).then(n.bind(n, "433550"));
            return n => (0, i.jsx)(e, {
                stickerPack: t,
                ...n
            })
        })
    }
}