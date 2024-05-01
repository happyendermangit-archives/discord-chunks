function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFirstSkemaError: function() {
            return r
        }
    }), n("47120");
    let i = "_errors";

    function r(e) {
        return function e(t, n) {
            let r = t[i];
            if (null != r && Array.isArray(r)) return r[0];
            for (let [r, a] of Object.entries(t))
                if (r !== i && null != a && "object" == typeof a) return e(a, null != n ? n : r);
            return null
        }(e, void 0)
    }
}