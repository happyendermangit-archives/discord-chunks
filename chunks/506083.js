function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("140925"),
        o = n("718530"),
        i = n("664144"),
        s = n("434978"),
        u = n("125359"),
        l = n("499460"),
        c = n("33270"),
        d = n("484784"),
        f = o && o.prototype;
    if (r({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!o && i(function() {
                f.finally.call({
                    then: function() {}
                }, function() {})
            })
        }, {
            finally: function(e) {
                var t = l(this, s("Promise")),
                    n = u(e);
                return this.then(n ? function(n) {
                    return c(t, e()).then(function() {
                        return n
                    })
                } : e, n ? function(n) {
                    return c(t, e()).then(function() {
                        throw n
                    })
                } : e)
            }
        }), !a && u(o)) {
        var p = s("Promise").prototype.finally;
        f.finally !== p && d(f, "finally", p, {
            unsafe: !0
        })
    }
}