function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("884691"),
        l = n("775560"),
        a = n("862337");

    function s(e, t) {
        let [n, s] = (0, i.useState)(e), r = (0, l.useLazyValue)(() => new a.Timeout);
        (0, i.useEffect)(() => () => r.stop(), [r]);
        let o = (0, i.useCallback)(n => {
            s(n), n !== e && r.start(t, () => s(e))
        }, [t, e, r]);
        return [n, o]
    }
}