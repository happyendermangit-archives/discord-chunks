function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var l = n("884691"),
        i = (e, t) => {
            let n = (0, l.useRef)(e);
            (0, l.useEffect)(() => {
                n.current = e
            }, [e]), (0, l.useEffect)(() => {
                if (null === t) return;
                let e = setTimeout(() => n.current(), t);
                return () => clearTimeout(e)
            }, [t, n])
        }
}