function(t, e, s) {
    "use strict";
    s("462568"), s("222007");
    var r = s("975169"),
        i = s("658683"),
        n = s("366400");
    t.exports = function() {
        r();
        var t = i();
        return n(Promise, {
            allSettled: t
        }, {
            allSettled: function() {
                return Promise.allSettled !== t
            }
        }), t
    }
}