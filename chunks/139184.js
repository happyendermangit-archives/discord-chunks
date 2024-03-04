function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createHover: function() {
            return s
        }
    });
    var r = n("900255"),
        i = n("266087"),
        o = n("897345");

    function s(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = n.clientOffset;
            (function(e) {
                (0, r.invariant)(Array.isArray(e), "Expected targetIds to be an array.")
            })(t);
            var a = t.slice(0),
                c = e.getMonitor(),
                u = e.getRegistry();
            return function(e, t, n) {
                    (0, r.invariant)(t.isDragging(), "Cannot call hover while not dragging."), (0, r.invariant)(!t.didDrop(), "Cannot call hover after drop.");
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        (0, r.invariant)(e.lastIndexOf(o) === i, "Expected targetIds to be unique in the passed array.");
                        var s = n.getTarget(o);
                        (0, r.invariant)(s, "Expected targetIds to be registered.")
                    }
                }(a, c, u),
                function(e, t, n) {
                    for (var r = e.length - 1; r >= 0; r--) {
                        var o = e[r],
                            s = t.getTargetType(o);
                        !(0, i.matchesType)(s, n) && e.splice(r, 1)
                    }
                }(a, u, c.getItemType()),
                function(e, t, n) {
                    e.forEach(function(e) {
                        n.getTarget(e).hover(t, e)
                    })
                }(a, c, u), {
                    type: o.HOVER,
                    payload: {
                        targetIds: a,
                        clientOffset: s || null
                    }
                }
        }
    }
}