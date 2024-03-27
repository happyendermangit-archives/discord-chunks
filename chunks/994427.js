function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("470079"),
        r = n("409813"),
        s = n("45572");

    function a(e) {
        let [t, n] = i.useState(s.PurchaseState.WAITING);
        return i.useEffect(() => {
            null != e && e !== r.Step.REVIEW && t !== s.PurchaseState.WAITING && t !== s.PurchaseState.COMPLETED && n(s.PurchaseState.WAITING)
        }, [e, t, n]), [t, n]
    }
}