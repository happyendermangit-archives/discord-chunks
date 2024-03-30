function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("898511"),
        o = n("784184"),
        i = n("950879"),
        a = n("164161"),
        u = n("263924"),
        s = n("854106"),
        l = n("310734");
    t.default = function() {
        var e = (0, r.useStateFromStores)([s.default], function() {
                return s.default.hasLayers()
            }),
            t = (0, l.useFullScreenLayerStore)(function(e) {
                return e.fullScreenLayers.length > 0
            }),
            n = (0, a.useIsModalOpen)(),
            c = (0, o.useModalsStore)(o.hasAnyModalOpen),
            f = (0, r.useStateFromStores)([i.default], function() {
                return i.default.isConnected()
            }),
            d = (0, r.useStateFromStores)([u.default], function() {
                return u.default.isOpen()
            });
        return e || t || c || n || !f || d
    }
}