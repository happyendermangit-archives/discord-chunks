function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("599110"),
        s = n("49111");

    function r(e) {
        let {
            stickerPack: t,
            sourceSticker: r,
            analyticsLocations: o,
            analyticsLocation: u
        } = e;
        return a.default.track(s.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
            sticker_id: null == r ? void 0 : r.id,
            sticker_pack_id: t.id,
            location: u,
            location_stack: o
        }), a.default.track(s.AnalyticEvents.OPEN_MODAL, {
            type: s.AnalyticsSections.STICKER_PACK_VIEW_ALL,
            location: u
        }), (0, l.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("656137").then(n.bind(n, "656137"));
            return n => (0, i.jsx)(e, {
                stickerPack: t,
                ...n
            })
        })
    }
}