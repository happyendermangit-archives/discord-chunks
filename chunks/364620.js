function(e, t, n) {
    "use strict";
    var r = n("129752").codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
        getHighWaterMark: function(e, t, n, i) {
            var o, s, a, c = (o = t, s = i, a = n, null != o.highWaterMark ? o.highWaterMark : s ? o[a] : null);
            if (null != c) {
                if (!(isFinite(c) && Math.floor(c) === c) || c < 0) throw new r(i ? n : "highWaterMark", c);
                return Math.floor(c)
            }
            return e.objectMode ? 16 : 16384
        }
    }
}