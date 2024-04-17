function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyPatches: function() {
            return r
        },
        sortEffectLayers: function() {
            return i
        }
    });
    let i = e => e.sort((e, t) => {
            var n, i;
            return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (i = t.zIndex) && void 0 !== i ? i : 0)
        }),
        r = e => {
            if ("1228233381897179137" === e.id || "1228234629429985300" === e.id) {
                var t;
                (null === (t = e.config.effects) || void 0 === t ? void 0 : t.length) >= 2 && (e.config.effects[1].start = 2832)
            }
            return e
        }
}