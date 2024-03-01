function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    }), r("222007"), r("808653"), r("424973");
    var n = r("884691"),
        u = (e, t) => {
            let [r, u] = n.useState(-1), o = n.useRef(-1);
            return n.useEffect(() => {
                let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
                u(t.length), o.current = t.length
            }, [e, o, u]), n.useEffect(() => {
                0 === r && t()
            }, [r, t]), {
                pending: r,
                pendingRef: o,
                setPending: u
            }
        }
}