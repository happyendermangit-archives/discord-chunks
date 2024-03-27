function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createHover: function() {
            return o
        }
    });
    var r = n("573654"),
        i = n("778010"),
        a = n("964742");

    function o(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.clientOffset;
            (function(e) {
                (0, r.invariant)(Array.isArray(e), "Expected targetIds to be an array.")
            })(t);
            var s = t.slice(0),
                u = e.getMonitor(),
                c = e.getRegistry();
            return function(e, t, n) {
                    (0, r.invariant)(t.isDragging(), "Cannot call hover while not dragging."), (0, r.invariant)(!t.didDrop(), "Cannot call hover after drop.");
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        (0, r.invariant)(e.lastIndexOf(a) === i, "Expected targetIds to be unique in the passed array.");
                        var o = n.getTarget(a);
                        (0, r.invariant)(o, "Expected targetIds to be registered.")
                    }
                }(s, u, c),
                function(e, t, n) {
                    for (var r = e.length - 1; r >= 0; r--) {
                        var a = e[r],
                            o = t.getTargetType(a);
                        !(0, i.matchesType)(o, n) && e.splice(r, 1)
                    }
                }(s, c, u.getItemType()),
                function(e, t, n) {
                    e.forEach(function(e) {
                        n.getTarget(e).hover(t, e)
                    })
                }(s, u, c), {
                    type: a.HOVER,
                    payload: {
                        targetIds: s,
                        clientOffset: o || null
                    }
                }
        }
    }
}