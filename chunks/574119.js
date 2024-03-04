function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDrop: function() {
            return c
        }
    }), n("424973");
    var r = n("900255"),
        i = n("897345"),
        o = n("125692");

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function c(e) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.getMonitor(),
                s = e.getRegistry();
            (function(e) {
                (0, r.invariant)(e.isDragging(), "Cannot call drop while not dragging."), (0, r.invariant)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
            })(n), (function(e) {
                var t = e.getTargetIds().filter(e.canDropOnTarget, e);
                return t.reverse(), t
            })(n).forEach(function(c, u) {
                var d = function(e, t, n, i) {
                        var s = n.getTarget(e),
                            a = s ? s.drop(i, e) : void 0;
                        return function(e) {
                            (0, r.invariant)(void 0 === e || (0, o.isObject)(e), "Drop result must either be an object or undefined.")
                        }(a), void 0 === a && (a = 0 === t ? {} : i.getDropResult()), a
                    }(c, u, s, n),
                    l = {
                        type: i.DROP,
                        payload: {
                            dropResult: a(a({}, t), d)
                        }
                    };
                e.dispatch(l)
            })
        }
    }
}