function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        within: function() {
            return a
        },
        withinMaxClamp: function() {
            return o
        }
    });
    var r = n("757367");

    function a(e, t, n) {
        return (0, r.max)(e, (0, r.min)(t, n))
    }

    function o(e, t, n) {
        var r = a(e, t, n);
        return r > n ? n : r
    }
}