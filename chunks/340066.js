function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("884691"),
        l = (e, t) => {
            let n = (0, i.useRef)(e);
            (0, i.useEffect)(() => {
                n.current = e
            }, [e]), (0, i.useEffect)(() => {
                if (null === t) return;
                let e = setTimeout(() => n.current(), t);
                return () => clearTimeout(e)
            }, [t, n])
        }
}