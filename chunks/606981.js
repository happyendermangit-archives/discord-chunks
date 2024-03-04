function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFirstSkemaError: function() {
            return s
        }
    }), n("222007");
    let i = "_errors";

    function s(e) {
        return function e(t, n) {
            let s = t[i];
            if (null != s && Array.isArray(s)) return s[0];
            for (let [s, r] of Object.entries(t))
                if (s !== i && null != r && "object" == typeof r) return e(r, null != n ? n : s);
            return null
        }(e, void 0)
    }
}