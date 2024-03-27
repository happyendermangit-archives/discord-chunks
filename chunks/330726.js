function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("470079"),
        r = n("207561"),
        s = n("846519");

    function a(e, t) {
        let [n, a] = (0, i.useState)(e), o = (0, r.useLazyValue)(() => new s.Timeout);
        return (0, i.useEffect)(() => () => o.stop(), [o]), [n, (0, i.useCallback)(n => {
            a(n), n !== e && o.start(t, () => a(e))
        }, [t, e, o])]
    }
}