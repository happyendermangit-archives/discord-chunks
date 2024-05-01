function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertSkemaError: function() {
            return r
        }
    });
    let i = "_errors";

    function r(e) {
        let t = {};
        for (let n in e) {
            let r = e[n];
            if (null == r) continue;
            if (n === i && (t._misc = e[n].map(e => e.message)), Array.isArray(r)) continue;
            let s = r[i];
            null != s ? t[n] = s.map(e => e.message) : t[n] = [Object.keys(r)[0]]
        }
        return t
    }
}