function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("470079"),
        r = n("512722"),
        s = n.n(r);

    function a(e, t) {
        let n = (0, i.useRef)(e);
        (0, i.useEffect)(() => {
            n.current = e
        }, [e]), (0, i.useEffect)(() => {
            if (null === t) return;
            let e = setInterval(function() {
                s()(null != n.current, "Missing callback"), n.current()
            }, t);
            return () => clearInterval(e)
        }, [t])
    }
}