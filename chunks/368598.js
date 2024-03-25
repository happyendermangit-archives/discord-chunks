function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("446674"),
        r = n("77078"),
        s = n("619443"),
        l = n("153498"),
        i = n("116460"),
        u = n("778588"),
        o = n("708169"),
        d = () => {
            let e = (0, a.useStateFromStores)([u.default], () => u.default.hasLayers()),
                t = (0, o.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0),
                n = (0, l.useIsModalOpen)(),
                d = (0, r.useModalsStore)(r.hasAnyModalOpen),
                c = (0, a.useStateFromStores)([s.default], () => s.default.isConnected()),
                f = (0, a.useStateFromStores)([i.default], () => i.default.isOpen());
            return e || t || d || n || !c || f
        }
}