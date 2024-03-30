function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sortEffectLayers: function() {
            return r
        }
    });
    var r = function(e) {
        return e.sort(function(e, t) {
            var n, r;
            return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0)
        })
    }
}