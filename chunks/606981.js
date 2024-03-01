function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getFirstSkemaError: function() {
            return i
        }
    }), n("222007");
    let a = "_errors";

    function i(t) {
        return function t(e, n) {
            let i = e[a];
            if (null != i && Array.isArray(i)) return i[0];
            for (let [i, l] of Object.entries(e))
                if (i !== a && null != l && "object" == typeof l) return t(l, null != n ? n : i);
            return null
        }(t, void 0)
    }
}