function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("47120");
    var i = n("470079");

    function r() {
        let [e, t] = i.useState(null), n = i.useRef(null);
        return i.useEffect(() => {
            null != e && null != n.current && n.current.scrollIntoView({
                behavior: "smooth"
            })
        }, [e]), {
            purchaseError: e,
            setPurchaseError: t,
            purchaseErrorBlockRef: n
        }
    }
}