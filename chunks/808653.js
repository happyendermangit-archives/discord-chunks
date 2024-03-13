function(t, r, e) {
    "use strict";
    var n = e("859514"),
        o = e("383053").left,
        i = e("528151"),
        a = e("693523"),
        u = e("106106");
    n({
        target: "Array",
        proto: !0,
        forced: !u && a > 79 && a < 83 || !i("reduce")
    }, {
        reduce: function(t) {
            var r = arguments.length;
            return o(this, t, r, r > 1 ? arguments[1] : void 0)
        }
    })
}