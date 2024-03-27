function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        supportsHistory: function() {
            return i
        }
    });
    let r = (0, n("24716").getGlobalObject)();

    function i() {
        let t = r.chrome,
            e = t && t.app && t.app.runtime,
            n = "history" in r && !!r.history.pushState && !!r.history.replaceState;
        return !e && n
    }
}