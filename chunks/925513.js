function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        requireSortedDescending: function() {
            return a
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("523018");

    function a(e) {
        o()(e.length <= 2 || i.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
    }
}