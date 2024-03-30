function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = Object.freeze({
            overflowY: "scroll",
            overflowX: "hidden"
        }),
        o = Object.freeze({
            overflowX: "scroll",
            overflowY: "hidden"
        }),
        i = Object.freeze({
            overflow: "auto"
        });

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
            n = "vertical" === t ? r : "horizontal" === t ? o : i;
        return null != e ? function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, n, e) : n
    }
}