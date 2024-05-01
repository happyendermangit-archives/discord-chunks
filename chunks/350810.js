function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("442837"),
        r = n("481060"),
        s = n("38618"),
        a = n("272423"),
        o = n("823385"),
        l = n("819640"),
        u = n("725568");
    t.default = () => {
        let e = (0, i.useStateFromStores)([l.default], () => l.default.hasLayers()),
            t = (0, u.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
            n = (0, a.useIsModalOpen)(),
            d = (0, r.useModalsStore)(r.hasAnyModalOpen),
            _ = (0, i.useStateFromStores)([s.default], () => s.default.isConnected()),
            c = (0, i.useStateFromStores)([o.default], () => o.default.isOpen());
        return e || t || d || n || !_ || c
    }
}