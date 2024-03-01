function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("503486"),
        o = n("335925").set,
        i = n("694803"),
        s = a.setImmediate ? i(o, !1) : o;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: a.setImmediate !== s
    }, {
        setImmediate: s
    })
}