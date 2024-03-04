function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        requireSortedDescending: function() {
            return a
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("299039");

    function a(e) {
        s(e.length <= 2 || r.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
    }
}