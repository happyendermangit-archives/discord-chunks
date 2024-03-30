function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return function e(t, n, o, i) {
                var a = o.length,
                    u = i,
                    s = n;
                if (0 === a) return 0;
                if (null == u) u = s;
                else if (u === s) return s;
                return (s += t === r.FindResultDirections.UP ? -1 : 1) < 0 || s >= a ? e(t, s < 0 ? a : -1, o, u) : o[s].type === r.AutocompleterResultTypes.HEADER ? e(t, s, o, u) : s
            }
        }
    });
    var r = n("225342")
}