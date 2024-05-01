function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("699581");

    function s() {
        let [, e] = (0, i.useState)(0);
        return (0, i.useCallback)(() => (0, r.flushSync)(() => e(e => e + 1)), [])
    }
}