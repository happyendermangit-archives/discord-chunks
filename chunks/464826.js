function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        within: function() {
            return i
        },
        withinMaxClamp: function() {
            return a
        }
    });
    var r = n("894417");

    function i(e, t, n) {
        return (0, r.max)(e, (0, r.min)(t, n))
    }

    function a(e, t, n) {
        var r = i(e, t, n);
        return r > n ? n : r
    }
}