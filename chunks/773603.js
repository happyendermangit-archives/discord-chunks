function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("992051"),
        a = n("955903"),
        o = n("936940"),
        s = n("545576"),
        u = n("354848"),
        c = n("344135"),
        l = n("457110"),
        d = n("859209"),
        f = a && a.prototype;
    if (r({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!a && o(function() {
                f.finally.call({
                    then: function() {}
                }, function() {})
            })
        }, {
            finally: function(e) {
                var t = c(this, s("Promise")),
                    n = u(e);
                return this.then(n ? function(n) {
                    return l(t, e()).then(function() {
                        return n
                    })
                } : e, n ? function(n) {
                    return l(t, e()).then(function() {
                        throw n
                    })
                } : e)
            }
        }), !i && u(a)) {
        var p = s("Promise").prototype.finally;
        f.finally !== p && d(f, "finally", p, {
            unsafe: !0
        })
    }
}