function(e, t, n) {
    "use strict";
    n("462568"), n("222007");
    var r = n("975169"),
        i = n("658683"),
        o = n("366400");
    e.exports = function() {
        r();
        var e = i();
        return o(Promise, {
            allSettled: e
        }, {
            allSettled: function() {
                return Promise.allSettled !== e
            }
        }), e
    }
}