function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var l = n("884691"),
        i = n("775560"),
        a = n("862337");

    function s(e, t) {
        let [n, s] = (0, l.useState)(e), r = (0, i.useLazyValue)(() => new a.Timeout);
        (0, l.useEffect)(() => () => r.stop(), [r]);
        let o = (0, l.useCallback)(n => {
            s(n), n !== e && r.start(t, () => s(e))
        }, [t, e, r]);
        return [n, o]
    }
}