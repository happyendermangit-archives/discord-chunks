function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007");
    var l = n("884691"),
        i = n("244201");

    function a(e) {
        let {
            renderWindow: t
        } = (0, l.useContext)(i.default), [n, a] = (0, l.useState)(() => t.matchMedia(e).matches);
        return (0, l.useEffect)(() => {
            let n = t.matchMedia(e),
                l = e => {
                    a(null == e ? void 0 : e.matches)
                };
            return l(n), n.addListener(l), () => n.removeListener(l)
        }, [e, t]), n
    }
}