function(t, r, n) {
    "use strict";
    var e = n("814026"),
        i = n("64980"),
        o = n("18563"),
        u = URLSearchParams.prototype,
        a = i(u.forEach);
    e && !("size" in u) && o(u, "size", {
        get: function() {
            var t = 0;
            return a(this, function() {
                t++
            }), t
        },
        configurable: !0,
        enumerable: !0
    })
}