function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return function e(t, n, r, a) {
                let {
                    length: s
                } = r, o = a, l = n;
                if (0 === s) return 0;
                if (null == o) o = l;
                else if (o === l) return l;
                return (l += t === i.FindResultDirections.UP ? -1 : 1) < 0 || l >= s ? e(t, l < 0 ? s : -1, r, o) : r[l].type === i.AutocompleterResultTypes.HEADER ? e(t, l, r, o) : l
            }
        }
    });
    var i = n("727785")
}