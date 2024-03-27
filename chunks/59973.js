function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createBeginDrag: function() {
            return u
        }
    });
    var r = n("573654"),
        i = n("158545"),
        a = n("144459"),
        o = n("964742"),
        s = {
            type: o.INIT_COORDS,
            payload: {
                clientOffset: null,
                sourceClientOffset: null
            }
        };

    function u(e) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    publishSource: !0
                },
                u = n.publishSource,
                c = n.clientOffset,
                l = n.getSourceClientOffset,
                d = e.getMonitor(),
                f = e.getRegistry();
            e.dispatch((0, i.setClientOffset)(c)),
                function(e, t, n) {
                    (0, r.invariant)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
                        (0, r.invariant)(n.getSource(e), "Expected sourceIds to be registered.")
                    })
                }(t, d, f);
            var p = function(e, t) {
                for (var n = null, r = e.length - 1; r >= 0; r--)
                    if (t.canDragSource(e[r])) {
                        n = e[r];
                        break
                    } return n
            }(t, d);
            if (null === p) {
                e.dispatch(s);
                return
            }
            var h = null;
            if (c) {
                if (!l) throw Error("getSourceClientOffset must be defined");
                (function(e) {
                    (0, r.invariant)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
                })(l), h = l(p)
            }
            e.dispatch((0, i.setClientOffset)(c, h));
            var m = f.getSource(p).beginDrag(d, p);
            if (null != m) {
                (function(e) {
                    (0, r.invariant)((0, a.isObject)(e), "Item must be an object.")
                })(m), f.pinSource(p);
                var g = f.getSourceType(p);
                return {
                    type: o.BEGIN_DRAG,
                    payload: {
                        itemType: g,
                        item: m,
                        sourceId: p,
                        clientOffset: c || null,
                        sourceClientOffset: h || null,
                        isSourcePublic: !!(void 0 === u || u)
                    }
                }
            }
        }
    }
}