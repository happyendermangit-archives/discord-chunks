function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("884691");

    function s(e) {
        let [t, n] = (0, i.useState)(!1), s = (0, i.useRef)(e.current);
        return (0, i.useEffect)(() => {
            s.current = e.current
        }, [e]), (0, i.useEffect)(() => {
            let e = s.current;
            if (null == e) return;
            let t = () => n(!0),
                i = () => n(!1);
            return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
            }
        }, [s]), t
    }
}