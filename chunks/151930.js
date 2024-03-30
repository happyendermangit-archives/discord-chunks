function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchAllStickers: function() {
            return o
        }
    });
    var r = n("378309");
    n("922747");
    var o = function(e) {
        return r.default.queryStickers([e], !0).map(function(e) {
            return e.sticker
        })
    }
}