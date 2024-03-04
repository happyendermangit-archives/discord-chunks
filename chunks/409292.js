function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDragDropManager: function() {
            return c
        }
    });
    var r = n("877385"),
        i = n("652483"),
        o = n("357155"),
        s = n("504729"),
        a = n("156799");

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = function(e) {
                var t = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
                return (0, i.createStore)(o.reduce, e && t && t({
                    name: "dnd-core",
                    instanceId: "dnd-core"
                }))
            }(c),
            d = new s.DragDropMonitorImpl(u, new a.HandlerRegistryImpl(u)),
            l = new r.DragDropManagerImpl(u, d),
            f = e(l, t, n);
        return l.receiveBackend(f), l
    }
}