function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        requireSortedDescending: function() {
            return s
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("709054");

    function s(e) {
        r()(e.length <= 2 || a.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
    }
}