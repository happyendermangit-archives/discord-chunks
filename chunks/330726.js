function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("207561"),
        a = n("846519");

    function s(e, t) {
        let [n, s] = (0, i.useState)(e), o = (0, r.useLazyValue)(() => new a.Timeout);
        return (0, i.useEffect)(() => () => o.stop(), [o]), [n, (0, i.useCallback)(n => {
            s(n), n !== e && o.start(t, () => s(e))
        }, [t, e, o])]
    }
}