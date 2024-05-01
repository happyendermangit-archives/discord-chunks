function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        requireSortedDescending: function() {
            return a
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("709054");

    function a(e) {
        r()(e.length <= 2 || s.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
    }
}