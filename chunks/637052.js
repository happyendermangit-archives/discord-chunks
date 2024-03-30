function(e, t, n) {
    "use strict";
    n.r(t);
    i = n("767734").default;
    var r, o, i, a = [],
        u = !1;
    t.default = (r = function(e) {
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
    }({}, i), o = (o = {
        awaitOnline: function() {
            return new Promise(function(e) {
                if (i.isOnline()) return e();
                if (a.push(e), !u) {
                    u = !0;
                    var t = function() {
                        a.forEach(function(e) {
                            return e()
                        }), a.length = 0, u = !1, i.removeOnlineCallback(t)
                    };
                    i.addOnlineCallback(t)
                }
            })
        }
    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
    }), r)
}