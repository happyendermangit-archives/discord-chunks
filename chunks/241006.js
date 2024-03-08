function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("884691");

    function u() {
        let [t, e] = i.useState(null), n = i.useRef(null);
        return i.useEffect(() => {
            null != t && null != n.current && n.current.scrollIntoView({
                behavior: "smooth"
            })
        }, [t]), {
            purchaseError: t,
            setPurchaseError: e,
            purchaseErrorBlockRef: n
        }
    }
}