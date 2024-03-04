function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createBeginDrag: function() {
            return c
        }
    }), n("70102");
    var r = n("900255"),
        i = n("235485"),
        o = n("125692"),
        s = n("897345"),
        a = {
            type: s.INIT_COORDS,
            payload: {
                clientOffset: null,
                sourceClientOffset: null
            }
        };

    function c(e) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    publishSource: !0
                },
                c = n.publishSource,
                u = n.clientOffset,
                d = n.getSourceClientOffset,
                l = e.getMonitor(),
                f = e.getRegistry();
            e.dispatch((0, i.setClientOffset)(u)),
                function(e, t, n) {
                    (0, r.invariant)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(e) {
                        (0, r.invariant)(n.getSource(e), "Expected sourceIds to be registered.")
                    })
                }(t, l, f);
            var p = function(e, t) {
                for (var n = null, r = e.length - 1; r >= 0; r--)
                    if (t.canDragSource(e[r])) {
                        n = e[r];
                        break
                    } return n
            }(t, l);
            if (null === p) {
                e.dispatch(a);
                return
            }
            var h = null;
            if (u) {
                if (!d) throw Error("getSourceClientOffset must be defined");
                (function(e) {
                    (0, r.invariant)("function" == typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
                })(d), h = d(p)
            }
            e.dispatch((0, i.setClientOffset)(u, h));
            var v = f.getSource(p).beginDrag(l, p);
            if (null != v) {
                (function(e) {
                    (0, r.invariant)((0, o.isObject)(e), "Item must be an object.")
                })(v), f.pinSource(p);
                var g = f.getSourceType(p);
                return {
                    type: s.BEGIN_DRAG,
                    payload: {
                        itemType: g,
                        item: v,
                        sourceId: p,
                        clientOffset: u || null,
                        sourceClientOffset: h || null,
                        isSourcePublic: !!(void 0 === c || c)
                    }
                }
            }
        }
    }
}