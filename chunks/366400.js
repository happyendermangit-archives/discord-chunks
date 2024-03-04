function(e, t, n) {
    "use strict";
    var r = n("105195"),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        o = Object.prototype.toString,
        s = Array.prototype.concat,
        a = n("307904"),
        c = n("638839")(),
        u = function(e, t, n, r) {
            if (t in e) {
                if (!0 === r) {
                    if (e[t] === n) return
                } else {
                    var i;
                    if (!("function" == typeof(i = r) && "[object Function]" === o.call(i)) || !r()) return
                }
            }
            c ? a(e, t, n, !0) : a(e, t, n)
        },
        d = function(e, t) {
            var n = arguments.length > 2 ? arguments[2] : {},
                o = r(t);
            i && (o = s.call(o, Object.getOwnPropertySymbols(t)));
            for (var a = 0; a < o.length; a += 1) u(e, o[a], t[o[a]], n[o[a]])
        };
    d.supportsDescriptors = !!c, e.exports = d
}