function(t, r, n) {
    "use strict";
    var e = n("859514"),
        i = n("383053").right,
        o = n("528151"),
        u = n("693523"),
        a = n("106106");
    e({
        target: "Array",
        proto: !0,
        forced: !a && u > 79 && u < 83 || !o("reduceRight")
    }, {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}