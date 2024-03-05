function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var l = n("884691");

    function i(e) {
        let [t, n] = (0, l.useState)(() => window.matchMedia(e).matches);
        return (0, l.useEffect)(() => {
            let t = window.matchMedia(e),
                l = e => {
                    n(null == e ? void 0 : e.matches)
                };
            return l(t), t.addListener(l), () => t.removeListener(l)
        }, [e]), t
    }
}