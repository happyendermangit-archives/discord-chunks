function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sortEffectLayers: function() {
            return i
        }
    });
    let i = e => e.sort((e, t) => {
        var n, i;
        return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (i = t.zIndex) && void 0 !== i ? i : 0)
    })
}