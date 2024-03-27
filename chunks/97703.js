function(e, t, n) {
    "use strict";
    var r = n("531478").codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
        getHighWaterMark: function(e, t, n, i) {
            var a, o, s, u = (a = t, o = i, s = n, null != a.highWaterMark ? a.highWaterMark : o ? a[s] : null);
            if (null != u) {
                if (!(isFinite(u) && Math.floor(u) === u) || u < 0) throw new r(i ? n : "highWaterMark", u);
                return Math.floor(u)
            }
            return e.objectMode ? 16 : 16384
        }
    }
}