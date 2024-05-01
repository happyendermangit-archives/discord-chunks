function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("409813"),
        a = n("45572");

    function s(e) {
        let [t, n] = i.useState(a.PurchaseState.WAITING);
        return i.useEffect(() => {
            null != e && e !== r.Step.REVIEW && t !== a.PurchaseState.WAITING && t !== a.PurchaseState.COMPLETED && n(a.PurchaseState.WAITING)
        }, [e, t, n]), [t, n]
    }
}