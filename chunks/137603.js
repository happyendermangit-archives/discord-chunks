function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("161581"),
        a = n("112285").set,
        o = n("602932"),
        s = i.setImmediate ? o(a, !1) : a;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: i.setImmediate !== s
    }, {
        setImmediate: s
    })
}