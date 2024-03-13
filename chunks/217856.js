function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("383053").right,
        o = n("528151"),
        i = n("693523"),
        s = n("106106");
    r({
        target: "Array",
        proto: !0,
        forced: !s && i > 79 && i < 83 || !o("reduceRight")
    }, {
        reduceRight: function(e) {
            return a(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}