function(t, r, e) {
    "use strict";
    var n = e("814026"),
        o = e("64980"),
        i = e("18563"),
        a = URLSearchParams.prototype,
        u = o(a.forEach);
    n && !("size" in a) && i(a, "size", {
        get: function() {
            var t = 0;
            return u(this, function() {
                t++
            }), t
        },
        configurable: !0,
        enumerable: !0
    })
}