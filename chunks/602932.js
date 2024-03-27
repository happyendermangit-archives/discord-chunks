function(e, t, n) {
    "use strict";
    var r, i = n("161581"),
        a = n("197187"),
        o = n("354848"),
        s = n("177448"),
        u = n("626544"),
        c = n("50754"),
        l = n("202934"),
        d = i.Function;
    var f = /MSIE .\./.test(u) || s && ((r = i.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
    e.exports = function(e, t) {
        var n = t ? 2 : 1;
        return f ? function(r, i) {
            var s = l(arguments.length, 1) > n,
                u = o(r) ? r : d(r),
                f = s ? c(arguments, n) : [],
                p = s ? function() {
                    a(u, this, f)
                } : u;
            return t ? e(p, i) : e(p)
        } : e
    }
}