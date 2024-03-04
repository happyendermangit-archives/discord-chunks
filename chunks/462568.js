function(e, t, n) {
    "use strict";
    var r = n("859514"),
        i = n("868822"),
        o = n("727204"),
        s = n("379792"),
        a = n("952643"),
        c = n("585034");
    r({
        target: "Promise",
        stat: !0,
        forced: n("683229")
    }, {
        allSettled: function(e) {
            var t = this,
                n = s.f(t),
                r = n.resolve,
                u = n.reject,
                d = a(function() {
                    var n = o(t.resolve),
                        s = [],
                        a = 0,
                        u = 1;
                    c(e, function(e) {
                        var o = a++,
                            c = !1;
                        u++, i(n, t, e).then(function(e) {
                            !c && (c = !0, s[o] = {
                                status: "fulfilled",
                                value: e
                            }, --u || r(s))
                        }, function(e) {
                            !c && (c = !0, s[o] = {
                                status: "rejected",
                                reason: e
                            }, --u || r(s))
                        })
                    }), --u || r(s)
                });
            return d.error && u(d.value), n.promise
        }
    })
}