function(e, t, n) {
    "use strict";

    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value;
                if (null != s && s) return s
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
    }
    n.r(t), n.d(t, {
        getFirstTruthyValue: function() {
            return r
        }
    })
}