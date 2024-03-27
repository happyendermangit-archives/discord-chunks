function(t, e, r) {
    "use strict";
    r("301563");
    var n = r("173850"),
        i = r("859209"),
        o = r("213265"),
        u = r("936940"),
        c = r("641236"),
        a = r("251069"),
        s = c("species"),
        f = RegExp.prototype;
    t.exports = function(t, e, r, l) {
        var v = c(t),
            p = !u(function() {
                var e = {};
                return e[v] = function() {
                    return 7
                }, 7 !== "" [t](e)
            }),
            d = p && !u(function() {
                var e = !1,
                    r = /a/;
                return "split" === t && ((r = {}).constructor = {}, r.constructor[s] = function() {
                    return r
                }, r.flags = "", r[v] = /./ [v]), r.exec = function() {
                    return e = !0, null
                }, r[v](""), !e
            });
        if (!p || !d || r) {
            var x = n(/./ [v]),
                g = e(v, "" [t], function(t, e, r, i, u) {
                    var c = n(t),
                        a = e.exec;
                    if (a === o || a === f.exec) return p && !u ? {
                        done: !0,
                        value: x(e, r, i)
                    } : {
                        done: !0,
                        value: c(r, e, i)
                    };
                    return {
                        done: !1
                    }
                });
            i(String.prototype, t, g[0]), i(f, v, g[1])
        }
        l && a(f[v], "sham", !0)
    }
}