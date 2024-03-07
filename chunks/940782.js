function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return function e(t, s, i, u) {
                let {
                    length: n
                } = i, r = u, a = s;
                if (0 === n) return 0;
                if (null == r) r = a;
                else if (r === a) return a;
                if ((a += t === l.FindResultDirections.UP ? -1 : 1) < 0 || a >= n) return e(t, a < 0 ? n : -1, i, r);
                let o = i[a];
                return o.type === l.AutocompleterResultTypes.HEADER ? e(t, a, i, r) : a
            }
        }
    });
    var l = s("375822")
}