function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("884691"),
        a = n("244201");

    function s(e) {
        let {
            renderWindow: t
        } = (0, i.useContext)(a.default), [n, s] = (0, i.useState)(() => t.matchMedia(e).matches);
        return (0, i.useEffect)(() => {
            let n = t.matchMedia(e),
                i = e => {
                    s(null == e ? void 0 : e.matches)
                };
            return i(n), n.addListener(i), () => n.removeListener(i)
        }, [e, t]), n
    }
}