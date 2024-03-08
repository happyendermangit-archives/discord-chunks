function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("884691");

    function l(e) {
        let [t, n] = (0, i.useState)(() => window.matchMedia(e).matches);
        return (0, i.useEffect)(() => {
            let t = window.matchMedia(e),
                i = e => {
                    n(null == e ? void 0 : e.matches)
                };
            return i(t), t.addListener(i), () => t.removeListener(i)
        }, [e]), t
    }
}