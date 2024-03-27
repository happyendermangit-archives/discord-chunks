function(t, r, e) {
    "use strict";
    var n = e("147018"),
        o = e("510030").left,
        i = e("191506"),
        a = e("106295"),
        c = e("391673");
    n({
        target: "Array",
        proto: !0,
        forced: !c && a > 79 && a < 83 || !i("reduce")
    }, {
        reduce: function(t) {
            var r = arguments.length;
            return o(this, t, r, r > 1 ? arguments[1] : void 0)
        }
    })
}