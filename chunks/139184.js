function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createHover: function() {
            return o
        }
    });
    var r = n("900255"),
        a = n("266087"),
        i = n("897345");

    function o(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.clientOffset;
            (function(e) {
                (0, r.invariant)(Array.isArray(e), "Expected targetIds to be an array.")
            })(t);
            var s = t.slice(0),
                c = e.getMonitor(),
                l = e.getRegistry();
            return function(e, t, n) {
                    (0, r.invariant)(t.isDragging(), "Cannot call hover while not dragging."), (0, r.invariant)(!t.didDrop(), "Cannot call hover after drop.");
                    for (var a = 0; a < e.length; a++) {
                        var i = e[a];
                        (0, r.invariant)(e.lastIndexOf(i) === a, "Expected targetIds to be unique in the passed array.");
                        var o = n.getTarget(i);
                        (0, r.invariant)(o, "Expected targetIds to be registered.")
                    }
                }(s, c, l),
                function(e, t, n) {
                    for (var r = e.length - 1; r >= 0; r--) {
                        var i = e[r],
                            o = t.getTargetType(i);
                        !(0, a.matchesType)(o, n) && e.splice(r, 1)
                    }
                }(s, l, c.getItemType()),
                function(e, t, n) {
                    e.forEach(function(e) {
                        n.getTarget(e).hover(t, e)
                    })
                }(s, c, l), {
                    type: i.HOVER,
                    payload: {
                        targetIds: s,
                        clientOffset: o || null
                    }
                }
        }
    }
}