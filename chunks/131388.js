function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("470079"),
        r = n("40851");

    function a(e) {
        let {
            renderWindow: t
        } = (0, i.useContext)(r.default), [n, a] = (0, i.useState)(() => t.matchMedia(e).matches);
        return (0, i.useEffect)(() => {
            let n = t.matchMedia(e),
                i = e => {
                    a(null == e ? void 0 : e.matches)
                };
            return i(n), n.addListener(i), () => n.removeListener(i)
        }, [e, t]), n
    }
}