function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return function e(t, n, r, s) {
                let {
                    length: a
                } = r, o = s, l = n;
                if (0 === a) return 0;
                if (null == o) o = l;
                else if (o === l) return l;
                return (l += t === i.FindResultDirections.UP ? -1 : 1) < 0 || l >= a ? e(t, l < 0 ? a : -1, r, o) : r[l].type === i.AutocompleterResultTypes.HEADER ? e(t, l, r, o) : l
            }
        }
    });
    var i = n("727785")
}