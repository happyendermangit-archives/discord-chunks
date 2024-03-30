function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("926515"),
        a = n("526988"),
        o = n("213897"),
        s = n("532055"),
        u = n("71480");
    r({
        target: "Promise",
        stat: !0,
        forced: n("246582")
    }, {
        allSettled: function(e) {
            var t = this,
                n = o.f(t),
                r = n.resolve,
                c = n.reject,
                l = s(function() {
                    var n = a(t.resolve),
                        o = [],
                        s = 0,
                        c = 1;
                    u(e, function(e) {
                        var a = s++,
                            u = !1;
                        c++, i(n, t, e).then(function(e) {
                            !u && (u = !0, o[a] = {
                                status: "fulfilled",
                                value: e
                            }, --c || r(o))
                        }, function(e) {
                            !u && (u = !0, o[a] = {
                                status: "rejected",
                                reason: e
                            }, --c || r(o))
                        })
                    }), --c || r(o)
                });
            return l.error && c(l.value), n.promise
        }
    })
}