function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var i = n("884691"),
        r = n("817736");

    function o() {
        let [, e] = (0, i.useState)(0);
        return (0, i.useCallback)(() => (0, r.flushSync)(() => e(e => e + 1)), [])
    }
}