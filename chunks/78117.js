function(t, r, n) {
    "use strict";
    n("780440");
    var e = n("404446"),
        i = n("484784"),
        u = n("274198"),
        o = n("664144"),
        c = n("174669"),
        a = n("366483"),
        s = c("species"),
        f = RegExp.prototype;
    t.exports = function(t, r, n, l) {
        var p = c(t),
            v = !o(function() {
                var r = {};
                return r[p] = function() {
                    return 7
                }, 7 !== "" [t](r)
            }),
            x = v && !o(function() {
                var r = !1,
                    n = /a/;
                return "split" === t && ((n = {}).constructor = {}, n.constructor[s] = function() {
                    return n
                }, n.flags = "", n[p] = /./ [p]), n.exec = function() {
                    return r = !0, null
                }, n[p](""), !r
            });
        if (!v || !x || n) {
            var h = e(/./ [p]),
                d = r(p, "" [t], function(t, r, n, i, o) {
                    var c = e(t),
                        a = r.exec;
                    if (a === u || a === f.exec) return v && !o ? {
                        done: !0,
                        value: h(r, n, i)
                    } : {
                        done: !0,
                        value: c(n, r, i)
                    };
                    return {
                        done: !1
                    }
                });
            i(String.prototype, t, d[0]), i(f, p, d[1])
        }
        l && a(f[p], "sham", !0)
    }
}