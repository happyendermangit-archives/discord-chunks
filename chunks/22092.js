function(t, r, n) {
    "use strict";
    var e = n("161581"),
        o = n("936940"),
        i = n("80270"),
        u = n("192291").NATIVE_ARRAY_BUFFER_VIEWS,
        f = e.ArrayBuffer,
        c = e.Int8Array;
    t.exports = !u || !o(function() {
        c(1)
    }) || !o(function() {
        new c(-1)
    }) || !i(function(t) {
        new c, new c(null), new c(1.5), new c(t)
    }, !0) || o(function() {
        return 1 !== new c(new f(2), 1, void 0).length
    })
}