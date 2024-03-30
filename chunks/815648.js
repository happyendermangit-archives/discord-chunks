function(e, t, n) {
    "use strict";
    var r = n("325008"),
        i = n("581031"),
        a = n("4340"),
        o = URLSearchParams.prototype,
        s = i(o.forEach);
    r && !("size" in o) && a(o, "size", {
        get: function() {
            var e = 0;
            return s(this, function() {
                e++
            }), e
        },
        configurable: !0,
        enumerable: !0
    })
}