function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDrop: function() {
            return u
        }
    });
    var r = n("573654"),
        i = n("964742"),
        a = n("144459");

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function u(e) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.getMonitor(),
                o = e.getRegistry();
            (function(e) {
                (0, r.invariant)(e.isDragging(), "Cannot call drop while not dragging."), (0, r.invariant)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
            })(n), (function(e) {
                var t = e.getTargetIds().filter(e.canDropOnTarget, e);
                return t.reverse(), t
            })(n).forEach(function(u, c) {
                var l = function(e, t, n, i) {
                        var o = n.getTarget(e),
                            s = o ? o.drop(i, e) : void 0;
                        return function(e) {
                            (0, r.invariant)(void 0 === e || (0, a.isObject)(e), "Drop result must either be an object or undefined.")
                        }(s), void 0 === s && (s = 0 === t ? {} : i.getDropResult()), s
                    }(u, c, o, n),
                    d = {
                        type: i.DROP,
                        payload: {
                            dropResult: s(s({}, t), l)
                        }
                    };
                e.dispatch(d)
            })
        }
    }
}