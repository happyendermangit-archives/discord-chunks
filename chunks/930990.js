function(t, r, n) {
    "use strict";
    var e = n("545576"),
        o = n("4340"),
        i = n("641236"),
        u = n("325008"),
        f = i("species");
    t.exports = function(t) {
        var r = e(t);
        u && r && !r[f] && o(r, f, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}