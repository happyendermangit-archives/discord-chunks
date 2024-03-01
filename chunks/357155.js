function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reduce: function() {
            return d
        }
    }), n("424973");
    var r = n("344581"),
        a = n("915717"),
        i = n("882846"),
        o = n("526114"),
        s = n("650789"),
        c = n("125692");

    function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return {
            dirtyHandlerIds: (0, o.reduce)(e.dirtyHandlerIds, {
                type: t.type,
                payload: u(u({}, t.payload), {}, {
                    prevTargetIds: (0, c.get)(e, "dragOperation.targetIds", [])
                })
            }),
            dragOffset: (0, r.reduce)(e.dragOffset, t),
            refCount: (0, i.reduce)(e.refCount, t),
            dragOperation: (0, a.reduce)(e.dragOperation, t),
            stateId: (0, s.reduce)(e.stateId)
        }
    }
}