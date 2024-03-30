function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o(e) {
        var t = e.size,
            n = e.horizontal,
            o = void 0 !== n && n,
            i = o ? t : 1,
            a = o ? 1 : t;
        return r.createElement("span", {
            style: {
                display: "block",
                width: i,
                minWidth: i,
                height: a,
                minHeight: a
            }
        })
    }
}