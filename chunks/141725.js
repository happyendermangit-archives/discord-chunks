function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reduce: function() {
            return u
        }
    });
    var r = n("263016"),
        i = n("304832");

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach(function(t) {
                (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var s = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null
    };

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.payload;
        switch (t.type) {
            case r.INIT_COORDS:
            case r.BEGIN_DRAG:
                return {
                    initialSourceClientOffset: n.sourceClientOffset, initialClientOffset: n.clientOffset, clientOffset: n.clientOffset
                };
            case r.HOVER:
                if ((0, i.areCoordsEqual)(e.clientOffset, n.clientOffset)) return e;
                return o(o({}, e), {}, {
                    clientOffset: n.clientOffset
                });
            case r.END_DRAG:
            case r.DROP:
                return s;
            default:
                return e
        }
    }
}