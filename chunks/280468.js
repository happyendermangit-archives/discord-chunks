function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        requireSortedDescending: function() {
            return a
        }
    });
    var s = n("627445"),
        i = n.n(s),
        r = n("299039");

    function a(e) {
        i(e.length <= 2 || r.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
    }
}