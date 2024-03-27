function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        bindReporter: function() {
            return r
        }
    });
    let r = (t, e, n) => {
        let r, i;
        return a => {
            e.value >= 0 && (a || n) && ((i = e.value - (r || 0)) || void 0 === r) && (r = e.value, e.delta = i, t(e))
        }
    }
}