function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDragDropManager: function() {
            return u
        }
    });
    var r = n("765981"),
        i = n("714382"),
        a = n("574543"),
        o = n("92861"),
        s = n("591723");

    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = function(e) {
                var t = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
                return (0, i.createStore)(a.reduce, e && t && t({
                    name: "dnd-core",
                    instanceId: "dnd-core"
                }))
            }(u),
            l = new o.DragDropMonitorImpl(c, new s.HandlerRegistryImpl(c)),
            d = new r.DragDropManagerImpl(c, l),
            f = e(d, t, n);
        return d.receiveBackend(f), d
    }
}